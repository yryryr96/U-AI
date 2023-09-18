import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq3 = () => {
  const text: string = '맞아요. 이것은 불입니다!';

  return (
    <div>
      <ImageComponent src='./resources/fire.png'/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq3