<template>
  <FlodyneContainer>
    <template #title
      ><span class="text-primary">Fly Ash Brick</span>
      <span class="text-secondary"> Machine</span></template
    >
    <template #subtitle
      >Flodyne Brick Press Machines are at the forefront of construction and
      manufacturing technology, offering unmatched efficiency and precision of
      brick production in its category. Designed to meet the rigorous demands of
      modern construction, our brick press machines deliver consistent,
      high-quality bricks with every cycle, ensuring your projects are built on
      a foundation of excellence.</template
    >

    <VRow>
      <VCol cols="12" md="4">
        <VImg
          src="/images/infrastructure-content-1.svg"
          alt="Card Image"
          rounded="lg"
          class="zoom-on-hover"
        />
      </VCol>

      <VCol cols="12" md="8">
        <h3 class="mb-5">
          <span class="text-secondary"> Key Features: </span>
        </h3>

        <ul>
          <li>
            <strong class="text-primary">Precision Engineering: </strong>Our
            brick press machines are engineered for exacting standards, ensuring
            each brick is produced with uniformity.
          </li>
          <li>
            <strong class="text-primary">High Output: </strong>Capable of
            handling large-scale production needs, these machines streamline the
            brick-making process, reducing labor costs and production time.
          </li>
          <li>
            <strong class="text-primary">Durability: </strong>Built to last,
            Flodyne Brick Press Machines are constructed from robust materials
            that withstand the harsh conditions of industrial use, ensuring
            reliable performance over the long term.
          </li>
          <li>
            <strong class="text-primary">User-Friendly Operation: </strong
            >Designed with operators in mind, our machines offer intuitive
            controls and easy maintenance, allowing for seamless integration
            into your production line.
          </li>
        </ul>
        <p>
          Computerized accounting & administrative facilities are created for
          smooth & efficient working so that customer satisfaction can be
          maximized.
        </p>
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

<style scoped>
.zoom-on-hover {
  transition: transform 0.5s ease; /* Smooth transition for the zoom effect */
}

.zoom-on-hover:hover {
  transform: scale(1.1); /* Zoom in by 10% on hover */
}

.back-to-top {
  position: fixed;
  bottom: 20px; /* Distance from the bottom of the page */
  right: 20px; /* Distance from the right of the page */
  z-index: 1000; /* Ensures it's always on top of other elements */
}
</style>
