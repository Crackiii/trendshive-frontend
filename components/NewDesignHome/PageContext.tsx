import React, { createContext, useContext, useMemo, useState } from 'react'

interface InitialState {
  toggleNavBar: boolean
  setToggleNavBar: (value: boolean) => void
}

const initialState = {
  toggleNavBar: false,
  setToggleNavBar: (value: boolean) => value
}

const PageContext = createContext<InitialState>(initialState)

export const PageContextProvider = (props: { children: JSX.Element }) => {
  const [toggleNavBar, setToggleNavBar] = useState<boolean>(false)

  return (
    <PageContext.Provider
      value={{
        toggleNavBar,
        setToggleNavBar
      }}
    >
      {props.children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => useContext(PageContext)
