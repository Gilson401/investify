<template>
  <div @click="clicarTela" class="about">
    <img  alt="cara triste" src="../assets/sadface.png" />

    
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

