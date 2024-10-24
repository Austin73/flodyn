<template>
  <VApp>
    <NuxtLayout>
      <transition name="fade" mode="out-in">
        <NuxtPage />
      </transition>
    </NuxtLayout>
  </VApp>
</template>
<script setup lang="ts">
useState("drawer", () => false);

useState("links", () => [
  { title: "Home", to: "/" },
  { title: "About us", to: "/about" },
  { title: "Infrastructure", to: "/infrastructure" },
  { title: "Products", to: "/products" },
  { title: "Fly Ash Brick Machine", to: "/fly-ash-brick-machine" },
  { title: "Blogs", to: "/blogs" },
]);
</script>

<style scoped>
/* Default transition - fade effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <=2.1.8 */ {
  opacity: 0;
}
</style>
