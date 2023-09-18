import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq25 = () => {
  const text: string = `불이 났을 때는 119에 전화를 해야 해요.
    119에 전화할 땐, 불이 난 위치를 정확히 말해야 해요.`

  return (
    <div>
      <ImageComponent src='./resources/call119.png'/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq25