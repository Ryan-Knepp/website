<template>
  <a :href="url" class="grid-cols-project grid w-full items-center gap-4">
    <NuxtImg
      :src="image"
      :class="`h-16 w-16 object-cover ${
        image.includes('.svg') ? 'p-2' : 'rounded-full'
      }`"
      alt=""
    />
    <h3 class="ml-4 text-2xl">{{ name }}</h3>
    <p class="col-span-2">{{ description }}</p>
  </a>
  <div class="flex gap-2 text-base hover:text-cyan-800">
    <Icon name="mdi:github" width="24" height="24" />
    <a :href="repositoryURL">View the code</a>
  </div>
</template>

<script setup>
const props = defineProps({
  url: String,
  image: String,
  name: String,
  description: String,
  repositoryURL: String,
});
</script>
