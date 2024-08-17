<template>

  <!-- Banner -->
  <FlodyneContainer color="primary" padless>
    <VLayout height="64">
      <FlodyneMenu />
    </VLayout>

    <VRow align="center">
      <VCol cols="12" md="6">
        <div>
          <div class="text-h2">
            Welcome to <div class="text-secondary">Flodyne</div>
          </div>
          <div class="my-10">
             Flodyne specializes in providing high-quality hydraulic systems and solutions.
             With a commitment to excellence and innovation, 
             we provide a range of products designed to meet the diverse 
             needs of our clients across various core industries like Steel, Power, Mining & Construction.
          </div>
          <VBtn size="large" rounded="pill" color="secondary"> Optimize your operation</VBtn>
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
      <VCol cols="4" md="2" v-for=" i in 6 " :key="i">
        <VImg max-width="120" src="/images/home/client-logo.svg"></VImg>
      </VCol>
    </VRow>
  </FlodyneContainer>
  <!-- What we do -->
  <FlodyneContainer padless>
    <VRow>
      <VCol cols="12" md="6">
        <h3 class="text-h3 text-primary">
          What we do
        </h3>
        <div class="mt-8">At Flodyne Business, we specialize in leveraging cutting-edge technologies and expertise to
          optimize fluid
          dynamics across various industries.</div>
        <div class="mt-8">
          <strong class="text-secondary">Advanced Computational Fluid Dynamics (CFD) Simulations:</strong>
          Utilizing state-of-the-art simulation tools, we analyze and model fluid flow, heat transfer, and related
          phenomena to optimize system performance and efficiency.
        </div>
        <div class="mt-8">

          <strong class="text-secondary">Customized Fluid Handling Systems:</strong>
          We design and engineer tailored fluid handling systems to meet the unique requirements of our clients,
          ensuring
          seamless operation and maximum productivity.
        </div>
        <div class="mt-8">
          <strong class="text-secondary">Consultancy Services:</strong>
          Our team of experienced engineers provides personalized consultancy services to address specific challenges
          and
          optimize fluid dynamics in existing systems, processes, and facilities.
        </div>
        <div class="mt-8">
          <VBtn color="secondary" rounded="pill">Know More</VBtn>
        </div>

      </VCol>
      <VCol cols="12" md="6">
        <VRow>
          <VCol cols="6">
            <VCard>
              <VImg cover src="https://picsum.photos/600/600?random=1" />
            </VCard>
          </VCol>
          <VCol cols="6">
            <VCard height="100%" width="100%">
              <VImg cover src="https://picsum.photos/600/600?random=2" />
            </VCard>
          </VCol>
          <VCol cols="6">
            <VCard height="100%" width="100%">
              <VImg cover src="https://picsum.photos/600/600?random=3" />
            </VCard>
          </VCol>
          <VCol cols="6">
            <VCard height="100%" width="100%">
              <VImg cover src="https://picsum.photos/600/600?random=4" />
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </FlodyneContainer>

  <!-- Products & Services -->
  <FlodyneContainer color="primary">
    <template #title>Product & Services <span class="text-secondary">We Offer</span></template>
    <template #subtitle>

      At Flodyne Business, we specialize in leveraging cutting-edge technologies and expertise to optimize fluid
      dynamics across various industries. Our comprehensive suite of services includes:
    </template>
    <VRow class="my-16">
      <VCol cols="4">
        <VCard rounded="lg">
          <VImg src="https://picsum.photos/id/12/600/600" content-class="d-flex flex-column justify-space-between">
            <VCardTitle>Flodyne Machine</VCardTitle>
            <VCardItem>
              <VBtn color="secondary" class="px-8">Learn More</VBtn>
            </VCardItem>
          </VImg>
        </VCard>
      </VCol>
      <VCol cols="4">
        <VCard rounded="lg">
          <VImg src="https://picsum.photos/id/12/600/600" content-class="d-flex flex-column justify-space-between">
            <VCardTitle>Flodyne Machine</VCardTitle>
            <VCardItem>
              <VBtn color="secondary" class="px-8">Learn More</VBtn>
            </VCardItem>
          </VImg>
        </VCard>
      </VCol>
      <VCol cols="4">
        <VCard rounded="lg">
          <VImg src="https://picsum.photos/id/12/600/600" content-class="d-flex flex-column justify-space-between">
            <VCardTitle>Flodyne Machine</VCardTitle>
            <VCardItem>
              <VBtn color="secondary" class="px-8">Learn More</VBtn>
            </VCardItem>
          </VImg>
        </VCard>
      </VCol>
    </VRow>
    <VRow justify="center">
      <VCol cols="auto">
        <VBtn rounded="circle" variant="outlined" icon="mdi-chevron-left"></VBtn>
      </VCol>
      <VCol cols="auto">
        <VBtn rounded="circle" variant="outlined" icon="mdi-chevron-right"></VBtn>
      </VCol>
    </VRow>
  </FlodyneContainer>

  <!-- Metrics -->
  <FlodyneContainer>
    <template #title><span class="text-primary">Metrics</span></template>
    <template #subtitle>
      Metrics are the backbone of performance evaluation and optimization. At Flodyne Business, we leverage a range of
      key metrics to ensure that our solutions deliver tangible results and drive continuous improvement
    </template>
    <VImg max-width="400" cover class="mx-auto my-10" src="/images/home/metrics.svg"></VImg>
  </FlodyneContainer>

  <!-- Infra/Gallery -->
  <FlodyneContainer color="primary">
    <template #title>Infra/Gallery</template>
    <VRow>
      <VCol cols="12" md="5">
        <VImg cover src="https://picsum.photos/id/12/600/510" rounded="lg"></VImg>
      </VCol>
      <VCol cols="12" md="4">
        <VRow>
          <VCol cols="12">
            <VImg cover src="https://picsum.photos/600/300" rounded="lg"></VImg>
          </VCol>
          <VCol cols="12">
            <VImg cover src="https://picsum.photos/600/300" rounded="lg"></VImg>
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12" md="3">
        <VRow>
          <VCol cols="12">
            <VImg cover src="https://picsum.photos/600/550" rounded="lg"></VImg>
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
    <template #title> Your Advantages with <span class="text-secondary">Flodyne</span></template>
    <template #subtitle>
      Flodyne Business offers a multitude of advantages that set us apart in the field of fluid dynamics
      solutions:
    </template>

    <VRow class="my-16 text-center">
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
    <template #subtitle>Here are our some clints see what they are saying about Flodyne</template>
    <v-window v-model="onboarding">
      <v-window-item v-for=" n in length " :key="`card-${n}`" :value="n">
        <VRow>
          <VCol cols="12" md="4">
            <VSheet color="grey-lighten-4" class="pa-3" rounded="lg">
              <VListItem class="px-0">
                <template #prepend>
                  <VAvatar size="80">
                    <VImg src="https://picsum.photos/80/80"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-secondary">Ken Kieu</VListItemTitle>
                <VListItemSubtitle class="text-secondary text-caption">CEO, Company</VListItemSubtitle>
              </VListItem>
              <v-rating :model-value="5" active-color="yellow" size="x-small" class="ml-n2"></v-rating>
              <div class="text-caption">
                Working with Flodyne Business has been a game-changer for our company. Their expertise in fluid dynamics
                helped
                us optimize our manufacturing processes, resulting in significant cost savings and improved efficiency.
                Their
                team was professional, responsive, and dedicated to delivering results. I highly recommend Flodyne
                Business
                to
                anyone looking to elevate their operations."
              </div>
            </VSheet>
          </VCol>
          <VCol cols="12" md="4">
            <VSheet color="grey-lighten-4" class="pa-3" rounded="lg">
              <VListItem class="px-0">
                <template #prepend>
                  <VAvatar size="80">
                    <VImg src="https://picsum.photos/80/80"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-secondary">Ken Kieu</VListItemTitle>
                <VListItemSubtitle class="text-secondary text-caption">CEO, Company</VListItemSubtitle>
              </VListItem>
              <v-rating :model-value="5" active-color="yellow" size="x-small" class="ml-n2"></v-rating>
              <div class="text-caption">
                Working with Flodyne Business has been a game-changer for our company. Their expertise in fluid dynamics
                helped
                us optimize our manufacturing processes, resulting in significant cost savings and improved efficiency.
                Their
                team was professional, responsive, and dedicated to delivering results. I highly recommend Flodyne
                Business
                to
                anyone looking to elevate their operations."
              </div>
            </VSheet>
          </VCol>
          <VCol cols="12" md="4">
            <VSheet color="grey-lighten-4" class="pa-3" rounded="lg">
              <VListItem class="px-0">
                <template #prepend>
                  <VAvatar size="80">
                    <VImg src="https://picsum.photos/80/80"></VImg>
                  </VAvatar>
                </template>
                <VListItemTitle class="font-weight-bold text-secondary">Ken Kieu</VListItemTitle>
                <VListItemSubtitle class="text-secondary text-caption">CEO, Company</VListItemSubtitle>
              </VListItem>
              <v-rating :model-value="5" active-color="yellow" size="x-small" class="ml-n2"></v-rating>
              <div class="text-caption">
                Working with Flodyne Business has been a game-changer for our company. Their expertise in fluid dynamics
                helped
                us optimize our manufacturing processes, resulting in significant cost savings and improved efficiency.
                Their
                team was professional, responsive, and dedicated to delivering results. I highly recommend Flodyne
                Business
                to
                anyone looking to elevate their operations."
              </div>
            </VSheet>
          </VCol>
        </VRow>
      </v-window-item>
    </v-window>
    <VRow justify="space-between" class="mt-16">
      <v-btn icon="mdi-chevron-left" variant="plain" @click="prev"></v-btn>
      <v-item-group v-model="onboarding" class="text-center" mandatory>
        <v-item v-for="       n in length       " :key="`btn-${n}`" v-slot="{ isSelected, toggle }" :value="n">
          <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record" @click="toggle"></v-btn>
        </v-item>
      </v-item-group>
      <v-btn icon="mdi-chevron-right" variant="plain" @click="next"></v-btn>
    </VRow>

  </FlodyneContainer>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'home'
  })

  const drawer = ref(false)
  const links = ref([
    { title: 'About us', to: '/about' },
    { title: 'Infrastructure', to: '/infrastructure' },
    { title: 'Products', to: '/products' },
    { title: 'Brick Making Machine', to: '/brick-making-machine' },
    { title: 'Blogs', to: '/blogs' },
    { title: 'Contact us', to: '/contact' },
  ])

  const length = ref(3)
  const onboarding = ref(1)

  function next() {
    onboarding.value = onboarding.value + 1 > length.value ? 1 : onboarding.value + 1
  }
  function prev() {
    onboarding.value = onboarding.value - 1 <= 0 ? length.value : onboarding.value - 1
  }

</script>
