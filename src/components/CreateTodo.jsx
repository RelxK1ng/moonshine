import { HiPlusSm } from 'react-icons/hi'
import { createNote } from '../actions/notes'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
const CreateTodo = () => {
  const dispatch = useDispatch()
  const [note, setNote] = useState({
    title: '',
    description: '',
    date: ''
  })
  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value
    })
  }
  const createTodoHandler = async (event) => {
    event.preventDefault()
    dispatch(createNote(note))
  }

  return (
    <form
      onSubmit={createTodoHandler}
      className='flex flex-col gap-3 mt-24 rounded-2xl'
    >
      <div className='flex items-center w-full gap-2 m-3'>
        <div className='block shrink-0 rounded-full bg-black p-2.5 text-gray-600 shadow-sm'>
          <HiPlusSm className='w-5 h-5 text-white' />
        </div>
        <h2 className='font-medium text-gray-900'>Create A Todo</h2>
      </div>
      <div className='flex flex-wrap items-center justify-center pb-8 m-3 mt-6 gap-7 md:flex'>
        <label
          htmlFor='Task'
          className='relative block w-full px-1 pt-4 overflow-hidden border border-gray-200 rounded-md shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black'
        >
          <input
            type='text'
            autoComplete='off'
            id='title'
            name='title'
            required
            value={note.title}
            onChange={handleChange}
            placeholder='Input a new task'
            className='w-full p-2 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
          />
          <span className='absolute text-xs text-left text-gray-700 transition-all -translate-y-1/2 start-3 top-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
            Task Name
          </span>
        </label>
        <label
          htmlFor='taskDate'
          className='relative block w-full px-1 pt-4 overflow-hidden border border-gray-200 rounded-md shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black '
        >
          <input
            type='date'
            id='date'
            required
            name='date'
            value={note.date}
            onChange={handleChange}
            placeholder='Input a new date'
            className='w-full p-2 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
          />
          <span className='absolute text-xs text-left text-gray-700 transition-all -translate-y-1/2 start-3 top-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
            DateTime
          </span>
        </label>
        <label className='sr-only' htmlFor='message'>
          Message
        </label>

        <textarea
          className='w-full p-3 text-sm border-gray-200 rounded-lg'
          placeholder='Input Description...'
          rows='8'
          onChange={handleChange}
          value={note.description}
          name='description'
          id='description'
        ></textarea>
        <button className='inline-block w-full px-8 py-3 text-sm font-medium text-white transition bg-black rounded-3xl hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-white active:text-black md:w-3/4'>
          Create
        </button>
      </div>
    </form>
  )
}

export default CreateTodo
