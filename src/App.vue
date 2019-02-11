<template>
  <div id="app">
    <year-calendar
      v-model="year"
      :activeDates.sync="activeDates"
      @toggleDate="toggleDate"
    ></year-calendar>
  </div>
</template>

<script>
import YearCalendar from './components/YearCalendar.vue'

export default {
  name: 'app',
  components: {
    YearCalendar
  },
  data () {
    return {
      year: 2018,
      activeDates: ['2018-01-01', '2018-12-06', '2018-02-20', '2018-01-14', '2018-01-13', '2018-01-15', '2019-01-01', '2017-06-14']
    }
  },
  methods: {
    toggleDate (dateInfo) {
      console.log(dateInfo)
    }
  }
}
</script>
<style lang="stylus">
*
  margin 0
  padding 0
  box-sizing border-box
#app
  padding 60px
  background-color #eaeaea
</style>
