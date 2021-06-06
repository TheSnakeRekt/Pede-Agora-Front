export interface AccountLogin {
    password: string
}

export interface AccountToken {
    access: boolean,
    error?: string,
    account: Account
}

export interface Account {
    nome: string,
    telefone: string,
    email: string,
    nif: string,
    moradas: Morada[],
    token: string,
    verified: boolean,
    verifiedMail: boolean,
}

export interface Morada{
    type: string;
    name: string;
    rua: string,
    codigoPostal: string,
    cidade: string,
    distrito: string,
    pais: string,
    latitude: string,
    longitude: string
}