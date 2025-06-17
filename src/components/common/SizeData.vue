<template>
  <div class="flex items-center gap-4">
    <select
      v-model="selectedSize"
      class="w-fit"
      @change="selectSize"
    >
      <option
        v-for="size in sizesList"
        :key="size"
        :value="size"
        class="text-sm"
      >
        {{size}}
      </option>
    </select>
    <div class="rounded-full border border-pink-100 py-1 px-3 bg-pink-100 text-black">
       {{ props.totalItems }} produits
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const emits = defineEmits(['sizeSelected'])
const props = defineProps({
  size: {
    type: Number
  },
  totalItems: {
    type: Number
  }
})

const sizesList = ref([3, 6, 20, 50, 100, 150])
const selectedSize = ref(0)

onMounted(() => {
  selectedSize.value = props.size
})

function selectSize() {
  emits('sizeSelected', selectedSize.value)
}
</script>
