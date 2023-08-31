import request from "../utils/request.ts";
import {LoginFieldType} from "../types/user.ts";

export const login = async (data: LoginFieldType) => request({
    url: '/api/user/login',
    method: 'post',
    data
})