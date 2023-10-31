import http from '@/services/http'
import * as T from '@/modules/person/personTypes'

const personApi: T.IPersonApi = {
    personDetail(params) {
        return http.get('/person/' + params.personId)
    },
    personList(params) {
        return http.get('/search', params)
    },
    personRelation() {
        return http.get('/relation')
    },
}

export default personApi
