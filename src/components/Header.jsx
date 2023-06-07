import decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import UserInfo from './UserInfo'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { HiOutlineLogin } from 'react-icons/hi'
const Header = () => {
  const profile = localStorage.getItem('profile')
  const dispath = useDispatch()
  const navigate = useNavigate()

  const [user, setUser] = useState(
    profile != null ? JSON.parse(profile) : undefined
  )
  const handleLogin = () => {
    navigate('/login')
  }
  const handleLogout = useCallback(() => {
    dispath({ type: 'LOGOUT' })
    navigate('/login')
  }, [dispath, navigate])

  useEffect(() => {
    const token = user?.token
    try {
      if (token) {
        const decodeToken = decode(token)
        if (decodeToken.exp * 1000 < new Date().getTime()) {
          return handleLogout()
        }
        setUser(JSON.parse(profile))
      }
    } catch (error) {
      console.log(error.message)
      localStorage.clear()
    }
  }, [user?.token, handleLogout, profile])

  return (
    <header aria-label='Page Header' className='bg-slate-50'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center sm:justify-between sm:gap-4'>
          <div className='relative hidden sm:block'>
            <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              MoonShine
            </h1>
          </div>

          <div className='flex items-center justify-between flex-1 gap-8 sm:justify-end'>
            <div className='flex gap-4'>
              <button
                type='button'
                className='block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700'
              >
                <span className='sr-only'>Search</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </button>

              <a
                href='#'
                className='block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700'
              >
                <span className='sr-only'>Academy</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z' />
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  />
                </svg>
              </a>

              <a
                href='#'
                className='block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700'
              >
                <span className='sr-only'>Notifications</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </a>
            </div>

            <div className='relative'>
              {user?.token ? (
                <UserInfo
                  userInfo={user?.result}
                  onClick={() => handleLogout()}
                />
              ) : (
                <button
                  type='button'
                  onClick={handleLogin}
                  className='flex items-center gap-2 w-full shrink-0 place-items-center rounded-lg bg-white p-2.5 text-gray-700 shadow-sm hover:text-white hover:bg-black'
                >
                  <HiOutlineLogin className='w-5 h-5' />
                  <span> Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
