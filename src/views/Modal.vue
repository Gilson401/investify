<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <ModalComponent msg="Este componente é o modal (props)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalComponent from '@/components/ModalComponent.vue'

export default {
  name: 'Modal',
  components: {
    ModalComponent
  }
}
</script>