let apartments_Sale = [
  {
    name: "شقة بميدان اسوان",
    available: true,
    price: 1,
    old_Price: 5,
    details: "شقة بميدان اسوان ",
  },
  {
    name: "شقة بشارع لبنان الرئيسي بالمهندسين",
    available: true,
    price: 150000,
    old_Price: 170000,
    details: "شقة بشارع لبنان الرئيسي بالمهندسين",
  },
  {
    name: "شقة بميدان طيبة المهندسين",
    available: true,
    price: 90000,
    old_Price: 95000,
    details: "شقة بميدان طيبة المهندسين",
  },
  {
    name: "",
    available: false,
    price: 1,
    old_Price: 5,
    details: "",
  },
];



// =================================
// Create Cards For New Products
// =================================
// The Target Div
let Sale = document.querySelector(".Sale");
for (let i = 0; i < apartments_Sale.length; i++) {
  if (apartments_Sale[i].available) {
    // =================================
    // Elements of Card ^-^
    let card = document.createElement("Div");
    let link = document.createElement("a");
    let img = document.createElement("img");
    let name = document.createElement("p");
    let b_name = document.createElement("b");
    let price = document.createElement("p");
    let b_price = document.createElement("b");
    let old_price = document.createElement("p");
    let b_old_price = document.createElement("b");
    let s_old_price = document.createElement("s");
    // =================================
    // appending Elements to The Card
    link.append(img);
    name.append(b_name);
    price.append(b_price);
    old_price.append(b_old_price);
    b_old_price.append(s_old_price);
    card.append(link);
    card.append(name);
    card.append(price);
    card.append(old_price);

    // =================================
    // Add attributes to Elements and Card
    card.setAttribute("class", "card");
    card.setAttribute("id", `card-${i + 1}`);
    link.setAttribute("href", `Sale/Sale-${i + 1}.html`);
    img.setAttribute("src", `images/Sale/Sale-${i + 1}.jpg`);
    b_name.setAttribute("id", `name-s${i + 1}`);
    b_price.setAttribute("id", `price-s${i + 1}`);
    s_old_price.setAttribute("id", `old-price-s${i + 1}`);
    // =================================
    // Add The Card To VIP Div
    if (Sale) {
      Sale.appendChild(card);
    }

    // =================================

    let priceElement = document.getElementById(`price-s${i + 1}`);
    if (priceElement) {
      priceElement.textContent =
        apartments_Sale[i].price + " $ " + " = " + apartments_Sale[i].price * 50 + " جنيه ";
    }

    let oldPriceElement = document.getElementById(`old-price-s${i + 1}`);
    if (oldPriceElement) {
      oldPriceElement.textContent =
        apartments_Sale[i].old_Price + " $ " + " = " + apartments_Sale[i].old_Price * 50 + " جنيه ";
    }
    // Show Data about VIP
    let nameElement = document.getElementById(`name-s${i + 1}`);
    if (nameElement) {
      nameElement.textContent = apartments_Sale[i].name;
    }
    //show details
    let detailElement = document.getElementById(`detail-s${i + 1}`);
    if (detailElement) {
      detailElement.textContent = apartments_Sale[i].details;
    }
  } else {
    continue;
  }
}
