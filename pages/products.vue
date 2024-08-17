<template>
  <FlodyneContainer color="primary">
    <template #title>Our <span class="text-secondary">Categories</span></template>
    <template #subtitle>At Flodyne Business, we specialize in leveraging cutting-edge technologies and expertise to
      optimize fluid dynamics across various industries. Our comprehensive suite of services includes:
    </template>
    <v-window v-model="onboarding">
      <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
        <VRow>
          <VCol cols="12" md="4">
            <VCard rounded="lg" to="/">
              <VImg :aspect-ratio="16 / 9" cover src="https://picsum.photos/400/300" alt="Card Image" />
              <VCardTitle class="text-secondary">Aerospace</VCardTitle>
              <VCardText>
                We have excellent Machining, Fabrication & Testing Facilities, housed at our works, which enables us to
                manufacture most steel components ourselves thereby ensuring full control on quality and deliveries
                which
                are
                very essential in meeting customer requirements of Total Satisfaction.
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard rounded="lg" to="/">
              <VImg :aspect-ratio="16 / 9" cover src="https://picsum.photos/400/300" alt="Card Image" />
              <VCardTitle class="text-secondary">Aerospace</VCardTitle>
              <VCardText>
                We have excellent Machining, Fabrication & Testing Facilities, housed at our works, which enables us to
                manufacture most steel components ourselves thereby ensuring full control on quality and deliveries
                which
                are
                very essential in meeting customer requirements of Total Satisfaction.
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard rounded="lg" to="/">
              <VImg :aspect-ratio="16 / 9" cover src="https://picsum.photos/400/300" alt="Card Image" />
              <VCardTitle class="text-secondary">Aerospace</VCardTitle>
              <VCardText>
                We have excellent Machining, Fabrication & Testing Facilities, housed at our works, which enables us to
                manufacture most steel components ourselves thereby ensuring full control on quality and deliveries
                which
                are
                very essential in meeting customer requirements of Total Satisfaction.
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </v-window-item>
    </v-window>
    <VRow justify="space-between" class="mt-16">
      <v-btn icon="mdi-chevron-left" variant="plain" @click="prev"></v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item v-for="      n in length      " :key="`btn-${n}`" v-slot="{ isSelected, toggle }" :value="n">
          <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record" @click="toggle"></v-btn>
        </v-item>
      </v-item-group>
      <v-btn icon="mdi-chevron-right" variant="plain" @click="next"></v-btn>
    </VRow>
  </FlodyneContainer>

  <FlodyneContainer>
    <template #title>Our <span class="text-secondary">Products</span></template>
    <template #subtitle>We are working in lost of product category</template>

    <VRow>
      <VCol cols="12" md="4">
        <VListSubheader class="text-primary font-weight-bold">Our Categories</VListSubheader>
        <VListItem v-for="i in 10" :key="i" title="Straight Series" class="bg-green-lighten-5 pr-0 py-0 mb-2 ">
          <template #append>
            <VBtn color="secondary" variant="flat" width="60">
              <VIcon>mdi-arrow-right</VIcon>
            </VBtn>
          </template>
        </VListItem>
      </VCol>
      <VCol cols="12" md="8">
        <VRow>
          <VCol cols="12" md="4" v-for="  i in 6  " :key="i">
            <VCard to="/" class="mb-4 text-center">
              <VImg :aspect-ratio="4 / 3" cover src="https://picsum.photos/400/300" alt="Card Image" />
              <VCardTitle class="text-body-1">Flo dyne Machine</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5">Read More</VBtn>
              </VCardActions>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </FlodyneContainer>
</template>

<script lang="ts" setup>
  const length = ref(3)
  const onboarding = ref(1)

  function next() {
    onboarding.value = onboarding.value + 1 > length.value ? 1 : onboarding.value + 1
  }
  function prev() {
    onboarding.value = onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1
  }
</script>

<style></style>
