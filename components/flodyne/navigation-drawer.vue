<template>
  <VNavigationDrawer v-model="drawer" location="right">
    <VListItem
      nav
      v-for="link in links"
      :key="link.title"
      :to="link.to"
      :title="link.title"
      class="reduced-spacing bg"
    >
      <template #title>
        <span class="title-spacing">{{ link.title }}</span>
      </template>
    </VListItem>
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
const drawer = useState<boolean>("drawer");

const links = useState<{ title: string; to: string }[]>("links");
</script>

<style scoped>
.reduced-spacing {
  letter-spacing: normal;
}

.title-spacing {
  letter-spacing: -0.5px; /* Adjust this value as needed */
}
</style>
