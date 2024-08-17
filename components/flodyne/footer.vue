<template>
  <VContainer fluid>
    <VFooter color="primary" class="rounded-xl" theme="dark">
      <VContainer>
        <VRow>
          <VCol cols="12" md="3">

            <VImg width="150" src="/images/logo.svg" alt="Flodyne Logo" />

            <p class="mt-2">
              Flodyne Business is a pioneering leader in the realm of fluid dynamics solutions, dedicated to
              revolutionizing the way industries manage and optimize fluid flow, heat transfer, and related processes.
            </p>
            <div class="mt-10">
              <VBtn v-for="  icon in icons  " :key="icon" icon theme="light" class="mr-2">
                <VIcon color="secondary">{{ icon }}</VIcon>
              </VBtn>
            </div>
          </VCol>

          <VCol cols="12" md="3" class="text-left">
            <h4 class="text-h6">Useful Link</h4>

            <VList bg-color="transparent" nav density="compact" class="px-0">
              <VListItem v-for="link in links" :key="link.title" :to="link.to" :title="link.title" class="px-0" />
            </VList>

          </VCol>

          <VCol cols="12" md="3" class="text-left">
            <h4 class=" text-h6">Contact us</h4>
            <VList bg-color="transparent" nav density="compact" class="px-0">
              <VListItem href="tel:+91123456789" title="Call: +91 123456789" class="px-0" />
              <VListItem href="tel:+91 123456789" title="WhatsApp: +91 123456789" class="px-0" />
            </VList>
          </VCol>

          <VCol cols="12" md="3" class="text-left">
            <h4 class=" text-h6">Address</h4>
            <VList bg-color="transparent" nav density="compact" class="px-0">
              <VListItem href="https://maps.app.goo.gl/Vtza3eFENx5rLc3t6" title="Noida sector 2" class="px-0" />
            </VList>
          </VCol>
        </VRow>
        <VDivider class="my-5"></VDivider>
        <div class=" text-center text-caption">
          www.flodyne.com copyright reserved
        </div>
      </VContainer>
    </VFooter>
  </VContainer>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const icons = ref(['mdi-instagram', 'mdi-whatsapp', 'mdi-youtube', 'mdi-facebook'])
      const links = ref([
        { title: 'About us', to: '/about' },
        { title: 'Infrastructure', to: '/infrastructure' },
        { title: 'Products', to: '/products' },
        { title: 'Brick Making Machine', to: '/brick-making-machine' },
        { title: 'Blogs', to: '/blogs' },
        { title: 'Contact us', to: '/contact' },
      ])

      return { icons, links }
    },
  }
</script>
