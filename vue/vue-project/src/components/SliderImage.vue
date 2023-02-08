<template>
    <div>
    <img :src="currentImage" alt="Frukt"/>
    </div>
</template>
<script>
export default {
    data(){
        currentImage: "../assets/img/OrangeHero.png"
        images:["../assets/img/FruitCollection.png", "../assets/img/Wmelon.png"]
        index: 0
    },
    mounted(){
        this.currentImage= this.image[0]
        this.startSlide()
    },
    methods: {
        startSlide(){
            //setinterval calls a funtion to update the currentimage every 3 second.
            setInterval((
                this.index 
            ))
        }
    }
}
</script>
<style></style>
