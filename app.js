const projectNav = document.getElementById("projects");
const resumeNav = document.getElementById("resume");
const social = document.querySelectorAll(".social-item");

projectNav.addEventListener("click", (e) => {
  alert("Coming soon")

  e.preventDefault()
})

resumeNav.addEventListener("click", (e) => {
  alert("Coming soon")

  e.preventDefault()
})

social.forEach((item) => {
  item.addEventListener("click", (e) => {
    alert("Coming soon")

    e.preventDefault()
  })
})
