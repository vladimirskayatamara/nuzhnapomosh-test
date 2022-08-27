const menu = [
  {
    groups: [
      {
        id: 1,
        name: "Дети",
        groups: [
          {
            id: 2,
            name: "Имеющие редкие заболевания",
            groups: [
              {
                id: 3,
                name: "Spina Bifida",
                groups: [],
              },
              {
                id: 4,
                name: "Буллёзный эпидермолиз",
                groups: [],
              },
            ],
          },
          {
            id: 5,
            name: "С инвалидностью",
            groups: [],
          },
        ],
      },
      {
        id: 6,
        name: "Профессиональные сообщества",
        groups: [],
      },
      {
        id: 6,
        name: "Взрослые",
        groups: [
          {
            id: 7,
            name: "С проблемами",
            groups: [],
          }
        ],
      },
    ],
  },
];

const hamburgerWrapper = document.querySelector(".header__hamburger");
const aside = document.querySelector(".aside");

hamburgerWrapper.addEventListener("click", () => {
  hamburgerWrapper.classList.toggle("open");
  aside.classList.toggle("open");
});



let menuEl = document.querySelector(".funding__categories");

addElements(menuEl, menu[0].groups);

function addElements(parent, arr) {
  let allCategories = parent.appendChild(document.createElement("ul"));
  allCategories.classList.add('parent')
  arr.forEach((el) => {
    let subCategory = allCategories.appendChild(document.createElement("li"));
    subCategory.dataset.id = el.id;
    subCategory.textContent = el.name;
    if (el.groups.length > 0) addElements(subCategory, el.groups);
  });
}


