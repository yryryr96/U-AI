
import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq27 = () => {
  const text: string = `불이 모두 꺼지고, 모두가 안전하게 밖으로 나왔답니다.
    우리 모두 불이 중요하지만
    얼마나 위험한지도 잘 알게 되었나요?`

  return (
    <div>
      <ImageComponent src='./resources/final_tmp.png'/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq27