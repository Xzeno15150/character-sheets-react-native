import HTTPMethod from "./HTTTPMethod";

export function getRequest(url : string, method : HTTPMethod, body : JSON, headers : Headers) {
    headers.append('Content-Type', 'application/json')

    return new Request(process.env.BACK_URL + url, {
        headers: headers,
        method: method,
        body: JSON.stringify(body)
    })
}