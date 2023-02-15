<template>
  <!-- Column -->
  <div class="col">
    <div class="card" style="width: 15rem">
      <img :src="articles.image" class="card-img-top" alt="Produkt" />
      <div class="card-body">
        <h5 class="card-title">{{ articles.product }}</h5>
        <p class="card-text">
          {{ articles.price }}
        </p>
        <RouterLink
          class="btn btn-dark"
          @click="onClick"
          type="button"
          :to="'/medlem/' + username"
          >Köp</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

//Props för att ta emot info från json objekterna
export default {
  props: {
    //För att få ut flera objekt samtidigt skapar man en variabel som representerar objekten
    articles: {
      required: true,
      type: Object,
    },
  },
  components: { RouterLink },
};
</script>
