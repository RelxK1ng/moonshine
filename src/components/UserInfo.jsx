import { useCallback, useEffect, useRef, useState } from 'react'

const useOutsideClick = (ref, callback) => {
  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    },
    [ref, callback]
  )
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])
}

const UserInfo = ({ onClick, userInfo }) => {
  const { name, email } = userInfo
  const menuRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenuClick = useCallback(() => {
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }, [showMenu])
  useOutsideClick(menuRef, () => {
    setShowMenu(false)
  })
  return (
    <>
      <button
        type='button'
        ref={menuRef}
        onClick={handleShowMenuClick}
        className='flex items-center transition rounded-lg group shrink-0'
      >
        <span className='sr-only'>Menu</span>
        <img
          alt='Man'
          src='/profilepicturev2.jpg'
          className='object-cover w-10 h-10 rounded-full'
        />

        <p className='hidden text-xs text-left ms-2 sm:block'>
          <strong className='block font-medium'>{name}</strong>

          <span className='text-gray-500'> {email}</span>
        </p>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='hidden w-5 h-5 text-gray-500 transition ms-4 group-hover:text-gray-700 sm:block'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      <div
        className={`absolute z-10 w-56 mt-4 bg-white border border-gray-100 rounded-md shadow-lg end-0 ${
          showMenu ? '' : 'hidden'
        }`}
      >
        <div className='p-2'>
          <div className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'>
            <button className='w-full'>Setting</button>
          </div>
          <div className='block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700'>
            <button onClick={onClick} className='w-full'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo
