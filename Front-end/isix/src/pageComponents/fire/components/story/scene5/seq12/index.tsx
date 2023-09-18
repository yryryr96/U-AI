import ImageComponent from "@/commonComponents/story/imageComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq12 = () => {
  const text: string = `정답은 계단입니다. 엘리베이터는
    연기로 가득 차 위험해질 수 있기 때문에
    계단으로 다 같이 조심해서 이동해야 합니다.`

  return (
    <div>
      <ImageComponent src='./resources/stair_sol.png'/>
      <TextComponent text={text}/>
    </div>
  )
}

export default Seq12
