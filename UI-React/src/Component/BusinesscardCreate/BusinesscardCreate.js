import { useState } from "react";
import BusinesscardView from "../BusinesscardView/BusinesscardView";
import FileBase64 from "react-file-base64";
import './BusinesscardCreate.css'


const BusinesscardCreate = () => {
    const [memberName, setmemberName] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [photo, setphoto] = useState(null);
    const [phoneNumber, setphoneNumber] = useState('');
    const [altphoneNumber, setaltphoneNumber] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [isFormSubmit, setisFormSubmit] = useState(false);
    const [sbmtbtndesc, setsbmtbtndesc] = useState('Add Card');
    const [vwbsnscrd, setvwbsnscrd] = useState(false);
    var createdOn = new Date();


    const addBusinessCard = (e) => {
        e.preventDefault();
        const businesscard = { createdOn, memberName, companyName, phoneNumber, altphoneNumber, email, address, photo };
        console.log(businesscard);
        fetch('http://localhost:2030/api/cardlogo/createCardlogo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'access-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
            },
            body: JSON.stringify(businesscard)
        }).then(res => {
            if (res.status === 200) {
                setisFormSubmit(true);
                setsbmtbtndesc('Card Added !!!');
            }
            if (res.status === 401) {
                setisFormSubmit(false);
                setsbmtbtndesc('Access Denied.Please do Register/Login.');
            }
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <div className='business-card-create'>
            <form onSubmit={addBusinessCard} className='business-card-create-frm'>
                <table>
                    <tr>
                        <td><label className='bsns-create-lbl'>Name :</label></td>
                        <td><input type='text' value={memberName} required min='6'
                            max='255' onChange={(e) => setmemberName(e.target.value)}
                            className='bsns-create-input'></input></td>
                    </tr>
                    <tr>
                        <td><label className='bsns-create-lbl'>Company Name :</label></td>
                        <td><input type='text' value={companyName} required min='6'
                            max='255' onChange={(e) => setcompanyName(e.target.value)}
                            className='bsns-create-input'></input></td>
                    </tr>
                    <tr>
                        <td>
                            <label className='bsns-create-lbl' >Please upload file :</label>
                        </td>
                        <td>
                            <FileBase64
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setphoto({ base64 })}
                                className='bsns-create-file-upload'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='bsns-create-lbl'>Phone Number :</label>
                        </td>
                        <td>
                            <input type='text' value={phoneNumber} required onChange={(e) => setphoneNumber(e.target.value)}
                                className='bsns-create-input'></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='bsns-create-lbl'>alternate phoneNumber :</label>
                        </td><td>
                            <input type='text' value={altphoneNumber} required onChange={(e) => setaltphoneNumber(e.target.value)}
                                className='bsns-create-input'></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='bsns-create-lbl'>Email :</label>
                        </td>
                        <td>
                            <input type='email' value={email} required onChange={(e) => setemail(e.target.value)}
                                className='bsns-create-input'></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='bsns-create-lbl'>Address :</label>
                        </td>
                        <td>
                            <textarea type='text' value={address} required rows='2' cols='30' onChange={(e) => setaddress(e.target.value)} className='bsns-user-adrs'></textarea>
                        </td>
                    </tr>
                </table>
                {!isFormSubmit && <button type='submit' className='btn-user-submit-bsns-create'>{sbmtbtndesc}</button>}
                {isFormSubmit && <div><button type='submit' disabled className='btn-user-submit-bsns-create'>{sbmtbtndesc}</button> <br></br>
                    <button type='button' onClick={() => setvwbsnscrd(true)} className='btn-user-submit-bsns-create'>View Card</button>
                    <br></br></div>}
            </form>
            {vwbsnscrd && <BusinesscardView email={email} />
            }

        </div>

    );
}

export default BusinesscardCreate;