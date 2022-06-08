<script setup>
//import '@google/model-viewer'
defineProps({ blok: Object })

const isMounted = ref(false)

const loadModelViewer = () => {
  console.log('triggered')
  import('@google/model-viewer')
}

onMounted(() => {
  isMounted.value = true
  loadModelViewer()
})
</script>

<template>
  <div v-editable="blok" class="w-full py-6">
    <h2 class="text-3xl mb-4 text-center">{{ blok.headline }}</h2>
    <model-viewer :src="blok.modelSrc" camera-controls />
  </div>
</template>

<style>
model-viewer {
  width: 100%;
  height: 600px;
}
</style>
