import { BaseButton } from './Button.styles'

const Button = ({ ...rest }) => {
  return (
    <>
      <BaseButton {...rest}>Add task</BaseButton>
    </>
  )
}

export default Button