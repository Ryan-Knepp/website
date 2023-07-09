<template>
  <div class="flex w-full gap-4">
    <div class="flex w-10 items-center justify-center">
      <NuxtImg
        :src="logo"
        alt=""
        class="h-8 w-8 rounded-full object-scale-down shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5"
      />
    </div>
    <div class="flex w-full flex-col">
      <h3 class="text-xl">{{ company }}</h3>
      <div class="flex flex-auto">
        <p>{{ position }}</p>
        <p class="ml-auto text-zinc-500">{{ date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  logo: String,
  company: String,
  position: String,
  date: String,
});
</script>
