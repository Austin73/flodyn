<template>
  <VApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VApp>
</template>
<script setup lang="ts">
  useState( 'drawer', () => false )

  useState( 'links', () => [
    { title: 'About us', to: '/about' },
    { title: 'Infrastructure', to: '/infrastructure' },
    { title: 'Products', to: '/products' },
    { title: 'Brick Making Machine', to: '/brick-making-machine' },
    { title: 'Blogs', to: '/blogs' }
  ] )
</script>
