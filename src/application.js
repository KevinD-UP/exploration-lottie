import Lottie from "lottie-web"
import animationData from "./PresInterSmartCircleWithClass.json" assert { type: "json" }
// import animationData from "./117663-modern-text-animation.json" assert { type: "json" }

document.addEventListener("DOMContentLoaded", async () => {
  console.log("The DOM content is loaded")
  const clonedAnimationData = structuredClone(animationData)

  console.log({ clonedAnimationData })

  const animation = Lottie.loadAnimation({
    animationData: clonedAnimationData,
    container: document.getElementById("animation"),
    renderer: "svg",
    loop: true,
    autoplay: true,
  })

  console.log(
    `animation duration in seconds : ${animation.getDuration()}, animation duration in frames : ${animation.getDuration(
      true
    )}`
  )
})
