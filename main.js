var data = [
  {
    sellername: "Musharraf",
    sellernum: "+92316803889",
    product: "Suzuki Every",
    price: "1,380,000",
    image1: "https://images.olx.com.pk/thumbnails/292783705-400x300.webp",
    image2: "https://images.olx.com.pk/thumbnails/292783706-400x300.webp",
    image3: "https://images.olx.com.pk/thumbnails/292783707-400x300.webp",
    description:
      "Suzuki Every 2012 registration 2016 original genuine car. new tyres two power mirror. comfortable extra seats. price is almost final. neat n clean just like new. just buy n drive. contact only call.",
    postTime: "Walton Road Lahore. 3 mins ago",
  },
  {
    sellername: "OLX User",
    sellernum: "+92312345889",
    product: "Motorcycle New Condition",
    price: "42,500",
    image1: "https://images.olx.com.pk/thumbnails/292797989-400x300.webp",
    image2: "https://images.olx.com.pk/thumbnails/292797990-400x300.webp",
    image3: "https://images.olx.com.pk/thumbnails/292797991-400x300.webp",
    description:
      "bilkul new hai zbrdst hai jisy zaroorat ho bs wohi rabta kry urgent sale",
    postTime: "Nowshera Sansi Road. 1 mins ago",
  },
  {
    sellername: "Kifayat Khan",
    sellernum: "+92312456678",
    product: "Mobile",
    price: "25,000",
    image1: "https://images.olx.com.pk/thumbnails/292807068-400x300.webp",
    image2: "https://images.olx.com.pk/thumbnails/292807069-400x300.webp",
    image3: "https://images.olx.com.pk/thumbnails/292807072-400x300.webp",
    description: "mobile is very nice mobile name is Tecno comen 15 pro",
    postTime: "Dir Colony, Peshawar. 1 week ago",
  },
  {
    sellername: "Fahad Saleem",
    sellernum: "+92312434656",
    product: "HP color Laser Printers",
    price: "40,000",
    image1: "https://images.olx.com.pk/thumbnails/289606482-400x300.webp",
    image2: "https://images.olx.com.pk/thumbnails/289606483-400x300.webp",
    image3: "https://images.olx.com.pk/thumbnails/289606484-400x300.webp",
    description:
      "HP color laserjet printers available HP color laser 251nw HP color laser 451dn HP color laser 451dw HP color laser 452dn HP color laser 452dw",
    postTime: "Dir Colony, Peshawar. 3 week ago",
  },
  {
    sellername: "OLX User",
    sellernum: "+92312345623",
    product: "iPhone 11 Pro Max pta",
    price: "195,000",
    image1: "https://images.olx.com.pk/thumbnails/292814979-400x300.webp",
    image2: "https://images.olx.com.pk/thumbnails/292814980-400x300.webp",
    image3: "https://images.olx.com.pk/thumbnails/292814982-400x300.webp",
    description:
      "iPhone 11 pro max 64 GB PTA Approved Factory Unlock 79% battery health Good Condition Phone with Original Box location: shop # 233, 2nd floor saddar star city mall Hamza: O313 8O482O8",
    postTime: "Saddar, Karachi. 1 mins ago",
  },
];

var onClickFunc = function (item) {
  console.log(item);
  sessionStorage.setItem("products", JSON.stringify(item));
  var getUserMail = sessionStorage.getItem("mail");
  if (getUserMail) {
    location.href = "products.html";
  } else {
    alert("SignIn Required to view the product details");
  }
};

window.onload = function () {
  var getDataFromStorage = localStorage.getItem("DATA");
  if (!getDataFromStorage) {
    localStorage.setItem("DATA", JSON.stringify(data));
  }

  var getData = localStorage.getItem("DATA");
  var Arrangedata = JSON.parse(getData);

  var row = null;
  Arrangedata.forEach(function (item, index) {
    if (index % 4 === 0) {
      row = document.createElement("div");
      row.className = "row mt-1";
    }
    var itemContainer = document.createElement("div");
    itemContainer.className =
      "card mt-3 col col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3";
    itemContainer.onclick = function () {
      onClickFunc(item);
    };
    // itemContainer.onclick = onClickFunc(item);
    var datahtml = `<div class="card-div">
                 <img src="${item.image1}" class="cardimg car" alt="...">
               </div>
               <div id='cardbo' class="card-body">
                 <p class="card-text">${item.product}</p><br>
                 <h5 class="card-title">Rs ${item.price}</h5><br>
                 <p class="card-text"><small class="text-muted">${item.postTime}</small></p>
               </div>
             `;
    itemContainer.innerHTML = datahtml;
    row?.appendChild(itemContainer);
    document.getElementById("product-container")?.appendChild(row);

    // console.log(getData);
  });

  // console.log(data);
  // var logout = (document.getElementById("log").innerText = "Login");
  // var logvalue = sessionStorage.setItem("log", "logout");
};

function post() {
  var sellerName = document.getElementById("sellername").value;
  var sellerNum = document.getElementById("sellernum").value;
  var productTitle = document.getElementById("productName").value;
  var price = document.getElementById("price").value;
  var Location = document.getElementById("Location").value;
  var productDetail = document.getElementById("productDetail").value;
  var Image1 = document.getElementById("img1").value;
  var Image2 = document.getElementById("img2").value;
  var Image3 = document.getElementById("img3").value;
  var obj = {
    sellername: sellerName,
    sellernum: sellerNum,
    product: productTitle,
    price: price,
    image1: Image1,
    image2: Image2,
    image3: Image3,
    description: productDetail,
    postTime: Location,
  };

  var getData = localStorage.getItem("DATA");
  var Arrangedata = JSON.parse(getData);
  Arrangedata.push(obj);
  localStorage.setItem("DATA", JSON.stringify(Arrangedata));
  // console.log(Arrangedata);
  location.href = "index.html";
  // match = false;
  // sessionStorage.setItem("SetData", JSON.stringify(data));
  // console.log(setdata);
}
