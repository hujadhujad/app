export const state = () => ({
  activeSection: {}
})

export const mutations = {
  setActiveSection (state, section) {
    state.activeSection = section
  },
  clearActiveSection (state) {
    state.activeSection = {}
  }
}
