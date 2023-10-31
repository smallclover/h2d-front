<template>
    <figure class="fig">
        <VChart
            class="chart"
            :option="option"
            :loading="loading"
            :loading-options="loadingOptions"
            autoresize
        />
    </figure>
</template>
<script setup lang="ts">
import { use } from 'echarts/core'
import { GraphChart } from 'echarts/charts'
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([GridComponent, TitleComponent, TooltipComponent, LegendComponent, GraphChart, CanvasRenderer])

import VChart, { THEME_KEY } from 'vue-echarts'
import { onMounted, ref, provide, reactive, shallowRef } from 'vue'
import personApi from '@/modules/person/personApi'

const loadingOptions = {
    text: 'Loading…',
    color: '#4ea397',
    maskColor: 'rgba(255, 255, 255, 0.4)',
}
const loading = shallowRef(false)
const option = ref({})
// 请求超时问题
onMounted(async () => {
    // let { id } = useRoute().params
    // const params: IPersonParams = {
    //     personId: id.toString(),
    //     personName: undefined,
    // }
    // data.value = await personApi.personDetail(params).then((res) => {
    //     return res
    // })
    loading.value = true
    const result = await personApi.personRelation().then((res) => {
        return res
    })
    // testResult.categories = result.categories
    // testResult.nodes = result.nodes
    // testResult.links = result.links
    // console.log(testResult)
    option.value = {
        title: {
            text: '人物关系图',
            top: 'bottom',
            left: 'right',
        },
        tooltip: {},
        legend: [
            {
                data: result.categories.map(function (a) {
                    return a.name
                }),
            },
        ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                name: '人际关系网络图',
                type: 'graph',
                layout: 'force',
                data: result.nodes,
                links: result.links,
                categories: result.categories,
                // itemStyle: {
                //     color: {
                //         type: 'radial',
                //         x: 0.5,
                //         y: 0.5,
                //         r: 0.5,
                //         colorStops: [
                //             {
                //                 offset: 0,
                //                 color: '#3dd67a', // 0% 处的颜色
                //             },
                //             {
                //                 offset: 0.7,
                //                 color: '#3dd67a', // 0% 处的颜色
                //             },
                //             {
                //                 offset: 1,
                //                 color: '#95dcb2', // 100% 处的颜色
                //             },
                //         ],
                //         global: false, // 缺省为 false
                //     },
                // },
                label: {
                    show: true,
                    position: 'bottom',
                    distance: 5,
                    fontSize: 18,
                    align: 'center',
                },
                edgeLabel: {
                    //边的设置
                    show: true,
                    position: 'middle',
                    fontSize: 12,
                    formatter: (params) => {
                        return params.data.label
                    },
                },
                edgeSymbol: ['circle', 'arrow'], //边两边的类型
                autoCurveness: 0.01, //多条边的时候，自动计算曲率
                force: {
                    repulsion: 100,
                    gravity: 0.01,
                    edgeLength: 200,
                },
            },
        ],
    }
    loading.value = false
})
</script>
<style scoped>
.fig {
    display: flex;
    justify-content: center;
    width: fit-content;
    margin: 1em auto;
}

.echarts {
    width: calc(60vw + 4em);
    height: 360px;
    max-width: 720px;
    padding: 1.5em 2em;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
}
</style>
