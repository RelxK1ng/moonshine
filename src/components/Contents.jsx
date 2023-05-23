import CreateTodo from './CreateTodo'
import TaskList from './TaskList'
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
    <section className='bg-white'>
      <div className='items-center w-full max-w-6xl px-5 py-8 mx-auto md:px-12 lg:px-16'>
        <div className='gap-5 p-8'>
          <div>
            <p className='text-4xl font-medium tracking-tighter text-black '>
              {greet()}
            </p>
            <p className='max-w-xl mt-6 text-2xl font-medium tracking-tight'>
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
