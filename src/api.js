import axios from "axios";

const API = axios.create
({
    baseURL: "https://emkc.org/api/v2/piston"
})

export const executeCode = async (language, sourceCode) =>
{
    const response = await API.post("/execute", {
        "language": language,
        "version": LANGUAGES_VERSIONS[language],
        "files": 
        [
            {
                "name": "my_cool_code.js",
                "content": "console.log(process.argv)"
            }
        ]})
}