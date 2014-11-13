describe('pos', function () {
    var allItems, inputs, formattedDate;

    beforeEach(function () {
        allItems = loadAllItems();
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
        formattedDate = formateDate();

    });

    it('should print correct text when input null', function (){
      spyOn(console, 'log');

      var inputTest = [];
      var expectText =
          '***<没钱赚商店>购物清单***\n' +
          '打印时间：' + formattedDate + '\n' +
          '----------------------\n' +
          '----------------------\n' +
          '挥泪赠送商品：\n' +
          '----------------------\n' +
          '**********************';

      printInventory(inputTest);

      expect(console.log).toHaveBeenCalledWith(expectText);
    })

});
