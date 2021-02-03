import {  shallowMount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('has data', () => {
    expect(typeof App.name).toBe('string')
  })
});

describe('Mounted App', () => {
  const wrapper = shallowMount(App);

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})