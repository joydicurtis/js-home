(function () {
  document.addEventListener("DOMContentLoaded", function(event) {
    let buyBtn = document.querySelectorAll('.productList-action .btn');
    for (let i=0; i<buyBtn.length; i++) {
        buyBtn[i].addEventListener("click", function(event) {
            console.log('clicked');
        })
    }
    class Product {
        constructor(price) {
            this.price = price;
        }
        calculate() {
            return this.price;
        }
    }
    class Box extends Product {
        constructor(price) {
            super(price);
            this.productsarray = [];
        }
        add(product) {
            this.productsarray.push(product);
        }
        calculate() {
            for (let i = 0; i < this.productsarray.length; i++) {
                this.price=this.price + this.productsarray[i].calculate();
            }
            return this.price;
        }
    }
    let product1 = new Product(100);
    let product2 = new Product(10);
    let box = new Box(200);
    let box1 = new Box(2);
    box.add(product1);
    box.add(product2);
    box1.add(product1);
    box1.add(product2);
    box1.add(box);
    box1.calculate();
    // console.log(product1);
    // console.log(product2);
    // console.log(box1);
  });
}());

