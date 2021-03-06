function Scanner(inputs){
  this.inputs = inputs;
  this.weight = [];

  this.purchaseProduct = [];
  this.count = [];
  this.promotions = loadPromotions();
}

Scanner.prototype.inputProcess = function(){

  this.weightingFlagProcess();
  this.ticketComputeProcess();

}

Scanner.prototype.ticketComputeProcess = function(){
  for(var i=0,k=0;i<this.inputs.length;){
    var num = this.weight[i];
    var count = 1;

    for(var j=i+1;j<this.inputs.length;j++){
      if(this.inputs[i] == this.inputs[j]){
        num = num + this.weight[j];

        count++;
      }else{
        break;
      }
    }

    this.purchaseProduct[k] = this.inputs[i];
    this.count[k] = num;

    i=i+count;
    k++;
  }
}

Scanner.prototype.weightingFlagProcess = function(){
  for(var i=0;i<this.inputs.length;i++){
    var barcode = this.inputs[i];

    if(barcode.indexOf('-') != -1){
      var words = barcode.split('-');
      this.inputs[i] = words[0];
      this.weight[i] = parseFloat(words[1]);
    }else{
      this.weight[i] = 1;
    }
  }
}

Scanner.prototype.getPurchaseProduct = function(){
  return this.purchaseProduct;
}

Scanner.prototype.getCount = function(){
  return this.count;
}
