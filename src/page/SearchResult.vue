<template>
    <div>
        <ElTable :data="tableData" highlight-current-row :border="true" style="width: 100%">
            <ElTableColumn type="index" label="No" width="50" />
            <ElTableColumn prop="cpersonid" label="ID" width="100"></ElTableColumn>
            <ElTableColumn prop="cname" label="姓名（拼音）" width="200" />
            <ElTableColumn prop="cnameChn" label="姓名（汉字）" width="200" />
            <ElTableColumn prop="cflLyNotes" label="轨迹" />
            <ElTableColumn label="操作" width="300">
                <template #default="scope">
                    <ElButton link type="primary" size="small" @click="personDetail(scope.row)">
                        详细
                    </ElButton>
                </template>
            </ElTableColumn>
        </ElTable>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import personApi from '@/modules/person/personApi'
import { IPersonParams } from '@/modules/person/personTypes'
import { useRouter } from 'vue-router'
import router from '@/router'

// 表格展示的数据
interface TableData {
    cpersonid: string
    cname: string
    cnameChn: string
    cflLyNotes: string | undefined
}

const tableData = ref<TableData[]>([])

function personDetail(row: TableData) {
    router.push({ name: 'personDetails', params: { id: row.cpersonid } })
}

onMounted(async () => {
    const route = useRouter()
    const personName = route.currentRoute.value.query.personName?.toString()

    //let 声明的话拿到的是对象
    const personParams: IPersonParams = {
        personId: undefined,
        personName: personName,
    }
    try {
        const data = await personApi.personList(personParams).then((res) => {
            return res
        })
        tableData.value = data
    } catch (error) {
        console.log(error)
    }
})
</script>
