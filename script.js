const info = document.getElementsByClassName("hide")
const infoBtn = document.querySelectorAll(".view img")
const brief = document.querySelectorAll(".view p")
for (let i = 0; i < brief.length; i++) {
		for (let i = 0; i < info.length; i++) {
		for (let i = 0; i < infoBtn.length; i++) {
							infoBtn[i].addEventListener("click", () => {
				info[i].classList.toggle("active");
				infoBtn[i].classList.toggle("active");
				brief[i].classList.toggle("active");
});					
		}			
		}
}

