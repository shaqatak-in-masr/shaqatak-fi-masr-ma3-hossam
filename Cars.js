let cars = [
  {
    name: "مرسيدس C300",
    available: true,
    price: 99,
    old_Price: 130,
    details: "مرسيدس C300 موديل السنة استقبال من المطار و على مدار اليوم ",
  },
  {
    name: "هيونداي النترا HD 2024",
    available: true,
    price: 39,
    old_Price: 90,
    details: "هيونداي النترا HD 2024 استقبال من المطار او على مدار اليوم",
  },

];

for (let i = 0; i < cars.length; i++) {
  // Show Data about VIP
  let nameElement = document.getElementById(`name-c${i + 1}`);
  if (nameElement) {
    nameElement.textContent = cars[i].name;
  }
  //show details
  let detailElement = document.getElementById(`detail-c${i + 1}`);
  if (detailElement) {
    detailElement.textContent = cars[i].details;
  }
}
// =================================
// Create Cards For New Products
// =================================
// The Target Div
let carsDiv = document.querySelector(".Cars");
for (let i = 0; i < cars.length; i++) {
  if (cars[i].available) {
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
    link.setAttribute("href", `Cars/VIP-Cars-${i + 1}.html`);
    img.setAttribute("src", `images/Cars/Cars-${i + 1}.jpg`);
    b_name.setAttribute("id", `name-c${i + 1}`);
    b_price.setAttribute("id", `price-c${i + 1}`);
    s_old_price.setAttribute("id", `old-price-c${i + 1}`);
    // =================================
    // Add The Card To VIP Div
    if (carsDiv) {
      carsDiv.appendChild(card);
    }

    // =================================

    let priceElement = document.getElementById(`price-c${i + 1}`);
    if (priceElement) {
      priceElement.textContent =
        cars[i].price + " $ " + " = " + cars[i].price * 50 + " جنيه ";
    }

    let oldPriceElement = document.getElementById(`old-price-c${i + 1}`);
    if (oldPriceElement) {
      oldPriceElement.textContent =
        cars[i].old_Price + " $ " + " = " + cars[i].old_Price * 50 + " جنيه ";
    }
    // Show Data about VIP
    let nameElement = document.getElementById(`name-c${i + 1}`);
    if (nameElement) {
      nameElement.textContent = cars[i].name;
    }
    //show details
    let detailElement = document.getElementById(`detail-c${i + 1}`);
    if (detailElement) {
      detailElement.textContent = cars[i].details;
    }
  } else {
    continue;
  }
}

// ==========================================================================================================
// =====================================< Trips >=======================================
// ==========================================================================================================

let trips = [
  {
    name: "رحلة في يخت الصياد",
    available: true,
    price: 116,
    old_Price: 125,
    details: "رحلة في يخت الصياد | اكبر يخت في نهر النيل",
  },
  {
    name: "رحلة في يخت الصياد",
    available: true,
    price: 96,
    old_Price: 100,
    details: "رحلة في يخت الصياد | اكبر يخت في نهر النيل",
  },
  {
    name: "رحلة في يخت الصياد",
    available: true,
    price: 76,
    old_Price: 80,
    details: "رحلة في يخت الصياد | اكبر يخت في نهر النيل",
  },
];

// =================================
// Create Cards For New Products
// =================================
// The Target Div
let tripsDiv = document.querySelector(".Trip");
for (let i = 0; i < trips.length; i++) {
  if (trips[i].available) {
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
    link.setAttribute("href", `Trip/Trip-${i + 1}.html`);
    img.setAttribute("src", `images/Trip/Trip-${i + 1}.jpg`);
    b_name.setAttribute("id", `name-t${i + 1}`);
    b_price.setAttribute("id", `price-t${i + 1}`);
    s_old_price.setAttribute("id", `old-price-t${i + 1}`);
    // =================================
    // Add The Card To Trip Div
    if (tripsDiv) {
      tripsDiv.appendChild(card);
    }

    // =================================

    let priceElement = document.getElementById(`price-t${i + 1}`);
    if (priceElement) {
      priceElement.textContent =
        trips[i].price + " $ " + " = " + trips[i].price * 50 + " جنيه ";
    }

    let oldPriceElement = document.getElementById(`old-price-t${i + 1}`);
    if (oldPriceElement) {
      oldPriceElement.textContent =
        trips[i].old_Price + " $ " + " = " + trips[i].old_Price * 50 + " جنيه ";
    }
    // Show Data about VIP
    let nameElement = document.getElementById(`name-t${i + 1}`);
    if (nameElement) {
      nameElement.textContent = trips[i].name;
    }
    //show details
    let detailElement = document.getElementById(`detail-t${i + 1}`);
    if (detailElement) {
      detailElement.textContent = trips[i].details;
    }
  } else {
    continue;
  }
}

