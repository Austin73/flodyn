<template>
  <!-- Banner -->
  <FlodyneContainer color="primary" padless>
    <VLayout height="64">
      <FlodyneMenu />
    </VLayout>

    <VRow align="center" class="font-Inter">
      <VCol cols="12" md="6">
        <div class="title-container">
          <br />
          <br />
          <div class="text-h3 font-weight-bold welcome-text">
            Welcome to

            <br />
            <div class="text-h2 secondary mt-2">
              <VImg src="/images/flodyne-logo.png" alt="Flodyne Home Hero" />
            </div>
          </div>
          <div class="my-10">
            Flodyne specializes in providing high-quality hydraulic systems and
            solutions. With a commitment to excellence and innovation, we
            provide a range of products designed to meet the diverse needs of
            our clients across various core industries like Steel, Power, Mining
            & Construction.
          </div>
          <div>
            <VBtn
              rounded="pill"
              color="secondary text-black"
              class="reduced-spacing"
            >
              <span class="text-white">
                Hydraulic Solutions,Engineered for Excellence</span
              >
            </VBtn>
            <br />
            <br />
          </div>
        </div>
      </VCol>
      <VCol cols="12" md="6">
        <VImg
          src="/images/home/Hero page-1@0.5x.png"
          alt="Flodyne Home Hero"
          class="zoom-on-hover"
        />
      </VCol>
    </VRow>
  </FlodyneContainer>
  <!-- Client logos -->
  <!-- <FlodyneContainer padless>
    <VRow>
      <VCol cols="4" md="2" v-for="i in 6" :key="i">
        <VImg max-width="120" src="/images/home/client-logo.svg"></VImg>
      </VCol>
    </VRow>
  </FlodyneContainer> -->
  <!-- What we do -->
  <FlodyneContainer padless>
    <VRow>
      <VCol cols="12" md="6">
        <h3 class="text-h3 text-primary font-weight-bold">What we do!</h3>
        <div class="mt-8">
          Flodyne expertise lies in the design, manufacturing and supply of
          hydraulic equipment, systems and components. Here’s a closer look at
          what we do:
        </div>
        <div class="mt-8">
          <strong class="text-secondary"
            >Fly Ash Brick and Paver Block Making Machines:
          </strong>
          At Flodyne, we are at the forefront of sustainable construction
          technology with our advanced Fly Ash Brick and Paver Block Machines.
          We design and manufacture machines that produce high-quality fly ash
          bricks and paver blocks, a crucial component for eco-friendly building
          projects.
        </div>
        <div class="mt-8">
          <strong class="text-secondary"
            >Hydraulic Power Units and Valve Stands:</strong
          >
          We deliver customised top-of-the-line hydraulic power units (HPUs) and
          valve stands designed to meet the diverse needs of our clients across
          various industries. Our HPUs are known for their robust construction,
          energy efficiency and superior performance.
        </div>
        <div class="mt-8">
          <strong class="text-secondary">Hydraulic Cylinders:</strong>
          Flodyne hydraulic cylinders are built with high-quality materials to
          ensure that they withstand the toughest operating conditions. The
          unique design and cutting-edge manufacturing facility of hydraulic
          cylinders provides long-lasting durability and reliable performance.
        </div>

        <div class="mt-8">
          <strong class="text-secondary">Oil Filtration Systems:</strong>
          Our Filtration systems are designed to ensure your hydraulic and
          lubrication fluids remain free from contaminants, enhancing the
          performance and lifespan of your equipment.
        </div>
        <div class="mt-8">
          <VBtn color="secondary" rounded="pill">Know More</VBtn>
        </div>
      </VCol>
      <VCol cols="12" md="6" class="mt-5">
        <VRow>
          <VCol cols="6" class="d-flex justify-center">
            <VCard class="ma-2" width="100%">
              <VImg
                cover
                src="/images/whatwedoimage/11.jpg"
                class="zoom-on-hover"
              />
            </VCard>
          </VCol>
          <VCol cols="6" class="d-flex justify-center">
            <VCard class="ma-2" width="100%">
              <VImg
                cover
                src="/images/whatwedoimage/12.jpg"
                class="zoom-on-hover"
              />
            </VCard>
          </VCol>
          <VCol cols="6" class="d-flex justify-center">
            <VCard class="ma-2" width="100%">
              <VImg
                cover
                src="/images/whatwedoimage/13.jpg"
                class="zoom-on-hover"
              />
            </VCard>
          </VCol>
          <VCol cols="6" class="d-flex justify-center">
            <VCard class="ma-2" width="100%">
              <VImg
                cover
                src="/images/whatwedoimage/14.jpg"
                class="zoom-on-hover"
              />
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </FlodyneContainer>

  <!-- Products & Services -->
  <FlodyneContainer color="primary">
    <template #title
      >Product & Services <span class="text-secondary">We Offer</span></template
    >
    <template #subtitle>
      We specialize in providing top-tier hydraulic solutions and services
      tailored to meet the diverse needs of various core industries. Our
      commitment to quality, innovation and customer satisfaction drives us to
      deliver following products and services:
    </template>
  <VRow class="my-16">
  <VCol cols="12" md="4">
    <VCard rounded="xl">
      <VImg
        src="/images/productandservices/1.jpeg"
        content-class="d-flex flex-column justify-space-between"
        class="zoom-on-hover"
      >
        <VCardTitle
          class="white--text text-h4 font-weight-bold d-flex justify-center"
          style="
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 8px;
            font-family: 'Roboto', sans-serif;
          "
        >Flodyne Machine</VCardTitle>
        <VCardItem class="d-flex justify-center">
          <VBtn color="secondary" class="px-8">Learn More</VBtn>
        </VCardItem>
      </VImg>
    </VCard>
  </VCol>

  <VCol cols="12" md="4">
    <VCard rounded="xl">
      <VImg
        cover
        src="/images/productandservices/2.jpeg"
        content-class="d-flex flex-column justify-space-between"
        class="zoom-on-hover"
      >
        <VCardTitle
          class="white--text text-h4 font-weight-bold d-flex justify-center"
          style="
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 8px;
            font-family: 'Roboto', sans-serif;
          "
        >Flodyne Machine</VCardTitle>
        <VCardItem class="d-flex justify-center">
          <VBtn color="secondary" class="px-8">Learn More</VBtn>
        </VCardItem>
      </VImg>
    </VCard>
  </VCol>

  <VCol cols="12" md="4">
    <VCard rounded="xl">
      <VImg
        src="/images/productandservices/3.jpeg"
        content-class="d-flex flex-column justify-space-between"
        class="zoom-on-hover"
      >
        <VCardTitle
          class="white--text text-h4 font-weight-bold d-flex justify-center"
          style="
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 8px;
            font-family: 'Roboto', sans-serif;
          "
        >
          Flodyne Machine
        </VCardTitle>
        <VCardItem class="d-flex justify-center">
          <VBtn color="secondary" class="px-8">Learn More</VBtn>
        </VCardItem>
      </VImg>
    </VCard>
  </VCol>
