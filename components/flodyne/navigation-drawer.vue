<template>
  <VNavigationDrawer v-model="drawer" location="right">
    <VListItem nav v-for="link in links" :key="link.title" :to="link.to" :title="link.title" />
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
  const drawer = useState<boolean>('drawer')

  const links = useState<{ title: string, to: string }[]>('links')
</script>

<style></style>
