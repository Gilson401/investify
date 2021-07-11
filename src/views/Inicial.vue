<template >
  <div @click="clicarTela" class="about" >
      <img alt="pokerface" src="../assets/poker-face.jpg">
    <h1>Que tédio. Clica em algum lugar na tela pra ver se muda algo.</h1>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";
export default {
  name: "Inicial",
  props: {
    msg: String,
  },
  data() {
    return {
      cliques: 0,

    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    clicarTela() {
      router.push('triste')
      
      },
  },
};
</script>

<style scoped>

.about {
  height: 100vh;
  width: 100vw;
  /* border: 12px red solid; */
  cursor: pointer;
}

</style>

