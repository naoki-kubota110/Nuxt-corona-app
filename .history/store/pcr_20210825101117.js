export const state = () => ({
  pcrData : {}
})

export const mutations = {
  setData(state,payload)
}
export const actions = {
  fetchPcrData({commit}, payload){
    console.log(payload)
    commit("setData", payload)
  }
}