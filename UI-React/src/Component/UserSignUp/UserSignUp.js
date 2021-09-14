import { useState } from "react";
import './UserSignUp.css'

const UserSignUp = () => {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [data, setdata] = useState(null);
    const [usrMsg, setusrMsg] = useState('');



    const userAccountCreation = (e) => {
        e.preventDefault();
        const user_sign_up = { username, email, password };
        console.log('user_sign_up', user_sign_up);
        const url = 'http://localhost:2030/api/user/Register';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user_sign_up)
        }).then(res => {
            if (res.ok)
                return res.json();
            throw Error('Something went wrong');
        }).then(data => {
            console.log(data)
            setdata(data);
            setusrMsg(data.message);
        }).catch(err => {
            console.log('err', err);
        });

    }

    const showPassword = () => {
        var x = document.getElementById("password");
        console.log('x', x);
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }

        console.log('y', x);
    }


    return (
        <div className='user-account-container-signup'>
            <form className='user-account' onSubmit={userAccountCreation} >
                <div className='user-name'>
                    <label className='usr-acct-lbl'>User Name :</label>
                    <input type='text' placeholder='Enter the User Name' required value={username}
                        onChange={(e) => { setusername(e.target.value); setusrMsg(''); }} minLength='6' maxLength='15' className='usr-acct-input'></input>
                </div>
                <div>
                    <label className='usr-acct-lbl'>Email :</label>
                    <input type='email' placeholder='Enter your email' required value={email}
                        onChange={(e) => { setemail(e.target.value); setusrMsg(''); }} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        minLength='6' className='usr-acct-input'></input>
                </div>
                <div>
                    <label className='usr-acct-lbl'>Password :</label>
                    <input type='password' placeholder='Enter your password' required value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
                        className='usr-acct-input' id='password'></input>
                    <input type='checkbox' className='show-password-signup' onClick={showPassword}></input>Show Password
                </div>
                <div>
                    <button className='btn-user-submit' type='submit'>Sign Up</button>
                    {usrMsg && <textarea disabled rows='2' cols='30' className='usr-message' type='text' value={usrMsg.includes('been') ? usrMsg + ' Please do Login to use our Service.' : usrMsg}></textarea>}
                </div>
            </form>
        </div>
    );
}

export default UserSignUp;