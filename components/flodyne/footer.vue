<template>
  <VContainer fluid>
    <VFooter color="primary" class="rounded-xl" theme="dark">
      <VContainer>
        <VRow>
          <VCol cols="12" md="3">
            <VImg width="150" src="/images/logo.svg" alt="Flodyne Logo" />

            <p class="mt-2">
              Flodyne drives innovation and efficiency in hydraulic systems,
              with a focus on precision and reliability.
            </p>
            <div class="mt-10">
              <VBtn
                v-for="icon in icons"
                :key="icon"
                icon
                theme="light"
                class="mr-2"
              >
                <VIcon color="secondary">{{ icon }}</VIcon>
              </VBtn>
            </div>
          </VCol>

          <VCol cols="12" md="3" class="text-left">
            <h4 class="text-h6">Useful Link</h4>

            <VList
              bg-color="transparent"
              nav
              density="compact"
              class="px-0 py-0"
              font-size="20px"
              rounded="0"
              active-color="green"
            >
              <VListItem
                v-for="link in links"
                :key="link.title"
                :to="link.to"
                :title="link.title"
                class="px-0 py-0 text-[20px]"
              />
            </VList>
          </VCol>

          <VCol cols="12" md="3" class="text-left">
            <h4 class="text-h6">Contact us</h4>
            <VList bg-color="transparent" nav density="compact" class="px-0">
              <VListItem
                href="tel:9977779101"
                title="Office no: +91 9977779101"
                class="px-0"
              />
              <VListItem
                href="tel:+91 9303647126"
                title="Sales no: +91 9303647126"
                class="px-0"
              />

              <VListItem
                href="mailto:sales@flodyne.in?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                title="Email: sales@flodyne.in"
                class="px-0"
              />
            </VList>
          </VCol>

          <VCol cols="12" md="3" class="text-left">
            <h4 class="text-h6">Address</h4>
            <VList bg-color="transparent" nav density="compact" class="px-0">
              <VListItem
                href="https://maps.app.goo.gl/ZD4qacqdYis28cdZ6"
                class="px-0 text-wrap"
              >
                <span class="address-text">
                  Flodyne Corporation<br />
                  Plot no. 71B, Sector B, Sirgitti<br />
                  Industrial Area, Bilaspur -<br />
                  495004, Chhattisgarh
                </span>
              </VListItem>
            </VList>
          </VCol>
        </VRow>
        <VDivider class="my-5"></VDivider>
        <div class="text-center text-caption">
          www.flodyne.com copyright reserved
        </div>
      </VContainer>
    </VFooter>
  </VContainer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const icons = ref([
      "mdi-instagram",
      "mdi-whatsapp",
      "mdi-youtube",
      "mdi-facebook",
    ]);
    const links = ref([
      { title: "About us", to: "/about" },
      { title: "Infrastructure", to: "/infrastructure" },
      { title: "Products", to: "/products" },
      { title: "Brick Making Machine", to: "/fly-ash-brick-machine" },
      { title: "Blogs", to: "/blogs" },
      { title: "Contact us", to: "/contact" },
    ]);

    return { icons, links };
  },
};
</script>
<style scoped>
.address-text {
  white-space: normal;
  word-wrap: break-word;
}
</style>
