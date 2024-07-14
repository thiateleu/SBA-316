/////////// Menu data structure
var menuLinks = [
  { text: "about", href: "/ABOUT" },
  { text: "services", href: "/SERVICES" },
  { text: "contact", href: "/CONTACT" },
  { text: "login", href: "/LOGIN" },
];

//////////// cache the main element
const mainEl = document.querySelector("main");
console.log(mainEl);

mainEl.style.backgroundColor = "var(--main-bg)";
/////////// let backGroundColor = 'var(--main-bg)'

mainEl.innerHTML = "<h1>THIATELEU CLEANING</h1>";
mainEl.classList = "flex-ctr";

//////////////// Creating a menu bar

const topmenuEl = document.getElementById("top-menu");
console.log(topmenuEl);

topmenuEl.style.height = "100%";

topmenuEl.style.backgroundColor = "var(--top-menu-bg)";

topmenuEl.classList = "flex-around";

/////////////////// Adding Menu Buttons

menuLinks.forEach(function (link) {
  let linkEl = document.createElement("a");

  linkEl.setAttribute("href", link.href);

  linkEl.textContent = link.text;

  topmenuEl.appendChild(linkEl);
});

////////////// Creating the Submenu

const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList = "flex-around";

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

//////////////// Register event listeners for form validation
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;

  if (name === "" || email === "" || password === "") {
    alert("All field are requiered");
    event.preventDefault();
  }
});
