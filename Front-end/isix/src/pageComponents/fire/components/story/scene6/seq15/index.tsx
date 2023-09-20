import { StyledCamText, StyledQuizBox, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"
import Image from "next/image"

const Seq15 = () => {
  const text: string = '판다를 따라 입을 막고 몸을 숙여주세요'

  return (
    <>
      <StyledCamText>{text}</StyledCamText>
      <StyledStoryCam>
        <CamComponent/>
        <StyledQuizBox>
          <Image src='/resources/smoke_panda.png' width={300} height={250} alt="smoke"  style={{ marginTop: '2.5rem' }}/>
        </StyledQuizBox>
      {/* <TextComponent text={text}/> */}
      </StyledStoryCam>
    </>
  )
}

export default Seq15