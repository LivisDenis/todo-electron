import React, {FormEvent, useState} from 'react'

interface IEvent {
  id: number
  value: string
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<IEvent[]>([])
  const [value, setValue] = useState('')

  const addEvent = (e: FormEvent) => {
    e.preventDefault()

    const event = [
      {id: Date.now(), value},
    ]
    if (!value) return null
    setTodo([...event, ...todo])
    setValue('')
  }

  const removeEvent = (id: number) => {
    const filterTodo = todo.filter(item => item.id !== id)
    setTodo(filterTodo)
  }

  return (
    <div className={'p-5'}>
      <div className={'p-4 overflow-y-auto border max-w-[350px] h-[500px] mx-auto rounded-[10px] shadow-lg shadow-gray-300'}>
        <form onSubmit={addEvent} className={'flex justify-between'}>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Record the event...'}
            className={'px-3 py-2 border w-full rounded mr-4'}
          />
          <button
            type={'submit'}
            onClick={addEvent}
            className={'px-5 border rounded bg-red-500 hover:bg-red-600 hover:shadow text-white'}>
            Add
          </button>
        </form>
        <hr className={'my-2'}/>
        {todo.length < 1 && <h1 className={'text-[26px] text-center mt-10'}>You have no events 🥲</h1>}
        {todo.map((item) =>
          <div
            key={item.id}
            className={'flex justify-between mt-2 border rounded p-1'}
          >
            <p>{item.value}</p>
            <button
              onClick={() => removeEvent(item.id)}
              className={'px-3 py-1 text-[12px] border rounded bg-red-500 hover:bg-red-600 hover:shadow text-white'}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
