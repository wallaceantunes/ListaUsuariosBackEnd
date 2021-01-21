interface IUpdateAddressDTO {
    address: string
    neighborhood: string
    city: string
    uf: string
}
export interface IUpdateClientDTO {
    name: string
    email: string
    phone: string
    address: IUpdateAddressDTO
}