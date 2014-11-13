function ShoppingCart(inpus){
  this.shoppingLists = inputs;

  this.printer;

  this.shoppingOutput = "";
  this.promotionOutput = "";
  this.summaryOutput = "";
}

ShoppingCart.prototype.mainProcess = function(){
  this.printer = new Printer();
  this.printer.printOutput();
}

ShoppingCart.prototype.computePrice = function(){
  this.shoppingList.forEach(function(shoppingID){

    allItems.forEach(function(item){

        if(item.barcode == shoppingID){

            break;

        }
    });

    this.shoppingOutput += item.****;

  });
}
