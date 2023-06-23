import HTTPMethod from "./HTTTPMethod";
import { getItem } from "./asyncStorageAcess";
//@ts-ignore
import {BACK_URL} from "react-native-dotenv";

export function createRequest(url: string, method: HTTPMethod, body: {}, headers?: Headers): Request {
    headers ??= new Headers;
    headers.append('Content-Type', 'application/json')
    
    return new Request(BACK_URL + url, {
        headers: headers,
        method: method,
        body: JSON.stringify(body)
    })
}

export default function createRequestWithStoredJWT(url: string, method: HTTPMethod, body: {}): Request | undefined {
    // @ts-ignore
    let request = undefined;

    getItem("jwt")
        .then((value: string) => new Headers({ Authorization: `Bearer ${value}` }))
        .then((headers: Headers) => {
            request = createRequest(url, method, body, headers)
        })
        .catch(error => console.log("An error occured while requesting jwt token", error))

    return request;
}