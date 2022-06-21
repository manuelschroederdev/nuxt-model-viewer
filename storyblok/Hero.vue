<template>
  <section
    class="relative h-[calc(100vh-128px)] overflow-hidden flex items-end pb-24"
  >
    <div class="container relative z-10 text-center">
      <h1 class="text-7xl font-bold uppercase mb-4">{{ blok.headline }}</h1>
      <h2 class="text-4xl font-thin uppercase">{{ blok.subheadline }}</h2>
    </div>
    <img
      :src="blok.image.filename"
      :alt="blok.image.alt"
      class="absolute z-0 top-0 left-0 w-full h-full object-cover"
      :style="transform"
    />
  </section>
</template>

<script setup>
defineProps({ blok: Object })

const moveY = ref(0)
const scale = ref(1)

const transform = computed(() => {
  return (
    'transform: translateY(' + moveY.value + 'px) scale(' + scale.value + ')'
  )
})

onMounted(() => {
  window.addEventListener('scroll', () => {
    moveY.value = (window.scrollY / 100) * 30
    scale.value = 1 + window.scrollY / 5000
    console.log(scale.value)
  })
})
</script>
