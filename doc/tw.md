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
## 分類
![Classification](https://i.imgur.com/3KB3RK7.png)---
## Getting Started
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
  * 1.2.0 版後更新，可使用物件陣列 `[{date: '2019-01-01', className: 'info'}]`

可以使用物件中的 `className` 來新增不同分類狀態。

若不使用分類，也可以直接儲存字串陣列。

ex:
```javascript
:activeDates: [{ date: '2019-03-13', className: 'red' }, { date: '2019-03-14', className: 'blue' }]
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

### dayActiveClass
  * Type: `String`  
  * Default: 'calendar--active'  

用來自訂分類，變更日期被選擇時，所設定的 class，需配合 `defaultActiveClass`

ex:  

```vue
<template>
<year-calendar
  ...
  dayActiveClass="custom-day-active-class"
  defaultActiveClass="defaultActiveClass" // blue or red
></year-calendar>
</template>

<style lang="stylus">
// now you can customize your `defaultActiveClass` props.

.custom-day-active-class
  background-color: #0aa // defaultActiveClass = ''
  color: white
  &.blue
    background-color: #0000aa // defaultActiveClass = 'blue'
    color: white
  &.red
    background-color: #a00 // defaultActiveClass = 'red'
    color: white
    &:after
      background-image url('./assets/baseline-remove_circle-24px.svg')
      background-size 100% 100%
</style>
```

### defaultActiveClass

  * Type: `String` (default class: info or warning )
  * Default: ''

用來設定目前要標記的分類，可以配合 `dayActionClass` 來自訂分類。

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

