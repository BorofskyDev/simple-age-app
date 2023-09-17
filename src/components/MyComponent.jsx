import { useState } from 'react'

function MyComponent() {
  const [name, setName] = useState('John')
  const [age, setAge] = useState(25)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const incrementAge = () => {
    setAge((prevAge) => prevAge + 1)
  }

  const decrementAge = () => {
    setAge((prevAge) => prevAge - 1)
  }

  return (
    <>
      <label htmlFor='nameInput'> Name: </label>
      <input
        id='nameInput'
        type='text'
        value={name}
        onChange={handleNameChange}
      />
      <div>
        <button onClick={decrementAge}>-</button>
        <span>{age}</span>
        <button onClick={incrementAge}>+</button>
      </div>
    <div>
        My name is {name} and I'm {age} years old.
    </div>
    </>
  )
}
export default MyComponent
