<template>
<div class="c-wrapper">
  <div class="calendar"
    @mouseup="mouseUp"
    @mouseleave.stop="mouseUp"
  >
    <div class="calendar__title">{{ month + ' 月' }}</div>
      <div
        class="calendar__body">
        <div
        v-for="(day, key) in 7"
        :key="`title${day}`"
        class="calendar__day"
      >
        {{ showDayTitle(key) }}
      </div>
      <div
        v-for="(dayObj, key) in showDays"
        class="calendar__day"
        :key="`day${key}`"
      >
        <div
          @mouseover="dragDay(arguments,dayObj)"
          @mousedown="mouseDown(dayObj)"
          class="day"
          :class="{
            'calendar__day--otherMonth': dayObj.isOtherMonth,
            'calendar--active': dayObj.active
          }"

        >
          {{ dayObj.value }}
        </div>
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
    activeDates: {
      type: Array,
      default: () => []
    },
    month: {
      type: [String, Number],
      default: () => dayjs().month() + 1
    },
    year: {
      type: [String, Number],
      default: () => dayjs().year()
    }
  },
  data () {
    return {
      showDays: [],
      isMouseDown: false
    }
  },
  methods: {
    initCalendar () {
      if (!this.year || !this.month) return []
      const activeMonth = dayjs()
        .set('date', 1)
        .set('year', this.year)
        .set('month', this.month - 1)
      let firstDay = activeMonth.startOf('month').day() - 1
      if (firstDay < 0) firstDay += 7
      const lastDate = activeMonth.endOf('month').date()
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
            isOtherMonth: firstDay > i || day > lastDate
          }
        })
      this.showDays = fullCol
    },
    showDayTitle (day) {
      const dayMapping = ['一', '二', '三', '四', '五', '六', '日']
      return dayMapping[day]
    },
    toggleDay (dayObj) {
      if (dayObj.isOtherMonth) return
      dayObj.active = !dayObj.active
      this.$emit('toggleDate', {
        month: this.month,
        date: dayObj.value,
        selected: dayObj.active
      })
    },
    dragDay (arg, dayObj) {
      if (this.isMouseDown) this.toggleDay(dayObj)
    },
    mouseDown (dayObj) {
      this.toggleDay(dayObj)
      this.isMouseDown = true
    },
    mouseUp () {
      this.isMouseDown = false
    },
    toggleDate (active) {
      const activeMonth = dayjs()
        .set('year', this.year)
        .set('month', this.month - 1)
      let firstDay = activeMonth.startOf('month').day() - 1
      if (firstDay < 0) firstDay += 7
      this.activeDates.forEach(date => {
        let active = dayjs(date)
        if (active.year() !== this.year) return
        let activeDate = active.date()
        let row = Math.floor(activeDate / 7)
        let activeArrayKey = (activeDate % 7 - 1 + firstDay) + 7 * row
        this.showDays[activeArrayKey].active = active // to array index
      })
    }
  },
  watch: {
    year (val) {
      this.initCalendar()
      this.toggleDate(true)
    },
    activeDates (after, before) {
      const countBefore = before.length
      const countAfter = after.length
      // 先判斷是多還是少
      if (countBefore < countAfter) {
        const diffDate = after.filter(date => before.indexOf(date) === -1)[0]
        let activeDate = this.showDays.find(day => day.value === dayjs(diffDate).date())
        activeDate.active = true
      } else {
        const diffDate = before.filter(date => after.indexOf(date) === -1)[0]
        let activeDate = this.showDays.find(day => day.value === dayjs(diffDate).date())
        activeDate.active = false
      }
      // this.activeDates.find()

      this.toggleDate(false)
    }
  },
  created () {
    this.initCalendar()
  },
  mounted () {
    this.toggleDate(true)
  }
}
</script>

<style lang="stylus" scoped>

.c-wrapper
  padding: 10px
.calendar
  background-color #fff
  min-height 295px
  text-align center
  color rgba(#353C46, .8)
  border-radius 2px
  min-width 0
  position relative
  text-decoration none
  box-shadow 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)
  transition transform .3s ease
  &:hover
    z-index: 2
    @media (min-width: 1024px)
      transform: scale(1.15)
      box-shadow 0 7px 21px 0 rgba(0,0,0,.1)
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
  .calendar__body
    display flex
    flex-wrap: wrap
    justify-content flex-start
    align-content flex-start
    padding: 0px 20px
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
    &:not(.calendar__day--otherMonth):hover
      background-color rgba(#666, 0.1)
      border-radius 5px
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
      background-image url('../assets/baseline-remove_circle-24px.svg')
      background-size 100% 100%
  & .calendar__day--otherMonth
    color: #eaeaea
    cursor: auto
</style>
