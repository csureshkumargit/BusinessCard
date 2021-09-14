import { useState } from "react";
import BusinesscardView from "../BusinesscardView/BusinesscardView";
import './BusinesscardViewByBrand.css'

const BusinesscardViewByBrand = () => {

    const [email, setemail] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [vwbsnscrdbybrand, setvwbsnscrdbybrand] = useState(false);

    const setbsncardvwbybrand = (e) => {
        e.preventDefault();
        setvwbsnscrdbybrand(true);
        //setvwbsnscrdbybrand(false);
    }
    return (
        <div className='business-card-brand'>
            <form onSubmit={setbsncardvwbybrand} className='business-card-view-brand-frm'>
                <div>
                    <label className='bsns-brand-lbl'>Email :</label>
                    <input type='email' value={email} onChange={(e) => {
                        setemail(e.target.value); setvwbsnscrdbybrand(false);
                    }} required className='bsns-brand-input'></input>
                </div>
                <div>
                    <label className='bsns-brand-lbl'>Company Name :</label>
                    <input type='text' value={companyName} onChange={(e) => { setcompanyName(e.target.value); setvwbsnscrdbybrand(false); }} required
                        className='bsns-brand-input'></input>
                </div>
                <div>
                    <button type='submit' className='businesscard-btn-brand'>Search</button>
                </div>
            </form>
            {vwbsnscrdbybrand && <BusinesscardView email={email} companyName={companyName} />
            }
        </div>
    );
}

export default BusinesscardViewByBrand;