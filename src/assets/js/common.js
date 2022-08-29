// hamburger button for small size devices

const hamburgerWrapper = document.querySelector(".header__hamburger");
const aside = document.querySelector(".aside");

hamburgerWrapper.addEventListener("click", () => {
  hamburgerWrapper.classList.toggle("open");
  aside.classList.toggle("open");
});


//menu code
const pageHeader = document.querySelector(".funding-categories");
const toggleMenu = pageHeader.querySelector(".toggle-menu");
const menuWrapper = pageHeader.querySelector(".funding-categories__menu-wrapper");
const level1Links = pageHeader.querySelectorAll(".funding-categories__level-1 > li > a");
const listWrapper2 = pageHeader.querySelector(".funding-categories__list-wrapper:nth-child(2)");
const listWrapper3 = pageHeader.querySelector(".funding-categories__list-wrapper:nth-child(3)");
const subMenuWrapper2 = listWrapper2.querySelector(".sub-funding-categories__menu-wrapper");
const subMenuWrapper3 = listWrapper3.querySelector(".sub-funding-categories__menu-wrapper");
const backOneLevelBtns = pageHeader.querySelectorAll(".back-one-level");
const isVisibleClass = "is-visible";
const isActiveClass = "is-active";

toggleMenu.addEventListener("click", function () {
  menuWrapper.classList.toggle(isVisibleClass);
  if (!this.classList.contains(isVisibleClass)) {
    listWrapper2.classList.remove(isVisibleClass);
    listWrapper3.classList.remove(isVisibleClass);
    const menuLinks = menuWrapper.querySelectorAll("a");
    for (const menuLink of menuLinks) {
      menuLink.classList.remove(isActiveClass);
    }
  }
});

for (const level1Link of level1Links) {
  level1Link.addEventListener("click", function (e) {
    const siblingList = level1Link.nextElementSibling;
    if (siblingList) {
      e.preventDefault();
      this.classList.add(isActiveClass);
      const cloneSiblingList = siblingList.cloneNode(true);
      subMenuWrapper2.innerHTML = "";
      subMenuWrapper2.append(cloneSiblingList);
      listWrapper2.classList.add(isVisibleClass);
    }
  });
}

listWrapper2.addEventListener("click", function (e) {
  const target = e.target;
  if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
    const siblingList = target.nextElementSibling;
    e.preventDefault();
    target.classList.add(isActiveClass);
    const cloneSiblingList = siblingList.cloneNode(true);
    subMenuWrapper3.innerHTML = "";
    subMenuWrapper3.append(cloneSiblingList);
    listWrapper3.classList.add(isVisibleClass);
  }
});

for (const backOneLevelBtn of backOneLevelBtns) {
  backOneLevelBtn.addEventListener("click", function () {
    const parent = this.closest(".funding-categories__list-wrapper");
    parent.classList.remove(isVisibleClass);
    parent.previousElementSibling
      .querySelector(".is-active")
      .classList.remove(isActiveClass);
  });
}

// importing the data from 'backend'

import { data } from "./data";

const m = data;

let arr = []; //this will be a flatten array

for (let group of m) {
  recurgroups(group, 0);
}

function recurgroups(group, parentID) {
  arr.push({
    name: group.name,
    id: group.id,
    parentID: parentID,
  });

  if (group.hasOwnProperty("groups") && group.groups.length > 0) {
    for (let subgroup of group.groups) {
      recurgroups(subgroup, group.id);
    }
  }
}

console.log(arr)

let menuEl = document.querySelector('.funding-categories__list-wrapper')

addElements( menuEl, arr[0].groups )

function addElements(parent, arr)  
  {
  let ul = parent.appendChild(document.createElement('ul'))
  arr.forEach(el => 
    {
    let li = ul.appendChild(document.createElement('li'))
    li.dataset.id  = el.id
    li.textContent = el.name
    if (el.groups.length > 0) addElements(li, el.groups)
    })
  }

