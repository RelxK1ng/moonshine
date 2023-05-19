import { HiPlusSm } from 'react-icons/hi'
const Contents = () => {
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
      <div className='items-center w-full max-w-4xl px-5 py-8 mx-auto md:px-12 lg:px-16'>
        <div className='max-w-3xl p-8 mx-auto '>
          <div>
            <p className='text-4xl font-medium tracking-tighter text-black '>
              {greet()}
            </p>
            <p className='max-w-xl mt-6 text-2xl font-medium tracking-tight'>
              Chenghui Jiang
            </p>
          </div>
          <div className='flex flex-col gap-3 mt-14 bg-slate-50 rounded-2xl'>
            <div className='flex items-center w-full gap-2 m-3'>
              <button className='block shrink-0 rounded-full bg-black p-2.5 text-gray-600 shadow-sm'>
                <HiPlusSm className='w-5 h-5 text-white' />
              </button>

              <h2 className='font-medium text-gray-900'>Create A Todo</h2>
            </div>
            <div className='inline-flex items-center justify-center pb-8 mt-6 gap-7'>
              <label
                htmlFor='Task'
                className='relative block px-3 pt-3 overflow-hidden border border-gray-200 rounded-md shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black'
              >
                <input
                  type='text'
                  id='Task'
                  placeholder='Input a new task'
                  className='w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                />

                <span className='absolute text-xs text-gray-700 transition-all -translate-y-1/2 start-3 top-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
                  Task Name
                </span>
              </label>
              <label
                htmlFor='taskDate'
                className='relative block px-3 pt-3 overflow-hidden border border-gray-200 rounded-md shadow-sm focus-within:border-black focus-within:ring-1 focus-within:ring-black'
              >
                <input
                  type='date'
                  id='taskDate'
                  placeholder='Input a new date'
                  className='w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
                />

                <span className='absolute text-xs text-gray-700 transition-all -translate-y-1/2 start-3 top-3 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs'>
                  DateTime
                </span>
              </label>
              <button className='inline-block px-8 py-3 text-sm font-medium text-white transition bg-black rounded-3xl hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
                Add more
              </button>
              <button className='inline-block px-8 py-3 text-sm font-medium text-white transition bg-black rounded-3xl hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500'>
                Create
              </button>
            </div>
            {/* <a
              href='#'
              className='inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600'
            >
              Learn more
              <span aria-hidden='true'> → </span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contents
