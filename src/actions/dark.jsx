export const initDarkMode = (setMode) => async (dispatch) => {
  dispatch({ type: 'INIT_DARK_MODE', payload: setMode })
}

export const toggleDarkMode = () => async (dispatch) => {
  dispatch({ type: 'TOGGLE_DARK_MODE' })
}
