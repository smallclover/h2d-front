export interface IPersonParams {
    personId: string | undefined
    personName: string | undefined
}

export interface IPersonApi {
    personDetail: (params: IPersonParams) => Promise<any>
    personList: (params: IPersonParams) => Promise<any>
    personRelation: () => Promise<any>
}
