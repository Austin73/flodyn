<template>
  <!-- A Modern Digital Factory -->
  <FlodyneContainer>
    <template #title>A Modern Digital Factory </template>
    <template #subtitle
      >Revolutionizing Manufacturing with Smart Innovation, Precision and
      Customization.</template
    >
    <VRow>
      <VCol cols="6">
        <VRow justify="end" align="center">
          <VCol
            class="text-secondary font-weight-bold"
            :class="
              $vuetify.display.mdAndUp
                ? 'text-h1 text-right'
                : 'text-h2 text-center'
            "
            >99%</VCol
          >
          <VCol cols="auto" class="text-h4">
            <div>Positive</div>
            <div>Feedback</div>
          </VCol>
        </VRow>
      </VCol>
      <VDivider vertical />
      <VCol cols="6">
        <VRow align="center">
          <VCol
            cols="auto"
            class="text-secondary font-weight-bold"
            :class="
              $vuetify.display.mdAndUp
                ? 'text-h1 text-right'
                : 'text-h2 text-center'
            "
            >10K</VCol
          >
          <VCol class="text-h4">
            <div>Project</div>
            <div>Complete</div>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </FlodyneContainer>

  <FlodyneContainer color="primary">
    <VRow align="center">
      <VCol cols="12" md="7">
        <h3
          class="font-weight-bold"
          :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'"
        >
          Discover Flodyne Business: <br />
          Your Partner in <span class="text-secondary">Driving Success</span>
        </h3>
        <div class="my-16">
          At Flodyne, innovation meets reliability. With a legacy of excellence
          in the hydraulics industry, Flodyne is your trusted partner for
          advanced hydraulic solutions that drive progress across a wide range
          of industries.
        </div>
        <VBtn color="secondary" rounded="pill" class="px-10">Contact Us</VBtn>
      </VCol>
      <VCol cols="12" md="1" />
      <VCol cols="12" md="4">
        <VImg
          rounded="xl"
          cover
          src="/images/about-us-1.svg"
          alt="About Us"
          class="zoom-on-hover"
        />
      </VCol>
    </VRow>
  </FlodyneContainer>
  <FlodyneContainer>
    <VRow align="center">
      <VCol cols="12" md="5">
        <VImg
          rounded="xl"
          cover
          src="/images/about-us-2.svg"
          alt="About Us"
          class="zoom-on-hover"
        />
      </VCol>
      <VCol cols="12" md="1" />
      <VCol cols="12" md="5">
        <h3
          class="font-weight-bold"
          :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'"
        >
          <span class="text-primary single-space">Our</span>
          <span class="text-secondary">Mission</span>
        </h3>
        <div class="my-16">
          <p>
            Our mission is to empower industries with cutting-edge hydraulic
            solutions that drive progress and innovation. We are committed to
            delivering precision-engineered products that meet the highest
            standards of quality and reliability, ensuring our customers can
            operate with confidence even in the most demanding environments.
          </p>
          <br />
          <p>
            As we continue to grow and evolve, we remain committed to advancing
            the field of hydraulics through sustainable practices, continuous
            improvement and a relentless pursuit of excellence.
          </p>
        </div>
        <VBtn color="secondary" rounded="pill" class="px-10">Learn more</VBtn>
      </VCol>
    </VRow>
  </FlodyneContainer>
  <FlodyneContainer>
    <VRow align="center">
      <VCol cols="12" md="5">
        <h3
          class="font-weight-bold"
          :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'"
        >
          <span class="text-primary">Why Choose </span>
          <span class="text-secondary">Flodyne Business?</span>
        </h3>
        <div class="my-8">
          <ul>
            <li>
              <strong class="text-primary">Expertise and Experience: </strong
              >With decades of experience in the hydraulics industry, Flodyne
              has the knowledge and expertise to deliver solutions that meet the
              most challenging requirements. Our team of engineers and
              specialists are dedicated to pushing the boundaries of hydraulic
              technology.
            </li>
            <li>
              <strong class="text-primary">High-Quality Products: </strong>We
              manufacture hydraulic cylinders, power units, and filtration
              machines that are built to last. Every product undergoes rigorous
              testing to ensure it meets the highest standards of performance
              and durability.
            </li>
            <li>
              <strong class="text-primary">Customized Solutions: </strong>At
              Flodyne, we understand that every industry and application is
              unique. That’s why we offer customized hydraulic solutions
              tailored to your specific needs. Our engineers work closely with
              you to design and build systems that optimize your operations.
            </li>
            <li>
              <strong class="text-primary">Support: </strong>Flodyne has a
              strong presence, ensuring that you receive the support you need.
              Our support teams are ready to assist with installation,
              maintenance, and troubleshooting to keep your operations running
              smoothly.
            </li>
            <li>
              <strong class="text-primary">Customer-Centric Approach: </strong
              >Your success is our priority. We take the time to understand your
              business, anticipate your needs, and deliver solutions that exceed
              your expectations. Our customer-centric approach ensures long-term
              partnerships built on trust and mutual success.
            </li>
          </ul>
        </div>
        <VBtn color="secondary" rounded="pill" class="px-10">Learn more</VBtn>
      </VCol>
      <VCol cols="12" md="1" />
      <VCol cols="12" md="5">
        <VImg
          rounded="xl"
          cover
          src="/images/about-us-2.svg"
          alt="About Us"
          loading="lazy"
          class="zoom-on-hover"
        />
      </VCol>
    </VRow>
  </FlodyneContainer>
  <FlodyneContainer padless>
    <VImg
      cover
      src="/images/about-us-footer.png"
      alt="About Us"
      rounded="xl"
      class="zoom-on-hover"
    />
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
.single-space {
  margin-right: 0.25em; /* or 0.5em for a larger space */
  display: inline;
}

.zoom-on-hover {
  transition: transform 0.5s ease; /* Smooth transition for the zoom effect */
}

.zoom-on-hover:hover {
  transform: scale(1.3); /* Zoom in by 10% on hover */
}

.back-to-top {
  position: fixed;
  bottom: 20px; /* Distance from the bottom of the page */
  right: 20px; /* Distance from the right of the page */
  z-index: 1000; /* Ensures it's always on top of other elements */
}
</style>
