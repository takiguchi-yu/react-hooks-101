import React, { useContext, useState } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
  const { state, dispatch} = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しますか？')
    if (result) dispatch({ type: DELETE_ALL_EVENT })
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
    <h4>イベント作成フォーム</h4>
    <form>
      <div className="form-group">
        <label htmlFor="formEventTitle">タイトル</label>
        <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="formEventBody">ボディ</label>
        <input className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
      </div>
    </form>

    <button className="btn btn-primary" onClick={ addEvent } disabled={unCreatable}>イベント作成</button>
    <button className="btn btn-danger" onClick={ deleteAllEvents } disabled={state.events.length === 0}>全てのイベントを削除</button>
    </>
  )
}

export default EventForm
