import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import EventList from './EventList'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)

  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  // 状態変化の度に実行される関数
  // 今回は state を監視
  useEffect(() => {
    // state が変化するたびに永続化
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <EventList />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
};

export default App;
