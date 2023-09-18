import DualComponent from "@/commonComponents/story/dualComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq18 = () => {
  const text: string = '판다를 따라 몸을 굴러주세요.'

  return (
    <div>
      <DualComponent imageSrc="./resources/clothes_fire.png"/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq18