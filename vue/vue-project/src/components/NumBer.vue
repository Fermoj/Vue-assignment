<template>
  <div class="number-box">
    {{ $store.state.counter }}
    <form-member @buttonClicked="addNumber"></form-member>
  </div>
</template>
<script>
// import FormMember from "./FormMember.vue"
// export default{
//     components: {
//         FormMember
//     },

// }
</script>
<style>
.number-box {
  width: 100px;
  height: 100px;
  padding: 100px;
  margin-left: 60%;
  position: relative;
  top: -50px;
  background-color: rgb(143, 126, 159);
}
</style>
