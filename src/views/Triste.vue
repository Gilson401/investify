<template>
  <div @click="clicarTela" class="about">
    <img v-if="humor < 100" alt="cara triste" src="../assets/sadface.png" />
<img v-if="humor >= 100" alt="cara triste" src="../assets/happyface.jpg" />

    <h1 v-if="humor < 100">Você está de mau humor ({{ humor }}/100). Clique na tela e leia uma piada.</h1>
<h1 v-if="humor >= 100">Agora teu humor melhorou ({{ humor }}/100).</h1>

    <p class="piadaclass">{{ piada }}</p>
    
  </div>
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
            this.piada = data.joke
            this.humor = this.humor + Math.floor(Math.random() * 20);
        }
            );
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
.piadaclass{
    color: blue;
    font-size: 25px;
}
</style>

