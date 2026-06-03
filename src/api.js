import axios from "axios";
import { LANGUAGES_VERSIONS } from './constants';

const API = axios.create
({
    baseURL: "http://localhost:2000/api/v2/piston"
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