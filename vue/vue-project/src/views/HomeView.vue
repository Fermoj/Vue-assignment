<script setup>
import HeroImage from "../components/HeroImage.vue";
import ProductSection from "../components/ProductSection.vue";
//lägg till resterande komponenter som tillhör startsidan
</script>
<template>
  <HeroImage />
  <div class="container text-center">
    <div class="row align-items-start">
      <div class="articles">
        <product-section
          v-for="product in products"
          :key="product.id"
          :articles="product"
        />
        <!-- articles variabel som skickar info till productsection -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  //   name: "HomeView",
  components: { "product-section": ProductSection },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
        const response = await fetch("Products.json");
        const result = await res.json()
        this.products = result;

    },
  },
};
</script>
