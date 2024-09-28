<template>
  <!-- Banner -->
  <FlodyneContainer color="primary" padless>
    <VLayout height="64">
      <FlodyneMenu />
    </VLayout>

    <VRow align="center" class="font-Inter">
      <VCol cols="12" md="6">
        <div>
          <div class="text-h2 font-weight-bold">
            Welcome to
            <div class="text-secondary">Flodyne</div>
          </div>
          <div class="my-10">
            Flodyne specializes in providing high-quality hydraulic systems and
            solutions. With a commitment to excellence and innovation, we
            provide a range of products designed to meet the diverse needs of
            our clients across various core industries like Steel, Power, Mining
            & Construction.
          </div>
          <VBtn size="large" rounded="pill" color="secondary">
            Hydraulic Solutions, Engineered for Excellence</VBtn
          >
        </div>
      </VCol>
      <VCol cols="12" md="6">
        <VImg src="/images/home/home-hero.svg" alt="Flodyne Home Hero" />
      </VCol>
    </VRow>
  </FlodyneContainer>
  <!-- Client logos -->
  <FlodyneContainer padless>
    <VRow>
      <VCol cols="4" md="2" v-for="i in 6" :key="i">
        <VImg max-width="120" src="/images/home/client-logo.svg"></VImg>
      </VCol>
    </VRow>
  </FlodyneContainer>
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
          At Flodyne, we are proud to be at the forefront of sustainable
          construction technology with our advanced Fly Ash Brick and Paver
          Block Machines. Leveraging our expertise in hydraulic engineering, we
          design and manufacture state-of-the-art machines that produce
          high-quality fly ash bricks, a crucial component for eco-friendly
          building projects.
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
          cylinders provides long-lasting durability and reliable performance,
          reducing downtime and maintenance costs.
        </div>

        <div class="mt-8">
          <strong class="text-secondary">Oil Filtration Systems:</strong>
          Our Filtration Trolley is a portable with high efficiency designed to
          ensure your hydraulic and lubrication fluids remain clean and free
          from contaminants, enhancing the performance and lifespan of your
          equipment.
        </div>
        <div class="mt-8">
          <VBtn color="secondary" rounded="pill">Know More</VBtn>
        </div>
      </VCol>
      <VCol cols="12" md="6">
        <VRow>
          <VCol cols="6">
            <VCard>
              <VImg cover src="/images/what-we-do-1.png" />
            </VCard>
          </VCol>
          <VCol cols="6">
            <VCard height="100%" width="100%">
              <VImg cover src="/images/what-we-do-2.png" />
            </VCard>
          </VCol>
          <VCol cols="6">
            <VCard height="100%" width="100%">
              <VImg cover src="/images/what-we-do-3.png" />
            </VCard>
          </VCol>
          <VCol cols="6">
            <VCard height="100%" width="100%">
              <VImg cover src="/images/what-we-do-4.png" />
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
      <VCol cols="4">
        <VCard rounded="lg">
          <VImg
            src="/images/what-we-do-3.png"
            content-class="d-flex flex-column justify-space-between"
          >
            <VCardTitle
              class="white--text text-h4 font-weight-bold"
              style="color: white; font-family: 'Roboto', sans-serif"
              >Flodyne Machine</VCardTitle
            >
            <VCardItem>
              <VBtn color="secondary" class="px-8">Learn More</VBtn>
            </VCardItem>
          </VImg>
        </VCard>
      </VCol>
      <VCol cols="4">
        <VCard rounded="lg">
          <VImg
            cover
            src="/images/what-we-do-1.png"
            content-class="d-flex flex-column justify-space-between"
          >
            <VCardTitle
              class="white--text text-h4 font-weight-bold"
              style="
                color: white;
                background-color: rgba(0, 0, 0, 0.5);
                padding: 8px;
                font-family: 'Roboto', sans-serif;
              "
              >Flodyne Machine</VCardTitle
            >
            <VCardItem>
              <VBtn color="secondary" class="px-8">Learn More</VBtn>
            </VCardItem>
          </VImg>
        </VCard>
      </VCol>
      <VCol cols="4">
        <VCard rounded="lg">
          <VImg
            src="/images/what-we-do-3.png"
            content-class="d-flex flex-column justify-space-between"
          >
            <VCardTitle
              class="white--text text-h4 font-weight-bold text-md-h4 text-sm-h6"
              style="color: white; font-family: 'Roboto', sans-serif"
              >Flodyne Machine</VCardTitle
            >
            <VCardItem>
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
      class="mx-auto my-10"
      src="/images/home/matrics.png"
    ></VImg>
  </FlodyneContainer>

  <!-- Infra/Gallery -->
  <FlodyneContainer color="primary">
    <template #title>Infra/Gallery</template>
    <VRow>
      <VCol cols="12" md="5">
        <VImg cover src="/images/gallery1.png" rounded="lg"></VImg>
      </VCol>
      <VCol cols="12" md="4">
        <VRow>
          <VCol cols="12">
            <VImg cover src="/images/gallery2.png" rounded="lg"></VImg>
          </VCol>
          <VCol cols="12">
            <VImg cover src="/images/gallery3.png" rounded="lg"></VImg>
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12" md="3">
        <VRow>
          <VCol cols="12">
            <VImg cover src="/images/what-we-do-4.png" rounded="lg"></VImg>
          </VCol>
          <VCol cols="12">
            <VIcon icon="mdi-arrow-right" size="120"></VIcon>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </FlodyneContainer>
  <!-- Your Advantages  -->

  <FlodyneContainer>
    <template #title>
      Your Advantages with <span class="text-secondary">Flodyne</span></template
    >
    <template #subtitle>
      Flodyne Business offers a multitude of advantages that set us apart in the
      field of fluid dynamics solutions:
    </template>

    <VRow class="my-16 text-center">
      <VCol cols="6" md="3">
        <VBtn icon color="primary" size="120">
          <VIcon icon="mdi-check" size="40"> </VIcon>
        </VBtn>
        <h4 class="mt-8 mb-2 text-h6 font-weight-bold">Quality Manufacture</h4>
        <div>Development and manufacturing in Germany</div>
      </VCol>
      <VCol cols="6" md="3">
        <VBtn icon color="primary" size="120">
          <VIcon icon="mdi-check" size="40"></VIcon>
        </VBtn>
        <h4 class="mt-8 mb-2 text-h6 font-weight-bold">Quality Manufacture</h4>
        <div>Development and manufacturing in Germany</div>
      </VCol>
      <VCol cols="6" md="3">
        <VBtn icon color="primary" size="120">
          <VIcon icon="mdi-check" size="40"></VIcon>
        </VBtn>
        <h4 class="mt-8 mb-2 text-h6 font-weight-bold">Quality Manufacture</h4>
        <div>Development and manufacturing in Germany</div>
      </VCol>
      <VCol cols="6" md="3">
        <VBtn icon color="primary" size="120">
          <VIcon icon="mdi-check" size="40"></VIcon>
        </VBtn>
        <h4 class="mt-8 mb-2 text-h6 font-weight-bold">Quality Manufacture</h4>
        <div>Development and manufacturing in Germany</div>
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
                    <VImg src="/images/testimonial.png"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-secondary"
                  >Ken Kieu</VListItemTitle
                >
                <VListItemSubtitle class="text-secondary text-caption"
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
                    <VImg src="/images/testimonial.png"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-secondary"
                  >Ken Kieu</VListItemTitle
                >
                <VListItemSubtitle class="text-secondary text-caption"
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
                    <VImg src="/images/testimonial.png"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-secondary"
                  >Ken Kieu</VListItemTitle
                >
                <VListItemSubtitle class="text-secondary text-caption"
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
  { title: "Brick Making Machine", to: "/brick-making-machine" },
  { title: "Blogs", to: "/blogs" },
  { title: "Contact us", to: "/contact" },
]);

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
