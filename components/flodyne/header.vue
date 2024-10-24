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
        class="text-capitalize font-weight-bold reduced-spacing content-overlay"
        :class="
          ($vuetify.display.mdAndUp ? 'text-h1' : 'text-h3', 'green--text')
        "
      >
        {{ pageTitle }}
        <!-- <video controls loading="lazy" autoplay muted loop playsinline class="background-video">
          <source :src="backgroundVideo" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->

        <video
          autoplay
          muted
          loop
          playsinline
          class="background-video"
          :key="backgroundVideo"
        >
          >
          <source :src="backgroundVideo" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
      { title: "Fly Ash Brick Machines", to: "/fly-ash-brick-machine" },
      { title: "Blogs", to: "/blogs" },
      { title: "Contact us", to: "/contact" },
      { title: "Home", to: "/" },
    ]);

    const pageTitle = computed(() => {
      const currentLink = links.value.find((link) => link.to === route.path);
      return currentLink ? currentLink.title : "Flodyne"; // Set a default title if no match is found
    });

    const backgroundImage = computed(() => {
      // Replace with your testing image URL
      const commonImage = "/images/about.png";
      const otherImages = {
        "/about": commonImage,
        "/blogs": commonImage,
        "/contact": commonImage,
        "/infrastructure": "/images/infrastructure-header.svg",
        "/products": "/images/products-header.svg",
        "/fly-ash-brick-machine": "/images/bricks.png",
      };
      return otherImages[route.path] || "https://example.com/default-image.jpg"; // Default image
    });

    const backgroundVideo = computed(() => {
      const commonVideo = "/videos/FlodyneVideoClip2.mp4"; // Replace with your testing image URL
      const otherVideo = {
        "/about": commonVideo,
        "/blogs": commonVideo,
        "/contact": commonVideo,
        "/infrastructure": "/videos/flodyne-brick.mp4",
        "/products": "/videos/FlodyneVideoClip2.mp4",
        "/fly-ash-brick-machine": "/videos/brick-machine.mp4",
      };
      return otherVideo[route.path] || "https://example.com/default-image.jpg"; // Default image
    });

    return { drawer, links, pageTitle, backgroundImage, backgroundVideo };
  },
};
</script>

<style scoped>
.reduced-spacing {
  letter-spacing: 0px;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  object-fit: cover; /* Ensures the video covers the entire background */
  z-index: -1;
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 16px;
  background: rgba(
    0,
    0,
    0,
    0.4
  ); /* Optional: Adds a dark overlay on the video */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
