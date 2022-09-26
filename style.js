// const img_src =["mainbg03.jpg","mainbg02.jpg","mainbg01.jpg","main-top.jpg"];
// let num = -1;

// function slideshow_timer(){
//     if (num === 2){
//       num = 0;
//     } 
//     else {
//       num ++;
//     }
//     document.getElementById("mypic").src = img_src[num];
//   }

// setInterval(slideshow_timer,3000);



function FixedAnime() {
	var headerH = $('header-top').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//headerの高さ以上になったら
			$('header-top').addClass('fixed');//fixedというクラス名を付与
		}else{//それ以外は
			$('header-top').removeClass('fixed');//fixedというクラス名を除去
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});




//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
	  //タブ設定
	  $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
		var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
		if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
		  var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
		  $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
		  $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
		  //表示させるエリア設定
		  $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
		  $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
		}
	  });
	}
  }
  
  //タブをクリックしたら
  $('.tab a').on('click', function() {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得  
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
  });
  
  
  // 上記の動きをページが読み込まれたらすぐに動かす
  $(window).on('load', function () {
	  $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
	  $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
  });



//テキストのカウントアップ+バーの設定
window.onload = function(){
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#555',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});  
    
}


//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './mainbg01.jpg'},
				{ src: './mainbg02.jpg'},
				{ src: './mainbg03.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './img/img_sp_01.jpg' },
				{ src: './img/img_sp_02.jpg' },
				{ src: './img/img_sp_03.jpg' }
			];
		}

//Vegas全体の設定
$(function() {
	$('#slider').vegas({
		overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		timer:false,
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: [
			{ src: './mainbg01.jpg'},
			{ src: './mainbg02.jpg'},
			{ src: './mainbg03.jpg'}
		]
	});
});


jQuery(window).on('scroll', function () {
    if (900 < jQuery(this).scrollTop()) {
        jQuery('#header').addClass('change-color');
    } else {
        jQuery('#header').removeClass('change-color');
    }
});

jQuery(window).on('scroll', function () {
    if (900 < jQuery(this).scrollTop()) {
        jQuery('nav ul li a').addClass('change-color');
    } else {
        jQuery('nav ul li a').removeClass('change-color');
    }
});

jQuery(window).on('scroll', function () {
    if (900 < jQuery(this).scrollTop()) {
        jQuery('#header h1 a').addClass('change-color');
    } else {
        jQuery('#header h1 a').removeClass('change-color');
    }
});





$(".openbtn").click(function () {
    $(this).toggleClass('active');
});


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
