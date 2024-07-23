<template>
  <FlodyneContainer>
    <template #title><span class="text-primary">Manufacturing </span><span class="text-secondary">Facility</span>
    </template>
    <template #subtitle>Designing Innovative Experiences With Our Skills In Design And Development</template>

    <VRow justify="center">
      <VCol cols="12" md="4">
        <VImg cover src="https://picsum.photos/400/400" rounded="lg" />
      </VCol>
      <VCol cols="12" md="8">
        <p>Flowdynepumps started manufacturing Canned Motor pumps in the year 2012. With time the facilities were
          increased
          to manufacture more quantity of 0.75 to 75 kw Canned Motor Pumps.</p>
        <p>Flowdyne pumps manufacturers a number of components in house and also procures from dedicated suppliers.
          Number
          of manufacturing machines such as CNC,Lathes, Presses, Welding Unit, and Winding Systems are available for
          manufacturing of components.</p>
        <p>Full fledged assembly facilities for motors and pumps are available including balancing machine,testing,
          painting
          facilities.</p>
        <p>Computerized testing facilities are created so as to test and obtain test reports. These facilities are
          utilized
          for testing of pumpsets produced by the production department personnel and also for developmental purposes.
        </p>
        <p>Computerized accounting & administrative facilities are created for smooth & efficient working so that
          customer
          satisfaction can be maximized.</p>
      </VCol>
    </VRow>
  </FlodyneContainer>

  <FlodyneContainer color="primary">
    <VRow justify="center">
      <VCol cols="12" md="8">
        <h3 class="font-weight-bold mb-8" :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'">
          Design & <span class="text-secondary">Development</span>
        </h3>
        <ul class="ml-5">
          <li>At Flowdyne Pumps, manufacturing of QUALITY Canned Motor Pumps in based on team work philosophy that characterizes pump design & engineering.</li>
          <li>Material resources planning translate the management goals & priorities into Material, Men & Machine requirements. This helps in shorter lead times and on-time delivery.</li>
          <li>Different steps of the manufacturing process take place in a single production unit & this helps in co-ordination of various activities, namely marketing to engineering & manufacturing to final testing.</li>
          <li>Easy & fast assembly of components assures prompt delivery of the pumps. In addition, availability of large stock of components at any time guarantees timely supply of spares parts.</li>
          <li>The pumps are painted according to the company specifications or to the customer’s specification when order quantity is high.</li>
          <li>The packing is made carefully so as to protect the product and guarantee its perfect condition at delivery.</li>
        </ul>
      </VCol>
      <VCol cols="12" md="4">
        <VImg cover src="https://picsum.photos/400/400" rounded="lg" />
      </VCol>
    </VRow>
  </FlodyneContainer>

  <FlodyneContainer>
    <VRow >
      <VCol cols="12" md="8">
        <h3 class="font-weight-bold mb-8" :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h4'">
          Testing <span class="text-secondary">Facilities</span>
        </h3>
        <p>The objective of this page is to lay down a standard procedure for performance tests of Canned Motor Centrifugal Pumps at our test facility.</p>
        <p>Due to rising costs in both the running of pumps and energy, it has become increasingly important to assess and ensure the accurate performance of a pump unit prior to installation. A pump forms an integral part of a plant, however should the pump fail to perform this could result in unnecessary and often costly losses in production. As a result, it has become common practice for purchasers of pump equipment to specify performance testing prior to installation on site.</p>
        <strong class="text-secondary">Specifications</strong>
        <p>The capacity of the Test Bed is as follows:</p>
        <ul class="ml-5">
          <li>Pumps with flow rates from 1m/h to 250m3/hr can be tested.</li>
          <li>Heads of up to 200m are measured with standard equipment.p</li>
          <li>Power is measured with a twin element wattmeter, connected through potential and current transformers, which are in turn connected to two phases of power supply to motor.</li>
          <li>Meter drives up to 200kw can be used for testing. <NuxtLink class="font-weight-bold text-primary text-decoration-none" to="/">READ MORE</NuxtLink></li>
        </ul>
      </VCol>
      <VCol cols="12" md="4">
        <VImg cover src="https://picsum.photos/400/400" rounded="lg" />
      </VCol>
    </VRow>
  </FlodyneContainer>
  <FlodyneContainer padless>
    <VImg cover src="https://picsum.photos/1200/500" alt="About Us" rounded="xl" />
  </FlodyneContainer>

</template>

<script lang="ts" setup>

</script>

<style></style>
