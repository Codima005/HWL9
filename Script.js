let CartSuits = [`clubs`, `spades`, `hearts`, `diamonds`];

let CartRols = [`jack`, `queen`, `king`, `ace`];

letters = "JQKT";
let CartLetters = letters.split("");
console.log(CartLetters);

let AllCarts = [];

for (i = 2; i <= 10; i++) {
  let SeparateCarts = [];

  for (j = 1; j <= 4; j++) {
    let decorations = [];

    for (k = 1; k <= 2; k++) {
      decorations.push(
        `<div class="card__info">${i}<img src="images/${
          CartSuits[j - 1]
        }.svg" alt="${CartSuits[j - 1]}"></div>`
      );
    }
    SeparateCarts.push(`<div class="card">${decorations.join(``)}</div>`);
  }
  AllCarts.push(`<div class="direction">${SeparateCarts.join(``)}</div>`);
}

for (i = 0; i <= CartRols.length - 1; i++) {
  let SeparateCarts = [];

  for (j = 1; j <= 4; j++) {
    let decorations = [];

    if (i < CartRols.length - 1) {
      decorations.push(`<div class="card__info">${
        CartLetters[i]
      }<img src="images/${CartSuits[j - 1]}.svg" alt="${
        CartSuits[j - 1]
      }"></div>
        <img class="person" src="images/${CartRols[i]}.svg" alt="spades">
        <div class="card__info">${CartLetters[i]}<img src="images/${
        CartSuits[j - 1]
      }.svg" alt="${CartSuits[j - 1]}"></div>`);
    } else {
      decorations.push(`<div class="card__info">${
        CartLetters[i]
      }<img src="images/${CartSuits[j - 1]}.svg" alt="${
        CartSuits[j - 1]
      }"></div>
        <img class="person" src="images/${CartSuits[j - 1]}.svg" alt="spades">
        <div class="card__info">${CartLetters[i]}<img src="images/${
        CartSuits[j - 1]
      }.svg" alt="${CartSuits[j - 1]}"></div>`);
    }
    SeparateCarts.push(
      `<div class="card card--person">${decorations.join(``)}</div>`
    );
  }

  AllCarts.push(`<div class="direction">${SeparateCarts.join(``)}</div>`);
}

console.log(AllCarts);
document.write(`<div class="wrapper">
${AllCarts.join(``)}
</div>`);
