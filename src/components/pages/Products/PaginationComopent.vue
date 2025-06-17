<template>
  <nav class="py-0 text-sm">
    <ul class="pagination flex flex-row items-center gap-1">
      <li>
        <button
          type="button"
          class="py-0 px-4"
          aria-label="First"
          :disabled="isFirstPage"
          @click="firstPage"
        >
          <span class="text-xl">&laquo;</span>
        </button>
      </li>
        <li>
          <button
            type="button"
            class="py-0 px-4"
            aria-label="Previous"
            :disabled="isFirstPage"
            @click="previousPage"
          >
            <span class="text-xl">&lsaquo;</span>
          </button>
        </li>
        <li v-for="page of pages" :key="page.name">
          <button
            type="button"
            class="py-1 px-4 text-gray-500"
            :class="{ active: isActive(page.name - 1) }"
            :disabled="page.isDisabled"
            @click="selectPage(page.name - 1)"
          >
            <span>{{page.name }}</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="py-0 px-4"
            aria-label="Next"
            :disabled="isLastPage"
            @click="nextPage"
          >
            <span class="text-xl">&rsaquo;</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            class="text-zinc-500 py-0 px-4"
            aria-label="last"
            :disabled="isLastPage"
            @click="lastPage"
          >
            <span class="text-xl">&raquo;</span>
          </button>
        </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const emits = defineEmits(['pageChanged'])
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 6
  },
  totalItems: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
})

const isFirstPage =  computed(() => {
  return props.currentPage === 0
})
const isLastPage = computed(() => {
  return props.currentPage + 1 === props.totalPages
}) 

const startPage = computed(() => {
  if (props.currentPage === 0 || props.currentPage === 1) {
    return 1
  }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons
  }

  return props.currentPage - 1
})
const pages = computed(() => {
  const range = []

  if (props.totalPages === 0) {
    range.push({
      name: 1,
      isDisabled: true
    })

    return range
  }

  for (
    let i = startPage.value;
    i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
    i++
  ) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage + 1
    })
  }

  return range
})

function selectPage(page) {
  emits('pageChanged', page)
}
function isActive(page) {
  return page === props.currentPage
}
function nextPage() {
  emits('pageChanged', props.currentPage + 1)
}
function previousPage() {
  emits('pageChanged', props.currentPage - 1)
}
function firstPage() {
  emits('pageChanged', 0)
}
function lastPage() {
  emits('pageChanged', props.totalPages - 1)
}
</script>

<style scoped>
.pagination .active,
button:hover {
    /* color: #3757F9; */
    color:oklch(52.5% 0.223 3.958);
    background-color:oklch(89.9% 0.061 343.231);
    /* background-color: rgba(55, 87, 249, 0.2); */
    border-radius: 4px;
}
.pagination {
    background: transparent;
    margin-bottom: 0;
    color: grey;
}
button:disabled:hover {
    background-color: transparent;
}
button:disabled {
    opacity: 1 !important;
}
button.active:hover {
    /* background-color: rgba(55, 87, 249, 0.2); */
    background-color:oklch(81% 0.117 11.638)
}
</style>
