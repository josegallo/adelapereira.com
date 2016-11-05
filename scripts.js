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

//add widget with biography

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<script>
$(document).ready(function(){

//align biography with optin
var optinWidth = $("div.op_signup_form.op-signup-style-style5").width();
console.log(optinWidth);
var categoriesWidth = $("div#text-2 .textwidget").outerWidth();
console.log(categoriesWidth);
var difference2 = (categoriesWidth - optinWidth)/2;
console.log(difference2);
$("div#text-2").css({ //align the widget with optin
		    'padding-left': difference2 + 'px'
		});
//add image
$("div#text-2 .textwidget").prepend("<img src = 'http://localhost/adelapereira.com/wp-content/uploads/2016/11/Adela-Pereira-bio-pequeno.png' width = '150' height = '' alt = 'Adela Pereira Biografia'> ");
$("div#text-2 .textwidget img").css({ // put picture on the center
	    'display': 'block',
    	'margin': '0 auto',
    	'font-family': 'Montserrat',
		});
$("div#text-2 .textwidget div").attr('id', 'add_photo_ade'); //add id to div to be added the title h4
//var htmlToAdd = '<h4 class="widget-title" style="text-align: center;">Hola. Soy Adela Pereira</h4>';
var objectToAdd = $("div#text-2 h4.widget-title"); //title to add
//$("#add_photo_ade").prepend(htmlToAdd);
objectToAdd.detach(); //delete old title
$("#add_photo_ade").prepend(objectToAdd).prepend("<p> </p>").css({ 
    	'font-family': 'Montserrat',
		});; //add new title and set the font-family

var biographyObject = $("div#text-2");
$(".sidebar-section.sidebar-form").prepend(biographyObject);
}); 

</script>







