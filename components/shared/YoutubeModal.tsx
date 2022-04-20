import React from 'react'

interface Props {
  url: string;
  open: boolean;
  onClose: (value: boolean) => void;
}

function YoutubeModal({url, open, onClose}: Props) {
  return (
      open ?
      <div className='bg-black bg-opacity-70 fixed top-0 left-0 w-full h-full flex justify-center items-center z-50' style={{zIndex: 999999}}>
        <button onClick={() => onClose(false)} type="button" className="absolute right-10 top-10 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-gray-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>  
        </button>
        <iframe width="1272" height="717" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div> : <></>
  )
}

export default YoutubeModal