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
          '总计：0.00(元)\n'+
          '**********************';

      printInventory(inputTest);

      expect(console.log).toHaveBeenCalledWith(expectText);
    });

  it('should print correct text when input ITEM000000', function (){
      spyOn(console, 'log');

      var inputTest = ['ITEM000000'];
      var expectText =
          '***<没钱赚商店>购物清单***\n' +
          '打印时间：' + formattedDate + '\n' +
          '----------------------\n' +
          '名称：可口可乐，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n' +
          '----------------------\n' +
          '挥泪赠送商品：\n' +
          '----------------------\n' +
          '总计：3.00(元)\n' +
          '**********************';

      printInventory(inputTest);

      expect(console.log).toHaveBeenCalledWith(expectText);
    });

    it('should print correct text when input ITEM000000 ITEM000000', function (){
        spyOn(console, 'log');

        var inputTest = ['ITEM000000','ITEM000000'];
        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '打印时间：' + formattedDate + '\n' +
            '----------------------\n' +
            '名称：可口可乐，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
            '----------------------\n' +
            '挥泪赠送商品：\n' +
            '----------------------\n' +
            '总计：6.00(元)\n' +
            '**********************';

        printInventory(inputTest);

        expect(console.log).toHaveBeenCalledWith(expectText);
      });

      it('should print correct text when input ITEM000000 ITEM000000 ITEM000004', function (){
          spyOn(console, 'log');

          var inputTest = ['ITEM000000','ITEM000000', 'ITEM000004'];
          var expectText =
              '***<没钱赚商店>购物清单***\n' +
              '打印时间：' + formattedDate + '\n' +
              '----------------------\n' +
              '名称：可口可乐，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
              '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n'+
              '----------------------\n' +
              '挥泪赠送商品：\n' +
              '----------------------\n' +
              '总计：8.00(元)\n' +
              '**********************';

          printInventory(inputTest);

          expect(console.log).toHaveBeenCalledWith(expectText);
        });

    it('should print correct text when input ITEM000003-2 ITEM000003-2.1', function (){
      spyOn(console, 'log');

      var inputTest = ['ITEM000003-2','ITEM000003-2.1'];
      var expectText =
          '***<没钱赚商店>购物清单***\n' +
          '打印时间：' + formattedDate + '\n' +
          '----------------------\n' +
          '名称：荔枝，数量：4.1斤，单价：15.00(元)，小计：61.50(元)\n' +
          '----------------------\n' +
          '挥泪赠送商品：\n' +
          '----------------------\n' +
          '总计：61.50(元)\n' +
          '**********************';

      printInventory(inputTest);

      expect(console.log).toHaveBeenCalledWith(expectText);
    });



});
