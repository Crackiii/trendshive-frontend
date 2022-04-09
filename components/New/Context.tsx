import React, { createContext, useContext } from 'react'


const StoriesContext = createContext<{
  stories: any[]
}>({
  stories: []
})

export const StoriesContextProvider = (props: { children: JSX.Element }) => {

  const [stories, setStories] = React.useState([])


  return (
    <StoriesContext.Provider
      value={{
        stories,
      }}
    >
      {props.children}
    </StoriesContext.Provider>
  )
}

export const useSettings = () => useContext(StoriesContext)