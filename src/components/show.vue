<template>
  <v-container 
     v-touch="{
        left: () => preNextQuestion(true),
        right: () => preNextQuestion(false)
      }">
    <v-row>
      <v-col class="d-flex justify-center" cols="12">
        <v-dialog v-model="dialog" width="50%">
          <template v-slot:activator="{on}">
            <v-btn v-on="on">題號選擇</v-btn>
          </template>
          <v-card>
            <v-card-title class="d-flex justify-center">
              <span class="font-weight-bold">題號選擇</span>
            </v-card-title>
            <v-card-text>
              <v-btn 
                v-for="(item, index) in questionDecode"
                :key="index"
                @click="changeQuestion(index)">
                {{index + 1}}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex justify-center">
            <span class="font-weight-bold">{{questionDecode[number].question}}</span>
          </v-card-title>
          <v-card-text class="font-weight-bold">
            <div
              class=" d-flex justify-center"
              v-for="(item, index) in ans"
              :key="index">
              <span class="red--text" v-if="questionDecode[number].trueAns.includes(index.toString())">{{questionDecode[number][item]}}</span>
              <span class="black--text" v-else>{{questionDecode[number][item]}}</span>
            </div>
          </v-card-text>
          <v-card-actions class=" d-flex justify-center">
            <v-btn @click="preNextQuestion(false)">上一題</v-btn>
            <v-btn @click="preNextQuestion(true)">下一題</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      dialog: false,
      number: 0,
      ans:['ans1', 'ans2', 'ans3', 'ans4']
    }
  },
  computed: {
    ...mapState([
      'question'
    ]),
    questionDecode(){
      let temp = Object.assign([], this.question)
      temp.forEach(item => {
        if(!Array.isArray(item.trueAns)) item.trueAns = item.trueAns.split(',')
      })
      return temp
    }
  },
  methods: {
    changeQuestion: function(index){
      this.number = index
      this.dialog = false
    },
    preNextQuestion: function(action){
      console.log(action)
      if(action){
        (this.number < this.questionDecode.length - 1) ? this.number++ : this.number
      }else{
        (this.number > 0) ? this.number-- : this.number
      }
    }
  }
}
</script>