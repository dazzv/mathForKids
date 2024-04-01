<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const currentUser = computed(() => store.getters.currentUser)

function newTest(){
    window.location.reload()
}
</script>

<template>
    <div class="d-flex align-items-center justify-content-center flex-column mx-auto vh-100" style="min-width: 300px;">
      <h4 class="text-center">{{ currentUser.name }}, ты успешно прошел(ла) тест и набрал(а) {{currentUser.balance}} баллов!</h4>
  
      <button class="btn btn-primary my-3" @click="newTest">Начать заново!</button>
  
    </div>
  </template>