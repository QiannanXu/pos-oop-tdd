function Printer(inputs){
  this.inputs = inputs;
  this.output = '';
  this.time = '';
}



Printer.prototype.printOutput = function(){
  this.printTime();
  this.output =
      '***<没钱赚商店>购物清单***\n' +
      '打印时间：' + this.time + '\n' +
      '----------------------\n' +
      '----------------------\n' +
      '挥泪赠送商品：\n' +
      '----------------------\n' +
      '**********************';
  console.log(this.output);
}

Printer.prototype.printTime = function() {
  this.time =  formateDate();
}
