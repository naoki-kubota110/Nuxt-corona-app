export const state = () => ({
  totalInfection : {},
  totalDeath:{}
})

export const getters = {
  :(state) => state.totalDeath.slice(-1)
}

export const mutations = {
  setTotalData(state,totalData){
    state.tl = totalData
  },
  setTotalDeath(state,totalDeath){
    state.totalDeath = totalDeath
  }
}
export const actions = {
  fetchTotalData({commit}, payload){
    commit("setTotalData", payload)
  },
  fetchTotalDeath({commit}, payload){
    commit("setTotalDeath", payload)
  }
}