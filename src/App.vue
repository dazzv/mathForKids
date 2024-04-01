<script setup>
import currentUserBlock from './components/current-user-block.vue'
import questionsBlock from './components/questions-block.vue'
import btnsBlock from './components/btns-block.vue'
import startPage from './components/start-page.vue'
import overPage from './components/over-page.vue'

import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const isStarted = computed(() => store.getters.isStarted)
const itsOver = computed(() => store.getters.itsOver)
const fetch = async () => await store.dispatch('fetchQuestions') 
onMounted(fetch); // вызиваем action при открытие с помощи хука

// const keyPressed = (e) => {  // Это только для теста было добавлено. Пока работает не стабильно
//  console.log(e);
// }
</script>

<template>
  <section v-if="isStarted && !itsOver" class="d-flex flex-column justify-content-between vh-100">  <!-- @keyup="keyPressed($event)" -->
    <header class="container d-flex justify-content-end">
      <current-user-block/>
    </header>

    <main class="container">
      <questions-block/>
    </main>

    <footer class="bg-dark-subtle py-3 mb-2 w-100" id="footer-custom">
      <btns-block/>
    </footer>
  </section> 

  <start-page v-if="!isStarted"/>    
  <over-page v-if="itsOver"/>    
</template>
