const TaskList = () => {
  return (
    <div className='relative mt-6 overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='flex items-center justify-between py-4 dark:bg-gray-800 bg-slate-50'>
        <div className='pl-4 text-xl font-medium '>
          <span>{new Date().getFullYear()}-05-22</span>
        </div>
      </div>
      <div className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <div className='items-center justify-center '>
          <input type='radio' />
          <label className='ml-2'>123456</label>
        </div>
      </div>
    </div>
  )
}

export default TaskList
