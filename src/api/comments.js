import axios from "axios";
import { handlingResponse } from "./handlingResponse";

const header = {'Content-type': 'Application/json'};
const basicUrl = 'http://localhost:8080';

export const postComment = async (id, params) => {
    let data;
    try {
        data = await axios.post(`${basicUrl}/articles/${id}/comments`, params, header);
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};

export const getSingleComment = async (id, params) => {
    let data;
    try {
        data = await axios({
            method: 'get',
            url: `${basicUrl}/articles/${id}/comments/${params}`,
            headers: header,
        });
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};

export const getAllComments = async (idArticle, page, size) => {
    let data;
    try {
        data = await axios({
            method: 'get',
            url: `${basicUrl}/articles/${idArticle}/comments?offset=${page}&size=${size}`,
            headers: header,
        });
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};

export const editComment = async (idArticle, idComment, params) => {
    let data;
    try {
        data = axios.put(`${basicUrl}/articles/${idArticle}/comments/${idComment}`, params, header);
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};

export const deleteComment = async (idArticle, idComment) => {
    let data;
    try {
        data = await axios({
            method: 'delete',
            url: `${basicUrl}/articles/${idArticle}/comments/${idComment}`,
            headers: header,
        });
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};
