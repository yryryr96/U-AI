import { StyledCamText, StyledQuizBox, StyledStoryCam } from "../../Story.styled"
import CamComponent from "@/commonComponents/story/camComponent"
import Image from "next/image"

const Seq18 = () => {
  const text: string = '판다를 따라 몸을 굴러주세요'

  return (
    <>
      <StyledCamText>{text}</StyledCamText>
      <StyledStoryCam>
        <CamComponent/>
        <StyledQuizBox>
          <Image src='/resources/clothes_fire.png' width={300} height={250} alt="clothes"  style={{ marginTop: '2.5rem' }}/>
        </StyledQuizBox>
      {/* <TextComponent text={text}/> */}
      </StyledStoryCam>
    </>
  )
}

export default Seq18