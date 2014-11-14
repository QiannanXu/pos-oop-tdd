function ShoppingCart(inputs){
  this.inputs = inputs;

  this.shoppingPrint = "";
  this.promotionPrint = "";
  this.summaryPrint = "";

  this.printer;

  this.allItems = loadAllItems();
}

ShoppingCart.prototype.mainProcess = function(){
  this.computeOneItemPrice(this.inputs);

  this.printer = new Printer(this.shoppingPrint, this.promotionPrint, this.summaryPrint);
  this.printer.print();
}


ShoppingCart.prototype.computeOneItemPrice = function(inputs){
  var inputBarcode;
  var count = 1;
  var item;

  for(var i=0;i<inputs.length;i+=k){
    inputBarcode = inputs[i];

    for(var k=1;k<inputs.length;k++){
      if(inputBarcode == inputs[k]){
        count++;
      }else{
        break;
      }
    }


    for(var j=0; j<this.allItems.length;j++){
      item = this.allItems[j];
      if(inputBarcode == item.barcode){
        break;
      }
    }
    //'名称：可口可乐，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n'
    this.shoppingPrint += "名称："+item.name+"，数量："+count+item.unit+"，单价："+this.toDecimal2(item.price)+"(元)，小计："+this.toDecimal2(item.price*count)+"(元)\n";
    //'总计：3.00(元)\n'
    this.summaryPrint = "总计："+this.toDecimal2(item.price*count)+"(元)\n";


  }

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
