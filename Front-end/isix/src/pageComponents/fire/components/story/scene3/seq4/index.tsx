import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq4 = () => {
  const text: string = '방금처럼 작았던 불이 커지면 어떻게 될까요?';

  return (
    <div>
      <ImageComponent src='./resources/fire.png'/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq4