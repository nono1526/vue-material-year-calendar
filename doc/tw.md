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
    :activeDates.sync="activeDates"
    @toggleDate="toggleDate"
    prefixClass="your_customized_wrapper_class"
    :activeClass="activeClass"
  ></YearCalendar>
</template>

<script>
import YearCalendar from 'vue-material-year-calendar'

export default {
  components: { YearCalendar },
  data () {
    return {
      year: 2019,
      activeDates: [
        { date: '2019-02-13' },
        { date: '2019-02-14', className: 'red' },
        { date: '2019-02-15', className: 'blue' },
        { date: '2019-02-16', className: 'your_customized_classname' }
      ],
      activeClass: '',
    }
  },
  methods: {
    toggleDate (dateInfo) {
      console.log(dateInfo)  // { date: '2010-10-23', selected: true }
    }
  }
}
</script>

<style lang="stylus">
.your_customized_wrapper_class
  background-color: #0aa
  color: white
  &.red
    background-color: red
    color: white
    &:after
      background-image url('./assets/baseline-remove_circle-24px.svg')
      background-size 100% 100%
  &.blue
    background-color: #0000aa
    color: white
  &.your_customized_classname
    background-color: yellow
    color: black

</style>

```


## 📚 props
### v-model
   * Type: `String` | `Number`
   * Required: `true`

要顯示的年份。

### activeDates.sync
   * Type: `Array of objects`  
   * Required: `true`
   * Default: `[]`

使用者選擇的日期。

若有設定 `className` 的屬性，則可以在CSS裡控制該日期的樣式。

ex:
```javascript
  [
    { date: '2019-02-13' },
    { date: '2019-02-14', className: 'red' },
    { date: '2019-02-15', className: 'blue' },
    { date: '2019-02-16', className: 'your_customized_classname' }
  ],
```

### prefixClass
  * Type: `String`  
  * Default: `calendar--active`  
  * Required: `true`

包在外層的CSS calss。 

例如你設定 `prefixClass` 為`your_customized_wrapper_class`，則你可以在CSS裡面，透過`your_customized_wrapper_class`來做外層的CSS包覆。

ex:  

```vue
<template>
<year-calendar
  ...
  prefixClass="your_customized_wrapper_class"
></year-calendar>
</template>

<style lang="stylus">

.your_customized_wrapper_class
  background-color: #0aa
  color: white
  &.red
    background-color: #a00
    color: white
    &:after
      background-image url('./assets/baseline-remove_circle-24px.svg')
      background-size 100% 100%
  &.blue
    background-color: #0000aa
    color: white
  &.your_customized_classname
    background-color: yellow
    color: black

</style>
```


### activeClass

  * Type: `String` (default class: info or warning )
  * Default: `''`(empty string)

點擊日期時，會切換的 class name. 例如當你指定 `activeClass` 為 `my_red`後，點擊某個日期，該日期就會新增/移除對應的 class name.

![](https://i.imgur.com/Lmp3RG1.png)


### lang
   * Type: `String`
   * Default: `en`

選擇語系。預設為英文。

`en`: English, `tw`: 繁體中文, `pt`: Português, `de`: Deutsch, `pl`: Polish

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


### @monthClickEvent
   * $event: `{ year: 2021, month: 1, monthTitle: 'January' }`

點選月份時，觸發這個函數。

ex: 

```vue
<template>
  <YearCalendar
    @monthClickEvent="monthClick"
  ></YearCalendar>
</template>

<script>
  .....
  methods: {
    monthClick (monthYearInfo) {
      console.log(monthYearInfo) // { year: 2021, month: 1, monthTitle: 'January' }
    }
  }
</script>
```