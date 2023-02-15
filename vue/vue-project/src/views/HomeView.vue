<script setup>
import HeroSlider from "../components/HeroSlider.vue";
import ProductSection from "../components/ProductSection.vue";
</script>
<template>
  <HeroSlider />
  <p class="title-hero">{{ titleHero }}</p>
  <SliderImage />
  <!-- Cards -->
  <h2 class="title-fruits">Populärt just nu</h2>
  <div id="article-wrapper">
    <div class="container text-center">
      <div class="row">
        <div class="col" v-for="product in products" :key="product.id">
          <product-section :articles="product" />
          <!-- articles: variabel som skickar info till productsection -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      titleHero: `Knowledge is knowing a tomato is a fruit,
      wisdom is not putting it in a fruit salad`,
    };
  },
  name: "HomeView",
  components: { "product-section": ProductSection },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch("Products.json");
        const result = await res.json();
        this.products = result;
      } catch (error) {
        console.error(error);
        this.errorMessage = "Products failed to fetch, please try again!";
      }
    },
  },
};
</script>
<style>
.title-hero {
  white-space: pre-wrap;
  position: absolute;
  top: 45%;
  left: 20%;
  font-family: cursive;
  color: #556290;
  font-style: italic;
  font-size: x-large;
  background-color: rgb(239, 229, 244);
}

#article-wrapper {
  display: flex;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
.col {
  display: flex;
  justify-content: space-around;
}
.title-fruits {
  margin-left: 6%;
}
</style>
