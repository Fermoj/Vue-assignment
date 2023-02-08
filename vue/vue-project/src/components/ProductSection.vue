<template>
  <!-- Column -->
  <div class="col">
    <div class="card" style="width: 20rem">
      <img src="../assets/img/Cherry.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ articles.product }}</h5>
        <p class="card-text">
          {{ articles.price }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
//Props för att ta emot info från json objekterna
export default {
  props: {
    //För att få ut flera objekt samtidigt skapar man en variabel som representerar objekten
    articles: {
      required: true,
      type: Object
    },
  },
// data() {
//     return {
//       image: "../assets/img/Cherry.png",
//     }
//   }
}
</script>
