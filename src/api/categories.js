import axios from "axios";
import { handlingResponse } from "./handlingResponse";

export const getCategories = async () => {
    let data;
    try {
        data = await axios({
            method: 'get',
            url: '/categories',
            headers: 'Application/json',
        });
        return handlingResponse(data);
    } catch (error) {
        return handlingResponse(error);
    }
};
