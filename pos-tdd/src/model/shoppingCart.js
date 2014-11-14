function ShoppingCart(inputs){
  this.inputs = inputs;
  this.allItems = loadAllItems();
  this.promotions = loadPromotions();

  this.totalPrice;
  this.savePrice;

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
}


ShoppingCart.prototype.computeOneItemPrice = function(){
  var productID = this.scanner.getPurchaseProduct();
  var count = this.scanner.getCount();
  var item;
  this.totalPrice = 0;
  this.savePrice = 0;

  for(var i=0;i<productID.length;i++){

    item = this.getItemInformation(productID[i]);
    if(item != null){
        //'名称：可口可乐，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n'
        var promotionPrice = this.computePromotionPrice(item, count[i]);

        this.shoppingPrint += "名称："+item.name+"，数量："+count[i]+item.unit+"，单价："
                              +this.toDecimal2(item.price)+"(元)，小计："+this.toDecimal2(promotionPrice)+"(元)\n";


        //'总计：3.00(元)\n'
        this.totalPrice += promotionPrice;
        this.savePrice += (item.price*count[i] - promotionPrice);
        // console.log(item.price*count[i]+"   "+this.totalPrice+"\n");
    }
  }
  //'节省：3.00(元)\n' +
  this.summaryPrint = "总计："+this.toDecimal2(this.totalPrice)+"(元)\n"+"节省："+this.toDecimal2(this.savePrice)+"(元)\n";

}

ShoppingCart.prototype.computePromotionPrice = function(item, count){
  var promotionPrice = 0;

  var flag = false;

  for(var i=0;i<this.promotions.length;i++){
    if(this.promotions[i].type == 'BUY_TWO_GET_ONE_FREE'){
      var promotionIDs = this.promotions[i].barcodes;
      for(var j=0;j<promotionIDs.length;j++){
        if(item.barcode == promotionIDs[j]){
          flag = true;
          break;
        }
      }
    }
    if(flag == true){
      break;
    }
  }

  if(flag == true){
    var sendNum = parseInt(count/3);
    promotionPrice = (count-sendNum)*item.price;
    //'名称：雪碧，数量：1瓶\n' +
    this.promotionPrint += '名称：'+item.name+'，数量：'+sendNum+item.unit+'\n';
  }else{
    promotionPrice = count*item.price;
  }

  return promotionPrice;
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
