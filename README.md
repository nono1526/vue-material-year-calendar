English | [繁體中文](./doc/tw.md)
![](https://i.imgur.com/7rinsub.png)
<!-- ![](https://i.imgur.com/0JRDuTV.png) -->
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
## Classification
![Classification](https://i.imgur.com/3KB3RK7.png)---
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
   * 
Your selected dates. 

ex:  
```javascript
:activeDates.sync="['2019-01-01', '2019-01-02', '2020-01-01']"
```

  * After 1.2.0 version
  
You can use array of objects or just uses `String`.

Then you can set `className` for classification feature.x

ex:
```javascript
:activeDates: [{ date: '2019-03-13', className: 'red' }, { date: '2019-03-14', className: 'blue' }],
```




### lang
   * Type: `String`
   * Default: `en`

Choose language to displayed.

`en`: English, `tw`: 繁體中文, `pt`: Português

### showYearSelector 
   * Type: `Boolean`
   * Default: `true`

Show or hide the years selector on top of the calendar.

ex: 
```javascript
:showYearSelector="false"
```

### dayActiveClass
  * Type: `String`  
  * Default: 'calendar--active'  

Change day active class for customize `defaultActiveClass` props.  

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

Classification for active days. You can use `dayActiveClass` prop to customize your `defaultActiveClass`!

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

