// align ads in blog with optin. Placed on OptimizePress>blogsettings>modules>otherscripts

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<script>
$(document).ready(function(){
var optimeWidth = $("div.op_signup_form.op-signup-style-style5").outerWidth();
console.log("optimeWidth = " + optimeWidth);
var adsBlockWidth = $(".sidebar-ads img:first-child").width();
console.log("adsBlockWidth = " + adsBlockWidth);
var difference = (optimeWidth - adsBlockWidth)/2;
$(".sidebar-ads a img").css({ 'padding-left': difference + 'px'}); //align to center
$("div#categories-3").css({ // put the categories 
		    'margin-left': '0px', 
            'padding-left': '0px',
		});
var categoriesWidth = $("div#categories-3").outerWidth();
var difference2 = (categoriesWidth - adsBlockWidth)/2;
console.log("difference2 = " + difference2);
$("div#categories-3").css({ //align the widget with adds
		    'padding-left': difference2 + 'px'
		});
$(".widget h4, .widget_categories li").css({ //center texts
		    'text-align': 'center'
		});
$("div#categories-3, .sidebar-section.sidebar-ads.single-ad").css({ // put picture on the center
			    'display': 'block',
		    	'margin': '0 auto',
		    	//'padding-left':'20px'
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
var widthOfWindow = $(window).width();
console.log(widthOfWindow);
if (widthOfWindow > 770) {
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
	$("div#text-2 .textwidget").prepend("<img src = 'http://adelapereira.com/wp-content/uploads/2016/11/Adela-Pereira-bio-pequeno2.png' width = '150' height = '' alt = 'Adela Pereira Biografia'> ");
	$("div#text-2 .textwidget img").css({ // put picture on the center
		    'display': 'block',
	    	'margin': '0 auto',
	    	'font-family': 'Montserrat',
			});
	$("div#text-2 .textwidget div").attr('id', 'add_photo_ade'); //add id to div to be added the title h4
	var objectToAdd = $("div#text-2 h4.widget-title"); //title to add
	objectToAdd.detach(); //delete old title
	$("#add_photo_ade").prepend(objectToAdd).prepend("<p> </p>").css({ 
	    	'font-family': 'Montserrat',
			});; //add new title and set the font-family

	var biographyObject = $("div#text-2");
	$(".sidebar-section.sidebar-form").prepend(biographyObject);

} //end of if

else { //for mobiles and tablets
		$("div#categories-3").css({ // put picture on the center
			    'display': 'block',
		    	'margin': '0 auto',
		    	//'padding-left':'20px'
				});
		$(".sidebar-ads a img").css({ // put picture on the center
			    'display': 'block',
		    	'margin': '0 auto',
				});
			//add image
	$("div#text-2 .textwidget").prepend("<img src = 'http://adelapereira.com/wp-content/uploads/2016/11/Adela-Pereira-bio-150.png' width = '150' height = '' alt = 'Adela Pereira Biografia'> ");
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
};

});  //end of document

</script>


// remove check icons from iframe when the content is form the same domain.

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<script>
$(document).ready(function(){

	var iFr = $('iframe');
	iFr.load(function() {
		iFr.attr('id','something');
       	iFr.contents().find('h1').css({'display' : 'none'});
       	//iFr.contents().find('h1').remove();
      	//$('something').contents().find('h1').hide();
	});


	var f = $("iframe");
	f.load(function(){
        f.find(' h1').css({'display' : 'none'});
        //f.find('h1').hide();
        //f.contents().find('h1').remove();
	});


}); //end of ready function

</script>


//scroll screen from video thumbnail to video div and hide loading error

<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script>
$(document).ready(function(){

  $(".ui-loader.ui-corner-all.ui-body-a.ui-loader-default").hide(); 

  $("div#le_body_row_3_col_1_el_1 img.full-width").on("tap",function(){
    //$('html, body').animate({ scrollTop: $("div#wistia-kv8empd3ag-1").offset().top }, 500);
    $('html, body').animate({ scrollTop: $("div#le_body_row_4_col_1_el_1 ").offset().top }, 500);
    });
});
</script>


//add id for scrolling till spacer with .quiero-matricularme-1 class


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script>
$(document).ready(function(){

$('div#le_body_row_30').attr('id', 'quiero-matricularme-go');
});
</script>


//hide on tablets and mobiles the enrolment boxes enroll-box-mobile


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script>
$(document).ready(function(){
	if ($(window).width() > 770) {
		$(".enroll-box-mobile").hide();
	};
});
</script>



