<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-btn @click="mode = `test`">測驗模式</v-btn>
          <v-btn @click="mode = `show`">觀看模式</v-btn>
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
      mode: 'test'
    }
  },
  computed: {

  },
  created () {

  },
  methods: {

  }
}
</script>
