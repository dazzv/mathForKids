<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const name = ref('')
const level = ref('')

function start(){
  if(name.value.length && level.value){
    const firstLetter = name.value.charAt(0)
    const remainingLetters = name.value.slice(1)
    const currName = firstLetter.toUpperCase() + remainingLetters

    store.dispatch('isStarted', currName)
  }
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-center flex-column mx-auto vh-100" style="width: 300px;">
    <h4>Добро пожаловать!</h4>
  
    <div class="w-100 my-3">
      <label for="validationCustom01" class="form-label">Твое имя</label>
      <input type="text" class="form-control" placeholder="Имя" id="validationCustom01" v-model="name" style="text-transform: capitalize;" required>
    </div>

    <div class="w-100">
      <label for="validationCustom04" class="form-label">Уровень</label>
      <select class="form-select py-2" id="validationCustom04" v-model="level" required>
        <option selected disabled value="">Выберите...</option> 
        <option value="newbie">Новичок</option>
        <!-- <option value="profi">Профессионал</option> -->
      </select>
    </div>

    <button class="btn btn-primary my-3" @click="start" :disabled="!name.length || !level">Начать</button>
  </div>
</template>

<style scoped>
</style>