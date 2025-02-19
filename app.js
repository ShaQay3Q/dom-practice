const ul = document.querySelector("ul");
console.log(ul);

const li = ul.querySelector("li:first-of-type");
console.log(li);

const newUl = document.querySelector("ul").querySelector("li:last-of-type");
console.log(newUl);

// gets a non-live list - takes only a snap-shot
const liList = document.querySelectorAll("li");

for (let i = 0; i < liList.length; i++) {
	console.dir(`li[${i}]: ${liList[i]}`);
}

// gets a live-list
const listElements = document.getElementsByTagName("li");

for (let i = 0; i < listElements.length; i++) {
	console.dir(`li[${i}]: ${listElements[i]}`);
}

const section = document.querySelector("section");
// section.style.backgroundColor = "purple";
section.className = "";
section.className = "red-bg";

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
	if (section.className === "red-bg visible") {
		section.className = "red-bg invisible";
	} else {
		section.className = "red-bg visible";
	}
});
