import axios from "axios";
const KEY = "AIzaSyD2iyqwqOTex68WYN2ZS1NPvOa5c0oYyB4";

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part : "snippet",
        maxResults : 100,
        key: KEY
    },
    headers : {}
})
