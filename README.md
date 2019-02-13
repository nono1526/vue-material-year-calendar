# vue-material-year-calendar component
[[DEMO](https://nono1526.github.io/vue-year-calendar/)]-[[GitHub](https://github.com/nono1526/vue-year-calendar)] 
用 Vue.js v2.5 做的萬年曆
depend on dayjs
## `<YearCalendar>`
### PROPS
#### `v-model` 綁定年份 `String | Number` (required)
所使用的預設年份
#### `activeDates.sync` 預設選擇日期 `Array` (default [])
需使用 .sync 來雙向同步日期資訊
傳入預設被選擇的日期 Ex: `['2018-01-01', '2019-01-01', '2019-01-02', '2019-01-03', '2020-01-01']`
### EVENT
#### @toggleDate 當所選日期被使用者所改變
* params
    * dateInfo `Object`
        *  date `String` YYYY-mm-dd 被觸發的日期
        *  selected `Boolean` 被選擇日期的狀態
### EXAMPLE
```vue
<template>
  <div id="app">
    <YearCalendar
      v-model="year"
      :activeDates="activeDates"
      @toggleDate="toggleDate"
    ></YearCalendar>
  </div>
</template>

<script>
import YearCalendar from 'vue-material-year-calendar'

export default {
  name: 'app',
  components: {
    YearCalendar
  },
  data () {
    return {
      year: 2019,
      activeDates: ['2018-01-01', '2019-01-01', '2019-01-02', '2019-01-03', '2020-01-01']
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