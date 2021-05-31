import {FC} from 'react'
import {UserType} from '../types/user'

type Props = {
  user: UserType;
}

export const UserProfile:FC<Props> = (props) => {
  const {user} = props;
  
  return (
    <div>
      <dl>
        <dt>name</dt>
        <dd>{user.name}</dd>
        <dt>syumi</dt>
        <dd>{user.hobbies?.join('/')}</dd>
      </dl>
    </div>
  )
}
