<template>
  <VContainer fluid>
    <VSheet rounded="xl" :color="color">
      <VContainer :class="{ 'py-16': !padless }">
        <VSheet
          class="text-center mx-auto mb-10"
          :width="$vuetify.display.mdAndUp ? '70%' : '100%'"
          v-if="$slots.title || $slots.subtitle"
        >
          <h3
            class="font-weight-bold"
            :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'"
            v-if="$slots.title"
          >
            <slot name="title" />
          </h3>

          <div class="mt-3" v-if="$slots.subtitle">
            <slot name="subtitle" />
          </div>
        </VSheet>
        <slot />
      </VContainer>
    </VSheet>
  </VContainer>
</template>

<script setup lang="ts">
defineProps({
  color: String,
  padless: {
    type: Boolean,
    default: false,
  },
});
</script>
