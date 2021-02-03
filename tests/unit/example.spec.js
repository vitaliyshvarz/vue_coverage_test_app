import { shallowMount } from '@vue/test-utils'
import AddTodo from '@/components/AddTodo.vue'

describe('AddTodo.vue', () => {
  it('renders h3 when passed', () => {
    const h3 = 'Add Todo'
    const wrapper = shallowMount(AddTodo)
    expect(wrapper.text()).toMatch(h3)
  })
})
