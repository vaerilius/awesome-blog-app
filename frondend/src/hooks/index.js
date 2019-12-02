import { useState } from 'react'
// custom hook, tätä hyödynnetään sovelluksen form:ssa / inputeissa
// auttaa pitämään komponentit siistimpinä
export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return [{
    type,
    value,
    onChange,
  }, reset]
}