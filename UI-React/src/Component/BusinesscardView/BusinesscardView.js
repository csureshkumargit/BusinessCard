import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './BusinesscardView.css';


const BusinesscardView = ({ email, companyName }) => {
    let business_card_view = {};

    email && (business_card_view["email"] = email);
    companyName && (business_card_view["companyName"] = companyName);

    console.log(email, companyName, business_card_view)

    const url = 'http://localhost:2030/api/cardlogo/viewCardlogo';
    console.log('url1', url);

    const [data, setdata] = useState(null);
    const [userinfofld, setuserinfofld] = useState(false);

    useEffect(() => {
        console.log('url2', url);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'access-token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
            },
            body: JSON.stringify(business_card_view)
        }).then(res => {
            if (res.ok)
                return res.json();
            if (res.status === 401)
                setuserinfofld(true);
        }).then(data => {
            console.log('data', data);
            setdata(data);
        }).catch(err => {
            console.log(err);
        });
    }, [email, companyName])


    return (
        <div className='businesscard-view'>
            {
                data && data.map((data_map) => (
                    <div className='business-card' id='business-card' key={data_map._id}>
                        <div className='company-Name'>
                            <div className='company-logo'>
                                <img src={data_map.photo} alt={data_map.photo} ></img>
                            </div>
                            <div className='card-detail-brand'>
                                <span >{data_map.companyName}</span>
                            </div>
                        </div>
                        <div className='company-Address'>
                            <strong class="fas fa-map-marked-alt card-icon"></strong>
                            <span className='card-detail'>{data_map.address}</span>

                        </div>
                        <div className='company-Contact'>
                            <strong class="fas fa-mobile card-icon"></strong>
                            <span className='card-detail-phn'>{data_map.phoneNumber}</span><br />
                            <span className='card-detail-alt-phn'>{data_map.altphoneNumber}</span>
                        </div>
                        <div className='company-Email'>
                            <strong class="fas fa-envelope card-icon"></strong>
                            <span className='card-detail'>{data_map.email}</span>
                        </div>
                        <div className='company-Website'>
                            <strong class="fas fa-globe card-icon"></strong>
                            <span className='card-detail'>{`www.${data_map.companyName}.com`}</span>
                        </div>
                        <br />
                        <Link to={`/delete/${data_map._id}`}><button type='submit' className='btn-user-card-view btn-delete'>Delete</button></Link>
                        <button className='btn-user-card-view Print-download' cardId={data_map._id}>Print/Download</button>
                        <Link to={`/update/${data_map._id}`}><button className='btn-user-card-view btn-update' cardId={data_map._id}>Edit</button></Link>
                        <br />
                        <br />
                        <br />
                        <hr></hr>
                    </div>

                ))
            }
            {userinfofld && <div className='bsns-del-msg'>You are not authorized to view/update this card.Please make sure your authorization.
            </div>}
            {userinfofld && <div>
                <Link to='/'><button type='submit' className='btn-Home'>Click to go Home</button></Link>
            </div>}
        </div>
    );
}

export default BusinesscardView;