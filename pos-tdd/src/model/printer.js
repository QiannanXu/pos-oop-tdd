function Printer(shoppingOutput, promotionOutput, summaryOutput){
  this.shoppingOutput = shoppingOutput;
  this.promotionOutput = promotionOutput;
  this.summaryOutput = summaryOutput;

  this.printOutput = '';

  this.time = '';
}



Printer.prototype.print = function(){
  this.printTime();
  this.printOutput =
      '***<没钱赚商店>购物清单***\n' +
      '打印时间：' + this.time + '\n' +
      '----------------------\n' +
      this.shoppingOutput+
      '----------------------\n' +
      '挥泪赠送商品：\n' +
      this.promotionOutput+
      '----------------------\n' +
      this.summaryOutput+
      '**********************';
  console.log(this.printOutput);
}

Printer.prototype.printTime = function() {
  this.time =  formateDate();
}
