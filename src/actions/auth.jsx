import * as api from '../common/api'
import { toast } from 'react-toastify'
export const signin = (formValue, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formValue)
    dispatch({ type: 'AUTH', payload: data })
    navigate('/home')
  } catch (error) {
    console.log('signin error', error)
    return toast.error('Login failed!', {
      icon: '?',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff'
      }
    })
  }
}

export const signup = (formValue, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formValue)
    dispatch({ type: 'AUTH', payload: data })
    navigate('/home')
  } catch (error) {
    console.log('signup error', error)
    return toast.error(error.response.data.message, {
      icon: '?',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff'
      }
    })
  }
}
