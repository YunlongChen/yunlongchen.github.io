jQuery(document).ready(function($) {
	$('#Banner').load('/sidebanner.js',null,function (){
	//callback
	});
	var fadeTime=500;
	if(!jQuery.support.opacity){
	//IE8以下
		fadeTime=0;
	}
	$('#Background .mainVisual img').fadeIn(fadeTime,function(){
		$('#Background .bgPtn').fadeIn(fadeTime,function(){
			//callback
		});
		$('header #OnAir img').fadeIn(fadeTime);
	});
});