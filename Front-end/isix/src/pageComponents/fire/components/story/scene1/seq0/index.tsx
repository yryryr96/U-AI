import CamComponent from "@/commonComponents/story/camComponent"
import TextComponent from "@/commonComponents/story/textComponent"

const Seq0 = () => {
  const text: string = `다같이 소방관 판다와 함께
    화재 안전에 대해 배워볼까요?`

  return (
    <div>
      <TextComponent text={text} />
      <CamComponent/>
    </div>
  )
}

export default Seq0