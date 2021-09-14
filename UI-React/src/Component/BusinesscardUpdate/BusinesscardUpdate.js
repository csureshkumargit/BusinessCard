import { useParams } from "react-router";
import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import BusinesscardView from "../BusinesscardView/BusinesscardView";
import './BusinesscardUpdate.css';
import { Link } from "react-router-dom";

const BusinesscardUpdate = () => {

    const { bsnsid } = useParams();
    const [memberName, setmemberName] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [photo, setphoto] = useState(null);
    const [phoneNumber, setphoneNumber] = useState('');
    const [altphoneNumber, setaltphoneNumber] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [isFormSubmit, setisFormSubmit] = useState(false);
    const [sbmtbtndesc, setsbmtbtndesc] = useState('Save Changes');
    const [vwbsnscrd, setvwbsnscrd] = useState(false);
    const [userinfofld, setuserinfofld] = useState(false);


    const url = 'http://localhost:2030/api/cardlogo/getCardlogo/' + bsnsid;
    console.log(url);
    const [data, setdata] = useState(null);
    //var { memberName, companyName, phoneNumber, altphoneNumber, email, address, photo } = data;

    useEffect(() => {
        console.log('url2', url);
        fetch(url, {
            method: 'GET',
            headers: {
                'access-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
            }
        }).then(res => {
            if (res.ok)
                return res.json();
            if (res.status === 401)
                setuserinfofld(true);
        }).then(data => {
            console.log('data', data);
            setdata(data);
            updatedata(data);
            console.log('data', data);
        }).catch(err => {
            console.log(err);
        });
    }, [url])

    const updatedata = (data) => {
        setmemberName(data.memberName);
        setcompanyName(data.companyName);
        setphoneNumber(data.phoneNumber);
        setaltphoneNumber(data.altphoneNumber);
        setemail(data.email);
        setaddress(data.address)
        setphoto(data.photo);
        console.log(data);
    }

    const saveupdatedcard = (e) => {
        e.preventDefault();
        const business_card = { memberName, companyName, phoneNumber, altphoneNumber, email, address, photo };
        console.log('card', business_card);
        const url_upd = 'http://localhost:2030/api/cardlogo/updateCardlogo/' + bsnsid;
        console.log(url_upd);
        fetch(url_upd, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(business_card)
        }).then(res => {
            console.log(res);
            setisFormSubmit(true);
            setsbmtbtndesc('Card Updated !!!')
        }).catch(err => {
            console.log(err);
        });

    }

    return (
        <div className='business-card-update'>
            {
                data &&
                <form key={data._id} onSubmit={saveupdatedcard} className='business-card-update-frm'>
                    <table>
                        <tr>
                            <td><label className='bsns-update-lbl'>Name :</label></td>
                            <td><input type='text' value={memberName} required min='6'
                                max='255' onChange={(e) => setmemberName(e.target.value)}
                                className='bsns-update-input'></input></td>
                        </tr>
                        <tr>
                            <td><label className='bsns-update-lbl'>Company Name :</label></td>
                            <td><input type='text' value={companyName} required min='6'
                                max='255' onChange={(e) => setcompanyName(e.target.value)}
                                className='bsns-update-input'></input></td>
                        </tr>
                        <tr>
                            <td>
                                <td><label className='bsns-update-lbl'>Company Logo :</label></td>
                            </td>
                            <td>
                                <img src={photo} alt={photo} className='bsns-retrv-logo'></img>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className='bsns-update-lbl'>Please upload file if you want to change logo:</label>
                            </td>
                            <td>
                                <FileBase64
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) => setphoto({ base64 })}


                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className='bsns-update-lbl'>Phone Number :</label>
                            </td>
                            <td>
                                <input type='text' value={phoneNumber} required
                                    onChange={(e) => setphoneNumber(e.target.value)}
                                    className='bsns-update-input'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className='bsns-update-lbl'>alternate phoneNumber :</label>
                            </td><td>
                                <input type='text' value={altphoneNumber} required
                                    onChange={(e) => setaltphoneNumber(e.target.value)}
                                    className='bsns-update-input'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className='bsns-update-lbl'>Email :</label>
                            </td>
                            <td>
                                <input type='email' value={email} required
                                    onChange={(e) => setemail(e.target.value)}
                                    className='bsns-update-input'></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className='bsns-update-lbl'>Address :</label>
                            </td>
                            <td>
                                <textarea type='text' value={address} required rows='2' cols='30'
                                    onChange={(e) => setaddress(e.target.value)} className='bsns-user-adrs'></textarea>
                            </td>
                        </tr>
                    </table>
                    {!isFormSubmit && <button type='submit' className='btn-user-submit-bsns-update'>{sbmtbtndesc}</button>}
                    {isFormSubmit && <div><button type='submit' disabled className='btn-user-submit-bsns-update'>{sbmtbtndesc}</button> <br></br>
                        <button type='button' onClick={() => setvwbsnscrd(true)} className='btn-user-submit-bsns-update'>View Card</button>
                        <br></br></div>}

                </form>


            }
            {vwbsnscrd && <BusinesscardView email={email} />
            }
            {userinfofld && <div className='bsns-del-msg'>You are not authorized to update this card.Please make sure your authorization.
            </div>}
            {userinfofld && <div>
                <Link to='/'><button type='submit' className='btn-Home'>Click to go Home</button></Link>
            </div>}

        </div>
    );
}

export default BusinesscardUpdate;