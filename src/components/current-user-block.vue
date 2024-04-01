<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const currentUser = computed(() => store.getters.currentUser)
const alert = computed(() => store.getters.alert)

</script>

<template>
   <div class="current-name position-relative w-100 d-flex flex-column align-items-end" id="balance-block">
        <h5 class="name mt-1">{{currentUser.name}}</h5>

        <div class="d-flex align-items-center">
          <p class="balance m-0">{{currentUser.balance}}</p>
          <img src="../assets/icons/coin.png" class="balance-icon" alt="coin-logo">
        </div>
        
        <div :class="'alert-' + alert" class="alert position-absolute text-center z-3 align-self-center" role="alert">
          <h5 v-if="alert === 'success'" class="fw-normal text-success">Всё правильно :) Ты молодец!</h5>
          <h5 v-if="alert === 'danger'" class="fw-normal">Неправильно :( Но у тебя точно получится, попробуй еще!</h5>
          <h5 v-if="alert === 'warning'" class="fw-normal">Выбери один из вариантов ответа!</h5>
        </div>
    </div>
</template>
