<template>
  <Header />
  <slot />
</template>

<style>
body {
  @apply pt-32 bg-black text-gray-50;
}
section.page-section {
  @apply py-24;
}
section.page-section + section.page-section {
  @apply pt-0;
}
</style>
