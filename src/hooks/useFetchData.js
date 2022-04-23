import React, {useEffect, useState} from 'react';
import axios from "axios";

export const useFetchData = (url, initialState = null, axiosConfig) => {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url, axiosConfig);
            setData(response.data);
        }
        fetchData();
    }, [url, axiosConfig]);
    return data;
};

