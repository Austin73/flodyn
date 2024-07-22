<template>
  <VCard flat rounded="0" min-height="500px" height="40vh"   image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg" theme="dark">
    <VRow align="center" justify="center" class="fill-height">
      <h1 class="text-h1 text-capitalize">Page Title</h1>
    </VRow>
  </VCard>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const drawer = ref( false )
      const links = ref( [
        { title: 'About us', to: '/about' },
        { title: 'Infrastructure', to: '/infrastructure' },
        { title: 'Products', to: '/products' },
        { title: 'Brick Making Machine', to: '/brick-making-machine' },
        { title: 'Blogs', to: '/blogs' },
        { title: 'Contact us', to: '/contact' },
      ] )

      return { drawer, links }
    },
  }
</script>
