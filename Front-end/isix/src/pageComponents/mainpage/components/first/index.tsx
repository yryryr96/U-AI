'use client'

import React from 'react'
import { StyledFirst,StyledFirstBox } from './First.styled';
import { useRouter } from "next/navigation";

const FirstComponent = () => {
    const router = useRouter();


    return (
        <StyledFirst>
            <StyledFirstBox>
                <div>하이</div>
            </StyledFirstBox>
        </StyledFirst>
    )
}

export default FirstComponent;