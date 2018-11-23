<template>
  <div id="app">
    <year-calendar></year-calendar>
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
    }
  }
}
</script>
<style lang="stylus">
*
  margin 0
  padding 0
  box-sizing border-box
</style>
