// align ads in blog with optin. Placed on OptimizePress>blogsettings>modules>otherscripts

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<script>
$(document).ready(function(){
var optimeWidth = $("div.op_signup_form.op-signup-style-style5").outerWidth();
var adsBlockWidth = $(".sidebar-ads img:first-child").width();
var difference = (optimeWidth - adsBlockWidth)/2;
$(".sidebar-ads a img").css({ 'padding-left': difference + 'px'}); //align to center
$("div#categories-3").css({ // put the categories 
		    'margin-left': '0px', 
            'padding-left': '0px',
		});
var categoriesWidth = $("div#categories-3").outerWidth();
var difference2 = (categoriesWidth - adsBlockWidth)/2;
$("div#categories-3").css({ //align the widget with adds
		    'padding-left': difference2 + 'px'
		});
$(".widget h4, .widget_categories li").css({ //center texts
		    'text-align': 'center'
		});

}); 

</script>


//change text to Spanish on Leave response section on post blog. Put it on each post
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<script>
$(document).ready(function(){
$("#leave-reply h3").text("Deja tu comentario");
$("#leave-reply label:first-child span:nth-child(2)").text("Nombre*");
$("#leave-reply label:nth-child(3) span:nth-child(2)").text("Pagina web");
$("#leave-reply .form-submit input").val("Envía comentario");
$("#leave-reply .form-submit p").text("* Requerido");
}); 

	
</script>


