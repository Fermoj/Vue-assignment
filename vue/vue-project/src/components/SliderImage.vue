<template>
  <div>
    <img :src="currentImage" alt="Frukt" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentImage: "/public/img/Orange.png",
      images: ["/public/img/FruitCollection.png", "/public/img/Wmelon.png"],
      index: 0,
    };
  },
  mounted() {
    // this.currentImage = this.image[0];
    this.startSlide();
  },
  methods: {
    startSlide() {
      //setinterval funtion is being called and updates the currentimage every 2 second.
      setInterval(() => {
        //index incremented by 1 to move to the next image in the array.
        //divided on the images length so the index only goes as far as their is images and then wraps around to first image when it hits the end of the array.
        this.index = (this.index + 1) % this.images.length;
        //set the image at the current index to the currentimage.
        this.currentImage = this.images[this.index];
      },4000);
    },
  }
};
</script>
<style></style>
