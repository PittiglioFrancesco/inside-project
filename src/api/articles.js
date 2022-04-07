import axios from "axios";
import { handlingResponse } from "./handlingResponse";

// `

const header = {'Content-type': 'Application/json'};
const basicUrl = 'http://localhost:8080';

export const postArticle = async (params) => {
    let data;
    try {
        data = await axios.post(`${basicUrl}/articles`, params, header);
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};

export const getArticle = async (params) => {
    let data;
    try {
        data = await axios({
            method: 'get',
            url: `${basicUrl}/articles/${params}`,
            headers: header,
        });
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};

export const getAllArticles = async (page, size) => {
    let data;
    try {
        data = await axios({
            method: 'get',
            url: `${basicUrl}/articles?offset=${page}&size=${size}`,
            headers: header,
        });
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};

export const editArticle = async (id, params) => {
    let data;
    try {
        data = axios.put(`${basicUrl}/articles/${id}`, params, header);
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};

export const deleteArticle = async (params) => {
    let data;
    try {
        data = await axios({
            method: 'delete',
            url: `${basicUrl}/articles/${params}`,
            headers: header,
        });
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};
