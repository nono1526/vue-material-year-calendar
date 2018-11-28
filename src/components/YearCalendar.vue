<template>
  <div class="container">
    <div class="container__year">
      <!-- <span><button @click="addYear(-1)">back</button></span> -->
      <span
        v-for="i in 5"
        :key="i"
        class="year__chooser"
        @click="changeYear(i)"
      >
        {{ i + year - 3 }}
      </span>
      <!-- <span><button @click="addYear(1)">next</button></span> -->
    </div>
    <div class="container__months">
      <month-calendar
        class="container__month"
        v-for="n in 12"
        :key="`month-${n}`"
        :year="year"
        :month="n"
      >
      </month-calendar>
    </div>
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
    },
    changeYear (idx) {
      this.year = idx + this.year - 3
      console.log(this.year)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  border-radius: 2px
  min-width: 0
  position: relative
  text-decoration: none
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)
  background-color #F6F6F3
  .container__year
    height 65px
    background-color #fff
    font-size 24px
    flex 100%
    text-align center
    display flex
    .year__chooser
      height 100%
      flex: 1
      cursor pointer
      display flex
      align-items center
      justify-content center
      color rgba(black, 0.9)
      &:hover
        background-color rgba(#666, 0.1)
      &:nth-child(4n-3)
        color rgba(black, 0.3)
      &:nth-child(2n)
        color rgba(black, 0.6)
      &:nth-child(3)
        box-shadow inset 0px -3px #4792BD
  .container__months
    flex-wrap wrap
    display flex
    padding: 15px
  .container__month
    padding: 8px
    flex 16.66%

</style>
