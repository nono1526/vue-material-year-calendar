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
        :activeDates="month[n]"
        @toggleDate="toggleDate"
        :lang="lang"
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
    // value 為從外層傳進來的 v-model="year"
    value: {
      type: [String, Number],
      default: dayjs().year()
    },
    lang: {
      type: String,
      default: 'en'
    }
  },
  components: {
    MonthCalendar
  },
  created () {
    this.activeDates.forEach(el => {
      if (this.isValidate(el) === false) {
        throw new Error('Invalid date:' + el)
      }
    })
  },
  computed: {
    month () {
      const month = {}
      this.activeDates.forEach(date => {
        if (dayjs(date).year() !== this.value) return // 讓2020年1月的資料，不會放到 2019年的1月資料裡
        let m = (dayjs(date).month() + 1).toString()
        if (!month[m]) month[m] = []
        month[m].push(date)
      })
      return month
    },
    activeYear: {
      get () {
        return parseInt(this.value) // this.value 為從外層傳進來的 v-model="year"
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    isValidate (dateString) {
      // 測試是否為 YYYY-MM-DD 格式，以及不合理日期排除"

      // https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript
      // 由於 「^\d{4}\-\d{1,2}\-\d{1,2}$」會被ESLint 判為錯誤，所以以下暫時關閉 EsLint 對這一行的驗證
      // eslint-disable-next-line no-useless-escape
      if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(dateString)) {
        return false
      }
      // Parse the date parts to integers
      var parts = dateString.split('-')
      var day = parseInt(parts[2], 10)
      var month = parseInt(parts[1], 10)
      var year = parseInt(parts[0], 10)
      // console.log(year + month + day)

      // Check the ranges of month and year
      if (year < 1000 || year > 3000 || month === 0 || month > 12) { return false }
      var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
      // Adjust for leap years
      if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) { monthLength[1] = 29 }
      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1]
    },
    changeYear (idx) {
      this.activeYear = idx + this.activeYear - 3
    },
    toggleDate (dateObj) {
      const activeDate = dayjs()
        .set('year', this.value)
        .set('month', dateObj.month - 1)
        .set('date', dateObj.date)
        .format('YYYY-MM-DD')
      this.$emit('toggleDate', {
        date: activeDate,
        selected: dateObj.selected
      })
      let newDates = [...this.activeDates]
      let dateIndex = newDates.indexOf(activeDate)
      if (dateIndex === -1) {
        newDates.push(activeDate)
      } else {
        newDates.splice(dateIndex, 1)
      }

      this.$emit('update:activeDates', newDates)
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
