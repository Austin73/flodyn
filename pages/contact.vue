<template>
  <FlodyneContainer color="primary">
    <template #title>Contact <span class="text-secondary">Us</span></template>
    <template #subtitle>To know more about us please fill this form</template>

    <VForm>
      <VRow>
        <VCol cols="6">
          <VTextField label="Name" variant="outlined" v-model="name" />
        </VCol>
        <VCol cols="6">
          <VTextField label="Phone number" variant="outlined" v-model="phone" />
        </VCol>
      </VRow>
      <VRow>
        <VCol cols="12">
          <VTextField label="Email" variant="outlined" v-model="email" />
        </VCol>
        <VCol cols="6">
          <VTextField label="Company Name" variant="outlined" v-model="company" />
        </VCol>
        <VCol cols="6">
          <VTextField label="Product Name" variant="outlined" v-model="product" />
        </VCol>
      </VRow>
      <VRow>
        <VCol>
          <VTextarea label="Description" variant="outlined" v-model="description" />
        </VCol>
      </VRow>
      <VRow justify="center">
        <VCol cols="auto">
          <VBtn color="secondary" rounded="pill" class="px-10">Submit</VBtn>
        </VCol>
      </VRow>
    </VForm>
  </FlodyneContainer>

  <FlodyneContainer>
    <VSheet height="500" rounded="xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9315.968555995054!2d-73.766153459043!3d42.65401377088924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a37fb28709d%3A0xdf2d1d8ef3ead42!2sWashington%20Park!5e0!3m2!1svi!2sus!4v1721690425854!5m2!1svi!2sus"
        width="100%" height="100%" style="border:0;" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </VSheet>
  </FlodyneContainer>

</template>

<script lang="ts" setup>
  const name = ref('')
  const phone = ref('')
  const email = ref('')
  const company = ref('')
  const product = ref('')
  const description = ref('')

</script>

<style></style>
