English | [繁體中文](./doc/tw.md)
# vue-material-year-calendar component  
<a href="https://www.npmjs.com/package/vue-material-year-calendar"><img src="https://img.shields.io/npm/v/vue-material-year-calendar.svg"  alt="Versions"></a> <a  href="https://www.npmjs.com/package/vue-material-year-calendar"><img  src="https://img.shields.io/npm/dm/vue-material-year-calendar.svg"  alt="Downloads"></a> <a  href="https://www.npmjs.com/package/vue-material-year-calendar"><img src="https://img.shields.io/npm/l/vue-material-year-calendar.svg"  alt="License"></a>

[[DEMO](https://nono1526.github.io/vue-material-year-calendar)]-[[GitHub](https://github.com/nono1526/vue-material-year-calendar)] 
用 Vue.js v2.5 做的萬年曆
depend on dayjs
## `<YearCalendar>`
基本用法  
![Basic_demo](https://media.giphy.com/media/LXQxkdBrhmVzOEMbQf/giphy.gif)  
可使用滑鼠拖曳快速選擇日期，簡易效果如下  
![demo](https://media.giphy.com/media/BZkjvL89E4dDvUikAl/giphy.gif)
### EXAMPLE
```vue
<template>
  <YearCalendar
    v-model="year"
    :activeDates.sync ="activeDates"
    @toggleDate="toggleDate"
    :lang="tw"
  ></YearCalendar>
</template>

<script>
import YearCalendar from 'vue-material-year-calendar'

export default {
  components: { YearCalendar },
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

```


## Docs
### PROPS
1. `v-model` 綁定年份 `String | Number` (required)
所使用的預設年份
2. `activeDates.sync` 預設選擇日期 `Array` (default [])
需使用 .sync 來雙向同步日期資訊
傳入預設被選擇的日期 Ex: `['2018-01-01', '2019-01-01', '2019-01-02', '2019-01-03', '2020-01-01']`
3. `lang` `String` 語系 `en`: English, `tw`: 繁體中文
   * `default`: `en`


### EVENT
#### @toggleDate 當所選日期被使用者所改變
* params
    * dateInfo `Object`
        *  date `String` YYYY-mm-dd 被觸發的日期
        *  selected `Boolean` 被選擇日期的狀態

