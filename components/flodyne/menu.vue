<template>
  <VAppBar color="transparent" theme="dark">
    <VContainer class="pa-0">
      <VRow align="center" justify="space-between" no-gutters>
        <VCol cols="auto">
          <NuxtLink to="/">
            <VImg cover width="180" src="/images/logo.svg" alt="Flodyne Logo" />
          </NuxtLink>
        </VCol>
        <VCol class="text-center" v-if="$vuetify.display.mdAndUp">
          <VBtn v-for="link in links" :key="link.title" :to="link.to" theme="dark" color="white">
            {{ link.title }}
          </VBtn>
        </VCol>
        <VCol cols="auto" v-if="$vuetify.display.mdAndUp">
          <VBtn variant="elevated" color="secondary" rounded="pill" class="px-8" to="/contact">Contact Us</VBtn>
        </VCol>
        <VCol cols="auto" v-if="$vuetify.display.smAndDown">
          <VAppBarNavIcon @click="drawer = !drawer" color="white" />
        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>

<script setup lang="ts">
  const drawer = useState<boolean>('drawer')
  const links = useState<{ title: string, to: string }[]>('links')
</script>
