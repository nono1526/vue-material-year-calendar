English | [繁體中文](./doc/tw.md)
# Vue Material Year Calendar
<p align="center">
<a href="https://www.npmjs.com/package/vue-material-year-calendar"><img src="https://img.shields.io/npm/v/vue-material-year-calendar.svg"  alt="Versions"></a> <a  href="https://www.npmjs.com/package/vue-material-year-calendar"><img  src="https://img.shields.io/npm/dm/vue-material-year-calendar.svg"  alt="Downloads"></a> <a  href="https://www.npmjs.com/package/vue-material-year-calendar"><img src="https://img.shields.io/npm/l/vue-material-year-calendar.svg"  alt="License"></a>
</p>  

> There is no full year (12 months on a page) calendar right now, the Vue-material-year-calendar is designed to solve this problem.  

* 🔥 12 Months on a page
* 🌈 Material style
* 🕒 depend on [dayjs](https://github.com/iamkun/dayjs)
* 🍀 by Vue.js  


### [Simple Live Demo](https://nono1526.github.io/vue-material-year-calendar)

## Basic usage  

![Basic_demo](https://media.giphy.com/media/LXQxkdBrhmVzOEMbQf/giphy.gif)  
## Draggable
![demo](https://media.giphy.com/media/BZkjvL89E4dDvUikAl/giphy.gif)  

---
## Getting Started

### 📚 Installation

```console
npm install vue-material-year-calendar --save
```

### 📚 Example
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

The year to be display.

### activeDates.sync
   * Type: `Array`
   * Required: `true`
   * Default: `[]`

Your selected dates.

ex: 
```javascript
:activeDates.sync="['2019-01-01', '2019-01-02', '2020-01-01']"
```


### lang
   * Type: `String`
   * Default: `en`

Choose language to displayed.

`en`: English, `tw`: 繁體中文

### showYearSelector 
   * Type: `Boolean`
   * Default: true

Show or hide the years selector on top of the calendar.

ex: 
```javascript
:showYearSelector="false"
```

## 📚 event
### @toggleDate
   * Type: `function`

Function will be called when you select/unselect a date.

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

