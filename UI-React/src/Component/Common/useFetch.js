import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [msgload, setmsgload] = useState(null);
    const [err, seterr] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    //console.log(res.json());
                    return res.json();
                }
                throw Error("error");
            })
            .then(data => {
                setmsgload("Loading Data");
                console.log("loc", data.location_data);
                console.log("loc1", data);
                setdata(data.location_data);
                setmsgload(null)
            })
            .catch(err => {
                console.log(err);
                seterr(err.message);
            })
    }, [url]);

    return { data, msgload, err }

}

export default useFetch;