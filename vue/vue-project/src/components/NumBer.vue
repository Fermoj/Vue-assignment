<template>
  <div class="number-box">
    <h1>
      Gör som {{ $store.state.counter }} andra-<br />
      bli medlem idag!
    </h1>
  </div>
  <form-member @buttonClicked="addNumber"></form-member>
</template>
<script></script>
<style scoped>
.number-box {
  display: flex;
  border: 30px outset rgba(152, 134, 191, 0.419);
  height: 50%;
  width: 35%;
  margin-left: 60%;
  position: relative;
  top: -220px;
  padding: 5px;
  justify-content: center;
}
.number-box,
h1 {
  font-family: auto;
  color: rgb(106, 175, 188);
}
</style>
