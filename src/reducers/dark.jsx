const darkModeReducer = (state = { darkMode: null }, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      const newDarkMode = !state.darkMode
      localStorage.setItem('dark-mode', newDarkMode)
      return { darkMode: newDarkMode }
    case 'INIT_DARK_MODE':
      localStorage.setItem('dark-mode', action.payload)
      return { darkMode: action.payload }
    default:
      return state
  }
}

export default darkModeReducer
