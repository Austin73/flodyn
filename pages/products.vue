<template>
  <FlodyneContainer color="primary">
    <template #title
      >Our <span class="text-secondary">Categories</span></template
    >
    <template #subtitle
      >At Flodyne Business, we specialize in leveraging cutting-edge
      technologies and expertise to optimize fluid dynamics across various
      industries. Our comprehensive suite of services includes:
    </template>
    <v-window v-model="onboarding">
      <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
        <VRow>
          <VCol cols="12" md="4" class="font-lato">
            <VCard rounded="lg" to="/">
              <VImg
                :aspect-ratio="16 / 9"
                cover
                src="/images/product-content.svg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-secondary">Aerospace</VCardTitle>
              <VCardText>
                We have excellent Machining, Fabrication & Testing Facilities,
                housed at our works, which enables us to manufacture most steel
                components ourselves thereby ensuring full control on quality
                and deliveries which are very essential in meeting customer
                requirements of Total Satisfaction.
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard rounded="lg" to="/">
              <VImg
                :aspect-ratio="16 / 9"
                cover
                src="/images/product-content.svg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-secondary">Oil & Gas</VCardTitle>
              <VCardText>
                We have excellent Machining, Fabrication & Testing Facilities,
                housed at our works, which enables us to manufacture most steel
                components ourselves thereby ensuring full control on quality
                and deliveries which are very essential in meeting customer
                requirements of Total Satisfaction.
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard rounded="lg" to="/">
              <VImg
                :aspect-ratio="16 / 9"
                cover
                src="/images/product-content.svg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-secondary">Automotive</VCardTitle>
              <VCardText>
                We have excellent Machining, Fabrication & Testing Facilities,
                housed at our works, which enables us to manufacture most steel
                components ourselves thereby ensuring full control on quality
                and deliveries which are very essential in meeting customer
                requirements of Total Satisfaction.
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </v-window-item>
    </v-window>
    <VRow justify="space-between" class="mt-16">
      <v-btn icon="mdi-chevron-left" variant="plain" @click="prev"></v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ isSelected, toggle }"
          :value="n"
        >
          <v-btn
            :variant="isSelected ? 'outlined' : 'text'"
            icon="mdi-record"
            @click="toggle"
          ></v-btn>
        </v-item>
      </v-item-group>
      <v-btn icon="mdi-chevron-right" variant="plain" @click="next"></v-btn>
    </VRow>
  </FlodyneContainer>

  <FlodyneContainer>
    <template #title>Our <span class="text-secondary">Products</span></template>
    <template #subtitle>Explore our core product & service offerings</template>

    <VRow>
      <VCol cols="12" md="4">
        <VListSubheader class="text-primary font-weight-bold"
          >Our Categories</VListSubheader
        >
        <VListItem title="Steel" class="bg-green-lighten-5 pr-0 py-0 mb-2">
          <template #append>
            <VBtn color="secondary" variant="flat" width="60">
              <VIcon>mdi-arrow-right</VIcon>
            </VBtn>
          </template>
        </VListItem>
        <VListItem title="Power" class="bg-green-lighten-5 pr-0 py-0 mb-2">
          <template #append>
            <VBtn color="secondary" variant="flat" width="60">
              <VIcon>mdi-arrow-right</VIcon>
            </VBtn>
          </template>
        </VListItem>
        <VListItem title="Aerospace" class="bg-green-lighten-5 pr-0 py-0 mb-2">
          <template #append>
            <VBtn color="secondary" variant="flat" width="60">
              <VIcon>mdi-arrow-right</VIcon>
            </VBtn>
          </template>
        </VListItem>
        <VListItem title="Mining" class="bg-green-lighten-5 pr-0 py-0 mb-2">
          <template #append>
            <VBtn color="secondary" variant="flat" width="60">
              <VIcon>mdi-arrow-right</VIcon>
            </VBtn>
          </template>
        </VListItem>
        <VListItem
          title="Construction"
          class="bg-green-lighten-5 pr-0 py-0 mb-2"
        >
          <template #append>
            <VBtn color="secondary" variant="flat" width="60">
              <VIcon>mdi-arrow-right</VIcon>
            </VBtn>
          </template>
        </VListItem>
      </VCol>
      <VCol cols="12" md="8">
        <VRow>
          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/4Hydraulic Cylinder.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">Hydraulic Cylinder</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/5Filtration Trolley.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">Filtration Trolley</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/6Hydraulic Pump.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">Hydraulic Pump</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/7Hydraulic Motor.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">Hydraulic Motor</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/8Hydraulic Valves.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">Hydraulic Valves</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>
          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/9.Mobile Valves.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">Mobile Valves</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>

          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/10Ball Valve.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">Ball Valve</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>

          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/17Valve stand.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">Valve stand</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>

          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/18.SAE Flanges.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">SAE Flanges</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>

          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/19Quick Release Couplings.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1"
                >Quick Release Couplings</VCardTitle
              >
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>

          <VCol cols="12" md="4">
            <VCard to="/" class="mb-4 text-center">
              <VImg
                :aspect-ratio="4 / 3"
                cover
                src="/images/products/HPU.jpg"
                alt="Card Image"
                class="zoom-on-hover"
              />
              <VCardTitle class="text-body-1">HPU</VCardTitle>
              <VCardActions class="justify-center">
                <VBtn color="primary" variant="flat" class="px-5"
                  >Read More</VBtn
                >
              </VCardActions>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </FlodyneContainer>
  <VBtn
    class="back-to-top"
    color="secondary"
    @click="scrollToTop"
    rounded="pill"
  >
    Back to Top
  </VBtn>
</template>

<script lang="ts" setup>
const length = ref(3);
const onboarding = ref(1);

function next() {
  onboarding.value =
    onboarding.value + 1 > length.value ? 1 : onboarding.value + 1;
}
function prev() {
  onboarding.value =
    onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1;
}
</script>

<style scoped>
.zoom-on-hover {
  transition: transform 0.5s ease; /* Smooth transition for the zoom effect */
}

.zoom-on-hover:hover {
  transform: scale(1.2); /* Zoom in by 10% on hover */
}

.back-to-top {
  position: fixed;
  bottom: 20px; /* Distance from the bottom of the page */
  right: 20px; /* Distance from the right of the page */
  z-index: 1000; /* Ensures it's always on top of other elements */
}
</style>
