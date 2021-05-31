import {FC} from 'react'

type Props = {
  color: string;
  fontSize: string;
}

// FCで書くとchildrenもpropsに渡してくるみたい
// ver18になると渡さないようになるので、暫定的にVFCを使うとよい。でもとりまVCでいきま
export const Text:FC<Props> = (props) => {
  const {color, fontSize, children} = props;
  console.log(children)
  return (
    <div>
      <p style={{ color, fontSize}}>text</p>
    </div>
  )
}
