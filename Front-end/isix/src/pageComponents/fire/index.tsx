import ThemeCanvas from "@/commonComponents/themecanvas";
import Story from "./components/story";
import { StyledContainer, StyledPaperContainer } from "./Fire.styled";

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
