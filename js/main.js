$(document).ready( function(){
	justifyBoxHeight("#Background .bgPtn")
	//ロールオーバーと指カーソル
	hoverPointerInit();
	rollOverInit();
	
});

/* ◆機種判別 ------------------------------ */

function checkAgent(){
	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1 || agent.search(/iPod/) != -1){
		//iPhone or iPod
		return("smp");
	}else if(agent.search(/iPad/) != -1){
		//iPad
		return("tab");
	}else if(agent.search(/Android/) != -1 && agent.search(/mobile/) != -1){
		//Android tablet
		return("tab");
	}else if(agent.search(/Android/) != -1){
		//Android smartphone
		return("smp");
	}else{
		//PCその他
		return("pc");
	}
}

/* ◆スマートフォンのアドレスバーを隠す ------------------------------ */
function hideAdBar(){
	setTimeout("scrollTo(0,1)", 100);
}

/* ◆ポインター ------------------------------ */
// .pointer のhover時マウスカーソルを指に
function hoverPointerInit(){
	$('.pointer').hover(function(){
		$(this).css("cursor","pointer");
	},function(){
		$(this).css("cursor","default");
	});
}
/* ◆マウスオーバー ------------------------------ */
// img.btn のsrcをhoverで変更 マウスカーソルも指にする
function rollOverInit(){
	$('img.btn').hover(function(){
		$(this).css("cursor","pointer");
		$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
	}, function(){
		$(this).css("cursor","default");
		$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
	});
}
/* ◆画像プリロード ------------------------------ */
jQuery.preloadImages = function(){
    for(var i = 0; i<arguments.length; i++){
        jQuery("<img>").attr("src", arguments[i]);
    }
};
/* ◆ページ初期設定 ------------------------------ */
//メインナビに現在のページを反映
function mainNaviCurrent(num){
	$("#mainNavi ul li:nth-child("+num+")").addClass("current");
}
//bodyにIDを反映
function bodyId(idstr){
	$("body").attr("id",idstr);
}
//boxの高さをrootと同じ（height100%）にする
function justifyBoxHeight(trg){
	var rootH = $(document).height();
	$(trg).css("height",rootH);
}
