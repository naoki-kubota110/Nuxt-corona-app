import { mount,createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '../pages/index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
// let wrapper
// beforeEach(() => {
//   wrapper = mount(Index,{
//     localVue,
//     store
//   })
// })

describe('トップページのテスト', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {},
      getters:{}
    })
  })

  test('AboutページのVueインスタンスが存在するのか確認', () => {
    const wrapper = mount(Index,{store,localVue})
    expect(wrapper.vm).toBeTruthy()
    console.log(wrapper.html())
  })
})