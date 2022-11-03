let users = [
  {
    name: "ПАШКА",
    number: 87779227255,
    id: "item1",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "Аленка ",
    number: 89691236969,
    id: "item2",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "Тема ",
    number: 89021457475,
    id: "item3",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "ДяДя ТОЛЯ ",
    number: 89273257777,
    id: "item4",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "Т.Маша",
    number: 89021586523,
    id: "item5",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "Анастас ",
    number: 89995452325,
    id: "item6",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "Велта ",
    number: 89021548536,
    id: "item7",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "Кирилл ",
    number: 89021542536,
    id: "item9",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "Арсен",
    number: 89062154233,
    id: "item11",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
  {
    name: "Андроид ",
    number: 89041557777,
    id: "item12",
    src: "https://cdn-icons-png.flaticon.com/512/2105/2105556.png",
  },
];

users.map((item) => {
  const btn = document.querySelectorAll(".wrapper__blockIcon");
  const newDiv = document.createElement("div");
  const IconBlock = document.createElement("span");
  const IconText = document.createElement("h1");
  const IconTextContent = document.createTextNode("избранное!");
  const newDiv2 = document.createElement("div");
  const H1 = document.createElement("h1");
  const H2 = document.createElement("h1");
  const Item = document.createTextNode(`${item.name}`);
  const Item2 = document.createTextNode(`${item.number}`);
  const DeleteBoxContent = document.createTextNode("x");
  const DeleteBoxItem = document.createElement("h3");
  const profileImg = document.createElement("img");
  profileImg.setAttribute("src", `${item.src}`);
  profileImg.classList.add("wrapper__profileIcon");
  H2.classList.add("wrapper__profilesItem");
  H1.classList.add("wrapper__profilesItem1");
  newDiv.classList.add("wrapper__profiles");
  newDiv2.classList.add("wrapper__profilesBox");
  IconBlock.classList.add("wrapper__blockIcon");
  IconText.classList.add("wrapper__blockText");
  DeleteBoxItem.classList.add("wrapper__deleteButtonn");
  IconBlock.appendChild(IconText);
  IconText.appendChild(IconTextContent);
  div.appendChild(newDiv);
  newDiv.appendChild(profileImg);
  newDiv.appendChild(H1);
  newDiv.appendChild(H2);
  newDiv.appendChild(IconBlock);
  H1.appendChild(Item);
  H2.appendChild(Item2);
  DeleteBoxItem.appendChild(DeleteBoxContent);
  newDiv.appendChild(DeleteBoxItem);

  document.querySelector("#addBtn").onclick = myClick;
  function myClick() {
    let NameValue = document.getElementById("InputValue1").value;
    let NumberValue = document.getElementById("InputValue2").value;
    if (!!NameValue && !!NumberValue) {
      console.log(NameValue);
      const NewTextName = document.createElement("h1");
      const NewTextNumber = document.createElement("h1");
      const newDiv3 = document.createElement("div");
      const DeleteBoxContent = document.createTextNode("x");
      const DeleteBoxItem = document.createElement("h3");
      const IconBlock = document.createElement("span");
      const IconText = document.createElement("h1");
      const IconTextContent = document.createTextNode("избранное!");
      const profileImg = document.createElement("img");
      profileImg.setAttribute("src", `${item.src}`);
      profileImg.classList.add("wrapper__profileIcon");
      div.appendChild(newDiv3);
      newDiv3.appendChild(profileImg);
      newDiv3.appendChild(NewTextName);
      newDiv3.appendChild(NewTextNumber);
      DeleteBoxItem.appendChild(DeleteBoxContent);
      newDiv3.appendChild(DeleteBoxItem);
      IconBlock.appendChild(IconText);
      IconText.appendChild(IconTextContent);
      newDiv3.appendChild(IconBlock);
      NewTextName.innerHTML = NameValue;
      NewTextNumber.innerHTML = NumberValue;
      IconBlock.classList.add("wrapper__blockIcon");
      IconText.classList.add("wrapper__blockText");
      DeleteBoxItem.classList.add("wrapper__deleteButtonn");
      NewTextName.classList.add("wrapper__profilesItem1");
      NewTextNumber.classList.add("wrapper__profilesItem");
      newDiv3.classList.add("wrapper__profiles");
    } else alert("Заполнены не все поля!");
  }

  const Input = document.querySelector("#search");
  console.log(Input);
  Input.oninput = function () {
    let val = this.value.trim();
    let userItems = document.querySelectorAll(".wrapper__items div");
    console.log(userItems);
    if (val) {
      userItems.forEach(function (elem) {
        if (elem.innerText.search(val) == -1) {
          elem.classList.add("hidden");
          console.log(elem.innerText);
        }
      });
    }
    if (val === "") {
      userItems.forEach(function (elem) {
        elem.classList.remove("hidden");
        console.log(elem.innerText);
      });
    }
  };
});

document.onclick = function (event) {
  const Parent = event.target.parentNode;
  if (event.target.classList == "wrapper__blockIcon") {
    event.target.classList.add("--active");
    console.log(parent);
    Parent.classList.add("-active");
  } else if (event.target.classList == "wrapper__deleteButtonn") {
    event.target.classList.add("hidden");
    console.log(parent);
    Parent.classList.add("hidden");
  } else {
    event.target.classList.remove("--active");
    Parent.classList.remove("-active");
    event.target.classList.remove("hidden");
    Parent.classList.remove("hidden");
  }
};

OpnBtn.onclick = function () {
  const OpnBtn = document.querySelector(".wrapper__opnBtn");
  console.log(OpnBtn);
  const setNewContact = document.querySelector(".wrapper__forms");
  setNewContact.classList.toggle("hidden");
  const Body = document.querySelector(".wrapper__body");
  const Header = document.querySelector(".wrapper__header");
  
  setNewContact.classList.add("wrapper__body");
};
