import axios from "axios";
import { LANGUAGES_VERSIONS } from './constants';

const API = axios.create
({
    baseURL: "/api/v2"
})

export const executeCode = async (language, sourceCode) =>
{
    const response = await API.post("/execute", {
        "language": language,
        "version": LANGUAGES_VERSIONS[language],
        "files": 
        [
            {
                content: sourceCode,
            }
        ]})
        return response.data;
}