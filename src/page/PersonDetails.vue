<template>
    <div>
        <h1>{{ data.cnameChn }}({{ data.cname }})</h1>
        <p>字 {{ data.altNameChn }}</p>
        <ElDivider />
        <ElRow justify="center">
            <ElCol :span="4">
                <ElCard :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    />
                    <div style="padding: 14px">
                        <span>人物关系</span>
                        <div class="bottom">
                            <time class="time">xxxx</time>
                            <ElButton text class="button" @click="personRelation"> 查看 </ElButton>
                        </div>
                    </div>
                </ElCard>
            </ElCol>
            <ElCol :span="4" :offset="1">
                <ElCard :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    />
                    <div style="padding: 14px">
                        <span>人物状态</span>
                        <div class="bottom">
                            <time class="time">xxxx</time>
                            <ElButton text class="button">Operating</ElButton>
                        </div>
                    </div>
                </ElCard>
            </ElCol>
            <ElCol :span="4" :offset="1">
                <ElCard :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    />
                    <div style="padding: 14px">
                        <span>入仕状态</span>
                        <div class="bottom">
                            <time class="time">xxxx</time>
                            <ElButton text class="button">Operating</ElButton>
                        </div>
                    </div>
                </ElCard>
            </ElCol>
            <ElCol :span="4" :offset="1">
                <ElCard :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image"
                    />
                    <div style="padding: 14px">
                        <span>其他</span>
                        <div class="bottom">
                            <time class="time">xxxx</time>
                            <ElButton text class="button"> 查看 </ElButton>
                        </div>
                    </div>
                </ElCard>
            </ElCol>
        </ElRow>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import personApi from '@/modules/person/personApi'
import { IPersonParams } from '@/modules/person/personTypes'
import { onMounted, ref } from 'vue'
import router from '@/router'

const data = ref({
    cpersonid: '1',
    cnameChn: 'wangshun',
    altNameChn: '',
})

onMounted(async () => {
    let { id } = useRoute().params

    const params: IPersonParams = {
        personId: id.toString(),
        personName: undefined,
    }

    data.value = await personApi.personDetail(params).then((res) => {
        return res
    })
})

function personRelation() {
    router.push({ name: 'personRelation' })
}
</script>

<style>
.image {
    width: 100%;
    display: block;
}
</style>
