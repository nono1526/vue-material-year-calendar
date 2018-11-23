<template>
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
      :class="{
        'calendar__day--nextmonth': dayObj.isNextMonth
      }"
      :key="`day${key}`"
    >
      {{ dayObj.value }}
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
  computed: {
    showDays: {
      get () {
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
        return fullCol
      },
      set (val) {

      }
    }
  },
  methods: {
    showDayTitle (day) {
      const dayMapping = ['日', '一', '二', '三', '四', '五', '六']
      return dayMapping[day]
    }
  }
}

</script>

<style lang="stylus" scoped>
.calendar
  display flex
  text-align center
  flex-wrap: wrap
  color: #222
  .calendar__title
    font-size 22px
    flex 100%
  & .calendar__title--weekend
    color: red
  .calendar__day
    flex 14.28%
  & .calendar__day--nextmonth
   color: #eaeaea
</style>
