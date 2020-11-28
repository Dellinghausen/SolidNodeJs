export interface IGetUserDTO{
    id: string
    name: string
    email: string
}

export interface IGetUsersResponseDTO extends Array<IGetUserDTO>{}