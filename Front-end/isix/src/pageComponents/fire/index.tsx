import Story from "./components/story";
import { StyledContainer, StyledPaperContainer } from "./Fire.styled";
import "@/styles/fire/style.css"

const Fire = () => {
  return (
    <StyledContainer>
      <StyledPaperContainer>
        <Story />
      </StyledPaperContainer>
    </StyledContainer>
  );
};

export default Fire;
