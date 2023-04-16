// Import navbar and footer using w3school
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
includeHTML();

// Clon blog Item
let cloneBlog = document.querySelector(`#clonBlogElm`);
let changeContent = [
  {
    imgCoverPath: "/images/bg3.jpg",
    imgAlt: "",
    blogDate: "2015-",
    blogTitle: "qwertyjk",
    blogContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?",
    buttonUrl: "item-content-button",
  },
  {
    imgCoverPath: "/images/bg4.jpg",
    imgAlt: "",
    blogDate: "2015-",
    blogTitle: "qwertyjk",
    blogContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?",
    buttonUrl: "item-content-button",
  },
  {
    imgCoverPath: "/images/bg1.jpg",
    imgAlt: "",
    blogDate: "2015-",
    blogTitle: "qwertyjk",
    blogContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?",
    buttonUrl: "item-content-button",
  },
  {
    imgCoverPath: "/images/bg4.jpg",
    imgAlt: "",
    blogDate: "2015-",
    blogTitle: "qwertyjk",
    blogContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?",
    buttonUrl: "item-content-button",
  },
];
function repeat(
  i,
  imgCoverPath,
  imgAlt,
  blogDate,
  blogTitle,
  blogContent,
  buttonUrl
) {
  return `
  <div class="col-lg-6" id="${i}">
      <div class="card mb-4 "><a href="#!"><img class="card-img-top"
                  src="${imgCoverPath}" alt="${imgAlt}"></a>
          <div class="card-body">
              <div class="small text-muted">${blogDate}</div>
              <h2 class="card-title h4">${blogTitle}</h2>
              <p class="card-text">${blogContent}</p>
              <a class="btn btn-warning btn-sm" href="${buttonUrl}">Read more →</a>
          </div>
      </div>
  </div>`;
}
changeContent.forEach((item, i) => {
  cloneBlog.insertAdjacentHTML(
    "beforeend",
    repeat(
      i,
      item.imgCoverPath,
      item.imgAlt,
      item.blogDate,
      item.blogTitle,
      item.blogContent,
      item.buttonUrl
    )
  );
});


// Clon Project Item

let cloneProjectItem = document.querySelector(`#clonProjectElm`);
let changeProjectContent = [
  {
    imgCoverPath: "/images/bg3.jpg",
    imgAlt: "",
    blogDate: "2015-",
    blogTitle: "qwertyjk",
    blogContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?",
    buttonUrl: "item-content-button",
  },
  {
    imgCoverPath: "/images/bg4.jpg",
    imgAlt: "",
    blogDate: "2015-",
    blogTitle: "qwertyjk",
    blogContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?",
    buttonUrl: "item-content-button",
  },
  {
    imgCoverPath: "/images/bg1.jpg",
    imgAlt: "",
    blogDate: "2015-",
    blogTitle: "qwertyjk",
    blogContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?",
    buttonUrl: "item-content-button",
  },
  {
    imgCoverPath: "/images/bg4.jpg",
    imgAlt: "",
    blogDate: "2015-",
    blogTitle: "qwertyjk",
    blogContent:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, suscipit?",
    buttonUrl: "item-content-button",
  },
];
function repeat(
  i,
  imgCoverPath,
  imgAlt,
  blogDate,
  blogTitle,
  blogContent,
  buttonUrl
) {
  return `
  <div class="col-lg-6" id="${i}">
      <div class="card mb-4 "><a href="#!"><img class="card-img-top"
                  src="${imgCoverPath}" alt="${imgAlt}"></a>
          <div class="card-body">
              <div class="small text-muted">${blogDate}</div>
              <h2 class="card-title h4">${blogTitle}</h2>
              <p class="card-text">${blogContent}</p>
              <a class="btn btn-warning btn-sm" href="${buttonUrl}">Read more →</a>
          </div>
      </div>
  </div>`;
}
changeProjectContent.forEach((item, i) => {
  cloneProjectItem.insertAdjacentHTML(
    "beforeend",
    repeat(
      i,
      item.imgCoverPath,
      item.imgAlt,
      item.blogDate,
      item.blogTitle,
      item.blogContent,
      item.buttonUrl
    )
  );
});