import { HiOutlineEye, HiOutlineTrash } from 'react-icons/hi'
import { deleteNote, getNotes } from '../actions/notes'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const TaskList = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes)
  useEffect(() => {
    dispatch(getNotes())
  }, [])

  const deleteTodoHandler = async (id) => {
    try {
      dispatch(deleteNote(id))
    } catch (error) {
      console.log('deleteTodoHandler error', error)
    }
  }
  return (
    <>
      {notes.length < 1
        ? null
        : notes.map((note) => (
            <div
              key={note._id}
              className='relative mt-6 overflow-x-auto shadow-md rounded-xl'
            >
              <div className='flex items-center justify-between py-4 bg-slate-200 dark:bg-white'>
                <div className='pl-4 text-xl font-medium'>
                  <span>{moment(note.createdAt).format('YYYY-MM-DD')}</span>
                </div>
              </div>
              <div className='grid grid-cols-3 gap-4 p-4 dark:bg-slate-100'>
                <div className='flex items-center justify-start col-span-2'>
                  <input type='radio' />
                  <label className='ml-2 text-base font-bold capitalize truncate '>
                    {note.title}
                  </label>
                </div>
                <div className='flex justify-end gap-2 lg:gap-8 '>
                  <button>
                    <HiOutlineEye
                      size={24}
                      className='stroke-1 stroke-slate-400 hover:stroke-slate-900'
                    />
                  </button>
                  <button onClick={() => deleteTodoHandler(note._id)}>
                    <HiOutlineTrash
                      size={24}
                      className='stroke-1 text-slate-400 hover:text-red-600'
                    />
                  </button>
                </div>
                {note.description !== null ? (
                  <div className='col-span-3'>
                    <p className='text-sm text-justify break-normal line-clamp-2 indent-6 text-slate-600'>
                      {note.description}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
    </>
  )
}

export default TaskList
