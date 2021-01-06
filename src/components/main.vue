<template>
  <v-container>
    <v-row v-if="menuPage">
      <v-col cols="12" class="d-flex justify-center">
        <v-radio-group v-model="radioMode" row>
          <span>測驗模式：</span>
          <v-radio label="全部" value="all"/>
          <v-radio label="單選" value="single"/>
          <v-radio label="複選" value="multiple"/>
        </v-radio-group>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <div class="d-flex align-baseline">
          <v-checkbox v-model="checkRange" hide-details/>
          <span>測驗範圍(max:540)：</span>
          <div style="max-width:50px;" class="mx-4"><v-text-field solo :disabled="!checkRange" v-model="rangeStart" flat/></div>
          <span>到</span>
          <div style="max-width:50px;" class="mx-4"><v-text-field solo :disabled="!checkRange" v-model="rangeEnd" flat/></div>
        </div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-baseline">
        <span>測驗題數:</span>
        <div style="max-width:70px;" class="mx-4"><v-text-field solo v-model="testNumber" type="number" flat/></div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-baseline">
        <v-btn color="primary" @click="testStart">開始測驗</v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <Test :range="range" :number="parseInt(testNumber)" :mode="radioMode" v-model="menuPage"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Test from './test'

export default {
  components: {
    Test
  },
  data: () => ({
    radioMode: 'all',
    checkRange: false,
    rangeStart: 1,
    rangeEnd: 540,
    testNumber: 50,
    menuPage: true
  }),
  computed: {
    range(){
      if(this.rangeStart > this.rangeEnd) return [this.rangeEnd, this.rangeStart]
      return [this.rangeStart, this.rangeEnd]
    }
  },
  methods: {
    testStart: function(){
      this.menuPage = false
    }
  }
}
</script>
