import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
    baseURL:`https://pro-fast-server-steel.vercel.app`

})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;