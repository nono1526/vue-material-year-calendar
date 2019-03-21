[English](../README.md) | 繁體中文
# Vue Material Year Calendar
<p align="center">
<a href="https://www.npmjs.com/package/vue-material-year-calendar"><img src="https://img.shields.io/npm/v/vue-material-year-calendar.svg"  alt="Versions"></a> <a  href="https://www.npmjs.com/package/vue-material-year-calendar"><img  src="https://img.shields.io/npm/dm/vue-material-year-calendar.svg"  alt="Downloads"></a> <a  href="https://www.npmjs.com/package/vue-material-year-calendar"><img src="https://img.shields.io/npm/l/vue-material-year-calendar.svg"  alt="License"></a>
</p>  

> 目前2019年3月為止，市場上還沒有能一次顯示12個月份的月曆元件。 vue-material-year-calendar 來解決此問題。 

* 🔥 一次顯示12個月份
* 🌈 Material 風格
* 🕒 依賴容量小的 [dayjs](https://github.com/iamkun/dayjs)
* 🍀 在 Vue.js 2 下使用


### [Simple Live Demo](https://nono1526.github.io/vue-material-year-calendar)

## 基本用法  

![Basic_demo](https://media.giphy.com/media/LXQxkdBrhmVzOEMbQf/giphy.gif) 

## 支援滑鼠拖拉
![demo](https://media.giphy.com/media/BZkjvL89E4dDvUikAl/giphy.gif)  

---
## 快速開始

### 📚 安裝

```console
npm install vue-material-year-calendar --save
```

### 📚 範例
```vue
<template>
  <YearCalendar
    v-model="year"
    :activeDates.sync ="activeDates"
    @toggleDate="toggleDate"
    lang="tw"
    :showYearSelector="showYearSelector"
  ></YearCalendar>
</template>

<script>
import YearCalendar from 'vue-material-year-calendar'

export default {
  components: { YearCalendar },
  data () {
    return {
      year: 2019,
      activeDates: ['2018-01-01', '2019-01-01', '2019-01-02', '2019-01-03', '2020-01-01'],
      showYearSelector: true
    }
  },
  methods: {
    toggleDate (dateInfo) {
      console.log(dateInfo)  // { date: '2010-10-23', selected: true }
    }
  }
}
</script>

```


## 📚 props
### v-model
   * Type: `String` | `Number`
   * Required: `true`

要顯示的年份。

### activeDates.sync
   * Type: `Array`
   * Required: `true`
   * Default: `[]`

使用者選擇的日期。

ex: 
```javascript
:activeDates.sync="['2019-01-01', '2019-01-02', '2020-01-01']"
```


### lang
   * Type: `String`
   * Default: `en`

選擇語系。預設為英文。

`en`: English, `tw`: 繁體中文。 Taiwan NO.1

### showYearSelector 
   * Type: `Boolean`
   * Default: true

是否顯示選擇年份的 Bar

ex: 
```javascript
:showYearSelector="false"
```

## 📚 事件
### @toggleDate
   * Type: `function`

點選/取消日期時，會觸發這個函數。

ex: 

```vue
<template>
  <YearCalendar
    @toggleDate="myToggleDate"
  ></YearCalendar>
</template>

<script>
  .....
  methods: {
    myToggleDate (dateInfo) {
      console.log(dateInfo) // { date: '2010-10-23', selected: true }
    }
  }
</script>
```

