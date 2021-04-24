const card = document.querySelector(".card");
const linkMask = document.querySelector(".link-mask")
const linkMaskText = document.querySelector(".link-mask-text")

card.addEventListener("mouseover",() => {
  linkMask.style.transition = "all 0.4s ease-in-out"
  linkMask.style.visibility = "visible";
  linkMaskText.style.display = "block";
})

card.addEventListener("mouseout",() => {
  linkMask.style.transition = "all 0.4s ease-in-out"
  linkMask.style.visibility = "hidden";
  linkMaskText.style.display = "none";
})
