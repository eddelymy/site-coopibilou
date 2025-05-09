<template>
    <div class="w-fit">
        <ul class="list-none flex flex-nowrap p-0 mb-0">
            <li
                v-for="tab in tabs"
                :key="tab.title"
                class="py-2 px-5 cursor-pointer me-2 text-[15px]"
                :class="{
                'text-gray-600': tab.hash !== activeTabHash,
                'border-b-2 border-b-orange-600 text-gray-900 ': tab.hash === activeTabHash
                }"
                @click="activeTabHash = tab.hash"
            >
                {{tab.title}}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script setup>
import { provide, ref } from 'vue'

const activeTabHash = ref('')
const tabs = ref([])
provide('addTab', (tab) => {
    const count = tabs.value.push(tab)
    if (count === 1) {
        activeTabHash.value = tab.hash
    }
})
provide('activeTabHash', activeTabHash)
</script>