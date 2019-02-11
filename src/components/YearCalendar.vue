<template>
  <div class="vue-calendar__container">
    <div class="container__year">
      <!-- <span><button @click="addYear(-1)">back</button></span> -->
      <span
        v-for="i in 5"
        :key="i"
        class="year__chooser"
        @click="changeYear(i)"
      >
        {{ i + activeYear - 3 }}
      </span>
      <!-- <span><button @click="addYear(1)">next</button></span> -->
    </div>
    <div class="container__months">
      <month-calendar
        class="container__month"
        v-for="n in 12"
        :key="`month-${n}`"
        :year="activeYear"
        :month="n"
        :activeDates="month[n] || []"
        @toggleDate="toggleDate"
      >
      </month-calendar>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import MonthCalendar from './MonthCalendar'
export default {
  name: 'year-calendar',
  props: {
    activeDates: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number],
      default: dayjs().year()
    }
  },
  components: {
    MonthCalendar
  },
  data () {
    return {
    }
  },
  computed: {
    month () {
      const month = {}
      this.activeDates.forEach(date => {
        let m = (dayjs(date).month() + 1).toString()
        if (!month[m]) month[m] = []
        month[m].push(date)
      })
      console.log(month)
      return month
    },
    activeYear: {
      get () {
        return parseInt(this.value)
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    changeYear (idx) {
      this.activeYear = idx + this.activeYear - 3
    },
    toggleDate (dateObj) {
      this.$emit('toggleDate', {
        date: dayjs()
          .set('year', this.value)
          .set('month', dateObj.month - 1)
          .set('date', dateObj.date)
          .format('YYYY-MM-DD'),
        selected: dateObj.selected
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.vue-calendar__container
  border-radius: 2px
  min-width: 0
  position: relative
  text-decoration: none
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)
  background-color #F6F6F3
  .container__year
    user-select none
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
    @media (max-width: 1300px)
      flex: 25%
    @media (max-width: 992px)
      flex: 33.3%
    @media (max-width: 768px)
      flex: 50%
    @media (max-width: 450px)
      flex: 100%
</style>
