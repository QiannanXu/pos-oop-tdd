function Scanner(inputs){
  this.inputs = inputs;

  this.purchaseProduct = [];
  this.count = [];
}

Scanner.prototype.inputProcess = function(){

  for(var i=0,k=0;i<this.inputs.length;){
    var num = 1;

    for(var j=1;j<this.inputs.length;j++){
      if(this.inputs[i] == this.inputs[j]){
        num++;
      }else{
        break;
      }
    }

    this.purchaseProduct[k] = this.inputs[i];
    this.count[k] = num;
    // console.log(this.purchaseProduct[k]+" "+this.count[k]+"   /n");

    i=i+j;
    k++;
  }

}

Scanner.prototype.getPurchaseProduct = function(){
  return this.purchaseProduct;
}

Scanner.prototype.getCount = function(){
  return this.count;
}
