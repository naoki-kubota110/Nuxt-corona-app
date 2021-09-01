import { mount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '../pages/index.vue'
import store from '../store/pcr'
const localVue = createLocalVue()
localVue.use(Vuex)
let wrapper
const store = {
  store
}
beforeEach(() => {
  wrapper = mount(Index,{
    localVue,
    store
  })
})

describe('トップページのテスト', () => {
  test('AboutページのVueインスタンスが存在するのか確認', () => {
    expect(wrapper.vm).toBeTruthy()
    console.log(wrapper.html())
  })
})