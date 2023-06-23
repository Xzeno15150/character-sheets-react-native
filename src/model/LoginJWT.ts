export type LoginJWT = {
    iss: string,
    upn: string,
    preferred_username: string,
    groups: Role[],
    iat: number,
    exp: number,
}