import React from "react";
import axios from "axios";

class ProtocolManager {

    BuildItBootstrapAPI = `https://675f9e9e1f7ad2426998c81e.mockapi.io/BuildItBootstrap/users`;

    get = async (endpoint) => {
        try {
            const response = await axios.get(`${this.BuildItBootstrapAPI}/${endpoint}`)
            console.log("initial response from axios.get (Within Protocol Manager) == ", response);
            console.log("response.data from axios.get (Within Protocol Manager) == ", response.data);
            return await (response.data);
        } catch (e) {
            console.log(`error getting BuildItBootstrapAPI/${endpoint}: `, e);
        }
    };

    post = async (endpoint) => {
        try {
            const response = await axios.post(`${this.BuildItBootstrapAPI}/${endpoint}`);
            return (response);
        } catch (e) {
            console.log(`error posting to BuildItBootstrapAPI/${endpoint}: `, e);
        }
    };


    put = async (endpoint, input) => {
        try {
            const response = await axios.put(`${this.BuildItBootstrapAPI}/${endpoint}`[input]);
            return (response);
        } catch (e) {
            console.log(`error while updating BuildItBootstrapAPI/${endpoint}: `, e);
        }
    };

    delete = async (endpoint) => {
        try {
            const response = await axios.delete(`${this.BuildItBootstrapAPI}/${endpoint}`);
            return (response);
        } catch (e) {
            console.log(`error while deleting item at BuildItBootstrapAPI/${endpoint}: `, e);
        }
    };
}

export const protocolManager = new ProtocolManager();