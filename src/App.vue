<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-row class="align-center">
        <v-spacer/>
        <v-col class="d-flex justify-center">
          <v-btn @click="mode = `test`">測驗模式</v-btn>
          <v-btn @click="mode = `show`">觀看模式</v-btn>
        </v-col>
        <v-col class="d-flex justify-end">

          <v-dialog v-model="dialog" width="50%">
            <template v-slot:activator="{on}">
              <v-btn fab text v-on="on"><v-icon>mdi-help-circle</v-icon></v-btn>
            </template>
            <v-card>
              <v-card-title class="d-flex justify-center">
                <span>{{modeText}}模式說明</span>
              </v-card-title>
              <v-card-text class="d-flex justify-center">
                <span>{{modeContent}}</span>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-content>
      <Main v-if="mode === 'test'"/>
      <Show v-else/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/main'
import Show from './components/show';

export default {
  name: 'App',

  components: {
    Main,
    Show
  },

  data () {
    return {
      mode: 'test',
      dialog: false
    }
  },
  computed: {
    modeText(){
      return this.mode == 'test' ? '測驗' : '觀看'
    },
    modeContent(){
      return this.mode == 'test' ? 
        `系統會根據你所選擇的測驗內容進行隨機出題，每個題目均有四個選項，你所選擇的選項將會以藍色標記，按下送出後將以紅色標記正確答案（會覆蓋藍色標記），答題正確會獲得相對應的分數，本證照的及格分數為70分，請努力練習。` : 
        `行動裝置可以左右滑動來切換題目，電腦版可以按上/下一題進行切換。`
    }
  },
  created () {

  },
  methods: {
    ShowHelp: function(){

    }
  }
}
</script>
