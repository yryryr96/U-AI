import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq17 = () => {
  const text: string = `아기 판다가 대피하던 중 옷에 불이 붙고 말았어요.
    옷에 불이 붙었을 때는 어떻게 해야 할까요?`

  return (
    <div>
      <ImageComponent src='./resources/clothes_fire.png'/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq17