<template>
  <div @click="clicarTela" class="about">
    <img v-if="humor < 100" alt="cara triste" src="../assets/sadface.png" />
    <img v-if="humor >= 100" alt="cara triste" src="../assets/happyface.jpg" />

    <h1 v-if="humor < 100">
      Você está de mau humor ({{ humor }}/100). Clique na tela e leia uma piada.
    </h1>
    <h1 v-if="humor >= 100">Agora teu humor melhorou ({{ humor }}/100).</h1>

    
  </div>

    <teleport to="#modals">
      <div v-if="displayModal" class="modal">
        <div>
          
          <p class="piadaclass">{{ piada }}</p>

          <button @click="displayModal = false">
            Close
          </button>
        </div>
      </div>
    </teleport>



</template>

<script>
import { mapState, mapActions } from "vuex";
// import router from "@/router";

import axios from "axios";
export default {
  name: "Triste",
  props: {
    msg: String,
  },
  data() {
    return {
      humor: 0,
      displayModal: false,
      piada: "",
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  created() {
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    clicarTela() {
      if (this.humor >= 100) {
        return;
      }

      debugger;
      axios
        .get("https://geek-jokes.sameerkumar.website/api?format=json")
        .then(({ data }) => {
          this.piada = data.joke;
          this.humor = this.humor + Math.floor(Math.random() * 20);
          this.displayModal = true
        });
    },
  },
};
</script>

<style scoped>
.about {
  height: 90vh;
  width: 90vw;
  /* border: 12px red solid; */
  cursor: pointer;
}
.piadaclass {
  color: rgb(1, 1, 19);
  font-size: 25px;
}




.modal {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(214, 187, 187);
  width: 300px;
  height: 300px;
  padding: 5px;
}

</style>

