import * as api from '../common/api'

export const signin = (formValue, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formValue)
    dispatch({ type: 'AUTH', payload: data })
    navigate('/home')
  } catch (error) {
    console.log('signin error', error)
  }
}

export const signup = (formValue, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formValue)
    dispatch({ type: 'AUTH', payload: data })
    navigate('/home')
  } catch (error) {
    console.log('signup error', error)
  }
}
