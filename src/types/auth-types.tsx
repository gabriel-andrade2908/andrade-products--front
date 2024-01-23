export interface LoginResponse {
    accessToken: string,
    userToken: LoginUserToken
}

export interface LoginUserToken {
    claims: Claims[]
}

export interface Claims {
    value: string,
    type: string
}