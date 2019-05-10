import { mount } from '@vue/test-utils'
import MonthCalendar from '@/components/MonthCalendar'
describe('MonthCalendar', () => {
  const wrapper = mount(MonthCalendar, {
    propsData: {
      month: 1,
      lang: 'tw',
      year: 2019
    }
  })
  it('renders title', () => {
    expect(wrapper.html()).toContain('<div class="calendar__title">一月</div>')
  })

  it('renders array of strings correctly', () => {
    wrapper.setProps({
      activeDates: ['2019-01-01', '2019-01-20']
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders array of objects correctly', () => {
    wrapper.setProps({
      activeDates: [{ date: '2019-01-13', className: '' },
        { date: '2019-01-14', className: 'info' },
        { date: '2019-01-15', className: 'warning' }]
    })
    expect(wrapper.element).toMatchSnapshot()
  })
  
})
