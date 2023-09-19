import CamComponent from "@/commonComponents/story/camComponent"
import TextComponent from "@/commonComponents/story/textComponent"
import { StyledStoryCam } from "../../Story.styled"

const Seq0 = () => {
  const text: string = `다같이 소방관 판다와 함께
    화재 안전에 대해 배워볼까요?`

  return (
    <>
      <TextComponent text={text} />
      <StyledStoryCam>
        <CamComponent/>
      </StyledStoryCam>
    </>
  )
}

export default Seq0