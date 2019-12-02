import React, { useState, useImperativeHandle } from 'react'
import { Button } from 'semantic-ui-react'

// Tätä komponenttia hyödynnetään uusen blogin luomisessa
// Buttonia painamalla näytetään haluttu komponentti tai ei
const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  // asetetaan tilan muutos eriksi
  const toggleVisibility = () => {
    setVisible(!visible)
  }
  // https://reactjs.org/docs/hooks-reference.html#useimperativehandle
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })
  return (
    <div>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>
          {props.buttonLabel}
        </Button>
      </div>

      <div style={showWhenVisible}>
        {/* haluttu komponentti */}
        {props.children}
        <Button onClick={toggleVisibility}>Cancel</Button>
      </div>
    </div>
  )
})
Togglable.displayName = 'Togglable'

export default Togglable