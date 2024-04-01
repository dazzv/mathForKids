import { createStore } from 'vuex';
import axios from 'axios';
import questionsData from '../../questions.json';

const store = createStore({
    state: {
        currentUser: {
            name: '',
            balance: 0,
        },

        questions: [],
        currQuestionIndex: 0,

        alert: '',
        isStarted: false,
        itsOver: false,
    },
    getters: {
        isStarted: (state) => state.isStarted,

        currentUser: (state) => state.currentUser,
        getQuestions: state => state.questions,
        currQuestion: state => state.questions[state.currQuestionIndex],
        
        alert: state => state.alert,
        correct: state => state.correct,

        itsOver: (state) => state.itsOver
    },

    actions: {
        isStarted({commit}, name){
            commit('started', name)
        },
        
        async fetchQuestions({ commit }) {
            try {
              const response = await axios.get('http://localhost:3000/questions');
              commit('setQuestions', response.data);

            } catch (error) {
              console.error('Error fetching questions:', error);

              commit('setQuestions', questionsData.questions);
            }
        },
        check({commit, getters}, picked){
            if(!getters.correct){ // если правильный уже дали, отключаем проверку
                commit('check', picked)
            }
        },
        nextQuestion({commit}){
            commit('nextQuestionM')
        }
    },
    mutations: {
        started(state, name){
            state.currentUser.name = name

            state.isStarted = true
        },
        setQuestions(state, questions) {
            state.questions = questions;
            
        },
        check(state, variant){
            const correctVariant = state.questions[state.currQuestionIndex].correctAnswer.variant
            if(correctVariant === variant){
                state.alert = 'success';
                state.currentUser.balance += 200;
                state.correct = true;
            } else if (variant === ''){
                state.alert = 'warning'
            } 
            else {
                state.alert = 'danger'
            }
            
        },
        nextQuestionM(state){
            state.alert = ''
            state.correct = false
            if(state.currQuestionIndex < state.questions.length - 1){
                state.currQuestionIndex += 1
            } else {
                state.itsOver = true
            }
        },
    }
})

export default store