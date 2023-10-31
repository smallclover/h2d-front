<template>
    <div>
        <ElRow justify="center">
            <ElCol :span="12" style="text-align: center">
                <ElImage style="width: 80px; height: 80px" :src="url" :fit="'fill'" />
            </ElCol>
        </ElRow>
        <ElRow justify="center" style="text-align: center">
            <ElCol :span="12"><h1>History2Data</h1></ElCol>
        </ElRow>
        <ElRow justify="center">
            <ElCol :span="12">
                <ElInput v-model="searchContent" placeholder="请输入内容" size="large">
                    <template #append>
                        <ElButton size="large" @click="search" @keydown.enter="search()">
                            检索
                        </ElButton>
                    </template>
                </ElInput>
            </ElCol>
        </ElRow>
    </div>
</template>
<script setup lang="ts">
import router from '@/router'
import { onMounted, ref } from 'vue'

const url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const searchContent = ref('')

const keydown = (e: { keyCode: number }) => {
    if (e.keyCode == 13) {
        search()
    }
}

onMounted(() => {
    window.addEventListener('keydown', keydown)
})

function search() {
    router.push({ path: 'result', query: { personName: searchContent.value } })
}
</script>
