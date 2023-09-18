import DualComponent from "@/commonComponents/story/dualComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq15 = () => {
  const text: string = '판다를 따라 입을 막고 몸을 숙여주세요.'

  return (
    <div>
      <DualComponent imageSrc="./resources/smoke_tmp.png"/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq15