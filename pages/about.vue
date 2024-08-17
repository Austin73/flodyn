<template>
  <!-- A Modern Digital Factory -->
  <FlodyneContainer>
    <template #title>A Modern Digital Factory </template>
    <template #subtitle>Designing Innovative Experiences With Our Skills In Design And Development</template>
    <VRow>
      <VCol cols="6">
        <VRow justify="end" align="center">
          <VCol class="text-secondary font-weight-bold"
            :class="$vuetify.display.mdAndUp ? 'text-h1 text-right' : 'text-h2 text-center'">99%</VCol>
          <VCol cols="auto" class="text-h4">
            <div>Positive</div>
            <div>Feedback</div>
          </VCol>
        </VRow>
      </VCol>
      <VDivider vertical />
      <VCol cols="6">
        <VRow align="center">
          <VCol cols="auto" class="text-secondary font-weight-bold"
            :class="$vuetify.display.mdAndUp ? 'text-h1 text-right' : 'text-h2 text-center'">10K</VCol>
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
        <h3 class="font-weight-bold" :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'">
          Discover Flodyne Business: <br />
          Your Partner in <span class="text-secondary">Driving Success</span>
        </h3>
        <div class="my-16">
          At Flodyne Business, we are committed to empowering businesses to thrive in today's dynamic market landscape.
          With a focus on innovation, efficiency, and customer-centric solutions, we provide comprehensive services to
          streamline operations, enhance productivity, and drive growth.
        </div>
        <VBtn color="secondary" rounded="pill" class="px-10">Contact Us</VBtn>
      </VCol>
      <VCol cols="12" md="1" />
      <VCol cols="12" md="4">
        <VImg rounded="xl" cover src="https://picsum.photos/400/500" alt="About Us" />
      </VCol>
    </VRow>
  </FlodyneContainer>
  <FlodyneContainer>
    <VRow align="center">
      <VCol cols="12" md="5">
        <VImg rounded="xl" cover src="https://picsum.photos/500/500" alt="About Us" />
      </VCol>
      <VCol cols="12" md="1" />
      <VCol cols="12" md="5">
        <h3 class="font-weight-bold" :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'">
          <span class="text-primary">Our</span> <span class="text-secondary">Mission</span>
        </h3>
        <div class="my-16">
          <p>Our mission is to be the trusted partner of businesses, offering tailored solutions that address their
            unique
            challenges and propel them towards success. We strive to deliver excellence in every aspect of our work,
            fostering long-term relationships built on integrity, transparency, and mutual respect.</p>
          <p>Flodyne Business offers a diverse range of services designed to meet the evolving needs of modern
            businesses.
            From strategic consulting and process optimization to digital transformation and technology implementation,
            we
            leverage our expertise and experience to deliver tangible results.</p>
        </div>
        <VBtn color="secondary" rounded="pill" class="px-10">Learn more</VBtn>
      </VCol>
    </VRow>
  </FlodyneContainer>
  <FlodyneContainer>
    <VRow align="center">

      <VCol cols="12" md="5">
        <h3 class="font-weight-bold" :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'">
          <span class="text-primary">Why Choose</span> <span class="text-secondary">Flodyne Business?</span>
        </h3>
        <div class="my-8">
          <ul>
            <li><strong class="text-primary">Expertise: </strong>Our team consists of seasoned professionals with deep
              industry knowledge and a proven track record of success.</li>
            <li><strong class="text-primary">Customized Solutions: </strong>We understand that every business is unique,
              which is why we take a personalized approach to every project, tailoring our solutions to meet specific
              goals and requirements.</li>
            <li><strong class="text-primary">Innovation: </strong>We are constantly exploring new technologies and
              methodologies to stay ahead of the curve and provide cutting-edge solutions to our clients.</li>
            <li><strong class="text-primary">Client-Centric Approach: </strong>Building strong relationships with our
              clients is at the heart of everything we do. We prioritize open communication, collaboration, and
              responsiveness to ensure we exceed expectations every step of the way.</li>
          </ul>
        </div>
        <VBtn color="secondary" rounded="pill" class="px-10">Learn more</VBtn>
      </VCol>
      <VCol cols="12" md="1" />
      <VCol cols="12" md="5">
        <VImg rounded="xl" cover src="https://picsum.photos/500/500" alt="About Us" />
      </VCol>
    </VRow>
  </FlodyneContainer>
  <FlodyneContainer padless>
    <VImg cover src="https://picsum.photos/1200/500" alt="About Us" rounded="xl" />
  </FlodyneContainer>
</template>
