<template>
  <VAppBar color="transparent" theme="dark">
    <VContainer>
      <VRow align="center">
        <VCol cols="auto">
          <NuxtLink to="/">
            <VImg cover width="180" src="/images/logo.svg" alt="Flodyne Logo" />
          </NuxtLink>
        </VCol>
        <VCol class="text-center">
          <VBtn v-for="  link in links  " :key=" link.title " :to=" link.to " theme="dark" color="white">
            {{ link.title }}
          </VBtn>
        </VCol>
        <VCol cols="auto">
          <VBtn variant="elevated" color="secondary" rounded="pill" class="px-8" to="/contact">Contact Us</VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>

<script setup lang="ts">
  const links = ref( [
    { title: 'About us', to: '/about' },
    { title: 'Infrastructure', to: '/infrastructure' },
    { title: 'Products', to: '/products' },
    { title: 'Brick Making Machine', to: '/brick-making-machine' },
    { title: 'Blogs', to: '/blogs' }
  ] )
</script>
