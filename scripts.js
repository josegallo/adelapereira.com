
// align ads in blog with optin

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<script>
// align ads in blog with optin
$(document).ready(function(){
var optimeWidth = $("div.op_signup_form.op-signup-style-style5").outerWidth();
var adsBlockWidth = $(".sidebar-ads img:first-child").width();

console.log (optimeWidth,adsBlockWidth);
var difference = (optimeWidth - adsBlockWidth)/2;

console.log(difference);
$(".sidebar-ads a img").css({ 'padding-left': difference + 'px'}); //align to center
$("div#categories-3").css({ // put the categories 
		    'margin-left': '0px', 
            'padding-left': '0px',
		});
var categoriesWidth = $("div#categories-3").outerWidth();
console.log ("categoriesWidth ", categoriesWidth);
var difference2 = (categoriesWidth - adsBlockWidth)/2;
console.log(difference2);
$("div#categories-3").css({ //align the widget with adds
		    'padding-left': difference2 + 'px'
		});
$(".widget h4, .widget_categories li").css({ //center texts
		    'text-align': 'center'
		});

}); 

</script>

