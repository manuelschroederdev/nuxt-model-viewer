<script setup>
defineProps({ blok: Object })

const isMounted = ref(false)

const loadModelViewer = async () => {
  console.log('triggered')
  await import('@google/model-viewer')
}

onMounted(async () => {
  isMounted.value = true
  loadModelViewer()
})
</script>

<template>
  <section
    v-editable="blok"
    class="container grid md:grid-cols-2 gap-16 place-items-center py-6"
  >
    <div
      class="order-last"
      :class="blok.reverse_layout ? '' : 'lg:order-first'"
    >
      <Overline>{{ blok.overline }}</Overline>
      <Headline>{{ blok.headline }}</Headline>
      <FormattedText>{{ blok.text }}</FormattedText>
    </div>
    <model-viewer
      v-if="isMounted"
      :src="blok.modelSrc"
      camera-controls
      ar
      ar-modes="webxr scene-viewer quick-look"
    />
  </section>
</template>

<style>
model-viewer {
  width: 100%;
  height: 600px;
}
</style>
