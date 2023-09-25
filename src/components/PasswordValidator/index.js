import {useState} from 'react'

import {
  PasswordContainer,
  PasswordHead,
  PasswordPara,
  PasswordInput,
  PasswordText,
  Validating,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState(false)
  const text = password ? '' : 'Your Password must be at least 8 characters'
  const onChanging = event => {
    setPassword(event.target.value.length >= 8 === true)
  }

  return (
    <PasswordContainer>
      <Validating>
        <PasswordHead>Password Validator</PasswordHead>
        <PasswordPara>
          Check how strong and secure is your password
        </PasswordPara>
        <PasswordInput type="password" row="8" onChange={onChanging} />
        <PasswordText>{text}</PasswordText>
      </Validating>
    </PasswordContainer>
  )
}

export default PasswordValidator
