// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector(".price span");  
  const quantity = product.querySelector(".quantity input");
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  
  const subtotalValue = priceValue * quantityValue;

  
  const subTotal = product.querySelector(".subtotal span");
  
  subTotal.innerText = subtotalValue;



  return subtotalValue;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  console.log("clickme");

  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');


  updateSubtotal(singleProduct);
  
  

  // end of test

  // ITERATION 2
  //... your code goes here
  
  let totalValue = 0;




  for (let product of product) {
    totalValue += updateSubtotal(product);

}

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerText = totalValue;

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const row = target.parentNode.parentNode;
  console.log(row); 
  const parent = row.parentNode;
  console.log(parent);
  parent.removeChild(row);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const parent = document.querySelector("#cart tbody");

  
  parent.appendChild(newTableRow);


  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  
  newProdNameInput.value = "";
  newProdPriceInput.value = 0;

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  
  const removeBtns = document.querySelectorAll(".btn-remove");

  for (let inidiviualBtn of removeBtns) {
    inidiviualBtn.addEventListener("click", removeProduct);
  }

  
  const createBtn = document.querySelector("#create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});

let daddy = ["coder", 57, "foodie lover"];
for (let x of daddy) {
  console.log(x);
}
