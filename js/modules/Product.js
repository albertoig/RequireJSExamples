define(["jquery","MessageController"], function($,message) {

  var Product = (function(name,price,id,idDiv){
    //VARIABLES DE ACCESO PRIVADO
    var name = name;
    var price = price;
    var id = id;
    var oPrint = new message(idDiv);

    var printProduct = function(){
      oPrint.printSucessMessage(toString());
    }

    var toString =function(){
      return "Producto: " + name + " Precio:" + price + " id:" + id;
    }

    // ACCESIBLE METHODS
    return {
      printProduct : function(){
        return printProduct();
      },
      toString: function(){
        return toString();
      }
    }

  });
  console.log("Load Product Module");
  return Product;
});