// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// scrollY is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear(); //return full year in the element date dynamically

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //  linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;

  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(containerHeight);
  //   console.log(linksHeight);

  if (containerHeight === 0) {
    // acceding to css
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  // console.log(navHeight);
  // console.log(scrollHeight);

  if (scrollHeight > navHeight) navbar.classList.add("fixed-nav");
  else navbar.classList.remove("fixed-nav");

  if (scrollHeight > 500) topLink.classList.add("show-link");
  else topLink.classList.remove("show-link");
});

// ********** smooth scroll ************
// select links

// this is no longer necessary, the href positions the element automatically

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    //slice toma el arreglo o cadena de caracteres a partir de la posición colocada en el parentesis
    //  console.log(id);

    const element = document.getElementById(id);
    //calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop-navHeight;

    if(!fixedNav){
      position -= navHeight;
    }
    if(navHeight>82){
      position+=containerHeight;
    }
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
