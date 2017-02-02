//transalate text to spanish of payment form with 1 payment

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script>
$(document).ready(function(){
	$("header .hide-on-mobile h1").text("Necesitas ayuda: programas@escueladetriunfadoras.com")
	$(".section-title h1").first().text("Información de contacto");
	$(".section-title p").first().html("<p>Los campos marcados con <span>*</span>son obligatorios</p>");
	$("form#paymentForm .section-title h1:first-child").first().text("Información del pago");
	$("form#paymentForm .formline.two-parts:first .col-md-6.left-input-column label").html("Nombre <strong>*</strong>");
	$("form#paymentForm .formline.two-parts:first .col-md-6.right-input-column label").html("Apellido<strong>*</strong>");
	$("form#paymentForm .formline.two-parts:eq(1) .col-md-6.left-input-column label").html("Email <strong>*</strong>");
	$("form#paymentForm .order-payment .section-title p ").first().text("Todos los campos son obligatorios");
	$("form#paymentForm .col-md-8 label").text("Número de la tarjeta de crédito");
	$("form#paymentForm .col-md-4 label").text("Código CVV");

	$("form#paymentForm .formline:nth-child(2) .col-md-6:first-child label").text("Fecha de caducidad");

	$(".checkout-forms .three-sections.hide-991 td.cell01.symbol03 .relative-wrapper .tooltip-inner").text("Transacción e información encriptadas.");
	$(".checkout-forms .three-sections.hide-991 td.cell01.symbol03 .relative-wrapper p").html("AES-256bit<br>Encriptación");
	$(".checkout-forms .three-sections.hide-991 td.cell02.symbol02 .relative-wrapper .tooltip-inner").text("La información que proporcionas no se comparte.");
	$(".checkout-forms .three-sections.hide-991 td.cell02.symbol02 .relative-wrapper p").html("Adela Pereira<br>Proteje Tu<br>Privacidad");
	$(".checkout-forms .three-sections.hide-991 td.cell03.symbol03 .relative-wrapper .tooltip-inner").text("Tu información está segura.");
	$(".checkout-forms .three-sections.hide-991 td.cell03.symbol03 .relative-wrapper p").html("Tu<br>Información<br>está segura");
	});
</script>

//transalate text to spanish of payment form with 2 payments

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script>
$(document).ready(function(){
	$("header .hide-on-mobile h1").text("Necesitas ayuda: programas@escueladetriunfadoras.com")
	$(".section-title h1").first().text("Información de contacto");
	$(".section-title p").first().html("<p>Los campos marcados con <span>*</span>son obligatorios</p>");
	$("form#paymentForm .section-title h1:first-child").first().text("Información del pago");
	$("form#paymentForm .formline.two-parts:first .col-md-6.left-input-column label").html("Nombre <strong>*</strong>");
	$("form#paymentForm .formline.two-parts:first .col-md-6.right-input-column label").html("Apellido<strong>*</strong>");
	$("form#paymentForm .formline.two-parts:eq(1) .col-md-6.left-input-column label").html("Email <strong>*</strong>");
	$("form#paymentForm .order-payment .section-title p ").first().text("Todos los campos son obligatorios");
	$("form#paymentForm .col-md-8 label").text("Número de la tarjeta de crédito");
	$("form#paymentForm .col-md-4 label").text("Código CVV");

	$("form#paymentForm .formline:nth-child(2) .col-md-6:first-child label").text("Fecha de caducidad");
	$("form#paymentForm .col-md-8.price-placement").html("US $ <div class='product-price product-subtotal'> 84.00 </div> hoy,");
	$("form#paymentForm .row-pad.second-line .col-md-12 .price-placement").html("y otro segundo pago de US $ <div class='subscription-price'> 84.00 </div>");
	
	$("form#paymentForm .row-pad.second-line .col-md-12 .ninja").html("dentro de 30 días");

	$(".checkout-forms .three-sections.hide-991 td.cell01.symbol03 .relative-wrapper .tooltip-inner").text("Transacción e información encriptadas.");
	$(".checkout-forms .three-sections.hide-991 td.cell01.symbol03 .relative-wrapper p").html("AES-256bit<br>Encriptación");
	$(".checkout-forms .three-sections.hide-991 td.cell02.symbol02 .relative-wrapper .tooltip-inner").text("La información que proporcionas no se comparte.");
	$(".checkout-forms .three-sections.hide-991 td.cell02.symbol02 .relative-wrapper p").html("Adela Pereira<br>Proteje Tu<br>Privacidad");
	$(".checkout-forms .three-sections.hide-991 td.cell03.symbol03 .relative-wrapper .tooltip-inner").text("Tu información está segura.");
	$(".checkout-forms .three-sections.hide-991 td.cell03.symbol03 .relative-wrapper p").html("Tu<br>Información<br>está segura");
	});
</script>

//color copyright at footer

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script>
$(document).ready(function(){
	$("footer.footer .footer-decoration .middle-container div p").css({ 'color': '#f8f8f8'});
	});
</script>


	