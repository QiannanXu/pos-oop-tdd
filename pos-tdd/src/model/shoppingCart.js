function ShoppingCart(inputs){
  this.inputs = inputs;
  this.allItems = loadAllItems();

  this.shoppingPrint = "";
  this.promotionPrint = "";
  this.summaryPrint = "";

  this.printer;
  this.scanner;
}

ShoppingCart.prototype.mainProcess = function(){
   this.scanner = new Scanner(this.inputs);
   this.scanner.inputProcess();

  this.computeOneItemPrice();

  this.printer = new Printer(this.shoppingPrint, this.promotionPrint, this.summaryPrint);
  this.printer.print();

  this.totalPrice;
  this.savePrice;
}


ShoppingCart.prototype.computeOneItemPrice = function(){
  var productID = this.scanner.getPurchaseProduct();
  var count = this.scanner.getCount();
  var item;
  this.totalPrice = 0;

  for(var i=0;i<productID.length;i++){

    item = this.getItemInformation(productID[i]);
    if(item != null){
        //'名称：可口可乐，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n'
        this.shoppingPrint += "名称："+item.name+"，数量："+count[i]+item.unit+"，单价："+this.toDecimal2(item.price)+"(元)，小计："+this.toDecimal2(item.price*count[i])+"(元)\n";
        //'总计：3.00(元)\n'
        this.totalPrice += item.price*count[i];
        // console.log(item.price*count[i]+"   "+this.totalPrice+"\n");


    }
  }
  this.summaryPrint = "总计："+this.toDecimal2(this.totalPrice)+"(元)\n";

}

ShoppingCart.prototype.getItemInformation = function(productID){
  var item;
  for(var i=0;i<this.allItems.length;i++){
    item = this.allItems[i];
    if(productID == item.barcode){
      break;
    }
  }
  return item;
}

ShoppingCart.prototype.toDecimal2 = function(num){
  var f = parseFloat(num);
  if (isNaN(f)) {
      return num;
  }
  var f = Math.round(num*100)/100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
         rs = s.length;
         s += '.';
  }
  while (s.length <= rs + 2) {
       s += '0';
  }

  return s;
}
