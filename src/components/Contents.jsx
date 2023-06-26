import CreateTodo from './CreateTodo'
import TaskList from './TaskList'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../actions/notes'
const Contents = () => {
  const profile = localStorage.getItem('profile')
  const user = profile != null ? JSON.parse(profile) : undefined

  const greet = () => {
    const hour = new Date().getHours()
    if (hour >= 6 && hour < 12) {
      return 'Good morning🌅'
    } else if (hour >= 12 && hour < 18) {
      return 'Good afternoon🌝'
    } else {
      return 'Good evening🌛'
    }
  }
  return (
    <section className='bg-slate-50 dark:bg-slate-800'>
      <div className='items-center w-full max-w-6xl px-5 py-8 mx-auto md:px-12 lg:px-16'>
        <div className='gap-5 p-8 '>
          <div className='p-12 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
            <p className='text-4xl font-medium tracking-tighter text-white '>
              {greet()}
            </p>
            <p className='max-w-xl mt-6 text-2xl font-medium tracking-tight text-white '>
              {profile == undefined ? '' : user.result.name}
            </p>
          </div>
          <CreateTodo />
          <TaskList />
        </div>
      </div>
    </section>
  )
}

export default Contents