</VRow>

    <VRow justify="center">
      <VCol cols="auto">
        <VBtn
          rounded="circle"
          variant="outlined"
          icon="mdi-chevron-left"
        ></VBtn>
      </VCol>
      <VCol cols="auto">
        <VBtn
          rounded="circle"
          variant="outlined"
          icon="mdi-chevron-right"
        ></VBtn>
      </VCol>
    </VRow>
  </FlodyneContainer>

  <!-- Metrics -->
  <FlodyneContainer>
    <template #title><span class="text-primary">Metrics</span></template>
    <template #subtitle>
      Metrics are the backbone of performance evaluation and optimization. At
      Flodyne Business, we leverage a range of key metrics to ensure that our
      solutions deliver tangible results and drive continuous improvement
    </template>
    <VImg
      max-width="400"
      cover
      class="mx-auto my-10 zoom-on-hover"
      src="/images/home/matrics.png"
    ></VImg>
  </FlodyneContainer>

  <!-- infra/gallery -->
  <FlodyneContainer color="primary">
    <template #title>Infra/Gallery</template>

    <!-- First Row of 4 Images -->
    <VRow>
      <VCol
        cols="12"
        md="3"
        v-for="(image, index) in currentImages.slice(0, 8)"
        :key="index"
      >
        <VImg cover :src="image" class="gallery-image"></VImg>
      </VCol>
    </VRow>

    <!-- Navigation Button for Next Set -->
    <!-- <VRow class="text-center">
      <VCol cols="12">
        <VIcon
          icon="mdi-arrow-right"
          size="120"
          @click="nextSet"
          class="pointer"
        ></VIcon>
      </VCol>
    </VRow> -->
  </FlodyneContainer>
  <!-- Your Advantages  -->

  <FlodyneContainer>
    <template #title>
      Your Advantages with <span class="text-secondary">Flodyne</span></template
    >
    <template #subtitle>
      Choosing Flodyne as your hydraulic solutions provider comes with a host of
      advantages designed to ensure your success and satisfaction
    </template>

    <VRow class="my-16 text-center">
      <VCol cols="6" md="3">
        <VBtn icon size="120" class="advantage-icon" color="primary">
          <VImg
            src="/images/Icon/Artboard 16 copy 2.png"
            alt="Flodyne Home Hero"
            width="50"
            height="50"
          />
        </VBtn>
        <h4 class="mt-8 mb-2 text-h6 font-weight-bold">Unmatched Quality</h4>
      </VCol>

      <VCol cols="6" md="3">
        <VBtn icon color="primary" size="120" class="advantage-icon">
          <!-- <VIcon icon="mdi-check" size="40"></VIcon> -->
          <VImg
            src="/images/Icon/Artboard 16 copy 3.png"
            alt="Flodyne Home Hero"
            width="50"
            height="50"
          />
        </VBtn>
        <h4 class="mt-8 mb-2 text-h6 font-weight-bold">Customized Solution</h4>
      </VCol>
      <VCol cols="6" md="3">
        <VBtn icon color="primary" size="120" class="advantage-icon">
          <!-- <VIcon icon="mdi-check" size="40"></VIcon> -->
          <VImg
            src="/images/Icon/Artboard 16 copy 4.png"
            alt="Flodyne Home Hero"
            width="50"
            height="50"
          />
        </VBtn>
        <h4 class="mt-8 mb-2 text-h6 font-weight-bold">
          Expertise & Experience
        </h4>
      </VCol>
      <VCol cols="6" md="3">
        <VBtn
          icon
          color="primary"
          size="120"
          aspect-ratio="12"
          class="advantage-icon"
        >
          <!-- <VIcon icon="mdi-check" size="40"></VIcon> -->
          <VImg
            src="/images/Icon/Artboard 16 copy.png"
            alt="Flodyne Home Hero"
            width="50"
            height="50"
          />
        </VBtn>
        <h4 class="mt-8 mb-2 text-h6 font-weight-bold">
          Comprehensive Support
        </h4>
      </VCol>
    </VRow>
  </FlodyneContainer>

  <FlodyneContainer padless>
    <VRow class="d-flex align-center justify-center">
      <!-- Previous Button -->
      <VCol cols="1" class="text-center">
        <VIcon
          icon="mdi-arrow-left"
          size="40"
          class="pointer"
          @click="goPrev"
        ></VIcon>
      </VCol>

      <!-- Logo Items -->
      <VCol cols="2" v-for="(logo, index) in displayedLogos" :key="index">
        <VImg :src="logo" max-width="120"></VImg>
      </VCol>

      <!-- Next Button -->
      <VCol cols="1" class="text-center">
        <VIcon
          icon="mdi-arrow-right"
          size="40"
          class="pointer"
          @click="goNext"
        ></VIcon>
      </VCol>
    </VRow>
  </FlodyneContainer>
  <!-- Testimonials -->
  <FlodyneContainer>
    <template #title>Testimo<span class="text-secondary">nials</span></template>
    <template #subtitle
      >Here are our some clints see what they are saying about Flodyne</template
    >
    <v-window v-model="onboarding">
      <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
        <VRow>
          <VCol cols="12" md="4">
            <VSheet color="grey-lighten-4" class="pa-3" rounded="lg">
              <VListItem class="px-0">
                <template #prepend>
                  <VAvatar size="80">
                    <VImg src="/images/testimonial1.jpeg"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-black"
                  >Maneesh Paul</VListItemTitle
                >
                <VListItemSubtitle class="text-caption text-black"
                  >CEO, Company</VListItemSubtitle
                >
              </VListItem>
              <v-rating
                :model-value="5"
                active-color="yellow"
                size="x-small"
                class="ml-n2"
              ></v-rating>
              <div class="text-caption">
                Working with Flodyne Business has been a game-changer for our
                company. Their expertise in fluid dynamics helped us optimize
                our manufacturing processes, resulting in significant cost
                savings and improved efficiency. Their team was professional,
                responsive, and dedicated to delivering results. I highly
                recommend Flodyne Business to anyone looking to elevate their
                operations."
              </div>
            </VSheet>
          </VCol>
          <VCol cols="12" md="4">
            <VSheet color="grey-lighten-4" class="pa-3" rounded="lg">
              <VListItem class="px-0">
                <template #prepend>
                  <VAvatar size="80">
                    <VImg src="/images/testimonial2.jpeg"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-black"
                  >Aditya Roy</VListItemTitle
                >
                <VListItemSubtitle class="text-black text-caption"
                  >CEO, Company</VListItemSubtitle
                >
              </VListItem>
              <v-rating
                :model-value="5"
                active-color="yellow"
                size="x-small"
                class="ml-n2"
              ></v-rating>
              <div class="text-caption">
                Our experience with Flodyne Business has been incredibly
                beneficial. Under the leadership of their team applied advanced
                fluid dynamics techniques that significantly streamlined our
                production workflows. This collaboration has not only reduced
                our operational costs but also boosted our overall output. The
                professionalism and dedication of the Flodyne team were evident
                at every step, making the entire process seamless. I highly
                recommend Flodyne Business to any organization looking to
                optimize their operations.
              </div>
            </VSheet>
          </VCol>
          <VCol cols="12" md="4">
            <VSheet color="grey-lighten-4" class="pa-3" rounded="lg">
              <VListItem class="px-0">
                <template #prepend>
                  <VAvatar size="80">
                    <VImg src="/images/testimonial3.jpeg"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-black"
                  >Sunaina Khan</VListItemTitle
                >
                <VListItemSubtitle class="text-black text-caption"
                  >CEO, Company</VListItemSubtitle
                >
              </VListItem>
              <v-rating
                :model-value="5"
                active-color="yellow"
                size="x-small"
                class="ml-n2"
              ></v-rating>
              <div class="text-caption">
                Collaborating with Flodyne Business has transformed our
                operations. Their in-depth knowledge of fluid dynamics allowed
                us to refine our production methods, leading to remarkable cost
                reductions and enhanced productivity. The Flodyne team
                demonstrated exceptional professionalism and responsiveness
                throughout the project, truly committed to achieving our goals.
                I wholeheartedly endorse Flodyne Business for anyone seeking to
                enhance their operational efficiency.
              </div>
            </VSheet>
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

  <VBtn
    class="back-to-top"
    color="secondary"
    @click="scrollToTop"
    rounded="pill"
  >
    Back to Top
  </VBtn>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "home",
});

