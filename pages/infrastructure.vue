<template>
  <FlodyneContainer>
    <video autoplay muted loop playsinline class="background-video">
      <source src="" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <template #title
      ><span class="text-primary">Manufacturing </span
      ><span class="text-secondary">Facility</span>
    </template>
    <template #subtitle
      >Flodyne's state-of-the-art manufacturing facility is located at Bilaspur,
      Chhattisgarh and is spread across an area of 7400 Square meters, where
      advanced technology and expert craftsmanship come together to produce
      world-class hydraulic solutions.</template
    >

    <VRow justify="center">
      <VCol cols="12" md="4">
        <VImg
          cover
          src="/images/infrastructure-content-1.svg"
          rounded="lg"
          class="zoom-on-hover"
        />
      </VCol>

      <VCol cols="12" md="8" class="font-inter">
        <h3 class="mb-5">
          <span class="text-secondary">
            Key Features of Our Manufacturing Facility:
          </span>
        </h3>

        <ul>
          <li>
            <strong class="text-primary">Advanced Machinery: </strong>Our
            facility is equipped with array of cutting-edge CNC & VMC machines
            that ensure high precision and consistent quality in every product
            we manufacture. These technologies allow us to produce complex
            hydraulic components with tight tolerances and superior finish.
          </li>
          <li>
            <strong class="text-primary">Quality Control: </strong>Quality is at
            the core of our manufacturing process. Each product undergoes
            rigorous testing and inspection at various stages of production to
            ensure it meets the highest standards of performance, durability,
            and safety. Our quality control systems are ISO 9001:2015 certified
            from TUV SUD, reflecting our commitment to excellence.
          </li>
          <li>
            <strong class="text-primary">Skilled Workforce: </strong>Our
            manufacturing success is driven by a team of highly skilled
            engineers, technicians and operators who are experts in hydraulics.
            Continuous training and development ensure our workforce remains at
            the forefront of industry advancements.
          </li>
        </ul>
      </VCol>
    </VRow>
  </FlodyneContainer>

  <FlodyneContainer color="primary">
    <VRow justify="center">
      <VCol cols="12" md="8">
        <h3
          class="font-weight-bold mb-8"
          :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'"
        >
          Design & <span class="text-secondary">Development</span>
        </h3>
        <ul class="ml-5">
          <li>
            At Flowdyne Pumps, manufacturing of QUALITY Canned Motor Pumps in
            based on team work philosophy that characterizes pump design &
            engineering.
          </li>
          <li>
            Material resources planning translate the management goals &
            priorities into Material, Men & Machine requirements. This helps in
            shorter lead times and on-time delivery.
          </li>
          <li>
            Different steps of the manufacturing process take place in a single
            production unit & this helps in co-ordination of various activities,
            namely marketing to engineering & manufacturing to final testing.
          </li>
          <li>
            Easy & fast assembly of components assures prompt delivery of the
            pumps. In addition, availability of large stock of components at any
            time guarantees timely supply of spares parts.
          </li>
          <li>
            The pumps are painted according to the company specifications or to
            the customer’s specification when order quantity is high.
          </li>
          <li>
            The packing is made carefully so as to protect the product and
            guarantee its perfect condition at delivery.
          </li>
        </ul>
      </VCol>
      <VCol cols="12" md="4">
        <VImg
          cover
          src="https://picsum.photos/400/400"
          rounded="lg"
          class="zoom-on-hover"
        />
      </VCol>
    </VRow>
  </FlodyneContainer>

  <FlodyneContainer>
    <VRow>
      <VCol cols="12" md="8">
        <h3
          class="font-weight-bold mb-8"
          :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'"
        >
          Testing <span class="text-secondary">Facilities</span>
        </h3>
        <p>
          Our Testing Facility is a cornerstone of our commitment for delivering
          hydraulic solutions that meet the highest standards of performance and
          reliability. This advanced facility is dedicated to rigorously
          evaluating our products to ensure they perform optimally in real-world
          conditions.
        </p>
        <br />
        <p>
          We have all the required measuring instruments like Digital Verniers,
          Groove verniers, Micro meters, Oil Flow Meters upto 400 LPM, Digital
          Pressure Gauges, Vaccum Gauges, Temperature Gauges etc. We also have
          Test Bench for testing of Hydraulic Cylinders & Hydraulic Valve
          stands. Further we are equipped with inhouse oil testing lab having
          Laser Particle Analyser & digital patch test imaging machines.
        </p>
        <strong class="text-secondary">Specifications</strong>
        <p>The capacity of the Test Bed is as follows:</p>
        <ul class="ml-5">
          <li>Pumps with flow rates from 1m/h to 250m3/hr can be tested.</li>
          <li>Heads of up to 200m are measured with standard equipment.p</li>
          <li>
            Power is measured with a twin element wattmeter, connected through
            potential and current transformers, which are in turn connected to
            two phases of power supply to motor.
          </li>
          <li>
            Meter drives up to 200kw can be used for testing.
            <NuxtLink
              class="font-weight-bold text-primary text-decoration-none"
              to="/"
              >READ MORE</NuxtLink
            >
          </li>
        </ul>
      </VCol>
      <VCol cols="12" md="4">
        <VImg
          cover
          src="/images/infrastructure-2.svg"
          rounded="lg"
          class="zoom-on-hover"
        />
      </VCol>
    </VRow>
  </FlodyneContainer>
  <FlodyneContainer padless>
    <VImg
      cover
      src="/images/infrastructure-1.svg"
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

<script lang="ts" setup></script>

<style scoped>
ul li {
  margin-bottom: 1rem; /* Adjust this value for desired spacing */
}

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
