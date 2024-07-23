<template>
  <FlodyneContainer>

    <VRow>
      <VCol cols="12" md="4" v-for="i in 6" :key="i">
        <VCard rounded="lg" to="/" variant="outlined" border="grey thin">
          <VImg :aspect-ratio=" 16 / 9 " cover src="https://picsum.photos/400/300" alt="Card Image" />
          <VRow no-gutters align="center">
            <VCol>
              <VCardTitle class="text-secondary">Aerospace</VCardTitle>
            </VCol>
            <VCol cols="auto">
              <div class="text-caption text-primary mr-3">Fri, 24 june 2024</div>
            </VCol>              
          </VRow>
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
  </FlodyneContainer>
</template>

<script lang="ts" setup>

</script>

<style></style>
