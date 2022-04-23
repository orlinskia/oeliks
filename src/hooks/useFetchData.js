import React, {useEffect, useState} from 'react';
import axios from "axios";

export const useFetchData = (url, initialState = null) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            setData(response.data);
        }
        fetchData();
    }, [url]);
    return data;
};

