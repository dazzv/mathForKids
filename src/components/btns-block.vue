<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const picked = ref('')
const сorrect = computed(() => store.getters.correct)

function check() {
    store.dispatch('check', picked.value)
    picked.value = '' 
}
</script>

<template>
   <div class="container-custom row g-2">
      <span class="inpt-btn col">
        <input type="radio" id="a" value="A" v-model="picked"/>
        <label for="a">A</label>
      </span>

      <span class="inpt-btn col">
        <input type="radio" id="b" value="B" v-model="picked"/>
        <label for="b">B</label>
      </span>

      <span class="inpt-btn col">
        <input type="radio" id="c" value="C" v-model="picked"/>
        <label for="c">C</label>
      </span>
      
      <button type="button" class="check-btn col-2 fw-normal fs-0" :disabled="сorrect"  @click="check">Check</button> 
    </div>

</template>
