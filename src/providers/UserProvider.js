import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

export const User = React.createContext(null);

const UserProvider = props => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/user/`);
            setData(response.data);
        }
        fetchData();
    }, []);

    return (
        <User.Provider value={data}>
            {props.children}
        </User.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node
};

export default UserProvider;