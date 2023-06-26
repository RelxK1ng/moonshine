import axios from 'axios'

const API = axios.create({ baseURL: 'https://github-repos-cqrg.onrender.com/' })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`
  }
  return req
})

export const signIn = (userData) => API.post('/users/signin', userData)
export const signUp = (userData) => API.post('/users/signup', userData)

export const fetchNotes = () => API.get('/notes')
export const createNote = (newNote) => API.post('/notes', newNote)
export const updateNote = (id, updatedNote) =>
  API.patch(`/notes/${id}`, updatedNote)
export const deleteNote = (id) => API.delete(`/notes/${id}`)
export const updateNoteChecked = (id) => API.get(`/notes/${id}`)
