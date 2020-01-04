<template>
  <v-card>
    <v-card-subtitle class="d-flex justify-end">
      <span>目前得分：{{score}}分</span>
    </v-card-subtitle>
    <v-card-title class="d-flex justify-center">
      <span class="font-weight-bold">{{questionDecode[quizNumber].question}}</span>
      <span class="red--text" v-if="questionDecode[quizNumber].trueAns.length > 1">(複選)</span>
    </v-card-title>
    <v-card-text class="font-weight-bold">
      <v-btn-toggle
        class=" d-flex justify-center"
        style="flex-direction: column;"
        v-model="ansBtn"
        multiple>
        <v-btn 
          v-for="(item, index) in ans" 
          :key="index" 
          :class="testColor[index] + '--text mr-4'">
          {{questionDecode[quizNumber][item]}}
        </v-btn>
      </v-btn-toggle>
    </v-card-text>
    <v-card-actions class=" d-flex justify-center">
      <v-btn @click="quizNext" v-if="showAns">下一題</v-btn>
      <v-btn @click="answer" v-else>確定</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import {mapState} from 'vuex'
const random = function(a, b){
  let num = Math.random() > 0.5 ? 1 : -1
  return num
}
export default {
  props:{
    range: Array,
    number: Number,
    mode: String,
    value: Boolean
  },
  data() {
    return {
      quizNumber: 0,
      ans:['ans1', 'ans2', 'ans3', 'ans4'],
      textColor: ['black','black','black','black'],
      ansBtn: [],
      showAns: false,
      score: 0,
    }
  },
  computed: {
    ...mapState([
      'question'
    ]),
    questionDecode(){
      let temp = this.question
      temp.forEach(item => {
        if(!Array.isArray(item.trueAns)) item.trueAns = item.trueAns.split(',')
      })
      temp = this.question.filter(item => item.number >= this.range[0] && item.number <= this.range[1])
      temp.sort(random)
      temp = temp.filter((item, index) => index < this.number)
      return temp
    },
    testColor(){
      let temp = Object.assign([], this.textColor)
      this.ansBtn.forEach(item => temp[parseInt(item)] = 'blue')
      if(this.showAns) this.questionDecode[this.quizNumber].trueAns.forEach(item => temp[parseInt(item)] = 'red')
      return temp
    }
  },
  methods: {
    answer: function(){
      this.showAns = true
      let trueAns = this.questionDecode[this.quizNumber].trueAns
      let ans = this.ansBtn.sort()
      if(trueAns.every(item => trueAns.length == ans.length && ans.includes(parseInt(item)))) this.score += 100 / this.number
    },
    quizNext: function(){
      if(this.quizNumber < this.questionDecode.length - 1){
        this.quizNumber++
        this.showAns = false
        this.ansBtn = []
      }else{
        alert('完成測驗，成績為：' + this.score + '分，即將回到主畫面')
        this.$emit('input', true)
      }
    }
  }
}
</script>