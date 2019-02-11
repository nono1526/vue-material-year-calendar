# vue-material-year-calendar component
[[DEMO](https://nono1526.github.io/vue-year-calendar/)]-[[GitHub](https://github.com/nono1526/vue-year-calendar)]
depend on dayjs
## `<year-calendar>`
### PROPS
#### `v-model` 綁定年份 `String | Number` (required)
所使用的預設年份
#### `activeDates` 預設選擇日期 `Array` (default [])
傳入預設被選擇的日期 Ex: `['2018-01-01', '2018-12-06', '2018-02-20', '2018-01-14', '2018-01-13', '2018-01-15', '2019-01-01', '2017-06-14']`
### EVENT
#### @toggleDate 當所選日期被使用者所改變
* params
    * dateInfo `Object`
        *  date `String` YYYY-mm-dd 被觸發的日期
        *  selected `Boolean` 被選擇日期的狀態
### EXAMPLE
```
<template>
  <div id="app">
    <year-calendar
      v-model="year"
      :activeDates="activeDates"
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

```