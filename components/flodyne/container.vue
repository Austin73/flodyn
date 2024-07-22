<template>
  <VContainer fluid>
    <VSheet rounded="xl" :color=" color ">
      <VContainer :class=" { 'py-16': !padless } ">
        <VSheet class="text-center mx-auto mb-10" width="70%" v-if=" $slots.title || $slots.subtitle ">
          <h3 class="text-h3 font-weight-bold" v-if=" $slots.title ">
            <slot name="title" />
          </h3>

          <div class="mt-3" v-if=" $slots.subtitle ">
            <slot name="subtitle" />
          </div>
        </VSheet>
        <slot />
      </VContainer>
    </VSheet>
  </VContainer>
</template>

<script setup lang="ts">
  defineProps( {
    color: String,
    padless: {
      type: Boolean,
      default: false
    }
  } )


</script>
