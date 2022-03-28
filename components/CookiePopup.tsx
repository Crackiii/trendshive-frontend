import React, { useEffect, useMemo, useState } from 'react'

function CookiePopup() {
  const [showCookie, setShowCookie] = useState<boolean>()
 
  useEffect(() => {
    const cookie = document?.cookie?.split(';')?.find(c => /consent_approved/gmi.test(c))
    if(!cookie) {
      setShowCookie(true)
      return 
    }
    setShowCookie(false)
  }, [])

  const createCookie = (name: string, value: string, minutes: number) =>  {
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime()+(minutes*60*1000));
        var expires = "; expires=" + date.toUTCString();
    } else {
        var expires = "";
    }
    document.cookie = `${name}=${value}; expires=${expires}; path=/; Secure`;
  }

  const handleCancel = () => {
    createCookie('consent_approved', 'declined', 60 * 60 * 60)
    setShowCookie(false)
  }

  const handleAccept = () => {
    createCookie('consent_approved', 'accepted', 60 * 60 * 60)
    setShowCookie(false)
  }

  return (
    <>
    {
      showCookie && 
      <div className='fixed bottom-0 left-0 w-full z-20 bg-slate-600 text-white font-normal flex flex-col justify-center items-center p-5'>
        <p className='p-2'>
          This website uses cookies to ensure you get the best experience on our website.
        </p>
        <div>
          <button onClick={handleCancel} className=' bg-slate-900 px-3 py-1 rounded-md mr-2'>Deny</button>
          <button onClick={handleAccept} className='bg-emerald-400 px-3 py-1 rounded-md'>Accept cookies</button>
        </div>
      </div>
    }
    </>
  )
}

export default CookiePopup