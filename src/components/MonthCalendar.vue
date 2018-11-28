<template>
<div class="c-wrapper">
  <div class="calendar">
    <div class="calendar__title">{{ month + ' 月' }}</div>
    <div
      v-for="(day, key) in 7"
      :key="`title${day}`"
      class="calendar__day"
      :class="{
        'calendar__title--weekend': key === 0 || key === 6
      }"
    >
      {{ showDayTitle(key) }}
    </div>
    <div
      v-for="(dayObj, key) in showDays"
      class="calendar__day"
      :key="`day${key}`"
    >
      <div
        @click="toggleDay(dayObj)"
        class="day"
        :class="{
          'calendar__day--nextmonth': dayObj.isNextMonth,
          'calendar--active': dayObj.active
        }"
      >
        {{ dayObj.value }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'month-calendar',
  props: {
    month: {
      type: [String, Number],
      default: () => dayjs().month() + 1
    },
    year: {
      type: [String, Number],
      default: () => dayjs().year()
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      showDays: []
    }
  },
  methods: {
    initCalendar () {
      if (!this.year || !this.month) return []
      const activeDay = dayjs()
        .set('year', this.year)
        .set('month', this.month - 1)
      const firstDay = activeDay.startOf('month').day()
      const lastDate = activeDay.endOf('month').date()
      const weekRow = firstDay === 6 ? 6 : 5
      const WEEK = 7
      let day = 0
      const fullCol = Array.from(Array(weekRow * WEEK).keys())
        .map(i => {
          let value = firstDay <= i
            ? day++ % lastDate + 1
            : ''
          return {
            value,
            active: false,
            isNextMonth: day > lastDate
          }
        })
      this.showDays = fullCol
    },
    showDayTitle (day) {
      const dayMapping = ['日', '一', '二', '三', '四', '五', '六']
      return dayMapping[day]
    },
    toggleDay (dayObj) {
      if (dayObj.isNextMonth) return
      dayObj.active = !dayObj.active
    }
  },
  watch: {
    year (val) {
      this.initCalendar()
    }
  },
  created () {
    this.initCalendar()
  }
}

</script>

<style lang="stylus" scoped>

.c-wrapper
  padding: 10px
.calendar
  background-color #fff
  min-height: 288px
  display flex
  flex-wrap: wrap
  text-align center
  color: #353C46
  border-radius: 2px
  min-width: 0
  position: relative
  text-decoration: none
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)
  justify-content flex-start
  align-content flex-start
  .calendar__title
    font-weight bold
    flex 100%
    display flex
    align-items center
    justify-content center
    border-bottom 1px solid rgba(#C4C4C4, 0.3)
    font-size 18px
    height: 50px
    margin-bottom 12px
  & .calendar__title--weekend
    color: red
  .calendar__day
    flex 14.28%
    display flex
    justify-content center
    align-items center
    font-size 16px
    height: 31px
  .day
    font-size 14px
    cursor pointer
    user-select none
    width: 22px
    height 22px
    color: #5DB3D4
    display flex
    justify-content center
    align-items center
    &.calendar--active
      background-color: rgba(#FFBABA, .5)
      border-radius 3px
      color #BCBCBC
      position relative
    &.calendar--active:after
      content ''
      display block
      height: 10px
      width 10px
      background-color #fff
      position absolute
      top -5px
      right -5px
      border-radius 50%
      background-image url('../../public/baseline-remove_circle-24px.svg')
      background-size 100% 100%
  & .calendar__day--nextmonth
   color: #eaeaea
</style>
