<template>
  <div class="flex flex-row p-2">
    <div id="flash-error" class="border hidden-flash">
      <div class="mr-2">
      </div>
      <div class="flash-content w-fit"></div>
    </div>

    <div id="flash-success" class="hidden-flash">
      <div class="mr-2">
      </div>
      <div class="flash-content"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="postcss">
.hidden-flash {
  display: none;
}

.visible-flash {
  display: flex;
  align-items: center;
  margin-right: 3%;
  background-color: white;
  z-index: 11000;
  padding: 10px 20px;
  border-radius: 7px;
  white-space: nowrap;
  animation: fadeInRight 1s ease-in-out;
}

#flash-error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

#flash-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

@keyframes fadeInRight {
  from {
    transform: translateX(30%);
  }
  to {
  }
}
</style>
