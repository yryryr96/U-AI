import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq19 = () => {
  const text: string = `옷에 불이 붙었을 때는 불이 더 커지기 전에
    땅에 몸을 굴러 불이 꺼질 수 있도록 합니다.`

  return (
    <div>
      <ImageComponent src='./resources/clothes_fire.png'/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq19