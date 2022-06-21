<template>
  <Transition name="fade">
    <header v-if="visible" class="fixed z-50 top-0 left-0 w-full h-32">
      <div class="container h-full flex items-center">
        <a href="#"
          ><img
            src="~/assets/images/sb-logo.svg"
            alt="Storyblok"
            class="pointer-events-none"
        /></a>
      </div>
    </header>
  </Transition>
</template>

<script setup>
import { onMounted } from 'vue'

const visible = ref(true)

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      visible.value = false
    } else {
      visible.value = true
    }
  })
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
