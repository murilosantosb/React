import React from 'react'

// Hooks
import HookUserState from '../components/HookUserState'
import HookUserReducer from '../components/HookUserReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'


// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'





const Home = () => {
  const contextValue = useContext(SomeContext)


  return (
    <div>
        <HookUserState/>
        <HookUserReducer/>
        <HookUseEffect/>
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <HookUseRef/>
        <HookUseCallback/>
        <HookUseMemo/>
        <HookUseLayoutEffect/>
        <HookUseImperativeHandle/>
        <HookCustom/>
    </div>
  )
}

export default Home