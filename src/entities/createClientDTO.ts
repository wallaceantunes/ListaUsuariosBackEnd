interface ICreateAddressDTO {
    address: string
    neighborhood: string
    city: string
    uf: string
}
export interface ICreateClientDTO {
    name: string
    email: string
    phone: string
    address: ICreateAddressDTO
}