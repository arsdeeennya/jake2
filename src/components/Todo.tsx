import React from 'react'

type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
}

export const Todo = (props: TodoType) => {
  const {title, userId, completed=false} = props;
  const completedMark = completed ? '完' : '未';
  return (
    <div>
      {`${completedMark} ${title}(ユーザー:${userId})`}
    </div>
  )
}
