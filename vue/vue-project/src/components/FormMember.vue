<script setup>
import { useRouter } from "vue-router";
</script>
<template>
  <div class="form-wrapper">
    <form>
      <p>&#9752; Inloggning krävs för att komma vidare till kassan</p>
      <p><b>Medlemskaps formulär</b></p>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Fullname (First- and lastname)</label
        >
        <input
          v-model="fName"
          type="text"
          class="form-control"
          aria-label="First name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address</label
        >
        <input
          v-model="eMail"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Lösenord</label>
        <input
          :style="{ backgroundColor: inputColor }"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="pWord"
        />
        <p v-if="pWord.length < 5">{{ pwordMsg }}</p>
      </div>
      <div class="mb-3 form-check">
        <!-- Style behöver vara bunden till css property -->
        <!-- v-model variabeln håller värdet av användarens actions i data, kan antingen vara false/true -->

        <input
          :style="{ backgroundColor: boxColor }"
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          v-model="checked"
        />

        <label class="form-check-label" for="exampleCheck1"
          >Godkänn användarvillkoren</label
        >
      </div>
      <button
        @click="onClick"
        :disabled="(eMail.length && pWord.length === 0) || checked === false"
        type="submit"
        class="btn btn-primary"
      >
        Logga in
      </button>
      <br /><br />
      <p v-if="onClick && pWord.length > 4">{{ submitMsg }}</p>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fName: "",
      eMail: "",
      pWord: "",
      pwordMsg: null,
      submitMsg: null,
      checked: false,
      inputColor: "",
    };
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      this.$emit("buttonClicked");
      this.submitMsg = `Välkommen till fruit-familjen ${this.fName}`;
      this.pwordMsg = `Lösenord behöver vara minst 5 bokstäver`;
      this.$store.commit("increment");
      this.$router.push({name: 'Medlemskap', params:{ userName: this.fName}})
    },
  },
  //computed bevakar om checkbox är ikryssad eller ej och ändrar färg därefter.
  computed: {
    boxColor() {
      return this.checked ? "#48bd78" : "#e67470";
    },
  },
  watch: {
    pWord(value) {
      this.inputColor = value.length > 4 ? "#48bd78" : "#e67470";
    },
  },
};
</script>

<style scooped>
.form-wrapper {
  display: flex;
  padding: 5%;
  margin-right: 50%;
  width: 50%;
}
</style>
