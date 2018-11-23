<template>
  <div class="container">
    <div class="container__year">
      <span><button @click="addYear(-1)">back</button></span>
      <span>{{ year }}</span>
      <span><button @click="addYear(1)">next</button></span>
    </div>
    <month-calendar
      class="container__month"
      v-for="n in 12"
      :key="`month-${n}`"
      :year="year"
      :month="n"
    >
    </month-calendar>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import MonthCalendar from './MonthCalendar'
export default {
  name: 'year-candelar',
  components: {
    MonthCalendar
  },
  data () {
    return {
      year: dayjs().year()
    }
  },
  methods: {
    addYear (val) {
      this.year += val
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-wrap wrap
  .container__year
    font-size 36px
    flex 100%
    text-align center
    display flex
    justify-content space-between
  .container__month
    padding 8px
    flex 16.66%
</style>
