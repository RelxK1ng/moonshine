import decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import UserInfo from './UserInfo'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineLogin, HiMoon, HiSun } from 'react-icons/hi'
import { toggleDarkMode, initDarkMode } from '../actions/dark'
const Header = () => {
  const profile = localStorage.getItem('profile')
  const darkMode = useSelector((state) => state.dark).darkMode
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
  const dispath = useDispatch()
  const navigate = useNavigate()
  const [user, setUser] = useState(
    profile != null ? JSON.parse(profile) : undefined
  )
  const handleLogin = () => {
    navigate('/login')
  }
  const handleLogout = () => {
    dispath({ type: 'LOGOUT' })
    navigate('/login')
  }
  const handleDark = (event) => {
    event.preventDefault()
    dispath(toggleDarkMode())
  }
  useEffect(() => {
    const html = document.querySelector('html')
    darkMode ? html.classList.add('dark') : html.classList.remove('dark')
  }, [darkMode])
  useEffect(() => {
    if (darkMode == null && localStorage.getItem('dark-mode') == null) {
      dispath(initDarkMode(isDarkTheme.matches))
    } else if (darkMode == null && localStorage.getItem('dark-mode') != null) {
      dispath(initDarkMode(JSON.parse(localStorage.getItem('dark-mode'))))
    }

    const changeDark = () => {
      dispath(initDarkMode(isDarkTheme.matches))
    }
    isDarkTheme.addEventListener('change', changeDark)
    return () => {
      isDarkTheme.removeEventListener('change', changeDark)
    }
  }, [])

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
      localStorage.removeItem('profile')
    }
  }, [user?.token])

  return (
    <header aria-label='Page Header' className='bg-slate-50 dark:bg-slate-800'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8'>
        <div className='flex items-center sm:justify-between sm:gap-4'>
          <div className='relative hidden sm:block'>
            <h1 className='text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl'>
              MoonShine
            </h1>
          </div>

          <div className='flex items-center justify-between flex-1 gap-8 sm:justify-end'>
            <div className='flex gap-4'>
              <button
                onClick={handleDark}
                type='button'
                className='block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700'
              >
                <span className='sr-only'>Dark</span>
                {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
              </button>
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
                  className='flex items-center gap-2 w-full shrink-0 place-items-center rounded-lg bg-white p-2.5 text-gray-700 shadow-sm hover:text-white hover:bg-black  dark:hover:bg-white  dark:hover:text-black'
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
