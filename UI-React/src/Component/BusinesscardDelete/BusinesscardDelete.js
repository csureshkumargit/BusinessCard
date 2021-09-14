import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './BusinesscardDelete.css';

const BusinesscardDelete = () => {

    const { bsnsid } = useParams();
    const url = 'http://localhost:2030/api/cardlogo/deleteCardlogo/' + bsnsid;
    const [data, setdata] = useState(null);
    const [userinfofld, setuserinfofld] = useState(false);

    useEffect(() => {
        console.log('url2', url);
        fetch(url, {
            method: 'DELETE',
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
            console.log('data', data);
        }).catch(err => {
            console.log(err);
        });
    }, [url])



    return (
        <div className='bsns-card-del'>
            {data && <div className='bsns-del-msg'>Your Business card has been deleted.Thanks for using our service.
            </div>}
            {userinfofld && <div className='bsns-del-msg'>You are not authorized to delete this card.Please make sure your authorization.
            </div>}
            {userinfofld && <div>
                <Link to='/'><button type='submit' className='btn-Home'>Click to go Home</button></Link>
            </div>}
            {data && <div>
                <Link to='/'><button type='submit' className='btn-Home'>Click to go Home</button></Link>
            </div>}
        </div>
    );
}

export default BusinesscardDelete;