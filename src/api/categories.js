import axios from "axios";
import { handlingResponse } from "./handlingResponse";

const header = {'Content-type': 'Application/json'};
const basicUrl = 'http://localhost:8080';

export const getCategories = async () => {
    let data;
    try {
        data = await axios({
            method: 'get',
            url: `${basicUrl}/categories`,
            headers: header,
        });
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};
