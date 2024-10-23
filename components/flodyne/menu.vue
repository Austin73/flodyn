<template>
  <VAppBar theme="dark" color="primary" class="custom-app-bar">
    <VContainer class="pa-0">
      <VRow align="center" justify="space-between" no-gutters>
        <VCol cols="auto">
          <NuxtLink to="/">
            <VImg cover width="180" src="/images/logo.svg" alt="Flodyne Logo" />
          </NuxtLink>
        </VCol>
        <VCol class="text-center" v-if="$vuetify.display.mdAndUp">
          <VBtn
            v-for="link in links"
            :key="link.title"
            :to="link.to"
            theme="dark"
            :color="isActive(link.to) ? 'green' : 'white'"
          >
            <span class="reduced-spacing">{{ link.title }}</span>
          </VBtn>
        </VCol>
        <VCol cols="auto" v-if="$vuetify.display.mdAndUp">
          <VBtn
            variant="elevated"
            color="secondary"
            rounded="pill"
            class="px-8"
            to="/contact"
            >Contact Us</VBtn
          >
        </VCol>
        <VCol cols="auto" v-if="$vuetify.display.smAndDown">
          <VAppBarNavIcon @click="drawer = !drawer" color="white" />
        </VCol>
      </VRow>
    </VContainer>
  </VAppBar>
</template>

<script setup lang="ts">
const drawer = useState<boolean>("drawer");
const links = useState<{ title: string; to: string }[]>("links");
const route = useRoute();
const isActive = (linkPath: string) => {
  return route.path === linkPath; // Check if the current path matches the link
};
</script>
.custom-app-bar { background-color: rgba(255, 255, 255, 0.8); /* Adjust the last
value for opacity */ }
<style scoped>
.reduced-spacing {
  letter-spacing: normal;
}
</style>
