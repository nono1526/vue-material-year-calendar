import YearCalendar from './src/components/YearCalendar.vue'
export default YearCalendar
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('year-calendar', YearCalendar)
}
