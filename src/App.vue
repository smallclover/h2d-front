<script setup lang="ts">
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'
</script>

<template>
    <ElContainer>
        <ElHeader>
            <CommonHeader></CommonHeader>
        </ElHeader>
        <ElMain style="margin-top: 35px">
            <RouterView></RouterView>
        </ElMain>
        <ElFooter>
            <CommonFooter></CommonFooter>
        </ElFooter>
    </ElContainer>
</template>

<style scoped>
.el-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
}
</style>
