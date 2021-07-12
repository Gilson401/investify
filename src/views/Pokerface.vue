<template>
<div>
  <div @click="clicarTela" class="about">
    <img v-if="humor < 100" alt="cara triste" src="../assets/sadface.png" />
   <h1 v-if="humor < 100">Difícil. Mas eu sou persistente. Plz, tenta novamente. Clica em mim.</h1> 
  </div>

  <teleport to="#modals">
    <div v-if="displayModal" class="modal">
      <div>
        <h1 v-if="humor < 100">
          Ainda está com mau humor ({{ humor }}/100). <br/> Leia uma piada.
        </h1>
        <h1 v-if="humor >= 100">Agora que teu humor alcançou o mínimo necessário ({{ humor }}/100) <br/> pode prosseguir.</h1>
        <p v-if="humor < 100" class="piadaclass">{{ piada }}</p>

        <button v-if="humor < 100" @click="clicarTela">  Contar Outra Piada </button>
        <br />
        <button v-if="humor >= 100" @click="fecharEIrFeliz">Fechar</button>
      </div>
    </div>
  </teleport>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import router from "@/router";

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
    var aValue = JSON.parse(localStorage.getItem("INVESTFY"));

    if (!aValue) {
          console.log('não logado Pokerface.vue')
          router.push("/"); 
    }
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    clicarTela() {
      if (this.humor >= 100) {
        return;
      }

      axios.get("http://localhost:3005/piada")
        .then(({ data }) => {
          this.piada = data.joke;
          this.humor = this.humor + Math.floor(Math.random() * 50);
          this.displayModal = true;
        });
    },
    fecharEIrFeliz (){
        this.displayModal = false;
         router.push('feliz') ;      
    },
     
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
.about {
  height: 90vh;
  width: 90vw;
  /* border: 12px red solid; */
  cursor: pointer;
}
.piadaclass {
  color: rgb(1, 1, 19);
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
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
  background-color: rgb(240, 231, 231);
  width: 90%;
  height: 300px; 
  padding: 5px;
}
</style>

