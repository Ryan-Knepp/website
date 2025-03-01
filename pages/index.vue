<template>
  <div class="fixed inset-0 flex justify-center sm:px-4">
    <div class="flex w-full max-w-5xl">
      <div class="w-full bg-white"></div>
    </div>
  </div>
  <div class="relative">
    <TheHeader />
    <main class="mx-auto flex max-w-5xl flex-col gap-6">
      <section class="mt-16 max-w-5xl px-4 sm:mt-32 sm:px-16">
        <h1
          class="bg-gradient-to-r from-cyan-600 to-violet-800 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
        >
          Full stack developer, home bar enthusiast, retired recreational sand
          volleyballer.
        </h1>
        <p class="my-8 text-base text-zinc-700 sm:text-xl">
          I'm Ryan. I'm a software developer by day and a pop culture t-shirt
          wearer also by day. By night I'm either quoting the Office while
          watching the Office, or I'm starting a new project before finishing my
          previous one.
        </p>
      </section>
      <section id="projects" class="flex flex-col items-center px-4 sm:px-0">
        <h2 class="mt-6 text-3xl sm:text-4xl">Side Projects</h2>
        <p class="mb-4 mt-2">
          These are my side projects that have been both started and
          <span class="font-bold">completed</span>.
        </p>
        <ul
          class="mt-4 flex w-full flex-col items-center justify-center gap-8 sm:w-1/2"
        >
          <li
            v-for="project in projects"
            :key="project.name"
            class="flex w-full flex-col gap-4 rounded-2xl from-cyan-600/10 to-violet-700/5 p-2 transition duration-300 ease-in-out hover:bg-gradient-to-r sm:p-6"
          >
            <CardProject v-bind="project" />
          </li>
        </ul>
      </section>
      <section id="work" class="flex flex-col items-center px-2 sm:px-0">
        <h2 class="mb-4 mt-6 text-3xl sm:text-4xl">Work Experience</h2>
        <ul class="mt-6 flex w-full flex-col gap-6 sm:w-1/2">
          <li
            class="group flex w-full items-center gap-4 p-2 transition-all duration-200 ease-in-out"
            v-for="job in work"
          >
            <CardWork v-bind="job" />
          </li>
        </ul>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-slate-50 text-slate-900 antialiased scroll-smooth",
  },
});

const projects = [
  {
    name: "Rotating Potluck",
    description:
      "A little tool to help your church organize a rotating potluck.",
    image: "/images/potluck.svg",
    url: "https://ncbcpotluck.fly.dev",
    repositoryURL: "https://github.com/Ryan-Knepp/rotating-potluck",
  },
  {
    name: "T Photography",
    description:
      "The best kids and family photographer in the greater Peoria area. I'm definitely not biased at all. This has since been replaced because I don't have the time to keep up with payments and scheduling functionality.",
    image: "/images/tlogo.png",
    url: "https://taryn.photography",
    repositoryURL: "https://github.com/Ryan-Knepp/tphoto",
  },
  {
    name: "Otto Codes",
    description:
      "An online code editor for those who want to appear like they can code. You may have a bad time if you try this on a phone.",
    image: "/images/otto.jpg",
    url: "https://ottocodes.ryanknepp.com",
    repositoryURL: "https://github.com/Ryan-Knepp/otto-codes",
  },
  {
    name: "Game Night",
    description:
      "What type of night is it going to be? Will it be Carcassonne, Dominion, or something else? Instead of making a decision yourself, let this random number generator do it for you.",
    image: "/images/game-night.jpg",
    url: "https://gamenight.ryanknepp.com",
    repositoryURL: "https://github.com/Ryan-Knepp/game-night",
  },
];

const work = [
  {
    company: "Mirus Research",
    logo: "/images/mirus.png",
    position: "Full Stack Developer",
    date: "Oct '20 - Present",
  },
  {
    company: "Epic",
    logo: "/images/epic.png",
    position: "Software Developer II",
    date: "Jan '09 - Sept '20",
  },
];
</script>

<style lang="scss" scoped></style>
