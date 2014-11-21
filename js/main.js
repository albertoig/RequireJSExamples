require.config({
    baseUrl: 'js',
    removeCombined: true,
    paths: {
        jquery:   			"lib/jquery",
        boostrap: 			"lib/bootstrap.min",
        MessageController:  "modules/MessageController",
        wow:  				"lib/wow.min",
        Product:  			"modules/Product"
    },
    shim : {
	    jquery : {
	      exports : '$'
	    },
	    wow : {
	      exports : 'WOW'
	    },
	    boostrap: 	['jquery']
  	}
});

/**require( ["wow","Product"], function (WOW,Product) {
	console.log("INIT");
	new WOW().init();

	var oProduct = new Product("Playsatation 3","200","1","#messageContainer");
	oProduct.printProduct();
});
**/

require( ["wow","Product","MessageController"], function (WOW,Product,message) {
	console.log("INIT");
	new WOW().init();

	var oProduct = new Product("Playsatation 3","200","1","#messageContainer");
	oProduct.printProduct();

	var productsArray = [ new Product("Playsatation 3","200","1",""),
						  new Product("Playsatation 4","200","2",""),
						  new Product("XBOX","500","3","")]

	var oMessage = message("#messageContainer2");

	var text ="";
	for (x=0;x<productsArray.length;x++){
		text += productsArray[x].toString() + ' <BR> ';
	}

	oMessage.printInfoMessage(text);					  
});

