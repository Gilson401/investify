<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <label for="first name">Email :</label>
    <input type="text" v-model="fEmail" required />
    <br />
    <label for="last name">senha:</label>
    <input type="password" v-model="password" required min="8" />
    <br />
    <br />
    <!-- <h2>Digitando:</h2> -->
    <div class="errolist" v-if="errors.length > 0">
      Existem erros

      <div class="errolistitem" v-for="erro in errors" :key="erro.id">
        {{ erro }}
      </div>
    </div>
    <button @click="checkForm">checkForm</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import { onMounted, onUpdated, onUnmounted } from 'vue'
import router from "@/router";
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      errors: [],
      fEmail: null,
      password: null,
      submitted: false,
      emailRegex: RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  created() {

    var aValue = JSON.parse(localStorage.getItem("INVESTFY"));
    if (aValue) {
          console.log('passou')
          router.push("inicial");  
    }

    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    checkForm() {
      this.errors = [];
      if (!this.fEmail) {
        this.errors.push("Inserir Email.");
      }

      if (!this.password) {
        this.errors.push("Inserir senha.");
      }
    //   debugger;
      if (this.password && this.password.length < 8) {
        this.errors.push("Senha deve ter no mínimo 8 caracteres.");
      }

      const test = this.emailRegex.test(this.fEmail);
      if (!test) {
        this.errors.push("Insira um email válido");
      }

      if (this.errors.length > 0) {
        return false;
      }

      const data = {
        email: this.fEmail,
        password: this.password,
      };
      axios
        .post("http://localhost:3005/auth", data)
        .then(({ data }) => {
          localStorage.setItem("INVESTFY", JSON.stringify(data));
          router.push("inicial");
        })
        .catch((err) => {
        //   debugger;
          alert(err.response.data.errors[0].msg);
          console.log("erro no login, ", err.response.data.errors[0].msg);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#visa {
  margin: 20px auto;
  max-width: 700px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input {
  font-size: 30px;
  border: 1px double rgb(102, 97, 96);
  border-radius: 4px;
}
.errolist {
  font-size: 20px;
}

.errolistitem {
  font-size: 12px;
  font-weight: 700;
  text-align: left;
  margin: 8px 0 0 0;
}

h3,
h2 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
