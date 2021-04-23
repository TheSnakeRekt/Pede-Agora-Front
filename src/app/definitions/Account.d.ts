export interface AccountLogin {
    password: string,
    token: string,
}

export interface AccountToken {
    access: boolean,
    account: Account
}

export interface Account {
    nome: string,
    telefone: string,
    email: string,
    nif: string,
    moradas: Morada[],
    token: string
}

export interface Morada{
    rua: string,
    codigoPostal: string,
    cidade: string,
    distrito: string,
    pais: string,
    latitude: string,
    longitude: string
}