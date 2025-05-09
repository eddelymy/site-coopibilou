<template>
    <div v-show="isActive" class="p-2">
        <slot></slot>
    </div>
</template>

<script setup>
import { inject, onBeforeMount, ref, watch } from 'vue'
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
const hash = ref('')
const isActive = ref(false)
const addTab = inject('addTab')
const activeTabHash = inject('activeTabHash')

onBeforeMount(() => {
    hash.value = `#${props.title.toLowerCase().replace(/ /g, '-')}`
    addTab({
        title: props.title,
        hash: hash.value
    })
})
watch(activeTabHash, () => {
    isActive.value = activeTabHash.value === hash.value
})
</script>
<style scoped>
.tab {
    border-top-color: #67e8f9 ;
    border-top-width: 2px ;
}
</style>