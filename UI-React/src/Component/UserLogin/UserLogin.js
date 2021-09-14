import { useState } from "react";
import './UserLogin.css';



const UserLogin = () => {
    //var reqLogin = window.locat
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [data, setdata] = useState(null);
    const [usrMsg, setusrMsg] = useState('');


    const userLoginAccount = (e) => {
        e.preventDefault();
        const user_login = { username, email, password };
        console.log('user_login', user_login);
        let url = 'http://localhost:2030/api/user/Login';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user_login)
        }).then(res => {
            if (res.ok)
                return res.json();
            throw Error('Something went wrong');
        }).then(data => {
            console.log(data)
            setdata(data);
            setusrMsg(data.message);
            localStorage.setItem('token', data.jwt);
        }).catch(err => {
            console.log('err', err);
        });

    }

    const showPassword = () => {
        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }

        console.log('y', x);
    }


    return (
        <div className='user-account-container'>
            <form className='user-account' onSubmit={userLoginAccount} >
                <div className='user-name'>
                    <label className='usr-acct-lbl'>User Name :</label>
                    <input type='text' placeholder='Enter the User Name' required value={username}
                        onChange={(e) => { setusername(e.target.value); setusrMsg(''); }} minLength='6' maxLength='15'
                        className='usr-acct-input'></input>
                </div>
                <div>
                    <label className='usr-acct-lbl'>Email :</label>
                    <input type='email' placeholder='Enter your email' required value={email}
                        onChange={(e) => { setemail(e.target.value); setusrMsg(''); }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        minLength='6' className='usr-acct-input'></input>
                </div>
                <div>
                    <label className='usr-acct-lbl'>Password :</label>
                    <input className='usr-acct-input' type='password' placeholder='Enter your password' required value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        id='password'
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"></input>
                    <input type='checkbox' className='show-password-signup' onClick={showPassword}></input>Show Password

                </div>
                <div>
                    <button className='btn-user-submit' type='submit' >Login</button>
                    {usrMsg && <textarea disabled className='usr-message' type='text' value={usrMsg.includes('been') ? usrMsg + '. Please use our Service.' : usrMsg}></textarea>}
                </div>
            </form>
        </div >
    );
}


export default UserLogin;