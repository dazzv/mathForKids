<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const currentUser = computed(() => store.getters.currentUser)
const alert = computed(() => store.getters.alert)
const сorrect = computed(() => store.getters.correct)

</script>

<template>
   <div class="current-name mt-5" id="balance-block">
        <h5 class="name">{{currentUser.name}}</h5>

        <div class="d-flex align-items-center">
          <p class="balance m-0">{{currentUser.balance}}</p>
          <img src="../assets/icons/coin.png" class="balance-icon" alt="coin-logo">
        </div>
        
        <div v-if="alert === 'success'" id="successAlertId" class="alert alert-success position-absolute start-50 translate-middle text-center z-3" role="alert">
          <h5 class="fw-normal text-success">Всё правильно :) {{currentUser.name}} ты верно решил задачу!</h5>
        </div>
        <div v-if="alert === 'danger'" id="dangerAlertId" class="alert alert-danger position-absolute start-50 translate-middle text-center z-3" role="alert">
          <h5 class="fw-normal">Неправильно :( Но у тебя точно получится, попробуй еще!</h5>
        </div>
        <div v-if="alert === 'warning'" class="alert alert-warning position-absolute start-50 translate-middle text-center z-3" role="alert">
          <h5 class="fw-normal">Выбери один из вариантов ответа!</h5>
        </div>

    </div>
</template>
