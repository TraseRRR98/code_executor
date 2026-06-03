import axios from "axios";
import { LANGUAGES_VERSIONS, FILE_EXTENSIONS } from './constants';

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
                name: FILE_EXTENSIONS[language],
                content: sourceCode,
            }
        ]})
        return response.data;
}