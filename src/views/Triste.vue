<template>
  <div @click="clicarTela" class="about">
    <img  alt="cara triste" src="../assets/sadface.png" />

    <h1>Mano, piorou. Tenta novamente. Pensamento positivo, cara!</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";

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
 
    var aValue = JSON.parse(localStorage.getItem("INVESTFY"));
    
    if (!aValue) {
         console.log('não logado triste.vue')
          router.push("/"); 
    }

    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    clicarTela() {
      
      router.push('poker-face')
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

