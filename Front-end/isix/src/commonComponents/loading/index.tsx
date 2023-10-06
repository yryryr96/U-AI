"use client"

import lottieJson from "../../../public/resources/loading2.json"
import Lottie from "react-lottie-player"

const Loading = () => {
  return (
    <div className="loadingStyle">
      <Lottie style={{width: 1000, height: 1000}} loop animationData={lottieJson} play />
    </div>
  )
}

export default Loading