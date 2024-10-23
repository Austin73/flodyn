<template>
  <FlodyneContainer>
    <VRow>
      <VCol cols="12" md="4" v-for="i in 6" :key="i" class="font-lato">
        <VCard rounded="lg" to="/" variant="outlined" border="grey thin">
          <VImg
            :aspect-ratio="16 / 9"
            cover
            src="/images/product-content.svg"
            alt="Card Image"
            class="zoom-on-hover"
          />
          <VRow no-gutters align="center">
            <VCol>
              <VCardTitle class="text-secondary">Flodyne is on air</VCardTitle>
            </VCol>
            <VCol cols="auto">
              <div class="text-caption text-primary mr-3">
                Fri, 24 june 2024
              </div>
            </VCol>
          </VRow>
          <VCardText>
            We have excellent Machining, Fabrication & Testing Facilities,
            housed at our works, which enables us to manufacture most steel
            components ourselves thereby ensuring full control on quality and
            deliveries which are very essential in meeting customer requirements
            of Total Satisfaction.
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </FlodyneContainer>
</template>

<script lang="ts" setup></script>

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
