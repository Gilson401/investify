<template>
  <div @click="clicarTela" class="about">
    <img  alt="cara feliz" src="../assets/happyface.jpg" />

    <h1>Vue? Nunca desista. Seja persistente. <br/>No fim a vida te coloca um sorriso no rosto.</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";

export default {
  name: "FelizComponente",
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
      
      router.push('inicial')
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

