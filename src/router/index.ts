import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PersonDetails from '@/page/PersonDetails.vue'
import History2DataVue from '@/page/History2Data.vue'
import SearchResult from '@/page/SearchResult.vue'
import PersonRelation from '@/page/PersonRelation.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/person/:id',
        name: 'personDetails',
        component: PersonDetails,
    },
    {
        path: '/person/relation',
        name: 'personRelation',
        component: PersonRelation,
    },
    {
        path: '/result',
        name: 'searchResult',
        component: SearchResult,
    },
    {
        path: '/',
        name: 'history2data',
        component: History2DataVue,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
