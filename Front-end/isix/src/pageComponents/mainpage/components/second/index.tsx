'use client'

import { StyledSecondList } from "./Second.styled";
import { useRouter } from "next/navigation";

const SecondComponent = () => {
  const router = useRouter();
  return (
    <StyledSecondList>
        <div>Hi</div>
    </StyledSecondList>
  );
};

export default SecondComponent;
