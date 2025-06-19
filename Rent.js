
// Data Of Rent
let name_r = ["شقة المهندسين", "شقة المعادي", "شقة مدينة نصر", "شقة مدينتي"];
let price_r = [1820, 150, 250, 600, 450];
let old_price_r = [2500, 220, 300, 700, 600];
let detail_r = [1820, 150, 250, 600, 450];


// Show Data about Rent
for (let j = 0; j < name_r.length; j++) {
  let nameElement = document.getElementById(`name-r${j + 1}`);
  if (nameElement) {
      nameElement.textContent = name_r[j];
  }
  
  let priceElement = document.getElementById(`price-r${j + 1}`);
  if (priceElement) {
      priceElement.textContent = price_r[j] + " $ " + " = " + price_r[j] * 50 + " جنيه ";
  }

  let oldPriceElement = document.getElementById(`old-price-r${j + 1}`);
  if (oldPriceElement) {
      oldPriceElement.textContent = old_price_r[j] + " $ " + " = " + old_price_r[j] * 50 + " جنيه ";
  }

  let detailElement = document.getElementById(`detail-r${j + 1}`);
  if (detailElement) {
      detailElement.textContent = detail_r[j];
  }
}
