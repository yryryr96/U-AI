'use client'

import { StyledEndComp} from "../Navbar.styled";
import { useRouter, usePathname } from "next/navigation";

const EndComponent = () => {
  const router = useRouter();
  const pathname: string = usePathname();

  return (
    <StyledEndComp>
        <div>hi</div>
    </StyledEndComp>
  );
};

export default EndComponent;
