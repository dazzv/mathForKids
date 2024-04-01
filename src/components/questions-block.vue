<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore() // Подключаем vuex

const question = computed(() => store.getters.currQuestion) // Получаем первый вопрос из геттера
const сorrect = computed(() => store.getters.correct)

function nextQuestion() {
  store.dispatch('nextQuestion')
}

function getImageUrl(name){
 return new URL(`../assets/img/${name}`, import.meta.url).href;
};

</script>

<template>
    <div class="questions-block d-flex flex-column align-items-center position-relative">
      <button class="d-flex align-self-end align-items-center check-btn help-custom-button" data-bs-target="#helpModal" data-bs-toggle="modal">
          <img src="../assets/icons/bulb.png" alt="help-button">
      </button>

      <p class="conditions text-danger" style="font-size: 17px; font-weight: 500;">{{question.condition}}</p>
      <h5 class="question-text my-2 fw-normal text-center">{{question.text}}</h5>
      <img :src="getImageUrl(question.image)" alt="queston-img" class="img-fluid my-2" style="max-height: 200px;">
      
      <div class="options-block d-flex mt-3 w-25 justify-content-between" id="options-block">
        <div class="option d-flex align-items-center"
        v-for="option in question.options">
          <h5 class="option-variant fw-normal">{{ option.variant }})</h5>
          <h5 class="option-text fw-normal">{{ option.text }}</h5>
        </div>
      </div>
      
      <button v-if="сorrect" @click="nextQuestion" class="btn btn-secondary mt-2 position-fixed" style="bottom: 100px;">Следующий вопрос</button>

      <div class="help-block">
        <!-- Modal -->
        <div class="modal fade" id="helpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header justify-content-between">
                <h5 class="modal-title">Подсказка</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {{ question.help }}
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>