const drawer = ref(false);
const links = ref([
  { title: "About us", to: "/about" },
  { title: "Infrastructure", to: "/infrastructure" },
  { title: "Products", to: "/products" },
  { title: "Brick Making Machine", to: "/fly-ash-brick-machine" },
  { title: "Blogs", to: "/blogs" },
  { title: "Contact us", to: "/contact" },
]);

const length = ref(3);
const onboarding = ref(1);

const logoLength = ref(7);
const onboardingLogo = ref(1);

function next() {
  onboarding.value =
    onboarding.value + 1 > length.value ? 1 : onboarding.value + 1;
}
function prev() {
  onboarding.value =
    onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1;
}

function nextLogo() {
  onboardingLogo.value =
    onboardingLogo.value + 1 > logoLength.value ? 1 : onboardingLogo.value + 1;
}
function prevLogo() {
  onboardingLogo.value =
    onboardingLogo.value - 1 <= 0 ? logoLength.value : onboardingLogo.value - 1;
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const imageSets = ref([
  [
    "/images/gallery/gallery1.jpg",
    "/images/gallery/gallery2.png",
    "/images/gallery/gallery4.jpeg",
    "/images/gallery/gallery5.jpeg",
    "/images/gallery/gallery6.jpeg",
    "/images/gallery/gallery7.jpeg",
    "/images/gallery/gallery8.jpeg",
    "/images/gallery/gallery9.jpeg",
  ],
]);

const currentIndex = ref(0);

// Computed property to get the current set of images
const currentImages = ref(imageSets.value[currentIndex.value]);

const nextSet = () => {
  currentIndex.value = (currentIndex.value + 1) % imageSets.value.length; // Loop back to the first set
  currentImages.value = imageSets.value[currentIndex.value];
};

const allLogos = ref([
  "/images/client-logo/Artboard 2 copy 2.jpg",
  "/images/client-logo/Artboard 2 copy 4.jpg",
  "/images/client-logo/Artboard 2 copy 5.jpg",
  "/images/client-logo/Artboard 2 copy 6.jpg",
  "/images/client-logo/Artboard 2 copy 7.jpg",
  "/images/client-logo/Artboard 2 copy 10.jpg",
  "/images/client-logo/Artboard 2 copy 11.jpg",
  "/images/client-logo/Artboard 2 copy 12.jpg",
  // Add more logos as needed
]);

// Number of logos to display at a time
const logosToShow = ref(5); // Show 5 logos at a time

// Index for the current visible set of logos
const currentLogoSetIndex = ref(0);

// Computed property for the visible logos
const displayedLogos = ref(
  allLogos.value.slice(currentLogoSetIndex.value, logosToShow.value)
);

// Method to move to the next set of logos
const goNext = () => {
  if (currentLogoSetIndex.value + logosToShow.value < allLogos.value.length) {
    currentLogoSetIndex.value += logosToShow.value;
  } else {
    currentLogoSetIndex.value = 0; // Reset to the beginning when reaching the end
  }
  updateDisplayedLogos();
};

// Method to move to the previous set of logos
const goPrev = () => {
  if (currentLogoSetIndex.value - logosToShow.value >= 0) {
    currentLogoSetIndex.value -= logosToShow.value;
  } else {
    currentLogoSetIndex.value = allLogos.value.length - logosToShow.value; // Go to the last set when at the beginning
  }
  updateDisplayedLogos();
};

// Update the displayed logos based on the current index
const updateDisplayedLogos = () => {
  displayedLogos.value = allLogos.value.slice(
    currentLogoSetIndex.value,
    currentLogoSetIndex.value + logosToShow.value
  );
};
</script>

<style scoped>
.reduced-spacing {
  letter-spacing: normal;
}

.text-white {
  color: #a4202033;
}
.title-container {
  display: flex;
  flex-direction: column; /* Ensures the texts are stacked */
  align-items: flex-start; /* Aligns both texts to the left */
}

.welcome-text {
  max-width: 100%; /* Ensures it doesn't go wider than Flodyne */
  white-space: nowrap; /* Prevents text from wrapping to the next line */
}

.back-to-top {
  position: fixed;
  bottom: 20px; /* Distance from the bottom of the page */
  right: 20px; /* Distance from the right of the page */
  z-index: 1000; /* Ensures it's always on top of other elements */
}

.custom-icon-button {
  padding: 0; /* Remove padding to prevent button size issues */
  width: auto; /* Set width to auto to fit the image size */
  height: auto; /* Set height to auto */
}

.zoom-on-hover {
  transition: transform 0.5s ease; /* Smooth transition for the zoom effect */
}

.zoom-on-hover:hover {
  transform: scale(1.2); /* Zoom in by 10% on hover */
}

.advantage-icon {
  min-width: 120px; /* Ensure the button has a minimum width */
  min-height: 120px; /* Ensure the button has a minimum height */
}

.advantage-button {
  object-fit: contain; /* Ensures the image maintains its aspect ratio */
}

.pointer {
  cursor: pointer;
}

.gallery-image {
  height: 200px; /* Adjust height to your preference */
  width: 100%;
  object-fit: cover; /* Ensures the image scales without distortion */
}
</style>
