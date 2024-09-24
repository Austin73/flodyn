<template>
  <FlodyneMenu />

  <VCard
    flat
    rounded="0"
    min-height="500px"
    height="40vh"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    theme="dark"
  >
    <VRow align="center" justify="center" class="fill-height">
      <h1
        class="text-capitalize font-weight-bold"
        :class="
          ($vuetify.display.mdAndUp ? 'text-h1' : 'text-h3', 'green--text')
        "
      >
        {{ pageTitle }}
      </h1>
    </VRow>
  </VCard>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const drawer = ref(false);
    const links = ref([
      { title: "About us", to: "/about" },
      { title: "Infrastructure", to: "/infrastructure" },
      { title: "Products", to: "/products" },
      { title: "Brick Making Machine", to: "/brick-making-machine" },
      { title: "Blogs", to: "/blogs" },
      { title: "Contact us", to: "/contact" },
    ]);

    const pageTitle = computed(() => {
      const currentLink = links.value.find((link) => link.to === route.path);
      return currentLink ? currentLink.title : "Default Title"; // Set a default title if no match is found
    });

    const backgroundImage = computed(() => {
      const commonImage = "/images/about.png"; // Replace with your testing image URL
      const otherImages = {
        "/about": commonImage,
        "/blogs": commonImage,
        "/contact": commonImage,
        "/infrastructure": "/images/infrastructure-header.svg",
        "/products": "/images/products-header.svg",
        "/brick-making-machine": "/images/bricks.svg",
      };
      return otherImages[route.path] || "https://example.com/default-image.jpg"; // Default image
    });

    return { drawer, links, pageTitle, backgroundImage };
  },
};
</script>
