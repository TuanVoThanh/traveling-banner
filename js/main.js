let tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

function init() {
  tl.from("#Text, #Design", { autoAlpha: 0, ease: "linear" })
    .from("#Title1", { x: "100%" },'<1')
    .from("#Title", { x: "-100%" })
    .from("#Subtitle", { scale: 0 })
    .from("#CTA", { scale: 0 }, "<")
    .from("#Shape3", { x: "-100%", repeat: -1, repeatDelay: 0.8 })
    .from("#Shape4", { x: "100%", repeat: -1, repeatDelay: 0.8 }, "<")
    .from("#Shape1, #Shape2", {
      scale: 0,
      transformOrigin: "50% 50%",
      repeat: -1,
      repeatDelay: 2,
    })
    .from(
      "#Shape",
      { scale: 0, transformOrigin: "50% 50%", repeat: -1, repeatDelay: 2 },
      "<0.2"
    )
    .from("#Offer", { scale: 0, transformOrigin: "50% 50%", ease: "bounce" });
}

window.addEventListener("load", () => init());
