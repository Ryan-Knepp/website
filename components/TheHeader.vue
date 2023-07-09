<template>
  <header
    class="mx-auto flex max-w-5xl items-center justify-between px-4 pt-8 sm:px-16"
  >
    <NuxtImg
      src="/images/me.jpg"
      class="w-10 rounded-full object-scale-down"
      alt=""
    />
    <!-- Desktop Nav -->
    <div class="hidden flex-grow items-center self-end sm:flex">
      <nav class="mx-auto flex-shrink text-base">
        <ul
          class="flex justify-center gap-12 border-b border-zinc-600/40 px-6 py-2"
        >
          <li>
            <a
              href="#projects"
              @click.prevent="scrollTo('projects')"
              class="hover:text-violet-800"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#work"
              @click.prevent="scrollTo('work')"
              class="hover:text-violet-800"
              >Work Experience</a
            >
          </li>
        </ul>
      </nav>
      <ul class="flex gap-4 text-zinc-700">
        <li>
          <a href="https://github.com/Ryan-Knepp" title="Github">
            <Icon name="mdi:github" width="24" height="24" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ryan.m.knepp/" title="Instagram">
            <Icon name="mdi:instagram" width="24" height="24" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ryan-knepp-5b2105b9/"
            title="LinkedIn"
          >
            <Icon name="mdi:linkedin" width="24" height="24" />
          </a>
        </li>
      </ul>
    </div>
    <!-- Mobile Nav -->
    <button
      @click.prevent="expanded = !expanded"
      :aria-expanded="expanded"
      class="rounded-2xl px-2 py-1 text-base ring-2 ring-violet-800/40 hover:text-violet-800 sm:hidden"
    >
      Menu <Icon name="mdi:chevron-down" width="12" height="12" />
    </button>
    <div
      :class="`${
        expanded ? 'fixed' : 'hidden'
      } inset-0 z-10 bg-zinc-50 bg-zinc-700/40 backdrop-blur-sm`"
    ></div>
    <div
      :class="`${
        expanded ? 'fixed' : 'hidden'
      } inset-x-2 top-4 z-20 rounded-2xl bg-zinc-50 shadow-sm shadow-zinc-800/5`"
    >
      <div class="flex flex-col items-end gap-4" ref="menu">
        <button
          class="mr-4 mt-3 fill-zinc-800"
          @click.prevent="expanded = false"
        >
          <Icon name="mdi:close" width="24" height="24" />
        </button>
        <nav class="mr-5 mt-4 text-lg">
          <ul class="flex flex-col items-end divide-y">
            <li class="pb-2">
              <a
                href="#projects"
                @click.prevent="scrollTo('projects')"
                class="hover:text-violet-800"
                >Projects</a
              >
            </li>
            <li class="py-2">
              <a
                href="#work"
                @click.prevent="scrollTo('work')"
                class="hover:text-violet-800"
                >Work Experience</a
              >
            </li>
          </ul>
        </nav>
        <ul class="my-4 mr-5 flex gap-6 text-zinc-700">
          <li>
            <a href="https://github.com/Ryan-Knepp" title="Github">
              <Icon name="mdi:github" width="24" height="24" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ryan.m.knepp/" title="Instagram">
              <Icon name="mdi:instagram" width="24" height="24" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ryan-knepp-5b2105b9/"
              title="LinkedIn"
            >
              <Icon name="mdi:linkedin" width="24" height="24" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
const expanded = ref(false);

const menu = ref(null);

onClickOutside(menu, (e) => {
  expanded.value = false;
});

function scrollTo(elementID) {
  const el = document.getElementById(elementID);
  expanded.value = false;
  el.scrollIntoView({
    behavior: "smooth",
  });
}
</script>
