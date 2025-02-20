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

var section = document.querySelector("section");
// section.style.backgroundColor = "purple";
section.className = "";
section.className = "red-bg";

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
	// section.classList.toggle("visible");
	// section.classList.toggle("invisible");
	var newParagraph = document.createElement("p");
	newParagraph.style.backgroundColor = "yellow";
	newParagraph.className = "prgph";
	newParagraph.innerText = "This is an inserted paragraph!";
	if (section) {
		section.insertAdjacentElement("beforebegin", newParagraph);
	} else {
		console.error("No SECTION have been found!");
	}
});

// ---------------------------------------- //
//		Create & Insert Elements
// ---------------------------------------- //

// const newParagraph = document.createElement("p");
// newParagraph.style.backgroundColor = "yellow";
// newParagraph.className = "prgph";
// newParagraph.innerText = "This is an inserted paragraph!";
// section.insertAdjacentElement(before, newParagraph);
