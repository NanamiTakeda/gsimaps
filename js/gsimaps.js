var GSI = {
	ClientMode : {},
	Modal : {},
	Draw : {},
	Edit : {},
	Control : {},
	Utils : {
		Browser : {}
	},
	GLOBALS : {},
	TEXT : {}
};

GSI.Version = "0.9.9.12";

var CONFIG = {};

// 地理院地図用 layersファイル指定。
// (CONFIG.layers = null;に変更すると、同階層のlayers.txtを読込)
CONFIG.layers = [
	'./layers_txt/layers1.txt',
	'./layers_txt/layers2.txt',
	'./layers_txt/layers3.txt',
	'./layers_txt/layers4.txt'
];




// トップメッセージ
//CONFIG.TOPMESSAGE = null;
CONFIG.TOPMESSAGE = {
	MESSAGE : '新しい地理院地図です。<a href="http://portal.cyberjapan.jp/help/howtouse/150108abstract.pdf"  TARGET="_blank">主な機能概要</a>',
	DETAILS : ''
};


// 初期位置
CONFIG.DEFAULT = { CENTER : [35.3622222, 138.7313889],ZOOM : 5};

// レイヤータイプリスト
CONFIG.LAYERTYPELIST = {
	"kml"           : { caption : "KML", isTile: false },
	"tile"          : { caption : "タイル", isTile: true, isTileImage : true },
	"geojson"       : { caption : "GeoJSON", isTile: false },
	"topojson"      : { caption : "TopoJSON", isTile: false },
	"geojson_tile"  : { caption : "GeoJSONタイル", isTile: true },
	"topojson_tile" : { caption : "TopoJSONタイル", isTile: true },
	"tms"           : { caption : "TMS", isTile: true, isTileImage : true }
};

// ココタイルのデフォルト値
CONFIG.COCOTILEVISIBLE = false;

// アクセスカウンターを表示するかどうか
CONFIG.USEACCESSCOUNTER = true;

// リストにレイヤーのタイプを表示するかどうか（デバッグ用）
CONFIG.VISIBLELAYERTYPE  = false;

// IE10,11のグレースケールを利用するか
//CONFIG.USEIE1011GRAYSCALE = true;
CONFIG.USEIE10GRAYSCALE = false;
CONFIG.USEIE11GRAYSCALE = true;

// CORS強制(CONFIG.SERVERAPI.GETJSONPを使用するかどうか)
CONFIG.FORCECORS = true;

// 検索結果クリック時のズームレベル
CONFIG.SEARCHRESULTCLICKZOOM = 15;


// 緯度経度グリッドスタイル
CONFIG.LATLNGGRIDSTYLE = {
	color : "#1D417A",
	weight : 2,
	opacity: 1,
	fill: false,
	fillOpacity:1,
	dashArray : [3,3]
};
CONFIG.LATLNGGRIDLABELCLASSNAME = 'latlnggrid_label';

// レイヤーツリーの階層を記憶
CONFIG.LAYERTREEDIALOGKEEPCURRENT = false;

// UTMグリッドスタイル
CONFIG.UTMGRIDSTYLE = {
	color : "#004E2D",
	weight : 2,
	opacity: 1,
	fill: false,
	fillOpacity:1,
	dashArray : [3,3],
	visible : false
};
CONFIG.UTMGRIDLABELCLASSNAME = 'utmgrid_label';

// 磁北線の数
CONFIG.JIHOKULINECOUNT = 5;

// 磁北線のスタイル
CONFIG.JIHOKULINESTYLE = {
	"color":' #ff0000',
	"weight": 2,
	"opacity": 1,
	"fill" : false,
	"fillOpacity":1,
	"clickable" : false
};

// 印刷用紙サイズ
CONFIG.PAPERSIZE = {
	"A4_portrait" : {w:650,h:900},  //A4縦
	"A4_landscape" : {w:950,h:550}, //A4横
	"A3_portrait" : {w:950,h:1350},  //A3縦
	"A3_landscape" : {w:1400,h:900}  //A3横
};

// アクセスカウンタ設定
CONFIG.ACCESSCOUNTERRETRY = 0; // 再試行回数 0で再試行しない。
GSI.TEXT.ACCESSCOUNTER = {};
GSI.TEXT.ACCESSCOUNTER.TOOLTIP = "アクセス数";


// 計測の文言
GSI.TEXT.MEASURE = {};
GSI.TEXT.MEASURE.DIALOG_TITLE = '計測';
GSI.TEXT.MEASURE.DIALOG_DISTANCE_CAPTION = '距離';
GSI.TEXT.MEASURE.DIALOG_AREA_CAPTION = '面積';
GSI.TEXT.MEASURE.DIALOG_OBJECT_CAPTION = '選択図形';


// 作図関連の文言
GSI.TEXT.SAKUZU = {};
GSI.TEXT.SAKUZU.SAKUZUTITLE = '新規作図情報';
GSI.TEXT.SAKUZU.LOAD_ERROR = 'ファイルが読み込めません。';
GSI.TEXT.SAKUZU.LOAD_NOFILE = 'ファイルが選択されていません。';

GSI.TEXT.SAKUZU.DIALOG_TITLE = '作図・ファイル';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_LOAD = 'ファイルから読み込み';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_SAVE = '選択している情報をまとめて保存';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDMARKER = 'マーカーを追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDDIVMARKER = 'テキストを追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDLINE = '線を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDPOLY = 'ポリゴンを追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLE = '円を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDFREEHAND = '円フリーハンドで線を追加';

GSI.TEXT.SAKUZU.DIALOG_LIST_EDITBTN = '編集';
GSI.TEXT.SAKUZU.DIALOG_LIST_REMOVEBTN = '削除';

GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルを選択してください';
GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい' ;
GSI.TEXT.SAKUZU.DIALOG_LOAD_FILENAMECAPTION = 'パネル上の表示名' ;

GSI.TEXT.SAKUZU.DIALOG_LOAD_OKBTN = '読込を開始';
GSI.TEXT.SAKUZU.DIALOG_LOAD_CANCELBTN = '中　止';
GSI.TEXT.SAKUZU.DIALOG_LOAD_NOFILE = 'ファイルが選択されていません。';
GSI.TEXT.SAKUZU.DIALOG_LOAD_NOTEXT = 'テキストが入力されていません。';
GSI.TEXT.SAKUZU.DIALOG_LOAD_ERROR = '読み込みに失敗しました。ファイルの形式をご確認ください。';


GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT = 'ファイル形式を選択して下さい';
GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT2= '「TEXT」で作図した内容はGeoJSON形式でのみ保存可能です。';
GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい' ;
GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN = '上記の内容で保存';
GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN_CLIPBOARD = 'クリップボードにコピー';
GSI.TEXT.SAKUZU.DIALOG_SAVE_CANCELBTN = '戻　る';

GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVEBTN = 'オブジェクトの削除';
GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN = '確　定';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN = '終　了';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELCONFIRMMSG = '編集を終了しますか？確定していない編集内容は破棄されます。';
GSI.TEXT.SAKUZU.DIALOG_HIDECONFIRMMSG = '作図・ファイルパネルを閉じますか？確定していない編集内容は破棄されます。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVECONFIRMMSG = 'このオブジェクトを削除します。よろしいですか？';
GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN = '自由文入力に切替';
GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN = 'テーブル入力に切替';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG = '表示するHTMLを入力して下さい。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT = '例1:動物園　\n例2:<div style="background:#FFFFFF;color:red;">図書館</div>';

// 共有の文言
GSI.TEXT.SHARE = {};
GSI.TEXT.SHARE.DIALOG_TITLE = '共有';
GSI.TEXT.SHARE.DIALOG_LINK_TITLE = 'リンクを取得';
GSI.TEXT.SHARE.DIALOG_BUILTIN_TITLE = 'ウェブサイトに埋め込む';
GSI.TEXT.SHARE.DIALOG_SAVE_TITLE = '名前を付けて保存';

GSI.TEXT.SHARE.DIALOG_LINK_MESSAGE = '次のURLをメール等で送付することで、現在表示されている地図を共有することができます。'+
	'<div style="font-size:85%;">※作図結果を反映した状態で共有したい場合は、本サイトの「名前をつけて保存」機能をご利用下さい</div>';
GSI.TEXT.SHARE.DIALOG_BUILTIN_MESSAGE = '次のタグをHTMLファイルに加えることで、地理院地図をウェブサイトに埋め込むことができます。';
GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE = '次のHTMLを<string>次のHTMLを保存</strong>ボタンをクリックして保存して下さい。' ;
GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 = '次のHTMLをテキストエディタで<strong>文字コードUTF-8</strong>で保存して下さい。' ;

GSI.TEXT.SHARE.DIALOG_TEMPLATELOADERROR = '大変申し訳ありません。しばらく経ってからご利用下さい' ;

GSI.TEXT.SHARE.DIALOG_DOWNLOADBTN = '上記のHTMLを保存';
GSI.TEXT.SHARE.DIALOG_COPYBTN = 'クリップボードにコピー';
GSI.TEXT.SHARE.DIALOG_NOCOPYMSG = 'URLをコピーしてご利用下さい';




// ダイアログ表示等エフェクト
CONFIG.EFFECTS = {
	// メニュー表示エフェクト
	MENU : {
		ROOT : {
			animation : "slide",
			option : {"easing": "linear"},
			speed : "fast"
		},
		OTHER : {
			animation : "scale",
			option : {"direction": "both","easing": "linear"},
			speed : "fast"
		}
	},
	// ダイアログ表示エフェクト
	DIALOG : {
		animation : "puff",
		option : {"percent": 10},
		speed : "fast"
	}

};


// パラメータ用
CONFIG.PARAMETERNAMES = {
	CENTERCROSS : 'centercross',
	JIHOKULINE  : 'jihokuline',
	LATLNGGRID  : 'latlnggrid',
	UTMGRID     : 'utmgrid',
	MINIMAP     : 'minimap',
	COCOTILE    : 'cocotile',
	CLICKMOVE   : 'clickmove',
	HIGHQUALITY : 'highquality',
	CONTEXTMENUOVERLAP : 'contextmenuoverlap'
};

CONFIG.QUERYPARAMETER = {};
CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CENTERCROSS ]= {
	prefix : 'c',
	settingName : 'centerCross'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.JIHOKULINE ] = {
	prefix : 'j',
	settingName : 'jihokuLine'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.LATLNGGRID ] = {
	prefix : 'l',
	settingName : 'latLngGrid'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.UTMGRID ] = {
	prefix : 'u',
	settingName : 'utmGrid'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.MINIMAP ] = {
	prefix : 'm',
	settingName : 'miniMap'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.COCOTILE ] = {
	prefix : 't',
	settingName : 'cocoTile'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CLICKMOVE ] = {
	prefix : 'v',
	settingName : 'clickMove'
};


CONFIG.HIDDENCONTROLPARAMETER = {
	INFOMENU : 'i',
	FUNCMENU : 'f',
	HEADER : 'h',
	CONTEXTMENU : 'c',
	BASEMAPSELECTOR : 'b',
	ALL : 'all'
};

CONFIG.DIALOGPARAMETER = {
	VIEWLISTDIALOG : 'v',
	LAYERTREEDIALOG : 'l',
	VIEWLISTHIDEALL : 'h'
};


// GeoJSON 独自パラメータ
CONFIG.GEOJSONSPECIALKEYS ={
	"_markerType": true,

	"_iconUrl": true,
	"_iconSize": true,
	"_iconAnchor": true,
	"_html": true,
	"_radius": true,

	"_className": true,
	"_stroke": true,
	"_radius": true,

	"_dashArray": true,
	"_lineCap": true,
	"_lineJoin": true,
	"_clickable": true,

	"_color": true,
	"_opacity": true,
	"_weight": true,
	"_fillColor": true,
	"_fillOpacity": true,
	"_weight": true

};

// 「地図」メニュー構築用設定
CONFIG.MAPMENU = {
	title : '情報',
	children : [
		{
			title : '表示中の情報',
			id : 'visible_layers',
			arrow : true
		},
		{
			title : '表示できる情報',
			id : 'additonal_layers',
			arrow : true
		},


		{
			title : '地理院地図について',
			arrow : true,
			childrenWidth:160,
			children : [
				{
					title : '利用規約',
					href : 'http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html'
				},
				{
					title : 'ヘルプ',
					href : 'http://portal.cyberjapan.jp/help/howtouse.html'
				},
				{
					title : '技術情報',
					href : 'http://portal.cyberjapan.jp/help/development.html'
				},
				{
					title : 'お知らせ（twitter）',
					href : 'https://twitter.com/gsi_cyberjapan'
				},
				{
					title : 'お問い合わせ',
					href : 'http://portal.cyberjapan.jp/help/query.html'
				},
				{
					title : '入手',
					arrow : false,
					childrenWidth:180,
					children : [
						{
							title : '基盤地図情報',
							href : 'http://fgd.gsi.go.jp/download/'
						},
						{
							title : '数値地図(オンライン)',
							href : 'http://net.jmc.or.jp/digital_data_gsiol.html'
						},
						{
							title : '数値地図(CD/DVD)',
							href : 'http://www.jmc.or.jp/data/index.html'
						},
						{
							title : '紙地図',
							href : 'http://www.jmc.or.jp/map/index.html'
						},
						{
							title : '空中写真',
							href : 'http://www.jmc.or.jp/photo/index.html'
						},
						{
							title : '国土地理院技術情報',
							href : 'http://www.gsi.go.jp/REPORT/TECHNICAL/technical.html'
						}
					]

				},
				{
					title : '地理院ホーム',
					href : 'http://www.gsi.go.jp/'
				}

			]
		}


	]
};

// 「機能」メニュー構築用設定
CONFIG.FUNCMENU = {
	title : '機能',
	children : [
		{
			title : '表示',
			arrow : true,
			childrenWidth:230,
			children : [
				{
					id : CONFIG.PARAMETERNAMES.CENTERCROSS,
					title : '中心十字線',
					typeA : 'check',
					defaultCheck : true
				},
				/*
				{
					id : CONFIG.PARAMETERNAMES.COCOTILE,
					title : 'ココタイルの使用',
					typeA : 'check',
					defaultCheck : true
				},
				*/
				{
					id : CONFIG.PARAMETERNAMES.LATLNGGRID,
					title : '緯経度グリッド',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.UTMGRID,
					title : 'UTMグリッド',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.JIHOKULINE,
					title : '磁北線',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.MINIMAP,
					title : '広域図',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.CLICKMOVE,
					title : 'クリックで移動',
					typeA : 'check',
					defaultCheck : true
				}/*,
				{
					id : CONFIG.PARAMETERNAMES.CONTEXTMENUOVERLAP,
					title : 'コンテキストメニューを地図に重ねて表示',
					typeA : 'check',
					defaultCheck : false
				}
				*/
			]
		},

		{
			title : 'ツール',
			arrow : true,
			childrenWidth:150,
			children : [
				{
					id : 'sakuzu',
					title : '作図・ファイル',
					arrow : true
				},
				{
					id : 'measure',
					title : '計測',
					arrow : true
				},
				{
					id : 'gps',
					title : '現在位置',
					arrow : true,
					checkCondition : function() { return GSI.GeoLocation.can; }
				},
				{
					title : '共有',
					arrow : true,
					childrenWidth:200,
					children : [
						{
							id : 'share_link',
							title : 'リンクを取得',
							arrow : true
						},
						{
							id : 'share_builtin',
							title : 'サイトに埋込',
							arrow : true
						},
						{
							id : 'share_file',
							title : '名前を付けて保存',
							arrow : true
						}
					]
				},
				{
					id : 'print',
					title : '印刷',
					arrow : true
				},
				{
					title : '他のウェブ地図',
					arrow : true,
					childrenWidth:160,
					children : [

						{
							title : 'Mapion',
							href : 'mapion'//'http://www.mapion.co.jp/m/{y}_{x}_{z}/?wgs=1'
						},
						{
							title : 'いつもNAVI',
							href : 'itsumonavi'//'http://www.its-mo.com/map/top_z/{y2}_{x2}_{z}/'
						}
					]
				}
			]
		},
		{
			title : '3D',
			arrow : true,
			href : 'gsi3d'//'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z={z}&lat={y}&lon={x}'
		}

	]
};


// リスト
CONFIG.DEFAULTIMAGE = {
	FILEICON : "image/map/file.png",
	TILEICON : "image/map/grid.png"

};


// 右ダブルクリック判定ミリ秒
CONFIG.RIGHTDBLCLICKINTERVAL = 500;

// 緯度経度グリッド　ズームレベル対応
CONFIG.LATLNGGRID = {
	CONDITION : [
		{ zoom : 2,  grid : 3600 * 40},
		{ zoom : 3,  grid : 3600 * 40},
		{ zoom : 4,  grid : 3600 * 20},
		{ zoom : 5,  grid : 3600 * 10},
		{ zoom : 6,  grid : 3600 * 5},
		{ zoom : 7,  grid : 3600 * 3},
		{ zoom : 8,  grid : 3600 * 2},
		{ zoom : 9,  grid : 3600 },
		{ zoom : 10, grid : 60 * 30 },
		{ zoom : 11, grid : 60 * 20 },
		{ zoom : 12, grid : 60 * 10 },
		{ zoom : 13, grid : 60 * 3 },
		{ zoom : 14, grid : 60 * 2 },
		{ zoom : 15, grid : 60 },
		{ zoom : 16, grid : 30 },
		{ zoom : 17, grid : 20 },
		{ zoom : 18, grid : 10 },
		{ zoom : 99, grid : 10 }
	]

};


// UTMグリッド　ズームレベル対応
CONFIG.UTMGRID = {
	CONDITION : [
		{ zoom : 7, grid : 'a'},          //  7以下 広域
		{ zoom : 10, grid : 100 * 1000 }, // 10以下 100km
		{ zoom : 11, grid : 20  * 1000 },
		{ zoom : 12, grid : 10  * 1000 },
		{ zoom : 13, grid : 5  * 1000 },
		{ zoom : 14, grid : 3  * 1000 },
		{ zoom : 15, grid : 1  * 1000 },
		{ zoom : 16, grid : 500 },
		{ zoom : 17, grid : 250 },
		{ zoom : 18, grid : 100 },
		{ zoom : 99, grid : 100 }
	]
};

CONFIG.BASETILES = [
	{
		id : 'std',
		title : '標準地図',
		url : 'http://{s}.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
		subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
		icon : 'image/map/tmb_bas_n.png',
		"legendUrl" : "http://cyberjapan.jp/legend/std.pdf",
		errorTileUrl : 'image/map/no-data-std.png',
		minZoom : 2
	},
	{
		id : 'pale',
		title : '淡色地図',
		url : 'http://{s}.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
		subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
		icon : 'image/map/tmb_pal_n.png',
		"legendUrl" : "http://cyberjapan.jp/legend/pale.pdf",
		errorTileUrl : 'image/map/no-data-pale.png',
		minZoom : 2
	},
	{
		id : 'blank',
		title : '白地図',
		url : 'http://{s}.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png',
		subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
		icon : 'image/map/icon_white.png',
		"legendUrl" : "",
		maxNativeZoom:14,
		errorTileUrl : 'image/map/no-data-blank.png',
		minZoom : 2
	},
	{
		id : 'english',
		title : 'Romanized',
		url : 'http://{s}.gsi.go.jp/xyz/english/{z}/{x}/{y}.png',
		subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
		icon : 'image/map/jaise.png',
		"legendUrl" : "http://cyberjapan.jp/legend/english.pdf",
		maxNativeZoom:11,
		errorTileUrl : 'image/map/no-data-english.png',
		minZoom : 2
	},
	{
		id : 'ort',
		title : '写真',
		url : 'http://{s}.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg',
		subdomains : [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
		icon : 'image/map/djbmo.png',
		"legendUrl" : "http://www.gsi.go.jp/gazochosa/gazochosa40001.html",
		maxNativeZoom:17,
		errorTileUrl : 'image/map/no-data-ort.png',
		minZoom : 2
	}

];


// サーバーサイドAPI
CONFIG.SERVERAPI = {};
CONFIG.SERVERAPI.HOSTNAME = 'portal.cyberjapan.jp';
CONFIG.SERVERAPI.BASE = 'http://portal.cyberjapan.jp/';
CONFIG.SERVERAPI.KML2JSONP = CONFIG.SERVERAPI.BASE  + 'site/mapuse4/kml2jsonp.php';
CONFIG.SERVERAPI.GETJSONP = CONFIG.SERVERAPI.BASE  + 'site/mapuse4/kml2jsonp.php';
//CONFIG.SERVERAPI.ACCESSCOUNTER = 'http://maps.gsi.go.jp/cgi-bin/CounterJson.php?id=001';
CONFIG.SERVERAPI.ACCESSCOUNTER = './cgi-bin/CounterJson.php?id=001';

CONFIG.SERVERAPI.INTERFACE = "http://portal.cyberjapan.jp/GsiJsLibrary/interface.php";

CONFIG.SERVERAPI.GETADDR = "http://portal.cyberjapan.jp/GsiJsLibrary/LonLatToLv01.php";
CONFIG.SERVERAPI.GETELEVATION = "http://cyberjapandata.gsi.go.jp/cgi-bin/getelevation.php";


CONFIG.SERVERAPI.SEARCH = "http://geocode.csis.u-tokyo.ac.jp/cgi-bin/simple_geocode.cgi";
CONFIG.SERVERAPI.SEARCH_SHISETU = "http://portal.cyberjapan.jp/GsiJsLibrary/shisetsu.php";
CONFIG.SERVERAPI.SEARCH_CHIMEI = "http://portal.cyberjapan.jp/GsiJsLibrary/chimei.php";


// 作図関連
CONFIG.SAKUZU = {

	SYMBOL : {
		URL: "http://cyberjapandata.gsi.go.jp/portal/sys/v4/symbols/",
		FILES:[
			'001.png', '002.png', '003.png', '004.png', '005.png', '006.png', '007.png', '008.png', '009.png', '010.png',
			'011.png', '012.png', '013.png', '014.png', '015.png', '016.png', '017.png', '018.png', '019.png', '020.png',
			'021.png', '022.png', '023.png', '024.png', '025.png', '026.png', '027.png', '028.png', '029.png', '030.png',
			'031.png', '032.png', '033.png', '034.png', '035.png', '036.png', '037.png', '038.png', '039.png', '040.png',
			'041.png', '042.png', '043.png', '044.png', '045.png', '046.png', '047.png', '048.png', '049.png', '050.png',
			'051.png', '052.png', '053.png', '054.png', '055.png', '056.png', '057.png', '058.png', '059.png', '060.png',
			'061.png', '062.png', '063.png', '064.png', '065.png', '066.png', '067.png', '068.png', '069.png', '070.png',
			'071.png', '072.png', '073.png', '074.png', '075.png', '076.png', '077.png', '078.png', '079.png', '080.png',
			'081.png', '082.png', '083.png', '084.png', '085.png', '086.png', '087.png', '088.png', '089.png', '090.png',
			'091.png', '092.png', '093.png', '094.png', '095.png', '096.png', '097.png', '098.png', '099.png', '100.png',
			'101.png', '102.png', '103.png', '104.png', '105.png', '106.png', '107.png', '108.png', '109.png', '110.png',
			'111.png', '112.png', '113.png', '114.png', '115.png', '116.png', '117.png', '118.png', '119.png', '120.png',
			'121.png', '122.png', '123.png', '124.png', '125.png', '126.png', '127.png', '128.png', '129.png', '130.png',
			'131.png', '132.png', '133.png', '134.png', '135.png', '136.png', '137.png', '138.png', '139.png', '140.png',
			'141.png', '142.png', '143.png', '144.png', '145.png', '146.png', '147.png', '148.png', '149.png', '150.png',
			'151.png', '152.png', '153.png', '154.png', '155.png', '156.png', '157.png', '158.png', '159.png', '160.png',
			'161.png', '162.png', '163.png', '164.png', '165.png', '166.png', '167.png', '168.png', '169.png', '170.png',
			'171.png', /*'172.GIF', '173.GIF', '174.GIF', '175.GIF', '176.GIF', '177.GIF', '178.GIF', '179.GIF',*/ '180.png',
			'181.png', '182.png', '183.png', '184.png', '185.png', '186.png', '187.png', '188.png',            '200.png',
			'201.png', '202.png', '203.png', '204.png', '205.png', '206.png', '207.png', '208.png', '209.png', '210.png',
			'211.png', '212.png', '213.png', '214.png', '215.png', '216.png', '217.png',
			'dot.png'
		],
		ICONSIZE : [20,20],
		ICONANCHOR : [10,10],
		DEFAULTICON : '080.png'
	}
};





/************************************************************************

  メソッド補完、追加等

************************************************************************/

jQuery.extend({
	stringify : function stringify(obj) {
		var t = typeof (obj);
		if (t != "object" || obj === null) {
			// simple data type
			if (t == "string") obj = '"' + obj + '"';
			return String(obj);
		} else {
			// recurse array or object
			var json = [], arr = (obj && obj.constructor == Array);

			for (var n in obj) {
				var v = obj[n];
				t = typeof(v);
				if (obj.hasOwnProperty(n)) {
					if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = jQuery.stringify(v);
					json.push((arr ? "" : '"' + n + '":') + String(v));
				}
			}
			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	}
});

try
{
window.console = window.console || {log:function(){}};
}catch(e){}

try
{
window.JSON || ( window.JSON = {
	parse : function( src )
	{
		return $.parseJSON( src );
	},

	stringify : function(obj)
	{
		return $.stringify( obj );
	}
});

}
catch(e)
{}

// ie8 array のmap, filterメソッド追加
try
{
(function(fn){
    if (!fn.map) fn.map=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined)r[i]=f(this[i]);return r;}
    if (!fn.filter) fn.filter=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined&&f(this[i]))r[i]=this[i];return r;}
})(Array.prototype);
}
catch(e)
{}

// leafletのsetOpacityがIE8で利かないためjQueryに任せる
L.DomUtil.setOpacity = function(el,opacity)
{
	$(el).css({opacity:opacity} );
};





/************************************************************************

  Proj4js

************************************************************************/
Proj4js.defs["EPSG:3097"] = "+proj=utm +zone=51 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone51
Proj4js.defs["EPSG:3098"] = "+proj=utm +zone=52 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone52
Proj4js.defs["EPSG:3099"] = "+proj=utm +zone=53 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone53
Proj4js.defs["EPSG:3100"] = "+proj=utm +zone=54 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone54
Proj4js.defs["EPSG:3101"] = "+proj=utm +zone=55 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		//UTM Zone55
Proj4js.defs["SR-ORG:1235"] = "+proj=utm +zone=56 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";	//UTM Zone56
Proj4js.defs['EPSG:4301'] = "+proj=longlat +ellps=bessel +towgs84=-146.336,506.832,680.254,0,0,0,0 +no_defs";		//日本測地系（経緯度座標）








/************************************************************************

  window読み込み時

************************************************************************/
function initialize()
{

	//if ( GSI.Utils.Browser.ie && GSI.ClientMode.baseUrl && GSI.ClientMode.baseUrl != '' )
	//{
	//	CONFIG.FORCECORS = false;
	//}

	// パラメータ解析
	GSI.GLOBALS.queryParams = new GSI.QueryParams({ queryString: GSI.ClientMode.queryString });
	var ctrlSetting = GSI.GLOBALS.queryParams.getControlSetting();
	var viewSetting = GSI.GLOBALS.queryParams.getViewSetting();

	// ハッシュ解析
	var hashPosition = L.Hash.parseHash( location.hash );

	// マップオブジェクト生成
	GSI.GLOBALS.map = GSI.map('map',
		{
			zoomsliderControl: false,
			zoomControl: false,
			attributionControl : false,
			//maxBounds : L.latLngBounds(L.latLng(-3600, -3600), L.latLng(3600, 3600)),
			worldCopyJump : false,
			inertiaMaxSpeed : 1000
		});

	// ハッシュ
	GSI.GLOBALS.hash = new L.Hash(GSI.GLOBALS.map, {useReplace:( GSI.ClientMode .location ? false : true )});

	// スクロール後に正しい位置へ移動
	GSI.GLOBALS.map.on( 'moveend', function() {
		var center = GSI.GLOBALS.map.getCenter();
		if ( center.lat < -88 || center.lat > 88 || center.lng < -180 || center.lng > 180)
			GSI.GLOBALS.map.panTo( center.wrap(), {animate: false} );
	});


	// スペース用
	GSI.GLOBALS.bottomRightSpacer = ( new GSI.Control.Spacer({position:"bottomright"}) ).addTo( GSI.GLOBALS.map );
	GSI.GLOBALS.bottomLeftSpacer = ( new GSI.Control.Spacer() ).addTo( GSI.GLOBALS.map );

	// attributionControlを追加
	//GSI.GLOBALS.map.attributionControl = (new L.Control.Attribution()).addTo(GSI.GLOBALS.map);

	// アクセスカウンター
	if ( CONFIG.USEACCESSCOUNTER )
	{
		( new GSI.Control.AccessCounter({url:CONFIG.SERVERAPI.ACCESSCOUNTER, refreshInterval:0}) ).addTo(GSI.GLOBALS.map);
	}
	L.control.scale({imperial:false}).addTo(GSI.GLOBALS.map);

	GSI.GLOBALS.map.setView(
		GSI.GLOBALS.queryParams.getPosition(
			hashPosition && hashPosition.center ? hashPosition.center : CONFIG.DEFAULT.CENTER
		),
		GSI.GLOBALS.queryParams.getZoom(
			hashPosition && hashPosition.zoom ? hashPosition.zoom : CONFIG.DEFAULT.ZOOM
		)
	);



	GSI.GLOBALS.mapLayerList = new GSI.MapLayerList( GSI.GLOBALS.map );


	// ベースの地図
	var baseLayerSelector = new GSI.Control.BaseLayerSelector( GSI.GLOBALS.map, CONFIG.BASETILES,
		{
			defaultMap : GSI.GLOBALS.queryParams.getBaseMap(),
			visible : ctrlSetting.baseMapSelector.visible,
			'position' : 'bottomleft',
			onChange : function(idx) { GSI.GLOBALS.baseLayer.setActiveIndex(idx); },
			onGrayScaleChange : function(on) { GSI.GLOBALS.baseLayer.setGrayScale(on); }
		}
	).addTo(GSI.GLOBALS.map);


	GSI.GLOBALS.baseLayer = baseLayerSelector.getBaseLayer();



	GSI.GLOBALS.onoffObjects = {};
	// 中心マーク
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.CENTERCROSS ]
		= { obj : new GSI.CenterCross( GSI.GLOBALS.map,{ visible: viewSetting.centerCross} ), setter : 'setVisible', getter : 'getVisible' };
	// 磁北線
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.JIHOKULINE ]
		= { obj : new GSI.JihokuLine( GSI.GLOBALS.map,{ visible: viewSetting.jihokuLine, num: CONFIG.JIHOKULINECOUNT, lineStyle: CONFIG.JIHOKULINESTYLE } ), setter : 'setVisible', getter : 'getVisible' };
	// 緯度経度グリッド
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.LATLNGGRID ]
		= { obj : new GSI.LatLngGrid( GSI.GLOBALS.map, { condition: CONFIG.LATLNGGRID.CONDITION,visible: viewSetting.latLngGrid, lineStyle:CONFIG.LATLNGGRIDSTYLE, labelClassName:CONFIG.LATLNGGRIDLABELCLASSNAME  } ), setter : 'setVisible', getter : 'getVisible' };
	// UTMグリッド
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.UTMGRID ]
		= { obj : new GSI.UTM.Grid( GSI.GLOBALS.map,{ condition: CONFIG.UTMGRID.CONDITION,visible: viewSetting.utmGrid, lineStyle:CONFIG.UTMGRIDSTYLE, labelClassName:CONFIG.UTMGRIDLABELCLASSNAME} ), setter : 'setVisible', getter : 'getVisible' };
	// ミニマップ
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.MINIMAP ]
		= { obj : new GSI.MiniMap( GSI.GLOBALS.map,{ visible: viewSetting.miniMap} ), setter : 'setVisible', getter : 'getVisible' };




	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.HIGHQUALITY]
		= { obj : GSI.GLOBALS.baseLayer, setter : 'setHighQuality', getter : 'getHighQuality' };



	// ココタイル
	GSI.GLOBALS.cocoTileLayer = new  GSI.COCOTileLayer( GSI.GLOBALS.map, 'http://{s}.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', {
		subdomains: [ 'cyberjapandata-t1', 'cyberjapandata-t2', 'cyberjapandata-t3' ],
		visible: CONFIG.COCOTILEVISIBLE,
		onLoad : function(tileIdList) { GSI.GLOBALS.layersJSON.setHasTileList( tileIdList ); }
	});

	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.COCOTILE]
		= { obj : GSI.GLOBALS.cocoTileLayer, setter : 'setVisible', getter : 'getVisible' };

	// クリックで移動
	GSI.GLOBALS.mapMouse = new GSI.MapMouse( GSI.GLOBALS.map, { dblclickInterval : CONFIG.RIGHTDBLCLICKINTERVAL} );
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.CLICKMOVE ]
		= { obj : GSI.GLOBALS.mapMouse, setter : 'setClickMoveVisible', getter  : 'getClickMoveVisible' };


	// ヘッダー
	GSI.GLOBALS.header = new GSI.Header( GSI.GLOBALS.map,
		{
			visible : ctrlSetting.header.visible,
			message : ( CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.MESSAGE ? CONFIG.TOPMESSAGE.MESSAGE : null )
		} );

	GSI.GLOBALS.footer = new GSI.Footer( GSI.GLOBALS.map, GSI.GLOBALS.bottomLeftSpacer, GSI.GLOBALS.bottomRightSpacer, "#map", "#footerbtn", "#footer", "image/system/footer_up.png", "image/system/footer_down.png",
		{ visible : ctrlSetting.contextMenu.visible, overlap:true } );

	// フッター
	/*
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CONTEXTMENUOVERLAP]
		= { obj : GSI.GLOBALS.footer, setter : 'setOverlap', getter : 'getOverlap' };
	*/



	// 地図メニュー
	new GSI.MapMenu ( GSI.GLOBALS.map, CONFIG.MAPMENU, {
		visible : ctrlSetting.infoMenu.visible,
		rootEffect : CONFIG.EFFECTS.MENU.ROOT,
		otherEffect : CONFIG.EFFECTS.MENU.OTHER,
		onMenuItemClick : function(id) {
			if ( id == "additonal_layers" )
			{
				// 追加可能な情報画面表示
				GSI.GLOBALS.layerTreeDialog.show();
			}
			else if ( id == "visible_layers" )
			{
				// 表示中の情報画面表示
				GSI.GLOBALS.viewListDialog.show();
			}
		}
	} );

	// 機能メニュー
	new GSI.MapMenu ( GSI.GLOBALS.map, CONFIG.FUNCMENU, {
		visible : ctrlSetting.funcMenu.visible,
		position : 'right',
		rootEffect : CONFIG.EFFECTS.MENU.ROOT,
		otherEffect : CONFIG.EFFECTS.MENU.OTHER,
		getCheckState : function( id, defaultState )
		{
			if ( GSI.GLOBALS.onoffObjects[ id ] ) return GSI.GLOBALS.onoffObjects[ id]['obj'][GSI.GLOBALS.onoffObjects[id]['getter']]();
			else defaultState;
		},
		onCheckItemClick : function( id, checked )
		{
			if ( GSI.GLOBALS.onoffObjects[ id ] ) GSI.GLOBALS.onoffObjects[ id]['obj'][GSI.GLOBALS.onoffObjects[id]['setter']]( checked );
		},
		onMenuItemClick : function( id )
		{
			var windowSize = GSI.Utils.getScreenSize();
			switch ( id )
			{
			case 'measure':
			// 計測ダイアログ
				if ( GSI.GLOBALS.sakuzuDialog && GSI.GLOBALS.sakuzuDialog.getVisible() )
				{
					alert( '作図中は計測出来ません' );
					return;
				}
				if ( !GSI.GLOBALS.measureDialog )
					GSI.GLOBALS.measureDialog = new GSI.MeasureDialog( GSI.GLOBALS.map,GSI.GLOBALS.mapMouse,{ left :windowSize.w - 300, top :40,effect : CONFIG.EFFECTS.DIALOG } );
				GSI.GLOBALS.measureDialog.show();

				break;


			case 'sakuzu':
			// 作図ダイアログ
				if ( GSI.GLOBALS.measureDialog && GSI.GLOBALS.measureDialog.getVisible() )
				{
					GSI.GLOBALS.measureDialog.hide();
				}
				if ( !GSI.GLOBALS.sakuzuDialog )
					GSI.GLOBALS.sakuzuDialog = new GSI.SakuzuDialog(
						GSI.GLOBALS.map,
						GSI.GLOBALS.sakuzuList,
						{
							width:350, left :windowSize.w - 370, top :45,
							effect : CONFIG.EFFECTS.DIALOG,
							resizable : ( GSI.Utils.Browser.isSmartMobile ? false : "e,w" )
						}
					);
				GSI.GLOBALS.sakuzuDialog.show();

				break;


			case 'gps':
			// 現在位置取得
				if (!GSI.GLOBALS.geoLocation) GSI.GLOBALS.geoLocation = new GSI.GeoLocation(GSI.GLOBALS.map);
				GSI.GLOBALS.geoLocation.getLocation();

				break;


			case 'share_file':
			case 'share_link':
			case 'share_builtin':
			// 共有
				if (!GSI.GLOBALS.shareDialog) GSI.GLOBALS.shareDialog = new GSI.ShareDialog(
					GSI.GLOBALS.map, GSI.GLOBALS.pageStateManager, GSI.GLOBALS.layersJSON, GSI.GLOBALS.sakuzuList,
					{ width:350, left : 'center', top: 45, effect : CONFIG.EFFECTS.DIALOG, resizable: false } );
				var mode = GSI.ShareDialog.MODE.LINK;
				if ( id == 'share_file' ) mode = GSI.ShareDialog.MODE.FILE;
				if ( id == 'share_builtin' ) mode = GSI.ShareDialog.MODE.BUILTIN;
				GSI.GLOBALS.shareDialog.show(mode);

				break;


			case 'print':
			// 印刷
				if (!GSI.GLOBALS.pagePrinter) GSI.GLOBALS.pagePrinter =
					new GSI.PagePrinter(
						GSI.GLOBALS.map, GSI.GLOBALS.baseLayer,
						GSI.GLOBALS.mapLayerList,
						GSI.GLOBALS.sakuzuList,
						{
							latLngGrid : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.LATLNGGRID ].obj ,
							utmGrid : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.UTMGRID ].obj,
							jihokuLine : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.JIHOKULINE ].obj
						} );
				GSI.GLOBALS.pagePrinter.show();
				break;

			}

		}
	});
	// ズームコントロール
	GSI.GLOBALS.map.addControl(new L.Control.Zoom({position:"bottomright"}));


	//var screenSize = GSI.Utils.getScreenSize();

	// 表示中レイヤーダイアログ
	var left = 90;
	var top = 65;
	var dlgVisible = GSI.GLOBALS.queryParams.getViewListDialogVisible();
	if ( dlgVisible )
	{
		left = 8;
		top = GSI.GLOBALS.header.getHeight() + 48;
	}
	GSI.GLOBALS.viewListDialog = new GSI.ViewListDialog  (GSI.GLOBALS.map,GSI.GLOBALS.mapLayerList,GSI.GLOBALS.cocoTileLayer,
		{
			left :left, top :top, width:320,
			visible: dlgVisible,
			effect : CONFIG.EFFECTS.DIALOG, resizable: ( GSI.Utils.Browser.isSmartMobile ? false : "all" )
		});


	// 表示可能レイヤーダイアログ
	left = 100;
	top = 80;
	dlgVisible = GSI.GLOBALS.queryParams.getLayerTreeDialogVisible();
	if ( dlgVisible )
	{
		left = 8;
		top = GSI.GLOBALS.header.getHeight() + 48;
	}

	GSI.GLOBALS.layerTreeDialog = new GSI.LayerTreeDialog  (GSI.GLOBALS.mapLayerList,GSI.GLOBALS.cocoTileLayer,
		{
			left :left, top :top, width:320,
			visible: dlgVisible,
			effect : CONFIG.EFFECTS.DIALOG, resizable: ( GSI.Utils.Browser.isSmartMobile ? false : "all" ), //"all" ,
			currentPath : GSI.GLOBALS.queryParams.getCurrentPath()
		});


	// 検索ダイアログ
	if ( ctrlSetting.header.visible )
	{
		GSI.GLOBALS.searchDialog = new GSI.SearchResultDialog(GSI.GLOBALS.map, { left :8, top :40, effect : CONFIG.EFFECTS.DIALOG, resizable: "all" });
		new GSI.Searcher(GSI.GLOBALS.map,GSI.GLOBALS.searchDialog,
			"#search_f","#query", "#search_result", { visible : ctrlSetting.header.visible });
	}





	// 共有作図情報がある場合ダイアログ生成
	if (
		( GSI.ClientMode.sakuzu && GSI.ClientMode.sakuzu.length > 0 )
	||
		( GSI.ClientMode.sakuzuFileList && GSI.ClientMode.sakuzuFileList.length > 0 )
	)
	{
		/*
		var windowSize = GSI.Utils.getScreenSize();

		GSI.GLOBALS.sakuzuDialog = new GSI.SakuzuDialog( GSI.GLOBALS.map,GSI.GLOBALS.mapMouse,{ width:350, left :windowSize.w - 370, top :45,effect : CONFIG.EFFECTS.DIALOG, sakuzu: GSI.ClientMode.sakuzu, sakuzuFileList : GSI.ClientMode.sakuzuFileList } );
		*/


	}
	GSI.GLOBALS.sakuzuList =  new GSI.SakuzuList(GSI.GLOBALS.map,GSI.GLOBALS.mapMouse,{
		url : CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.DEFAULTICON,
		size : CONFIG.SAKUZU.SYMBOL.ICONSIZE,
		anchor : CONFIG.SAKUZU.SYMBOL.ICONANCHOR
	}, { defaultList : GSI.ClientMode.sakuzuList} );

	// layers.js読み込み
	GSI.GLOBALS.layersJSON = new GSI.LayersJSON( {
		layers : CONFIG.layers,
		layersJSON : GSI.ClientMode.LayerJS,
		visibleLayers : GSI.GLOBALS.queryParams.getLayers()
	});
	GSI.GLOBALS.layersJSON.on("load", function(e) {

 		GSI.GLOBALS.layerTreeDialog.setTree( e.tree );
		var layers = [];
		for ( var i=0; i<e.visibleLayers.length; i++ )
		{
			var l = e.visibleLayers[i];

			if ( l && l.info )layers.push( l.info );

		}

		GSI.GLOBALS.mapLayerList.appendList( layers, GSI.GLOBALS.queryParams.getViewListHideAll() );
 		GSI.GLOBALS.cocoTileLayer.refresh();
 	} );

	GSI.GLOBALS.layersJSON.load();




	// 画面サイズの調整
	var adjustWindow = function() {
		var size = GSI.Utils.getScreenSize();
		GSI.GLOBALS.header.refresh( size );
		$("#map" ).css( { top : GSI.GLOBALS.header.getHeight() + 'px' });
		GSI.GLOBALS.map.invalidateSize();
	};


	GSI.GLOBALS.header.on( 'topmessagechange', adjustWindow );
	$( window ).resize( adjustWindow );
	adjustWindow();


	// ページの状態管理
	GSI.GLOBALS.pageStateManager = new GSI.PageStateManager(
		GSI.GLOBALS.map, GSI.GLOBALS.baseLayer, GSI.GLOBALS.onoffObjects,
		GSI.GLOBALS.mapLayerList, GSI.GLOBALS.layerTreeDialog
	);

	//setTimeout(scrollTo( 0, 1), 0);
	//document.body.requestFullscreen();
}
//jQuery.event.add(window, "load", initialize );
$(document).ready( initialize );




/************************************************************************

GSI.Map

************************************************************************/
GSI.Map = L.Map.extend( {
	_limitCenter: function (center, zoom, bounds) {

		if (!bounds) { return center; }
		/*
		var newCenter = L.latLng( center.lat, center.lng );
		if ( newCenter.lat < bounds.getSouth() ) newCenter.lat = bounds.getSouth();
		if ( newCenter.lat > bounds.getNorth() ) newCenter.lat = bounds.getNorth();
		if ( newCenter.lng < bounds.getWest() ) newCenter.lng = bounds.getWest();
		if ( newCenter.lng > bounds.getEast() ) newCenter.lng = bounds.getEast();

		console.log( center );
		console.log( newCenter );
		return newCenter;
		*/

		var centerPoint = this.project(center, zoom),
			viewHalf = this.getSize().divideBy(2),
			viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
			offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		var result = this.unproject(centerPoint.add(offset), zoom);
		//console.log( result );

		return result;

	},

	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
			newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	}
} );

GSI.map = function (id, options) {
	return new GSI.Map(id, options);
};




/************************************************************************

GSI.PagePrinter

************************************************************************/
L.Path.prototype.onRemove = function(map)
{
	map._pathRoot.removeChild(this._container);

	// Need to fire remove event before we set _map to null as the event hooks might need the object
	this.fire('remove');
	this._map = null;
	//if (L.Browser.vml) {
		this._container = null;
		this._stroke = null;
		this._fill = null;
	//}

	map.off({
		'viewreset': this.projectLatlngs,
		'moveend': this._updatePath
	}, this);
};

GSI.PagePrinter = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {},

	initialize : function(map,baseLayer, mapLayerList, sakuzuList, options )
	{
		this._originalMap = map;
		this._originalBaseLayer = baseLayer;
		this._mapLayerList = mapLayerList;
		this._sakuzuList = sakuzuList;


		options = L.setOptions(this, options);

	},

	show : function(sakuzuDialog)
	{

		this._sakuzuDialog = sakuzuDialog;

		if ( !this._container ) this._create();

		this._initialize();
	},

	hide : function()
	{

		var tileList = this._mapLayerList.getTileList();

		for ( var i=tileList.length-1; i>=0; i-- )
		{
			if ( tileList[i]._printInfo._visible )
			{
				this._map.removeLayer( tileList[i]._visibleInfo.layer );
				this._originalMap.addLayer ( tileList[i]._visibleInfo.layer );
			}
			tileList[i]._printInfo = null;
		}

		var list = this._mapLayerList.getList();
		for ( var i=list.length-1; i>=0; i-- )
		{
			if ( list[i]._printInfo._visible )
			{
				this._map.removeLayer( list[i]._visibleInfo.layer );
				this._originalMap.addLayer ( list[i]._visibleInfo.layer );
			}
			list[i]._printInfo = null;
		}

		// 作図
		if ( this._sakuzuList )
		{
			this._sakuzuList.eachItems( L.bind(
				function(item){
					if ( !item.getVisible() ) return;

					this._map.removeLayer ( item._layer );
					this._originalMap.addLayer( item._layer );
				},
			this ) );
		}

		this._container.fadeOut('fast', L.bind( function(){

			this._map.remove();
			this._map = null;
		}, this ) );

	},

	_initialize : function()
	{

		var paperSizeArr = this._paperSizeSelect.val().split( ',' );

		var paperSizeVal = paperSizeArr[0];
		var hq = ( paperSizeArr.length >= 2 && paperSizeArr[1] == 'hq' ? true: false );

		var paperSize = this.printSize2MapSize( paperSizeVal );

		this._mapContainer.css( { width:paperSize.w + 'px', height: paperSize.h + 'px' } );

		this._map = L.map(this._mapContainer[0],
		{
			zoomsliderControl: false,
			zoomControl: false,
			attributionControl : false
		});
		L.control.scale({imperial:false}).addTo(this._map);

		this._baseLayer = new GSI.BaseLayer(CONFIG.BASETILES, this._originalBaseLayer.getActiveId(), {
			errorTileUrl : 'image/map/no-data.png',
			attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>国土地理院</a>"
		});

		this._baseLayer.setHighQuality( hq );
		this._baseLayer.addTo(this._map);

		this._map.setView( this._originalMap.getCenter(), this._originalMap.getZoom() );
		/*
		this._originalMap.eachLayer( L.bind( function( layer ) {
			layer.addTo( this._map );

		}, this ) );
		*/



		// タイル
		var tileList = this._mapLayerList.getTileList();

		for ( var i=tileList.length-1; i>=0; i-- )
		{
			tileList[i]._printInfo = {};
			var visible = ( tileList[i]._visibleInfo._isHidden ? false : true );

			this._originalMap.removeLayer ( tileList[i]._visibleInfo.layer );

			if ( visible )
			{
				tileList[i]._printInfo._visible = true;
				this._map.addLayer( tileList[i]._visibleInfo.layer );
			}
		}


		// ファイル
		var list = this._mapLayerList.getList();

		for ( var i=list.length-1; i>=0; i-- )
		{
			list[i]._printInfo = {};
			var visible = ( list[i]._visibleInfo._isHidden ? false : true );

			this._originalMap.removeLayer ( list[i]._visibleInfo.layer );

			if ( visible )
			{
				list[i]._printInfo._visible = true;
				this._map.addLayer( list[i]._visibleInfo.layer );
			}

		}


		// 作図
		if ( this._sakuzuList )
		{
			this._sakuzuList.eachItems( L.bind(
				function(item){
					if ( !item.getVisible() ) return;

					this._originalMap.removeLayer ( item._layer );
					this._map.addLayer( item._layer );
				},
			this ) );
		}


		// latLngGrid
		if ( this.options.latLngGrid.getVisible() )
		{
			new GSI.LatLngGrid( this._map, {
				condition: CONFIG.LATLNGGRID.CONDITION,
				visible: true,
				lineStyle:CONFIG.LATLNGGRIDSTYLE,
				labelClassName:CONFIG.LATLNGGRIDLABELCLASSNAME
			} );
		}

		// utmGrid
		if ( this.options.utmGrid.getVisible() )
		{
			new GSI.UTM.Grid( this._map, {
				condition: CONFIG.UTMGRID.CONDITION,
				visible: true,
				lineStyle:CONFIG.UTMGRIDSTYLE,
				labelClassName:CONFIG.UTMGRIDLABELCLASSNAME
			} );
		}

		// jihokuLine
		if ( this.options.jihokuLine.getVisible() )
		{
			new GSI.JihokuLine( this._map,{
				visible: true,
				num: CONFIG.JIHOKULINECOUNT,
				lineStyle: CONFIG.JIHOKULINESTYLE
			} );
		}


		this._container.fadeIn('fast', L.bind( function(){
			this._map.invalidateSize(false);
		}, this ) );
	},

	_paperSizeChage : function()
	{
		var paperSizeArr = this._paperSizeSelect.val().split( ',' );

		var paperSizeVal = paperSizeArr[0];
		var hq = ( paperSizeArr.length >= 2 && paperSizeArr[1] == 'hq' ? true: false );
		this._baseLayer.setHighQuality( hq );
		var paperSize = this.printSize2MapSize( paperSizeVal );

		this._mapContainer.css( { width:paperSize.w + 'px', height: paperSize.h + 'px' } );
		this._map.invalidateSize(true);
	},

	_qualityChange : function()
	{
		this._baseLayer.setHighQuality( this._qualityCheck.is( ':checked' )  );
	},

	_create : function()
	{
		this._container = $( '<div>' ).addClass( 'gsi_pageprinter' );//.click( L.bind( function(){this.hide();},this) );

		this._headerContainer = $( '<div>' ).addClass( 'header_container' );
		this._mapContainer = $( '<div>' ).addClass( 'map_container' );

		//this._headerContainer.append( $( '<div>' ).css({'height':'12px'}).addClass( 'no_print' ) );

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );
		var td = null;

		// タイトル

		td = $( '<td>' );
		td.append( $( '<img>' ).attr( { 'src':'image/print/title.png'} ) ).css( { 'text-align':'left'} );
		tr.append( td );


		// サイズ選択
		td = $( '<td>' ).css( {width:"240px"} );
		this._paperSizeSelect = $( '<select>' ).addClass( 'no_print' );
		this._paperSizeSelect.append( $('<option>').html("A4縦(標準)").val("A4_portrait" ) );
		this._paperSizeSelect.append( $('<option>').html("A4縦(高画質)").val("A4_portrait,hq" ) );
		this._paperSizeSelect.append( $('<option>').html("A4横(標準)").val("A4_landscape" ) );
		this._paperSizeSelect.append( $('<option>').html("A4横(高画質)").val("A4_landscape,hq" ) );
		this._paperSizeSelect.append( $('<option>').html("A3縦(標準)").val("A3_portrait" ) );
		this._paperSizeSelect.append( $('<option>').html("A3縦(高画質)").val("A3_portrait,hq" ) );
		this._paperSizeSelect.append( $('<option>').html("A3横(標準)").val("A3_landscape" ) );
		this._paperSizeSelect.append( $('<option>').html("A3横(高画質)").val("A3_landscape,hq" ) );
		this._paperSizeSelect[0].selectedIndex = 0;
		this._paperSizeSelect.change( L.bind( this._paperSizeChage, this ) );
		td.append( $( '<span>' ).html( '用紙サイズ：' ).addClass( 'no_print' ));
		td.append( this._paperSizeSelect );
		tr.append( td );

		// 画質
		/*
		td = $( '<td>' ).css( {width:"64px"} );
		this._qualityCheck  = $( '<input>' ).attr( {"type":"checkbox"} ).addClass( 'no_print' ).click( L.bind( this._qualityChange, this ) );
		var label  = $( '<label>' ).addClass( 'no_print' );
		label.append( this._qualityCheck );
		label.append( $( '<span>' ).html( '高画質' ) );
		td.append( label );
		tr.append( td );
		*/

		// 印刷ボタン
		td = $( '<td>' ).css( {width:"64px"} );
		var printBtn  = $( '<button>' ).html( '印刷' ).addClass( 'no_print' ).click( L.bind( this.print, this ) );
		td.append( printBtn );
		tr.append( td );


		// 戻るボタン
		td = $( '<td>' ).css( {width:"120px"} );
		var backBtn  = $( '<button>' ).html( '元の画面に戻る' ).addClass( 'no_print' ).click( L.bind( this.hide, this ) );
		td.append( backBtn );
		tr.append( td );

		// 留意事項
//		td = $( '<td>' );
//		var a  = $( '<a>' ).html( '※留意事項' ).addClass( 'no_print' )
//			.attr( {"href": "http://portal.cyberjapan.jp/help/faq/print01.pdf", "target":"_blank"} ) ;
//
//
//		td.append( a );
//		tr.append( td );


		tbody.append( tr );
		table.append( tbody );

		this._headerContainer.append( table );
		this._container.append( this._headerContainer );
		this._container.append( this._mapContainer );

		//this._container.append( $( '<div>' ).css({'height':'20px'}).addClass( 'no_print' ) );
		this._container.hide();
		$( document.body) .append( this._container );
	},


	printSize2MapSize : function(size)
	{
		return CONFIG.PAPERSIZE[ size ];
		/*
		switch (size)
		{
		case "A4_portrait":
			//A4縦印刷
			return {w:650,h:900};
			break;

		case "A4_landscape":
			//A4横印刷
			return {w:950,h:550};
			break;

		case "A3_portrait":
			//A3縦印刷
			return {w:950,h:1350};
			break;

		case "A3_landscape":
			//A3横印刷
			return {w:1400,h:900};
			break;
		}
		*/
	},

	print : function()
	{
		window.print();
	}
} );


/************************************************************************

GSI.PageStateManager

************************************************************************/
GSI.PageStateManager = L.Class.extend( {


	initialize : function ( map, baseLayer, onOffObjects, mapLayerList, layerTreeDialog )
	{
		this._map = map;
		this._onOffObjects = onOffObjects;
		this._baseLayer = baseLayer;
		this._mapLayerList= mapLayerList;
		this._layerTreeDialog= layerTreeDialog;
	},

	getPositionQueryString : function()
	{
		var center = this._map.getCenter().wrap();
		var zoom = this._map.getZoom();

		return "ll="
			+ ( Math.round( center.lat * 1000000 ) / 1000000 ) + ',' + ( Math.round( center.lng * 1000000 ) / 1000000 )
			+ '&z=' + zoom;

	},


	getCurrentPathQueryString : function()
	{
		var path = this._layerTreeDialog.getCurrentPath();
		return ( path && path != '' ? 'cd=' + encodeURIComponent( path ) : '' );
	},

	getBaseLayerQueryString : function()
	{
		return "base=" + encodeURIComponent( this._baseLayer.getActiveId() );
	},

	getLayersQueryString : function( options )
	{
		if ( !options )options = {};

		var result = '';

		var tileIdList = [];
		if ( !options.noTile )
		{
			var tileList = this._mapLayerList.getTileList();

			for ( var i=0; i<tileList.length; i++ )
				tileIdList.push( tileList[i] );

		}

		for ( var i=tileIdList.length-1; i>=0; i-- )
		{
			var opacity = ( tileIdList[i]._visibleInfo && tileIdList[i]._visibleInfo.opacity ? tileIdList[i]._visibleInfo.opacity : 1 );
			result += ( result !='' ? '|' : '' ) +tileIdList[i].id + ( opacity != 1 ? ',' + opacity : '');
		}

		var idList = [];
		if ( !options.noList )
		{
			var list = this._mapLayerList.getList();

			for ( var i=0; i<list.length; i++ )
				idList.push( list[i] );

		}
		for ( var i=idList.length-1; i>=0; i-- )
		{
			var opacity = ( idList[i]._visibleInfo && idList[i]._visibleInfo.opacity ? idList[i]._visibleInfo.opacity : 1 );
			result += ( result !='' ? '|' : '' ) +idList[i].id + ( opacity != 1 ? ',' + opacity : '');
		}

		if ( result != '' )
		{
			return "ls=" + encodeURIComponent( result );
		}
		else
		{
			return "";
		}
	},

	getViewSettingVisible : function( key )
	{

		var target = this._onOffObjects[key];
		if ( !target ) return false;
		return target.obj[target.getter]();
	},

	getQueryParams : function( options )
	{
		if ( !options ) options = {};
		var result = {};


		// hc
		if ( !options.hcList) options.hcList = [];
		var hiddenControl = options.hcList.join('');

		if ( hiddenControl != '' ) result.hc = hiddenControl;


		// vs
		if ( !options.vsInfo ) options.vsInfo = {};
		if ( !options.vsInfo.skips ) options.vsInfo.skips = {};
		if ( !options.vsInfo.visibles ) options.vsInfo.visibles = {};

		var vsInfo = options.vsInfo;

		var viewSetting = '';

		for ( var key in CONFIG.QUERYPARAMETER )
		{
			var target = this._onOffObjects[key];
			var param = CONFIG.QUERYPARAMETER[ key ];
			if ( !param || !target || vsInfo.skips[key] ) continue;

			if ( vsInfo.visibles[key] == true || vsInfo.visibles[key] == false )
			{
				viewSetting += param.prefix + ( vsInfo.visibles[key] ? '1' : '0' );
			}
			else
			{
				if ( target.obj[target.getter]() )
				{
					viewSetting += param.prefix + '1';
				}
				else
				{
					viewSetting += param.prefix + '0';
				}
			}

		}

		if ( viewSetting != '' )
		{
			result.vs = viewSetting;
		}


		// d
		var visibleDialogSetting = '';

		if ( !options.visibleDialogs) options.visibleDialogs = {};
		for ( var key in options.visibleDialogs )
		{
			if ( options.visibleDialogs[ key ] )
			{
				visibleDialogSetting += key;
			}
		}


		if ( visibleDialogSetting != '' )
		{
			result.d = visibleDialogSetting;
		}

		return result;
	}
} );




/************************************************************************

GSI.QueryParams
	GETパラメータ||ハッシュ

	ll 10進経度,10進経度
	z  ズームレベル
	base ベース
	hc 隠す機能
	vs 表示設定の値
	ls 表示するレイヤー
	skz 作図レイヤー

************************************************************************/


GSI.QueryParams = L.Class.extend( {


	_controlSetting : {
		infoMenu:{visible:true},
		funcMenu:{visible:true},
		header:{visible:true},
		contextMenu:{visible:true},
		baseMapSelector:{visible:true}
	},
	_viewSetting : {
		centerCross : true,
		latLngGrid : false,
		utmGrid : false,
		jihokuLine : false,
		miniMap : false
	},

	_layers : [],

	_currentPath : null,

	_viewListDialogVisible : false,
	_layerTreeDialogVisible : false,

	initialize : function(options)
	{

		this.params = this._parse(
			( options && options.queryString ? options.queryString : window.location.search )
		);
		try{ this._initPosition(); }catch(e){}
		try{ this._initBaseMap(); }catch(e){}
		try{ this._initControlSetting(); }catch(e){}
		try{ this._initViewSetting(); }catch(e){}
		try{ this._initLayerList(); }catch(e){}
		try{ this._initDialogSettings(); }catch(e){}
		try{ this._initCurrentPath(); }catch(e){}


	},

	getPosition : function( defaultPosition )
	{
		return ( this._position ? this._position  : defaultPosition );
	},

	getZoom : function( defaultZoom )
	{
		return ( this._zoom ? this._zoom  : defaultZoom );
	},

	getBaseMap : function()
	{
		return this._baseMap;
	},
	getLayers : function()
	{
		return this._layers;
	},

	getViewListDialogVisible : function()
	{
		return this._viewListDialogVisible;
	},


	getLayerTreeDialogVisible : function()
	{
		return this._layerTreeDialogVisible;
	},

	getCurrentPath : function()
	{
		return this._currentPath;
	},


	getViewListHideAll: function()
	{
		return this._viewListHideAll;
	},

	getControlSetting : function( )
	{
		return this._controlSetting;
	},
	getViewSetting : function( )
	{
		return this._viewSetting;
	},

	_initPosition : function()
	{
		if ( this.params["ll"] )
		{
			var latLng = this.params["ll"].split( ',' );

			if ( latLng.length == 2 )
			{
				if (
					( latLng[0].match(/^[0-9]+\.[0-9]+$/) || latLng[0].match(/^[0-9]+$/) )
					&&
					( latLng[1].match(/^[0-9]+\.[0-9]+$/) || latLng[1].match(/^[0-9]+$/) )
				)
				{
					this._position = [
						parseFloat( latLng[0] ),
						parseFloat( latLng[1] )
					];
				}
			}

		}


		// ズーム
		if ( this.params["z"] && this.params["z"].match(/^[0-9]+$/) )
			this._zoom = parseInt( this.params["z"] );
		if ( this._zoom && ( this._zoom < 1 || this._zoom > 18 ) )
		{
			this._zoom = null;
		}
	},

	_initBaseMap : function()
	{
		if ( this.params["base"] )
		{
			this._baseMap = this.params["base"];

		}
	},

	_initLayerList : function()
	{
		this._layers = [];
		if ( this.params["ls"] )
		{
			var layers = this.params["ls"].split( '|' );

			for ( var i=0; i<layers.length; i++ )
			{
				if ( $.trim( layers[i] ) == '' ) continue;
				var parts  = layers[i].split( ',' );

				var layerData = {
					id : parts[ 0 ],
					opacity : 1
				};

				if ( parts.length >= 2 )
				{
					var opacity = parts[1];
					if (!isNaN(opacity))
					{
						opacity = parseFloat( opacity );
						if ( opacity >= 0.0 && opacity <= 1.0 )
							layerData.opacity = opacity;
					}
				}
				this._layers.push( layerData );

			}
		}
	},

	_initControlSetting : function()
	{
		if ( this.params["hc"] )
		{
			var ctrl = this.params["hc"];
			if ( ctrl.toLowerCase() == CONFIG.HIDDENCONTROLPARAMETER.ALL )
			{
				this._controlSetting = {
					infoMenu:{visible:false},
					funcMenu:{visible:false},
					header:{visible:false},
					contextMenu:{visible:false},
					baseMapSelector:{visible:false}
				};
			}
			else
			{
				for( var i=0; i<ctrl.length; i++ )
				{

					switch( ctrl.charAt( i ).toLowerCase() )
					{
						case CONFIG.HIDDENCONTROLPARAMETER.INFOMENU:
							// 情報メニュー
							this._controlSetting.infoMenu.visible = false;
							break;

						case CONFIG.HIDDENCONTROLPARAMETER.FUNCMENU:
							// 機能メニュー
							this._controlSetting.funcMenu.visible = false;
							break;
						case CONFIG.HIDDENCONTROLPARAMETER.HEADER:
							// ヘッダー
							this._controlSetting.header.visible = false;
							break;

						case CONFIG.HIDDENCONTROLPARAMETER.CONTEXTMENU:
							// コンテキストメニュー
							this._controlSetting.contextMenu.visible = false;
							break;

						case CONFIG.HIDDENCONTROLPARAMETER.BASEMAPSELECTOR:
							// ベースマップセレクター
							this._controlSetting.baseMapSelector.visible = false;
							break;
					}
				}
			}
		}
	},


	_initViewSetting : function()
	{

		if ( this.params["vs"] )
		{
			var vs = this.params["vs"];


			for ( var i=0; i<vs.length; i+=2 )
			{
				if ( vs.length -1 == i ) break;
				var key = vs.charAt(i);
				var value = vs.charAt(i+1);


				for( var qpKey in CONFIG.QUERYPARAMETER )
				{
					if (CONFIG.QUERYPARAMETER[ qpKey ].prefix == key )
					{
						this._viewSetting[CONFIG.QUERYPARAMETER[ qpKey ].settingName]  = ( value == "1" );
						break;
					}
				}

			}

		}
	},

	_initDialogSettings : function()
	{

		if ( this.params["d"] )
		{
			var d = this.params["d"];

			for ( var i=0; i<d.length; i++ )
			{
				var id = d.charAt(i);
				switch( id )
				{
					case CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG:
						this._viewListDialogVisible = true;
						break;

					case CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG:
						this._layerTreeDialogVisible = true;
						break;

					case CONFIG.DIALOGPARAMETER.VIEWLISTHIDEALL:
						this._viewListHideAll = true;
						break;

				}
			}
		}
	},

	_initCurrentPath : function()
	{

		if ( this.params["cd"] )
		{
			var cd = this.params["cd"];

			if ( cd && cd != '' )
			{
				this._currentPath = cd;
			}
		}
	},


	_parse : function( queryString, separator )
	{
		var result = {};
		if( 1 < queryString.length )
		{
			var query = ( queryString.charAt(0) == '?' ? queryString.substring( 1 ) : queryString );

			var parameters = query.split( '&' );

			for( var i = 0; i < parameters.length; i++ )
			{
				var element = parameters[ i ].split( '=' );

				var paramName = decodeURIComponent( element[ 0 ] );
				var paramValue = decodeURIComponent( element[ 1 ] );
				result[ paramName ] = paramValue;
			}
		}
		return result;
	}

} );




/************************************************************************

GSI.showTopMassage
	メッセージ表示

************************************************************************/
GSI.showTopMassage = function(){

	var message = ( CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.DETAILS ? CONFIG.TOPMESSAGE.DETAILS : '現在情報はありません' );

	GSI.Modal.Message.show( message, { className: "gsi_modal_topmessage", width:500, closeBtnVisible :true } );
};



/************************************************************************

GSI.Modal.BaseClass
	モーダル

************************************************************************/
GSI.Modal.instance=null;
GSI.Modal.instanceList=[];
GSI.Modal.blind = null;
GSI.Modal.zIndexOffset = 50000;

GSI.Modal.BaseClass = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		closeBtnVisible : true,
		blindClose : true
	},
	container : null,

	initialize : function (options)
	{
		options = L.setOptions(this, options);
	},

	show : function(options)
	{

		GSI.Modal.instanceList.push( this );

		options = L.setOptions(this, options);
		this.createBlind();



		if ( !this.container )
		{
			this.container = this.createContainer();
			$(document.body).append( this.container );

		}
		else this.contentFrame.empty();

		if ( options && options.width )
		{
			this.contentFrame.css( { width:options.width + 'px' } );
		}
		else
		{
			this.contentFrame.css( { width:'auto' } );
		}

		if ( this.getContent )
			this.contentFrame.append( this.getContent() );



		this.adjustWindow();

		if ( !GSI.Modal.blind.is( ':visible' ))
			GSI.Modal.blind.show( "fade", {"direction": "both","easing": "linear"}, "fast" );

		this.container.show("fade", {"direction": "both","easing": "linear"}, "fast" );


		if ( !this._onWindowResize )
		{
			this._onWindowResize = L.bind( this.onWindowResize, this );
			$( window ).on( "resize", this._onWindowResize );
		}

	},

	onWindowResize : function()
	{
		this.adjustWindow();
	},

	adjustWindow : function()
	{
		var windowSize = GSI.Utils.getScreenSize();
		var isVisible = this.container.is( ':visible' );

		if ( !isVisible )
		{
			this.container.css( { "visibility": "hidden" } ).show();
		}
		this.contentFrame.css( {
			"max-width" : windowSize.w - 50 + 'px',
			"max-height" : windowSize.h - 50 + 'px'
		} );


		var w = this.container.outerWidth(true);
		var h = this.container.outerHeight(true);
		this.container.css( {
			left : Math.floor( (windowSize.w/2) - (w/2) ) + 'px',
			top : Math.floor( (windowSize.h/2) - (h/2) ) + 'px'
		} );


		if ( !isVisible )
		{
			this.container.hide().css( { "visibility": "visible" } );
		}

	},

	createContainer : function()
	{

		var container = $( '<div>' ).hide().addClass( this.options.className ? this.options.className : 'gsi_modal_base' ).css( {"z-index":GSI.Modal.zIndexOffset+1+GSI.Modal.instanceList.length, position: "absolute"} );



		this.contentFrame = $('<div>').addClass( 'gsi_modal_base_content' );
		container.append( this.contentFrame );


		if ( this.options.closeBtnVisible )
		{
			this.closeButton = $( '<a>' )
				.addClass( 'gsi_modal_base_closebtn' )
				.attr( { 'href' : 'javascript:void(0);'} ).html( '×' ).click(
					L.bind( function() {
						this.hide();
					},this )
				);
			container.append( this.closeButton );
		}



		return container;

	},


	hide : function( noRemoveBlind )
	{
		if ( this._onWindowResize )
		{
			$( window ).off( "resize", this._onWindowResize );
			delete this._onWindowResize;
			this._onWindowResize = null;
		}

		for ( var i=0; i<GSI.Modal.instanceList.length; i++ )
		{
			if ( GSI.Modal.instanceList[i] == this )
			{
				GSI.Modal.instanceList.splice( i, 1 );
				break;
			}
		}

		if ( this.container ) this.container.remove();
		if ( this.closeButton ) this.closeButton.remove();

		delete this.closeButton;
		delete this.container;
		this.closeButton = null;
		this.container = null;

		if ( GSI.Modal.instanceList.length <= 0 )
			this.removeBlind();

	},

	getBlindClose:function() {
		return this.options.blindClose;

	},
	createBlind : function()
	{
		if ( GSI.Modal.blind ) return;


		GSI.Modal.blind = $( '<div>' )
			.css( {
				opacity : 0.3,
				background:"#666",
				position:"absolute",
				left:'0px',
				top:'0px',
				width:'100%',
				height:'100%',
				"z-index" : GSI.Modal.zIndexOffset,
				display:"none",
				cursor:"pointer"
			} )
			.click( function() {
			} );

		$( document.body ).append( GSI.Modal.blind );
	},

	removeBlind : function()
	{
		if ( GSI.Modal.blind ) GSI.Modal.blind.remove();
		delete GSI.Modal.blind;
		GSI.Modal.blind = null;
	}


} );

/************************************************************************

GSI.Modal.Message
	モーダルメッセージ

************************************************************************/

GSI.Modal.Message = GSI.Modal.BaseClass.extend( {

	show : function( message, options )
	{
		this.message = message;
		GSI.Modal.BaseClass.prototype.show.call( this, options );
	},

	getContent : function()
	{
		return $( '<div>' ).html( this.message );

	}
} );


GSI.Modal.Message.instance = null;

GSI.Modal.Message.show = function(message,options) {

	if ( !GSI.Modal.Message.instance )
		GSI.Modal.Message.instance = new GSI.Modal.Message(options);
	GSI.Modal.Message.instance.show( message,options );
};


GSI.Modal.Message.hide = function() {
	if ( GSI.Modal.Message.instance )  GSI.Modal.Message.instance.hide();
};




/************************************************************************

GSI.Modal.LoadingMessage
	ローディングメッセージ

************************************************************************/
GSI.Modal.LoadingMessage = GSI.Modal.BaseClass.extend( {
	options : {
		blindClose : false,
		closeBtnVisible : false,
		className : 'gsi_modal_loadingmessage_frame'
	},
	show : function( message, options )
	{
		this.message = message;
		GSI.Modal.BaseClass.prototype.show.call( this, options );
	},

	getContent : function()
	{
		return $( '<div>' ).addClass( 'gsi_modal_loadingmessage' ).html( this.message );

	}
} );
GSI.Modal.LoadingMessage.instance = null;

GSI.Modal.LoadingMessage.show = function(message,options) {

	if ( !GSI.Modal.LoadingMessage.instance )
		GSI.Modal.LoadingMessage.instance = new GSI.Modal.LoadingMessage(options);
	GSI.Modal.LoadingMessage.instance.show( message,options );
};


GSI.Modal.LoadingMessage.hide = function() {
	if ( GSI.Modal.LoadingMessage.instance )  GSI.Modal.LoadingMessage.instance.hide();
};




/************************************************************************

GSI.Modal.Dialog
	モーダルダイアログ

************************************************************************/

GSI.Modal.Dialog = GSI.Modal.BaseClass.extend( {

	options : {
		positiveButtonText : '決定',
		nagativeButtonText : '中止',
		blindClose : false,
		closeBtnVisible : false,
		className : 'gsi_modal_dialog'
	},

	show : function( options )
	{
		GSI.Modal.BaseClass.prototype.show.call( this, options );
	},

	getContent : function()
	{
		this.dialogFrame = $( '<div>' ).addClass( 'gsi_modal_dialog_frame' );


		this.dialogContent = $( '<div>' ).addClass('gsi_modal_dialog_content');

		this.buttonFrame = $( '<div>' ).addClass('gsi_modal_dialog_btn_frame');

		this.positiveButton = $( '<a>' ).attr( { "href":"javascript:void(0);"} )
			.html( this.options.positiveButtonText ).click( L.bind( this.onPositiveButtonClick, this ) );
		this.negativeButton = $( '<a>' ).attr( { "href":"javascript:void(0);"} )
			.html( this.options.nagativeButtonText ).click( L.bind( this.onNegativeButtonClick, this ) );

		this.buttonFrame.append( this.positiveButton).append( this.negativeButton );

		this.dialogFrame .append( this.dialogContent );
		this.dialogFrame .append( this.buttonFrame );

		return this.dialogFrame ;

	},

	onPositiveButtonClick : function()
	{
		this.hide();
		this.fire( 'positive' );
	},

	onNegativeButtonClick : function()
	{
		this.hide();
		this.fire( 'negative' );
	}


} );







/************************************************************************

GSI.Modal.FileSelectDialog
	ファイル選択ダイアログ

************************************************************************/

GSI.Modal.FileSelectDialog = GSI.Modal.Dialog.extend( {

	options : {
		title : "ファイルを選択して下さい"
	},

	getContent : function()
	{
		var frame = $( '<div>' );


		var titleFrame = $( '<div>' ).addClass('gsi_modal_fileselect_dlg_title').html( this.options.title );

		//frame.append( titleFrame );



		var tabFrame = null;

		tabFrame  =$( '<div>' ).addClass('gsi_modal_fileselect_dlg_title');
		frame.append( tabFrame );
		tabFrame.append( $( '<span>' ).addClass('title').html(this.options.title ) );


		if ( GSI.Utils.hasFileAPI )
		{


			this.switcher =new GSI.OnOffSwitch();
			this.switcher.on( 'change', L.bind( function() {
				if ( this.switcher.checked() )
				{
					if ( !this.fileFrame.is( ':visible' ) )
					{
						this.sourceFrame.fadeOut( 'fast', L.bind( function() {
							this.fileFrame.fadeIn('fast');
						}, this ) );
					}

				}
				else
				{
					if ( !this.sourceFrame.is( ':visible' ) )
					{
						this.fileFrame.fadeOut( 'fast', L.bind( function() {
							this.sourceFrame.fadeIn('fast');
						}, this ) );
					}
				}

			},this ) );

			tabFrame.append( this.switcher.getElement().css({float:"right"}));

			this.fileFrame =$('<div>').addClass( "gsi_modal_fileselect_dlg_inputframe" );
			this.fileInput = $( '<input>' ).attr( { 'type':'file'} );//.css( { "margin": "14px 4px 14px 4px" } );

			this.fileMessage = $( '<div>' ).addClass( 'message' ).html( 'ファイルを選択後「<strong>決定</strong>」ボタンをクリックして下さい' );
			this.fileFrame.append( this.fileMessage  );


			this.fileFrame.append( this.fileInput );
			frame.append( this.fileFrame );

		}


		this.sourceFrame =$('<div>').addClass( "gsi_modal_fileselect_dlg_inputframe" ).hide();
		this.sourceTextArea = $( '<textarea>' );

		if ( !GSI.Utils.hasFileAPI )
		{
			this.sourceFrame.show();
		}

		this.sourceMessage = $( '<div>' ).addClass( 'message' ).html( 'ソースを入力後「<strong>決定</strong>」ボタンをクリックして下さい' );
		this.sourceFrame.append( this.sourceMessage  );


		this.sourceFrame.append( this.sourceTextArea );
		frame.append( this.sourceFrame );



		var dialogFrame = GSI.Modal.Dialog.prototype.getContent.call( this);

		this.dialogContent.append( frame );

		return dialogFrame ;

	},

	_onFileLoad : function()
	{
		this.hide();
		this.fire( 'positive',{ text : this.reader.result } );
	},

	_onLoadErrorExit : function()
	{
		alert( 'ファイルの読込に失敗しました' );
	},

	onPositiveButtonClick : function()
	{
		var txt = "";
		if ( this.fileFrame && this.fileFrame.is( ':visible' ) )
		{
			var files = this.fileInput.attr( 'files' );
			if (!files) files = this.fileInput.prop( 'files' );

			if ( files && files.length > 0 )
			{
				this.reader = new FileReader();
				this.reader.onload = L.bind( this._onFileLoad, this);
				this.reader.onerror = L.bind( this._onLoadErrorExit, this);
				this.reader.readAsText(files[0]);
			}
			else
			{
				alert( 'ファイルが選択されていません' );
			}
		}
		else
		{
			txt = this.sourceTextArea.val();
			if ( $.trim( txt ) != "" )
			{
				this.hide();
				this.fire( 'positive',{ text : txt } );
			}
			else
			{
				alert( 'ソースが入力されていません' );
			}
		}

	},

	onNegativeButtonClick : function()
	{
		this.hide();
		this.fire( 'negative' );
	}




} );



/************************************************************************

GSI.MapMouse
	地図上のマウス操作制御

************************************************************************/

GSI.MapMouse = L.Class.extend( {

	clickMoveVisible : true,
	clickMoveEnable : true,
	rightClickTime : null,

	options : {
		dblclickInterval : 500

	},
	initialize : function (map, options )
	{
		this.map = map;
		map.on('contextmenu',function(){});

		this.setClickMoveVisible( this.clickMoveVisible, true );

		map.on('mousedown',L.bind( this.onMouseDown, this ) );
		map.on('zoomend',L.bind( this.onZoomEnd, this ) );

		L.setOptions(this, options);

	},

	onZoomEnd : function(e)
	{
		if ( this.map.getZoom() >= 18 )
		{
			this.map.doubleClickZoom.disable();
		}
		else
		{
			this.map.doubleClickZoom.enable();
		}

	},

	_rightDblClickZoomOut : function(latlng)
	{
		var zoom = this.map.getZoom();
		if ( zoom >= 1 )
		{
			this.map.setZoomAround( latlng, zoom - 1);
		}
	},

	onMouseDown : function(e)
	{
		if ( e.originalEvent.which == 3 )
		{
			if ( this.rightClickTime== null )
			{
				// 一回目
				var date = new Date();
				this.rightClickTime = date.getTime();
			}
			else
			{
				var date = new Date();

				//ダブルクリック判定
				if ( date < this.rightClickTime + this.options.dblclickInterval   )
				{
					this._rightDblClickZoomOut( e.latlng );
					this.rightClickTime = null;
				}
				else
				{
					this.rightClickTime = null;
				}
			}

		}
		else
		{
			this.rightClickTime = null;
		}
	},

	onMapClick : function(e)
	{
		if ( this.clickMoveVisible ) this.map.panTo( e.latlng );
	},


	setClickMoveVisible : function( visible, init )
	{
		this.clickMoveVisible = visible;
		this.refresh();

	},

	getClickMoveVisible : function()
	{
		return this.clickMoveVisible;

	},

	refresh : function()
	{
		if ( this.clickMoveVisible && this.clickMoveEnable )
		{
			if ( !this._onMapClick )
			{
				this._onMapClick= L.bind( this.onMapClick, this );
				this.map.on( 'click', this._onMapClick );
			}
		}
		else
		{
			if ( this._onMapClick )
			{
				this.map.off( 'click', this._onMapClick );
				this._onMapClick = null;
			}
		}
	},

	getClickMoveVisible : function( visible )
	{
		return this.clickMoveVisible;
	},


	setClickMoveEnable : function( enable )
	{
		this.clickMoveEnable = enable;
		this.refresh();

	}



} );






/************************************************************************

GSI.Searcher
	検索

************************************************************************/

GSI.Searcher = L.Class.extend( {

	QUERY_NONE : 9,
	QUERY_LATLNG : 2,
	QUERY_LATLNG2 : 3,
	QUERY_UTMPOINT : 5,
	QUERY_QUERY : 4,

	options : {},

	initialize : function (map, dialog, formSelector, querySelector, resultSelector, options )
	{
		this.map = map;
		this.dialog = dialog;
		this.formSelector = formSelector;
		this.querySelector = querySelector;
		$( this.querySelector ).ahPlaceholder ( {
				placeholderAttr : 'placeholder',
				likeApple : true
			} );
		$( this.formSelector ).submit( L.bind( this.onSubmit, this ) );
		L.setOptions(this, options);
	},


	onSubmit : function(event)
	{
		event.preventDefault();


		var query = $( this.querySelector ).val();
		if ( $.trim(query) == '' ) return;




		var qType = this.checkQuery(query);

		if ( qType == this.QUERY_QUERY )
		{
			this.searchStart( query );
		}
		else
		{

			this.clearSearch();
			this.dialog.hide();
			if ( qType == this.QUERY_LATLNG  || qType == this.QUERY_LATLNG2)
			{
				var latLng = ( qType == this.QUERY_LATLNG ? this.parseLatLngText( query ) : this.parseLatLngText2( query ) );

				if ( latLng[0] < 0 || latLng[0] > 90 || latLng[1] < 0 || latLng[1] > 180 )
				{
					alert( '緯度経度を正しく入力して下さい\n' +
						'緯度:' + latLng[0] + ' 経度:' + latLng[1] );
				}
				else
				{
					this.map.setView( latLng, CONFIG.SEARCHRESULTCLICKZOOM );
				}
			}
			else if ( qType == this.QUERY_UTMPOINT )
			{

				this._utmPoint( query );
				/*
				var latLng = this.parseUTMPointText( query );

				if ( latLng )
				{

				}
				else
				{

					alert( 'UTMポイントを正しく入力して下さい' );
				}
				*/
			}

		}



		this.query = query;

		return false;
	},

	_utmPoint : function(center)
	{
		var utmValue;
        var mark;
        var newMgrs;
        var pointX;
        var pointY;
        mark = center.substring(2,3);
        newMgrs = center.substring(3,5);
        pointX = center.substring(5,9);
        pointY = center.substring(9,13);
        $.ajax({
          url: 'http://portal.cyberjapan.jp/site/mapuse4/grid/mgrsXY.php?mgrs=' + newMgrs + '&mark=' + mark,
          type: 'GET',
          dataType: 'jsonp',
          success: L.bind( function(data) {
            var topX = data.topX;
            var topY = data.topY;
            var utmZone = data.utmZone;
            pointX = (pointX * 10) + (topX * 100000);
            pointY = (pointY * 10) + (topY * 100000);
            var wsPoint = new Proj4js.Point(pointX,pointY ); //new OpenLayers.Geometry.Point(pointX, pointY);
            var defName = GSI.UTM.Utils.getUTMDefName( utmZone );
			if ( defName == '' )
			{
				alert( 'UTMポイントを正しく入力して下さい' );
				return;
			}

			var projUTM = new Proj4js.Proj(defName);
			var wsTrmPoint = Proj4js.transform(projUTM, GSI.UTM.Utils.PROJ_WORLD,wsPoint);

				this.map.setView( [wsTrmPoint.y, wsTrmPoint.x], CONFIG.SEARCHRESULTCLICKZOOM );

			/*
            if(utmZone==51)  {
              projUTM = new OpenLayers.Projection('EPSG:3097');
            }else if(utmZone==52)  {
              projUTM = new OpenLayers.Projection('EPSG:3098');
            }else if(utmZone==53)  {
              projUTM = new OpenLayers.Projection('EPSG:3099');
            }else if(utmZone==54)  {
              projUTM = new OpenLayers.Projection('EPSG:3100');
            }else if(utmZone==55)  {
              projUTM = new OpenLayers.Projection('EPSG:3101');
            }else if(utmZone==56)  {
              projUTM = new OpenLayers.Projection('SR-ORG:1235');
            }else{
              projUTM = wsPoint;
            }
            console.log(
            */
            //var wsTrmPoint = wsPoint.transform(projUTM,projection900913);
            //map.setCenter(new OpenLayers.LonLat(wsTrmPoint.x, wsTrmPoint.y), 15);
            //var lonlatPoint = wsTrmPoint.transform(projection900913, projection4326);
            //utmPointDraw(lonlatPoint.x, lonlatPoint.y);
          }, this )
        });
	},

	clearSearch : function()
	{
		if ( this.addresAjax )
		{
			try{ this.addresAjax.abort(); } catch(e){}
			this.addresAjax = null;
		}

		if ( this.stationAjax )
		{
			try{ this.stationAjax.abort(); } catch(e){}
			this.stationAjax = null;
		}

		if ( this.sisetuAjax )
		{
			try{ this.sisetuAjax.abort(); } catch(e){}
			this.sisetuAjax = null;
		}

		if ( this.chimeiAjax )
		{
			try{ this.chimeiAjax.abort(); } catch(e){}
			this.chimeiAjax = null;
		}
		this.dialog.clear();
	},

	searchStart : function( q )
	{

		this.clearSearch();

		this.dialog.show();


		this.addresAjax = this.searchAddress( q, "","" );

		this.stationAjax = this.searchStation( q,"","" );
		this.sisetuAjax = this.searchSisetu( q, "","" );
		this.chimeiAjax = this.searchChimei( q, "","" );


	},



	getAddressRusult : function(json)
	{

		var xmlDoc = null;
		if (window.ActiveXObject)
		{
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = false;
			xmlDoc.loadXML(json['result']);
		}
		else if (window.DOMParser)
		{
			xmlDoc = new DOMParser().parseFromString(
				json['result'],
				"application/xml"
			);
		}
		var xmlObj = $(xmlDoc);
		var result = [];
		xmlObj.find("candidate").each(function(){
			if ($(this).find('iLvl').text() > 0){
				temp=$(this).find('address').text().split('/');
				addr=new Array();
				dispAddr = "";
				for (var i=0; i<temp.length; i++){
					if (temp[i].substr(temp[i].length-1) == '郡'){
						//郡は省きます
					}else if (temp[i].substr(temp[i].length-1) == '区'){
						if (temp[i-1].substr(temp[i-1].length-1) == '市'){
							//政令指定都市の区は市名と合わせます
							addr[addr.length-1] += temp[i];
						}
					}else{
						addr[addr.length] = temp[i];
					}
					dispAddr += temp[i];
				}

				var n = result.length;
				result[n] = new Array();
				if (addr[0]) result[n]['pref']=addr[0];
				if (addr[1]) result[n]['muniNm']=addr[1];
				if (addr[2]) result[n]['lv01']=addr[2];
				result[n]['longitude'] = $(this).find('longitude').text();
				result[n]['latitude'] = $(this).find('latitude').text();
				result[n]['value'] = dispAddr;
				result[n]['series'] = "ADDRESS";



			}


		});
		this.dialog.setAddressResult( result );


	},


	getStationRusult : function(json)
	{
		var xmlDoc = null;
		if (window.ActiveXObject)
		{
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = false;
			xmlDoc.loadXML(json['result']);
		}
		else if (window.DOMParser)
		{
			xmlDoc = new DOMParser().parseFromString(
				json['result'],
				"application/xml"
			);
		}
		var xmlObj = $(xmlDoc);
		var result = [];
		xmlObj.find("candidate").each(function(){
			if ($(this).find('iLvl').text() > 0){
				temp=$(this).find('address').text().split('/');
				addr=[];
				dispAddr = "";
				for (var i=0; i<temp.length; i++){
					if (temp[i].substr(temp[i].length-1) == '郡'){
						//郡は省きます
					}else if (temp[i].substr(temp[i].length-1) == '区'){
						if (temp[i-1].substr(temp[i-1].length-1) == '市'){
							//政令指定都市の区は市名と合わせます
							addr[addr.length-1] += temp[i];
						}
					}else{
						addr[addr.length] = temp[i];
					}
					dispAddr += temp[i];
				}

				var n = result.length;
				result[n] = {};
				if (addr[0]) result[n]['pref']=addr[0];
				//if (addr[1]) result[n]['muniNm']=addr[1];
				if (addr[2]) result[n]['lv01']=addr[2];
				result[n]['longitude'] = $(this).find('longitude').text();
				result[n]['latitude'] = $(this).find('latitude').text();
				result[n]['value'] = dispAddr;
				result[n]['series'] = "STATION";
				var subUrl = "http://portal.cyberjapan.jp/GsiJsLibrary/LonLatToLv01.php?longitude=" + $(this).find('longitude').text() + "&latitude=" + $(this).find('latitude').text();

				// 駅の検索結果に対し、同期処理で都道府県コード・市町村コードをチェックする
				$.ajax({
					async: false,
					type: "POST",
					data: $(this),
					dataType: 'json',
					timeout: 1000,
					error: function() {
					},
					url: subUrl,
					success: function(data, status){
						if (data.error) return;

						result[n]['prefCd'] = data.result[0]['prefCd'];
						result[n]['muniCd'] = data.result[0]['muniCd'];
						result[n]['muniNm']="";
						if ( data.result[0].muniCd )
						{
							var muniNm= GSI.MUNI_ARRAY[data.result[0].muniCd ];
							if ( muniNm )
							{

								muniNm = muniNm.split(',');
								if( muniNm.length > 3 )
								{
									result[n]['muniNm'] = $.trim(muniNm[1].replace( '　', '' )) + $.trim(muniNm[3].replace( '　', '' ));

								}
							}
						}
					}
				});

			}


		});

		this.dialog.setStationResult( result );
	},

	getSisetuRusult : function( json )
	{

		var result = [];
		if (json['result'].indexOf('{"result":[') != -1)
		{
			var txt = json['result'];
			var n, pref;
			var obj;
			obj = eval("obj=" + txt);
			for(var i=0; i<obj.result.length; i++)
			{
				n = result.length;
				result[n] = {};
				pref=obj.result[i].muniCd.substr(0, obj.result[i].muniCd.length-3);
				result[n]['pref']=pref;
				result[n]['muniCd']=obj.result[i].muniCd;
				result[n]['muniNm']="";
				if ( obj.result[i].muniCd )
				{
					var muniNm= GSI.MUNI_ARRAY[obj.result[i].muniCd ];
					if ( muniNm )
					{

						 muniNm = muniNm.split(',');
						 if( muniNm.length > 3 )
						 {
							result[n]['muniNm'] = $.trim(muniNm[1].replace( '　', '' )) + $.trim(muniNm[3].replace( '　', '' ));

							/*
						 	result[n]['muniNm'] = muniNm[1];
							if ( obj.result[i].shisetsuKana && obj.result[i].shisetsuKana != '' )
							{
								result[n]['muniNm'] +=  obj.result[i].shisetsuKana;
							}
							else
							{
								result[n]['muniNm'] += muniNm[3];
							}
							//console.log( obj.result[i] );
							*/
						}
					}
				}
				result[n]['longitude'] = obj.result[i].longitude;
				result[n]['latitude'] = obj.result[i].latitude;
				result[n]['series'] = "FACILITY";
				pref = parseInt(pref);
				result[n]['value']=obj.result[i].shisetsuNm;
			}
		}
		this.dialog.setSisetuResult( result );
	},


	getChimeiRusult : function(json)
	{
		var result = [];
		if (json['result'].indexOf('{"result":[') != -1)
		{
			var txt = json['result'];
			var n, pref;
			var obj;
			obj = eval("obj=" + txt);

			for(var i=0; i<obj.result.length; i++)
			{
				n = result.length;
				result[n] = {};
				pref=obj.result[i].muniCd.substr(0, obj.result[i].muniCd.length-3);
				result[n]['pref']=pref;
				result[n]['muniCd']=obj.result[i].muniCd;
				result[n]['longitude'] = obj.result[i].longitude;
				result[n]['latitude'] = obj.result[i].latitude;
				result[n]['series'] = "PLACE";
				pref = parseInt(pref);
				result[n]['value']=obj.result[i].chimeiNm;
				result[n]['muniNm']="";
				if ( obj.result[i].muniCd )
				{
					var muniNm= GSI.MUNI_ARRAY[obj.result[i].muniCd ];
					if ( muniNm )
					{

						 muniNm = muniNm.split(',');
						 if( muniNm.length > 3 )
						 {
							result[n]['muniNm'] = $.trim(muniNm[1].replace( '　', '' )) + $.trim(muniNm[3].replace( '　', '' ));
						}
					}
				}
			}
		}
		this.dialog.setChimeisResult( result );

	},


	searchAddress : function (q, pref, muni)
	{

		var constraint = '';
		var url = CONFIG.SERVERAPI.SEARCH // "http://geocode.csis.u-tokyo.ac.jp/cgi-bin/simple_geocode.cgi"
			+ '?addr=' + q
			+ '&charset=UTF8'
			+ '&geosys=world'
			+ '&series=ADDRESS';


		var constraint="";

		var parameter = {};
		parameter['request'] = url;
		parameter['tl'] = "cs_address";
		parameter['pref'] = ( pref ? pref : '' );
		parameter['muni'] = ( muni ? muni : '' );
		//parameter['qt'] = logicalCondition+"|"+textMatchCondition
		return $.ajax({
			type: "GET",
			url:CONFIG.SERVERAPI.INTERFACE,
			data: parameter,
			dataType: "jsonp",
			timeout: 30000,
			success: L.bind( this.getAddressRusult, this ),
			error:function(){
			}
		});
	},

	searchStation : function (q, pref, muni)
	{

		var constraint = '';
		var url = CONFIG.SERVERAPI.SEARCH //"http://geocode.csis.u-tokyo.ac.jp/cgi-bin/simple_geocode.cgi"
			+ '?addr=' + q
			+ '&charset=UTF8'
			+ '&geosys=world'
			+ '&series=STATION';


		var parameter = {};
		parameter['request'] = url;
		parameter['tl'] = "cs_station";
		parameter['muni'] = ( muni ? muni : '' );
		parameter['pref'] = ( pref ? pref : '' );
		//parameter['qt'] = logicalCondition+"|"+textMatchCondition
		return $.ajax({
			type: "GET",
			url:CONFIG.SERVERAPI.INTERFACE,
			data: parameter,
			dataType: "jsonp",
			timeout: 30000,
			success: L.bind( this.getStationRusult, this ),
			error:function(){
			}
		});
	},

	searchSisetu : function (q, pref, muni)
	{
		/*
		http://portal.cyberjapan.jp/GsiJsLibrary/interface.php?callback=jQuery16207224119126331061_1414398928980&
		pref=&
		muni=&
		tl=shisetsu&
		qt=undefined%7Cundefined&
		query=%25E4%25B8%2589%25E5%258E%259F&
		am=autoMove&
		request=http%3A%2F%2Fportal.cyberjapan.jp%2FGsiJsLibrary%2Fshisetsu.php%3FsearchWord%3D%25E4%25B8%2589%25E5%258E%259F&_=1414400793707
		*/
		var constraint="";
		/*

		var tmp;
		if (pref != ""){
			tmp = pref.split('|');
			constraint += "&prefCd=" + encodeURIComponent(tmp[1]);
		}
		if(muni) {
			tmp = muni.split('|');
			constraint += "&muniCd=" + encodeURIComponent(tmp[1]);
		}
		*/

		var url = CONFIG.SERVERAPI.SEARCH_SHISETU + '?searchWord=' + q + constraint;
		var parameter = {};
		parameter['request'] = url;
		parameter['tl'] = "shisetsu";
		parameter['muni'] = ( muni ? muni : '' );
		parameter['pref'] = ( pref ? pref : '' );
		parameter['query'] = q;
		//parameter['qt'] = logicalCondition+"|"+textMatchCondition
		return $.ajax({
			type: "GET",
			url:CONFIG.SERVERAPI.INTERFACE,
			data: parameter,
			dataType: "jsonp",
			timeout: 30000,
			success: L.bind( this.getSisetuRusult, this ),
			error:function(){
			}
		});

	},

	searchChimei : function (q, pref, muni)
	{
		var constraint = '';
		var url = CONFIG.SERVERAPI.SEARCH_CHIMEI +'?searchWord=' + q;
		var parameter = {};
		parameter['request'] = url;
		parameter['tl'] = "chimei";
		parameter['muni'] = ( muni ? muni : '' );
		parameter['pref'] = ( pref ? pref : '' );
		parameter['query'] = q;
		//parameter['qt'] = logicalCondition+"|"+textMatchCondition
		return $.ajax({
			type: "GET",
			url:CONFIG.SERVERAPI.INTERFACE,
			data: parameter,
			dataType: "jsonp",
			timeout: 30000,
			success: L.bind( this.getChimeiRusult, this ),
			error:function(){
			}
		});
	},


	checkQuery : function( q )
	{
		q = $.trim(q);
		q = q.replace( ',', ' ' );

		if (q=='')
		{
			return this.QUERY_NONE;
		}
		else if ( q.length == 13
			&& q.substring(0, 2).match(/^[0-9]+$/)
			&& q.substring(2, 4).match(/^[A-Z]+$/)
			&& q.substring(5, 13).match(/^[0-9]+$/) )
		{
			return this.QUERY_UTMPOINT;
		}
		else if( q.match(/^[0-9]+(\.[0-9]+)*[\s,]+[0-9]+(\.[0-9]+)*$/)  )
		{
			return this.QUERY_LATLNG;
		}
		else if ( q.match(/^[0-9]+度[\s]+[0-9]+度$/)
			||
			 q.match(/^[0-9]+度[0-9]+分[\s]+[0-9]+度[0-9]+分$/)
			||
			 q.match(/^[0-9]+度[0-9]+分[0-9]+(\.[0-9]+)*秒[\s]+[0-9]+度[0-9]+分[0-9]+(\.[0-9]+)*秒$/)

		)
		{
			return this.QUERY_LATLNG2;
		}

		else
		{
			return this.QUERY_QUERY;
		}

	},


	parseLatLngText2 : function( s )
	{
		s = $.trim(s);
		s = s.replace( ',', ' ' );

		var matchArr =  s.match( /^([0-9]+)度[\s]+([0-9]+)度$/ );

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] );
			var lng = parseInt( matchArr[2] );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}

		matchArr = s.match(/^([0-9]+)度([0-9]+)分[\s]+([0-9]+)度([0-9]+)分$/);

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] ) + ( parseFloat( matchArr[2] ) / 60.0 );
			var lng = parseInt( matchArr[3] ) + ( parseFloat( matchArr[4] ) / 60.0 );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}

		matchArr = s.match(/^([0-9]+)度([0-9]+)分([0-9]+)秒[\s]+([0-9]+)度([0-9]+)分([0-9]+)秒$/);

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] ) + ( parseFloat( matchArr[2] ) / 60.0 ) + ( parseFloat( matchArr[3] ) / 3600.0 );
			var lng = parseInt( matchArr[4] ) + ( parseFloat( matchArr[5] ) / 60.0 ) + ( parseFloat( matchArr[6] ) / 3600.0 );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}

		matchArr = s.match(/^([0-9]+)度([0-9]+)分([0-9]+\.[0-9]+)秒[\s]+([0-9]+)度([0-9]+)分([0-9]+\.[0-9]+)秒$/);

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] ) + ( parseFloat( matchArr[2] ) / 60.0 ) + ( parseFloat( matchArr[3] ) / 3600.0 );
			var lng = parseInt( matchArr[4] ) + ( parseFloat( matchArr[5] ) / 60.0 ) + ( parseFloat( matchArr[6] ) / 3600.0 );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}

		return null;
	},

	parseLatLngText : function( s )
	{
		s = $.trim(s);
		s = s.replace( ',', ' ' );

		var latLng = s.split( ' ' );

		if ( latLng.length < 2 ) return null;

		try
		{
			var lat = parseFloat( latLng[0] );
			var lng = parseFloat( latLng[1] );
			result = [ lat< lng ? lat: lng, lat< lng ? lng: lat ];


			return result;
		}
		catch( e )
		{
			return null;
		}

	},


	parseUTMPointText : function( s )
	{
		return GSI.UTM.Utils.point2LatLng( s );
	}


} );


/************************************************************************

GSI.GeoLocation
	位置情報取得

************************************************************************/
GSI.GeoLocation = L.Class.extend( {

	includes: L.Mixin.Events,
	options : {},

	initialize : function (map)
	{
		this.map = map;
	},

	getLocation : function()
	{
		if ( GSI.GeoLocation.can )
		{
			if ( this.watchId ) return false;
			this.watchCounter = 0;
			this.watchId = navigator.geolocation.watchPosition(
				L.bind(function(loc) {
					if ( loc.coords.accuracy < 100 || this.watchCounter >= 0)
					{
						var lat = loc.coords.latitude;
						var lng = loc.coords.longitude;

						this.map.setView( [lat, lng], CONFIG.SEARCHRESULTCLICKZOOM );
						// クリア
						navigator.geolocation.clearWatch(this.watchId);
						this.watchId = null;

					}
					this.watchCounter++;
				}, this ),
				L.bind(this.locationError,this),
				{ enableHighAccuracy: true, timeout: 60000, maximumAge: 0 }
			);
			return true;
		}
		else return false;

	}
} );


GSI.GeoLocation.can = ( navigator.geolocation && typeof navigator.geolocation.getCurrentPosition == 'function' ? true : false );


/************************************************************************

GSI.Header
	ヘッダー

************************************************************************/

GSI.Header = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		visible : true
	},

	topMessageVisible : false,
	header : null,

	initialize : function (map, options )
	{
		options = L.setOptions(this, options);
		if ( !options.visible )
		{
			$( "#header" ).hide();
			$( "#topmessage" ).hide();
			this.topMessageVisible = false;
		}
		else
		{

			this.header = $( "#header" );
			this.logoImage = $( "#logoimage" );
			this.topMessage = $( "#topmessage" );

			// お知らせ表示
			if ( options.message && options.message != '' )
			{
				this.topMessage.empty() .append( $("<div>").addClass('message').html( options.message ) );
				var closeBtn = $( '<a>' ).addClass( 'closebtn' ).attr( {'href': 'javascript:void(0);'} ).html( '×' );

				this.topMessage.append( closeBtn );

				closeBtn.click( L.bind( this.onCloseClick, this ) );

				this.topMessageVisible = true;
			}
			else
			{
				this.hideTopMessage();
			}

		}
		this.map = map;
	},

	hideTopMessage : function()
	{
		this.topMessage .hide();
		this.header.addClass( 'border_bottom' );
		this.topMessageVisible=false;
	},

	onCloseClick : function()
	{
		this.topMessage.animate(
			{
				height: "hide"
			},
			{
				duration: 80, easing: "linear",
				complete: L.bind( function(){this.hideTopMessage();this.fire( 'topmessagechange' );}, this ),
				step: L.bind( function(){this.fire( 'topmessagechange' );}, this )
			}
		);

	},

	getHeight : function()
	{
		if ( !this.options.visible ) return 0;

		return this.header.outerHeight(true) + ( this.topMessageVisible ? this.topMessage.outerHeight( true ) : 0 );


	},

	refresh : function(screenSize)
	{
		if ( !this.options.visible ) return;

		var removeClassName = 'logo_l';
		var addClassName = 'logo_s';
		var imageUrl = 'image/logo_s.png';

		if ( screenSize.w >= 600 )
		{
			removeClassName = 'logo_s';
			addClassName = 'logo_l';
			imageUrl = 'image/logo_l.png';
		}

		this.header .removeClass( removeClassName );
		this.header .addClass( addClassName );
		if ( this.currentImageUrl != imageUrl )
		{
			this.logoImage.attr( { src:imageUrl} );
			this.currentImageUrl = imageUrl;
		}
	}
} );






/************************************************************************

GSI.Footer
	フッター

************************************************************************/

GSI.Footer = L.Class.extend( {
	options : {
		visible : true,

	},

	overlap : false,

	initialize : function (map,bottomLeftSpacer, bottomRightSpacer, mapSelector, btnSelector, footerSelector, upImage, downImage, options )
	{
		L.setOptions(this, options);
		if ( !options.visible )
		{
			$( btnSelector ).hide();
			$( footerSelector ).hide();
			return;
		}



		this.overlap = options.overlap;
		this.map = map;
		this.bottomLeftSpacer = bottomLeftSpacer;
		this.bottomRightSpacer = bottomRightSpacer;
		this.mapSelector = mapSelector;
		this.btnSelector = btnSelector;
		this.footerSelector = footerSelector;
		this.upImage = upImage;
		this.downImage = downImage;
		$( this.btnSelector).click( L.bind(this.onBtnClick,this) );

		this._onMapMove = L.bind(this.onMapMove, this);
		this._onMapMoveStart = L.bind(this.onMapMoveStart, this);
		this._onMapMoveEnd = L.bind(this.onMapMoveEnd, this);

		$(window).resize( L.bind( this.onWindowResize, this ) );
		this.onWindowResize();

		$(this.btnSelector).css( { 'visibility' : 'visible'} ).show();
	},

	onWindowResize : function()
	{

		this.refreshSize();
	},

	setOverlap : function( on )
	{
		this.overlap = on;
		this.refreshSize();
	},

	getOverlap : function()
	{
		return this.overlap;
	},

	refreshSize : function()
	{
		var windowSize = GSI.Utils.getScreenSize();

		if ( windowSize.w < windowSize.h )
		{
			$( '.mini_comment' ).addClass( 'landscape' );
		}
		else
		{
			$( '.mini_comment' ).removeClass( 'landscape' );
		}

		var btn = $( this.btnSelector);
		var footerHeight =(  $(this.footerSelector).is(':visible') ? $( this.footerSelector ).outerHeight( true ) : 0 );

		btn.css( {
				left : Math.round( ( windowSize.w/2 ) - ( btn.outerWidth(true) / 2 ) ) + 'px',
				bottom : footerHeight + 'px'
			}

		);
		return;

		if (  !this.overlap  || !$(this.footerSelector).is(':visible') )
		{
			this.bottomLeftSpacer.setHeight( 0 );
			this.bottomRightSpacer.setHeight( 0 );
		}
		else
		{
			this.bottomLeftSpacer.setHeight( footerHeight );
			this.bottomRightSpacer.setHeight( footerHeight );
		}

		if ( !$(this.footerSelector).is(':visible') ) return;

		if(!this.overlap) $(this.mapSelector ).stop().css( {'bottom' : footerHeight + 'px'} );
		this.map.invalidateSize(true);
	},

	onBtnClick : function ()
	{
		var footerHeight = $( this.footerSelector ).outerHeight( true );

		if ( $(this.footerSelector).is(':visible') )
		{
			$( this.btnSelector).find( "img" ).attr( { 'src' : this.upImage } );

			if ( this.overlap )
			{
				$(this.mapSelector ).stop().css( {'bottom' : '0px'} );
				$(this.btnSelector ).stop().animate( {'bottom' : '0px'},300 );
				this.map.invalidateSize();
			}
			else
			{
				$(this.mapSelector ).stop().animate( {'bottom' : '0px'},300 );
				$(this.btnSelector ).stop().animate( {'bottom' : '0px'},300 );
			}
			$(this.footerSelector ).stop().animate( {'bottom' : (-footerHeight )  + 'px'},300,
				 L.bind(function() {
				 	$("#footer" ).hide(); if ( !this.overlap ) this.map.invalidateSize();
				 	if ( this.overlap )
				 	{
						this.bottomLeftSpacer.setHeight( 0 );
						this.bottomRightSpacer.setHeight( 0 );
					}

				 }, this )
			);

			//this.map.off('move', this._onMapMove );
			this.map.off('movestart', this._onMapMoveStart );
			this.map.off('moveend', this._onMapMoveEnd );
		}
		else
		{
			this.onMapMove();
			this.onMapMoveEnd();
			$( this.btnSelector).find( "img" ).attr( { 'src' : this.downImage } );
			if ( this.overlap )
			{
				$(this.mapSelector ).stop().css( {'bottom' : '0px'} );
				$(this.btnSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
				this.map.invalidateSize();
			}
			else
			{
				$(this.mapSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
				$(this.btnSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
			}
			$(this.footerSelector ).css( {'bottom': (-footerHeight ) + 'px' } ).show().stop().animate( {'bottom' : 0 + 'px'},300,
				L.bind(function() {
					if ( !this.overlap ) this.map.invalidateSize();
					if ( this.overlap )
				 	{
						this.bottomLeftSpacer.setHeight( footerHeight );
						this.bottomRightSpacer.setHeight( footerHeight );
					}
				} , this )
			);

			//this.map.on('move', this._onMapMove );
			this.map.on('movestart', this._onMapMoveStart );
			this.map.on('moveend', this._onMapMoveEnd );
		}

	},

	onMapMoveStart : function()
	{

		this.clear();




	},

	onMapMove : function()
	{
		var center = this.map.getCenter().wrap();

		var dms = GSI.Utils.latLngToDMS( center );

		$( '#latlng_60' ).html(
			dms.lat.d + '度' + dms.lat.m + '分' + ( Math.round( dms.lat.s * 100 ) / 100 )  + '秒'
			+ '&nbsp;'  +
			dms.lng.d + '度' + dms.lng.m + '分' + ( Math.round( dms.lng.s * 100 ) / 100 )  + '秒'
			);

		$( '#latlng_10' ).html(
			( Math.round( center.lat * 1000000 ) / 1000000 )
			+ ','
			+ ( Math.round( center.lng * 1000000 ) / 1000000 )
			);

		var utmPoint = GSI.UTM.Utils.latlng2PointName( center.lat, center.lng );
		$( '#utm_point' ).html( utmPoint == '' ? '---' : utmPoint);

		$( '#current_zoom' ).html(
			this.map.getZoom()
			);
		var lon4 = center.lng;
		var lat4 = center.lat;

		lon4 = lon4 * 1000000;
		lon4 = parseInt(lon4, 10);
		lon4 = lon4 / 1000000;
		lat4 = lat4 * 1000000;
		lat4 = parseInt(lat4, 10);
		lat4 = lat4 / 1000000;
		var zumei = this.checkZumeiList(lon4, lat4);
		var zlist="";
		for(var key in zumei)  {
			if ( key == 'map' || key == 'filter' || !zumei[key][0] ) continue;
			zlist = zlist + zumei[key][0] + " , ";
		}
		zlist = zlist.substring(0,zlist.length-2);
		$( '#zumei' ).html( zlist );

		this.refreshSize();
		//this.refresh(center.lng,center.lat);
	},

	checkZumeiList : function (cx,cy)
	{
		cx = cx * 3600;		//経度を秒単位に
		cy = cy * 3600;		//緯度を秒単位に
		var zumei = [];	//図葉名を配列で入れる
	//	var zumei = "";		//図葉名をここに入れる。初めは空文字で宣言する
	//	var zumei200k ="";	//20万の図葉名をここに入れる。初めは空文字で宣言する
		for(var key in GSI.ZUYOU_LIST )	{	//図葉の数だけループさせる
			var zobj =  GSI.ZUYOU_LIST [key];		//図葉ごとのオブジェクトを作成
			if((cx>=zobj.west)&&(cy>=zobj.south)&&(cx<zobj.east)&&(cy<zobj.north))	{
				zumei.push([key,zobj.b200k]);
			}
		}
		if(zumei){		//図葉名が入っている場合は、末尾の「,」を削除
		//	alert("naka");
	//		zumei = zumei.substring(0,zumei.length-1);
		}else{				//図葉名がまだ空の場合は「内挿図又は図葉外」という文字列を格納する
	//		alert("soto");
			zumei = "内挿図又は図葉外";
		}
		return zumei;		//戻り値として、「zumei」を返す
	},

	onMapMoveEnd : function()
	{
		this.onMapMove();
		var center = this.map.getCenter().wrap();
		this.refresh(center.lng,center.lat);


	},

	clear : function()
	{

		$("#address").empty();
		$("#address").append("---");

		$("#elevation").empty();
		$("#elevation").append("---");

		this.refreshSize();
		if ( this.ajaxAddress )
		{
			try
			{
				this.ajaxAddress.abort();

			}
			catch(e )
			{
			}
			this.ajaxAddress = null;
		}

		if ( this.ajaxElevation )
		{
			try
			{
				this.ajaxElevation.abort();

			}
			catch(e )
			{
			}
			this.ajaxElevation = null;
		}

	},

	refresh : function(lon, lat){

		this.clear();

		this.refreshTimerId  = setTimeout( L.Util.bind( this.execRefresh, this, lon, lat ), 800 );


	},


	getAddressRusult : function(json)
	{

		var json = json['result'];
		if (json){

			var address = "";
			if (json.indexOf('{"result":[') != -1){
				var result = json;
				var obj;
				var html="";
				obj = eval("obj=" + result);

				var addObj = obj.result[0];
				if (addObj){
					if (addObj.prefNm) address += addObj.prefNm;
					if (addObj.conNm) address += addObj.conNm;
					if (addObj.muniNm) address += addObj.muniNm;
					if (addObj.lv01Nm) address += addObj.lv01Nm;
				}
			}

			$("#address").empty();
			$("#address").append(address ? address : "---");
			this.refreshSize();
		}
	},


	getElevationRusult : function (data)
	{
		var outPutHeight = data.elevation + "m（" + data.hsrc + "）";
		$( "#elevation" ).html( outPutHeight );
		this.refreshSize();
	},

	execRefresh : function (lon, lat)
	{

		var address = "";
		var url = CONFIG.SERVERAPI.GETADDR;
		url += "?longitude=" + lon + "&latitude=" + lat;

		var parameter = {};
		parameter['request'] = url;


		this.ajaxAddress = $.ajax({
			type: "GET",
			url:CONFIG.SERVERAPI.INTERFACE,
			data: parameter,
			dataType: "jsonp",
			timeout: 30000,
			success: L.Util.bind( this.getAddressRusult, this ),
			error : function()
			{
			}
		});

		this.ajaxElevation = $.ajax({
			type: "GET",
			dataType: "jsonp",
			url: CONFIG.SERVERAPI.GETELEVATION + "?lon=" + lon + "&lat=" + lat,
			success:  L.Util.bind( this.getElevationRusult, this )

		});
	}

} );





/************************************************************************

GSI.MapMenu
	地図、機能メニュー

************************************************************************/
GSI.MapMenuList = [];

GSI.MapMenu = L.Class.extend( {

	options : {
		position : "left",
		zIndex : 15000,
		visible : true,
		getCheckState : function( defaultState) { return defaultState; }
	},
	idCounter : 0,
	rootItem : {},

	initialize : function (map, treeConfig, options )
	{
		options = L.setOptions(this, options);
		if (!options.visible ) return;

		this.map = map;
		//this.topSelector = topSelector;
		//$( this.topSelector +' a').click(L.bind(this.onMenuClick, this));
		GSI.MapMenuList.push( this );

		//this._onMenuItemClick = L.bind(this.onMenuItemClick, this);
		this.initializeTree( treeConfig );
		map.on( 'mousedown', L.bind( function(){this.hide();}, this ) );
		$( map.getContainer() ).on( 'touchstart', L.bind( function(){this.hide();}, this ) );

		$( window ).resize( L.bind( function(){this.hide(true);}, this ) );
	},


	initializeTree : function(treeConfig)
	{
		// トップボタン生成
		var elem = $( '<a>' )
			.attr( { 'href' : 'javascript:void(0);'} )
			.html( treeConfig.title )
			.addClass( 'menu_btn' )
			.click( L.bind( this.onItemClick, this ) );
		var a = new GSI.Control.Button( elem[0], {position:'top' + this.options.position} );
		a.addTo( this.map );

		this.rootItem = {
			elem : elem,
			children : [],
			depth : 0
		};

		elem.data( { 'data' : this.rootItem } );

		this.initializeTreeItems( this.rootItem, treeConfig, 1);
		//$( document.body).append( elem );
	},

	initializeTreeItems : function( parent, treeConfig, depth  )
	{
		if ( treeConfig.children && treeConfig.children.length > 0  )
		{
			var ul = $( '<ul>' )
				.addClass( 'menu_item_frame' )
				.css( {'z-index' : this.options.zIndex  + depth   } )
				.hide();

			if ( treeConfig.childrenWidth )
			{
				ul.css( {width: treeConfig.childrenWidth+ 'px'} );
			}

			for ( var i=0; i<treeConfig.children.length; i++ )
			{

				var childConfig = treeConfig.children[i];
				if( !childConfig ) continue;
				if ( childConfig.checkCondition && !childConfig.checkCondition() ) continue;
				var li = $( '<li>' );
				var item = {};

				if ( childConfig.typeA && childConfig.typeA == 'check' )
				{
					//ul.addClass( 'wide' );
					// チェック
					var checkFrame = $( '<div>' );


					var checkState = this.options.getCheckState(childConfig.id,childConfig.defaultCheck);

					var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:checkState, title: childConfig.title} );

					li.append(
						$( '<dl>' ).append(

							$( '<dt>' ).html( '<label for="' + onOffSwitch.getId() + '">' + childConfig.title + '</label>' ).css( { 'line-height':'24px', 'margin' : '0px', 'clear':'left', 'float' : 'left', 'width' : '73%' } )

						).append (
							$( '<dd>' ).append( onOffSwitch.getElement() ).css( { 'margin' : '0px', 'margin-left' : '73%' } )
						).css( { 'margin' : '0px'} )
					).css( { "padding-top":'10px', "padding-bottom":'10px' } );

					item = {
						id : childConfig.id
					};

					onOffSwitch.getCheckBox().data( { 'data' : item } );

					onOffSwitch.on( 'change', L.bind( this.onCheckBoxClick, this, onOffSwitch.getCheckBox() ) );
					//input.click( L.bind( this.onCheckBoxClick, this, input ) );

				}
				else
				{
					// 通常
					var a = $( '<a>' )
						.attr( { 'href' : 'javascript:void(0);'} )
						.html( childConfig.title )
						.click( L.bind( this.onItemClick, this ) );

					if ( childConfig.arrow )
					{
						a.addClass( "arrow" );
						a.addClass( this.options.position );
					}
					else if ( childConfig.right )
					{
						a.addClass( "right" );
					}

					item = {
						elem : a,
						id : childConfig.id,
						children : [],
						depth : depth,
						parent :parent,
						href : childConfig.href
					};

					a.data( { 'data' : item } );

					parent.children.push( item );
					li.append( a );
				}
				ul.append( li );
				parent.childrenFrame = ul;

				this.initializeTreeItems( item, childConfig,depth + 1 );

			}


			$( document.body).append( ul );
		}
	},

	hideChildren : function(info, noEffect)
	{
		if ( info.childrenFrame )
		{
			if ( noEffect )
			{
				info.childrenFrame.hide();
			}
			else
			{
				if ( info.depth <= 0  )
				{
					this.showChildFrame( info.childrenFrame, true, {"direction": "up"}, true );
				}
				else
				{
					this.showChildFrame( info.childrenFrame, false, {"origin": ["top", "right"]}, true );
					//info.childrenFrame.hide("slide", {direction: "right"}, "fast");
				}
			}
		}

		if (info.children)
		{
			for ( var i=0; i<info.children.length; i++ )
			{
				this.hideChildren( info.children[i],noEffect );

			}
		}
	},

	_fireOnShow : function()
	{
		for ( var i = 0; i<GSI.MapMenuList.length; i++ )
		{
			if ( this != GSI.MapMenuList[i] ) GSI.MapMenuList[i].hide();
		}
	},

	showChildFrame : function(elem, isRoot, option, isHide)
	{
		var effect = ( isRoot  ? this.options.rootEffect : this.options.otherEffect );
		if ( effect )
		{
			if ( !effect.option ) effect.option = {};

			if ( option )
			{
				for( var key in option )
				{
					effect.option[ key ] = option[key];
				}
			}

			if ( !isHide )
			{
				elem.show(effect.animation, effect.option, effect.speed);
				this._fireOnShow();
			}
			else
				elem.hide(effect.animation, effect.option, effect.speed);
		}
		else
		{
			if ( !isHide )
			{
				info.childrenFrame.show();
				this._fireOnShow();
			}
			else
				info.childrenFrame.hide();
		}

	},

	onItemClick : function( event )
	{
		var target =  event.currentTarget;
		var info = $( target ).data( 'data' );
		var windowSize = GSI.Utils.getScreenSize();

		if ( info.parent )
		{
			if ( info.parent.children )
			{
				for ( var i=0;i<info.parent.children.length;i++ )
					this.hideChildren( info.parent.children[i] );
			}
		}
		if ( info && info.childrenFrame )
		{
			if ( info.childrenFrame.is( ':visible' ) )
			{

				this.hideChildren( info );

			}
			else
			{
				var pos = $(target).offset();
				if ( info.depth >= 1 )
				{
					pos.top += Math.floor( $(target).outerHeight(true ) / 2 );
				}
				else
				{
					pos.top += Math.floor( $(target).outerHeight(true )+2 );
				}

				info.childrenFrame.css( { 'visibility' : 'hidden' } ).show();
				var frameHeight = info.childrenFrame.outerHeight(true );
				var frameWidth = info.childrenFrame.outerWidth(true );
				info.childrenFrame.css( { 'visibility' : 'visible' } ).hide();

				if ( pos.top + frameHeight > windowSize.h )
				{
					pos.top -= ( pos.top + frameHeight - windowSize.h );
					if ( pos.top < 0 ) pos.top = 0;
				}

				if ( this.options.position == "left" )
				{


					if ( pos.top + frameHeight > windowSize.h )
					{
						pos.top -= ( pos.top + frameHeight - windowSize.h );
						if ( pos.top < 0 ) pos.top = 0;
					}


					if ( info.depth >= 1 )
					{
						pos.left+= Math.floor( $(target).outerWidth(true ) -30 );
					}
					info.childrenFrame
						.css({
							left : pos.left + 'px',
							top  : pos.top + 'px'
						} );

					if ( info.depth <= 0  )
					{

						this.showChildFrame( info.childrenFrame, true, {direction:'up'} );
					}
					else
					{
						this.showChildFrame( info.childrenFrame, false, { origin : ["top", "left"] } );
					}
				}
				else
				{


					if ( info.depth >= 1 )
					{
						pos.left -= frameWidth - 30;
					}
					else
					{
						pos.left += Math.floor( $(target).outerWidth(true ));
						pos.left -= frameWidth;
					}
					if ( pos.left < 0 ) pos.left = 0;

					info.childrenFrame
					.css({
						left : pos.left + 'px',
						top  : pos.top + 'px'
					} );


					if ( info.depth <= 0  )
					{

						this.showChildFrame( info.childrenFrame, true, {direction:'up'} );
					}
					else
					{
						this.showChildFrame( info.childrenFrame, false, { origin : ["top", "right"] } );
					}


				}
			}
		}
		else if ( info )
		{
			if ( info.href && info.href != '' )
			{
				this.openLink( info.href );
			}
			if ( this.options.onMenuItemClick )
			{
				this.options.onMenuItemClick(info.id);
			}
			this.hide();
		}
	},


	hide : function(noEffect)
	{
		this.hideChildren( this.rootItem, noEffect );

		//this._hideAll(this.rootItem);
		//var childSelector = $( this.topSelector ).attr( 'child_menu' );
		//$( childSelector ).fadeOut('fast');
	},

	onCheckBoxClick : function(target, event )
	{
		var info = target.data( 'data' );
		if ( this.options.onCheckItemClick )
		{
			this.options.onCheckItemClick( info.id, target.is(':checked') );
		}
	},

	openLink : function( url )
	{
		var linkUrl = GSI.Links.getURL( url, this.map.getCenter().wrap(), this.map.getZoom() );

		if ( linkUrl )
		{
			window.open( linkUrl );
			$(this.topSelector + ' span').removeClass('selected');
			$(this.topSelector + ' ul').hide();
		}
	}


} );



/************************************************************************

GSI.DialogManager
	ダイアログ管理

************************************************************************/
GSI.DialogManager = L.Class.extend( {

	dialogList : [],
	visibleList : [],

	initialize : function()
	{

	},

	append : function( dlg )
	{
		this.dialogList.push( dlg );
	},

	appendVisibleList : function( dlg )
	{
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				this.visibleList.splice( i,1 );
				break;
			}
		}

		this.adjust( dlg );
		this.visibleList.push( dlg );
		this.refreshZIndex();

		if ( !this._onWindowResize )
		{
			this._onWindowResize = L.bind( this.onWindowResize, this );
			$( window ).on( 'resize', this._onWindowResize );
		}

	},

	removeVisibleList : function( dlg )
	{
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				this.visibleList.splice( i,1 );
				break;
			}
		}
		this.refreshZIndex();

		if ( this.visibleList.length <= 0 )
		{
			if ( this._onWindowResize )
			{
				$( window ).off( 'resize', this._onWindowResize );
				this._onWindowResize = null;
			}
		}
	},

	activate : function( dlg )
	{
		this.appendVisibleList( dlg );
	},

	refreshZIndex : function()
	{
		var zIndex = 10000;
		var dlgIndex = -1;
		var idx = 1;

		for ( var i=0; i<this.visibleList.length-1; i++ )
		{
			var opacity = 0.6 + ( 0.4 / this.visibleList.length * idx );
			this.visibleList[i].css({'z-index':zIndex, opacity: opacity} );
			this.visibleList[i].addClass( "deactive");

			zIndex++;
			idx++;
		}

		if ( this.visibleList.length > 0 )
		{
			this.visibleList[ this.visibleList.length - 1 ].css({'z-index':zIndex, opacity: 0.95} );
			this.visibleList[i].removeClass( "deactive");
		}
	},


	adjust : function( d, windowSize )
	{
		if ( !windowSize ) windowSize = GSI.Utils.getScreenSize();

		var visible = d.container.is( ':visible' );
		if (  !visible )
		{
			d.container.css( { 'visibility' : 'hidden' } );
			d.container.show();
		}

		var offset = d.container.offset();
		var width = d.container.outerWidth(true);
		var height = d.container.outerHeight(true);

		var left = null;
		var top = null;


		// width
		if ( !d.isResizable() )
		{
			if ( windowSize.h > windowSize.w )
			{
				var newWidth = Math.floor( windowSize.w * 0.9 );
				if ( d.options.width > newWidth )
				{
					d.container.css( { "max-width" : newWidth } );
					width = newWidth;
				}
				else
				{

					d.container.css( { "max-width" : d.options.width } );
					width =d.options.width;
				}
			}
			else
			{
				var newWidth = Math.floor( windowSize.w * 0.6 );
				if ( d.options.width > newWidth )
				{
					d.container.css( { "max-width" : newWidth } );
					width = newWidth;
				}
				else
				{
					d.container.css( { "max-width" : d.options.width } );
					width =d.options.width;
				}
			}
		}

		// height
		if ( !d._userResized )
		{

			if ( windowSize.h > windowSize.w )
			{
				d.setMaxScrollHeight( Math.floor( windowSize.h * 0.4 )  );
			}
			else
			{
				d.setMaxScrollHeight( Math.floor( windowSize.h * 0.65 ) );
			}
		}


		//left
		if ( offset.left > windowSize.w - ( width / 2 ) )
		{

			left = (windowSize.w - ( width / 2 )) ;
		}

		if ( offset.left <= -( width / 2 ) )
		{
			left =  -Math.floor( width / 2 );
			d.container.css( {left: -Math.floor( width / 2 ) + 'px'} );
		}


		if ( left != null )
		{
			d.container.css( {left: left + 'px'} );
		}


		//top
		if ( offset.top > windowSize.h - ( height / 2 ) )
		{

			top = (windowSize.h - ( height / 2 )) ;
		}


		if ( offset.top < 0 )
		{
			top = 0;
		}

		if ( top != null )
		{
			d.container.css( {top: top + 'px'} );
		}


		if (  !visible )
		{
			d.container.hide();
			d.container.css( { 'visibility' : 'visible' } );
		}
	},

	onWindowResize : function()
	{

		var windowSize = GSI.Utils.getScreenSize();
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			this.adjust( d,windowSize );


		}
	}


} );



/************************************************************************

GSI.Dialog
	ダイアログ管理

************************************************************************/
GSI.Dialog = L.Class.extend( {

	options : {
		containerClass : 'gsi_dialog',
		headerClass : 'gsi_dialog_header',
		contentClass : 'gsi_dialog_content',
		effect : null,
		top : 0,
		left : 0,
		width : 300,
		resizable : ""
	},

	_userResized : false,

	initialize : function( options )
	{
		options = L.setOptions(this, options);
		//this.create();


		if ( !GSI.Dialog._dialogManager )GSI.Dialog._dialogManager = new GSI.DialogManager();

		GSI.Dialog._dialogManager.append( this );
		this.create();

		if ( options.visible )
			this.show();
	},

	isResizable : function()
	{
		return ( this.options.resizable && this.options.resizable != '' ? true : false );
	},

	createHeader : function()
	{
		return $('<span>').html('　　　　　　　' );
	},

	createContent : function()
	{
		return $( '<div>' ).html('　　　　　　　');
	},

	create : function()
	{
		if ( this.container ) return;
		this.container = $( '<div>' ).addClass( this.options.containerClass );
		this.headerFrame = $( '<div>' ).addClass( this.options.headerClass );
		this.contentFrame = $( '<div>' ).addClass( this.options.contentClass );

		this.closeBtn = $( '<a>' ).html( '×' ).attr({'href':'javascript:void(0);'}).addClass( 'closebtn' );


		this.headerTitle = $( '<div>' ).addClass( 'title' );
		this.headerFrame.append(this.headerTitle );

		this.headerFrame.append( this.closeBtn );
		this.headerTitle.append(this.createHeader() );



		this.contentFrame.append( this.createContent());


		this.container.append( this.headerFrame );
		this.container.append( this.contentFrame );

		$( document.body).append( this.container );


		this.container.draggable({
			delay : 100,
			scroll: false,
			handle : this.headerFrame,
			stop : L.bind( function() { GSI.Dialog._dialogManager.adjust( this ); }, this )
		})
		.on( 'mousedown', L.bind( this.onClick, this ) )
		.on( 'touchstart', L.bind( this.onClick, this ) );

		if ( this.options.width )
		{
			this.container.css( {width:this.options.width } );
		}
		this.closeBtn.click( L.bind( function(){ this.hide(true);}, this ) );
		this.container.hide();

		var left = this.options.left;
		if ( left == 'center' )
		{
			var screenSize = GSI.Utils.getScreenSize();
			left = Math.floor( (screenSize.w/2)-( this.options.width / 2 ) );

		}


		this.container .css( {
			left : left + 'px' ,
			top : this.options.top + 'px',
			width : this.options.width + 'px',
			"min-width" : "80px",
			height: 'auto'
		} );

		if ( this.isResizable() )
		{
			this.container.resizable({
				resize : L.bind( function() {
					this._onResize();
					this._userResized = true;
				},this ),
				handles: this.options.resizable
			});
		}
	},
	css : function( css )
	{
		if ( this.container ) this.container.css( css );

	},

	_onResize : function()
	{
	},

	addClass : function( className )
	{
		if ( this.container ) this.container.addClass( className );
	},

	removeClass : function( className )
	{
		if ( this.container ) this.container.removeClass( className );
	},

	show : function()
	{
		if ( !this.container ) this.create();

		GSI.Dialog._dialogManager.appendVisibleList( this );
		if ( this.options.effect )
		{
			this.container.show(this.options.effect.animation, this.options.effect.option,this.options.effect.speed,
				L.bind( function() { if ( this.afterShow ) this.afterShow(); }, this )
				);
		}
		else
		{
			this.container.show(L.bind( function() { if ( this.afterShow ) this.afterShow(); }, this ));
		}
	},

	hide : function()
	{
		GSI.Dialog._dialogManager.removeVisibleList( this );

		if ( this.options.effect )
		{
			this.container.hide(this.options.effect.animation, this.options.effect.option,this.options.effect.speed);
		}
		else
		{
			this.container.hide();
		}

	},

	setMaxScrollHeight : function( maxHeight )
	{

	},

	getVisible : function()
	{

		return( this.container && this.container.is(':visible') ? true : false );
	},

	onClick : function ()
	{
		GSI.Dialog._dialogManager.activate( this );
	}
} );




/************************************************************************

GSI.LayerTreeDialog
	ダイアログ管理

************************************************************************/
GSI.LayerTreeDialog = GSI.Dialog.extend( {

	options : {
		title : '表示できる情報'
	},

	initialize : function(mapLayerList,cocoTileLayer, options)
	{
		this.mapLayerList = mapLayerList;
		this.cocoTileLayer = cocoTileLayer;
		this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
		GSI.Dialog.prototype.initialize.call(this, options);


		cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
		cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );
	},

	createHeader : function()
	{
		this._titleFrame = $( '<div>' );
		this._titleTextFrame = $( '<div>' ).append( $('<span>').html(this.options.title ) );
		this._titleFrame.append( this._titleTextFrame);//.append(this._titleControlFrame);
		return this._titleFrame;
	},

	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this._controlFrame.outerHeight( true ) - 9;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
	},

	createContent : function()
	{
		this._contentFrame = $('<div>');
		this._controlFrame = this._createControl();
		this.listFrame = $( '<div>' ).addClass( 'layertreedialog_ul_frame' );

		this.listContainer = $( '<ul>' ).addClass( 'layertreedialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '読み込み中' );
		this.listContainer.append( li );
		this.listFrame.append( this.listContainer );

		this._contentFrame.append( this._controlFrame );

		this._contentFrame.append( this.listFrame );
		return this._contentFrame;
	},

	_createControl : function()
	{
		var frame = $( '<div>' ).addClass( 'layertreedialog_control_frame' );
		//.html( '<input type="checkbox" class="normalcheck"> 表示範囲に絞込み' );

		var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:this.cocoTileLayer.getVisible(), title: ""} );

		var onoffFrame = $( '<div>' );
		var label = $( '<label>' ).css({"padding-left":"5px"}).attr({'for':onOffSwitch.getId()}).html( '表示範囲に絞込み' );

		onOffSwitch.on( 'change' , L.bind( this._onCocoTileCheckChange, this, onOffSwitch ) );

		onoffFrame.append( onOffSwitch.getElement() );
		onoffFrame.append( label );

		/*
		var visibleAllFrame = $( '<div>' ).css({float:"right"});
		var visibleAllSwitch  =new GSI.OnOffSwitch( {className:'visibleall', checked:true, title: ""} );
		visibleAllFrame.append( visibleAllSwitch.getElement() );
		frame.append( visibleAllFrame );
		*/
		this._showAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全表示' ).addClass( 'normalbutton showallbutton' );
		this._hideAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全非表示' ).addClass( 'normalbutton showallbutton' );

		frame.append( this._hideAllButton );
		frame.append( this._showAllButton );

		frame.append( onoffFrame );

		this._showAllButton.click( L.bind( this._onShowAllClick, this ) );
		this._hideAllButton.click( L.bind( this._onHideAllClick, this ) );

		return frame;
	},


	_onCocoTileCheckChange : function(onOffSwitch)
	{
		this.cocoTileLayer.setVisible( onOffSwitch.checked() );
	},

	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}

		if ( this._contentFrame )
		{
			this._contentFrame.css( { 'height' : 'auto'} );
			this.contentFrame.css( { 'height' : 'auto'} );
			this.container.css( { 'height' : 'auto'} );
			//this.content.css( { 'height' : 'auto'} );
		}
	},

	setTree : function( tree )
	{
		this.tree = tree;
		this.current = null;
		this.initializeList();
	},

	show : function()
	{
		GSI.Dialog.prototype.show.call(this);
		//this.initializeList();
	},

	hide : function()
	{

		this._hideItemTooltip();
		if ( !CONFIG.LAYERTREEDIALOGKEEPCURRENT )
		{
			this.current = null;
			this.initializeList();
		}

		GSI.Dialog.prototype.hide.call(this);
		//this.initializeList();
	},

	onCOCOTileLoad : function(e)
	{

		//if ( layerListView ) layerListView.refresh();
		//if ( visibleLayerListView ) visibleLayerListView.refresh();
		if ( !this.tree ) return;

		this._initializeList( this.current ? this.current.entries : this.tree, true );
	},

	onCOCOTileHide : function(e )
	{
		if ( !this.tree ) return;
		this._initializeList( this.current ? this.current.entries : this.tree, true );
	},



	initializeList : function()
	{
		if ( !this.contentFrame ) return;

		this._hideItemTooltip();


		if ( !this.listContainer )
		{
			this.listContainer = $( '<ul>' ).addClass( 'layertreedialog_ul' );
			this.listFrame.empty().append( this.listContainer );
		}
		this.contentFrame.scrollTop( 0 );
		this.listContainer.empty();

		if ( this.current && this.current.toggleall )
		{
			this._showAllButton.show();
			this._hideAllButton.show();
		}
		else
		{
			this._showAllButton.hide();
			this._hideAllButton.hide();
		}

		if ( this.options.currentPath )
		{
			this.current = this._setCurrentPath( this.options.currentPath );
			this.options.currentPath = null;
		}
		this.refreshTitle();
		this._initializeList( this.current ? this.current.entries : this.tree );
		if ( this._userResized ) this._onResize();
	},


	_setCurrentPath : function(path)
	{
		var current = null;

		if ( !path || path == '' ) return null;

		var pathArr = path.split( '/' );
		var targetList = this.tree;
		var hit = false;
		for ( var i=0; i<pathArr.length; i++ )
		{
			var id = pathArr[i];
			hit = false;
			for ( var j=0;j<targetList.length; j++ )
			{
				if ( targetList[j].entries && targetList[j].id == id )
				{
					hit = true;
					current = targetList[j];
					targetList = targetList[j].entries;
					break;
				}
			}

			if ( !hit ) break;
		}

		return current;
	},

	getCurrentPath : function()
	{
		var target = this.current;

		var path = "";
		while ( target )
		{
			if ( path != '' ) path = '/' + path;
			path = target.id + path;
			target = target.parent;
		}

		return path;
	},

	refreshTitle : function()
	{
		this._titleTextFrame.empty();


		var num = 0;
		var target = this.current;

		while ( target )
		{
			if ( num > 0 )
			{
				var a = $( '<a>' ).html( target.title ).attr( { 'href' : 'javascript:void(0);' } );
				var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
				this._titleTextFrame.prepend( span );
				a.click(
					L.bind( this.onFolderClick, this, a )
				).data( { 'data' : target } );
				this._titleTextFrame.prepend( a );

			}
			else
			{
				var span= $( '<span>' ).html( target.title );
				this._titleTextFrame.prepend(span );
			}


			num++;
			target = target.parent;
		}

		if ( num > 0 )
		{
			var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
			this._titleTextFrame.prepend( span );
			var a = $( '<a>' ).html( this.options.title ).attr( { 'href' : 'javascript:void(0);' } );
			a.click(
				L.bind( this.onFolderClick, this, a )
			).data( { 'data' : null } )
			;
			this._titleTextFrame.prepend( a );
		}
		else
		{
			var span = $( '<span>' ).html( this.options.title ); //.attr( { 'href' : 'javascript:void(0);' } );
			this._titleTextFrame.prepend( span );
		}
	},

	_makeFolder : function(li, a, item)
	{

		var cocoVisible = this.cocoTileLayer.getVisible();
		var entriesCount = item.entries.length;
		var isVisible = true;
		if ( cocoVisible )
		{
			var getCOCOTileVisibleCount = function(entries, isTop)
			{
				var counter = 0;
				var currentCounter = 0;

				for ( var i=0; i<entries.length; i++ )
				{
					var entry = entries[i];
					if ( entry.entries )
					{
						var entriesCount = getCOCOTileVisibleCount( entry.entries, false );
						counter += entriesCount.total;

						if ( isTop && entriesCount.total > 0 )
						{
							currentCounter++;
						}

					}
					else
					{
						if ( !entry.cocotile || entry.hasTile  )
						{
							currentCounter++;
							counter++;
						}
					}
				}

				return { current: currentCounter, total: counter };
			};

			var count = getCOCOTileVisibleCount( item.entries, true );
			entriesCount = count.current;
			if ( count.total <= 0 ) isVisible = false;
		}

		// 子要素あり
		var title = $( '<div>' ).addClass( 'title' ).html( item.title);
		var num = $( '<div>' ).addClass( 'num' ).append( $('<span>').html(entriesCount));
		a.addClass( 'folder' ).append( title ).append( num ).click( L.bind( this.onFolderClick, this, a) );

		if ( !isVisible )
		{
			a.addClass( 'nococotile' );
			li.addClass( 'nococotile' );
		}
		else
		{
			a.removeClass( 'nococotile' );
			li.removeClass( 'nococotile' );
		}
	},

	_onLayerMouseEnter : function( a, item )
	{
		this._showItemTooltip( a, item );
	},


	_onLayerMouseLeave : function( a, item )
	{
		this._hideItemTooltip( a, item );
	},


	_makeToolTip : function( item )
	{
		var infoFrame = $( '<div>' ).addClass( 'layerinfo' ).css({"max-width":"350px"} );

		var legend = null;
		var description = null;

		if ( item.legendUrl && item.legendUrl != '')
		{
			legend =$( '<a>' ).html( '凡例を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
		}

		if ( item.html )
		{
			description =$( '<div>' ).addClass( 'description' ).html( item.html );
		}
		if ( legend ) infoFrame.append( legend );
		if ( description ) infoFrame.append( description );


		if ( item._visibleInfo )
		{
			var sliderFrame = $('<table>').addClass( 'slider_frame' );
			var tbody = $( '<tbody>' );
			var tr = $( '<tr>' );

			var opacitySlider = $( '<div>' ).addClass( 'slider' );



			tr.append( $( '<td>' ).html('透過率').css( {"white-space":"nowrap"} ) );
			tr.append( $( '<td>' ).append(opacitySlider).css( {width:"100%"} ) );

			tbody.append( tr );
			sliderFrame.append( tbody );
			infoFrame.append( sliderFrame );
			var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );


			var sliderChangeHandler = L.bind( function(item, opacitySlider) {
				var opacity = opacitySlider.slider( 'option' , 'value');
				opacity = (100 - opacity) / 100;


				item._visibleInfo.layer.setOpacity( opacity );
				item._visibleInfo.opacity = opacity;
			}, this,item,opacitySlider );


			opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.floor(( 1 - opacity ) * 100 ),
				"slide" : sliderChangeHandler,
				"change" : sliderChangeHandler,
				"stop" : sliderChangeHandler
			});
		}
		return infoFrame;
	},

	_showItemTooltip : function( a, item )
	{
		if ( item  )
		{
			if ( !this._itemTooltip )
			{
				this._itemTooltip = $( '<div>' ).addClass( 'gsi_layertreedialog_itemtooltip' ).hide();
				$( document.body ).append( this._itemTooltip );
			}

			var offset = a.offset();

			var screenSize = GSI.Utils.getScreenSize();
			var left = offset.left + parseInt( a.outerWidth(true) );
			var top = offset.top;

			if ( left > screenSize.w * 0.6 )
			{
				left = offset.left + parseInt( a.outerWidth(true) * 0.3 );
				top = offset.top + a.outerHeight(true);
			}

			this._itemTooltip.css({
				left : left + 'px',
				top  : top + 'px'
			}).empty().append( this._makeToolTip( item ) );
			this._itemTooltip.stop().hide().fadeIn( 'normal' );

			if ( this._hideToolTipHandler )
			{
				$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
				$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
				this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
				this._hideToolTipHandler  = null;
			}

			this._hideToolTipHandler  = L.bind( function(event)
			{

				if ( !this._itemTooltip || event.target == this._itemTooltip[0] ) return;


				var parents = $( event.target ).parents();


				for (var i=0; i<parents.length; i++ )
				{
					if ( parents[i] == this._itemTooltip[0] ) return;
				}

				this._hideItemTooltip();

			}, this );

			$( document.body ).bind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).bind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.bind( 'scroll', this._hideToolTipHandler );

		}
		else
		{
			this._hideItemTooltip();
		}
	},

	_hideItemTooltip : function( a, item )
	{
		if ( this._hideToolTipHandler )
		{
			$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
			this._hideToolTipHandler  = null;
		}
		if ( this._itemTooltip )
		{
			this._itemTooltip.stop().hide();
		}
	},



	_makeLayer : function( li, a, item )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();

		var title = $( '<div>' ).addClass( 'title' ).html( item.title);
		var icon = item.iconUrl;
		if ( !icon )
		{

			if ( CONFIG.LAYERTYPELIST[ item.layerType ] && CONFIG.LAYERTYPELIST[ item.layerType ].isTile)
				icon = CONFIG.DEFAULTIMAGE.TILEICON;
			else
				icon = CONFIG.DEFAULTIMAGE.FILEICON;
		}
		if ( item._visibleInfo )
		{
			var viewMark = $( '<span>' ).addClass( 'viewmark' ).html( '表示' );
			a.append( viewMark );
			a.addClass( 'view' );
		}
		else
		{
			a.removeClass( 'view' );
		}
		a.addClass( 'item' ).append( title );

		//a.unbind( 'mouseenter' ).bind( 'mouseenter', L.bind( this._onLayerMouseEnter, this, a, item ) );
		//a.unbind( 'mouseleave' ).bind( 'mouseleave', L.bind( this._onLayerMouseLeave, this, a, item ) );



		var descriptionBtn = $( '<a>' ).attr( { 'href':'javascript:void(0);'} ).addClass( 'description_btn' ).html( '詳細' );
		li.append( descriptionBtn );

		descriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );

		title.css(
			{
				"background" : "url(" + icon + ") no-repeat 8px 50%",
				"background-size" : "16px 16px"
			}
		);

		if ( CONFIG.VISIBLELAYERTYPE )
		{
			var info = $( '<div>' ).addClass( 'info' );
			if ( item.cocotile )
			{
				var span = $( '<span>' ).addClass( 'cocotile' ).html('ココタイル' );
				info.append( span );

			}

			var typeTitle = CONFIG.LAYERTYPELIST[ item.layerType ];
			if ( !typeTitle ) typeTitle = { caption : item.layerType };
			var span = $( '<span>' ).html(typeTitle.caption ).addClass( 'layertype' );
			info.append( span );

			li.append( info );
		}

		if (cocoVisible && item.cocotile && !item.hasTile )
		{
			a.removeClass( 'view' );
			a.addClass( 'nococotile' );
			li.addClass( 'nococotile' );
		}
		else
		{
			a.removeClass( 'nococotile' );
			li.removeClass( 'nococotile' );
		}

		a.click( L.bind( this.onItemClick, this, a) );
	},


	_onShowAllClick : function()
	{
		var cocoVisible = this.cocoTileLayer.getVisible();
		var list = ( this.current ? this.current.entries : this.tree );
		if ( !list || list.length <= 0  ) return;

		var showList = [];

		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			if ( item.entries ) continue;
			if (cocoVisible && item.cocotile && !item.hasTile ) continue;

			showList.push( item );
		}

		if ( showList.length > 0 )
			this.mapLayerList.appendList( showList );

	},

	_onHideAllClick : function()
	{
		var list = ( this.current ? this.current.entries : this.tree );
		if ( !list || list.length <= 0  ) return;


		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			if ( item.entries ) continue;
			if ( this.mapLayerList.exists( item ) )
			{
				this.mapLayerList.remove( item );
				//showList.push( item );
			}
		}

	},


	_initializeList : function( list, liRefresh )
	{
		this._hideItemTooltip();


		if ( !list || list.length <= 0  )
		{
			this.listContainer.empty();
			var li = $( '<li>' ).addClass( 'nodata' ).html( 'データがありません' );
			this.listContainer.append( li );
			return;
		}

		var liList = ( liRefresh ? this.listContainer.children( 'li' ) : null );

		var showAllButtonEnable = false;
		var hideAllButtonEnable = false;

		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			var li = ( liRefresh ? $( liList[i] ).empty() : $( '<li>' )  );

			var a = $( '<a>' ).attr( { 'href':'javascript:void(0);' } );
			a.data( { 'data' : item } );
			if ( item.entries )
			{
				// 子要素あり
				this._makeFolder(li, a, item );
			}
			else
			{
				// レイヤー
				this._makeLayer(li, a, item );
			}

			li.append( a );
			this.listContainer.append( li );


			if ( (item.entries) || (this.cocoTileLayer.getVisible() && item.cocotile && !item.hasTile ) ) continue;

			if ( item._visibleInfo ) hideAllButtonEnable = true;
			else showAllButtonEnable = true;

		}

		if ( showAllButtonEnable )
		{
			this._showAllButton.removeClass( 'disabled' );
		}
		else
		{
			this._showAllButton.addClass( 'disabled' );
		}

		if ( hideAllButtonEnable )
		{

			this._hideAllButton.removeClass( 'disabled' );
		}
		else
		{
			this._hideAllButton.addClass( 'disabled' );
		}

	},


	onFolderClick : function( a )
	{
		var item = a.data( 'data' );
		this.current = item;
		this.listContainer.fadeOut( 'fast',
			L.bind( function() {
				this.listContainer.fadeIn('fast');
				this.initializeList();
			}, this )
		);
	},


	onItemClick : function( a )
	{
		var item = a.data( 'data' );
		if ( !this.mapLayerList.exists( item ) )
			this.mapLayerList.append( item );
		else
			this.mapLayerList.remove( item );

	},

	onMapLayerListChange : function()
	{
		this._initializeList( this.current ? this.current.entries : this.tree, true );
	}

});






/************************************************************************

GSI.ViewListDialog
	表示中ダイアログ管理

************************************************************************/
GSI.ViewListDialog = GSI.Dialog.extend( {

	options : {
		title : '表示中の情報'
	},

	initialize : function(map, mapLayerList, cocoTileLayer, options)
	{
		this.map = map;
		this.mapLayerList = mapLayerList;
		this.cocoTileLayer = cocoTileLayer;
		this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
		GSI.Dialog.prototype.initialize.call(this, options);

		cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
		cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );

	},


	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this._controlFrame.outerHeight( true ) - 8;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
	},

	createHeader : function()
	{
		return $('<span>').html(this.options.title );
	},

	createContent : function()
	{

		this._contentFrame = $('<div>');
		this._controlFrame = this._createControl();

		this.listFrame = $( '<div>' ).addClass( 'viewlistdialog_ul_frame' );
		this.listContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '表示中の情報はありません' );
		this.listContainer.append( li );


		this.listFrame.append( this.listContainer );

		this._contentFrame.append( this._controlFrame );
		this._contentFrame.append( this.listFrame );

		return this._contentFrame;
	},

	_createControl : function()
	{
		var frame = $( '<div>' ).addClass( 'viewlistdialog_control_frame' );
		//.html( '<input type="checkbox" class="normalcheck"> 表示範囲に絞込み' );


		this._showAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全表示' ).addClass( 'normalbutton showallbutton' );
		this._hideAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全非表示' ).addClass( 'normalbutton showallbutton' );
		this._removeAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全削除' ).addClass( 'normalbutton showallbutton' );

		frame.append( this._removeAllButton );
		frame.append( this._hideAllButton );
		frame.append( this._showAllButton );

		var dummy = $('<div>').html( '&nbsp;' ).css( { "font-size": '9.5pt' } );
		frame.append(dummy );

		this._showAllButton.click( L.bind( this._onShowAllClick, this ) );
		this._hideAllButton.click( L.bind( this._onHideAllClick, this ) );
		this._removeAllButton.click( L.bind( this._onRemoveAllClick, this ) );

		return frame;
	},

	_onShowAllClick : function()
	{

		this._showAll( this.mapLayerList.getList() );
		this._showAll( this.mapLayerList.getTileList() );


	},

	_onHideAllClick : function()
	{

		this._hideAll( this.mapLayerList.getList() );
		this._hideAll( this.mapLayerList.getTileList() );

	},

	_onRemoveAllClick : function()
	{

		this._removeAll();

	},

	_showAll : function( list )
	{
		for ( var i=0;i<list.length; i++ )
		{
			var item = list[i];
			if ( item._visibleInfo._isHidden  )
			{
				item._onOffSwitch.checked( true );
				//item._visibleInfo.layer.setOpacity( item._visibleInfo.opacity );
				item._visibleInfo._isHidden = false;
				this.map.addLayer( item._visibleInfo.layer );
			}
		}
	},

	_hideAll : function(list)
	{
		for ( var i=0;i<list.length; i++ )
		{
			var item = list[i];
			if ( !item._visibleInfo._isHidden  )
			{
				item._onOffSwitch.checked( false );

				item._visibleInfo._isHidden = true;
				this.map.removeLayer( item._visibleInfo.layer );

			}
		}
	},

	_removeAll : function()
	{
		this.mapLayerList.clear();

	},

	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}
		if ( this._contentFrame )
		{
			this._contentFrame.css( { 'height' : 'auto'} );
		}
		if ( this.contentFrame )
		{
			this.contentFrame.css( { 'height' : 'auto'} );
		}
		if ( this.container )
		{
			this.container.css( { 'height' : 'auto'} );
			//this.content.css( { 'height' : 'auto'} );
		}
	},

	show : function()
	{
		GSI.Dialog.prototype.show.call(this);
	},

	initializeList : function()
	{
		if ( !this.contentFrame ) return;

		if ( !this.listContainer )
		{
			this.listContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );
			this.listFrame.empty().append( this.listContainer );
		}

		if ( !this.tileListContainer )
		{
			this.tileListContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );
			this.listFrame.append( this.tileListContainer );
			this.tileListContainer .sortable( {
				cursor: 'move',
				update : L.bind( this.onSortChange, this ),
				handle: ".item_frame",
				scroll : false
			});
	   		this.tileListContainer .disableSelection();
		}

		this.contentFrame.scrollTop( 0 );
		this.listContainer.empty();
		this.tileListContainer.empty();

		this._initializeList();
		if ( this._userResized ) this._onResize();
	},


	onSortChange : function( event, ui )
	{

		var liList = this.tileListContainer.find( 'li' );
		var list = [];
		for  ( var i=0; i<liList.length; i++ )
		{
			var item = $(liList[i]).data( 'data' );
			if ( item ) list.push( item );
		}
		this.mapLayerList.refreshTileList(list);



	},

	onCOCOTileLoad : function(e)
	{

		this._initializeList( true );
	},

	onCOCOTileHide : function(e )
	{
		this._initializeList( true );
	},

	makePankzu : function( target )
	{
		target = target.parent;

		var result = '';
		while( target )
		{
			result = target.title + (result == '' ?'': '&gt;') + result;

			target = target.parent;
		}

		return result;
	},

	_updateLayer : function( li, item, isTile )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();
		if (cocoVisible && item.cocotile && !item.hasTile )
		{
			li.addClass( 'nococotile' );
		}
		else
		{
			li.removeClass( 'nococotile' );
		}
	},

	_makeLayer : function( li, item, isTile )
	{

		var frame = $( '<div>' ).addClass( 'item_frame' );
		if ( isTile ) frame.addClass( 'tile' );
		li.data( { 'data' : item } );



		// チェック
		var onOffSwitch  =new GSI.OnOffSwitch( {className:'visible', checked:item._visibleInfo._isHidden ? false: true } );
		//onOffSwitch.on( 'change', L.bind( this.onCheckBoxClick, this, onOffSwitch.getCheckBox() ) );
		checkFrame = onOffSwitch.getElement();
		checkFrame.css({
			position:"absolute",
			right: "42px",
			top: "6px"
		});
		onOffSwitch.on( 'change', L.bind( this.onToggleClick, this, li, onOffSwitch ) );
		item._onOffSwitch = onOffSwitch;
		li.append(checkFrame );

		// 閉じる
		var closeBtn = $( '<a>' )
			.attr( { 'href':'javascript:void(0);' } ).addClass( 'closebtn' ).html( '削除' )
			.click( L.bind( this.onRemoveClick, this, li ) );
		li.append(closeBtn );


		// タイトル
		var titleFrame = $( '<a>' ).attr({href:'javascript:void(0);'}).addClass( 'titleframe' );
		var title = $( '<div>' ).addClass( 'title' );
		var icon = item.iconUrl;
		if ( !icon )
		{
			if ( CONFIG.LAYERTYPELIST[ item.layerType ] && CONFIG.LAYERTYPELIST[ item.layerType ].isTile)
				icon = CONFIG.DEFAULTIMAGE.TILEICON;
			else
				icon = CONFIG.DEFAULTIMAGE.FILEICON;
		}

		// パンくず
		var pankuzu = $( '<div>' ).addClass( 'pankuzu' ).html( this.makePankzu( item ) );
		title.html( item.title );

		titleFrame.append( pankuzu ).append( title );
		//a.addClass( 'item' ).append( titleFrame );

		titleFrame.css(
			{
				"background" : "url(" + icon + ") no-repeat 4px 50%",
				"background-size" : "16px 16px"
			}
		);

		titleFrame.append ( title );
		frame.append( titleFrame );

		li.append( frame );

		// 詳細


		var infoFrame = $( '<div>' ).addClass( 'layerinfo' );

		var legend = null;
		var description = null;

		if ( item.legendUrl && item.legendUrl != '')
		{
			legend =$( '<a>' ).html( '凡例を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
		}

		if ( item.html )
		{
			description =$( '<div>' ).addClass( 'description' ).html( item.html );
		}

		var sliderFrame = $('<table>').addClass( 'slider_frame' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );

		var opacitySlider = $( '<div>' ).addClass( 'slider' );

		if ( legend ) infoFrame.append( legend );
		if ( description ) infoFrame.append( description );

		tr.append( $( '<td>' ).html('透過率').css( {"white-space":"nowrap"} ) );
		tr.append( $( '<td>' ).append(opacitySlider).css( {width:"100%"} ) );

		tbody.append( tr );
		sliderFrame.append( tbody );
		infoFrame.append( sliderFrame );
		var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );



		var sliderChangeHandler = L.bind( function(li, opacitySlider) {
			var opacity = opacitySlider.slider( 'option' , 'value');
			opacity = (100 - opacity) / 100;


			var item = li.data( 'data' );
			item._visibleInfo.layer.setOpacity( opacity );
			item._visibleInfo.opacity = opacity;
		}, this,li,opacitySlider );


		opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.floor(( 1 - opacity ) * 100 ),
			"slide" : sliderChangeHandler,
			"change" : sliderChangeHandler,
			"stop" : sliderChangeHandler
		 });


		var cocoVisible = this.cocoTileLayer.getVisible();
		if (cocoVisible && item.cocotile && !item.hasTile )
		{
			li.addClass( 'nococotile' );
		}
		else
		{
			li.removeClass( 'nococotile' );
		}

		li.append( infoFrame );

		titleFrame.click( L.bind( this.onItemClick, this, li) );
		//

		if ( item._visibleInfo.infoShowing  )
		{
			title.addClass( 'open' );
			infoFrame.show();
		}


	},

	_mkla : function() {
		var cocoVisible = this.cocoTileLayer.getVisible();
		var titleFrame = $( '<div>' ).addClass( 'titleframe' );
		var title = $( '<div>' ).addClass( 'title' );
		var icon = item.iconUrl;
		if ( !icon )icon = CONFIG.DEFAULTIMAGE.FILEICON;

		if ( CONFIG.LAYERTYPELIST[ item.layerType ] && CONFIG.LAYERTYPELIST[ item.layerType ].isTile)
			icon = CONFIG.DEFAULTIMAGE.TILEICON;


		/*
		var info = $( '<div>' ).addClass( 'info' );
		if ( item.cocotile )
		{
			var span = $( '<span>' ).addClass( 'cocotile' ).html('ココタイル' );
			info.append( span );
		}

		var typeTitle = CONFIG.LAYERTYPELIST[ item.layerType ];
		if ( !typeTitle ) typeTitle = item.layerType;
		var span = $( '<span>' ).html(typeTitle );
		info.append( span );

		a
			.append( info )
			.click( L.bind( this.onItemClick, this, a) );
		*/
		a.click( L.bind( this.onItemClick, this, a) );
		// 凡例、説明、透明度
		var legend = null;
		var description = null;

		if ( item.legendUrl && item.legendUrl != '')
		{
			legend =$( '<a>' ).html( '関連情報を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
		}

		if ( item.description )
		{
			description =$( '<div>' ).addClass( 'description' ).html( item.description );
		}


		var opacitySlider = $( '<div>' ).addClass( 'slider' );

		a.data( { 'opacitySlider' : opacitySlider } );

		var infoFrame = $( '<div>' ).addClass( 'layerinfo' );
		if ( legend ) infoFrame.append( legend );
		if ( description ) infoFrame.append( description );

		infoFrame.append( opacitySlider );
		var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );




		var sliderChangeHandler = L.bind( function(a, opacitySlider) {
			var opacity = opacitySlider.slider( 'option' , 'value');
			opacity = (100 - opacity) / 100;


			var item = a.data( 'data' );
			item._visibleInfo.layer.setOpacity( opacity );
			item._visibleInfo.opacity = opacity;
		}, this,a,opacitySlider );


		opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.floor(( 1 - opacity ) * 100 ),
			"slide" : sliderChangeHandler,
			"change" : sliderChangeHandler,
			"stop" : sliderChangeHandler
		 });



		li.append(infoFrame);


		if (cocoVisible && item.cocotile && !item.hasTile )
		{
			a.addClass( 'nococotile' );
		}

		if ( item._visibleInfo.infoShowing  )
		{
			infoFrame.show();
			//opacitySlider.slider({range: "min",min: 0,max: 100});
			//opacitySlider.refresh(item._visibleInfo.opacity);

		}

	},

	_initializeList : function( liRefresh )
	{
		var list = this.mapLayerList.getList();
		var tileList = this.mapLayerList.getTileList();

		if ( list.length <= 0 && tileList.length <= 0 )
		{
			this.listContainer.empty();
			var li = $( '<li>' ).addClass( 'nodata' ).html( '表示中の情報はありません' );
			this.listContainer.append( li );

		}

		var liList = ( liRefresh ? this.listContainer.children( 'li' ) : null );
		var ul = this.listContainer;

		this._initializeListOne( list, liList, ul, liRefresh );

		if ( this.tileListContainer )
		{
			liList = ( liRefresh ? this.tileListContainer.children( 'li' ) : null );
			ul = this.tileListContainer;


			this._initializeListOne( tileList, liList, ul, liRefresh, true );
			this.tileListContainer.sortable("refresh");
		}
	},

	_initializeListOne : function( list,liList, ul, liRefresh, isTile )
	{
		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			var li = ( liRefresh ? $( liList[i] ) : $( '<li>' ) );


			/*
			var a = $( '<a>' ).attr( { 'href':'javascript:void(0);' } );
			a.data( { 'data' : item } );
			*/
			//li.append( a );

			if ( liRefresh )
			{
				this._updateLayer( li, item, isTile );
			}
			else
			{
				this._makeLayer(li, item, isTile );
			}

			if ( !liRefresh ) ul.append( li );

		}


	},

	onItemClick : function( li )
	{
		var item = li.data( 'data' );
		var infoFrame = li.find( '.layerinfo' );

		if ( infoFrame.is( ':visible' ) )
		{
			item._visibleInfo.infoShowing = false;
			infoFrame.slideUp( 'fast', L.bind( function(){
				if ( this._userResized ) this._onResize();
			},this ) );

			li.find('.title').removeClass( 'open' );
		}
		else
		{

			item._visibleInfo.infoShowing = true;

			infoFrame.slideDown( 'fast', L.bind( function(){
				if ( this._userResized ) this._onResize();
			},this ) );
			li.find('.title').addClass( 'open' );
		}
	},

	onMapLayerListChange : function()
	{
		this.initializeList();
	},

	onToggleClick : function(li, onOff )
	{
		var item = li.data( 'data' );

		if ( onOff.checked() )
		{
			//item._visibleInfo.layer.setOpacity( item._visibleInfo.opacity );

			item._visibleInfo._isHidden = false;
			this.map.addLayer( item._visibleInfo.layer );
		}
		else
		{

			item._visibleInfo._isHidden = true;
			this.map.removeLayer( item._visibleInfo.layer );//
			//.setOpacity( 0 );
		}
	},

	onRemoveClick : function(li)
	{
		var item = li.data( 'data' );
		li.fadeOut( 'fast', L.bind( function(li) {
			this.mapLayerList.remove( item );
			li.remove();
			if ( this._userResized ) this._onResize();
		}, this, li ) );
	}

});


GSI.OpacitySlider = L.Class.extend( {

	includes: L.Mixin.Events,
	options : { value : 1 },

	element : null,

	initialize : function (options)
	{
		options = L.setOptions(this, options);
		this.opacity = options.value;
		this.element = $( '<div>' ).addClass( 'gsi_opacity_slider' );

		this.bg = $( '<div>' ).addClass( 'gsi_opacity_slider_bg' );
		this.element.append( this.bg );

		this.btn = $( '<div>' ).addClass( 'gsi_opacity_slider_btn' ) . draggable( {
			containment: this.element,
			scroll: false,
			drag : L.bind( function(  event, ui)
			{
				var w = this.element.outerWidth(false) - 24;
				this.opacity = 1 - ui.position.left / w;

				this.fire( 'change', this.opacity );
			}, this )
		} );
		this.element.append( this.btn );

	},

	refresh : function( opacity )
	{
		this.opacity = opacity;
		var w = this.element.outerWidth(false) - 24;
		var left  = Math.floor( w * (1-this.opacity) );
		this.btn.css( {left:left} );
	},


	getElement : function(){ return this.element; },

	getOpacity : function() {
		return this.opacity;
	}
} );






/************************************************************************

GSI.SearchResultDialog
	ダイアログ管理

************************************************************************/
GSI.SearchResultDialog = GSI.Dialog.extend( {

	options : {
		title : '検索'
	},

	initialize : function(map,options)
	{
		this.map = map;

		GSI.Dialog.prototype.initialize.call(this, options);
	},

	setTitle : function( title )
	{

		var subTitle = $( '<span>' ).html( "協力:東大CSIS" ).addClass( 'searchresultdialog_subtitle' )
			.css( {'font-size':'7pt'} );

		this.title.html( title ).append( subTitle );
	},

	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this.selectFrame.outerHeight( true ) - 8;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
	},

	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );



		return $( '<div>' ).append( this.title );
	},


	hide : function ()
	{
		if ( this.markerList ) this.map.removeLayer( this.markerList );
		GSI.Dialog.prototype.hide.call(this);
	},

	createContent : function()
	{

		this.frame = $( '<div>' );
		var selectFrame = $( '<div>' ).addClass( "searchresultdialog_select_frame" );
		this.selectFrame = selectFrame;

		this.kenSelect = $( '<select>' ).css( {'width': '48%'} );
		selectFrame.append( this.kenSelect  );
		this.shiSelect = $( '<select>' ).css( {'width': '48%', 'margin-left' : '4px'} );
		selectFrame.append( this.shiSelect );

		this.initializeKenSelect();

		this.kenSelect.change( L.bind( this.onKenChange, this) );
		this.shiSelect.empty();
		this.shiSelect.append( $('<option>').html("市区町村").val("," ) );
		this.shiSelect.change( L.bind( this.onShiChange, this) );

		selectFrame.append( this.kenSelect ).append( this.shiSelect );

		this.frame.append( selectFrame );


		this.listFrame = $( '<div>' ).addClass( 'searchresultdialog_ul_frame' );
		this.listContainer = $( '<ul>' ).addClass( 'searchresultdialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '中' );
		this.listContainer.append( li );
		this.listFrame.append( this.listContainer );

		this.frame.append( this.listFrame );

		return this.frame;
	},

	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}
	},

	initializeKenSelect : function()
	{
		var select = this.kenSelect;
		select.empty();
		select.append( $('<option>').html("都道府県").val("," ) );

		var kenCode = '';
		for( var key in GSI.MUNI_ARRAY )
		{
			var muni = GSI.MUNI_ARRAY[ key ].split( ',' );

			if ( muni.length == 7 )
			{
				if ( kenCode != muni[0] )
				{
					var option = $('<option>').html(muni[1]).val(muni[0] + ',' + muni[1]);

					select.append( option );
					kenCode = muni[0];
				}
			}
		}
	},

	onKenChange : function()
	{
		var selectedKen = this.kenSelect.val().split( ',');
		var selectedKenCode = selectedKen[0];
		var selectedKenName = selectedKen[1];



		var select =this.shiSelect;
		select.empty();
		select.append( $('<option>').html("市区町村").val("," ) );

		for( var key in GSI.MUNI_ARRAY )
		{
			var muni = GSI.MUNI_ARRAY[ key ].split( ',' );

			if ( muni.length == 7 )
			{
				if ( selectedKenCode == muni[0] )
				{
					var option = $('<option>').html(muni[3]).val(muni[2] + ',' + muni[3]);

					select.append( option );
				}
			}
		}
		this.showResult();
		//this.searchStart( this.query );
	},


	onShiChange : function()
	{
		this.showResult();
		//this.searchStart( this.query );
	},

	setAddressResult : function( result )
	{
		this.addressResult = result;
		this.showResult();
	},

	setStationResult : function( result )
	{
		this.stationResult = result;
		this.showResult();
	},

	setSisetuResult : function( result )
	{
		this.sisetuResult = result;
		this.showResult();
	},

	setChimeisResult : function( result )
	{
		this.chimeiResult = result;
		this.showResult();
	},

	clear : function()
	{
		if ( this.markerList ) this.map.removeLayer( this.markerList );
		this.setTitle( '検索中' );
		this.addressResult = null;
		this.stationResult = null;
		this.sisetuResult = null;
		this.chimeiResult = null;
		var ul = this.listContainer;
		ul.empty();
		var li = $( '<li>' ).addClass( 'nodata' ).html( '検索中' );
		this.listContainer.append( li );


		this.kenSelect[0].selectedIndex = 0;
		this.shiSelect.empty();
		this.shiSelect.append( $('<option>').html("市区町村").val("," ) );
	},


	makeItem : function( item, index, subTitle )
	{
		var a = $( '<a>' ).attr( { 'href' : 'javascript:void(0);' } );

		var div = $( '<div>' ).html( item.value ).addClass('title');
		a.append( div );

		if ( subTitle && subTitle != '' )
		{
			div = $( '<div>' ).html( subTitle ).addClass('muni');
			a.append( div );
		}


		a.click( L.bind( this.onResultClick, this, item) );
		a.mouseenter( L.bind( this.onResultMouseover, this, item) );
		a.mouseleave( L.bind( this.onResultMouseout, this, item) );
		a.css( { "padding-left": '32px'} );
		if ( index < 30 )
		{
			if ( item.latitude && item.longitude && item.latitude > 0  && item.longitude > 0 )
			{
				a.css(
					{
						"background" : "url(image/mapicon/search_result.png) no-repeat 0px 50%"
					}
				);

				if ( !this._resultIcon )
				{
					this._resultIcon= L.icon({
						iconUrl: 'image/mapicon/search_result.png',
					iconSize: [24, 24],
					iconAnchor: [3, 22]
					});
				}
				item._isActive = false;
				item._marker = L.marker([item.latitude, item.longitude],{
						title : item.value,
						icon : this._resultIcon
					});
				item._marker.bindPopup(
					item.value + "<br>" +
					( subTitle && subTitle != '' ? subTitle + '<br>' : '' ) +
					item.latitude + "," + item.longitude,
					{
						maxWidth:3000
					}
					);
				this.markerList.addLayer(item._marker);
			}
		}
		return a;
	},

	showResult : function()
	{
		if ( !this.addressResult || !this.stationResult || !this.sisetuResult || !this.chimeiResult ) return;
		//|| !this.sisetuResult || !this.chimeiResult

		if ( this.markerList ) this.map.removeLayer( this.markerList );

		this.markerList = L.layerGroup();

		var num = this.addressResult.length + this.stationResult.length + this.sisetuResult.length + this.chimeiResult.length;
		var selectedKen = this.kenSelect.val().split( ',');
		var selectedKenCode = selectedKen[0];
		var selectedKenName = selectedKen[1];

		var selectedSi = this.shiSelect.val().split( ',');
		var selectedSiCode = selectedSi[0];
		var selectedSiName = selectedSi[1];

		var ul = this.listContainer;
		ul.empty();
		var viewNum = 0;

		//if ( $( this.resultSelector + ' .control' ).find( "input[name='search_addr']" ).is(':checked') )
		{
			for ( var i=0; i<this.addressResult.length; i++ )
			{
				if ( selectedKenName != '' && selectedKenName != this.addressResult[i].pref ) continue;
				if ( selectedSiName != '' && selectedSiName != this.addressResult[i].muniNm ) continue;


				var li = $( '<li>' );

				var a = this.makeItem( this.addressResult[i], viewNum, '' );
				li.append( a );
				ul.append( li );
				viewNum++;
			}
		}


		//if ( $( this.resultSelector + ' .control' ).find( "input[name='search_station']" ).is(':checked') )
		{

			for ( var i=0; i<this.stationResult.length; i++ )
			{
				if ( selectedKenCode != '' && selectedSiCode == '' && selectedKenCode != this.stationResult[i].prefCd ) continue;

				if ( selectedSiCode != '' && selectedSiCode != this.stationResult[i].muniCd ) continue;

				var li = $( '<li>' );
				var a = this.makeItem( this.stationResult[i], viewNum,this.stationResult[i].muniNm );
				li.append( a );
				ul.append( li );
				viewNum++;
			}
		}

		//if ( $( this.resultSelector + ' .control' ).find( "input[name='search_sisetu']" ).is(':checked') )
		{

			for ( var i=0; i<this.sisetuResult.length; i++ )
			{
				if ( selectedKenCode != '' && selectedSiCode == '' && selectedKenCode != this.sisetuResult[i].pref ) continue;

				if ( selectedSiCode != '' && selectedSiCode != this.sisetuResult[i].muniCd ) continue;

				var li = $( '<li>' );
				var a = this.makeItem( this.sisetuResult[i], viewNum,this.sisetuResult[i].muniNm );
				li.append( a );
				ul.append( li );
				viewNum++;
			}
		}

		//if ( $( this.resultSelector + ' .control' ).find( "input[name='search_chimei']" ).is(':checked') )
		{
			for ( var i=0; i<this.chimeiResult.length; i++ )
			{
				if ( selectedKenCode != '' && selectedSiCode == '' && selectedKenCode != this.chimeiResult[i].pref ) continue;

				if ( selectedSiCode != '' && selectedSiCode != this.chimeiResult[i].muniCd ) continue;


				var li = $( '<li>' );

				var a = this.makeItem( this.chimeiResult[i], viewNum,this.chimeiResult[i].muniNm );
				li.append( a );
				ul.append( li );
				viewNum++;
			}
		}

		this.setTitle( '検索結果:' + num + '件中' + viewNum + '件表示' );
		this.markerList.addTo( this.map );
	},

	onResultClick : function(resultItem)
	{
		this._setActiveItem( null );
		this._setActiveItem( resultItem );

		if ( resultItem.latitude && resultItem.longitude && resultItem.latitude > 0  && resultItem.longitude > 0 )
		{
			this.map.setView( [resultItem.latitude, resultItem.longitude ],CONFIG.SEARCHRESULTCLICKZOOM );

		}
		/*
		if ( resultItem.latitude && resultItem.longitude && resultItem.latitude > 0  && resultItem.longitude > 0 )
		{
			//this.map.setView(

			this.map.setView([resultItem.latitude, resultItem.longitude ] , 14);
			if ( this._resultActiveMarker )
			{
				this.markerList.removeLayer(this._resultActiveMarker);
			}


			if ( resultItem._marker )
			{
				if (  resultItem._isActive  )this.markerList.addLayer(resultItem._marker);
				 resultItem._isActive  = false;
			}
		}
		*/
	},


	_setActiveItem : function( item )
	{
		if ( !item )
		{
			if ( this._activeItem )
			{
				this._activeItem._isActive = false;
				if ( this._activeItem._marker )
				{
					this.markerList.addLayer(this._activeItem._marker);
				}
				if ( this._resultActiveMarker )
				{
					this.markerList.removeLayer(this._resultActiveMarker);
				}
				this._activeItem._isActive = false;
				this._activeItem = null;
			}
			return;
		}

		if ( item != this._activeItem )
		{
			if ( item._marker )
			{
				this.markerList.removeLayer(item._marker);
			}

			if ( !this._resultActiveMarker )
			{
				var icon = L.icon({
					iconUrl: 'image/mapicon/search_result_active.png',
					iconSize: [32, 32],
					iconAnchor: [5, 29]
				});

				this._resultActiveMarker = L.marker([item.latitude, item.longitude],{
						icon : icon,
						zIndexOffset : 1000
					});

			}
			else
			{
				this._resultActiveMarker.setLatLng( [item.latitude, item.longitude] );
			}

			this.markerList.addLayer(this._resultActiveMarker);
			this._activeItem = item;
			this._activeItem._isActive = true;


		}
	},


	onResultMouseover : function(resultItem)
	{
		this._setActiveItem( resultItem );
		/*
		if ( !resultItem._isActive )
		{
			if ( resultItem._marker )
			{
				this.markerList.removeLayer(resultItem._marker);
			}

			if ( !this._resultActiveMarker )
			{
				var icon = L.icon({
					iconUrl: 'image/mapicon/search_result_active.png',
					iconSize: [32, 32],
					iconAnchor: [5, 29]
				});

				this._resultActiveMarker = L.marker([resultItem.latitude, resultItem.longitude],{
						icon : icon,
						zIndexOffset : 1000
					});

			}
			else
			{
				this._resultActiveMarker.setLatLng( [resultItem.latitude, resultItem.longitude] );
			}

			this.markerList.addLayer(this._resultActiveMarker);
			resultItem._isActive = true;
			if ( resultItem.latitude && resultItem.longitude && resultItem.latitude > 0  && resultItem.longitude > 0 )
			{
				this.map.panTo( [resultItem.latitude, resultItem.longitude ]  );

			}
		}
		*/


	},
	onResultMouseout : function(resultItem)
	{
		if ( resultItem._isActive  )
		{
			resultItem._isActive = false;
			if ( resultItem._marker )
			{
				this.markerList.addLayer(resultItem._marker);
			}
			if ( this._resultActiveMarker )
			{
				this.markerList.removeLayer(this._resultActiveMarker);
			}

		}
	}


});




/************************************************************************

GSI.Draw
	Draw関連

************************************************************************/
GSI.Draw.convertRadius = function(radius)
{
	var result = {
		radius : radius.toFixed(1),
		unit : 'm'
	};
	if ( result.radius > 1000 )
	{
		result.radius = (radius  / 1000).toFixed(3);
		result.unit = 'km';
	}
	return result;

};

GSI.Draw.Circle = L.Draw.Circle.extend( {

	_onMouseMove: function (e)
	{
		var latlng = e.latlng,
			showRadius = this.options.showRadius,
			useMetric = this.options.metric,
			radius;

		this._tooltip.updatePosition(latlng);
		if (this._isDrawing) {
			this._drawShape(latlng);

			// Get the new radius (rounded to 1 dp)
			radius = this._shape.getRadius().toFixed(1);

			this._tooltip.updateContent({
				text: this._endLabelText,
				subtext: showRadius ? '半径: ' + L.GeometryUtil.readableDistance(radius, useMetric) : ''
			});
		}

		if (this._isDrawing)
		{
			this.fire( "change",GSI.Draw.convertRadius(this._shape.getRadius()) );
		}

	}

} );




L.FeatureGroup.include({
	closePopup : function()
	{
		for (var id in this._layers) {
			this._layers[id].closePopup();
		}
		return this;
	},

	unbindPopup : function()
	{
		for (var id in this._layers) {
			this._layers[id].unbindPopup();
		}
		return this;
	}

} );

GSI.PixelRectangle = L.Polygon.extend({
	initialize: function (center, width, height, anchorX, anchorY, options) {
		//this._boundsToLatLngs(center,width, height)
		this._center = center;
		this._width = width;
		this._height = height;
		this._anchorX = anchorX;
		this._anchorY = anchorY;

		L.Polygon.prototype.initialize.call(this, [this._center,this._center,this._center], options);
	},

	onZoomEnd : function()
	{
		this.setLatLngs( this._boundsToLatLngs( this._center, this._width, this._height, this._anchorX , this._anchorY ) );
	},

	onAdd : function(map)
	{
		L.Polygon.prototype.onAdd.call(this, map);
		this.setLatLngs( this._boundsToLatLngs( this._center, this._width, this._height, this._anchorX , this._anchorY  ) );

		this._onZoomEnd = L.bind( this.onZoomEnd, this );
		map.on( 'zoomend', this._onZoomEnd );


	},

	onRemove : function(map)
	{
		map.off( 'zoomend', this._onZoomEnd );

		L.Polygon.prototype.onRemove.call(this, map);
	},

	_boundsToLatLngs: function (center, width, height, anchorX , anchorY ) {

		var centerPoint = this._map.latLngToContainerPoint( center );

		var left = centerPoint.x - anchorX;
		var top = centerPoint.y - anchorY;

		var right = centerPoint.x + ( width- anchorX );
		var bottom = centerPoint.y + ( height- anchorY );


		var southWest = this._map.containerPointToLatLng( L.point( left, bottom ) );
		var northEast = this._map.containerPointToLatLng( L.point( right, top ) );

		latLngBounds = L.latLngBounds(southWest, northEast );
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});


GSI.Draw.Polyline = L.Draw.Polyline.extend( {

	initialize: function (map, options) {

		if ( GSI.Utils.Browser.isSmartMobile )
		{
			options.icon = new L.DivIcon({
				iconSize: new L.Point(24, 24),
				className: 'leaflet-div-icon leaflet-editing-icon gsi_draw_icon'
			});
		}
		L.Draw.Polyline.prototype.initialize.call(this, map, options);
	},

	_vertexChanged : function(latlng, added)
	{
		this._currentLatLng = latlng;

		L.Draw.Polyline.prototype._vertexChanged.call(this,latlng,added);

		var currentLatLng = this._currentLatLng,
			previousLatLng = this._markers[this._markers.length - 1].getLatLng(),
			distance;

		distance = this._measurementRunningTotal + currentLatLng.distanceTo(previousLatLng);
		var distanceStr = '0 m';
		if (distance > 1000) {
			distanceStr = (distance  / 1000).toFixed(3) + ' km';
		} else {
			distanceStr = Math.ceil(distance) + ' m';
		}
		this.fire( 'measurechange', { distance : distanceStr } );
	}

} );


GSI.Draw.Polygon = L.Draw.Polygon.extend( {

	initialize: function (map, options) {

		if ( GSI.Utils.Browser.isSmartMobile )
		{
			options.icon = new L.DivIcon({
				iconSize: new L.Point(24, 24),
				className: 'leaflet-div-icon leaflet-editing-icon gsi_draw_icon'
			});
		}
		L.Draw.Polygon.prototype.initialize.call(this, map, options);
	},

	_vertexChanged : function(latlng, added)
	{
		L.Draw.Polygon.prototype._vertexChanged.call(this,latlng,added);
		this.fire( 'measurechange', {
			distance : this._area2MeasurementString( L.GeometryUtil.geodesicArea(this._poly.getLatLngs() ) )
		} );
	},

	_area2MeasurementString : function( area )
	{
		//console.log( area );
		var result = '0 m&sup2;';
		if ( area )
		{
			if ( area < 1000000 )
			{
				result = Math.ceil(area ) + ' m&sup2;';
			}
			else
			{
				result = ( area / 1000000 ).toFixed(3) + ' km&sup2;';
			}
			//distance = L.GeometryUtil.readableArea(area, false);
		}

		return result;
	},

	_getMeasurementString: function () {
		var area = this._area;

		if (!area) {
			return null;
		}

		return this._area2MeasurementString(area);
	},


	_updateFinishHandler: function () {
		var markerCount = this._markers.length;

		// The first marker should have a click handler to close the polygon
		if (markerCount === 1) {
			this._markers[0].on('click', this._finishShape, this);
		}

		// Add and update the double click handler
		if (markerCount > 2) {
			this._markers[markerCount - 1].on('click', this._finishShape, this);
			// Only need to remove handler if has been added before
			if (markerCount > 3) {
				this._markers[markerCount - 2].off('click', this._finishShape, this);
			}
		}
	}

} );



GSI.Draw.FreehandPolyline = L.Draw.SimpleShape.extend({

	initialize: function (map, options) {
		this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end;
		this._initialLabelText = "マウスダウンで線の描画開始";

		L.Draw.SimpleShape.prototype.initialize.call(this, map, options);
	},


	_drawShape: function (latlng) {
		if (!this._shape) {
			this._shape = new L.Polyline([], this.options.shapeOptions);
			this._map.addLayer(this._shape);
		}
		else
		{
			this._shape.addLatLng(latlng);
		}
		//this.addVertex( latlng );

	},

	_fireCreatedEvent: function () {
		var plyline = new L.Polyline(this._shape.getLatLngs(), this.options.shapeOptions);
		L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, plyline);
	}

} );





/************************************************************************

GSI.MeasureDialog
	計測ダイアログ管理

************************************************************************/


GSI.MeasureDialog = GSI.Dialog.extend( {

	options : {
		title : GSI.TEXT.MEASURE.DIALOG_TITLE,
		width : "200px"
	},

	initialize : function(map,mapMouse, options)
	{
		this.map = map;
		this.mapMouse = mapMouse;

		GSI.Dialog.prototype.initialize.call(this, options);
		//alert( L.drawLocal.draw.handlers.polyline.tooltip.start );

	},

	onMeasureChange : function(e)
	{
		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}
		//console.log( e.distance );
		this.distance.html( e.distance );
	},
	onMeasureTypeChange : function()
	{
		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}

		this.stopMeasure();
		this.startMeasure();
	},

	onMeasurePathCreated : function(event)
	{
		this.measureLayer = event.layer;
		this.map.addLayer( event.layer );

		if ( this.polyLine )
		{
			this.polyLine.disable();
			this.polyLine = null;
		}

		if ( this.polygon )
		{
			this.polygon.disable();
			this.polygon = null;
		}


		if ( this.drawingItems )
		{
			this.map.removeLayer( this.drawingItems );
			this.drawingItems = null;
		}

		this.startMeasure();

	},

	startMeasure : function()
	{
		if ( this.drawingItems )  return;


		this.mapMouse.setClickMoveEnable( false );
		this.drawingItems = L.featureGroup().addTo(this.map);


		if ( this.distanceRadio.is(":checked") )
		{
			this.startDistanceMeasure();

		}
		else if ( this.areaRadio.is(":checked") )
		{
			this.startAreaMeasure();
		}
		else if ( this.featureRadio.is(":checked") )
		{
			this.startFeatureMeasure();
		}
	},

	startDistanceMeasure : function()
	{
		if ( this.polyLin ) return;
		L.drawLocal.draw.handlers.polyline.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polyline.tooltip.cont = '次の位置を選択(最終点をクリックで終了)';
		L.drawLocal.draw.handlers.polyline.tooltip.end = '次の位置を選択(最終点をクリックで終了)';

		this.polyLine =  new GSI.Draw.Polyline(this.map,{
			shapeOptions: {
				stroke: true,
				color: '#ee3333',
				weight: 2,
				opacity: 1,
				fill: false,
				clickable: true,
				dashArray : [3,3]
			},
			edit: { featureGroup: this.drawingItems },
			showLength : true

		});

		this.polyLine.on( 'measurechange',
			L.bind( this.onMeasureChange, this )
		);
		this.polyLine.enable();


	},

	startAreaMeasure : function()
	{

		if ( this.polygon ) return;
		L.drawLocal.draw.handlers.polygon.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.cont = '次の位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.end = '次の位置を選択(最終点をクリックで終了)';

		this.polygon =  new GSI.Draw.Polygon(this.map,{
			shapeOptions: {
				stroke: true,
				color: '#ee3333',
				fillColor : '#ee3333',
				fillOpacity : 0.4,
				weight: 2,
				opacity: 1,
				fill: true,
				clickable: true,
				dashArray : [3,3]
			},
			edit: { featureGroup: this.drawingItems },
			showArea : true,
			allowIntersection : false

		});

		this.polygon.on( 'measurechange',
			L.bind( this.onMeasureChange, this )
		);
		this.polygon.enable();
	},

	onLayerClick : function(layer, e)
	{
		var latLngs = layer.getLatLngs();


		var distance = 0;
		var area = 0;

		var isPolygon = false;
		var geometryType = '';
		try
		{
			geometryType = layer.toGeoJSON().geometry.type;
			isPolygon = ( geometryType == "Polygon" );

		}
		catch( e ) {}

		if ( geometryType == "MultiPolygon" ) return;

		if ( isPolygon )
		{
			// 面積
			area = L.GeometryUtil.geodesicArea(latLngs);

			var areaStr = '';

			if (area >= 1000000) {
				areaStr = (area  / 1000000).toFixed(3) + 'km&sup2;';
			} else {
				areaStr = Math.ceil(area) + 'm&sup2;';
			}

			this.distance.html( '面積:'+ areaStr );
		}
		else
		{
			//距離
			for ( var i=1; i<latLngs.length; i++ )
			{
				distance += latLngs[i-1].distanceTo(latLngs[i]);
			}


			var distanceStr = '';

			if (distance > 1000) {
				distanceStr = (distance  / 1000).toFixed(3) + 'km';
			} else {
				distanceStr = Math.ceil(distance) + 'm';
			}

			this.distance.html( '距離:' + distanceStr);
		}
		//L.DomEvent.stopPropagation(e.originalEvent);
		return true;
	},

	startFeatureMeasure : function()
	{
		//if ( !this.features )

		this.measureLayer = L.featureGroup();
		this.rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:0.5,dashArray : [3,3]};

		this.map.eachLayer(
			L.bind( function(layer){

				// ポリゴン、ライン(layer._layersはマルチポリゴン判定)以外は無視
				if ( !layer.getBounds || !layer.getLatLngs || layer._layers || layer._noMeasure ) return;

				if ( layer._measureClickHandler )
				{
					layer.off( 'click', layer._measureClickHandler );
					layer.off( 'touchend', layer._measureClickHandler );

				}
				layer._measureClickHandler = L.bind( this.onLayerClick, this, layer );

				layer.on( 'click', layer._measureClickHandler );
				this.measureLayer.addLayer( L.rectangle(layer.getBounds(), this.rectStyle) );

			}, this )
		);
		//drawingItems;
		this.map.addLayer( this.measureLayer );

	},

	stopMeasure : function()
	{

		this.map.eachLayer(
			L.bind( function(layer){

				if ( layer._measureClickHandler )
				{
					layer.off( 'click', layer._measureClickHandler );
				}

			}, this )
		);

		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}
		this.mapMouse.setClickMoveEnable( true );
		this.distance.html( '------' );
		if ( this.polyLine )
		{
			this.polyLine.disable();
			this.polyLine = null;
		}

		if ( this.polygon )
		{
			this.polygon.disable();
			this.polygon = null;
		}


		if ( this.drawingItems )
		{
			this.map.removeLayer( this.drawingItems );
			this.drawingItems = null;
		}
	},

	show : function ()
	{
		if ( !this._onMeasurePathCreated )
		{
			this._onMeasurePathCreated = L.bind( this.onMeasurePathCreated, this );
			this.map.on('draw:created', this._onMeasurePathCreated );
		}
		this.startMeasure();
		GSI.Dialog.prototype.show.call(this);
	},

	hide : function ()
	{

		if ( this._onMeasurePathCreated )
		{
			this.map.off('draw:created', this._onMeasurePathCreated );
			this._onMeasurePathCreated = null;
		}

		this.stopMeasure();
		GSI.Dialog.prototype.hide.call(this);
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );


		return $( '<div>' ).append( this.title );
	},


	createContent : function()
	{

		this.frame = $( '<div>' );
		this.radioFrame = $( '<div>' );

		// 距離
		this.distanceRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_distance',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : true
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.distanceLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_distance' } ).append( this.distanceRadio )
		.append( $( '<span>' ).html( GSI.TEXT.MEASURE.DIALOG_DISTANCE_CAPTION ) );

		// 面積
		this.areaRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_area',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : false
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.areaLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_area' } ).append( this.areaRadio )
		.append( $( '<span>' ).html(GSI.TEXT.MEASURE.DIALOG_AREA_CAPTION) );


		// 図形
		this.featureRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_feature',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : false
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.featureLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_feature' } ).append( this.featureRadio )
		.append( $( '<span>' ).html( GSI.TEXT.MEASURE.DIALOG_OBJECT_CAPTION ) );


		this.radioFrame.addClass( 'gsi_measuredialog_radiofrane' )
			.append( this.distanceLabel )
			.append( this.areaLabel )
			.append( this.featureLabel );

		// 結果
		this.distance = $( '<div>' ).html( '------' ).addClass( 'gsi_measuredialog_result' );

		this.frame.append( this.radioFrame ).append( this.distance );

		return this.frame;
	}


});


/************************************************************************

GSI.Edit


************************************************************************/


GSI.Edit.Circle = L.Edit.Circle.extend( {
	includes: L.Mixin.Events,

	_resize : function(latlng)
	{
		L.Edit.Circle.prototype._resize.call(this,latlng);

		var result = GSI.Draw.convertRadius( this._shape.getRadius() );

		this.fire( "change", result );
	}

} );

GSI.Edit.Marker = L.Class.extend( {
	includes: L.Mixin.Events,
	options :{
	},
	initialize : function( marker, options )
	{
		this.marker = marker;

		if ( this.marker ) this._map = this.marker._map;
		options = L.setOptions(this, options);
	},

	setOptions : function(options)
	{
		if ( !this.marker ) return;

		if ( options.icon )
			this.marker.setIcon( options.icon );

	},

	enable : function()
	{
		if ( !this.marker ) return;

		this.marker.dragging.enable();
		//this._createMoveMarker();
		//this._map.removeLayer( this.marker );
		//this.marker.options.draggable = true;
		//this.marker._initIcon();
	},

	disable : function()
	{
		if ( !this.marker ) return;
		this.marker.dragging.disable();
		//this.marker.options.draggable = false;
		//this.marker._initIcon();
	}

	/*
	_createMoveMarker : function()
	{
		var iconOptions ={};
		for ( var key in this.marker.options.icon.options )
		{
			iconOptions[key] = this.marker.options.icon.options[key];
		}


		var icon = new L.Icon( iconOptions );
		this.moveMarker = L.marker(this.marker.getLatLng(), {icon: icon, draggable:true});
		this.options.edit.featureGroup.addLayer( this.moveMarker );

	}
	*/
} );


GSI.Edit.Poly = L.Edit.Poly.extend( {

	updateMarkers: function () {
		this._moveMarker = null;
		L.Edit.Poly.prototype.updateMarkers.call(this);

	},
	updateMarkers2: function () {

		//this._markerGroup.clearLayers();
		if ( this._markerGroup )
		{
			var layers = this._markerGroup.getLayers();
			for ( var i=0; i<layers.length; i++ )
			{
				if ( layers[i] != this._moveMarker )
					this._markerGroup.removeLayer( layers[i] );
			}
		}
		this._initMarkers();
	},


	_initMarkers: function ()
	{
		L.Edit.Poly.prototype._initMarkers.call(this);

		if ( this._moveMarker ) return;
		var bounds = this._poly.getBounds();
		var latlng = null;

		latlng = bounds.getCenter();
		var marker = new L.Marker.Touch(latlng, {
			draggable: true,
			icon: L.icon(
			{
				iconUrl: 'image/sakuzu/icon_move.png',
				iconSize: [24, 24],
				iconAnchor: [32, 32]
			} )
		});


		marker._origLatLng = latlng;

		marker
			.on('drag', this._onCenterMarkerDrag, this)
			.on('dragend', this._fireEdit, this)
			.on('touchmove', this._onCenterMarkerDrag, this)
			.on('touchend', this._fireEdit, this);
		this._moveMarker = marker;
		this._markerGroup.addLayer(marker);
	},

	_onMarkerContextMenu : function(e) {

		L.DomEvent.preventDefault(e);

		if ( e.target._isMiddleMarker ) return;

		var latlngs = this._poly._latlngs;
		if (
			( this.options.isPolygon && latlngs.length <= 3 )
			||
			( !this.options.isPolygon && latlngs.length <= 2 )
		) return;

		latlngs.splice(e.target._index, 1);

		this._poly.setLatLngs(latlngs);
		this.updateMarkers();
	},

	_createMarker: function (latlng, index) {
		// Extending L.Marker in TouchEvents.js to include touch.
		var marker = new L.Marker.Touch(latlng, {
			draggable: true,
			icon: this.options.icon
		});

		marker._origLatLng = latlng;
		marker._index = index;

		marker
			.on('contextmenu', this._onMarkerContextMenu, this)
			.on('drag', this._onMarkerDrag, this)
			.on('dragend', this._fireEdit, this)
			.on('touchmove', this._onTouchMove, this)
			.on('touchend', this._fireEdit, this);


		this._markerGroup.addLayer(marker);

		return marker;
	},

	_removeMarker: function (marker) {
		var i = marker._index;

		this._markerGroup.removeLayer(marker);
		this._markers.splice(i, 1);
		this._poly.spliceLatLngs(i, 1);
		this._updateIndexes(i, -1);

		marker
			.off('contextmenu', this._onMarkerContextMenu, this)
			.off('drag', this._onMarkerDrag, this)
			.off('dragend', this._fireEdit, this)
			.off('touchmove', this._onMarkerDrag, this)
			.off('touchend', this._fireEdit, this)
			.off('click', this._onMarkerClick, this);
	},

	_onCenterMarkerDrag: function (e) {
		var marker = e.target;

		var latlngs = this._poly._latlngs;

		var latMove = marker._latlng.lat - marker._origLatLng.lat;
		var lngMove = marker._latlng.lng - marker._origLatLng.lng;

		for ( var i=0; i<latlngs.length; i++ )
		{
			latlngs[i].lat+=latMove;
			latlngs[i].lng+=lngMove;
		}

		this._poly.setLatLngs( latlngs);

		L.extend(marker._origLatLng, marker._latlng);

		this._poly.redraw();
		this.updateMarkers2();
	}

} );


/************************************************************************

GSI.IconSelector
	アイコン選択

************************************************************************/

GSI.IconSelector = L.Class.extend( {

	includes: L.Mixin.Events,
	iconList : [],
	options :{
		cols : 12
	},


	initialize : function( image, iconList, options )
	{
		this.image = image;
		this.image.css( { cursor:'pointer'} );
		this.iconList = ( iconList ? iconList : [] );

		options = L.setOptions(this, options);

		this.image.click( L.bind( this.onClick, this ) );




	},

	onClick : function()
	{
		this.show();
	},

	onSelect : function( iconInfo )
	{
		this.image.attr( {src:iconInfo.url} );
		this.selectedIcon = iconInfo;
		this.fire( 'select', { selectedIcon : iconInfo } );
		this.hide();
	},


	create : function()
	{
		if ( this.container )return;

		this.container = $( '<div>' ).addClass( 'gsi_iconselector' ).hide();


		var table = $( '<table>' );
		var tbody = $( '<tbody>' );

		var tr = null;
		var colNo = 0;
		for ( var i=0; i<this.iconList.length; i++ )
		{
			var iconInfo = this.iconList[i];
			colNo = i % this.options.cols;

			if ( colNo == 0 )
			{
				tr = $( '<tr>' );
				tbody.append( tr );
			}

			var td = $( '<td>' );
			var a = $( '<a>' ).attr( { href: 'javascript:void(0);'} ).click( L.bind( this.onSelect, this, iconInfo ) );
			var image = $( '<img>' ).attr( {src:iconInfo.url} );
			if ( iconInfo.size )
			{
				image.css({
					width : iconInfo.size[0],
					height : iconInfo.size[1]
				});
			}

			a.append( image );
			td.append( a );
			tr.append( td );
		}

		if ( tr )
		{
			for ( var i = colNo; i < this.options.cols; i++ )
			{

				var td = $( '<td>' ).html( '<br>' );
				tr.append( td );
			}
		}

		table.append( tbody);
		this.container.append( table );

		$( document.body ).append( this.container );
	},

	show : function()
	{

		if ( !this.container ) this.create();

		var windowSize = GSI.Utils.getScreenSize();
		var offset = this.image.offset();
		var containerSize = { w:0, h:0 };
		if ( !this.container.is( ':visible' ) )
		{
			this.container.css( { "visibility": "hidden"} );
			this.container.show();
			containerSize.w = this.container.outerWidth(true);
			containerSize.h = this.container.outerHeight(true);
			this.container.hide();
			this.container.css( {"visibility": "visible"} );
		}
		else
		{
			containerSize.w = this.container.outerWidth(true);
			containerSize.h = this.container.outerHeight(true);
		}

		var pos = {
			left:offset.left - Math.floor( containerSize.w / 2 ),
			top:offset.top + this.image.outerHeight(true )
		};

		if ( pos.top + containerSize.h > windowSize.h ) pos.top = windowSize.h - containerSize.h;
		if ( pos.left + containerSize.w > windowSize.w ) pos.left = windowSize.w - containerSize.w;

		this.container.css( {
			left : pos.left + 'px',
			top : pos.top + 'px'
		} );

		this.container.slideDown('fast');

		if ( !this._onScreenMouseDown )
		{
			this._onScreenMouseDown = L.bind( this.onScreenMouseDown, this );
			$( document.body ).on( 'mousedown', this._onScreenMouseDown );
		}

	},

	hide : function()
	{
		if ( this._onScreenMouseDown )
		{
			$( document.body ).off( 'mousedown', this._onScreenMouseDown );
			this._onScreenMouseDown = null;
		}

		if ( !this.container ) return;
		this.container.slideUp('fast');
	},


	onScreenMouseDown : function( event )
	{
		if ( !this.container ) return;
		if ( this.container[0] == event.target ) return;

		var target = $( event.target );
		var parents = target.parents();

		for ( var i=0; i<parents.length; i++ )
		{
			if ( parents[i] == this.container[0] )
			{
				return;
			}
		}

		this.hide();
	}

} );



/************************************************************************

GSI.DivIcon
	DivIcon

************************************************************************/
/*
L.Marker.prototype._initIcon = function () {
	var options = this.options,
	    map = this._map,
	    animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
	    classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

	var icon = options.icon.createIcon(this._icon),
		addIcon = false;

	// if we're not reusing the icon, remove the old one and init new one
	if (icon !== this._icon) {
		if (this._icon) {
			this._removeIcon();
		}
		addIcon = true;

		if (options.title) {
			icon.title = options.title;
		}

		if (options.alt) {
			icon.alt = options.alt;
		}
	}

	L.DomUtil.addClass(icon, classToAdd);

	if (options.keyboard) {
		icon.tabIndex = '0';
	}

	this._icon = icon;

	this._initInteraction();

	if (options.riseOnHover) {
		L.DomEvent
			.on(icon, 'mouseover', this._bringToFront, this)
			.on(icon, 'mouseout', this._resetZIndex, this);
	}

	var newShadow = options.icon.createShadow(this._shadow),
		addShadow = false;

	if (newShadow !== this._shadow) {
		this._removeShadow();
		addShadow = true;
	}

	if (newShadow) {
		L.DomUtil.addClass(newShadow, classToAdd);
	}
	this._shadow = newShadow;


	if (options.opacity < 1) {
		this._updateOpacity();
	}


	var panes = this._map._panes;

	if (addIcon) {
		panes.markerPane.appendChild(this._icon);
	}

	if (newShadow && addShadow) {
		panes.shadowPane.appendChild(this._shadow);
	}

	if ( options.icon._initializeSize)
		options.icon._initializeSize();


};
*/

GSI.DivIcon = L.DivIcon.extend( {
	options: {
		iconSize: null,
		className: 'leaflet-div-icon',
		html: false
	},

	createIcon: function (oldIcon) {

		var div = L.DivIcon.prototype.createIcon.call(this, oldIcon);
		//div.style.visibility = 'hidden';
		return div;
	}

} );

GSI.divIcon = function (options) {
	return new GSI.DivIcon(options);
};

/************************************************************************

GSI.SakuzuList
	作図リスト管理

************************************************************************/

GSI.SakuzuListItem = L.Class.extend( {

	includes: L.Mixin.Events,

	_title : '',
	_fileName : '',
	_layer : null,

	initialize : function( owner, dataType, title, fileName, layer, visible)
	{
		this.editMode = GSI.SakuzuListItem.NONE;
		this._owner = owner;
		this._dataType = dataType;
		this._title = title;
		this._fileName = fileName;
		this._layer = layer;
		this._visible = visible;
		if ( !this._layer ) this._layer = L.featureGroup();

		if ( visible ) this._owner._map.addLayer( this._layer );
	},

	getVisible : function()
	{
		return this._visible;
	},


	setVisible : function( visible)
	{
		if ( this._visible  != visible )
		{
			this._visible = visible;
			if ( this._layer )
			{
				if  ( this._visible )
					this._owner._map.addLayer( this._layer );
				else
					this._owner._map.removeLayer( this._layer );
			}

			this._owner.fire( 'visiblechange' );
		}

	},

	getTitle : function()
	{
		return this._title;
	},
	getFileName : function()
	{
		return this._fileName;
	},

	_getLayerCount : function(layer)
	{

		if ( !layer ) return 0;
		if ( !layer.getLayers ) return 1;
		var layers = layer.getLayers();

		var result = 0;
		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];
			var layerType = this._getType( layer );

			if ( layerType != GSI.SakuzuListItem.FEATURES )
				result++;
			else
			{
				result += this._getLayerCount( layer );

			}
		}

		return result;
	},

	getLayerCount : function()
	{
		return this._getLayerCount( this._layer );
	},

	remove : function()
	{
		this._owner.remove( this );
	},

	removeAllLayers : function()
	{
		if ( this._layer )
		{
			this._owner._map.removeLayer( this._layer );
			delete this._layer;
			this._layer = null;
		}
		this._layer = L.featureGroup();
		this._owner._map.addLayer( this._layer );
	},

	destroy : function()
	{
		if ( this._layer )
		{
			this._owner._map.removeLayer( this._layer );
			delete this._layer;
			this._layer = null;
		}
	},


//------------
// 以下編集
//------------

	getEditingStyle : function()
	{
		var style = null;

		if ( this._editingEditingLayer )
		{

			style = this._editingEditingLayer.options;
			if ( this._editingEditingLayer.getLayers )
			{
				var layers = this._editingEditingLayer.getLayers();

				if ( layers.length > 0 )
				{
					style = layers[0].options;
				}
			}
		}
		else if ( this._editingPathList && this._editingPathList.length > 0)
		{
			style =this._editingPathList[0].options.shapeOptions;

			style = ( style ? style : this._editingPathList[0].options );
		}

		if ( style )
		{

			if ( this._editingType == GSI.SakuzuListItem.POLYGON
				|| this._editingType == GSI.SakuzuListItem.CIRCLE
				|| this._editingType == GSI.SakuzuListItem.MULTIPOLYGON
				|| this._editingType == GSI.SakuzuListItem.MULTICIRCLE  )
			{
				if ( !style.fillColor ) style.fillColor = style.color;
				if ( !style.fillOpacity ) style.fillOpacity = style.opacity;
			}
		}
		return style;
	},

	getEditingInfo : function()
	{
		return this._editingEditingLayerInfo;
	},

	setEditingInfo : function(info)
	{
		this._editingEditingLayerInfo  = info;
	},

	setEditingStyle : function(style)
	{

		var radius = style.radius;
		if ( radius ) delete style["radius"];
		var currentStyle = this.getEditingStyle();

		var icon = null;
		var iconInfo = style._iconInfo;
		if ( iconInfo )
		{
			delete style["_iconInfo"];
			if ( iconInfo.html || iconInfo.html == '' )
			{

				var currentIconOptions = $.extend( true, {}, currentStyle.icon.options );
				if ( currentIconOptions.html == iconInfo.html ) return;
				currentIconOptions.html = iconInfo.html;
				icon = GSI.divIcon( currentIconOptions);
			}
			else
			{
				var currentIconUrl = "";
				var currentIconScale = 1;
				var currentIconSize = [20,20];
				var currentIconAnchor = [10,10];

				if ( currentStyle.icon )
				{
					currentIconUrl = currentStyle.icon.options.iconUrl;
					currentIconScale = currentStyle.icon.options._iconScale;
					currentIconSize = currentStyle.icon.options.iconSize;
					currentIconAnchor = currentStyle.icon.options.iconAnchor;

					if ( !currentIconScale ) currentIconScale = 1;


				}

				var iconScale = ( iconInfo._iconScale ? iconInfo._iconScale : currentIconScale );


				if ( currentIconSize )
				{
					currentIconSize[0] = Math.floor( parseFloat( currentIconSize[0] ) * ( 1.0 / parseFloat( currentIconScale ) ) * parseFloat( iconScale) );
					currentIconSize[1] = Math.floor( parseFloat( currentIconSize[1]) * ( 1.0 / parseFloat( currentIconScale ) ) * parseFloat( iconScale) );
				}

				if ( currentIconAnchor )
				{
					currentIconAnchor[0] = Math.floor( parseFloat( currentIconAnchor[0] ) * ( 1.0 / parseFloat( currentIconScale ) ) * parseFloat( iconScale) );
					currentIconAnchor[1] = Math.floor( parseFloat( currentIconAnchor[1]) * ( 1.0 / parseFloat( currentIconScale ) ) * parseFloat( iconScale) );
				}


				var iconSize = ( iconInfo.iconSize ? iconInfo.iconSize : currentIconSize );
				var iconAnchor = ( iconInfo.iconAnchor ? iconInfo.iconAnchor : currentIconAnchor );

				icon = L.icon( {
					iconUrl: ( iconInfo.iconUrl ? iconInfo.iconUrl : currentIconUrl ),
					iconSize: iconSize,
					iconAnchor : iconAnchor,
					_iconScale : iconScale
				} );
			}
		}

		if ( this._editingEditingLayer )
		{
			var oldStyle = this._editingEditingLayer.options;
			//if ( !oldStyle ) oldStyle = this._editingEditingLayer.options;

			var newStyle = jQuery.extend(true, oldStyle, style);

			// marker
			if ( this._editingEditingLayer.setIcon && icon )
			{
				this._editingEditingLayer.setIcon( icon );

			}

			// 円
			if ( this._editingEditingLayer.setRadius && radius ) this._editingEditingLayer.setRadius( radius );
			// その他
			if ( this._editingEditingLayer.setStyle )
			{
				//this._editingEditingLayer.options = newStyle;
				this._editingEditingLayer.setStyle( newStyle );
			}
		}

		if ( this._editingPathList && this._editingPathList.length > 0)
		{
			for ( var i=0; i<this._editingPathList.length; i++ )
			{


				// marker
				if ( icon )
				{
					this._editingPathList[i].setOptions( {icon:icon} );
					if ( this._editingPathList[i]._marker && this._editingPathList[i]._marker.setIcon )
						this._editingPathList[i]._marker.setIcon ( icon );
				}

				// 円
				if ( this._editingPathList[i].setRadius && radius ) this._editingPathList[i].setRadius( radius );

				// その他
				var newStyle = jQuery.extend(true, this._editingPathList[i].options.shapeOptions, style);
				var shape = this._editingPathList[i]._shape;
				if ( !shape ) shape = this._editingPathList[i]._poly;
				if ( !shape ) shape = this._editingPathList[i]._area;

				if ( shape && shape.setStyle )
				{
					shape.setStyle( newStyle );

				}

				if ( this._editingPathList.setOptions )
					this._editingPathList.setOptions( {shapeOptions: newStyle} );

			}

		}
	},

	startCreate : function( id )
	{
		this.setVisible( true );
		this.editCancel();
		this._owner._mapMouse.setClickMoveEnable( false );

		this.editMode = GSI.SakuzuListItem.CREATE;

		this._editingType = id;

		if ( !this._editingFreatureGroup )
		{
			this._editingFreatureGroup = L.featureGroup();
 			this._owner._map.addLayer( this._editingFreatureGroup );
 		}

 		if ( !this._pathCreatedEventHandler )
		{
			this._pathCreatedEventHandler = L.bind( this._onPathCreated, this );
			this._owner._map.on('draw:created', this._pathCreatedEventHandler );
		}


		this._editingEditingLayerInfo = {
			title : null,
			description : null,
			table : null
		};

		switch( id )
		{
			case GSI.SakuzuListItem.POINT:
				this._startEditPoint();
				break;
			case GSI.SakuzuListItem.POINT_TEXT:
				this._startEditPointText();
				break;
			case GSI.SakuzuListItem.LINESTRING:
				this._startEditLineString();
				break;
			case GSI.SakuzuListItem.POLYGON:
				this._startEditPolygon();
				break;
			case GSI.SakuzuListItem.CIRCLE:
				this._startEditCircle();
				break;
			case GSI.SakuzuListItem.FREEHAND:
				this._startEditFreehand();
				break;
		}
	},

	startEdit : function( id, layer )
	{
		this.setVisible( true );
		this.editCancel();
		this._owner._mapMouse.setClickMoveEnable( false );

		this.editMode = GSI.SakuzuListItem.EDIT;

		this._editingType = id;

		if ( !this._editingFreatureGroup )
		{
			this._editingFreatureGroup = L.featureGroup();
			this._owner._map.addLayer( this._editingFreatureGroup );
		}
		if ( !layer._information )
		{
			layer._information = this._getLayerInfo( layer );
		}
		this._editingEditingLayerInfo = $.extend( true, {}, layer._information ? layer._information : {} );
		this._editingOriginalLayer = layer;
		this._layer.removeLayer( layer );
		this._editingEditingLayer = this._cloneLayer( this._editingType, layer );
		this._editingFreatureGroup.addLayer( this._editingEditingLayer );
		//this._editingFreatureGroup.addLayer(layer);
		//this._owner._map.addLayer( event.layer );

		this._destroyEditEventHandler();
		this._destroyEditPathList();

		this._startPathEdit();

	},

	_cloneLayer : function( layerType, layer )
	{
		var result = null;
		switch( layerType )
		{
			case GSI.SakuzuListItem.POINT:
				var iconOptions =$.extend( true, {}, layer.options.icon.options );

				var icon = new L.Icon( iconOptions );
				result = L.marker(layer.getLatLng(), {icon: icon, draggable:false});
				break;


			case GSI.SakuzuListItem.POINT_TEXT:
				var iconOptions =$.extend( true, {}, layer.options.icon.options );
				/*
				var iconOptions ={};
				for ( var key in layer.options.icon.options )
				{
					iconOptions[key] = layer.options.icon.options[key];
				}
				*/
				var icon = new GSI.DivIcon( iconOptions );
				result = L.marker(layer.getLatLng(), {icon: icon, draggable:false});
				break;


			case GSI.SakuzuListItem.POLYGON:
				result =L.polygon( layer.getLatLngs(), layer.options );
				break;

			case GSI.SakuzuListItem.LINESTRING:
				result =L.polyline( layer.getLatLngs(), layer.options );
				break;


			case GSI.SakuzuListItem.CIRCLE:
				result =L.circle( layer.getLatLng(), layer.getRadius(), layer.options );
				break;


			case GSI.SakuzuListItem.MULTILINESTRING:
			case GSI.SakuzuListItem.MULTIPOINT:
			case GSI.SakuzuListItem.MULTIPOLYGON:
				result = L.featureGroup();
				result.feature = layer.feature;
				var layers = layer.getLayers();
				for( var i=0; i<layers.length; i++ )
				{
					var childLayerType = this._getType( layers[i] );
					var childLayer = this._cloneLayer( childLayerType, layers[i] );
					if ( childLayer )
					{
						childLayer._information = null;
						result.addLayer(childLayer );
					}
				}
				break;


		}

		if ( result ) result._information = layer._information;

		return result;
	},

	_getType : function( layer )
	{
		var itemType = '';

		if ( layer.getRadius )
		{
			// 円
			itemType = GSI.SakuzuListItem.CIRCLE;
		}
		else
		{

			if ( layer.getLayers )
			{
				itemType = GSI.SakuzuListItem.FEATURES;
				if ( layer.feature &&  layer.feature.geometry && layer.feature.geometry.type )
				{
					switch( layer.feature.geometry.type )
					{
						case "MultiPolygon":
							itemType = GSI.SakuzuListItem.MULTIPOLYGON;
							break;

						case "MultiLineString":
							itemType = GSI.SakuzuListItem.MULTILINESTRING;
							break;

						case "MultiPoint":
							itemType = GSI.SakuzuListItem.MULTIPOINT;
							break;
					}

				}
			}
			else
			{
				var geoJSON = layer.toGeoJSON();
				switch( geoJSON.geometry.type )
				{
					case "Point":
						// DivIcon判定
						if ( layer.options.icon.options.html || layer.options.icon.options.html == '' )
						{
							itemType = GSI.SakuzuListItem.POINT_TEXT;
						}
						else
						{
							itemType = GSI.SakuzuListItem.POINT;
						}
						break;

					case "Polygon":
						itemType = GSI.SakuzuListItem.POLYGON;
						break;
					case "LineString":
						itemType = GSI.SakuzuListItem.LINESTRING;
						break;
				}
			}
		}
		return itemType;

	},



	_onLayerClick : function( layer)
	{
		var itemType = this._getType(layer);


		if ( itemType != '' )
		{
			this._owner.fire( 'startedit' ,{ itemType:itemType, layer:layer} );

		}
	},

	_getLayers : function( layer, list )
	{
		if ( !layer ) return;

		var layerType = this._getType( layer );

		if ( layerType != GSI.SakuzuListItem.FEATURES )
		{
			list.push( layer );
		}
		else
		{
			var layers = layer.getLayers();
			for ( var i=0;i<layers.length; i++ )
				this._getLayers( layers[i], list );
		}


	},

	startSelectTarget : function()
	{
		this.setVisible( true );
		this._owner._mapMouse.setClickMoveEnable( false );

		if ( !this._layer ) return;

		// 選択用rectangle
		if ( !this._editingBoundsRects )
		{
			this._editingBoundsRects = L.featureGroup().addTo( this._owner._map );
		}

		var layers = [];
		this._getLayers( this._layer, layers );

		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];


			// ポップアップストップ
			if ( layer.closePopup )layer.closePopup();
			if ( layer.unbindPopup )layer.unbindPopup();

			// 編集
			if ( layer._clickEditHandler )
			{
				layer.off('click', layer._clickEditHandler);
				delete layer._clickEditHandler;
				layer._clickEditHandler = null;
			}

			layer._clickEditHandler = L.bind( this._onLayerClick, this, layer );


			layer.on( 'click', layer._clickEditHandler );

			var rect = null;
			var rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:1,dashArray : [3,3]};


			if ( layer.getRadius )
			{
				var radius = layer.getRadius();
				var latRadius = ( radius / 40075017 * 360 );
				var latlng = layer._latlng;

				var lngRadius = ( latRadius / Math.cos(L.LatLng.DEG_TO_RAD * latlng.lat) );

				rect = L.rectangle(
					new L.LatLngBounds(
						[latlng.lat - latRadius, latlng.lng - lngRadius],
						[latlng.lat + latRadius, latlng.lng + lngRadius]),
					rectStyle );
				//var lngRadius = layers[i]._getLngRadius(),
				//latRadius = (layers[i]._mRadius / 40075017) * 360,

			}
			else if ( layer.getBounds )
			{
				rect = L.rectangle(layer.getBounds(), rectStyle);
			}
			else
			{
				if ( layer.getLatLng )
				{
					var w = 50;
					var h = 50;
					var anchorX = 25;
					var anchorY = 25;
					if ( layer.options.icon && layer.options.icon.options.iconUrl && layer.options.icon.options.iconSize )
					{
						w = layer.options.icon.options.iconSize[0] + 8;
						h = layer.options.icon.options.iconSize[1] + 8;
					}
					else if ( layer._icon )
					{
						w = $( layer._icon ).outerWidth( false ) + 8;
						h = $( layer._icon ).outerHeight( false ) + 8;

					}

					if ( layer.options.icon && layer.options.icon.options.iconAnchor )
					{

						anchorX = layer.options.icon.options.iconAnchor[0] + 4;
						anchorY = layer.options.icon.options.iconAnchor[1] + 4;
					}
					else if ( layer.options.icon && ( layer.options.icon.options.html || layer.options.icon.options.html !='' ) )
					{

						anchorX = 4;
						anchorY = 4;
					}
					else
					{

						anchorX = Math.round( w / 2 );
						anchorY = Math.round( h / 2 );
					}

					rect = new GSI.PixelRectangle( layer.getLatLng(), w, h, anchorX, anchorY, rectStyle );
				}
			}

			layer._boundRect = rect;
			if ( rect ) this._editingBoundsRects.addLayer( rect );

		}
		if ( this._editingBoundsRects.getBounds )
		{
			try
			{
				this._owner._map.fitBounds( this._editingBoundsRects.getBounds() );
			}
			catch( e ) {}
		}


	},

	_refreshEditingBoundsRects : function()
	{
		// 選択用rectangle
		if ( !this._editingBoundsRects )
		{
			this._editingBoundsRects = L.featureGroup().addTo( this._owner._map );
		}
		else
		{
			this._editingBoundsRects.clearLayers();
		}

		var layers = [];
		this._getLayers( this._layer, layers );

		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];

			var rect = null;
			var rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:1,dashArray : [3,3]};


			if ( layer.getRadius )
			{
				var radius = layer.getRadius();
				var latRadius = ( radius / 40075017 * 360 );
				var latlng = layer._latlng;

				var lngRadius = ( latRadius / Math.cos(L.LatLng.DEG_TO_RAD * latlng.lat) );

				rect = L.rectangle(
					new L.LatLngBounds(
						[latlng.lat - latRadius, latlng.lng - lngRadius],
						[latlng.lat + latRadius, latlng.lng + lngRadius]),
					rectStyle );
				//var lngRadius = layers[i]._getLngRadius(),
				//latRadius = (layers[i]._mRadius / 40075017) * 360,

			}
			else if ( layer.getBounds )
			{
				rect = L.rectangle(layer.getBounds(), rectStyle);
			}
			else
			{
				if ( layer.getLatLng )
				{
					var w = 50;
					var h = 50;

					var anchorX = 25;
					var anchorY = 25;
					if ( layer.options.icon && layer.options.icon.options.iconUrl && layer.options.icon.options.iconSize )
					{
						w = layer.options.icon.options.iconSize[0] + 8;
						h = layer.options.icon.options.iconSize[1] + 8;
					}
					else if ( layer._icon )
					{
						w = $( layer._icon ).outerWidth( true ) + 8;
						h = $( layer._icon ).outerHeight( true ) + 8;
					}

					if ( layer.options.icon && layer.options.icon.options.iconAnchor )
					{

						anchorX = layer.options.icon.options.iconAnchor[0] + 4;
						anchorY = layer.options.icon.options.iconAnchor[1] + 4;
					}
					else if ( layer.options.icon && ( layer.options.icon.options.html || layer.options.icon.options.html !='' ) )
					{

						anchorX = 4;
						anchorY = 4;
					}
					else
					{

						anchorX = Math.round( w / 2 );
						anchorY = Math.round( h / 2 );
					}

					rect = new GSI.PixelRectangle( layer.getLatLng(), w, h, anchorX, anchorY, rectStyle );
				}
			}
			layer._boundRect = rect;
			if ( rect ) this._editingBoundsRects.addLayer( rect );
		}

	},

	// ポイント編集開始
	_startEditPoint : function()
	{
		L.drawLocal.draw.handlers.marker.tooltip.start = 'マーカーを置くポイントをクリック';

		this._editingPathList = [];

		var path =  new  L.Draw.Marker(this._owner._map,{
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : false,
			icon : L.icon( {
				iconUrl: this._owner._defaultIcon.url,
				iconSize: $.extend( true, [], this._owner._defaultIcon.size ),
				iconAnchor:$.extend( true, [], this._owner._defaultIcon.anchor ),
				_iconScale : 1 } )
		});

		path.enable();

		this._editingPathList.push( path );
	},

	// ポイント(テキスト)編集開始
	_startEditPointText : function()
	{
		L.drawLocal.draw.handlers.marker.tooltip.start = 'テキストを置くポイントをクリック';

		this._editingPathList = [];

		var path =  new  L.Draw.Marker(this._owner._map,{
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : false,
			icon : GSI.divIcon({
					className: 'leaflet-div-icon',
					html : ''
				} )
		});

		path.enable();

		this._editingPathList.push( path );
	},

	// ライン編集開始
	_startEditLineString : function()
	{
		L.drawLocal.draw.handlers.polyline.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polyline.tooltip.cont = '次の位置を選択(最終点をクリックで終了)';
		L.drawLocal.draw.handlers.polyline.tooltip.end = '次の位置を選択(最終点をクリックで終了)';


		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			weight : 3,
			stroke: true,
			fill: false,
			clickable: true
		};

		var path = new GSI.Draw.Polyline(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : true
		});
		path.enable();

		this._editingPathList.push( path );

	},



	// ポリゴン編集開始
	_startEditPolygon : function()
	{
		L.drawLocal.draw.handlers.polygon.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.cont = '次の位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.end = '次の位置を選択(最終点をクリックで終了)';

		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			fillColor : '#ff0000',
			weight : 3,
			opacity : 0.5,
			fillOpacity : 0.5,
			stroke: true,
			fill: true,
			clickable: true
		};

		var path = new GSI.Draw.Polygon(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showArea : true,
			allowIntersection : false
		});
		path.enable();

		this._editingPathList.push( path );

	},


	_startEditCircle : function()
	{
		L.drawLocal.draw.handlers.circle.tooltip.start = '中心位置をクリックしドラッグしてください';
		L.drawLocal.draw.handlers.simpleshape.tooltip.end = 'マウスボタンを離して終了';


		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			fillColor : '#ff0000',
			weight : 3,
			opacity : 0.5,
			fillOpacity : 0.5,
			stroke: true,
			fill: true,
			clickable: true
		};

		var path = new GSI.Draw.Circle(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : true
		});
		path.on( 'change', L.bind( this._onCircleChange, this ) );
		path.enable();

		this._editingPathList.push( path );

	},


	_startEditFreehand : function()
	{
		//L.drawLocal.draw.handlers.circle.tooltip.start = '中心位置をクリックしドラッグしてください';
		L.drawLocal.draw.handlers.simpleshape.tooltip.end = 'マウスボタンを離して終了';


		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			weight : 3,
			opacity : 0.5,
			stroke: true,
			fill: false,
			clickable: true
		};

		var path = new GSI.Draw.FreehandPolyline(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : true
		});
		path.enable();

		this._editingPathList.push( path );


	},

	_onCircleChange : function(event)
	{

		this._owner.fire( 'circlechange', event );
	},

	_onPathCreated : function(event)
	{
		this._editingEditingLayer = event.layer;
		this._editingFreatureGroup.addLayer(event.layer);
		//this._owner._map.addLayer( event.layer );

		this._destroyEditEventHandler();
		this._destroyEditPathList();

		this._startPathEdit();

		this._owner.fire( 'ready' );

	},

	isReady : function()
	{
		return ( this._editingEditingLayer ? true : false );
	},

	_startPathEdit : function(targetLayer )
	{

		var clearPathList = false;
		var layerType = null;
		if ( !targetLayer )
		{
			layerType = this._editingType;
			clearPathList = true;
			targetLayer = this._editingEditingLayer;
		}
		else
		{
			layerType = this._getType( targetLayer );
		}

		switch( layerType )
		{
			case GSI.SakuzuListItem.POINT:
			case GSI.SakuzuListItem.POINT_TEXT:

				var path = new GSI.Edit.Marker( targetLayer, { edit: { featureGroup: this._editingFreatureGroup } } );
				path.enable();
				if ( clearPathList )this._editingPathList = [];
				this._editingPathList.push( path );
				break;

			case GSI.SakuzuListItem.FREEHAND:
			case GSI.SakuzuListItem.LINESTRING:
			case GSI.SakuzuListItem.POLYGON:
				var path = new GSI.Edit.Poly( targetLayer, { isPolygon : ( layerType == GSI.SakuzuListItem.POLYGON ), edit: { featureGroup: this._editingFreatureGroup } } );
				path.enable();
				if ( clearPathList )this._editingPathList = [];
				this._editingPathList.push( path );
				break;

			case GSI.SakuzuListItem.CIRCLE:
				var path = new GSI.Edit.Circle( targetLayer, { edit: { featureGroup: this._editingFreatureGroup } } );
				path.on( 'change', L.bind( this._onCircleChange, this ) );
				path.enable();
				if ( clearPathList )this._editingPathList = [];
				this._editingPathList.push( path );
				break;


			case GSI.SakuzuListItem.MULTIPOINT:
			case GSI.SakuzuListItem.MULTILINESTRING:
			case GSI.SakuzuListItem.MULTIPOLYGON:
				var layers = targetLayer.getLayers();
				if ( clearPathList )this._editingPathList = [];
				for ( var i=0; i<layers.length; i++ )
				{
					this._startPathEdit( layers[i] );
				}
				break;

		}

	},


	editFinish : function()
	{
		if (this.editMode == GSI.SakuzuListItem.NONE ) return;

		//this.editMode = GSI.SakuzuListItem.EDIT;
		this._destroyEditPathList();

	 	this._editingFreatureGroup.removeLayer( this._editingEditingLayer );
		this._layer.addLayer( this._editingEditingLayer );

		if ( this._editingOriginalLayer && this._editingOriginalLayer._clickEditHandler )
 		{

			this._editingOriginalLayer.off( 'click', this._editingOriginalLayer._clickEditHandler );
			this._editingEditingLayer._clickEditHandler = L.bind( this._onLayerClick, this, this._editingEditingLayer );
			this._editingEditingLayer.on( 'click', this._editingEditingLayer._clickEditHandler );
		}

		if ( this._editingEditingLayer )
		{
 			this._editingEditingLayer._information = this._editingEditingLayerInfo;

 			var title = this._editingEditingLayer._information.title;
 			var description = this._editingEditingLayer._information.description;

 			if ( !description || description == '' )
 				description = this._infoTable2Description( this._editingEditingLayer._information.table );


 			var popupContent = '';
 			if ( title && title != '' )
 			{
				popupContent = '<h2>' + title + '</h2>';
			}

			if ( description && description != '' )
 			{
				popupContent += description;
			}


 			if ( popupContent != '' ) this._editingEditingLayer.bindPopup(popupContent,
					{
						maxWidth:5000
					} );


 		}
 		this._destroyEditObjects();
 		if ( this.editMode == GSI.SakuzuListItem.EDIT  )
 		{
			this._refreshEditingBoundsRects();

			this._owner._mapMouse.setClickMoveEnable( false );
		}
		this.editMode = GSI.SakuzuListItem.NONE;
		this._owner.fire( 'change' );
	},

	editSelectFinish : function()
	{
		this.editCancel();
		this._destroyEditSelectObjects();
	},

	editCancel : function()
	{
		if (this.editMode == GSI.SakuzuListItem.NONE ) return;

		if ( this._editingOriginalLayer )
 		{
 			this._layer.addLayer( this._editingOriginalLayer );
			this._editingOriginalLayer = null;
		}

 		this._destroyEditObjects();

 		if ( this.editMode == GSI.SakuzuListItem.EDIT  )
			this._owner._mapMouse.setClickMoveEnable( false );

		this.editMode = GSI.SakuzuListItem.NONE;
	},

	removeEditObject : function()
	{
		if ( this._editingBoundsRects )
		{
			if ( this._editingOriginalLayer && this._editingOriginalLayer._boundRect )
				this._editingBoundsRects.removeLayer( this._editingOriginalLayer._boundRect );
			if ( this._editingEditingLayer && this._editingEditingLayer._boundRect )
				this._editingBoundsRects.removeLayer( this._editingEditingLayer._boundRect );
		}
		this._editingOriginalLayer = null;
		this.editCancel();

		this._owner.fire( 'change' );
	},


	_destroyEditEventHandler : function()
	{
		if ( this._pathCreatedEventHandler )
		{
			this._owner._map.off('draw:created', this._pathCreatedEventHandler );
			delete this._pathCreatedEventHandler;
			this._pathCreatedEventHandler = null;
		}
	},

	_destroyEditPathList : function()
	{
		if ( this._editingPathList )
		{
			for ( var i=0; i<this._editingPathList.length; i++ )
			{
				try
				{
					var path = this._editingPathList[i];
					path.disable();
					delete path;
					path = null;
	 				delete this._editingPathList[i];
	 				this._editingPathList[i] = null;
	 			}
	 			catch( e )
	 			{}
			}

			delete this._editingPathList;
			this._editingPathList = null;
		}
	},


	_destroyEditObjects : function()
	{


		this._editingEditingLayerInfo = null;

		this._owner._mapMouse.setClickMoveEnable( true );

		this._destroyEditEventHandler();
		this._destroyEditPathList();

		if ( this._editingFreatureGroup )
		{
			try
			{
	 			this._owner._map.removeLayer( this._editingFreatureGroup );
	 			delete this._editingFreatureGroup;
 			}
 			catch( e )
 			{}
 			this._editingFreatureGroup = null;
 		}

 		if ( this._editingOriginalLayer )
 		{
	 		this._layer.removeLayer( this._editingOriginalLayer );
 			this._editingOriginalLayer = null;
		}

 		if ( this._editingEditingLayer )
 		{
			delete this._editingEditingLayer;
			this._editingEditingLayer = null;
		}

	},


	_destroyEditSelectObjects : function()
	{
		this._owner._mapMouse.setClickMoveEnable( true );


		if ( this._editingBoundsRects )
		{
			this._owner._map.removeLayer( this._editingBoundsRects );
			delete this._editingBoundsRects;
			this._editingBoundsRects = null;
		}

		var layers = this._layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];


			// 編集
			if ( layer._clickEditHandler )
			{
				layer.off('click', layer._clickEditHandler);
				delete layer._clickEditHandler;
				layer._clickEditHandler = null;
			}


		}

	},

	_infoTable2Description : function( table )
	{
		if ( !table ) return '';

		var trHtml = '';
		for ( var i=0; i<table.length; i++ )
		{
			var key = table[i].key;
			var value = table[i].value;

			if ( key && key != '' && value && value != '' )
			{
				trHtml += '<tr><td>' + GSI.Utils.encodeHTML(key) + '</td><td>' + GSI.Utils.encodeHTML(value) + '</td></tr>' + '\n';
			}
		}

		if ( trHtml != '' )
		{
			return '<table>\n' + trHtml + '</table>';
		}
		else
		{
			return '';
		}
	},
	_getLayerInfo : function( layer, convertToDescription )
	{
		var result = $.extend( true, {}, layer._information ? layer._information : {} );

		if (  !layer._information )
		{
			if ( layer.feature && layer.feature.properties )
			{
				for ( var key in layer.feature.properties )
				{
					if ( key != '' && CONFIG.GEOJSONSPECIALKEYS[key]  ) continue;

					var value = layer.feature.properties[ key];

					if ( (typeof value != "string" ) && ( typeof value != "number"  ) ) continue;

					if ( key == 'name' )
					{
						result.title = value;
					}
					else if ( key == 'description' )
					{
						result.description = value;
					}
					else
					{
						if ( !result.table ) result.table = [];
						result.table.push( { key:key,value:''+value} );
					}

				}


			}
			else
			{
				return result;
			}
		}
		if ( convertToDescription && !result.description || result.description == '' )
		{
			result.description = this._infoTable2Description( result.table );
		}

		return result;
	},

// KML生成
	toKML : function(styleList)
	{
		var data = '';
		var layers = this._layer.getLayers();


		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];

			var itemType = this._getType(layer2);
			var layerData = null;
			switch( itemType )
			{
				case GSI.SakuzuListItem.POINT:
					layerData = this._makeKMLPoint( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					break;
				case  GSI.SakuzuListItem.POLYGON:
				case  GSI.SakuzuListItem.CIRCLE:
					layerData = this._makeKMLPolygon( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					break;
				case GSI.SakuzuListItem.LINESTRING:
					layerData = this._makeKMLLine( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					break;
				case GSI.SakuzuListItem.FEATURES:
					layerData = this._makeKMLFeatures( layer2, styleList );
					break;
				case GSI.SakuzuListItem.MULTILINESTRING:
					layerData = this._makeKMLMultiLine( layer2, styleList );
					break;
				case GSI.SakuzuListItem.MULTIPOLYGON:
					layerData = this._makeKMLMultiPolygon( layer2, styleList );
					break;
				case GSI.SakuzuListItem.MULTIPOINT:
					layerData = this._makeKMLMultiPoint( layer2, styleList );
					break;
			}

			if ( layerData )
			{
				data += layerData.data;
			}
		}



		var styles = '';

		if ( data != '' )
		{
			for ( var styleId in styleList )
			{
				styles += styleList[ styleId ].text;
			}
			//data = '<Folder>\n'  + data + '</Folder>\n';
		}

		return styles + data;
	},

	_color2kmlColor : function( color, opacity )
	{
		if ( color && color!='' && color.charAt(0) == '#' )
		{
			color = color.slice(1);

			if ( color.length == 3 )
			{
				color = color.slice( -1 ) + color.slice( 1,-1 ) + color.slice( 0,1 );
			}
			else if ( color.length == 6 )
			{
				color = color.slice( -2 ) + color.slice( 2,-2 ) + color.slice( 0,2 );
			}
		}
		else
		{
			color='000000';
		}
		opacity = ( '' +  opacity.toString(16) );
		if ( opacity.length == 1 ) opacity = '0' + opacity;

		color = opacity + '' + color;
		return color;
	},

	_getKMLStyleId : function( itemType, styleList, layer )
	{
		//#yellowLineGreenPoly
		var styleId ='';

		switch( itemType )
		{
			case GSI.SakuzuListItem.POINT:
				var iconUrl = layer.options.icon.options.iconUrl;
				var iconSize = layer.options.icon.options.iconSize;
				var iconAnchor = layer.options.icon.options.iconAnchor;
				var iconScale = layer.options.icon.options._iconScale;

				if ( !iconScale ) iconScale = 1;
				var hotSpot = {
					x : Math.round( ( iconAnchor[0] / iconSize[0] ) * 10 ) / 10,
					y : Math.round( ( iconAnchor[1] / iconSize[1] ) * 10 ) / 10,
				};
				styleId = this._findKMLStyle( styleList, itemType, {
					iconUrl : iconUrl,
					iconScale: iconScale,
					hotSpot: hotSpot.x + ',' + hotSpot.y
				} );

				if ( !styleId )
				{
					styleId = 'PolyStyle' + this._owner.getStyleId();

					var text=
						'<Style id="' + styleId + '">\n' +
						'  <IconStyle>\n' +
						'  <Icon>\n' +
						'  <href>' + iconUrl + '</href>\n' +
						'  </Icon>\n' +
						'  <scale>' + iconScale + '</scale>\n';

					if ( hotSpot.x != 0.5 || hotSpot.y != 0.5 )
					{
						text +=
							'  <hotSpot x="' + hotSpot.x + '" y="' + hotSpot.y + '" xunits="fraction" yunits="fraction" />\n';
					}
					text +=
						'  </IconStyle>\n' +
						'</Style>\n';
					styleList [ styleId ] = {
						type : itemType,
						text : text,
						style : {
							iconUrl : iconUrl,
							iconScale: iconScale,
							hotSpot: hotSpot.x + ',' + hotSpot.y
						}
					};
				}

				break;

			case  GSI.SakuzuListItem.POLYGON:
			case  GSI.SakuzuListItem.CIRCLE:

				var color = layer.options.color;
				var opacity = Math.floor( ( layer.options.opacity ? layer.options.opacity : 1 ) * 255 );
				var weight = layer.options.weight;


				var fillColor = layer.options.fillColor;
				if ( !fillColor ) fillColor = color;
				var fillOpacity = Math.floor( ( layer.options.fillOpacity ? layer.options.fillOpacity : 1 ) * 255 );
				color = this._color2kmlColor( color, opacity );
				fillColor = this._color2kmlColor( fillColor, fillOpacity );


				styleId = this._findKMLStyle( styleList, itemType, {
					color : color,
					weight: weight,
					fillColor: fillColor
				} );

				if ( !styleId )
				{
					styleId = 'PolyStyle' + this._owner.getStyleId();

					var text=
						'<Style id="' + styleId + '">\n' +
						'  <LineStyle>\n' +
						'  <color>' + color + '</color>\n' +
						'  <width>' + weight + '</width>\n' +
						'  </LineStyle>\n' +
						'  <PolyStyle>\n' +
						'  <color>' + fillColor + '</color>\n' +
						'  </PolyStyle>\n' +
						'</Style>\n';
					styleList [ styleId ] = {
						type : itemType,
						text : text,
						style : {
							color : color,
							weight: weight,
							fillColor: fillColor
						}
					};
				}

				break;

			case GSI.SakuzuListItem.LINESTRING:
				var color = layer.options.color;
				var opacity = Math.floor( ( layer.options.opacity ? layer.options.opacity : 1 ) * 255 );
				var weight = layer.options.weight;
				color = this._color2kmlColor( color, opacity );

				if ( opacity.length == 1 ) opacity = '0' + opacity;

				styleId = this._findKMLStyle( styleList, itemType, {
					color : color,
					weight: weight
				} );

				if ( !styleId )
				{
					styleId = 'LineStyle' + this._owner.getStyleId();

					var text=
						'<Style id="' + styleId + '">\n' +
						'  <LineStyle>\n' +
						'  <color>' + color + '</color>\n' +
						'  <width>' + weight + '</width>\n' +
						'  </LineStyle>\n' +
						'</Style>\n';
					styleList [ styleId ] = {
						type : itemType,
						text : text,
						style : {
							color : color,
							weight: weight
						}
					};
				}

				break;
		}

		return styleId;
	},

	_findKMLStyle : function( styleList, itemType, style )
	{
		var id = null;
		for ( var key in styleList )
		{
			var styleData = styleList[ key ];

			if ( styleData.type = itemType )
			{
				var hit = true;
				for ( var key2 in style )
				{
					if ( styleData.style[key2] != style[key2] )
					{
						hit = false;
						break;
					}
				}

				if ( hit )
				{
					id = key;
					break;
				}

			}
		}

		return id;
	},

	_makeKMLFeatures : function( layer, styleList )
	{

		var result = {
			data : ''
		};
		var layers = layer.getLayers();


		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];

			var itemType = this._getType(layer2);
			var layerData = null;
			switch( itemType )
			{
				case GSI.SakuzuListItem.POINT:
					layerData = this._makeKMLPoint( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					if ( layerData ) result.data += layerData.data;
					break;
				case  GSI.SakuzuListItem.POLYGON:
				case  GSI.SakuzuListItem.CIRCLE:
					layerData = this._makeKMLPolygon( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					if ( layerData ) result.data += layerData.data;
					break;
				case GSI.SakuzuListItem.LINESTRING:
					layerData = this._makeKMLLine( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					if ( layerData ) result.data += layerData.data;
					break;
				case GSI.SakuzuListItem.FEATURES:
				case GSI.SakuzuListItem.MULTILINESTRING:
				case GSI.SakuzuListItem.MULTIPOLYGON:
				case GSI.SakuzuListItem.MULTIPOINT:
					layerData = this._makeKMLFeatures( layer2, styleList );
					if ( layerData )
					{
						result.data += layerData.data;
						result.data = '<Folder>\n'  + data + '</Folder>\n';
					}
					break;
			}


		}
		if ( result.data != '' )
		{
			result.data = '<Folder>\n'  +result. data + '</Folder>\n';
		}

		return result;
	},

	_makeKMLMultiPolygon : function ( layer, styleList )
	{

		var info = this._getLayerInfo( layer, false );

		var result = {
			data : ''
		};
		var layerId = '';

		var layers = layer.getLayers();
		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];

			var itemType = this._getType(layer2);
			var layerData = null;
			if ( itemType == GSI.SakuzuListItem.POLYGON )
			{
				if ( layerId == '' )
					layerId = this._getKMLStyleId( itemType, styleList, layer2 );
				layerData = this._makeKMLPolygon( layer2, layerId, info );
				if ( layerData ) result.data += layerData.data;
			}
		}

		if ( result.data != '' )
		{
			result.data = '<Folder>\n'  +result. data + '</Folder>\n';
		}

		return result;
	},


	_makeKMLMultiLine : function ( layer, styleList )
	{

		var info = this._getLayerInfo( layer, false );

		var result = {
			data : ''
		};
		var layerId = '';

		var layers = layer.getLayers();
		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];

			var itemType = this._getType(layer2);
			var layerData = null;

			if ( itemType == GSI.SakuzuListItem.LINESTRING )
			{
				if ( layerId == '' )
					layerId = this._getKMLStyleId( itemType, styleList, layer2 );
				layerData = this._makeKMLLine( layer2, layerId, info );
				if ( layerData ) result.data += layerData.data;
			}
		}

		if ( result.data != '' )
		{
			result.data = '<Folder>\n'  +result. data + '</Folder>\n';
		}

		return result;
	},

	_makeKMLMultiPoint : function ( layer, styleList )
	{

		var info = this._getLayerInfo( layer, false );

		var result = {
			data : ''
		};
		var layerId = '';

		var layers = layer.getLayers();
		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];

			var itemType = this._getType(layer2);
			var layerData = null;

			if ( itemType == GSI.SakuzuListItem.POINT )
			{
				if ( layerId == '' )
					layerId = this._getKMLStyleId( itemType, styleList, layer2 );
				layerData = this._makeKMLPoint( layer2, layerId, info );
				if ( layerData ) result.data += layerData.data;
			}
		}

		if ( result.data != '' )
		{
			result.data = '<Folder>\n'  +result. data + '</Folder>\n';
		}

		return result;
	},

	_makeKMLPoint : function( layer, styleId, info )
	{
		var latLng = layer.getLatLng();

		if ( !info ) info = this._getLayerInfo( layer, false );
		var title = info.title;
		var description = info.description;
		var table = info.table;
		if ( description )
		{
			description = description.replace( /[\n\r]/g, '' );
		}
		else if ( table && table.length > 0 )
		{
			description = this._infoTable2Description( table );
			description = description.replace( /[\n\r]/g, '' );
			table = JSON.stringify(table);
		}



		var result = {
			data : ''
		};


		result.data = '<Placemark>\n';

		if (title && title != '' )
			result.data += '<name>' + GSI.Utils.encodeHTML( title ) + '</name>' + '\n';

		if (description && description != '' )
			result.data +='<description><![CDATA[ ' + description + ' ]]></description>' + '\n';

		if (table && table != '' )
			result.data +='<tableDescription><![CDATA[ ' + table + ' ]]></tableDescription>' + '\n';


		result.data +=
			'<styleUrl>#' + styleId + '</styleUrl>' + '\n' +
			'<Point>\n' +
			'<coordinates>';

			result.data += latLng.lng + "," + latLng.lat + ",0\n";

			result.data +=
			'</coordinates>\n' +
			'</Point>\n' +
			'</Placemark>\n';
		return result;
	},

	_makeKMLPolygon : function( layer, styleId, info )
	{

		var latLngs = null;

		if ( layer.getRadius )
		{
			// 円→ポリゴン
			latLngs = [];
			var numSides = 80;
			var degreeStep = 360 / numSides;
			var center = layer.getLatLng();
			var latRadius = layer._getLatRadius();
			var lngRadius = layer._getLngRadius();

			for(var i = 0; i < numSides; i++)
			{
				var rad = (degreeStep * i) * Math.PI / 180;

				var x = center.lng + (Math.sin(rad) * lngRadius);
				var y = center.lat + (Math.cos(rad) * latRadius);
				latLngs.push(L.latLng(y, x));
			}

		}
		else
		{
			latLngs = layer.getLatLngs();
		}

		if ( !info ) info = this._getLayerInfo( layer, false );
		var title = info.title;
		var description = info.description;
		var table = info.table;
		if ( description )
		{
			description = description.replace( /[\n\r]/g, '' );
		}
		else if ( table && table.length > 0 )
		{
			description = this._infoTable2Description( table );
			description = description.replace( /[\n\r]/g, '' );
			table = JSON.stringify(table);
		}

		var result = {
			style : '',
			data : ''
		};


		result.data = '<Placemark>\n';

		if (title && title != '' )
			result.data += '<name>' + GSI.Utils.encodeHTML( title ) + '</name>' + '\n';

		if (description && description != '' )
			result.data +='<description><![CDATA[ ' + description + ' ]]></description>' + '\n';

		if (table && table != '' )
			result.data +='<tableDescription><![CDATA[ ' + table + ' ]]></tableDescription>' + '\n';


		result.data +=
			'<styleUrl>#' + styleId + '</styleUrl>' + '\n' +
			'<Polygon>' + '\n' +
			'<outerBoundaryIs>' + '\n' +
			'<LinearRing>' + '\n' +
			'<coordinates>';

		for ( var i= 0; i<latLngs.length; i++ )
		{
			result.data += latLngs[i].lng + "," + latLngs[i].lat + ",0\n";
		}
		result.data += '</coordinates>\n' +
		'</LinearRing>' + '\n' +
		'</outerBoundaryIs>' + '\n' +
		'</Polygon>\n' +
		'</Placemark>\n';

		return result;
	},

	_makeKMLLine : function(layer, styleId, info)
	{
		var latLngs = layer.getLatLngs();


		if ( !info ) info = this._getLayerInfo( layer, false );

		var title = info.title;
		var description = info.description;
		var table = info.table;
		if ( description )
		{
			description = description.replace( /[\n\r]/g, '' );
		}
		else if ( table && table.length > 0 )
		{
			description = this._infoTable2Description( table );
			description = description.replace( /[\n\r]/g, '' );
			table = JSON.stringify(table);
		}
		var result = {
			style : '',
			data : ''
		};

		result.data = '<Placemark>\n';

		if (title && title != '' )
			result.data += '<name>' + GSI.Utils.encodeHTML( title ) + '</name>' + '\n';

		if (description && description != '' )
			result.data +='<description><![CDATA[ ' + description + ' ]]></description>' + '\n';
		if (table && table != '' )
			result.data +='<tableDescription><![CDATA[ ' + table + ' ]]></tableDescription>' + '\n';

		result.data +=
			'<styleUrl>#' + styleId + '</styleUrl>' + '\n' +
			'<LineString>' + '\n' +
			'<coordinates>';

		for ( var i= 0; i<latLngs.length; i++ )
		{
			result.data += latLngs[i].lng + "," + latLngs[i].lat + ",0\n";
		}
		result.data += '</coordinates>\n' +
		'</LineString>\n' +
		'</Placemark>\n';

		return result;
	},

	// GeoJSON生成
	toGeoJSON : function()
	{
		var features = [];
		var layers = this._layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];

			var itemType = this._getType(layer);

			var geoJSONData = null;
			switch( itemType )
			{
				case GSI.SakuzuListItem.POINT:
				case GSI.SakuzuListItem.POINT_TEXT:
				case GSI.SakuzuListItem.MULTIPOINT:
					geoJSONData = this._makeGeoJSONPoint( layer);
					if ( geoJSONData ) features.push( geoJSONData );
					break;

				case GSI.SakuzuListItem.POLYGON:
				case GSI.SakuzuListItem.MULTIPOLYGON:
					geoJSONData = this._makeGeoJSONPolygon( layer);
					if ( geoJSONData ) features.push( geoJSONData );
					break;

				case GSI.SakuzuListItem.LINESTRING:
				case GSI.SakuzuListItem.MULTILINESTRING:
					geoJSONData = this._makeGeoJSONLine( layer );
					if ( geoJSONData ) features.push( geoJSONData );
					break;

				case GSI.SakuzuListItem.CIRCLE:
					geoJSONData = this._makeGeoJSONCircle( layer);
					if ( geoJSONData ) features.push( geoJSONData );
					break;

				case GSI.SakuzuListItem.FEATURES:
					this._makeGeoJSONFeatures( layer, features );
					break;
			}


		}

		return features;
	},


	_makeGeoJSONFeatures : function( layer, features )
	{
		try
		{
			var layers = layer.getLayers();
			for ( var i=0; i<layers.length; i++ )
			{
				var layer2 = layers[i];

				var itemType = this._getType(layer2);

				var geoJSONData = null;
				switch( itemType )
				{
					case GSI.SakuzuListItem.POINT:
					case GSI.SakuzuListItem.POINT_TEXT:
						geoJSONData = this._makeGeoJSONPoint( layer2);
						if ( geoJSONData ) features.push( geoJSONData );
						break;
					case  GSI.SakuzuListItem.CIRCLE:
						geoJSONData = this._makeGeoJSONCircle( layer2);
						if ( geoJSONData ) features.push( geoJSONData );
						break;
					case  GSI.SakuzuListItem.POLYGON:
						geoJSONData = this._makeGeoJSONPolygon( layer2);
						if ( geoJSONData ) features.push( geoJSONData );
						break;
					case GSI.SakuzuListItem.LINESTRING:
						geoJSONData = this._makeGeoJSONLine( layer2 );
						if ( geoJSONData ) features.push( geoJSONData );
						break;
					case GSI.SakuzuListItem.FEATURES:
						this._makeGeoJSONFeatures( layer, features );
						break;
				}

			}
		}
		catch(e)
		{
		}


	},

	_layerInfo2Properties : function( info )
	{
		if ( !info ) return {};
		var result = {};

		if ( info.description && info.description != '' )
		{
			if ( info.title && info.title != '' )
				result[ 'name' ] = info.title;
			result[ 'description' ] = info.description;
		}
		else if ( info.table )
		{
			if ( info.title && info.title != '' )
				result[ 'name' ] = info.title;
			for ( var i=0; i<info.table.length; i++ )
			{
				result[ info.table[i].key ] = info.table[i].value;
			}
		}

		return result;
	},

	_makeGeoJSONLine : function( layer )
	{
		var result = layer.toGeoJSON();

		result.properties = this._layerInfo2Properties( this._getLayerInfo( layer ) );



		var options = layer.options;
		if ( !options && layer.getLayers )
		{
			var layers = layer.getLayers();
			if ( layers.length > 0 )
			{
				options = layers[0].options;
			}
		}

		var color = options.color;
		var opacity = ( options.opacity ? options.opacity : 1 );
		var weight = options.weight;

		result.properties[ "_color"] = color;
		result.properties[ "_opacity"] = opacity;
		result.properties[ "_weight"] = weight;

		return result;
	},

	_makeGeoJSONCircle : function( layer )
	{
		var result = layer.toGeoJSON();

		result.properties = this._layerInfo2Properties( this._getLayerInfo( layer ) );

		var options = layer.options;
		if ( !options && layer.getLayers )
		{
			var layers = layer.getLayers();
			if ( layers.length > 0 )
			{
				options = layers[0].options;
			}
		}
		var color = options.color;
		var opacity = ( options.opacity ? options.opacity : 1 );
		var weight = options.weight;


		var fillColor = options.fillColor;
		var fillOpacity = ( options.fillOpacity ? options.fillOpacity : 1 );

		result.properties[ "_markerType"] = "CircleMarker";
		result.properties[ "_color"] = color;
		result.properties[ "_opacity"] = opacity;
		result.properties[ "_weight"] = weight;
		result.properties[ "_fillColor"] = fillColor;
		result.properties[ "_fillOpacity"] = fillOpacity;
		result.properties[ "_radius"] = layer.getRadius();

		return result;
	},

	_makeGeoJSONPoint : function( layer )
	{
		var result = layer.toGeoJSON();

		result.properties = this._layerInfo2Properties( this._getLayerInfo( layer ) );

		var options = layer.options;
		if ( !options && layer.getLayers )
		{
			var layers = layer.getLayers();
			if ( layers.length > 0 )
			{
				options = layers[0].options;
			}
		}

		var iconUrl = options.icon.options.iconUrl;
		var iconSize = options.icon.options.iconSize;
		var iconAnchor = options.icon.options.iconAnchor;
		var html = options.icon.options.html;

		if ( html )
		{
			result.properties[ "_markerType"] = "DivIcon";
			result.properties[ "_html"] = html;
		}

		else
		{
			result.properties[ "_markerType"] = "Icon";
			result.properties[ "_iconUrl"] = iconUrl;
		}
		result.properties[ "_iconSize"] = iconSize;
		result.properties[ "_iconAnchor"] = iconAnchor;

		if ( ! result.properties[ "_iconSize"]  ) delete result.properties[ "_iconSize"] ;

		if ( ! result.properties[ "_iconAnchor"]  ) delete result.properties[ "_iconAnchor"] ;

		return result;
	},

	_makeGeoJSONPolygon : function( layer )
	{
		var result = layer.toGeoJSON();

		result.properties = this._layerInfo2Properties( this._getLayerInfo( layer ) );

		var options = layer.options;
		if ( !options && layer.getLayers )
		{
			var layers = layer.getLayers();
			if ( layers.length > 0 )
			{
				options = layers[0].options;
			}
		}

		if ( !options ) options = {};

		var color = options.color;
		var opacity = ( options.opacity ? options.opacity : 1 );
		var weight = options.weight;


		var fillColor = options.fillColor;
		var fillOpacity = ( options.fillOpacity ? options.fillOpacity : 1 );

		if ( !fillColor ) fillColor = color;

		result.properties[ "_color"] = color;
		result.properties[ "_opacity"] = opacity;
		result.properties[ "_weight"] = weight;
		result.properties[ "_fillColor"] = fillColor;
		result.properties[ "_fillOpacity"] = fillOpacity;

		return result;
	}



} );

GSI.SakuzuListItem.GEOJSON = 1;
GSI.SakuzuListItem.KML = 2;

GSI.SakuzuListItem.NONE = 0;
GSI.SakuzuListItem.CREATE = 1;
GSI.SakuzuListItem.EDIT = 2;

GSI.SakuzuListItem.POINT = "point";
GSI.SakuzuListItem.POINT_TEXT = "point_text";
GSI.SakuzuListItem.LINESTRING = "line";
GSI.SakuzuListItem.POLYGON = "polygon";
GSI.SakuzuListItem.CIRCLE = "circle";
GSI.SakuzuListItem.FREEHAND = "freehand";
GSI.SakuzuListItem.FEATURES = "features";

GSI.SakuzuListItem.MULTIPOINT = "multipoint";
GSI.SakuzuListItem.MULTILINESTRING = "multiline";
GSI.SakuzuListItem.MULTIPOLYGON = "multipolygon";




GSI.SakuzuList = L.Class.extend( {

	includes: L.Mixin.Events,


	_list : [],

	initialize : function(map,mapMouse,defaultIcon, options)
	{
		this._map = map;
		this._mapMouse = mapMouse;
		// ↓値をコピー
		this._defaultIcon  = $.extend( true, {}, defaultIcon );
		// 作図データ
		if ( options.defaultList && options.defaultList.length > 0 )
		{
			for ( var i=0; i<options.defaultList.length; i++ )
			{
				var fileName = ( i==0 ? GSI.TEXT.SAKUZU.SAKUZUTITLE : options.defaultList[0].fileName );
				var noExt = ( i==0 );

				var geoJSON = {
					"type": "FeatureCollection",
					"features": options.defaultList[i].features
				};
				var item = this._loadJSON( fileName, geoJSON, options.defaultList[0], noExt );

				if ( i==0 && !item )
				{
					this._list.push( new GSI.SakuzuListItem( this, null, GSI.TEXT.SAKUZU.SAKUZUTITLE, '', null, true ) );
				}
				if ( !options.defaultList[0].visible )
				{
					item.setVisible( false );
				}

				//this._list.push(item  );
			}
		}
		else
		{
			this._list.push( new GSI.SakuzuListItem( this, null, GSI.TEXT.SAKUZU.SAKUZUTITLE, '', null, true ) );
		}

	},

	getSakuzuItem : function()
	{
		return this._list[0];
	},

	eachItems : function(fnc)
	{
		for ( var i=0; i<this._list.length; i++ )
		{
			fnc( this._list[i] );
		}
	},

	getLength: function()
	{
		return this._list.length;
	},

	get : function( idx )
	{
		return this._list[idx];
	},

	remove : function( obj )
	{

		for ( var i=0; i<this._list.length; i++ )
		{
			if ( this._list[ i ] == obj )
			{
				this.removeByIndex( i );
				break;
			}
		}



	},

	removeByIndex : function( idx )
	{
		if ( idx == 0 )
		{
			this._list[idx].removeAllLayers();
		}
		else
		{
			this._list[idx].destroy();
			this._list.splice(idx, 1);
		}

		this.fire( 'change' );
	},


	loadFromFile : function( files )
	{
		/*
		var files = this.kmlFileSelect.prop( 'files' );
		if( !files ) files = this.kmlFileSelect.attr( 'files' );
		*/

		if ( files && files.length > 0 )
		{
			this._fileReader = new FileReader();
			this._fileReader.onload = L.bind( this._onFileLoad, this , files[0].name);
			this._fileReader.onerror = function() { alert( GSI.TEXT.SAKUZU.LOAD_ERROR ); };
			this._fileReader.readAsText(files[0]);
		}
		else
		{
			alert( GSI.TEXT.SAKUZU.LOAD_NOFILE );
		}
	},

	loadFromText : function( text, fileName )
	{
		var item = null;
		try
		{
			var json = JSON.parse( text);
			item = this._loadJSON( fileName, json );
		}
		catch( e)
		{
			try
			{
				item = this._loadKML( fileName, text );
			}
			catch( e)
			{

			}
		}

		try
		{
			if ( item && item._layer && item._layer.getBounds ) this._map.fitBounds( item._layer.getBounds() );
		}
		catch( e){}

		this.fire( 'load', { error : ( item ? false : true ) } );
		this.fire( 'change' );
	},

	_onFileLoad : function( fileName )
	{
		var item = null;
		try
		{
			var json = JSON.parse( this._fileReader.result);

			item = this._loadJSON( fileName, json );
		}
		catch( e)
		{
			try
			{
				item = this._loadKML( fileName );
			}
			catch( e)
			{
			}
		}

		try
		{
			if ( item && item._layer && item._layer.getBounds ) this._map.fitBounds( item._layer.getBounds() );
		}
		catch( e){}

		this.fire( 'load', { error : ( item ? false : true ) } );
		this.fire( 'change' );
	},

	_loadJSON : function( fileName, json, noExt )
	{

		var layer = new GSI.GeoJSON(null);
		layer.addData( json );
		if ( !fileName )
		{
			fileName = "file-" + this._list.length + ".geojson";
		}
		else if ( !noExt && !fileName.match( /\./ ) )
		{
			fileName += '.geojson';
		}


		if ( layer.getLayers().length > 0 )
		{
			var item = new GSI.SakuzuListItem(
				this, GSI.SakuzuListItem.GEOJSON, fileName, fileName, layer, true );
			this._list.push( item );
			return item;

		}

		else return null;


	},


	_loadKML : function(fileName, text )
	{
		var xmlDoc = null;
		if (window.ActiveXObject)
		{
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = false;
			xmlDoc.loadXML( text ? text : this._fileReader.result);
		}
		else if (window.DOMParser)
		{
			xmlDoc = new DOMParser().parseFromString(
			   text ? text : this._fileReader.result,
			  "application/xml"
			  );
		}
		var layer = new GSI.KML(null, {async: true});

		layer._addKML( xmlDoc, {} );

		if ( !fileName )
		{
			fileName = "file-" + this._list.length + ".kml";
		}
		else if ( !fileName.match( /\./ ) )
		{
			fileName += '.kml';
		}

		if ( layer.getLayers().length > 0 )
		{
			var item = new GSI.SakuzuListItem(
				this, GSI.SakuzuListItem.KML, fileName, fileName, layer, true );

			this._list.push( item );
			return item;
		}
		else return null;

	},

	_styleId : 1,

	getStyleId : function()
	{
		var result = this._styleId;
		this._styleId++;

		return result;
	},

	toKML : function()
	{
		this._styleId = 1;

		var styleList = {};

		var result = '';
		for ( var i=0; i<this._list.length; i++ )
		{
			var item = this._list[i];
			if ( item.getVisible() )
			{
				result += item.toKML(styleList);
			}
		}
		if ( result != '' )
		{
			result =
				'<?xml version="1.0" encoding="UTF-8"?>' + "\n" +
				'<kml xmlns="http://www.opengis.net/kml/2.2">' + "\n" +
				'<Document>\n' +
				result +
				'</Document>\n' +
				'</kml>';

		}
		return result;
	},


	getGeoJSONList: function()
	{
		this._styleId = 1;
		var result = [];

		for ( var i=0; i<this._list.length; i++ )
		{
			var item = this._list[i];
			var resultItem = {
				fileName : item.getFileName(),
				visible : item.getVisible(),
				features : item.toGeoJSON()
			};
			result.push( resultItem );
		}

		return result;
	},

	toGeoJSON : function()
	{
		this._styleId = 1;
		var result = {
			"type": "FeatureCollection",
			"features": []
		};
		for ( var i=0; i<this._list.length; i++ )
		{
			var item = this._list[i];
			if ( item.getVisible() )
			{
				var features = item.toGeoJSON();

				for ( var j=0; j<features.length; j++ )
				{
					result.features.push(  features[j] );
				}
			}
		}

		return JSON.stringify( result, null, "  " );
	}


} );


/************************************************************************

GSI.SakuzuDialog
	作図ダイアログ管理

************************************************************************/
GSI.SakuzuDialog = GSI.Dialog.extend( {

	options : {
		title : GSI.TEXT.SAKUZU.DIALOG_TITLE
	},

	initialize : function(map, sakuzuList, options)
	{

		this._map = map;
		this._sakuzuList = sakuzuList;


		this._sakuzuList.on( 'change', L.bind( function(){ this._refreshList(); }, this ) );
		this._sakuzuList.on( 'load', L.bind( this._onFileLoad, this ) );
		this._sakuzuList.on( 'startedit', L.bind( this._onStartEdit, this ) );
		this._sakuzuList.on( 'circlechange', L.bind( this._onCircleChange, this ) );
		this._sakuzuList.on( 'visiblechange', L.bind( this._onVisibleChange, this ) );
		this._sakuzuList.on( 'ready', L.bind( this._onSakuzuItemReady, this ) );

		GSI.Dialog.prototype.initialize.call(this, options);
	},




	setMaxScrollHeight : function( maxHeight )
	{
		if ( true )
		{
			//console.log( "aa" );
			//this.listFrame.css( { 'max-height' : 3 + 'px'} );
		}
	},


	createHeader : function()
	{
		this._title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this._title );
	},

	createContent : function()
	{

		this._sakuzuFrame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_frame' );
		return this._sakuzuFrame;

	},

	// 初期画面
	_createTopPanel : function()
	{
		if ( this._topPanel ) return;

		this._topPanel = $( '<div>' );

		this._topPanelToolBar = this._createTopPanelToolbar();
		this._topPanelList = this._createTopPanelList();
		this._topPanel.append( this._topPanelToolBar );
		this._topPanel.append( this._topPanelList );

		this._sakuzuFrame.append( this._topPanel );

	},

		_createTopPanelToolbar : function()
		{
			var frame =  $( "<div>" ).addClass( 'gsi_sakuzu_dialog_modeselect' );
			var btn = null;

			// ファイル
			btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
				$('<img>').attr({'src': 'image/sakuzu/icon_fileopen.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_LOAD}).css( { 'width' : '24px', 'height' : '24px' } )
			 ).click( L.bind( this._toolBtnClick, this, "file_load") );
			frame.append( btn );


			btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
				$('<img>').attr({'src': 'image/sakuzu/icon_filesave.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_SAVE}).css( {'width' : '24px', 'height' : '24px' } )
			 ).click( L.bind( this._toolBtnClick, this, "file_save") );
			frame.append( btn );


			frame.append( $('<img>').addClass( 'sep' ).attr({ 'src' : 'image/sakuzu/toolbar_sep.png'}).css(
				{ 'margin-left':'4px',  'margin-right':'5px', 'width':'2px', 'height': '26px'} ) );

			// ポイント
			btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
				$('<img>').attr({'src': 'image/sakuzu/icon_mark_b.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDMARKER}).css( {'width' : '24px', 'height' : '24px' } )
			 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POINT) );
			frame.append( btn );


			// 線
			btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
				$('<img>').attr({'src': 'image/sakuzu/icon_line_b.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDLINE }).css( {'width' : '24px', 'height' : '24px' } )
			 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.LINESTRING) );
			frame.append( btn );

			// ポリゴン
			btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
				$('<img>').attr({'src': 'image/sakuzu/icon_polygon_b.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDPOLY}).css( {'width' : '24px', 'height' : '24px' } )
			 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POLYGON) );
			frame.append( btn );

			// 円
			btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
				$('<img>').attr({'src': 'image/sakuzu/icon_circle_b.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLE }).css( {'width' : '24px', 'height' : '24px' } )
			 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.CIRCLE) );
			frame.append( btn );

			// ポイント(テキスト)
			btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
				$('<img>').attr({'src': 'image/sakuzu/icon_text.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDDIVMARKER}).css( {'width' : '24px', 'height' : '24px' } )
			 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POINT_TEXT) );
			frame.append( btn );



			// フリーハンド
			btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
				$('<img>').attr({'src': 'image/sakuzu/icon_freehand_b.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDFREEHAND}).css( {'width' : '24px', 'height' : '24px' } )
			 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.FREEHAND) );
			frame.append( btn );


			frame.append( $('<div>').css( { clear:'both'} ) );


			return frame;

		},


		_createTopPanelList : function()
		{
			var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_list' );
			this._listTable = $( '<table>' ).css( { 'width' : '100%'} );
			this._listTBody = $( '<tbody>' );

			this._refreshList(true);
			this._listTable.append( this._listTBody );
			frame.append( this._listTable );

			return frame;
		},

		_onVisibleChange : function( event )
		{
			this._refreshList();
		},

		_refreshList : function()
		{
			this._listTBody.empty();

			//for ( var i=0; i<this._sakuzuList.length; i++ )

			this._sakuzuList.eachItems( L.bind( function( item ) {
				//var item = this._sakuzuList[ i ];
				item._viewData = {};

				var tr = $( '<tr>' );

				var td = null;

				var id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;

				// 表示チェック
				var checkBox = $( '<input>' ).attr( { 'id': id, 'type' : 'checkbox', 'checked' : item.getVisible() } ).addClass( 'normalcheck' );
				checkBox.click( L.bind( function(checkBox,item){
					item.setVisible( checkBox.is( ':checked' ) );
				}, this, checkBox, item ) );
				//td = $( '<td>' ).append( checkBox );
				//tr.append( td );

				item._viewData.checkbox = checkBox;
				//item._viewData.checkbox.click( L.bind( this._onLayerCheckClick,this, item, checkBox ) );

				var label = $( '<label>' ).attr( {'for': id} ).html( item.getTitle() );
				// 名称
				var title = $( '<div>' ).append( checkBox ).append( label )
					.css( { "word-break": "break-all"} )
					.addClass('folder');

				// レイヤー数
				var layerCount = item.getLayerCount();

				var num = $( '<span>' ).addClass( 'num' ).html( layerCount );


				td = $( '<td>' ).append( title ).css( { 'width' : '100%', "word-break": "break-all"} );
				tr.append( td );


				// ボタン類
				td = $( '<td>' ).css({"text-align":"right"}).append( num );
				tr.append( td );

				var buttonClassName = 'normalbutton sakuzubutton' + ( layerCount <= 0 ? ' disabled' : '' );
				var editBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( GSI.TEXT.SAKUZU.DIALOG_LIST_EDITBTN ).addClass(buttonClassName);
				td = $( '<td>' ).append( editBtn );
				tr.append( td );

				var clearBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( GSI.TEXT.SAKUZU.DIALOG_LIST_REMOVEBTN ).addClass(buttonClassName);
				td = $( '<td>' ).append( clearBtn );
				tr.append( td );
				this._listTBody.append( tr );

				editBtn.click( L.bind( this._onEditSakuzuItemClick, this, item ) );
				clearBtn.click( L.bind( function( item ){ item.remove();}, this, item ) );
			}, this ) );


		},

		_toolBtnClick : function( btnId )
		{
			if ( btnId == 'file_load' )
			{
				this._showFileLoadPanel();
			}
			else if ( btnId == 'file_save' )
			{
				this._showFileSavePanel();
			}
			else
			{
				this._showEditPanel( btnId );
			}
		},

	// ファイル読込パネル
	_createFileLoadPanel : function()
	{

		if ( this._fileLoadPanel ) return;
		this._fileLoadPanel = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_fileloadpanel' ).hide();




		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_fileload' );


		if ( !GSI.Utils.hasFileAPI )
		{
			frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8) );
			var fileNameFrame = $( '<div>' );

			this._fileLoadNameInput = $( '<input>' ).attr( {'type':'text'} );
			this._fileLoadTextarea = $( '<textarea>' ).attr( {'wrap':'off'} );

			fileNameFrame.append( $('<span>').html( GSI.TEXT.SAKUZU.DIALOG_LOAD_FILENAMECAPTION ) );
			fileNameFrame.append( this._fileLoadNameInput );
			frame.append( fileNameFrame );
			frame.append( this._fileLoadTextarea );
		}
		else
		{
			frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT ) );
			this._fileLoadInput = $('<input>').attr( { type:"file"} );

			frame.append( this._fileLoadInput );
		}


		this._fileLoadPanel.append( frame );


		// OKCancel
		this._fileLoadOkCancelFrame = this._createFileLoadOkCancel();
		this._fileLoadPanel.append( this._fileLoadOkCancelFrame  );

		this._sakuzuFrame.append( this._fileLoadPanel );

	},



		_createFileLoadOkCancel : function()
		{
			var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );

			var okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_OKBTN ).addClass( 'normalbutton' );
			var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_CANCELBTN ).addClass( 'normalbutton' );

			okBtn.click( L.bind( this._onFileLoadOkClick, this ) );
			cancelBtn.click( L.bind( this._onFileLoadCancelClick, this ) );

			frame.append( okBtn ).append( cancelBtn );

			return frame;
		},

		_onFileLoadOkClick : function()
		{
			if ( this._fileLoadInput )
			{
				var files = this._fileLoadInput.prop( 'files' );
				if( !files ) files = this._fileLoadInput.attr( 'files' );


				if ( files && files.length > 0 )
				{
					this._sakuzuList.loadFromFile( files );
					//this._showTopPanel( this._fileLoadPanel );
				}
				else
				{
					alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_NOFILE );
				}
			}
			else
			{
				var text = $.trim( this._fileLoadTextarea.val() );
				if ( text != '' )
				{
					var fileName = $.trim( this._fileLoadNameInput.val() );

					this._sakuzuList.loadFromText( text, fileName && fileName != '' ? fileName : null );
				}
				else
				{
					alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_NOTEXT );
				}

			}
		},

		_onFileLoad : function( event )
		{
			if ( event.error )
			{
				alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_ERROR );
			}
			else
			{

				if ( this._fileLoadTextarea )
				{
					this._fileLoadTextarea.focus();
					this._fileLoadTextarea.val('');
					this._fileLoadNameInput.val( '' );
				}
				this._showTopPanel( this._fileLoadPanel );
			}
		},

		_onFileLoadCancelClick : function()
		{
			this._showTopPanel( this._fileLoadPanel );
		},


	// ファイル保存パネル
	_createFileSavePanel : function()
	{

		if ( this._fileSavePanel ) return;
		this._fileSavePanel = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filesavepanel' ).hide();




		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filesave' );


		frame.append( $('<div>').addClass( 'message' ).html(GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT) );
		frame.append( $('<div>').addClass( 'message2' ).html(GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT2) );

		var selectFrame = $( '<div>' ).addClass( 'selectframe' );
		var id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;

		var radio = $( '<input>' ).attr( { id: id, type:"radio", name:"gsi_sakuzu_dialog_savetype", value:"kml"} ).addClass( 'normalcheck' );
		var label = $( '<label>' ).attr( {'for': id} ).html( 'KML形式' );
		//label.append( radio );
		selectFrame.append( radio );
		selectFrame.append( label );

		radio.click( L.bind( this._onSaveTypeChange, this, radio ) );

		id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;
		var radio = $( '<input>' ).attr( { id: id, type:"radio", name:"gsi_sakuzu_dialog_savetype", value:"geojson"} ).addClass( 'normalcheck' );
		var label = $( '<label>' ).attr( {'for': id} ).html( 'GeoJSON形式' );
		//label.append( radio );
		selectFrame.append( radio );
		selectFrame.append( label );

		radio.click( L.bind( this._onSaveTypeChange, this, radio ) );

		frame.append( selectFrame );


		this._fileSaveTextarea = $( '<textarea>' ).attr( {'wrap':'off'} ).css( { 'readonly': 'readonly' } );
		frame.append( this._fileSaveTextarea );




		this._fileSavePanel.append( frame );


		// OKCancel
		this._fileSaveOkCancelFrame = this._createFileSaveOkCancel();
		this._fileSavePanel.append( this._fileSaveOkCancelFrame  );

		this._sakuzuFrame.append( this._fileSavePanel );

	},
		_createFileSaveOkCancel : function()
		{
			var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );
			var okBtn = '';
			if (!GSI.Utils.hasFileAPI)
			{
				okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN_CLIPBOARD ).css( {width:"150px"} ).addClass( 'normalbutton' );
				this._fileSaveOkBtn = okBtn;
				this._initializeFileSaveCopy();
			}
			else
			{
				okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN).css( {width:"140px"} ).addClass( 'normalbutton' );
				this._fileSaveOkBtn = okBtn;
				this._fileSaveOkBtn.click( L.bind( this._onFileSaveOkClick, this ) );
			}
			var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_CANCELBTN ).css( {width:"70px"} ).addClass( 'normalbutton' );


			cancelBtn.click( L.bind( this._onFileSaveCancelClick, this ) );

			frame.append( okBtn ).append( cancelBtn );

			return frame;
		},

		_initializeFileSaveCopy : function()
		{
			if ( !this._zeroClipboard  )
			{
				//this._textarea.attr( { id: 'fe_text' } );
				this._zeroClipboard = new ZeroClipboard(this._fileSaveOkBtn[0] );//.attr({ id: 'fe_text' })[0]);

				this._zeroClipboard.on( 'ready', L.bind( function() {

					this._zeroClipboard.on( 'beforecopy', L.bind( function() {
						this._zeroClipboard.setText(this._fileSaveTextarea.val());
						alert( 'クリップボードにコピーしました' );
					},this ) );

					this._zeroClipboard.on( 'aftercopy', L.bind( function() {
					},this ) );
				},this ));
			}
		},

		_onSaveTypeChange : function(radio)
		{
			this._fileSaveTextarea.focus();
			switch( radio.val() )
			{
				case 'kml':
					this._fileSaveTextarea.val( this._sakuzuList.toKML() );
					break;

				case 'geojson':
					this._fileSaveTextarea.val( this._sakuzuList.toGeoJSON() );
					break;
			}

			if ( this._fileSaveTextarea.val() != '' )
			{
				this._fileSaveOkBtn.removeClass( 'disabled' );
			}
			else
			{
				this._fileSaveOkBtn.addClass( 'disabled' );
			}
		},


		_onFileSaveOkClick : function()
		{
			if ( this._fileSaveTextarea.val() == '' ) return false;

			var ext = ".kml";
			var contentType = "application/vnd.google-earth.kml+xml";

			if ( this._fileSavePanel.find( "input[name=gsi_sakuzu_dialog_savetype]:checked" ).val() == 'geojson' )
			{
				ext = ".geojson";
				contentType = "application/json";
			}

			var fileName = 'gsi' + GSI.Utils.getTimeStampString() + ext;

			var blob = new Blob([this._fileSaveTextarea.val()], { "type" : contentType});

			if ( window.navigator.msSaveOrOpenBlob )
			{
				window.navigator.msSaveOrOpenBlob( blob, fileName );
			}
			else
			{
				window.URL = window.URL || window.webkitURL;
				this._fileSaveOkBtn.attr( {
						"download" :fileName,
						"href" : window.URL.createObjectURL(blob),
						"target" : "_blank"
					});
			}

			this._showTopPanel( this._fileSavePanel );
		},

		_onFileSaveCancelClick : function()
		{

			this._showTopPanel( this._fileSavePanel );
		},

	// 編集パネル
	_createEditPanel :function()
	{
		if ( this._editPanel ) return;

		this._editPanel = $( '<div>' ).hide();
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_edit' );


		// 削除
		/*
		this._editRemoveBtnFrame = this._createRemoveBtnCancel();
		this._editPanel.append( this._editRemoveBtnFrame  );
		*/

		// ポイント編集
		this._pointEditFrame = this._createPointEditFrame();
		frame.append( this._pointEditFrame  );

		// 線編集
		this._lineEditFrame = this._createLineEditFrame();
		frame.append( this._lineEditFrame  );

		// 塗りつぶし編集
		this._fillEditFrame = this._createFillEditFrame();
		frame.append( this._fillEditFrame  );

		// 円編集
		this._circleEditFrame = this._createCircleEditFrame();
		frame.append( this._circleEditFrame  );

		// 情報編集
		this._infoEditFrame = this._createInfoEditFrame();
		frame.append( this._infoEditFrame  );


		this._editRemoveBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVEBTN  ).addClass( 'removebtn' ).click( L.bind( this.onEditRemoveClick, this ) );

		this._editRemoveBtnFrame = $( '<div>' ).addClass( "gsi_sakuzu_dialog_edit_removeframe" ).append( this._editRemoveBtn );
		frame.append( this._editRemoveBtnFrame );
		this._editPanel.append( frame );



		// OKCancel
		this._editOkCancelFrame = this._createEditOkCancel();
		this._editPanel.append( this._editOkCancelFrame  );


		this._sakuzuFrame.append( this._editPanel );
	},





		_createEditOkCancel : function()
		{
			var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );

			var okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).addClass( 'normalbutton' );
			var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN  ).addClass( 'normalbutton' );


			this._editOkBtn = okBtn;
			okBtn.click( L.bind( this._onEditOkClick, this ) );
			cancelBtn.click( L.bind( this.onEditCancelClick, this ) );

			frame.append( okBtn ).append( cancelBtn );

			return frame;
		},

		_makeEditInfo : function()
		{
			var result = {
				title : this._titleInput.val(),
				description : null,
				table: null
			};

			if ( this._infoFreeWordTextarea.is( ':visible' ) )
			{
				result.description = this._infoFreeWordTextarea.val();
			}
			else
			{
				result.table = [];
				var keyTextAreaList = this._infoTableTbody.find( "textarea[name=info_table_key]" );
				var valueTextAreaList = this._infoTableTbody.find( "textarea[name=info_table_value]" );

				for ( var i=0;i<keyTextAreaList.length; i++ )
				{
					var item ={
						key : $( keyTextAreaList[i]).val(),
						value : $( valueTextAreaList[i]).val()
					};
					if ( item.key != '' && item.value != '' )
						result.table.push( item);

				}
			}
			return result;
		},

		_onEditOkClick :function() {

			this._clearPointEditTextareaCheckTimer();

			if ( this._editingTarget && !this._editingTarget.isReady() ) return;

			var editMode = GSI.SakuzuListItem.NONE;
			if ( this._editingTarget )
			{

				this._editingTarget.setEditingInfo(this._makeEditInfo());
				editMode = this._editingTarget.editMode;
				this._editingTarget.editFinish();
				if ( editMode != GSI.SakuzuListItem.EDIT )
				{
					this._editingTarget = null;
				}
			}

			if ( editMode != GSI.SakuzuListItem.EDIT )
			{
				this._editPanel.fadeOut( 'normal',
					L.bind(
					function()
					{
						this._startCreate( this._currentCreateId );
						this._editPanel.fadeIn( 'normal' );
					},
					this )
				);


				//this._showTopPanel( this._editPanel );
			}
			else
			{
				this._showSelectEditTargetPanel( null, this._editPanel );
			}
		},

		onEditCancelClick :function() {

			this._clearPointEditTextareaCheckTimer();

			if ( this._editingTarget && this._editingTarget.isReady() )
			{
				if ( this._editingTarget.editMode != GSI.SakuzuListItem.EDIT )
				{
					if ( !window.confirm( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELCONFIRMMSG) ) return;
				}
			}

			var editMode = GSI.SakuzuListItem.NONE;
			if ( this._editingTarget )
			{
				editMode = this._editingTarget.editMode;
				this._editingTarget.editCancel();
				if ( editMode != GSI.SakuzuListItem.EDIT )
				{
					this._editingTarget = null;
				}
			}

			if ( editMode != GSI.SakuzuListItem.EDIT )
			{
				this._showTopPanel( this._editPanel );
			}
			else
			{
				this._showSelectEditTargetPanel( null, this._editPanel );
			}
		},




		onEditRemoveClick :function() {
			var editMode = GSI.SakuzuListItem.NONE;
			if ( this._editingTarget )
			{
				editMode = this._editingTarget.editMode;
				if ( editMode == GSI.SakuzuListItem.EDIT )
				{
					if ( !confirm( GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVECONFIRMMSG ) ) return;

					this._editingTarget.removeEditObject();
					//this._editingTarget = null;
					this._showSelectEditTargetPanel( null, this._editPanel );
				}

			}


		},

		_createPointEditFrame : function()
		{
			var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_pointedit' );

			this._pointEditMarkerFrame = $( '<div>' );
			var table = $( '<table>' );
			var tbody = $( '<tbody>' );
			this._pointIconImage = $( '<img>');

			var tr = $( '<tr>' );
			tr.append( $( '<td>' ).css( {'white-space':'nowrap'} ).html( 'アイコン:' ) );
			tr.append( $( '<td>' ).append( this._pointIconImage ) );

			tr.append( $( '<td>' ).css( {'white-space':'nowrap'} ).html( '&nbsp;&nbsp;拡大率:' ) );
			this._pointIconSizeSelect = $( '<select>' );
			this._pointIconSizeSelect.append( $( '<option>' ).html("0.5").val("0.5" ) );
			this._pointIconSizeSelect.append( $( '<option>' ).html("1.0").val("1.0" ) );
			this._pointIconSizeSelect.append( $( '<option>' ).html("1.5").val("1.5" ) );
			this._pointIconSizeSelect.append( $( '<option>' ).html("2.0").val("2.0" ) );

			this._pointIconSizeSelect[0].selectedIndex = 1;
			this._pointIconSizeSelect.on( 'change',  L.bind( this._onPointIconSizeChange, this ) );


			tr.append( $( '<td>' ).append( this._pointIconSizeSelect ) );


			tbody.append( tr );

			table.append( tbody );
			this._pointEditMarkerFrame .append( table );
			frame.append( this._pointEditMarkerFrame  );


			this._pointEditTextFrame  = $( '<div>' );
			this._pointEditTextFrame .append( $( '<div>' ).addClass( "gsi_sakuzu_dialog_pointedit_textmessage" )
					.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG ));

			this._pointEditTextArea = $( '<textarea>' )
				.attr( { 'placeholder': GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT} )
				.addClass( 'gsi_sakuzu_dialog_pointedit_textarea' );
			this._pointEditTextFrame .append( this._pointEditTextArea);
			frame.append( this._pointEditTextFrame  );

			this._pointEditTextArea
				.on( 'focus', L.bind( function(){
					if ( !this._pointEditTextareaCheckTimer )
					{
						this._pointEditTextareaCheckTimer = setInterval(
							L.bind( function() {
								this._onPointIconHTMLChange();
							}, this )
						, 100);
					}

				}, this ) )
				.on( 'blur', L.bind( function(){
					this._clearPointEditTextareaCheckTimer();
					this._onPointIconHTMLChange();

				}, this ) );

			var iconList = [];

			for ( var i=0; i<CONFIG.SAKUZU.SYMBOL.FILES.length; i++ )
			{
				iconList.push( {
					url : CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.FILES[i],
					size : CONFIG.SAKUZU.SYMBOL.ICONSIZE,
					anchor : CONFIG.SAKUZU.SYMBOL.ICONANCHOR
				} );
			}


			this._pointIconSelector = new GSI.IconSelector( this._pointIconImage, iconList );
			this._pointIconSelector.on( 'select', L.bind( this._onPointIconSelect, this ) );

			return frame;
		},

		_clearPointEditTextareaCheckTimer : function()
		{
			if ( this._pointEditTextareaCheckTimer )
			{
				clearTimeout( this._pointEditTextareaCheckTimer );
				this._pointEditTextareaCheckTimer = null;
			}

		},

		_refreshEditingIcon : function( selectedIcon )
		{
			var iconScale = parseFloat( this._pointIconSizeSelect.val() );
			var iconSize = null;
			var iconAnchor = null;

			if ( selectedIcon )
			{
				iconSize = [
					Math.floor( selectedIcon.size[0] * iconScale ),
					Math.floor( selectedIcon.size[1] * iconScale )
				];
				iconAnchor = [
					Math.floor( selectedIcon.anchor[0] * iconScale ),
					Math.floor( selectedIcon.anchor[1] * iconScale )
				];
			}

			var iconInfo = {
				iconUrl : ( selectedIcon ? selectedIcon.url : null ),
				iconSize : iconSize,
				iconAnchor : iconAnchor,
				_iconScale: iconScale
			};
			this._refreshEditing( { _iconInfo: iconInfo });
		},

		_refreshEditingIconHTML : function( html )
		{

			this._refreshEditing( { _iconInfo: { html : html } });
		},

		_onPointIconHTMLChange : function()
		{
			this._refreshEditingIconHTML( this._pointEditTextArea.val() );
		},


		_onPointIconSizeChange : function()
		{
			var selectedIcon = this._pointIconSelector.selectedIcon;

			this._refreshEditingIcon( selectedIcon );
		},

		_onPointIconSelect : function(event)
		{
			this._refreshEditingIcon( event.selectedIcon );
		},

		_createLineEditFrame : function()
		{
			var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_lineedit' );

			var editFrame = $( '<div>' ).css( { 'vertical-align' : 'middle'} );

			var table = $( '<table>' );
			var tbody = $( '<tbody>' );
			var tr = $( '<tr>' );
			tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '線幅:' ) );

			this._lineWeightSelect = $( '<select>' );

			this._lineWeightSelect.append ( $('<option>').html("1px").val("1") );
			this._lineWeightSelect.append ( $('<option>').html("3px").val("3") );
			this._lineWeightSelect.append ( $('<option>').html("5px").val("5") );
			this._lineWeightSelect.append ( $('<option>').html("10px").val("10") );
			this._lineWeightSelect.append ( $('<option>').html("15px").val("15") );
			this._lineWeightSelect.append ( $('<option>').html("25px").val("25") );
			this._lineWeightSelect.change( L.bind( function(){
				this._refreshEditing( { weight:this._lineWeightSelect.val() });
			}, this ) );


			tr.append( $( '<td>' ).append( this._lineWeightSelect ) );


			tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '&nbsp;&nbsp;線色:' ) );
			var id = 'GSI_SakuzuDialog_lineColor_' + GSI.Utils.getCurrentID() ;
			this._lineColorSelector = $( '<div>' ).attr({id:id}).css( {"background":'#000'} ).html( '　　' ).addClass( 'color_select' );
			this._lineColorSelector.simpleColorPicker({
				showEffect: 'slide',
				hideEffect: 'slide',
				onChangeColor: L.bind( function( color ){
					this._lineColorSelector.css({ 'background' : color });
					this._refreshEditing( { color:color });
				}, this )
			});
			/*
			this._lineColorSelector.ColorPicker({
				onChange: L.bind( function(hsb, hex, rgb, el) {
					this._lineColorSelector.css({ 'background' : "#" + hex });
					this._refreshEditing( { color:"#" + hex });
				}, this ),
				onSubmit: L.bind( function(hsb, hex, rgb, el) {
					this._lineColorSelector.css({ 'background' : "#" + hex });
					this._refreshEditing( { color:"#" + hex });
					this._fillColorSelector.ColorPickerHide();
				}, this ),
				onShow: L.bind( function (colpkr) {
					$( colpkr).slideDown( 'fast' );
					return false;
				}, this ),
				onHide: L.bind( function (colpkr) {
					$( colpkr).slideUp( 'fast' );
					return false;
				}, this )

			});
			*/



			tr.append( $( '<td>' ).append( this._lineColorSelector  ) );

			tbody.append(tr );

			table.append( tbody );
			editFrame.append( table );


			// 透明度

			var table2 = $( '<table>' );
			var tbody2 = $( '<tbody>' );
			var tr2 = $( '<tr>' );
			tr2.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '線の透過率:' ) );
			var td2 = $( '<td>' ).css( { 'width':'150px',"padding":"4px 0 4px 8px"} );




			var sliderChangeHandler = L.bind( function(opacitySlider) {
				opacity = this._lineOpacitySlider.slider( 'value' );
				opacity = 1 - ( opacity / 100 );
				this._refreshEditing( { opacity:opacity });
				//this.drawingInfo.style.opacity = opacity;
				//this.refreshDrawInfo();
			}, this );

			this._lineOpacitySlider = $( '<div>' ).slider(
				{
					range: "min",min: 0,max: 100, value: 0,
					"slide" : sliderChangeHandler,
					"change" : sliderChangeHandler,
					"stop" : sliderChangeHandler
				}
			);



			td2.append( this._lineOpacitySlider );
			tr2.append ( td2 );

			tbody2.append(tr2 );
			table2.append(tbody2 );

			editFrame.append( table2 );



			frame.append( editFrame );

			return frame;
		},


		_createFillEditFrame : function()
		{
			var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filledit' );

			var editFrame = $( '<div>' ).css( { 'vertical-align' : 'middle'} );

			var table = $( '<table>' );

			var tr = $( '<tr>' );


			var id = 'GSI_SakuzuDialog_fillColor_' + GSI.Utils.getCurrentID() ;
			tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '塗潰し色:' ) );
			this._fillColorSelector = $( '<div>' ).attr({id:id}).css( {"background":'#000'} ).html( '　　' ).addClass( 'color_select' );
			this._fillColorSelector.simpleColorPicker({
				showEffect: 'slide',
				hideEffect: 'slide',
				onChangeColor: L.bind( function( color ){
					this._fillColorSelector.css({ 'background' : color });
					this._refreshEditing( { fillColor:color });
				}, this )
			});
			/*
			this._fillColorSelector.ColorPicker({
				onChange: L.bind( function(hsb, hex, rgb, el) {
					this._fillColorSelector.css({ 'background' : "#" + hex });
					this._refreshEditing( { fillColor:"#" + hex });
				}, this ),
				onSubmit: L.bind( function(hsb, hex, rgb, el) {
					this._fillColorSelector.css({ 'background' : "#" + hex });
					this._refreshEditing( { fillColor:"#" + hex });
					this._fillColorSelector.ColorPickerHide();
				}, this ),
				onShow: L.bind( function (colpkr) {
					$( colpkr).slideDown( 'fast' );
					return false;
				}, this ),
				onHide: L.bind( function (colpkr) {
					$( colpkr).slideUp( 'fast' );
					return false;
				}, this )

			});
			*/
			tr.append( $( '<td>' ).append(this._fillColorSelector) );

			table.append(tr );
			editFrame.append( table );


			// 透明度
			var table2 = $( '<table>' );
			var tbody2 = $( '<tbody>' );
			var tr2 = $( '<tr>' );
			tr2.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '塗潰しの透過率:' ) );
			var td2 = $( '<td>' ).css( { 'width':'150px',"padding":"4px 0 4px 8px"} );


			var sliderChangeHandler = L.bind( function(opacitySlider) {
				opacity = this._fillOpacitySlider.slider( 'value' );
				opacity = 1 - ( opacity / 100 );
				this._refreshEditing( { fillOpacity:opacity });
			}, this );

			this._fillOpacitySlider = $( '<div>' ).slider(
				{
					range: "min",min: 0,max: 100, value: 0,
					"slide" : sliderChangeHandler,
					"change" : sliderChangeHandler,
					"stop" : sliderChangeHandler
				}
			);

			td2.append( this._fillOpacitySlider );
			tr2.append ( td2 );

			tbody2.append(tr2 );
			table2.append(tbody2 );

			editFrame.append( table2 );


			frame.append( editFrame );

			return frame;
		},


		_createCircleEditFrame : function()
		{
			var frame = $( '<div>' );

			var table = $( '<table>' );
			var tbody = $( '<tbody>' );
			var tr = $( '<tr>' );
			var td = null;

			td = $( '<td>' ).html('半径:').css( { "white-space":"nowrap"} );
			tr.append( td );

			td = $( '<td>' );
			this._circleRadiusInput = $( '<input>' ).attr( { 'type':'text' } ).addClass( 'circle_input');
			this._circleRadiusChangeHandler = L.bind( this._onCircleRadiusChange,this);
			this._circleRadiusInput.on( "keyup", this._circleRadiusChangeHandler );
			this._circleRadiusInput.on( "blur", this._circleRadiusChangeHandler );

			td.append( this._circleRadiusInput );
			tr.append( td );

			td = $( '<td>' );
			this._circleRadiusUnitSelect = $( '<select>' );

			this._circleRadiusUnitSelect.append ( $('<option>').html("m").val("m") );
			this._circleRadiusUnitSelect.append ( $('<option>').html("km").val("km") );

			this._circleRadiusUnitChangeHandler = L.bind( this._onCircleRadiusUnitChange,this);
			this._circleRadiusUnitSelect.on( "change", this._circleRadiusUnitChangeHandler);

			td.append( this._circleRadiusUnitSelect );
			tr.append( td );


			tbody.append( tr);
			table.append( tbody );
			frame.append( table );

			return frame;
		},
		_onCircleChange : function( event )
		{

			this._circleRadiusInput.val(event.radius);

			this._circleRadiusUnitSelect.val(event.unit);
		},

		_onCircleRadiusUnitChange : function()
		{
			var radius = this._circleRadiusInput.val();

			if( this._circleRadiusUnitSelect.val() == 'km' )
			{
				radius /= 1000;
			}
			else
			{
				radius *= 1000;
			}
			this._circleRadiusInput.val( radius );
		},


		_onCircleRadiusChange : function()
		{
			var radius = this._circleRadiusInput.val();

			if(radius.match(/^[0-9]+\.[0-9]+$/) || radius.match(/^[0-9]+$/))
			{
				radius = parseFloat( radius );
				if( this._circleRadiusUnitSelect.val() == 'km' )
				{
					radius *= 1000;
				}
				this._refreshEditing( { radius:radius });
			}
		},

		_createInfoEditFrame : function()
		{
			var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_infoedit' );
			var table = $( '<table>' ).css( { width:'100%'} );
			var tbody = $( '<tbody>' );

			var tr = $( '<tr>' );

			tr.append( $( '<td>' ).css( { 'white-space':'nowrap'} ).html('名称:') );
			var td = $( '<td>' );

			this._titleInput = $( '<input>' ).addClass( 'inputtext').attr({'type':'text', 'placeholder':'(例:A図書館)'}).css( { width:'200px'} );
			td.append( this._titleInput );
			tr.append( td );

			tbody.append(tr );
			table.append( tbody );
			frame.append( table );



			// 情報
			this._toggleInfoBtn = $( '<a>' ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN).attr( { 'href' : 'javascript:void(0);' } ).addClass( 'toggleinfobtn' )
				.click( L.bind( function(){

				if ( this._infoFreeWordTextarea.is( ':visible' ) )
				{
					this._infoFreeWordTextarea.fadeOut( 'fast', L.bind( function(){
						this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN );
						this._infoTable.fadeIn('fast');
					}, this ) );
				}
				else
				{
					this._infoTable.fadeOut( 'fast', L.bind( function(){
						this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN );
						var description =  this._infoTableToFreeWordText();
						this._infoFreeWordTextarea.focus();
						if ( description != '' ) this._infoFreeWordTextarea.val(description );
						this._infoFreeWordTextarea.fadeIn('fast');
					}, this ) );
				}

			}, this ) );

			frame.append( this._toggleInfoBtn );

			this._infoTable = $( '<table>' ).attr({border:0}).css( { width:'100%'} );
			var tbody = $( '<tbody>' );

			this._infoTableTbody = tbody;

			//this.refreshInfoTable();

			this._infoTable.append( tbody );
			frame.append( this._infoTable );

			this._infoFreeWordTextarea = $( '<textarea>' ).attr( {'wrap':'off'} ).addClass( 'inputtextarea').css( { height:'100px','width' : '100%', "margin-top": "2px" } ).hide();
			frame.append( this._infoFreeWordTextarea );




			return frame;
		},


	_createSelectEditTargetPanel : function(item)
	{
		if ( !this._selectEditTargetPanel )
		{
			this._selectEditTargetPanel = $( '<div>' ).addClass('gsi_sakuzu_dialog_selecttarget_panel').hide();

			var title = $( '<div>' ).addClass('title');
			var message = $( '<div>' ).html( '編集するオブジェクトを選択してください').addClass('message');

			var btnFrame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );
			var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( '編集終了' ).addClass( 'normalbutton' );
			cancelBtn.click( L.bind( this._onSelectEditTargetCancelClick, this ) );
			btnFrame.append( cancelBtn );


			this._selectEditTargetPanel.append( title );
			this._selectEditTargetPanel.append( message );
			this._selectEditTargetPanel.append( btnFrame );




			this._sakuzuFrame.append( this._selectEditTargetPanel );
		}
		this._selectEditTargetPanel.find( '.title' ).html( item.getTitle() );

	},
		_onSelectEditTargetCancelClick : function()
		{
			if ( this._editingTarget )
			{
				this._editingTarget.editSelectFinish();
				this._editingTarget = null;
			}

			this._showTopPanel(this._selectEditTargetPanel);
		},

	setTitle : function(title)
	{
		this._title .html( title );
	},


	hide : function ()
	{
		if ( this._editingTarget )
		{
			if( !confirm(GSI.TEXT.SAKUZU.DIALOG_HIDECONFIRMMSG) ) return;
			this._editingTarget.editSelectFinish();
			this._editingTarget = null;

		}
		this._clearPointEditTextareaCheckTimer();



		GSI.Dialog.prototype.hide.call(this);
	},

	show : function ()
	{

		if ( this._selectEditTargetPanel ) this._selectEditTargetPanel.hide();
		if ( this._fileLoadPanel ) this._fileLoadPanel.hide();
		if ( this._fileSavePanel ) this._fileSavePanel.hide();
		if ( this._editPanel ) this._editPanel.hide();

		this._showTopPanel();
		GSI.Dialog.prototype.show.call(this);
	},


	_showTopPanel : function( beforePanel )
	{

		this._createTopPanel();

		this.container .css( { height: 'auto'} );
		if ( beforePanel )
		{
			beforePanel.fadeOut( 'normal', L.bind( function() {
				this.setTitle( GSI.TEXT.SAKUZU.DIALOG_TITLE );
				this._topPanel.fadeIn( 'fast' );
			}, this ) );
		}
		else
		{
			this.setTitle( GSI.TEXT.SAKUZU.DIALOG_TITLE );
			this._topPanel.show();
		}
	},

	_onEditSakuzuItemClick : function( item )
	{
		this._showSelectEditTargetPanel(item);
		//item.edit();
	},

	_showSelectEditTargetPanel : function( item, beforePanel )
	{

		this._createSelectEditTargetPanel(item ? item : this._editingTarget);

		if ( !beforePanel ) beforePanel = this._topPanel;

		this.container .css( { height: 'auto'} );
		beforePanel.fadeOut( 'normal', L.bind( function(item) {

			if ( item ) this._startSelectEditTarget(item);
			this._selectEditTargetPanel.fadeIn( 'normal' );

		}, this, item ) );


	},

	_initEditFrame : function( id )
	{
		this._pointEditFrame[ id== GSI.SakuzuListItem.POINT || id== GSI.SakuzuListItem.POINT_TEXT || id == GSI.SakuzuListItem.MULTIPOINT ? 'show' : 'hide' ]();
		this._lineEditFrame[ id == GSI.SakuzuListItem.MULTILINESTRING || id == GSI.SakuzuListItem.MULTIPOLYGON || id== GSI.SakuzuListItem.LINESTRING || id== GSI.SakuzuListItem.POLYGON || id== GSI.SakuzuListItem.CIRCLE || id== GSI.SakuzuListItem.FREEHAND ? 'show' : 'hide' ]();
		this._fillEditFrame[ id == GSI.SakuzuListItem.MULTILINESTRING || id == GSI.SakuzuListItem.MULTIPOLYGON || id== GSI.SakuzuListItem.POLYGON || id== GSI.SakuzuListItem.CIRCLE ? 'show' : 'hide' ]();
		this._circleEditFrame[ id== GSI.SakuzuListItem.CIRCLE ? 'show' : 'hide' ]();
	},

	_showEditPanel : function( id )
	{

		this._createEditPanel();
		this._initEditFrame(id);
		this._infoEditFrame.show();



		this.container .css( { height: 'auto'} );
		this._topPanel.fadeOut( 'normal', L.bind( function(id) {

			this._startCreate(id);
			this._editPanel.fadeIn( 'normal' );

		}, this, id ) );
	},

	_startSelectEditTarget : function( item )
	{
		this._editingTarget = item;
		this._editingTarget.startSelectTarget();
	},

	_onStartEdit : function( event )
	{
		if ( this._editingTarget )
		{
			this._createEditPanel();

			this._initEditFrame(event.itemType);
			this._infoEditFrame.show();

			this.container .css( { height: 'auto'} );
			this._selectEditTargetPanel.fadeOut( 'normal', L.bind( function(event) {

				this._startEdit(event.itemType, event.layer);
				this._editPanel.fadeIn( 'normal' );

			}, this, event ) );

		}
	},

	_setControlStyle : function( style )
	{
		if ( !style ) return;

		// ポイント
		if ( style.icon )
		{
			if ( style.icon.options.html || style.icon.options.html == '' )
			{
				this._pointEditTextArea.val( style.icon.options.html );
				this._pointEditMarkerFrame.hide();
				this._pointEditTextFrame.show();
			}
			else
			{
				this._pointIconImage.attr( { src: style.icon.options.iconUrl } );
				this._pointIconSizeSelect.val( parseFloat( style.icon.options._iconScale ).toFixed(1) );
				this._pointEditTextFrame.hide();
				this._pointEditMarkerFrame.show();
			}


			//this._pointIconSelector

		}

		// 線
		if ( style.color )
		{
			this._lineWeightSelect.val( style.weight );
			this._lineColorSelector.css( { background:style.color } );//.ColorPickerSetColor(style.color);
			var opacity = style.opacity;
			opacity = Math.floor( ( 1-opacity ) * 100 );
			this._lineOpacitySlider.slider( "value", opacity );
		}

		// 塗りつぶし
		if ( style.fillColor )
		{
			this._fillColorSelector.css( { background:style.fillColor } );//.ColorPickerSetColor(style.fillColor);
			var opacity = style.fillOpacity;
			opacity = Math.floor( ( 1-opacity ) * 100 );
			this._fillOpacitySlider.slider( "value", opacity );
		}
	},

	_createEditInfoTableLine : function( no, key, value )
	{
		tr = $( '<tr>' );

		td = $( '<td>' ).css( { 'width' : '30%', 'vertical-align':'middle' } );
		var nameTextarea = $( '<textarea>' ).addClass( 'inputtextarea')
			.attr( { name: 'info_table_key', 'placeholder':'(例:営業時間)', rows:1} )
			.css( { 'display':'block','width' : '100%' } ).val( key ? key : '' );
		td.append( nameTextarea );
		tr.append( td );
		td = $( '<td>' );
		var valueTextarea = $( '<textarea>' ).addClass( 'inputtextarea')
			.css({'display':'block',width:"100%"})
			.attr( { name: 'info_table_value', 'placeholder':'(例:10時～18時)',rows:1} ).val( value ? value : '' );
		td.append( valueTextarea );
		tr.append( td );

		td = $( '<td>' ).css( { width:"24px","text-align":"center"} );

		//var btn = $( '<input>' ).attr( { type: 'button'} ).val( '削除' );
		var btn = $( '<a>' ).attr( { 'href' : 'javascript:void(0);'} ).addClass( "btn" )
			.html( '<img title="この行を削除" src="image/sakuzu/icon_remove.png">' )
			.click( L.bind(
				function(tr){
					var no = 0;
					var trList = this._infoTableTbody.find( 'tr' );
					for ( var i=0; i<trList.length; i++ )
					{
						if ( trList[i] == tr[0] )
						{
							no = i;
							break;
						}
					}
					if ( no == 1 && trList.length <= 2 )
					{
						tr.find( 'textarea' ).val("" );
					}
					else
					{

						tr.fadeOut( 'fast', function(){
							$(this).remove();
						} );
					}

				},
			this, tr ) );

		td.append( btn );
		tr.append( td );

		td = $( '<td>' ).css( { width:"24px","text-align":"center"} );
		var btn = $( '<a>' ).attr( { 'href' : 'javascript:void(0);'} ).addClass( "btn" )
			.html( '<img title="この下に行を追加" src="image/sakuzu/icon_enter.png">' )
			.click( L.bind(
				function(tr){

					var insertTr = this._createEditInfoTableLine( 0, "","" );
					insertTr.hide();
					insertTr.insertAfter( tr );
					insertTr.fadeIn( 'fast' );
				},
			this, tr ) );
		td.append( btn );
		tr.append( td );


		return tr;

	},

	_infoTableToFreeWordText : function()
	{
		var keyList = this._infoTableTbody.find( "textarea[name=info_table_key]" );
		var valueList = this._infoTableTbody.find( "textarea[name=info_table_value]" );


		var trHtml = '';
		for ( var i=0; i<keyList.length; i++ )
		{
			var key = $( keyList[i] ).val();
			var value = $( valueList[i] ).val();

			if ( key != '' && value != '' )
			{
				trHtml += '<tr><td>' + GSI.Utils.encodeHTML(key) + '</td><td>' + GSI.Utils.encodeHTML(value) + '</td></tr>' + '\n';
			}
		}

		if ( trHtml != '' )
		{
			return '<table>\n' + trHtml + '</table>';
		}
		else
		{
			return '';
		}
	},

	_initEditInfo : function( info )
	{
		if ( info && info.title )
			this._titleInput.val(info.title);
		else
			this._titleInput.val( '' );


		if ( info && info.description )
			this._infoFreeWordTextarea.val(info.description);
		else
			this._infoFreeWordTextarea.val( '' );


		this._infoTableTbody.empty();

		if ( info && info.description && info.description != '' )
		{
			this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN );
			this._infoTable.hide();
			this._infoFreeWordTextarea.show();
		}
		else
		{
			this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN );
			this._infoFreeWordTextarea.hide();
			this._infoTable.show();
		}
		// ヘッダ
		var tr = $( '<tr>' );
		var td = $( '<td>' ).css( { 'width' : '30%', 'white-space':'nowrap'} ).html( '項目名' );
		tr.append( td );
		td = $( '<td>' ).attr( { "colspan":"3"} ).html( '値' );
		tr.append( td );
		this._infoTableTbody.append(tr );

		if ( !info || !info.table || info.table.length <= 0 )
		{
			var tr = this._createEditInfoTableLine(0);
			this._infoTableTbody.append( tr );
			return;
		}

		for ( var i=0; i<info.table.length; i++ )
		{

			var item = info.table[i];

			var tr = this._createEditInfoTableLine(i,item.key, item.value);
			this._infoTableTbody.append( tr );

		}

	},

	_onSakuzuItemReady : function()
	{
		this._editOkBtn.removeClass('disabled' );
	},

	_startEdit : function(itemType, layer)
	{
		this._editRemoveBtnFrame.show(); //removeClass('disabled' );
		this._editOkBtn.removeClass('disabled' );
		this._editingTarget.startEdit(itemType, layer);
		this._setControlStyle( this._editingTarget.getEditingStyle() );
		this._initEditInfo( this._editingTarget.getEditingInfo() );
	},

	_startCreate : function( id )
	{
		this._editOkBtn.addClass('disabled' );
		this._editRemoveBtnFrame.hide(); //.addClass('disabled' );

		this._editingTarget =this._sakuzuList.getSakuzuItem();
		this._editingTarget.startCreate(id);
		this._currentCreateId = id;
		this._setControlStyle( this._editingTarget.getEditingStyle() );
		this._initEditInfo( this._editingTarget.getEditingInfo() );
	},


	_refreshEditing : function( style )
	{
		this._editingTarget.setEditingStyle(style);
	},



	_showFileLoadPanel : function()
	{
		this._createFileLoadPanel();

		this.container .css( { height: 'auto'} );
		this._topPanel.fadeOut( 'normal', L.bind( function() {

			this._fileLoadPanel.fadeIn( 'normal' );

		}, this ) );
	},


	_showFileSavePanel : function()
	{
		this._createFileSavePanel();

		this._fileSaveOkBtn.addClass( 'disabled' );
		this._fileSavePanel.find( 'input' ).attr( {checked:false} ).prop( {checked:false} );
		this._fileSaveTextarea.focus();
		this._fileSaveTextarea.val( '' );
		this._fileSaveOkBtn.removeAttr( "download").attr({ "href" : 'javascript:void(0);' });


		this.container .css( { height: 'auto'} );

		this._topPanel.fadeOut( 'normal', L.bind( function() {

			this._fileSavePanel.fadeIn( 'normal' );

		}, this ) );
	}



} );




/************************************************************************

GSI.SakuzuDialog2
	旧作図ダイアログ管理
	※削除予定

************************************************************************/

GSI.SakuzuDialog2 = GSI.Dialog.extend( {

	options : {
		title : '作図'
	},


	sakuzuInfo :{
		list: [],
		layer : null,
		visible: true
	},


	initialize : function(map,mapMouse, options)
	{
		this.map = map;
		this.mapMouse = mapMouse;


		if ( options.sakuzu && options.sakuzu.length  > 0  )
		{

			this.sakuzuInfo.layer = new GSI.GeoJSON(null);
			this.sakuzuInfo.layer.addData( options.sakuzu[0].geoJSON );
			this.sakuzuInfo.visible = options.sakuzu[0].visibie;

			try
			{
				this.parseGeoJSONLayer ( this.sakuzuInfo.list , this.sakuzuInfo.layer.getLayers() );
			}
			catch( e )
			{
			}

			if ( this.sakuzuInfo.visible )
				this.map.addLayer ( this.sakuzuInfo.layer );

		}

		if ( options.sakuzuFileList && options.sakuzuFileList.length  > 0  )
		{
			this.kmlList = [];

			for ( var i=0; i<options.sakuzuFileList.length; i++ )
			{
				var info = {
					list :[],
					title : options.sakuzuFileList[i].fileName,
					visible : options.sakuzuFileList[i].visible
				};

				info.layer = new GSI.GeoJSON(null);
				info.layer.addData( options.sakuzuFileList[i].geoJSON );
				info.visible = options.sakuzuFileList[i].visible;

				try
				{
					this.parseGeoJSONLayer ( info.list , info.layer.getLayers() );
				}
				catch( e )
				{
				}

				if ( info.visible )
					this.map.addLayer ( info.layer );
				this.kmlList.push ( info );
			}
		}

		GSI.Dialog.prototype.initialize.call(this, options);
		//alert( L.drawLocal.draw.handlers.polyline.tooltip.start );

	},

	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );


		return $( '<div>' ).append( this.title );
	},

	setTitle : function(title)
	{
		this.title .html( title );
	},

	hide : function ()
	{
		if ( this.isEditing() )
		{
			if ( !window.confirm( '作図パネルを閉じますか？確定していない編集内容は破棄されます。' ) ) return;
		}
		this.cleanUp( true, false );
		this.endEditMode( true );
		GSI.Dialog.prototype.hide.call(this);
	},

	show : function ()
	{
		if ( this.editFrame ) this.editFrame.hide();
		if ( this.okCancelFrame ) this.okCancelFrame.hide();
		if ( this.editModeFrame ) this.editModeFrame.hide();
		if ( this.modeSelectFrame ) this.modeSelectFrame.show();
		if ( this.mainFrame ) this.mainFrame.show();

		GSI.Dialog.prototype.show.call(this);
	},

	createContent : function()
	{

		this.frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_frame' );


		this.mainFrame = $( '<div>' );
		this.modeSelectFrame = this.createModeSelectFrame();

		this.listFrame = this.createList();

		this.mainFrame.append( this.modeSelectFrame );
		this.mainFrame.append( this.listFrame );

		var buttnFrame = $('<div>').css( {'margin':'4px 3px 5px 3px'} );

		this.downloadForm = $( '<form action="http://gp.cyberjapan.jp/cjp4/service/gsi_convert_from_json" method="POST"></form>' );
		this.downloadFormContent = $( '<input type="hidden" name="content" value="" />' );
		this.downloadFormFmt = $( '<input type="hidden" name="outFmt" value="kml" />' );
		this.downloadFormFName = $( '<input type="hidden" name="fname" value="kml0000000.kml" />' );
		this.downloadForm.append( this.downloadFormContent );
		this.downloadForm.append( this.downloadFormFmt );
		this.downloadForm.append( this.downloadFormFName );
		this.mainFrame.append( this.downloadForm );
		var downLoadBtn =$( '<a>' ).attr( {'href':'javascript:void(0);', 'target':'_blank'} )
			.css( { "text-align":"center" } )
			.addClass('normalbutton').html( '表示中の情報をまとめて保存' ).click(
			L.bind( this.onDownloadClick, this ) );

		buttnFrame.append( downLoadBtn );
		this.mainFrame.append( buttnFrame );

		this.frame.append( this.mainFrame  );


		this.editModeFrame = this.createEditModeFrame();
		this.editModeFrame.hide();
		this.frame.append( this.editModeFrame  );

		this.editFrame = $( '<div>' ).addClass( 'editframe' );


		// okキャンセルボタン
		this.okCancelFrame = this.createOkCancel();


		this.editFrame.hide();
		this.okCancelFrame.hide();

		this.frame.append( this.editFrame );

		this.frame.append( this.okCancelFrame  );
		return this.frame;

	},

	getInfo : function()
	{
		this.sakuzuInfo.visible = this.sakuzuCheckbox.is( ":checked" );
		return this.sakuzuInfo;
	},


	getFileList : function()
	{
		this.sakuzuInfo.visible = this.sakuzuCheckbox.is( ":checked" );
		if ( this.kmlList )
		{
			for ( var i=0; i<this.kmlList.length; i++ )
			{
				this.kmlList[i].visible = this.kmlList[i].checkbox.is( ':checked' );
				this.kmlList[i].fileName = this.kmlList[i].title;
			}
			return this.kmlList;
		}
		else
		{
			return [];
		}
	},



	createEditModeFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_editmode' );

		var titleFrame = $( '<div>' ).addClass( 'title' );
		var messageFrame = $( '<div>' ).addClass( 'message' ).html( '編集したい図形・マーカーをクリックしてください。' );
		var buttonFrame = $( '<div>' ).addClass( 'buttonframe' );

		var button = $( '<a>' ).addClass( 'normalbutton' ).attr({href:'javascript:void(0);'}).html( '編集を終了して前の画面に戻る' );

		button.click( L.bind( function() { this.endEditMode(); },this) );

		buttonFrame.append( button );

		frame.append( titleFrame );
		frame.append( messageFrame );
		frame.append( buttonFrame );

		return frame;
	},

	createEdit : function()
	{
		if ( this.pointEditFrame ) return;
		// 線編集
		this.pointEditFrame = this.createPointEdit();
		this.editFrame.append( this.pointEditFrame  );


		// 線編集
		this.lineEditFrame = this.createLineEdit();
		this.editFrame.append( this.lineEditFrame  );

		// 塗りつぶし編集
		this.fillEditFrame = this.createFillEdit();
		this.editFrame.append( this.fillEditFrame  );

		// 円編集
		this.circleEditFrame = this.createCircleEdit();
		this.editFrame.append( this.circleEditFrame  );


		// KML読み込み
		this.kmlLoadFrame = this.createKMLLoad();
		this.editFrame.append( this.kmlLoadFrame  );


		// 情報編集
		this.infoEditFrame = this.createInfoEdit();
		this.editFrame.append( this.infoEditFrame  );

	},

	createList : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_list' );

		//var a = $( '<a>' ).addClass('folder').attr( {'href':'javascript:void(0);'} );

		this.listTable = $( '<table>' ).css( { 'width' : '100%'} );
		this.listTBody = $( '<tbody>' );

		this.refreshList(true);
		this.listTable.append( this.listTBody );
		frame.append( this.listTable );
		/*
		var div = $( '<div>' ).addClass('folder');
		var title = $( '<div>' ).addClass("title").html( '作図情報' );
		var num = $( '<span>' ).addClass("num").html( '0' );

		div.append( title );
		title.append( num );

		li.append( div );

		this.listUL.append( li );

		frame.append( this.listUL );
		*/
		return frame;
	},

	refreshList : function(init)
	{
		this.listTBody.empty();

		// 作図
		var tr = $( '<tr>' );

		var td = null;
		var checkBox = $( '<input>' ).attr( { 'type' : 'checkbox', 'checked' : this.sakuzuInfo.visible } );
		td = $( '<td>' ).append( checkBox );
		tr.append( td );

		var title = $( '<div>' ).append( '作図情報' ).addClass('folder').css( { "word-break": "break-all"} );





		td = $( '<td>' ).append( title ).css( { 'width' : '100%', "word-break": "break-all"} );
		tr.append( td );


		var num = $( '<span>' ).addClass( 'num' ).html(this.sakuzuInfo.list.length );
		td = $( '<td>' ).css({"text-align":"right"}).append( num );
		tr.append( td );

		var buttonClassName = 'normalbutton sakuzubutton' + ( this.sakuzuInfo.list.length <= 0 ? ' disabled' : '' );
		var editBtn =  $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( '編集' ).addClass(buttonClassName);
		td = $( '<td>' ).append( editBtn );
		tr.append( td );

		var clearBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( '削除' ).addClass(buttonClassName);
		td = $( '<td>' ).append( clearBtn );

		clearBtn.click( L.bind( this.onLayerRemoveClick, this, this.sakuzuInfo, tr, true ) );

		tr.append( td );
		this.sakuzuCheckbox = checkBox;
		editBtn.click( L.bind( this.onLayerEditClick, this, this.sakuzuInfo, true ) );
		this.sakuzuCheckbox.click( L.bind( this.onLayerCheckClick,this, this.sakuzuInfo, this.sakuzuCheckbox ) );

		this.listTBody.append( tr );


		if ( this.kmlList )
		{
			for ( var i=0; i<this.kmlList.length; i++ )
			{
				var item = this.kmlList[ i ];

				var tr = $( '<tr>' );

				var td = null;

				var checkBox = $( '<input>' ).attr( { 'type' : 'checkbox', 'checked' : item.visible } );
				td = $( '<td>' ).append( checkBox );
				tr.append( td );

				item.checkbox = checkBox;
				item.checkbox.click( L.bind( this.onLayerCheckClick,this, item, checkBox ) );

				var title = $( '<div>' ).append( item.title)
					.css( { "word-break": "break-all"} )
					.addClass('folder');

				var num = $( '<span>' ).addClass( 'num' ).html(item.list.length );

				td = $( '<td>' ).append( title ).css( { 'width' : '100%', "word-break": "break-all"} );
				tr.append( td );


				td = $( '<td>' ).css({"text-align":"right"}).append( num );
				tr.append( td );

				var buttonClassName = 'normalbutton sakuzubutton' + ( item.list.length<= 0 ? ' disabled' : '' );
				var editBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( '編集' ).addClass(buttonClassName);
				td = $( '<td>' ).append( editBtn );
				tr.append( td );

				var clearBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( '削除' ).addClass(buttonClassName);
				td = $( '<td>' ).append( clearBtn );
				tr.append( td );
				this.listTBody.append( tr );

				editBtn.click( L.bind( this.onLayerEditClick, this, item, false ) );
				clearBtn.click( L.bind( this.onLayerRemoveClick, this, item, tr ) );
			}

		}

	},


	onLayerEditClick : function( info, elem )
	{
		if ( !info || info.list.length <= 0 ) return;
		this.startEditMode( info );



	},

	endEditMode : function(cleanUpOnly)
	{

		if ( this.editingInfo )
		{
			if ( this.editingInfo.boundsRects  )
			{
				this.map.removeLayer ( this.editingInfo.boundsRects );
			}

			if ( this.editingInfo.editingDrawingInfo )
			{
				this.map.removeLayer ( this.editingInfo.editingDrawingInfo );
			}

			if ( this.editingInfo.info.list )
			{
				for ( var i=0; i<this.editingInfo.info.list.length; i++ )
				{
					var drawingInfo = this.editingInfo.info.list[i];
					if ( drawingInfo.drawLayer._clickEditHandler )
					{
						drawingInfo.drawLayer.off('click', drawingInfo.drawLayer._clickEditHandler);
						delete drawingInfo.drawLayer._clickEditHandler;
						drawingInfo.drawLayer._clickEditHandler = null;
					}

					if ( drawingInfo.oldDrawLayer )
					{
						this.map.removeLayer( drawingInfo.drawLayer );
						drawingInfo.drawLayer = drawingInfo.oldDrawLayer;
						drawingInfo.oldDrawLayer = null;
					}

					if ( drawingInfo.oldStyle )
					{
						drawingInfo.style = drawingInfo.oldStyle;
						drawingInfo.oldStyle = null;
					}


					var description = ( drawingInfo.description ? drawingInfo.description : '' );

					if ( description == '' && drawingInfo.infoTable )
					{
						description = this.infoTableData2HTML(drawingInfo.infoTable);
					}

					if ( ( drawingInfo.title && drawingInfo.title != '' ) || description != '' )
					{
						drawingInfo.drawLayer.bindPopup(
								( drawingInfo.title && drawingInfo.title != '' ? '<h2>' + drawingInfo.title + '</h2>' : '' ) +
								( description && description != '' ? description : '' ),
								{
									maxWidth:5000
								}
							);
					}
				}
			}

			delete this.editingInfo;
			this.editingInfo = null;

		}

		if ( !cleanUpOnly )
		{

			this.editModeFrame.fadeOut( 'fast', L.bind( function() {
				this.mainFrame.show();
				this.modeSelectFrame.show();
			},this ) );
		}

	},

	startEditMode : function( info )
	{
		this.mainFrame.hide();
		this.editFrame.hide();
		this.okCancelFrame.hide();
		this.modeSelectFrame.hide();

		var title = '<strong>' + ( info == this.sakuzuInfo ? '作図情報' : info.title  )  + '</strong>の編集';

		this.editingInfo = {
			title : title,
			boundsRects : L.featureGroup(),
			info : info,
			editingDrawingInfo : null
		};

		for ( var i=0; i<info.list.length; i++ )
		{
			var drawingInfo = info.list[i];

			//var popup = layers[i].getPopup();
			var drawLayer = drawingInfo.drawLayer;

			// ポップアップストップ
			if ( drawLayer.closePopup )drawLayer.closePopup();
			if ( drawLayer.unbindPopup )drawLayer.unbindPopup();

			// 編集
			if ( drawLayer._clickEditHandler )
			{
				drawLayer.off('click', drawLayer._clickEditHandler);
				delete drawLayer._clickEditHandler;
				drawLayer._clickEditHandler = null;
			}

			drawLayer._clickEditHandler = L.bind( function(drawingInfo) {
				//layer.editing.enable();
				if( !this.editingInfo ) return;
				if ( !this.editingInfo.editingDrawingInfo  )
				{
					this.startEdit( drawingInfo );
				}

			}, this, drawingInfo );


			drawLayer.on( 'click', drawLayer._clickEditHandler );

			var rect = null;
			var rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:1,dashArray : [3,3]};


			if ( drawLayer.getRadius )
			{
				var radius = drawLayer.getRadius();
				var latRadius = ( radius / 40075017 * 360 );
				var latlng = drawLayer._latlng;

				var lngRadius = ( latRadius / Math.cos(L.LatLng.DEG_TO_RAD * latlng.lat) );

				rect = L.rectangle(
					new L.LatLngBounds(
						[latlng.lat - latRadius, latlng.lng - lngRadius],
						[latlng.lat + latRadius, latlng.lng + lngRadius]),
					rectStyle );
				//var lngRadius = layers[i]._getLngRadius(),
				//latRadius = (layers[i]._mRadius / 40075017) * 360,

			}
			else if ( drawLayer.getBounds )
			{
				rect = L.rectangle(drawLayer.getBounds(), rectStyle);
			}
			else
			{
				if ( drawingInfo.style.icon )
				{
					rect = new GSI.PixelRectangle( drawLayer.getLatLng(), 50, 50,
					rectStyle );
				}
			}

			if ( rect )
			{
				this.editingInfo.boundsRects.addLayer( rect );
			}
		}
		if ( this.editingInfo.boundsRects.getBounds )
		{
			this.map.fitBounds( this.editingInfo.boundsRects.getBounds() );
		}

		this.editingInfo.boundsRects.addTo( this.map );
		this.editModeFrame.find( '.title' ).html( title );
		this.editModeFrame.show();

	},


	onLayerRemoveClick : function(info, elem, noRemoveElement)
	{
		if ( !info || info.list.length <= 0 ) return;
		if ( !window.confirm( '情報を削除します。よろしいですか？' ) ) return;

		if ( info.list ) info.list =[];

		if ( info.layer &&  info.layer.clearLayers)
		{
			info.layer.clearLayers();
		}

		if ( this.kmlList )
		{
			for ( var i=0; i<this.kmlList.length; i++ )
			{
				if ( this.kmlList[i] == info )
				{
					if( info.layer  ) this.map.removeLayer ( info.layer );
					this.kmlList.splice( i, 1 );
					break;
				}
			}
		}
		this.refreshList();
		/*
		if ( !noRemoveElement )
		{
			elem.fadeOut( 'normal', function()
			{
				$(this).remove();
			} );
		}
		else
		{
			elem.find( '.num' ).html( '0' );
		}
		*/
	},

	onLayerCheckClick : function(info,checkbox)
	{
		if ( info.layer )
		{
			info.visible = checkbox.is( ":checked" );
			if ( checkbox.is( ":checked" ) )
			{
				this.map.addLayer( info.layer);
			}
			else
			{
				this.map.removeLayer( info.layer);
			}
		}
	},

	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}
	},

	createPointEdit : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_pointedit' );

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		this.iconImage = $( '<img>');

		var tr = $( '<tr>' );
		tr.append( $( '<td>' ).css( {'white-space':'nowrap'} ).html( 'アイコン:' ) );
		tr.append( $( '<td>' ).append( this.iconImage ) );

		tr.append( $( '<td>' ).css( {'white-space':'nowrap'} ).html( '&nbsp;&nbsp;拡大率:' ) );
		this.iconSizeSelect = $( '<select>' );
		this.iconSizeSelect.append( $( '<option>' ).html("0.5").val("0.5" ) );
		this.iconSizeSelect.append( $( '<option>' ).html("1.0").val("1.0" ) );
		this.iconSizeSelect.append( $( '<option>' ).html("1.5").val("1.5" ) );
		this.iconSizeSelect.append( $( '<option>' ).html("2.0").val("2.0" ) );

		this.iconSizeSelect[0].selectedIndex = 1;
		this.iconSizeSelect.on( 'change',  L.bind( this.onIconSizeChange, this ) );


		tr.append( $( '<td>' ).append( this.iconSizeSelect ) );


		tbody.append( tr );

		table.append( tbody );
		frame.append( table );

		var iconList = [];

		for ( var i=0; i<CONFIG.SAKUZU.SYMBOL.FILES.length; i++ )
		{
			iconList.push( {
				url : CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.FILES[i],
				size : CONFIG.SAKUZU.SYMBOL.ICONSIZE,
				anchor : CONFIG.SAKUZU.SYMBOL.ICONANCHOR
			} );
		}


		this.iconSelector = new GSI.IconSelector( this.iconImage, iconList );
		this.iconSelector.on( 'select', L.bind( this.onIconSelect, this ) );

		return frame;
	},


	createLineEdit : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_lineedit' );

		var editFrame = $( '<div>' ).css( { 'vertical-align' : 'middle'} );

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );
		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '線幅:' ) );

		this.lineWeightSelect = $( '<select>' );

		this.lineWeightSelect.append ( $('<option>').html("1px").val("1") );
		this.lineWeightSelect.append ( $('<option>').html("3px").val("3") );
		this.lineWeightSelect.append ( $('<option>').html("5px").val("5") );
		this.lineWeightSelect.append ( $('<option>').html("10px").val("10") );
		this.lineWeightSelect.append ( $('<option>').html("15px").val("15") );
		this.lineWeightSelect.append ( $('<option>').html("25px").val("25") );

		this.lineWeightSelect.change( L.bind( function(){

			this.drawingInfo.style.weight =this.lineWeightSelect.val();
			this.refreshDrawInfo();
		}, this ) );

		//tr.append( $( '<td>' ).css( {background:'#000', width:"50px"} ).html( '&nbsp;' ) );

		tr.append( $( '<td>' ).append( this.lineWeightSelect ) );


		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '&nbsp;&nbsp;線色:' ) );
		this.lineColorSelector = $( '<div>' ).css( {"background":'#000'} ).html( '　　' ).addClass( 'color_select' );
		this.lineColorSelector.ColorPicker({
			onChange: L.bind( function(hsb, hex, rgb, el) {
				this.lineColorSelector.css({ 'background' : "#" + hex });
				this.drawingInfo.style.color = '#' + hex;
			}, this ),
			onSubmit: L.bind( function(hsb, hex, rgb, el) {
				this.lineColorSelector.css({ 'background' : "#" + hex });
				this.drawingInfo.style.color = '#' + hex;
				this.refreshDrawInfo();
				this.lineColorSelector.ColorPickerHide();
			}, this ),
			onBeforeShow: L.bind( function () {
				this.lineColorSelector.ColorPickerSetColor(this.drawingInfo.style.color);

			}, this ),

			onShow: L.bind( function (colpkr) {
				$( colpkr).slideDown( 'fast' );
				return false;
			}, this ),
			onHide: L.bind( function (colpkr) {
				$( colpkr).slideUp( 'fast' );
				this.refreshDrawInfo();
				return false;
			}, this )

		});

		tr.append( $( '<td>' ).append( this.lineColorSelector  ) );

		tbody.append(tr );

		table.append( tbody );
		editFrame.append( table );


		// 透明度

		var table2 = $( '<table>' );
		var tbody2 = $( '<tbody>' );
		var tr2 = $( '<tr>' );
		tr2.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '線の透過率:' ) );
		var td2 = $( '<td>' ).css( { 'width':'150px',"padding":"4px 0 4px 8px"} );




		var sliderChangeHandler = L.bind( function(opacitySlider) {
			opacity = this.lineOpacitySlider.slider( 'value' );
			opacity = 1 - ( opacity / 100 );
			this.drawingInfo.style.opacity = opacity;
			this.refreshDrawInfo();
		}, this );

		this.lineOpacitySlider = $( '<div>' ).slider(
			{
				range: "min",min: 0,max: 100, value: 0,
				"slide" : sliderChangeHandler,
				"change" : sliderChangeHandler,
				"stop" : sliderChangeHandler
			}
		);



		td2.append( this.lineOpacitySlider );
		tr2.append ( td2 );

		tbody2.append(tr2 );
		table2.append(tbody2 );

		editFrame.append( table2 );





		frame.append( editFrame );

		return frame;

	},

	createFillEdit : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filledit' );

		var editFrame = $( '<div>' ).css( { 'vertical-align' : 'middle'} );

		var table = $( '<table>' );

		var tr = $( '<tr>' );


		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '塗潰し色:' ) );
		this.fillColorSelector = $( '<div>' ).css( {"background":'#000'} ).html( '　　' ).addClass( 'color_select' );
		this.fillColorSelector.ColorPicker({
			onChange: L.bind( function(hsb, hex, rgb, el) {
				this.fillColorSelector.css({ 'background' : "#" + hex });
				this.drawingInfo.style.fillColor = '#' + hex;
			}, this ),
			onSubmit: L.bind( function(hsb, hex, rgb, el) {
				this.fillColorSelector.css({ 'background' : "#" + hex });
				this.drawingInfo.style.fillColor = '#' + hex;
				this.refreshDrawInfo();
				this.fillColorSelector.ColorPickerHide();
			}, this ),
			onBeforeShow: L.bind( function (colpkr) {
				this.fillColorSelector.ColorPickerSetColor(this.drawingInfo.style.fillColor);
			}, this ),

			onShow: L.bind( function (colpkr) {
				$( colpkr).slideDown( 'fast' );
				return false;
			}, this ),
			onHide: L.bind( function (colpkr) {
				$( colpkr).slideUp( 'fast' );
				this.refreshDrawInfo();
				return false;
			}, this )

		});

		tr.append( $( '<td>' ).append(this.fillColorSelector) );

		table.append(tr );
		editFrame.append( table );


		// 透明度
		var table2 = $( '<table>' );
		var tbody2 = $( '<tbody>' );
		var tr2 = $( '<tr>' );
		tr2.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '塗潰しの透過率:' ) );
		var td2 = $( '<td>' ).css( { 'width':'150px',"padding":"4px 0 4px 8px"} );


		var sliderChangeHandler = L.bind( function(opacitySlider) {
			opacity = this.fillOpacitySlider.slider( 'value' );
			opacity = 1 - ( opacity / 100 );
			this.drawingInfo.style.fillOpacity = opacity;
			this.refreshDrawInfo();
		}, this );

		this.fillOpacitySlider = $( '<div>' ).slider(
			{
				range: "min",min: 0,max: 100, value: 0,
				"slide" : sliderChangeHandler,
				"change" : sliderChangeHandler,
				"stop" : sliderChangeHandler
			}
		);

		td2.append( this.fillOpacitySlider );
		tr2.append ( td2 );

		tbody2.append(tr2 );
		table2.append(tbody2 );

		editFrame.append( table2 );


		frame.append( editFrame );

		return frame;
	},


	createCircleEdit : function()
	{
		var frame = $( '<div>' );

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );
		var td = null;

		td = $( '<td>' ).html('半径:');
		tr.append( td );

		td = $( '<td>' );
		this.circleRadiusInput = $( '<input>' ).attr( { 'type':'text' } );
		this._onCircleRadiusChange = L.bind( this.onCircleRadiusChange, this );
		this.circleRadiusInput.on( "keyup", this._onCircleRadiusChange );
		this.circleRadiusInput.on( "blur", this._onCircleRadiusChange );

		td.append( this.circleRadiusInput );
		tr.append( td );

		td = $( '<td>' );
		this.circleRadiusUnitSelect = $( '<select>' );

		this.circleRadiusUnitSelect.append ( $('<option>').html("m").val("m") );
		this.circleRadiusUnitSelect.append ( $('<option>').html("km").val("km") );

		this.circleRadiusUnitSelect.on( "change", this._onCircleRadiusChange );

		td.append( this.circleRadiusUnitSelect );
		tr.append( td );


		tbody.append( tr);
		table.append( tbody );
		frame.append( table );

		return frame;
	},

	onCircleRadiusChange : function()
	{

		var radius = this.circleRadiusInput.val();

		if(radius.match(/^[0-9]+\.[0-9]+$/) || radius.match(/^[0-9]+$/))
		{
			radius = parseFloat( radius );
			if( this.circleRadiusUnitSelect.val() == 'km' )
			{
				radius *= 1000;
			}

			if ( this.drawingInfo && this.drawingInfo.drawLayer && this.drawingInfo.drawLayer.setRadius )
			{
				this.drawingInfo.drawLayer.setRadius( radius );
			}
			if ( this.drawingInfo && this.drawingInfo.path && this.drawingInfo.path.setRadius )
			{
				this.drawingInfo.path.setRadius( radius );
			}

		}


		//this.drawingInfo.

	},

	createKMLLoad : function()
	{

		var frame = $('<div>').addClass( 'gsi_sakuzu_dialog_kmlload' );

		var message = $( '<div>' ).html( 'ファイルを選択後「決定」ボタンを押してください<br><strong>読込可能な形式：KML,GeoJSON,TopoJSON</strong>' ).addClass("message");
		this.kmlFileSelect = $( '<input>' ).attr( {'type':'file', 'name':'kml'} ).css( {'margin-left':'20px'} );

		frame.append( message );
		frame.append( this.kmlFileSelect );

		return frame;
	},

	refreshDrawInfo : function()
	{

		if ( this.drawingInfo.drawLayer  )
		{
			this.drawingInfo.drawLayer.setStyle( this.drawingInfo.style );
			if ( this.drawingInfo.drawLayer.redraw ) this.drawingInfo.drawLayer.redraw();
		}


		if ( this.drawingInfo.path )
		{
			var shape = this.drawingInfo.path._shape;
			if ( !shape ) shape = this.drawingInfo.path._poly;
			if ( !shape ) shape = this.drawingInfo.path._area;

			if ( shape && shape.setStyle )
			{
				shape.setStyle( this.drawingInfo.style );
				if ( this.drawingInfo.path.setOptions )
					this.drawingInfo.path.setOptions( {shapeOptions: this.drawingInfo.style} );
			}
		}

		if ( this.drawingInfo.pathList )
		{
			for ( var i=0; i<this.drawingInfo.pathList.length; i++ )
			{
				var shape = this.drawingInfo.pathList[i]._shape;
				if ( !shape ) shape = this.drawingInfo.pathList[i]._poly;
				if ( !shape ) shape = this.drawingInfo.pathList[i]._area;

				if ( shape && shape.setStyle )
				{
					shape.setStyle( this.drawingInfo.style );
					if ( this.drawingInfo.pathList[i].setOptions )
						this.drawingInfo.pathList[i].setOptions( {shapeOptions: this.drawingInfo.style} );
				}
			}

		}

	},



	createInfoEdit : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_infoedit' );
		var table = $( '<table>' ).css( { width:'100%'} );
		var tbody = $( '<tbody>' );

		var tr = $( '<tr>' );

		tr.append( $( '<td>' ).css( { 'white-space':'nowrap'} ).html('名称:') );
		var td = $( '<td>' );

		this.titleInput = $( '<input>' ).addClass( 'inputtext').attr({'type':'text', 'placeholder':'(例:A図書館)'}).css( { width:'200px'} );
		td.append( this.titleInput );
		tr.append( td );

		tbody.append(tr );
		table.append( tbody );
		frame.append( table );



		// 情報
		this.toggleInfo = $( '<a>' ).html( '自由文入力に切替' ).attr( { 'href' : 'javascript:void(0);' } ).addClass( 'toggleinfobtn' )
			.click( L.bind( this.onToggleInfoClick, this ) );

		frame.append( this.toggleInfo );

		this.infoTable = $( '<table>' ).attr({border:0}).css( { width:'100%'} );
		var tbody = $( '<tbody>' );

		this.infoTableTbody = tbody;

		//this.refreshInfoTable();

		this.infoTable.append( tbody );
		frame.append( this.infoTable );

		this.infoFreeWordTextarea = $( '<textarea>' ).attr( {'wrap':'off'} ).addClass( 'inputtextarea').css( { height:'100px','width' : '100%', "margin-top": "2px" } ).hide();
		frame.append( this.infoFreeWordTextarea );




		return frame;
	},

	getInfoTableData : function()
	{
		var keys = this.infoTableTbody.find( "textarea[name='info_table_key']" );
		var values = this.infoTableTbody.find( "textarea[name='info_table_value']" );


		var result = [];

		for ( var i=0;i<keys.length; i++ )
		{
			var key = $(keys[i]).val();
			var value = $(values[i]).val();

			if ( $.trim( key ) != '' || $.trim( value ) != '' )
			{
				result.push( {key : key, value : value} );
			}
		}

		return result;

	},

	encodeHTML : function( src)
	{
		src = src.replace( '<' , '&lt;' );
		src = src.replace( '>' , '&gt;' );
		return src;

	},

	infoTableData2HTML : function(infoTableData)
	{
		if ( !infoTableData ) return '';
		if ( infoTableData.length <= 0 ) return '';
		var result = '<table border="1">' + "\n";

		for ( var i=0; i<infoTableData.length; i++ )
		{
			var item = infoTableData[i];

			result += '<tr><td>' + item.key + '</td><td>' + item.value + '</td></tr>' + "\n";

		}

		result += '</table>';

		return result;
	},

	refreshInfoTable : function(drawInfo)
	{

		this.infoTableTbody.empty();

		var tr = $( '<tr>' );
		var td = $( '<td>' ).css( { 'width' : '30%', 'white-space':'nowrap'} ).html( '項目名' );
		tr.append( td );
		td = $( '<td>' ).attr( { "colspan":"3"} ).html( '値' );
		tr.append( td );
		this.infoTableTbody.append(tr );

		var list = [];

		if ( drawInfo && drawInfo.infoTable )
		{
			list = drawInfo.infoTable;
		}
		else
		{
			list.push( { key:'', value:''} );
		}
		for ( var i=0; i<list.length; i++ )
		{
			var item = list[i];

			tr = $( '<tr>' );

			td = $( '<td>' ).css( { 'width' : '30%', 'vertical-align':'middle' } );
			var nameTextarea = $( '<textarea>' ).addClass( 'inputtextarea')
				.attr( { name: 'info_table_key', 'placeholder':'(例:営業時間)', rows:1} )
				.css( { 'display':'block','width' : '100%' } ).html( item.key );
			td.append( nameTextarea );
			tr.append( td );

			td = $( '<td>' );
			var valueTextarea = $( '<textarea>' ).addClass( 'inputtextarea')
				.css({'display':'block',width:"100%"})
				.attr( { name: 'info_table_value', 'placeholder':'(例:10時～18時)',rows:1} ).html( item.value );
			td.append( valueTextarea );
			tr.append( td );

			td = $( '<td>' ).css( { width:"24px","text-align":"center"} );

			//var btn = $( '<input>' ).attr( { type: 'button'} ).val( '削除' );
			var btn = $( '<a>' ).attr( { 'href' : 'javascript:void(0);'} ).addClass( "btn" )
				.html( '<img title="この行を削除" src="image/sakuzu/icon_remove.png">' )
				.data( {
					no : i
				} );
			td.append( btn );
			tr.append( td );

			td = $( '<td>' ).css( { width:"24px","text-align":"center"} );
			var btn = $( '<a>' ).attr( { 'href' : 'javascript:void(0);'} ).addClass( "btn" )
				.html( '<img title="この下に行を追加" src="image/sakuzu/icon_enter.png">' )
				.data( {
					no : i
				} );
			td.append( btn );
			tr.append( td );


			this.infoTableTbody.append(tr );
		}
	},

	onToggleInfoClick : function()
	{
		if ( this.infoTable.is( ':visible' ) )
		{
			var data = this.getInfoTableData();

			this.toggleInfo.html( '表に切替' );
			this.infoTable.hide();
			this.infoFreeWordTextarea.val( this.infoTableData2HTML( data ) );


			this.infoFreeWordTextarea.show();
		}
		else
		{
			this.toggleInfo.html( '自由文入力に切替' );
			this.infoFreeWordTextarea.hide();
			this.infoTable.show();
		}
	},


	createOkCancel : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );

		var okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( '決　定' ).addClass( 'normalbutton' );
		var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( '中　止' ).addClass( 'normalbutton' );

		okBtn.click( L.bind( this.onEditOkClick, this ) );
		cancelBtn.click( L.bind( this.onEditCancelClick, this ) );

		frame.append( okBtn ).append( cancelBtn );

		return frame;
	},

	createModeSelectFrame : function()
	{
		var frame =  $( "<div>" ).addClass( 'gsi_sakuzu_dialog_modeselect' );
		var btn = null;

		// ポイント
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_mark_b.png','title' : 'マーカーを追加'}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this.startEdit, this, "point") );
		frame.append( btn );


		// 線
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_line_b.png','title' : '線を追加'}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this.startEdit, this, "line") );
		frame.append( btn );

		// ポリゴン
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_polygon_b.png','title' : 'ポリゴンを追加'}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this.startEdit, this, "polygon") );
		frame.append( btn );

		// 円
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_circle_b.png','title' : '円を追加'}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this.startEdit, this, "circle") );
		frame.append( btn );

		// フリーハンド
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_freehand_b.png','title' : 'フリーハンドで線を追加'}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this.startEdit, this, "freehand") );
		frame.append( btn );

		// KML
		btn = $( '<a>' ).attr({"href":"javascript:void(0);",'title' : 'ファイルから読み込み'}).css({"line-height":"24px",width:"auto"}).html( 'ファイル読込' ).click( L.bind( this.startEdit, this, "kml") );
		frame.append( btn );


		// KML
		//btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).html( '編集' ).css({ 'height':"30px", 'line-height' : '30px'}).click( L.bind( this.startEdit, this, "edit") );
		//frame.append( btn );


		frame.append( $('<div>').css( { clear:'both'} ) );


		return frame;

	},

	startEdit : function( mode )
	{
		var isEdit = false;

		if (typeof mode == "string"){

			this.drawingInfo = {
				mode : mode,
				drawEnd : false,
				title :""
			};
		}
		else
		{
			this.editingInfo.editingDrawingInfo = mode;
			isEdit = true;
			this.drawingInfo = mode;
			mode = this.drawingInfo.mode;
			this.drawingInfo.drawEnd = true;

			this.drawingInfo.oldDrawLayer = this.drawingInfo.drawLayer;

			var opacitySetter = new GSI.LayerOpacitySetter();
			opacitySetter.setOpacity( this.drawingInfo.oldDrawLayer, 0 );

			var style =  $.extend(true, {}, this.drawingInfo.style );

			this.drawingInfo.oldStyle = style;


			switch( mode )
			{
				case 'point':

					if ( !this.drawingInfo.style.icon.size )
					{
						this.drawingInfo.style.icon.size = [
							this.drawingInfo.drawLayer.options.icon.options.iconSize[0],
							this.drawingInfo.drawLayer.options.icon.options.iconSize[1]
						];

						this.drawingInfo.style.icon.anchor =[
							this.drawingInfo.drawLayer.options.icon.options.iconAnchor[0],
							this.drawingInfo.drawLayer.options.icon.options.iconAnchor [1]
						];
					}


					style = {
						icon : this.createDrawingIcon(),
						clickable:true
					};
					this.drawingInfo.drawLayer = L.marker( this.drawingInfo.oldDrawLayer.getLatLng(), style );
					break;

				case 'line':
					this.drawingInfo.drawLayer = L.polyline( this.drawingInfo.oldDrawLayer.getLatLngs(), style );
					break;

				case 'polygon':
					this.drawingInfo.drawLayer = L.polygon( this.drawingInfo.oldDrawLayer.getLatLngs(), style );

					break;

				case 'circle':
					this.drawingInfo.drawLayer = L.circle( this.drawingInfo.oldDrawLayer.getLatLng(),
						this.drawingInfo.oldDrawLayer.getRadius(), style);
					break;

				case 'multiline':
					break;
				case 'multipoint':
					break;
				case 'multipolygon':
					this.drawingInfo.drawLayer = L.multiPolygon( this.drawingInfo.oldDrawLayer.getLatLngs(), style );
					break;

			}

			this.map.addLayer( this.drawingInfo.drawLayer );
		}

		this.createEdit();
		this.refreshInfoTable(this.drawingInfo);


		if ( this.drawingInfo.title && this.drawingInfo.title != '' )
		{
			this.titleInput.val( this.drawingInfo.title );
		}
		if ( this.drawingInfo.description && this.drawingInfo.description != '' )
		{
			this.infoFreeWordTextarea.val( this.drawingInfo.description );
			this.infoFreeWordTextarea.show();
			this.infoTable.hide();
		}
		else
		{

			this.infoFreeWordTextarea.hide();
			this.infoTable.show();
		}

		if ( !isEdit ) this.toggleInfo.show();
		else this.toggleInfo.hide();

		switch( mode )
		{
			case 'point':
			case 'multipoint':
				this.pointEditFrame.show();
				this.lineEditFrame.hide();
				this.fillEditFrame.hide();
				this.circleEditFrame.hide();
				this.kmlLoadFrame.hide();
				this.infoEditFrame.show();
				if ( !this.drawingInfo.style )
				{
					this.drawingInfo.style =this.drawingInfo.style ={
						icon : {
							url : CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.DEFAULTICON,
							size: CONFIG.SAKUZU.SYMBOL.ICONSIZE,
							anchor: CONFIG.SAKUZU.SYMBOL.ICONANCHOR,
							scale : 1
						}
					};
				}
				this.iconImage.attr( {src:this.drawingInfo.style.icon.url} );
				this.setTitle( '作図 - ポイントの編集' );
				break;


			case 'line':
			case 'multiline':
				this.pointEditFrame.hide();
				this.lineEditFrame.show();
				this.fillEditFrame.hide();
				this.circleEditFrame.hide();
				this.kmlLoadFrame.hide();
				this.infoEditFrame.show();
				if ( !this.drawingInfo.style )
				{
					this.drawingInfo.style ={
						color : '#000000',
						weight : 3,
						opacity : 0.5
					};
				}
				this.setTitle( '作図 - 線の編集' );
				break;

			case 'polygon':
			case 'multipolygon':
				this.pointEditFrame.hide();
				this.lineEditFrame.show();
				this.fillEditFrame.show();
				this.circleEditFrame.hide();
				this.kmlLoadFrame.hide();
				this.infoEditFrame.show();
				if ( !this.drawingInfo.style )
				{
					this.drawingInfo.style ={
						color : '#000000',
						fillColor : '#ff0000',
						weight : 3,
						opacity : 0.5,
						fillOpacity : 0.5
					};
				}
				this.setTitle( '作図 - ポリゴンの編集' );
				break;

			case 'circle':
				this.pointEditFrame.hide();
				this.lineEditFrame.show();
				this.fillEditFrame.show();
				this.circleEditFrame.show();
				this.kmlLoadFrame.hide();
				this.infoEditFrame.show();
				if ( !this.drawingInfo.style )
				{
					this.drawingInfo.style ={
						color : '#000000',
						fillColor : '#ff0000',
						weight : 3,
						opacity : 0.5,
						fillOpacity : 0.5
					};
				}
				this.setTitle( '作図 - 円の編集' );
				break;


			case 'freehand':
				this.pointEditFrame.hide();
				this.lineEditFrame.show();
				this.fillEditFrame.hide();
				this.circleEditFrame.hide();
				this.kmlLoadFrame.hide();
				this.infoEditFrame.show();
				if ( !this.drawingInfo.style )
				{
					this.drawingInfo.style ={
						color : '#000000',
						weight : 3,
						opacity : 0.5
					};
				}
				this.setTitle( '作図 - フリーハンドの編集' );
				break;

			case 'kml':
				this.pointEditFrame.hide();
				this.lineEditFrame.hide();
				this.fillEditFrame.hide();
				this.circleEditFrame.hide();
				this.kmlLoadFrame.show();
				this.infoEditFrame.hide();
				this.setTitle( '作図 - GeoJSON,TopoJSON,KMLファイルの読込' );
				break;

			default:
				if ( !isEdit )
				{
					this.drawingInfo =null;
					alert( '未実装' );
					return;
				}
				break;
		}


		this.mapMouse.setClickMoveEnable( false );
		if ( !isEdit )
		{
			this.editModeFrame.hide();
			this.mainFrame.fadeOut( 'fast', L.bind( this._startCreate,this, mode ));
		}
		else
		{
			this.mainFrame.hide();
			this.editModeFrame.fadeOut( 'fast', L.bind( this._startEdit,this, mode ));
		}
	},


	_startCreate : function( mode)
	{
		this.editFrame.fadeIn( 'fast' );
		this.okCancelFrame.fadeIn( 'fast' );

		if ( !this.drawingItems )
			this.drawingItems = L.featureGroup().addTo(this.map);

		if ( !this._onPathCreated )
		{
			this._onPathCreated = L.bind( this.onPathCreated, this );
			this.map.on('draw:created', this._onPathCreated );
		}
		switch( mode )
		{
			case 'point':
				this._startPointCreate();
				break;

			case 'line':
				this._startLineCreate();
				break;

			case 'polygon':
				this._startPolygonCreate();
				break;

			case 'circle':
				this._startCircleCreate();
				break;

			case 'freehand':
				this._startFreehandCreate();
				break;
		}
	},

	_startEdit : function(mode)
	{

		this.editFrame.fadeIn( 'fast' );
		this.okCancelFrame.fadeIn( 'fast' );

		switch( mode )
		{
			case 'point':
			case 'multipoint':
				this._startPointCreate(true);
				break;

			case 'line':
			case 'multiline':
				this._startLineCreate(true);
				break;

			case 'polygon':
			case 'multipolygon':
				this._startPolygonCreate(true);
				break;

			case 'circle':
				this._startCircleCreate(true);
				break;

			case 'freehand':
				this._startFreehandCreate(true);
				break;
		}

		this.startPathEdit();
		/*
		switch( mode )
		{
			case 'point':
				this._startPointCreate();
				break;

			case 'line':
				this._startLineCreate();
				break;

			case 'polygon':
				this._startPolygonCreate();
				break;

			case 'circle':
				this._startCircleCreate();
				break;

			case 'freehand':
				this._startFreehandCreate();
				break;
		}
		*/
	},

	createDrawingIcon : function()
	{
		var iconSize = [
			this.drawingInfo.style.icon.size[0],
			this.drawingInfo.style.icon.size[1]
		];

		var iconAnchor = [
			this.drawingInfo.style.icon.anchor[0],
			this.drawingInfo.style.icon.anchor[1]
		];

		if ( this.drawingInfo.style.icon.scale && this.drawingInfo.style.icon.scale > 0 )
		{
			iconSize[0] = iconSize[0] * this.drawingInfo.style.icon.scale;
			iconSize[1] = iconSize[1] * this.drawingInfo.style.icon.scale;
			iconAnchor[0] = iconAnchor[0] * this.drawingInfo.style.icon.scale;
			iconAnchor[1] = iconAnchor[1] * this.drawingInfo.style.icon.scale;
		}


		return L.icon( {iconUrl: this.drawingInfo.style.icon.url, iconSize : iconSize, iconAnchor:iconAnchor} );
	},

	refreshDrawingIcon : function()
	{
		var icon = this.createDrawingIcon();

		if ( this.drawingInfo.path )
		{

			this.drawingInfo.path.setOptions( {icon:icon} );
			if ( this.drawingInfo.path._marker && this.drawingInfo.path._marker.setIcon )
				this.drawingInfo.path._marker.setIcon ( icon );
		}

		if ( this.drawingInfo.pathList )
		{
			for ( var i=0; i<this.drawingInfo.pathList.length; i++ )
			{
				this.drawingInfo.pathList[i].setOptions( {icon:icon} );
				if ( this.drawingInfo.pathList[i]._marker && this.drawingInfo.pathList[i]._marker.setIcon )
					this.drawingInfo.pathList[i]._marker.setIcon ( icon );
			}
		}


		if ( this.drawingInfo.drawLayer && this.drawingInfo.drawLayer.setIcon )
		{
			this.drawingInfo.drawLayer.setIcon( icon );
		}
	},

	onIconSelect : function( event)
	{
		if ( this.drawingInfo && this.drawingInfo.mode == 'point' )
		{
			this.drawingInfo.style.icon.url = event.selectedIcon.url;
			this.drawingInfo.style.icon.size = event.selectedIcon.size;
			this.drawingInfo.style.icon.anchor = event.selectedIcon.anchor;

			this.refreshDrawingIcon();
		}


	},


	onIconSizeChange : function( event)
	{
		if ( this.drawingInfo && this.drawingInfo.mode == 'point' )
		{

			this.drawingInfo.style.icon.scale = parseFloat( this.iconSizeSelect.val() );
			this.refreshDrawingIcon();
		}


	},



	_startPointCreate : function(isEdit)
	{
		L.drawLocal.draw.handlers.marker.tooltip.start = 'マーカーを置くポイントをクリック';

		var selectedIndex =2;
		for ( var i=0; i<this.iconSizeSelect[0].options.length; i++ )
		{
			var option = this.iconSizeSelect[0].options[i];

			if ( option.value == this.drawingInfo.style.icon.scale )
			{
				selectedIndex = i;
				break;
			}
		}
		this.iconSizeSelect[0].selectedIndex = selectedIndex;

		if ( !isEdit )
		{
			this.drawingInfo.path =  new  L.Draw.Marker(this.map,{
				edit: { featureGroup: this.drawingItems },
				showLength : false,
				icon : this.createDrawingIcon()
			});

			this.drawingInfo.path.enable();
		}
	},

	_startLineCreate : function(isEdit)
	{
		L.drawLocal.draw.handlers.polyline.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polyline.tooltip.cont = '次の位置を選択(最終点をクリックで終了)';
		L.drawLocal.draw.handlers.polyline.tooltip.end = '次の位置を選択(最終点をクリックで終了)';

		this.lineColorSelector.css( { 'background' : this.drawingInfo.style.color} );
		this.lineWeightSelect.val( this.drawingInfo.style.weight );

		var opacity = this.drawingInfo.style.opacity;
		opacity = Math.floor( ( 1-opacity ) * 100 );
		this.lineOpacitySlider.slider( "value", opacity );
		if ( !isEdit )
		{
			this.drawingInfo.path =  new  GSI.Draw.Polyline(this.map,{
				shapeOptions: {
					stroke: true,
					color: this.drawingInfo.style.color,
					weight: this.drawingInfo.style.weight,
					opacity: this.drawingInfo.style.opacity,
					fill: false,
					clickable: true
				},
				edit: { featureGroup: this.drawingItems },
				showLength : true

			});

			this.drawingInfo.path.enable();
		}
	},



	_startPolygonCreate : function(isEdit)
	{
		L.drawLocal.draw.handlers.polygon.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.cont = '次の位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.end = '次の位置を選択(最終点をクリックで終了)';


		this.lineColorSelector.css( { 'background' : this.drawingInfo.style.color} );
		this.lineWeightSelect.val( this.drawingInfo.style.weight );

		var opacity = this.drawingInfo.style.opacity;
		opacity = Math.floor( ( 1-opacity ) * 100 );
		this.lineOpacitySlider.slider( "value", opacity );


		var fillColor = this.drawingInfo.style.fillColor;
		if ( !fillColor) fillColor = this.drawingInfo.style.color;
		this.drawingInfo.style.fillColor = fillColor;

		this.fillColorSelector.css( { 'background' : fillColor} );


		var fillOpacity = this.drawingInfo.style.fillOpacity;
		fillOpacity = Math.floor( ( 1-fillOpacity ) * 100 );
		this.fillOpacitySlider.slider( "value", fillOpacity );

		if ( !isEdit )
		{
			this.drawingInfo.path =  new GSI.Draw.Polygon(this.map,{
				shapeOptions: {
					stroke: true,
					color: this.drawingInfo.style.color,
					weight: this.drawingInfo.style.weight,
					opacity: this.drawingInfo.style.opacity,
					fillColor: fillColor,
					fillOpacity: this.drawingInfo.style.fillOpacity,
					fill: true,
					clickable: true
				},
				edit: { featureGroup: this.drawingItems },
				showArea : true,
				allowIntersection : false

			});

			this.drawingInfo.path.enable();
		}
	},


	_onCircleChange : function(e)
	{

		this.circleRadiusInput.val(e.radius);
		this.circleRadiusUnitSelect.val( e.unit );
	},

	_startCircleCreate : function(isEdit)
	{
		L.drawLocal.draw.handlers.circle.tooltip.start = '中心位置をクリックしドラッグしてください';

		L.drawLocal.draw.handlers.simpleshape.tooltip.end = 'マウスボタンを離して終了';


		this.lineColorSelector.css( { 'background' : this.drawingInfo.style.color} );
		this.lineWeightSelect.val( this.drawingInfo.style.weight );


		var opacity = this.drawingInfo.style.opacity;
		opacity = Math.floor( ( 1-opacity ) * 100 );
		this.lineOpacitySlider.slider( "value", opacity );


		this.fillColorSelector.css( { 'background' : this.drawingInfo.style.fillColor} );


		var fillOpacity = this.drawingInfo.style.fillOpacity;
		fillOpacity = Math.floor( ( 1-fillOpacity ) * 100 );
		this.fillOpacitySlider.slider( "value", fillOpacity );

		if ( this.drawingInfo.drawLayer && this.drawingInfo.drawLayer.getRadius )
		{
			var radiusUnit = GSI.Draw.convertRadius( this.drawingInfo.drawLayer.getRadius() );
			this.circleRadiusInput.val(radiusUnit.radius );
			this.circleRadiusUnitSelect.val( radiusUnit.unit );
		}
		else
		{
			this.circleRadiusInput.val("0" );
			this.circleRadiusUnitSelect.val( 'm' );
		}


		if ( !isEdit )
		{
			this.drawingInfo.path =  new GSI.Draw.Circle(this.map,{
				shapeOptions: {
					stroke: true,
					color: this.drawingInfo.style.color,
					weight: this.drawingInfo.style.weight,
					opacity: this.drawingInfo.style.opacity,
					fillColor: this.drawingInfo.style.fillColor,
					fillOpacity: this.drawingInfo.style.fillOpacity,
					fill: true,
					clickable: true
				},
				edit: { featureGroup: this.drawingItems },
				showLength : true

			});
			this.drawingInfo.path.on( 'change', L.bind( this._onCircleChange, this ) );


			this.drawingInfo.path.enable();
		}
	},


	_startFreehandCreate : function(isEdit)
	{
		//L.drawLocal.draw.handlers.circle.tooltip.start = '中心位置をクリックしドラッグしてください';

		L.drawLocal.draw.handlers.simpleshape.tooltip.end = 'マウスボタンを離して終了';


		this.lineColorSelector.css( { 'background' : this.drawingInfo.style.color} );
		this.lineWeightSelect.val( this.drawingInfo.style.weight );

		this.fillColorSelector.css( { 'background' : this.drawingInfo.style.fillColor} );

		if ( !isEdit )
		{
			this.drawingInfo.path =  new  GSI.Draw.FreehandPolyline (this.map,{
				shapeOptions: {
					stroke: true,
					color: this.drawingInfo.style.color,
					weight: this.drawingInfo.style.weight,
					opacity: this.drawingInfo.style.opacity,
					fill: false,
					clickable: true
				},
				edit: { featureGroup: this.drawingItems },
				showLength : true

			});

			this.drawingInfo.path.enable();
		}
	},

	onPathCreated : function(event)
	{
		this.drawingInfo.drawEnd = true;
		this.drawingInfo.drawLayer = event.layer;
		this.map.addLayer ( this.drawingInfo.drawLayer );

		if ( this.drawingInfo.path )
		{
			this.drawingInfo.path.disable();
			this.drawingInfo.path = null;
		}
		else
		{

		}


		this.mapMouse.setClickMoveEnable( true );

		if ( this._onPathCreated )
		{
			this.map.off('draw:created', this._onPathCreated );
			this._onPathCreated = null;
		}

		if ( this.drawingItems ) this.map.removeLayer( this.drawingItems );
		this.drawingItems = null;

		this.startPathEdit();

	},


	startPathEdit : function()
	{
		if ( !this.editingItems )
			this.editingItems = L.featureGroup().addTo(this.map);

		switch( this.drawingInfo.mode )
		{
			case 'point':
				this.drawingInfo.path = new GSI.Edit.Marker( this.drawingInfo.drawLayer );
				this.drawingInfo.path.enable();
				break;
			case 'line':
			case 'polygon':
				this.drawingInfo.path = new GSI.Edit.Poly( this.drawingInfo.drawLayer, { edit: { featureGroup: this.editingItems } } );
				this.drawingInfo.path.enable();
				break;

			case 'multiline':
			case 'multipolygon':
				this.drawingInfo.pathList = [];
				var layers = this.drawingInfo.drawLayer.getLayers();
				for ( var i=0; i<layers.length; i++ )
				{
					var path = new GSI.Edit.Poly( layers[i], { edit: { featureGroup: this.editingItems } } );
					path.enable();
					this.drawingInfo.pathList.push( path );
				}
				break;

			case 'circle':
				this.drawingInfo.path = new GSI.Edit.Circle( this.drawingInfo.drawLayer, { edit: { featureGroup: this.editingItems } } );
				this.drawingInfo.path.on( 'change', L.bind( this._onCircleChange, this ) );
				this.drawingInfo.path.enable();
				break;
			case 'multi':
				this.drawingInfo.pathList = [];


				break;
		}

	},


	getTimeStamp : function()
	{

		return GSI.Utils.getTimeStampString();
	},

	onFileLoad : function( fileName )
	{
		try
		{
			var json = JSON.parse( this.fileReader.result);

			this._loadJSON( fileName, json );
		}
		catch( e)
		{

			this._loadKML( fileName );
		}
	},

	_loadJSON : function( fileName, json )
	{

		var layer = new GSI.GeoJSON(null);
		layer.addData( json );

		var list = [];
		try
		{
			this.parseGeoJSONLayer ( list, layer.getLayers() );
		}
		catch( e )
		{
		}

		if ( !this.kmlList ) this.kmlList = [];

		this.kmlList.push( {
			title : fileName,
			layer : layer,
			list : list,
			visible : true
		} );

		this.map.addLayer( layer );

		if ( layer.getBounds )
		{
			this.map.fitBounds( layer.getBounds() );
		}
		this.refreshList();

	},

	geoJSON2DrawingInfo : function(layer,feature )
	{
		var drawingInfo ={
			drawEnd : true,
			drawLayer : layer
		};


		var geometryType = '';


		if ( feature )
		{
			geometryType = feature.geometry.type;
		}
		if ( geometryType == "Point" )
		{
			if ( layer.getRadius )
			{
				drawingInfo.mode = 'circle';
				drawingInfo.style = {
						color : layer.options.color,
						fillColor : layer.options.fillColor,
						weight : layer.options.weight,
						fillOpacity : layer.options.fillOpacity,
						opacity : layer.options.opacity
				};
			}
			else
			{

				drawingInfo.mode = 'point';
				drawingInfo.style = {
					icon : {
						url : layer.options.icon.options.iconUrl,
						scale : layer.options.icon.options.scale
					}
				};

			}
		}
		else if ( geometryType == "LineString" )
		{
			drawingInfo.mode = 'line';
			drawingInfo.style ={
				color : layer.options.color,
				weight : layer.options.weight,
				opacity : layer.options.opacity
			};
		}
		else if ( geometryType == "Polygon" )
		{
			drawingInfo.mode = 'polygon';
			drawingInfo.style ={
				color : layer.options.color,
				fillColor : layer.options.fillColor,
				weight : layer.options.weight,
				fillOpacity : layer.options.fillOpacity,
				opacity : layer.options.opacity
			};
		}
		else if ( geometryType == "Circle")
		{
			drawingInfo.mode = 'circle';
			drawingInfo.style ={
				color : layer.options.color,
				fillColor : layer.options.fillColor,
				weight : layer.options.weight,
				fillOpacity : layer.options.fillOpacity,
				opacity : layer.options.opacity
			};
		}
		else if ( geometryType == "MultiPoint" || geometryType == "MultiLineString"  || geometryType == "MultiPolygon" )
		{
			if ( geometryType == "MultiPoint"  ) drawingInfo.mode = 'multipoint';
			if ( geometryType == "MultiLineString"  ) drawingInfo.mode = 'multiline';
			if ( geometryType == "MultiPolygon"  ) drawingInfo.mode = 'multipolygon';

			var layers = layer.getLayers();
			drawingInfo.style = {};

			for ( var i=0; i<layers.length; i++ )
			{
				if ( layers[i].options )
				{
					drawingInfo.style ={
						color : layers[i].options.color,
						fillColor : layers[i].options.fillColor,
						weight : layers[i].options.weight,
						fillOpacity : layers[i].options.fillOpacity,
						opacity : layers[i].options.opacity
					};
					break;
				}
			}
			/*

			*/
		}

		return drawingInfo;
	},

	parseGeoJSONLayer : function(list, layers)
	{
		if ( !layers ) return;

		for ( var i=0; i<layers.length; i++ )
		{
			var drawingInfo = this.geoJSON2DrawingInfo(layers[i],layers[i].feature);

			if( layers[i].feature && layers[i].feature.properties )
			{
				var infoTable = [];


				for( var key in layers[i].feature.properties )
				{
					if ( !layers[i].feature.properties[key] ) continue;

					if ( key != "" && key.charAt(0) != '_' )
					{
						var value = layers[i].feature.properties[key];
						infoTable.push( {key:key, value:value} );
					}
				}

				if ( infoTable.length > 0 )
					drawingInfo.infoTable = infoTable;


			}

			list.push( drawingInfo );

			/*
			if ( layers[i].getLayers )
			{

				this.parseGeoJSONLayer( list, layers[i].getLayers() );
			}
			else
			{

			}
			*/
		}
	},

	_loadKML : function(fileName)
	{
		var xmlDoc = null;
		if (window.ActiveXObject)
		{
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = false;
			xmlDoc.loadXML(this.fileReader.result);
		}
		else if (window.DOMParser)
		{
			xmlDoc = new DOMParser().parseFromString(
			  this.fileReader.result,
			  "application/xml"
			  );
		}
		var layer = new GSI.KML(null, {async: true});

		layer._addKML( xmlDoc, {} );
		//this.map.addLayer(layer,true);

		var list = [];
		this.parseKMLLayer ( list, layer.getLayers() );

		if ( !this.kmlList ) this.kmlList = [];

		this.kmlList.push( {
			title : fileName,
			layer : layer,
			list : list
		} );

		this.map.addLayer( layer );

		if ( layer.getBounds )
		{
			this.map.fitBounds( layer.getBounds() );
		}

		this.refreshList();
	},

	parseKMLLayer : function(list, layers)
	{
		for ( var i=0; i<layers.length; i++ )
		{
			if ( layers[i].getLayers )
			{
				this.parseKMLLayer( list, layers[i].getLayers() );
			}
			else
			{
				var drawingInfo = this.geoJSON2DrawingInfo(layers[i],layers[i].toGeoJSON());


				drawingInfo.title = layers[i]._title;
				drawingInfo.description = layers[i]._description;

				list.push( drawingInfo );
			}
		}
	},

	onEditOkClick : function()
	{
		if ( this.drawingInfo.mode == 'kml' )
		{
			var files = 	this.kmlFileSelect.prop( 'files' );
			if( !files ) files = 	this.kmlFileSelect.attr( 'files' );


			if ( files && files.length > 0 )
			{
				this.fileReader = new FileReader();
				this.fileReader.onload = L.bind( this.onFileLoad, this , files[0].name);
				this.fileReader.onerror = function() { alert( 'ファイルが読み込めません' ); };
				this.fileReader.readAsText(files[0]);
				this.exitFileSelectMode();
			}
			else
			{
				alert( 'ファイルが選択されていません' );
			}
		}
		else
		{
			if ( !this.drawingInfo.drawEnd ) return;

			this.drawingInfo.title = this.titleInput.val();
			this.drawingInfo.infoTable = this.getInfoTableData();
			this.drawingInfo.description = this.infoFreeWordTextarea.val();


			if ( this.infoTable.is( ':visible' ) )
			{
				this.drawingInfo.editedDescription = this.infoTableData2HTML(this.drawingInfo.infoTable);
			}
			else
			{
				this.drawingInfo.editedDescription = this.drawingInfo.description;
			}


			this.drawingInfo.creationTime = this.getTimeStamp();


			if ( !this.editingInfo && !this.sakuzuInfo.layer )
			{
				this.sakuzuInfo.visible = this.sakuzuCheckbox.is( ":checked" );
				this.sakuzuInfo.layer = L.featureGroup();
				this.sakuzuInfo.layer.addTo( this.map );
			}

			if ( !this.editingInfo )
			{
				var targetLayer = ( !this.editingInfo ? this.drawingInfo.drawLayer : this.drawingInfo.oldDrawLayer );
				if ( this.drawingInfo.title != '' || this.drawingInfo.editedDescription != '' )
				{
					targetLayer.bindPopup(
							( this.drawingInfo.title ? '<h2>' + this.drawingInfo.title + '</h2>' : '' ) +
							( this.drawingInfo.editedDescription ? this.drawingInfo.editedDescription : '' ),
							{
								maxWidth:5000
							}
						);
				}
				else
				{
					targetLayer.unbindPopup();
				}
			}

			if ( this.editingInfo )
			{
				switch( this.drawingInfo.mode )
				{
					case 'point':

						if ( this.drawingInfo.path )this.drawingInfo.path.disable();
						this.drawingInfo.path = null;

						this.drawingInfo.oldDrawLayer.setIcon( this.createDrawingIcon() );
						this.drawingInfo.oldDrawLayer.setLatLng( this.drawingInfo.drawLayer.getLatLng() );

						break;

					case 'line':
					case 'polygon':
						this.drawingInfo.oldDrawLayer.setLatLngs( this.drawingInfo.drawLayer.getLatLngs() );
						this.drawingInfo.oldDrawLayer.setStyle(this.drawingInfo.style);
						this.drawingInfo.oldDrawLayer.redraw();
						break;

					case 'circle':
						this.drawingInfo.oldDrawLayer.setLatLng( this.drawingInfo.drawLayer.getLatLng() );
						this.drawingInfo.oldDrawLayer.setStyle(this.drawingInfo.style);
						this.drawingInfo.oldDrawLayer.setRadius(this.drawingInfo.drawLayer.getRadius() );

						this.drawingInfo.oldDrawLayer.redraw();

						break;


				}
				//this.drawingInfo.oldDrawLayer.unbind();

				var opacitySetter = new GSI.LayerOpacitySetter();
				opacitySetter.setOpacity( this.drawingInfo.oldDrawLayer, 1 );

				var drawLayer = this.drawingInfo.drawLayer;
				this.drawingInfo.drawLayer = this.drawingInfo.oldDrawLayer;


				this.drawingInfo.oldDrawLayer = null;

				this.refreshList();
				this.exitLayerEdit(false);
				this.map.removeLayer( drawLayer);
			}
			else
			{
				this.map.removeLayer( this.drawingInfo.drawLayer);
				this.sakuzuInfo.layer.addLayer( this.drawingInfo.drawLayer );
				this.sakuzuInfo.list.push( this.drawingInfo );
				this.refreshList();
				this.exitCreateMode(false);

				if ( !this.sakuzuInfo.visible )
					this.map.removeLayer( this.sakuzuInfo.layer );
			}

		}
	},

	onEditCancelClick : function()
	{
		if ( this.drawingInfo.mode == 'kml' )
		{
				this.exitFileSelectMode();
		}
		else
		{
			if ( this.drawingInfo && this.drawingInfo.oldStyle  )
			{
				this.drawingInfo.style = this.drawingInfo.oldStyle;
			}

			var drawLayer = this.drawingInfo.drawLayer;

			if ( this.drawingInfo.oldDrawLayer )
			{
				var opacitySetter = new GSI.LayerOpacitySetter();
				opacitySetter.setOpacity( this.drawingInfo.oldDrawLayer, 1 );
			}
			this.drawingInfo.drawLayer = this.drawingInfo.oldDrawLayer;
			this.drawingInfo.oldDrawLayer = null;
			if ( this.editingInfo )
				this.exitLayerEdit(false);
			else
				this.exitCreateMode(false);
			if ( drawLayer ) this.map.removeLayer( drawLayer);
		}
	},

	isEditing : function()
	{
		return ( this.drawingInfo && this.drawingInfo.mode != 'kml' ? true : false);

	},

	cleanUp : function(withRemoveLayer)
	{
		if ( this.drawingInfo )
		{
			if ( this.drawingInfo.path )this.drawingInfo.path.disable();
			this.drawingInfo.path = null;

			if ( this.drawingInfo.pathList )
				for ( var i=0;i<this.drawingInfo.pathList.length; i++)this.drawingInfo.pathList[i].disable();
			this.drawingInfo.pathList = null;

			if ( withRemoveLayer && this.drawingInfo.drawLayer )this.map.removeLayer( this.drawingInfo.drawLayer);
			this.drawingInfo = null;
		}
		this.mapMouse.setClickMoveEnable( true );

		if ( this._onPathCreated )
		{
			this.map.off('draw:created', this._onPathCreated );
			this._onPathCreated = null;
		}

		if ( this.drawingItems ) this.map.removeLayer( this.drawingItems );
		this.drawingItems = null;

		if ( this.editingItems ) this.map.removeLayer( this.editingItems );
		this.editingItems = null;

	},

	exitLayerEdit : function(withRemoveLayer)
	{
		this.cleanUp(withRemoveLayer);
		this.editingInfo.editingDrawingInfo = null;

		var title = this.editingInfo.title;

		this.setTitle( '作図' );
		if ( true )
		{
			this.okCancelFrame.fadeOut( 'fast' );
			this.editFrame.fadeOut( 'fast',L.bind(
				function()
				{
					this.editModeFrame.fadeIn( 'fast' );
				}
				,this ) );
		}
	},

	exitCreateMode : function(withRemoveLayer)
	{
		this.cleanUp(withRemoveLayer);

		this.endEditMode( true );
		this.setTitle( '作図' );
		if ( true )
		{
			this.okCancelFrame.fadeOut( 'fast' );
			this.editFrame.fadeOut( 'fast',L.bind(
				function()
				{
					this.mainFrame.fadeIn( 'fast' );
				}
				,this ) );
		}
	},

	exitFileSelectMode : function()
	{

		this.setTitle( '作図' );
		if ( true )
		{
			this.okCancelFrame.fadeOut( 'fast' );
			this.editFrame.fadeOut( 'fast',L.bind(
				function()
				{
					this.mainFrame.fadeIn( 'fast' );
				}
				,this ) );
		}

	},


	onDownloadClick : function()
	{
		var content= {
			"layer":
			[

			]
		};

		var no = 1;


		if ( this.sakuzuCheckbox.is( ":checked" ) )
		{
			no = this._makeJSON( content, this.sakuzuInfo.list,no );
		}

		if ( this.kmlList )
		{
			for ( var i=0; i<this.kmlList.length; i++ )
			{
				if ( this.kmlList[i].checkbox.is( ':checked' ) )
				{

					no = this._makeJSON( content,this.kmlList[i].list,no );
				}
			}
		}

		if ( no > 1 )
		{
			this.downloadFormFName.val( 'KML' + this.getTimeStamp() + '.kml' );
			this.downloadFormContent.val( JSON.stringify(content ) );
			this.downloadForm.submit();
		}
		else
		{
			alert( '情報がありません' );
		}
	},


	_makeGeoJSON : function(content,list, no)
	{
		var result = {
			"type": "FeatureCollection",
			"features": []
		};

		for ( var i=0; i<list.length; i++ )
		{
			var drawnInfo = list[i];
			var geoJSON = drawnInfo.drawLayer.toGeoJSON();




			switch( drawnInfo.mode )
			{
				case 'point':
					var styles = ( drawnInfo.drawLayer.options ? drawnInfo.drawLayer.options : {} );

					if ( drawnInfo.style.icon )
					{
						if ( !geoJSON.properties[ '_markerType' ] )
							geoJSON.properties[ '_markerType' ] = "Icon"; // DivIcon | CircleMarker
						if ( drawnInfo.style.icon.url ) geoJSON.properties[ '_iconUrl' ] = drawnInfo.style.icon.url;
						if ( drawnInfo.style.icon.size ) geoJSON.properties[ '_iconSize' ] = drawnInfo.style.icon.size;
						if ( drawnInfo.style.icon.anchor ) geoJSON.properties[ '_iconAnchor' ] = drawnInfo.style.icon.anchor;
					//	geoJSON.properties[ '_html' ];
					}
					//geoJSON.properties[ '_radius' ];
					//geoJSON.properties[ '_className' ];

					break;


				case 'circle':
					//json = this.makeCircleJSON( drawnInfo, no, timeStamp );
					geoJSON.properties[ '_markerType' ] = "CircleMarker";
					geoJSON.properties[ '_radius' ] = drawnInfo.drawLayer.getRadius();
					var styles = ( drawnInfo.drawLayer.options ? drawnInfo.drawLayer.options : {} );
					if ( styles.color ) geoJSON.properties[ '_color' ] = styles.color;
					if ( styles.weight ) geoJSON.properties[ '_weight' ] = styles.weight;
					if ( styles.opacity ) geoJSON.properties[ '_opacity' ] = styles.opacity;
					if ( styles.fill ) geoJSON.properties[ '_fill' ] = styles.fill;
					if ( styles.fillColor ) geoJSON.properties[ '_fillColor' ] = styles.fillColor;
					if ( styles.fillOpacity ) geoJSON.properties[ '_fillOpacity' ] = styles.fillOpacity;
					if ( styles.dashArray ) geoJSON.properties[ '_dashArray' ] = styles.dashArray;
					if ( styles.lineCap ) geoJSON.properties[ '_lineCap' ] = styles.lineCap;
					if ( styles.lineJoin ) geoJSON.properties[ '_lineJoin' ] = styles.lineJoin;
					if ( styles.clickable ) geoJSON.properties[ '_clickable' ] = styles.clickable;

					break;

				case 'line':
				case 'freehand':
				case 'polygon':

					var styles = ( drawnInfo.drawLayer.options ? drawnInfo.drawLayer.options : {} );
					if ( styles.color ) geoJSON.properties[ '_color' ] = styles.color;
					if ( styles.weight ) geoJSON.properties[ '_weight' ] = styles.weight;
					if ( styles.opacity ) geoJSON.properties[ '_opacity' ] = styles.opacity;
					if ( styles.fill ) geoJSON.properties[ '_fill' ] = styles.fill;
					if ( styles.fillColor ) geoJSON.properties[ '_fillColor' ] = styles.fillColor;
					if ( styles.fillOpacity ) geoJSON.properties[ '_fillOpacity' ] = styles.fillOpacity;
					if ( styles.dashArray ) geoJSON.properties[ '_dashArray' ] = styles.dashArray;
					if ( styles.lineCap ) geoJSON.properties[ '_lineCap' ] = styles.lineCap;
					if ( styles.lineJoin ) geoJSON.properties[ '_lineJoin' ] = styles.lineJoin;
					if ( styles.clickable ) geoJSON.properties[ '_clickable' ] = styles.clickable;

					break;
			}
			result.features.push ( geoJSON );
			/*
			if ( json )
			{
				content.layer.push( json );
				no++;
				timeStamp ++;
			}*/
		}

		return result;

	},


	_makeJSON : function(content,list, no)
	{
		var timeStamp = parseInt( this.getTimeStamp() );

		for ( var i=0; i<list.length; i++ )
		{
			var drawnInfo = list[i];
			var json = null;
			switch( drawnInfo.mode )
			{
				case 'point':
					json = this.makePointJSON( drawnInfo, no, timeStamp );
					break;

				case 'line':
				case 'freehand':
					json = this.makeLineJSON( drawnInfo, no, timeStamp );
					break;

				case 'polygon':
					json = this.makePolygonJSON( drawnInfo, no, timeStamp );
					break;

				case 'circle':
					json = this.makeCircleJSON( drawnInfo, no, timeStamp );
					break;
			}

			if ( json )
			{
				content.layer.push( json );
				no++;
				timeStamp ++;
			}
		}
		return no;
	},

	hex2RGB :function( color_string )
	{
		var color_defs = [
			{
				re: /^#(\w{2})(\w{2})(\w{2})$/,
				example: ['#00ff00', '336699'],
				process: function (bits){
					return [
					parseInt(bits[1], 16),
					parseInt(bits[2], 16),
					parseInt(bits[3], 16)
					];
				}
			},
			{
				re: /^#(\w{1})(\w{1})(\w{1})$/,
				example: ['#fb0', 'f0f'],
				process: function (bits){
					return [
					parseInt(bits[1] + bits[1], 16),
					parseInt(bits[2] + bits[2], 16),
					parseInt(bits[3] + bits[3], 16)
					];
				}
			}
		];

		var result = {};

		for (var i = 0; i < color_defs.length; i++) {
			var re = color_defs[i].re;
			var processor = color_defs[i].process;
			var bits = re.exec(color_string);
			if (bits) {
				var channels = processor(bits);
				result.r = channels[0];
				result.g = channels[1];
				result.b = channels[2];
				result.ok = true;
			}

		}


		// validate/cleanup values
		result.r = (result.r < 0 || isNaN(result.r)) ? 0 : ((result.r > 255) ? 255 : result.r);
		result.g = (result.g < 0 || isNaN(result.g)) ? 0 : ((result.g > 255) ? 255 : result.g);
		result.b = (result.b < 0 || isNaN(result.b)) ? 0 : ((result.b > 255) ? 255 : result.b);

		return result;
	},

	makePointJSON : function( drawnInfo, no, timeStamp )
	{
		if ( !drawnInfo.style.icon ) return;
		var geoJSON = drawnInfo.drawLayer.toGeoJSON();
		var primitiveId = "cv" +  ( '000' + no ).slice(-3);
		var name = "SYMBOL" + ( drawnInfo.creationTime ? drawnInfo.creationTime: timeStamp );
		var iconSize = drawnInfo.style.icon.size;

		if ( !iconSize  )
		{
			var scale = ( drawnInfo.drawLayer.options.icon.options.scale ? drawnInfo.drawLayer.options.icon.options.scale : 1 );

			if ( drawnInfo.drawLayer._icon )
			{
				iconSize = [$( drawnInfo.drawLayer._icon ).width(), $( drawnInfo.drawLayer._icon ).height() ];
			}
			//drawLayer.
			if ( !iconSize ) iconSize = [20,20];
		}

		var description = ( drawnInfo.editedDescription ? drawnInfo.editedDescription : "" );

		var item =
		{
			"name":name,
			"type":"Point",
			"style":{
				"externalGraphic":drawnInfo.style.icon.url,
				"graphicOpacity":drawnInfo.style.opacity,
				"graphicWidth":iconSize[0],
				"graphicHeight":iconSize[1],
				"label":"",
				"fontColor":"0,0,0",
				"fontSize":"12px",
				"fontOpacity":1
			},
			"data":[
				{
					"name": ( drawnInfo.title ? drawnInfo.title : "" ),
					"properties" : description,
					"type":"Feature",
					"geometry":{
						"type":"Point",
						"coordinates":geoJSON.geometry.coordinates
					},
					"primitiveId":primitiveId
				}
			]
		};
		return item;
	},

	makeLineJSON : function( drawnInfo, no, timeStamp )
	{
		var geoJSON = drawnInfo.drawLayer.toGeoJSON();
		var primitiveId = "cv" +  ( '000' + no ).slice(-3);
		var name = "STRING" + ( drawnInfo.creationTime ? drawnInfo.creationTime: timeStamp );
		var color = this.hex2RGB( drawnInfo.style.color );

		var description = ( drawnInfo.editedDescription ? drawnInfo.editedDescription : "" );

		var item =
		{
			"name":name,
			"type":"LineString",
			"style":{
				"strokeColor":color.r + ',' + color.g + ',' + color.b,
				"strokeWidth": '' + drawnInfo.style.weight + '',
				"strokeOpacity": drawnInfo.style.opacity,
				"strokeLinecap":"square"
			},
			"data":[
				{
					"name": ( drawnInfo.title ? drawnInfo.title : "" ),
					"properties" : description,
					"type":"Feature",
					"geometry":{
						"type":"LineString",
						"coordinates":geoJSON.geometry.coordinates
					},
					"primitiveId":primitiveId
				}
			]
		};


		return item;
		//[133.91601562567314,35.893157634137744],[139.62890624987662,36.88367616073315];

	},

	makePolygonJSON : function( drawnInfo, no, timeStamp )
	{
		var geoJSON = drawnInfo.drawLayer.toGeoJSON();
		var primitiveId = "cv" +  ( '000' + no ).slice(-3);
		var name = "POLY" + ( drawnInfo.creationTime ? drawnInfo.creationTime: timeStamp );
		var color = this.hex2RGB( drawnInfo.style.color );
		var fillColor = this.hex2RGB( drawnInfo.style.fillColor );
		var description = ( drawnInfo.editedDescription ? drawnInfo.editedDescription : "" );
		var item =
		{
			"name":name,
			"type":"Polygon",
			"style":{
				"strokeColor":color.r + ',' + color.g + ',' + color.b,
				"strokeWidth": '' + drawnInfo.style.weight + '',
				"strokeOpacity": drawnInfo.style.opacity,
				"fill":"1",
				"fillColor":fillColor.r + ',' + fillColor.g + ',' + fillColor.b,
				"fillOpacity":drawnInfo.style.fillOpacity
			},
			"data":[
				{
					"name": ( drawnInfo.title ? drawnInfo.title : "" ),
					"properties" : description,
					"type":"Feature",
					"geometry":{
						"type":"Polygon",
						"coordinates":geoJSON.geometry.coordinates
					},
					"primitiveId":primitiveId
				}
			]
		};


		return item;
		//[133.91601562567314,35.893157634137744],[139.62890624987662,36.88367616073315];

	},

	makeCircleJSON : function( drawnInfo, no )
	{

		var geoJSON = drawnInfo.drawLayer.toGeoJSON();
		var primitiveId = "cv" +  ( '000' + no ).slice(-3);
		var name = "CIRCLE" + drawnInfo.creationTime;
		var color = this.hex2RGB( drawnInfo.style.color );
		var fillColor = this.hex2RGB( drawnInfo.style.fillColor );
		var description = ( drawnInfo.editedDescription ? drawnInfo.editedDescription : "" );
		var item =
		{
			"name":name,
			"type":"Circle",
			"style":{
				"strokeColor":color.r + ',' + color.g + ',' + color.b,
				"strokeWidth": '' + drawnInfo.style.weight + '',
				"strokeOpacity": drawnInfo.style.opacity,
				"fill":"1",
				"fillColor":fillColor.r + ',' + fillColor.g + ',' + fillColor.b,
				"fillOpacity":drawnInfo.style.fillOpacity
			},
			"data":[
				{
					"name": ( drawnInfo.title ? drawnInfo.title : "" ),
					"properties" : description,
					"type":"Feature",
					"geometry":{
						"type":"Circle",
						"coordinates":geoJSON.geometry.coordinates,
						"circle" : drawnInfo.drawLayer.getRadius()
					},
					"primitiveId":primitiveId
				}
			]
		};


				//	"coordinates":[134.641113281823,35.10608205638633],
				//	"circle":324509.464}
		return item;

	}



} );





/************************************************************************

GSI.ShareDialog
	共有ダイアログ管理

************************************************************************/

GSI.ShareDialog = GSI.Dialog.extend( {

	options : {
		title : GSI.TEXT.SHARE.DIALOG_TITLE
	},

	initialize : function(map, pageStateManager, layersJSON, sakuzuList, options)
	{
		this.map = map;
		this.pageStateManager = pageStateManager;
		this.layersJSON = layersJSON;
		this.sakuzuList = sakuzuList;

		GSI.Dialog.prototype.initialize.call(this, options);
		//alert( L.drawLocal.draw.handlers.polyline.tooltip.start );

	},

	show : function (mode)
	{
		this._mode = mode;
		//this.sakuzu = sakuzu;

		this._createTextareaContent(true);
		this._createSettingContent();

		this._initializeSetting(mode);

		switch( mode )
		{
			case GSI.ShareDialog.MODE.LINK:
				this.title.html( GSI.TEXT.SHARE.DIALOG_LINK_TITLE  );
				this._downloadButton.hide();
				this._copyButton.show();
				//this._copyButton.zclip( 'show' );
				this._setMessage( GSI.TEXT.SHARE.DIALOG_LINK_MESSAGE );
				this._initializeLinkMode();
				break;

			case GSI.ShareDialog.MODE.BUILTIN:
				this.title.html( GSI.TEXT.SHARE.DIALOG_BUILTIN_TITLE );
				this._downloadButton.hide();
				this._copyButton.show();
				//this._copyButton.zclip( 'show' );
				this._setMessage( GSI.TEXT.SHARE.DIALOG_BUILTIN_MESSAGE );
				this._initializeBuiltInMode();
				break;

			case GSI.ShareDialog.MODE.FILE:
				this.title.html( GSI.TEXT.SHARE.DIALOG_SAVE_TITLE );
				if (!GSI.Utils.hasFileAPI)
				{
					this._downloadButton.hide();
					this._copyButton.show();
					//this._copyButton.zclip( 'show' );
					this._setMessage( GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 );

				}
				else
				{
					this._setMessage( GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE);
					//this._copyButton.zclip( 'hide' );
					if ( this._zeroClipboard  ) this._zeroClipboard.destroy();
					this._zeroClipboard = null;
					this._copyButton.hide();
					this._downloadButton.show();

					//this._downloadButton.hide();
					//this._copyButton.show();
					//this._copyButton.zclip( 'show' );

				}

				this._initializeFileMode();
				break;
		}
		this._settingFrame.hide();

		GSI.Dialog.prototype.show.call(this);
	},

	_setCheckdState : function( elem, checked )
	{
		elem.attr( {'checked':checked} );
		elem.prop( {'checked':checked} );
	},
	_initializeSetting : function(mode)
	{
		this._setCheckdState( this._positionShareCheck, true );
		this._setCheckdState( this._basemapCheck, true );
		this._setCheckdState( this._layerpCheck, true );



		this._setCheckdState( this._visibleHeaderCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleInfoMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleFuncMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleContextMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleBaseLayerSelectorCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );


		this._setCheckdState( this._visibleViewListDlgCheck, false );
		this._setCheckdState( this._viewListHideAllCheck, false );
		this._setCheckdState( this._visibleLayerTreeDlgCheck, false );
		this._setCheckdState( this._showCurrentFolderCheck, false );


		this._setCheckdState( this._centerCrossCheck, this.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.CENTERCROSS) );
		this._setCheckdState( this._latLngGridCheck, false );
		this._setCheckdState( this._utmGridCheck, false );
		this._setCheckdState( this._jihokuLineCheck, false );


	},

	_initializeLinkMode : function()
	{
		this._textarea.val( this.getUrl() );
	},

	_initializeBuiltInMode : function()
	{
		var url = this.getUrl('');

		var w = 500;
		var h= 400;

		var html = '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"' +
			' width="' + w + '"' +
			' height="' + h + '"' +
			' src="' + url + '"' +
			'></iframe>';
		this._textarea.val( html );
	},

	_initializeFileMode : function()
	{
		var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
		if ( !this._htmlTemplate || this._htmlTemplate == '' )
		{
			this._ajax = $.ajax({
				type: "GET",
				dataType:"text",
				url : _location.pathname,
				success:  L.Util.bind( this._onHtmlTemplateLoad, this ),
				error : L.Util.bind( this._onHtmlTemplateLoadError, this )
			});
		}
		else
		{
			this._refreshShareFile();
		}
	},

	_refreshShareFile : function()
	{

		var javascript = '';
		var html = this._htmlTemplate;


		if ( this.sakuzuList )
		{

			var list = this.sakuzuList.getGeoJSONList();


			javascript += 'GSI.ClientMode.sakuzuList = ' + JSON.stringify( list ) + ';' + '\n';
		}

		javascript += 'GSI.ClientMode.queryString = "' + this._makeQueryString() + '";' + '\n';

		html = html.replace( '/*INSERT-SCRIPT*/', javascript );
		this._textarea.focus();
		this._textarea.val( html );


	},

	_onDownLoadClick : function()
	{
		var fileName = 'gsi' + GSI.Utils.getTimeStampString() + '.html';

		var blob = new Blob([this._textarea.val()], { "type" : "text/html" });

		if ( window.navigator.msSaveOrOpenBlob )
		{
			window.navigator.msSaveOrOpenBlob( blob, fileName );
		}
		else
		{
			window.URL = window.URL || window.webkitURL;
			this._downloadButton.attr( {
					"download" :fileName,
					"href" : window.URL.createObjectURL(blob)
				});
		}
	},

	_onHtmlTemplateLoad : function(html)
	{
		this._htmlTemplate = html.replace( '\r\n', '\n' );
		this._htmlTemplate = this._htmlTemplate.replace( '\r', '\n' );

		var baseUrl = GSI.Utils.getCurrentPath();

		if ( baseUrl.charAt( baseUrl.length - 1 ) != '/' )
		{
			var slPos = baseUrl.lastIndexOf( '/' );
			baseUrl = baseUrl.substring(0,slPos+1);
		}

		var metaBaseTag = '<base href="' + baseUrl + '">';
		html = html.replace( '<!--INSERT-BASE-->', metaBaseTag);

		var layersJSONData = this.layersJSON.getOriginal();
		var originalLocation = {
			href : location.href,
			protocol : location.protocol,
			path : location.path,
			pathname : location.pathname,
			host : location.host,
			hostname : location.hostname,
			port : location.port
		};
		var javascript = '';

		javascript += 'GSI.ClientMode .baseUrl = "' + baseUrl + '";' + '\n';
		javascript += 'GSI.ClientMode .location = ' + JSON.stringify( originalLocation ) + '\n';
		javascript += 'GSI.ClientMode .LayerJS = ' + JSON.stringify( layersJSONData ) + ';' + '\n';

		html = html.replace( '/*INSERT-SCRIPT*/', javascript + '/*INSERT-SCRIPT*/');


		this._htmlTemplate = html;

		this._refreshShareFile();
	},


	_onHtmlTemplateLoadError : function()
	{
		alert(GSI.TEXT.SHARE.DIALOG_TEMPLATELOADERROR);
		this.hide();
	},

	_onSettingChange : function()
	{
		switch( this._mode )
		{
			case GSI.ShareDialog.MODE.LINK:
				this._initializeLinkMode();
				break;

			case GSI.ShareDialog.MODE.BUILTIN:
				this._initializeBuiltInMode();
				break;

			case GSI.ShareDialog.MODE.FILE:
				this._refreshShareFile();
				break;
		}
	},

	_makeQueryString : function(additionalParam)
	{
		var queryString = '';
		if ( this._positionShareCheck.is( ':checked' ) )
		{
			queryString += ( queryString != '' ? '&' : '' ) + this.pageStateManager.getPositionQueryString();
		}
		if ( this._basemapCheck.is( ':checked' ) )
		{
			queryString += ( queryString != '' ? '&' : '' ) + this.pageStateManager.getBaseLayerQueryString();
		}

		if ( this._layerpCheck.is( ':checked' ) )
		{
			var ls = this.pageStateManager.getLayersQueryString();
			if ( ls != '' )
			{
				queryString += ( queryString != '' ? '&' : '' ) + ls;
			}

		}


		var hcList = [];
		if ( !this._visibleHeaderCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.HEADER );

		if ( !this._visibleInfoMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.INFOMENU );

		if ( !this._visibleFuncMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.FUNCMENU );

		if ( !this._visibleContextMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.CONTEXTMENU );

		if ( !this._visibleBaseLayerSelectorCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.BASEMAPSELECTOR );




		var skips = {};
		skips[ CONFIG.PARAMETERNAMES.CLICKMOVE] = true;
		skips[ CONFIG.PARAMETERNAMES.COCOTILE] = true;
		skips[ CONFIG.PARAMETERNAMES.MINIMAP] = true;

		var visibles = {};
		visibles[ CONFIG.PARAMETERNAMES.CENTERCROSS] = this._centerCrossCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.JIHOKULINE] = this._jihokuLineCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.LATLNGGRID] = this._latLngGridCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.UTMGRID] = this._utmGridCheck.is( ':checked' );


		var visibleDialogs = {};
		visibleDialogs[ CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG] = this._visibleViewListDlgCheck.is( ':checked' );
		visibleDialogs[ CONFIG.DIALOGPARAMETER.VIEWLISTHIDEALL] = this._viewListHideAllCheck.is( ':checked' );
		visibleDialogs[ CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG] = this._visibleLayerTreeDlgCheck.is( ':checked' );

		var currentPath = null;
		if ( this._showCurrentFolderCheck.is( ':checked' ) )
		{
			// カレントフォルダ取得
			currentPath = this.pageStateManager.getCurrentPathQueryString();
			//console.log( currentPath );
			if ( currentPath && currentPath != '' )
				queryString += ( queryString != '' ? '&' : '' ) + currentPath;
		}

		var queryParams = this.pageStateManager.getQueryParams( {
			hcList : hcList,
			vsInfo : {
				skips : skips,
				visibles : visibles
			},
			visibleDialogs : visibleDialogs
		} );


		for ( var key in queryParams )
		{
			queryString += ( queryString != '' ? '&' : '' ) + key + '=' + queryParams[key];

		}

		if ( additionalParam && additionalParam != '' )
		{

			queryString += ( queryString != '' ? '&' : '' ) + additionalParam;
		}

		return queryString;
	},

	getUrl :function(additionalParam)
	{
		var url = GSI.Utils.getCurrentPath();

		var queryString = this._makeQueryString(additionalParam);
		if ( queryString != '' )
			url += '?' + queryString;

		return url;
	},


	afterShow : function()
	{
		this._initializeCopy();

	},

	_initializeCopy : function()
	{
		/*
		if ( this._copyButton && this._copyButton.is ( ':visible' ) && !this._copyInitialized )
		{
			//this._copyButton.zclip( 'remove' );
			if ( !this._copySetting )
			{
				this._copySetting = {
					path:'jquery/zclip/ZeroClipboard.swf',
					copy:L.bind( function(){try{return this._textarea.val();}catch(e){}},this ),
					afterCopy: function(){ alert( 'クリップボードにコピーしました' ); }
				};
			}

			this._copyButton.zclip( this._copySetting ) ;
			this._copyInitialized = true;
		}
		*/
		if ( !this._zeroClipboard  )
		{
			//this._textarea.attr( { id: 'fe_text' } );
			this._zeroClipboard = new ZeroClipboard(this._copyButton[0] );//.attr({ id: 'fe_text' })[0]);

			this._zeroClipboard.on( 'ready', L.bind( function() {

				this._zeroClipboard.on( 'beforecopy', L.bind( function() {
					this._zeroClipboard.setText(this._textarea.val());
					alert( 'クリップボードにコピーしました' );
				},this ) );

				this._zeroClipboard.on( 'aftercopy', L.bind( function() {
				},this ) );
			},this ));
		}
	},

	hide : function ()
	{
		//this._copyButton.zclip( 'remove' );
		//this._copyInitialized = false;
		GSI.Dialog.prototype.hide.call(this);
	},


	_setMessage : function(msg)
	{
		this._messageFrame.empty();

		var img = $( '<img>' ).attr( {'src': 'image/system/info.png'} );
		this._messageFrame.append(img).append( $('<div>').html(msg) );
	},

	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );


		return $( '<div>' ).append( this.title );
	},

	createContent : function()
	{

		this._frame = $( '<div>' ).addClass( 'gsi_sharedialog_frame' );

		this._messageFrame = $( '<div>' ).addClass( 'messageframe' );
		this._textareaFrame = $( '<div>' ).addClass( 'textareaframe' );

		this._contentFrame = $( '<div>' );
		this._settingFrame = $( '<div>' ).addClass( 'settingframe' );

		this._frame.append( this._messageFrame );
		this._frame.append( this._textareaFrame );
		this._frame.append( this._contentFrame );
		this._frame.append( this._settingFrame );


		return this._frame;
	},


	_createTextareaContent : function(visible)
	{
		if ( this._textareaContent )
		{
			if ( visible ) this._textareaContent.show();
			else this._textareaContent.hide();
			return;
		}
		var frame = $( '<div>' ).addClass( 'textareacontent' );

		var textareaFrame = $( '<div>' );
		this._textarea = $( '<textarea>' ).attr( {rows:4, readonly:"readonly", 'wrap':'off'} ).click( function(){ this.select();} );
		this._textarea.focus();
		this._textarea.val( '' );
		textareaFrame.append( this._textarea );

		//if (!window.File || !window.FileReader || !window.FileList || !window.Blob)

		this._downloadButton = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {float:'right'} )
				.html(GSI.TEXT.SHARE.DIALOG_DOWNLOADBTN).click( L.bind( this._onDownLoadClick,this ) );

		if ( !GSI.Utils.canUseFlashPlayer() )
		{
			this._copyButton = $( '<span>' ).css( {float:'right'} ) .html( GSI.TEXT.SHARE.DIALOG_NOCOPYMSG );
		}
		else
		{
			this._copyButton = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {float:'right'} )
				.html( GSI.TEXT.SHARE.DIALOG_COPYBTN );
		}

		frame.append( textareaFrame );

		var settingButton = $( '<a>').attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {float:'left'} )
			.html( '詳細設定' )
			.click( L.bind( function() { this._settingFrame.slideToggle('fast'); }, this ) );

		var buttonFrame = $( '<div>' ).addClass( 'buttonframe' );

		buttonFrame.append( this._copyButton );
		buttonFrame.append( this._downloadButton );
		buttonFrame.append( settingButton );
		buttonFrame.append( $('<div>').css({clear:'both'} ) );
		frame.append( buttonFrame );



		this._textareaFrame.append( frame );
		this._textareaContent = frame;

	},



	_createShareBuiltInContent : function()
	{
		if ( this._shareBuiltInContent ) return;
	},


	_createShareFileContent : function()
	{
		if ( this._shareFileContent ) return;
	},


	_createSettingContent : function()
	{
		if ( this._settingContent ) return



		this._settingContent = $( '<div>' ).addClass( 'settingcontent' );




		this._settingContent.append( $( '<h3>' ).html( '基本設定' ) );




		var __createItem = function( $this, title )
		{
			var li = $('<li>');
			var id = 'GSI_ShareDialog_check' + GSI.Utils.getCurrentID() ;
			var check = $( '<input>' ).attr( {'type':'checkbox', 'id': id } ).addClass( 'normalcheck' );
			li.append( check );
			var label = $( '<label>' ).attr( {'for': id} );
			label.html( title );
			li.append( label );
			check.click( L.bind( $this._onSettingChange,$this) );
			return { li: li, checkbox: check };
		};


		var ul = $( '<ul>' );
		var item = null;

		// 緯度経度
		item = __createItem( this,'表示中の中心位置とズームを共有' );
		ul.append( item.li );
		this._positionShareCheck = item.checkbox;


		// 背景地図
		item = __createItem( this,'表示中の背景地図を共有' );
		ul.append( item.li );
		this._basemapCheck = item.checkbox;

		// レイヤー
		item = __createItem( this,'表示中のレイヤーを共有' );
		ul.append( item.li );
		this._layerpCheck = item.checkbox;



		this._settingContent.append( ul );


		//--------------------------------------------------------------------
		this._settingContent.append( $( '<h3>' ).html( '機能設定' ) );

		ul = $( '<ul>' );

		// 検索とお知らせバーを表示
		item = __createItem( this,'検索とお知らせを表示' );
		ul.append( item.li );
		this._visibleHeaderCheck = item.checkbox;

		// 情報ボタンを表示
		item = __createItem( this,'情報ボタンを表示' );
		ul.append( item.li );
		this._visibleInfoMenuCheck = item.checkbox;

		// 機能ボタンを表示
		item = __createItem( this,'機能ボタンを表示' );
		ul.append( item.li );
		this._visibleFuncMenuCheck = item.checkbox;

		// コンテキストメニューを表示
		item = __createItem( this,'コンテキストメニューを表示' );
		ul.append( item.li );
		this._visibleContextMenuCheck = item.checkbox;

		// 背景地図選択を表示
		item = __createItem( this,'背景地図選択を表示' );
		ul.append( item.li );
		this._visibleBaseLayerSelectorCheck = item.checkbox;
		this._settingContent.append( ul );


		//--------------------------------------------------------------------
		this._settingContent.append( $( '<h3>' ).html( '表示中の情報設定' ) );

		ul = $( '<ul>' );

		// 表示中の情報
		item = __createItem( this,'表示中の情報を開く' );
		ul.append( item.li );
		this._visibleViewListDlgCheck = item.checkbox;

		// 全て非表示の状態に
		item = __createItem( this,'表示中の情報を「全非表示」状態にする' );
		ul.append( item.li );
		this._viewListHideAllCheck = item.checkbox;



		this._settingContent.append( ul );


		//--------------------------------------------------------------------
		this._settingContent.append( $( '<h3>' ).html( '表示できる情報設定' ) );

		ul = $( '<ul>' );

		// 表示できる情報
		item = __createItem( this,'表示できる情報を開く' );
		ul.append( item.li );
		this._visibleLayerTreeDlgCheck = item.checkbox;

		// 表示階層を共有
		item = __createItem( this,'表示中のフォルダを開いた状態で表示' );
		ul.append( item.li );
		this._showCurrentFolderCheck = item.checkbox;


		this._settingContent.append( ul );


		//--------------------------------------------------------------------
		this._settingContent.append( $( '<h3>' ).html( '表示設定' ) );


		ul = $( '<ul>' );

		// 中心十字線
		item = __createItem( this,'中心十字線を表示' );
		ul.append( item.li );
		this._centerCrossCheck = item.checkbox;


		// 緯度経度グリッド
		item = __createItem( this,'緯度経度グリッドを表示' );
		ul.append( item.li );
		this._latLngGridCheck = item.checkbox;

		// UTMグリッド
		item = __createItem( this,'UTMグリッドを表示' );
		ul.append( item.li );
		this._utmGridCheck = item.checkbox;


		// 磁北線
		item = __createItem( this,'磁北線を表示' );
		ul.append( item.li );
		this._jihokuLineCheck = item.checkbox;


		this._settingContent.append( ul );



		this._settingFrame.append( this._settingContent );
	}


} );

GSI.ShareDialog.MODE = {
	LINK : "link",
	BUILTIN : "builtin",
	FILE : "file"
};








/************************************************************************

GSI.LayerOpacitySetter
	各レイヤーへの不透明度設定

************************************************************************/
GSI.LayerOpacitySetter = L.Class.extend({

	opacity : 1,

	getOpacity : function()
	{
		return this.opacity;
	},
	setOpacity : function(layer,opacity)
	{
		this.opacity = opacity;
		this._setLayerOpacity( layer );

	},
	_setLayerOpacity : function( layer )
	{
		if ( !layer ) return;

		if ( layer.setOpacity )
		{
			layer.setOpacity( this.opacity );
		}
		else if ( layer._icon )
		{
			$( layer._icon ).css( {opacity:this.opacity} );
		}
		else if ( layer._container )
		{
			$( layer._container ).css( {opacity:this.opacity} );
		}

		if ( layer.eachLayer )
		{
			layer.eachLayer( L.bind( this._setLayerOpacity, this) );
		}
	}
} );




/************************************************************************

GSI.GeoJSON
	GeoJSON

************************************************************************/

GSI.GeoJSON = L.Class.extend( {
	includes: L.Mixin.Events,
	opacity : 1,
	opacitySetter : new GSI.LayerOpacitySetter (),

	initialize : function ( url, options)
	{
		this.url = url;
		options = L.setOptions(this, options);

	},

	load : function()
	{
		this.fire( "loadstart", { "src":this } );
		try
		{
			this._cerateLayer();

		}
		catch(e)
		{
			this.fire( "load", { "src":this } );
			return;
		}

		this._loadTimerId = setTimeout( L.bind( this._loadStart, this ), 200 );

	},

	_loadStart : function()
	{
		if ( this._loadTimerId  )
		{
			clearTimeout( this._loadTimerId  );
			this._loadTimerId  = null;
		}
		try
		{

			this._load();
		}
		catch(e)
		{
			this.fire( "load", { "src":this } );
		}
	},

	onPointToLayer : function(feature, latlng )
	{
		if ( !feature.properties ) return L.marker( latlng );


		var marker = null;
		if ( feature.properties[ "_markerType" ] )
		{
			var markerType = feature.properties[ "_markerType" ];
			switch( markerType )
			{
				case "DivIcon":
					var iconSize = feature.properties[ "_iconSize" ];
					var iconAnchor = feature.properties[ "_iconAnchor" ];
					var html = feature.properties[ "_html" ];
					var className = feature.properties[ "_className" ];

					var options ={};
					if ( iconSize ) options.iconSize = iconSize;
					if ( iconAnchor ) options.iconAnchor = iconAnchor;
					if ( html ) options.html = html;
					if ( className ) options.className = className;
					marker = L.marker( latlng, { icon : GSI.divIcon(options) });

					break;

				case "CircleMarker":
					var options ={};
					for( var key in feature.properties )
					{
						if ( !feature.properties[key] ) continue;
						if ( key != "" && key.charAt(0) == '_' && key != "_markerType")
						{
							var value = feature.properties[key];
							key = key.slice(1);
							options[ key ] = value;
						}
					}
					marker = L.circle(latlng, options['radius'],options);

					break;


			}
			//style = {
			//	icon :
			//};
		}

		if ( !marker )
		{

			var iconUrl = feature.properties[ "_iconUrl" ];
			var iconSize = feature.properties[ "_iconSize" ];
			var iconAnchor = feature.properties[ "_iconAnchor" ];
			var iconOptions = {};
			if ( iconUrl ) iconOptions.iconUrl = iconUrl;
			if ( iconSize ) iconOptions.iconSize = iconSize;
			if ( iconAnchor ) iconOptions.iconAnchor = iconAnchor;
			marker = L.marker( latlng, { icon : L.icon(iconOptions) });

		}

		return marker;
	},

	onStyle : function(feature)
	{

		if ( !feature.properties ) return null;


		var style = null;
		var iconStyleKeys = {
			"_markerType": true,
			"_iconUrl" : true,
			"_iconSize" : true,
			"_iconAnchor" : true,
			"_html" : true,
			"_radius" : true
		};

		for( var key in feature.properties )
		{
			if ( !feature.properties[key] ) continue;

			if ( key != "" && key.charAt(0) == '_' )
			{
				if ( iconStyleKeys[ key ] )
				{
					continue;
				}
				else
				{
					var value = feature.properties[key];
					key = key.slice(1);
					if ( !style ) style ={};

					style[ key ] = value;
				}
			}
		}

		return style;
	},

	onEachFeature : function(feature, layer)
	{

		if ( !feature.properties ) return;
		/*
		if ( layer.getLayers )
		{
			// マルチポリゴンの場合、各ポリゴンに追加

			var layers = layer.getLayers();
			for ( var i=0; i<layers.length; i++ )
			{
				if ( !layers[i].feature )
				{
					layers[i].feature = layers[i].toGeoJSON();


				}

			}

		}
		*/
		var popupContent = '';

		if ( feature.properties['name' ] )
		{
			popupContent += '<h2>' + feature.properties['name' ]  + '</h2>';
		}

		if ( feature.properties['description' ] )
		{
			popupContent += feature.properties['description' ];
		}
		else
		{

			for( var key in feature.properties )
			{
				if ( !feature.properties[key] ) continue;

				if ( key != "" && key != 'name' && !CONFIG.GEOJSONSPECIALKEYS[key] )
				{
					popupContent +=
						"<tr>" +
						"<td>" + key + "</td>" +
						"<td>" + feature.properties[key] + "</td>" +
						"</tr>";
				}
			}

			if ( popupContent != '' )
			{
				layer.bindPopup( '<table>' + popupContent + '</table>',
					{
						maxWidth:5000
					});
			}

		}
	},

	onLoadError : function()
	{
		this.fire( "load", { "src":this } );
	},

	addData : function( json )
	{

		try
		{

			if ( !this.layer ) this._cerateLayer();
			if ( json.type == 'Topology' )
			{
				json = omnivore.topojson.parse(json);
				this.layer.addData( json );
			}
			else
			{
				this.layer.addData( json );
			}

		}
		catch(e)
		{
		}
	},

	onLoad : function(result)
	{
		var data = null;

		if ( !result) return;
		if ( result.data ) data = result.data;
		else data = result;

		var jsonData = null;

		try
		{
			jsonData = eval( "(" +data + ")" );
		}
		catch(e)
		{
			jsonData = data;
		}

		this.addData( jsonData );

		this.fire( "load", { "src":this } );
	},

	getBounds : function()
	{
		return ( this.layer ? this.layer.getBounds():null );

	},

	_cerateLayer : function()
	{
		var geoJSONOptions = {};

		geoJSONOptions.style = L.bind( this.onStyle, this );
		geoJSONOptions.onEachFeature = L.bind( this.onEachFeature, this );
		geoJSONOptions.pointToLayer = L.bind( this.onPointToLayer, this );

		this.layer = new L.GeoJSON(null,geoJSONOptions);

		if ( !this._layerAdded && this._map )
		{
			var zoom = this._map.getZoom();

			if ( this.options.minZoom && this.options.minZoom > zoom ) return;
			if ( this.options.maxZoom && this.options.maxZoom < zoom ) return;

			this._map.addLayer( this.layer );
			this._layerAdded = true;
		}
	},

	_loadFromFile : function()
	{

	},

	_load : function()
	{
		if ( !CONFIG.FORCECORS && !GSI.Utils.isLocalUrl(this.url) )// this.url.match(/(http|https):\/\/.+/) )
		{
			var parameter = {
				url : this.url,
				lf: 0
			};


			this.ajax = $.ajax({
				type: "GET",
				dataType: "jsonp",
				data: parameter,
				url: CONFIG.SERVERAPI.GETJSONP,
				success:  L.Util.bind( this.onLoad, this ),
				error : L.Util.bind( this.onLoadError, this )
			});
		}
		else
		{
			this.ajax = $.ajax({
				type: "GET",
				dataType:"text",
				url : this.url,
				success:  L.Util.bind( this.onLoad, this ),
				error : L.Util.bind( this.onLoadError, this )
			});
		}
	},

	_onZoomChange : function()
	{
		if ( !this.layer ) return;
		var zoom = this._map.getZoom();

		if (
			( this.options.minZoom && this.options.minZoom > zoom )
				||
			( this.options.maxZoom && this.options.maxZoom < zoom )
		)
		{

			this._layerAdded = false;
			this._map.removeLayer(this.layer);
		}
		else
		{

			if ( !this._layerAdded )
			{
				this._layerAdded = true;
				this._map.addLayer(this.layer);
			}
		}

	},

	onAdd : function( map )
	{
		this._map = map;
		this._map.on( 'zoomend', this._onZoomChange, this );

		if ( this.layer )
		{
			var zoom = this._map.getZoom();

			if ( this.options.minZoom && this.options.minZoom > zoom ) return;
			if ( this.options.maxZoom && this.options.maxZoom < zoom ) return;

			this._layerAdded = true;
			map.addLayer(this.layer);
		}
	},


	onRemove : function( map )
	{
		if ( map ) map.off( 'zoomend', this._onZoomChange, this );
		if ( this.layer )
		{
			map.removeLayer( this.layer );
			this._layerAdded = false;
		}

		this._map = null;
	},

	setOpacity : function( opacity )
	{
		this.opacity = opacity;
		//GSI.Utils.setLayerOpacity( this.layer, opacity );
		this.opacitySetter.setOpacity(this.layer, opacity );
	},
	getLayers : function()
	{
		if ( this.layer )
		{
			return this.layer.getLayers();
		}
		else return null;
	},

	addLayer : function(layer)
	{
		if ( this.layer )
		{
			this.layer.addLayer( layer );
		}
	},
	removeLayer : function(layer)
	{
		if ( this.layer )
		{
			this.layer.removeLayer( layer );
		}

	}


} );




/************************************************************************

GSI.KML
	KML管理

************************************************************************/

GSI.KML = L.FeatureGroup.extend({
	options: {
		async: true
	},
	opacitySetter : new GSI.LayerOpacitySetter (),

	initialize: function(kml, options) {
		L.Util.setOptions(this, options);
		this._kml = kml;
		this._layers = {};
		/*
		if (kml) {
			this.addKML(kml, options, this.options.async);
		}
		*/
	},

	load : function()
	{
		if (this._kml) {
			this.addKML(this._kml, this.options, this.options.async);
		}
	},

	loadXML: function(url, cb, options, async) {
		if (async === undefined) async = this.options.async;
		if (options === undefined) options = this.options;



		if ( this.options._map )
		{
			var bounds = this.options._map.getBounds();
			url = url.replace( '{left}', bounds.getWest() );
			url = url.replace( '{top}', bounds.getNorth() );
			url = url.replace( '{right}', bounds.getEast() );
			url = url.replace( '{bottom}', bounds.getSouth() );
		}

		//if ( url.match(/(http|https):\/\/.+/) )
		if ( !CONFIG.FORCECORS && !GSI.Utils.isLocalUrl(url) )
		{
			var parameter = {
				url : url,
				lf: 0
			};


			this.ajax = $.ajax({
				type: "GET",
				dataType: "jsonp",
				data: parameter,
				url: CONFIG.SERVERAPI.GETJSONP,
				success:  L.Util.bind( this._onKMLLoad, this ),
				error:  L.Util.bind( this._onKMLLoadError, this ),
				async : async

			});
		}
		else
		{

			this.ajax = $.ajax({
				type: "GET",
				dataType: "xml",
				url: url,
				success:  L.Util.bind( this._onKMLLoad, this ),
				error:  L.Util.bind( this._onKMLLoadError, this ),
				async : async

			});

		}


		/*
		var req = new window.XMLHttpRequest();
		req.open('GET', url, async);
		try {
			req.overrideMimeType('text/xml'); // unsupported by IE
		} catch(e) {}
		req.onreadystatechange = function() {
			if (req.readyState !== 4) return;
			if (req.status === 200) cb(req.responseXML, options);
		};
		req.send(null);
		*/
	},

	onAdd: function (map) {
		//console.log( '&' );
		this._map = map;
		this._map.on( 'zoomend', this._onZoomChange, this );
		this._onZoomChange();
	},

	onRemove: function (map) {
		//console.log( '&!' );
		if ( map ) map.off( 'zoomend', this._onZoomChange, this );
		this.eachLayer(map.removeLayer, map);
		this._map = null;
		this._layerAdded = false;
	},

	_onZoomChange : function()
	{
		if ( !this._map ) return;
		var zoom = this._map.getZoom();

		if (
			( this.options.minZoom && this.options.minZoom > zoom )
				||
			( this.options.maxZoom && this.options.maxZoom < zoom )
		)
		{

			this._layerAdded = false;
			this.eachLayer(this._map.removeLayer, this._map);
		}
		else
		{

			if ( !this._layerAdded )
			{
				this._layerAdded = true;
				this.eachLayer(this._map.addLayer, this._map);
			}
		}

	},

	_onKMLLoadError : function()
	{
		//console.log( a );
		this.fire('loaded');
	},

	_onKMLLoad : function( result )
	{
		var data = null;
		if ( !result) return;

		if ( result.data )
		{

			try
			{
				if (window.ActiveXObject)
				{
					data = new ActiveXObject("Microsoft.XMLDOM");
					data.async = false;
					data.loadXML($.trim(result.data));
				}
				else if (window.DOMParser)
				{
					data = new DOMParser().parseFromString(
						$.trim(result.data),
						"application/xml"
					);
				}
			}
			catch( e )
			{
				data = null;
			}
			//data = $.parseXML( result.data );
		}
		else data = result;

		if ( !data )
		{
			this.fire('loaded');
		}
		else
		{
			try
			{
				this._addKML( data, this.options );
			}
			catch( e )
			{
				this.fire('loaded');
			}
		}
	},

	addKML: function(url, options, async) {
		var _this = this;
		//var cb = function(gpx, options) { _this._addKML(gpx, options); };
		this.fire('loadstart');
		try{
			this.loadXML(url, null, options, async);
		}
		catch(e)
		{
			this.fire('loaded');
		}
	},

	_addKML: function(xml, options) {

		try
		{
			var layers = GSI.KML.parseKML(xml);

			if (!layers || !layers.length)
			{
				this.fire('loaded');
				return;
			}
			for (var i = 0; i < layers.length; i++) {
				this.fire('addlayer', {
					layer: layers[i]
				});

				this.addLayer(layers[i]);
			}
			this.latLngs = GSI.KML.getLatLngs(xml);
			if ( this.opacity )
			{
				this.setOpacity( this.opacity );
			}
		}
		catch(e)
		{
		}
		try{
			this.fire('loaded');
		} catch(e ) {}
	},

	setOpacity : function( opacity)
	{
		this.opacity = opacity;

		this.eachLayer( L.bind( function( layer ){

			this.opacitySetter.setOpacity( layer,this.opacity );

		}, this ) );

	},

	latLngs: []
});

L.Util.extend(GSI.KML, {

	parseKML: function (xml) {
		var style = this.parseStyle(xml);
		this.parseStyleMap(xml, style);
		var el = xml.getElementsByTagName('Folder');
		var layers = [], l;
		for (var i = 0; i < el.length; i++) {
			if (!this._check_folder(el[i])) { continue; }
			l = this.parseFolder(el[i], style);
			if (l) { layers.push(l); }
		}
		el = xml.getElementsByTagName('Placemark');
		for (var j = 0; j < el.length; j++) {
			if (!this._check_folder(el[j])) { continue; }
			l = this.parsePlacemark(el[j], xml, style);
			if (l) { layers.push(l); }
		}
		return layers;
	},

	// Return false if e's first parent Folder is not [folder]
	// - returns true if no parent Folders
	_check_folder: function (e, folder) {
		e = e.parentElement;
		while (e && e.tagName !== 'Folder')
		{
			e = e.parentElement;
		}
		return !e || e === folder;
	},

	parseStyle: function (xml) {
		var style = {};
		var sl = xml.getElementsByTagName('Style');

		//for (var i = 0; i < sl.length; i++) {
		var attributes = {color: true, width: true, Icon: true, href: true,
						  hotSpot: true, scale: true};

		function _parse(xml) {
			var options = {};
			for (var i = 0; i < xml.childNodes.length; i++) {
				var e = xml.childNodes[i];
				var key = e.tagName;

				if (!attributes[key]) { continue; }
				if (key === 'hotSpot')
				{
					for (var j = 0; j < e.attributes.length; j++) {
						options[e.attributes[j].name] = e.attributes[j].nodeValue;
					}
				} else {
					var value = e.childNodes[0].nodeValue;
					if (key === 'color') {
						options.opacity = parseInt(value.substring(0, 2), 16) / 255.0;
						options.color = '#' + value.substring(6, 8) + value.substring(4, 6) + value.substring(2, 4);
					} else if (key === 'width') {
						options.weight = value;
					} else if (key === 'Icon') {
						ioptions = _parse(e);
						if (ioptions.href) { options.href = ioptions.href; }
					} else if (key === 'href') {
						options.href = value;
					} else if (key === 'scale') {
						options.scale = value;
					}
				}
			}
			return options;
		}

		for (var i = 0; i < sl.length; i++) {
			var e = sl[i], el;
			var options = {}, poptions = {}, ioptions = {};
			el = e.getElementsByTagName('LineStyle');
			if (el && el[0]) { options = _parse(el[0]); }
			el = e.getElementsByTagName('PolyStyle');
			if (el && el[0]) { poptions = _parse(el[0]); }
			if (poptions.color) { options.fillColor = poptions.color; }
			if (poptions.opacity) { options.fillOpacity = poptions.opacity; }
			el = e.getElementsByTagName('IconStyle');
			if (el && el[0]) { ioptions = _parse(el[0]); }
			if (ioptions.href) {
				// save anchor info until the image is loaded
				options.icon = new GSI.KMLIcon({
					iconUrl: ioptions.href,
					shadowUrl: null,
					iconAnchorRef: {x: ioptions.x, y: ioptions.y},
					iconAnchorType:	{x: ioptions.xunits, y: ioptions.yunits},
					_iconScale : ioptions.scale
				});
			}
			style['#' + e.getAttribute('id')] = options;
		}
		return style;
	},

	parseStyleMap: function (xml, existingStyles) {
		var sl = xml.getElementsByTagName('StyleMap');

		for (var i = 0; i < sl.length; i++) {
			var e = sl[i], el;
			var smKey = '', smStyleUrl = '';

			el = e.getElementsByTagName('key');
			if (el && el[0]) { smKey = el[0].textContent; }
			el = e.getElementsByTagName('styleUrl');
			if (el && el[0]) { smStyleUrl = el[0].textContent; }

			if (smKey === 'normal')
			{
				existingStyles['#' + e.getAttribute('id')] = existingStyles[smStyleUrl];
			}
		}

		return;
	},

	parseFolder: function (xml, style) {
		var el, layers = [], l;
		el = xml.getElementsByTagName('Folder');
		for (var i = 0; i < el.length; i++) {
			if (!this._check_folder(el[i], xml)) { continue; }
			l = this.parseFolder(el[i], style);
			if (l) { layers.push(l); }
		}
		el = xml.getElementsByTagName('Placemark');
		for (var j = 0; j < el.length; j++) {
			if (!this._check_folder(el[j], xml)) { continue; }
			l = this.parsePlacemark(el[j], xml, style);
			if (l) { layers.push(l); }
		}
		if (!layers.length) { return; }
		if (layers.length === 1) { return layers[0]; }
		return new L.FeatureGroup(layers);
	},

	parsePlacemark: function (place, xml, style) {
		var i, j, el, options = {};
		el = place.getElementsByTagName('styleUrl');
		for (i = 0; i < el.length; i++) {
			var url = el[i].childNodes[0].nodeValue;
			for (var a in style[url]) {
				options[a] = style[url][a];
			}
		}
		var layers = [];

		var parse = ['LineString', 'Polygon', 'Point'];
		for (j in parse) {
			// for jshint
			if (true)
			{
				var tag = parse[j];
				if ( tag && typeof tag == 'string' )
				{
					el = place.getElementsByTagName(tag);
					for (i = 0; i < el.length; i++) {
						var l = this['parse' + tag](el[i], xml, options);
						if (l) { layers.push(l); }
					}
				}
			}
		}

		if (!layers.length) {
			return;
		}
		var layer = layers[0];
		if (layers.length > 1) {
			layer = new L.FeatureGroup(layers);
		}

		var name, tbl = '', descr = '';
		el = place.getElementsByTagName('name');
		if (el.length && el[0].childNodes.length) {
			name = el[0].childNodes[0].nodeValue;
		}
		el = place.getElementsByTagName('description');
		for (i = 0; i < el.length; i++) {
			for (j = 0; j < el[i].childNodes.length; j++) {
				descr = descr + el[i].childNodes[j].nodeValue;
			}
		}

		el = place.getElementsByTagName('tableDescription');
		if ( el )
		{
			for (i = 0; i < el.length; i++) {
				for (j = 0; j < el[i].childNodes.length; j++) {
					if (  el[i].childNodes[j].nodeValue )
						tbl = tbl + el[i].childNodes[j].nodeValue;
				}
			}
		}

		layer._information = {
			title : ( name && name != '' ? name : null ),
			description : ( descr && descr != '' ? descr : null ),
			table : null
		};

		if ( tbl && tbl != '' )
		{
			try
			{
				layer._information.table = JSON.parse( tbl );
			}catch(e){}
		}

		if ( layer._information.table ) layer._information.description = null;


		if ( descr && descr != ''  )
		{
			layer.bindPopup( ( name && name != '' ? '<h2>' + name + '</h2>' : '' ) + ( descr ? descr : '' ),
					{
						maxWidth:5000
					});
		}


		return layer;
	},

	parseCoords: function (xml) {
		var el = xml.getElementsByTagName('coordinates');
		return this._read_coords(el[0]);
	},

	parseLineString: function (line, xml, options) {
		var coords = this.parseCoords(line);
		if (!coords.length) { return; }
		return new L.Polyline(coords, options);
	},

	parsePoint: function (line, xml, options) {
		var el = line.getElementsByTagName('coordinates');
		if (!el.length) {
			return;
		}
		//console.log( options );
		var ll = el[0].childNodes[0].nodeValue.split(',');
		return new GSI.KMLMarker(new L.LatLng(ll[1], ll[0]), options);
	},

	parsePolygon: function (line, xml, options) {
		var el, polys = [], inner = [], i, coords;
		el = line.getElementsByTagName('outerBoundaryIs');
		for (i = 0; i < el.length; i++) {
			coords = this.parseCoords(el[i]);
			if (coords) {
				polys.push(coords);
			}
		}
		el = line.getElementsByTagName('innerBoundaryIs');
		for (i = 0; i < el.length; i++) {
			coords = this.parseCoords(el[i]);
			if (coords) {
				inner.push(coords);
			}
		}
		if (!polys.length) {
			return;
		}
		if (options.fillColor) {
			options.fill = true;
		}
		if (polys.length === 1) {
			return new L.Polygon(polys.concat(inner), options);
		}
		return new L.MultiPolygon(polys, options);
	},

	getLatLngs: function (xml) {
		var el = xml.getElementsByTagName('coordinates');
		var coords = [];
		for (var j = 0; j < el.length; j++) {
			// text might span many childNodes
			coords = coords.concat(this._read_coords(el[j]));
		}
		return coords;
	},

	_read_coords: function (el) {
		var text = '', coords = [], i;
		for (i = 0; i < el.childNodes.length; i++) {
			text = text + el.childNodes[i].nodeValue;
		}
		text = text.split(/[\s\n]+/);
		for (i = 0; i < text.length; i++) {
			var ll = text[i].split(',');
			if (ll.length < 2) {
				continue;
			}
			coords.push(new L.LatLng(ll[1], ll[0]));
		}
		return coords;
	}

});

GSI.KMLIcon = L.Icon.extend({

	createIcon: function () {
		var img = this._createIcon('icon');

		if ( img.width && img.width > 0 )
		{
			this._onIconImageLoaded( img );

		}
		else
		{
			$(img).css({ 'visibility':'hidden'}).on( 'load', L.bind( this._onIconImageLoaded, this, img ) );
		}
		return img;
	},

	_onIconImageLoaded: function(img) {
		var scale = ( this.options._iconScale ? this.options._iconScale : 1 );
		var w = Math.round( img.width * scale );
		var h = Math.round( img.height * scale );
		this.options.iconSize = [w,h];
		var anchorX = null;
		var anchorY = null;
		if ( this.options.iconAnchorRef && this.options.iconAnchorRef.x )
		{
			anchorX = Math.round(w*this.options.iconAnchorRef.x);

		}
		else
		{
			anchorX = Math.round(w/2);
		}

		if ( this.options.iconAnchorRef && this.options.iconAnchorRef.y )
		{
			anchorY = Math.round(h*this.options.iconAnchorRef.y);
		}
		else
		{
			anchorY = Math.round(h/2);
		}
		this.options.iconAnchor = [anchorX,anchorY];


		this._setIconStyles(img, "icon");
		L.DomUtil.addClass(img, 'leaflet-clickable');
		img.style.visibility= 'visible';
		//if ( this.options.clickable )


	}
});


GSI.KMLMarker = L.Marker.extend({
	options: {
		icon: new GSI.KMLIcon.Default(),
		clickable:true
	}
});




GSI.GeoJSONTileLayer = L.TileLayer.GeoJSON.extend( {

	_opacity : 1,

	initialize: function (url, options, geojsonOptions) {
		this._loadStyle( url );
		options.clipTiles = false;
		//options.maxNativeZoom = 16;
		L.TileLayer.GeoJSON.prototype.initialize.call(this, url, options, geojsonOptions);
	},

	_tileLoaded: function (tile, tilePoint) {
		if ( tile && tile.datum && this.options.isTopoJSON)
		{
			tile.datum = omnivore.topojson.parse(tile.datum);
		}
		L.TileLayer.Ajax.prototype._tileLoaded.apply(this, arguments);
		if (tile.datum === null) { return null; }
		this.addTileData(tile.datum, tilePoint);
		if ( this._opacity != 1 )this.setOpacity( this._opacity );
	},

	_onStyleLoad : function(result)
	{
		try
		{
			var data = null;
			if ( !result) return;
			if ( result.data )
			{
				data = result.data;
				//this.setStyle( data.geojsonOptions );

				//data = $.parseXML( result.data );
			}
			else data = result;

			data = eval( "(" + data + ")" );
			if ( data.geojsonOptions ) this.geojsonLayer.options =  data.geojsonOptions;
			if ( data.options )
			{
				if ( this.options._minZoom )
					data.options.minZoom = this.options._minZoom;

				if ( this.options._maxZoom )
					data.options.maxZoom = this.options._maxZoom;

				if ( this.options._maxNativeZoom )
					data.options.maxNativeZoom = this.options._maxNativeZoom;

				if ( this.options._attribution )
					data.options.attribution = this.options._attribution;

				//this.options =  data.options;

				//console.log( this.options );
				L.setOptions(this, data.options);
				//console.log( this.options );
				/*
				if ( data.options.minZoom )
					this.options.minZoom = data.options.minZoom;

				if ( data.options.maxZoom )
					this.options.maxZoom = data.options.maxZoom;

				if ( data.options.maxNativeZoom )
					this.options.maxNativeZoom = data.options.maxNativeZoom;

				if ( data.options.attribution )
					this.options.attribution = data.options.attribution;
				//console.log( this.options );
				*/
			}

		}
		catch(e)
		{
		}
		this._reset();
		this._update();
	},

	_loadStyle : function(url)
	{
		var styleUrl = url.replace(/\/\{z\}.*/,"") + '/style.js';
		if ( !CONFIG.FORCECORS && !GSI.Utils.isLocalUrl(url) )
		{
			var parameter = {
				url : styleUrl,
				lf: 0
			};

			this._styleAjax = $.ajax({
				type: "GET",
				dataType: "jsonp",
				data: parameter,
				url: CONFIG.SERVERAPI.GETJSONP,
				success:  L.Util.bind( this._onStyleLoad, this ),
				async : true

			});
		}
		else
		{

			this._styleAjax = $.ajax({
				type: "GET",
				dataType: "text",
				url: styleUrl,
				success:  L.Util.bind( this._onStyleLoad, this ),
				async : true

			});

		}
	},

	setOpacity : function( opacity )
	{
		this._opacity = opacity;

		if ( this.geojsonLayer )
		{
			var opacitySetter = new GSI.LayerOpacitySetter();
			opacitySetter.setOpacity( this.geojsonLayer, opacity  );
		}
	}


} );


/************************************************************************

GSI.MapLayerList
	表示レイヤー管理

************************************************************************/

GSI.MapLayerList = L.Class.extend( {
	includes: L.Mixin.Events,

	tileList : [],
	list : [],

	initialize : function (map,options)
	{
		this.map = map;
		options = L.setOptions(this, options);
	},

	appendKML : function( info )
	{
		if ( this.exists( info ) ) return;
		this.map.addLayer(info._visibleInfo.layer,true);
		this.list.unshift( info );
		this._initZIndex( this.list );

	},

	appendList : function( infoList, isHide )
	{

		for ( var i=0; i<infoList.length; i++ )
		{
			this.append( infoList[i], true, isHide );
		}
	},

	append : function( info, noFinishMove, isHide )
	{
		if ( this.exists( info ) ) return;
		info._visibleInfo = {};
		info._visibleInfo.opacity = ( info.initialOpacity ? info.initialOpacity : 1.0 );
		info.initialOpacity = null;

		if ( info.layerType=="tile" )
		{
			var options = {
				errorTileUrl : '',
			};
			if ( info.subdomains &&info.subdomains!="" )
			{
				options.subdomains= info.subdomains;
			}
			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.maxNativeZoom && info.maxNativeZoom!="" ) options.maxNativeZoom =info.maxNativeZoom;
			if ( info.attribution ) options.attribution =info.attribution;

			info._visibleInfo.layer = new L.TileLayer(info.url,options);
			if ( isHide)
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);
			this.tileList.unshift( info );
			this._initZIndex( this.tileList );
		}
		else if ( info.layerType=="kml" )
		{
			var options = {async: true, "_map": this.map};

			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.attribution ) options.attribution =info.attribution;

			info._visibleInfo .layer = new GSI.KML(info.url, options);
			info._visibleInfo .layer._noFinishMove = noFinishMove;
			info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "KML"  ) );
			info._visibleInfo .layer.on("loaded", L.bind( this.onLayerLoad, this, info._visibleInfo.layer  ) );
			info._visibleInfo .layer .load();


			if ( isHide)
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);

			this.list.unshift( info );
			this._initZIndex( this.list );
		}
		else if ( info.layerType=="geojson" )
		{
		// GeoJSON
			var options = {};

			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.attribution ) options.attribution =info.attribution;

			info._visibleInfo .layer = new GSI.GeoJSON(info.url,options);
			info._visibleInfo .layer._noFinishMove = noFinishMove;
			info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "GeoJSON"  ) );
			info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
			info._visibleInfo .layer .load();

			if ( isHide)
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer);

			this.list.unshift( info );
			this._initZIndex( this.list );

		}
		else if ( info.layerType=="geojson_tile" )
		{
		// タイルGeoJSON
			var options = { clipTiles : true};

			var options2 = {};

			if ( info.subdomains &&info.subdomains!="" )
			{
				options.subdomains= info.subdomains;
			}
			if ( ( info.minZoom == 0 || info.minZoom) && info.minZoom!="" )
			{
				options.minZoom= info.minZoom;
				options._minZoom= info.minZoom;
			}
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom!="" )
			{
				options.maxZoom =info.maxZoom;
				options._maxZoom =info.maxZoom;
			}

			if ( info.maxNativeZoom  && info.maxNativeZoom!="" )
			{
				options.maxNativeZoom =info.maxNativeZoom;
				options._maxNativeZoom =info.maxNativeZoom;
			}

			if ( info.attribution )
			{
				options.attribution =info.attribution;
				options._attribution =info.attribution;
			}

			info._visibleInfo.layer = new GSI.GeoJSONTileLayer(info.url,options, options2);

			if ( isHide)
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);


			this.list.unshift( info );
			this._initZIndex( this.tileList );

		}
		else if ( info.layerType=="topojson_tile" )
		{
		// タイルTopoJSON
			var options = { clipTiles : true, isTopoJSON: true};

			var options2 = {};
			if ( info.subdomains &&info.subdomains!="" )
			{
				options.subdomains= info.subdomains;
			}
			if ( ( info.minZoom == 0 || info.minZoom) && info.minZoom!="" )
			{
				options.minZoom= info.minZoom;
				options._minZoom= info.minZoom;
			}
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom!="" )
			{
				options.maxZoom =info.maxZoom;
				options._maxZoom =info.maxZoom;
			}

			if ( ( info.maxNativeZoom ) && info.maxNativeZoom!="" )
			{
				options.maxNativeZoom =info.maxNativeZoom;
				options._maxNativeZoom =info.maxNativeZoom;
			}

			if ( info.attribution )
			{
				options.attribution =info.attribution;
				options._attribution =info.attribution;
			}


			info._visibleInfo.layer = new GSI.GeoJSONTileLayer(info.url,options, options2);
			if ( isHide)
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);
			this.list.unshift( info );
			this._initZIndex( this.tileList );

		}
		else if ( info.layerType=="topojson" )
		{
		// TopoJSON
			var options = {layerType:'topojson'};

			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.attribution ) options.attribution =info.attribution;

			info._visibleInfo .layer = new GSI.GeoJSON(info.url,options);
			info._visibleInfo .layer._noFinishMove = noFinishMove;
			info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "TopoJSON"  ) );
			info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
			info._visibleInfo .layer .load();
			if ( isHide)
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer);

			this.list.unshift( info );
			this._initZIndex( this.list );

		}
		else if ( info.layerType=="tms" )
		{
		// TMS
			var options = {};

			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.maxNativeZoom && info.maxNativeZoom!="" ) options.maxNativeZoom =info.maxNativeZoom;
			if ( info.attribution ) options.attribution =info.attribution;

			info._visibleInfo.layer = new GSI.GSITMSLayer(info.url,options);
			if ( isHide)
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);
			this.tileList.unshift( info );
			this._initZIndex( this.tileList );
		}

		if( info._visibleInfo.layer )
		{
			if ( info._visibleInfo.layer.setOpacity )
			{
				info._visibleInfo.layer.setOpacity( info._visibleInfo.opacity );
			}
			else
			{
			var opacitySetter = new GSI.LayerOpacitySetter();
			opacitySetter.setOpacity( info._visibleInfo.layer, info._visibleInfo.opacity   );
			}
		}

		this.fire('change');
	},


	_showLoading : function(title)
	{
		if ( !this._showLoadingInc || this._showLoadingInc == 0 )
		{
			this._showLoadingInc = 0;
			GSI.Modal.LoadingMessage.show( 'ファイルを読み込んでいます...' );
		}
		this._showLoadingInc++;
	},

	_hideLoading : function()
	{
		this._showLoadingInc--;
		if ( this._showLoadingInc <= 0 )
			GSI.Modal.LoadingMessage.hide();
	},

	onLayerLoadStart : function(layer, title)
	{
		this._showLoading(title);
	},

	onLayerLoad : function(layer)
	{

		if ( !layer._noFinishMove && layer.getBounds )
		{
			try
			{
				this.map.fitBounds( layer.getBounds() );
			}
			catch( e ){}

		}
		this._hideLoading();
	},


	_initZIndex : function( list )
	{
		var zIndex = 100;
		for ( var i=list.length-1; i>= 0; i-- )
		{
			var info = list[i];
			if ( info._visibleInfo.layer )
			{
				if ( info._visibleInfo.layer.setZIndex )
				{
					info._visibleInfo.layer.setZIndex( zIndex );
					zIndex++;
				}

			}
		}
	},

	refreshTileList : function( list )
	{
		this.tileList = list;
		this._initZIndex(this.tileList);
	},

	exists : function( info )
	{
		if ( CONFIG.LAYERTYPELIST[info.layerType].isTileImage )
		{
			for ( var i=0; i<this.tileList.length; i++ )
			{
				if ( this.tileList[i] == info )
				{
					return true;
				}
			}
		}
		else
		{
			for ( var i=0; i<this.list.length; i++ )
			{
				if ( this.list[i] == info )
				{
					return true;
				}
			}
		}

		return false;

	},
	remove : function( info )
	{
		if ( CONFIG.LAYERTYPELIST[info.layerType].isTileImage )
		{
			for ( var i=0; i<this.tileList.length; i++ )
			{
				if ( this.tileList[i] == info )
				{
					this.tileList.splice(i, 1);
					break;
				}
			}
		}
		else
		{
			for ( var i=0; i<this.list.length; i++ )
			{
				if ( this.list[i] == info )
				{
					this.list.splice(i, 1);
					break;
				}
			}
		}

		this.map.removeLayer( info._visibleInfo.layer );
		info._visibleInfo = null;
		this.fire('change');
	},


	clear : function()
	{
		for ( var i=0; i<this.list.length; i++ )
		{
			var info = this.list[i];
			this.map.removeLayer( info._visibleInfo.layer );
			info._visibleInfo = null;
		}
		this.list =[];


		for ( var i=0; i<this.tileList.length; i++ )
		{
			var info = this.tileList[i];
			this.map.removeLayer( info._visibleInfo.layer );
			info._visibleInfo = null;
		}
		this.tileList =[];

		this.fire('change');
	},


	getTileList : function()
	{
		return this.tileList;
	},

	getList : function()
	{
		return this.list;
	}

} );






/************************************************************************

GSI.LatLngGrid
	緯度経度グリッド

************************************************************************/

GSI.LatLngGrid = L.Class.extend( {
	options : {
		lineStyle : {
			color : "#1D417A",
			weight : 2,
			opacity: 1,
			fillOpacity:1,
			dashArray : [3,3]
		},
		labelClassName : 'latlnggrid_label'
	},

	visible : false,
	initialize: function(map, options) {
		this._layer = null;
		this._map = map;

		options = L.setOptions(this, options);

		options.lineStyle.clickable = false;

		this._refresh = L.bind(this.refresh, this);
		this._visible = options.visible;
		this.setVisible(this._visible);
	},

	clear : function()
	{
		if ( this._layer )
		{
			//this._layer.clearLayers();
			this._map.removeLayer( this._layer );
			this._layer = null;
		}
		this._lines = null;
		this._labels = null;
	},

	refresh : function()
	{

		/*
		if ( this._lines )
		{
			for ( var i=0; i<this.lines.length; i++ )
			{
				this._map.removeLayer( this.lines[i] );
			}
			this._lines = null;
		}
		*/
		if ( !this._visible )
		{
			this.clear();
			return ;
		}


		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
		{
			this.clear();
		}
		var bounds = this._map.getBounds();
		var zoom = this._map.getZoom();

		var distance = 3600 * 5;

		for( var i=0;i< this.options.condition.length; i++ )
		{
			var c = this.options.condition[i];
			if ( zoom <= c.zoom )
			{
				distance = c.grid;
				break;
			}
		}

		var south = bounds.getSouth();
		var north = bounds.getNorth();
		var west = bounds.getWest();
		var east = bounds.getEast();

		if ( south < -90 ) south = -90;
		if ( north >= 90 ) north = 90;


		if ( west < -180 ) west = -180;
		if ( west > 180 ) west = 180;

		if ( east < -180 ) east = -180;
		if ( east > 180 ) east = 180;



		var startLat = Math.floor( Math.floor( Math.floor( south * distance ) / distance ) * 3600 );
		startLat = Math.floor( Math.floor( south * 3600 ) / distance ) * distance;

		var endLat = Math.floor( north * 3600 );

		var startLng = Math.floor( Math.floor( Math.floor( west * distance ) / distance ) * 3600 );
		startLng = Math.floor( Math.floor( west * 3600 ) / distance ) * distance;
		var endLng = Math.floor(east * 3600 );



		var lineStyle = this.options.lineStyle;

		if ( !this._lines ) this._lines = [];
		if ( !this._labels ) this._labels = [];

		var lineNo = 0;
		var labelNo = 0;

		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure = true;


		for ( var y = startLat; y<endLat+distance; y+=distance )
		{

			var lat = y / 3600.0;

			if ( lat < -80 || lat > 80 ) continue;
			var latLngArr =[
				L.latLng(lat, west),
				L.latLng(lat, east)
			];

			if ( lineNo >= this._lines.length )
			{
				var line = L.polyline(latLngArr,lineStyle );
				line._noMeasure = true;
				this._lines.push( line );
				layer.addLayer( line );
			}
			else
			{
				this._lines[lineNo].setLatLngs( latLngArr );
			}
			lineNo++;

			// ラベル表示
			for ( var x = startLng; x<endLng+distance; x+=distance )
			{
				var lng = x / 3600.0;

				//if ( lng < -180 ) lng = -180;
				//if ( lng > 180 ) lng = 180;

				if ( lng < -180 || lng > 180 ) continue;

				var dms = GSI.Utils.latLngToDMS( { 'lng' : lng, 'lat' : lat} );
				dms.lat.s = Math.round( dms.lat.s );
				dms.lng.s = Math.round( dms.lng.s );

				if ( dms.lat.s == 60 ){ dms.lat.s = 0; dms.lat.m ++; }
				if ( dms.lng.s == 60 ){ dms.lng.s = 0; dms.lng.m ++; }
				if ( dms.lat.m == 60 ){ dms.lat.m = 0; dms.lat.d ++; }
				if ( dms.lng.m == 60 ){ dms.lng.m = 0; dms.lng.d ++; }


				var content =
					'<div unselectable = "on">' + dms.lat.d + '°' +  dms.lat.m + ' ′' + Math.round( dms.lat.s) + ' ″' + '</div>'
					+
					'<div unselectable = "on">' +dms.lng.d + '°' + dms.lng.m + '′' + Math.round( dms.lng.s )  + ' ″' + '</div>';
				var latLng = { 'lng' : lng, 'lat' : lat};


				var label = null;

				if ( labelNo >= this._labels.length )
				{
					label = new L.Label({
						zoomAnimation : true,
						noHide : true,
						offset: [8, -34],
						className: this.options.labelClassName,
						clickable : false
					});
					label.setContent( content );
					label.setLatLng( latLng );
					this._labels.push( label );
					layer.addLayer( label );
				}
				else
				{
					label = this._labels[labelNo];
					label.setContent( content );
					label.setLatLng( latLng );
				}
				labelNo++;

			}
		}


		for ( var x = startLng; x<endLng+distance; x+=distance )
		{

			var lng = x / 3600.0;
			//lines.push( line );
			//if ( lng < -180 ) lng = -180;
			//if ( lng > 180 ) lng = 180;
			if ( lng < -180 || lng > 180 ) continue;

			var latLngArr =[
				L.latLng(north, lng),
				L.latLng(south, lng)
			];

			if ( lineNo >= this._lines.length )
			{
				var line = L.polyline(latLngArr,lineStyle );
				line._noMeasure = true;
				this._lines.push( line );
				layer.addLayer( line );
			}
			else
			{
				this._lines[lineNo].setLatLngs( latLngArr );
				//layer.addLayer( this._lines[lineNo] );
			}
			lineNo++;



		}


		if ( !this._layer )
		{
			this._layer = layer;
			this._map.addLayer( this._layer );
		}

		// 不要なライン、ラベルの削除
		this._clearLayerArr( this._lines, lineNo );
		this._clearLayerArr( this._labels, labelNo );

		if ( this._layer  ) this._layer.bringToBack();

	},

	_clearLayerArr : function( arr, idx )
	{
		if ( this._layer )
		{
			for ( var i= idx; i< arr.length; i++ )
			{
				this._layer.removeLayer( arr[i] );
			}
		}
		if ( arr.length > idx )
		{
			arr.splice(idx);
		}
	},


	setVisible : function( on )
	{
		this._visible = on;
		if ( this._visible )
		{
			this._map.on('moveend', this._refresh );
			this.refresh();
		}
		else
		{
			this._map.off('moveend', this._refresh );
			this.clear();
		}
	},

	getVisible : function()
	{
		return this._visible;
	}
});





/************************************************************************

GSI.UTM
	UTM用

************************************************************************/

GSI.UTM = {};

GSI.UTM.Utils = {

	PROJ_WORLD : new Proj4js.Proj('EPSG:4326'),

	lng2Zone : function( lng )
	{
		return Math.floor(lng/6) + 31;
	},

	zone2Lng : function( zone )
	{
		return ( zone - 31 ) * 6;
	},




	getUTMDefName : function( zone)
	{

		var defName = '';

		if ( !zone ) return defName;
		switch( zone + '' )
		{
			case '51':
				defName = 'EPSG:3097';
				break;
			case '52':
				defName = 'EPSG:3098';
				break;
			case '53':
				defName = 'EPSG:3099';
				break;
			case '54':
				defName = 'EPSG:3100';
				break;
			case '55':
				defName = 'EPSG:3101';
				break;
			case '56':
				defName = 'SR-ORG:1235';
				break;
		}

		return defName;
	},

	getUTMMark : function ( lat )
	{
		var mark ='';
		if(lat >= 16 && lat < 24) {
			mark = "Q";
		} else if(lat >= 24 && lat < 32) {
			mark = "R";
		} else if(lat >= 32 && lat < 40) {
			mark = "S";
		} else if(lat >= 40 && lat < 48) {
			mark = "T";
		} else if(lat >= 48 && lat < 56) {
			mark = "U";
		}
		return mark;
	},

	point2LatLng : function( s )
	{

		return null;
	},

	latlng2PointName : function(lat, lng)
	{
		var zone = GSI.UTM.Utils.lng2Zone( lng );
		var defName = GSI.UTM.Utils.getUTMDefName( zone );

		if ( defName == '' ) return '';


		var projUTM = new Proj4js.Proj(defName);
		var latLngPoint = new Proj4js.Point(lng,lat );
		var utmPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,latLngPoint);


		return GSI.UTM.Utils.getUTMPointName(
			zone,
			GSI.UTM.Utils.getUTMMark( lat ),
			utmPoint.x,
			utmPoint.y,
			4
		);
	},

	getUTMPointName : function( zone, mark, x, y, num, hideNumber)
	{
		/*
		var y10mNumber = '';
		if ( meter <100 * 1000 )
		{
			y10mNumber = ( '0000' + Math.floor( utmY / 10) );
			y10mNumber = y10mNumber.substr(y10mNumber.length - 4, 4);
		}
		*/
		var letters = GSI.UTM.Utils.findGridLetters(zone, y, x);


		var x10mNumber = '';
		var y10mNumber = '';
		if ( !hideNumber && x && y )
		{
			var zero = '';
			for ( var i=0; i<num; i++ )
			{
				zero += '0';
			}


			x10mNumber = zero + Math.floor( x /10 );
			x10mNumber = x10mNumber.substr(x10mNumber.length - num, num);
			y10mNumber = zero + Math.floor( y /10 );
			y10mNumber = y10mNumber.substr(y10mNumber.length - num, num);
		}




		return zone + mark + letters + x10mNumber + y10mNumber;
	},



	findSet : function(zoneNum)
	{

		zoneNum = parseInt(zoneNum);
		zoneNum = zoneNum % 6;
		switch (zoneNum) {

		case 0:
			return 6;
			break;

		case 1:
			return 1;
			break;

		case 2:
			return 2;
			break;

		case 3:
			return 3;
			break;

		case 4:
			return 4;
			break;

		case 5:
			return 5;
			break;

		default:
			return -1;
			break;
		}
	},


	BLOCK_SIZE : 100000,
	GRIDSQUARE_SET_ROW_SIZE : 20,
	GRIDSQUARE_SET_COL_SIZE : 8,

	findGridLetters : function (zoneNum, northing, easting)
	{

		zoneNum  = parseInt(zoneNum);
		northing = parseFloat(northing);
		easting  = parseFloat(easting);
		row = 1;

		// northing coordinate to single-meter precision
		north_1m = Math.round(northing);

		// Get the row position for the square identifier that contains the point
		while (north_1m >= GSI.UTM.Utils.BLOCK_SIZE) {
			north_1m = north_1m - GSI.UTM.Utils.BLOCK_SIZE;
			row++;
		}

		// cycle repeats (wraps) after 20 rows
		row = row % GSI.UTM.Utils.GRIDSQUARE_SET_ROW_SIZE;
		col = 0;

		// easting coordinate to single-meter precision
		east_1m = Math.round(easting);

		// Get the column position for the square identifier that contains the point
		while (east_1m >= GSI.UTM.Utils.BLOCK_SIZE){
			east_1m = east_1m - GSI.UTM.Utils.BLOCK_SIZE;
			col++;
		}

		// cycle repeats (wraps) after 8 columns
		col = col % GSI.UTM.Utils.GRIDSQUARE_SET_COL_SIZE;

		return GSI.UTM.Utils.lettersHelper(GSI.UTM.Utils.findSet(zoneNum), row, col);
	},


	lettersHelper : function (set, row, col)
	{

		// handle case of last row
		if (row == 0) {
			row = GSI.UTM.Utils.GRIDSQUARE_SET_ROW_SIZE - 1;
		}
		else {
			row--;
		}

		if (col == 0) {
			col = GSI.UTM.Utils.GRIDSQUARE_SET_COL_SIZE - 1;
		}
		else {
			col--;
		}

		switch(set) {

		case 1:
			l1="ABCDEFGH";              // column ids
			l2="ABCDEFGHJKLMNPQRSTUV";  // row ids
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 2:
			l1="JKLMNPQR";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 3:
			l1="STUVWXYZ";
			l2="ABCDEFGHJKLMNPQRSTUV";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 4:
			l1="ABCDEFGH";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 5:
			l1="JKLMNPQR";
			l2="ABCDEFGHJKLMNPQRSTUV";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 6:
			l1="STUVWXYZ";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;
		}
	}









};
GSI.UTM.Grid = L.Class.extend( {

	options : {
		lineStyle : {
			color : "#004E2D",
			weight : 2,
			color2 : "#004E2D",
			opacity: 1,
			fillOpacity:1,
			dashArray : [3,3],
			visible : false,
			clickable : false
		},
		labelClassName : 'utmgrid_label',
		visible : false
	},

	_lines : [],
	_labels : [],

	initialize : function (map, options )
	{
		this._map = map;
		this._onMoveEnd = L.bind( this.onMoveEnd, this );

		options = L.setOptions(this, options);
		options.lineStyle.clickable = false;
		if ( this.options.visible )
		{
			this.options.visible = false;
			this.setVisible( true );//this.refresh();
		}
	},


	onMoveEnd : function()
	{

		this.refresh();
	},

	refresh : function()
	{

		if ( !this.options.visible )
		{
			this.clear();
			return;
		}

		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
		{
			this.clear();
		}

		var bounds = this._map.getBounds();
		var zoom = this._map.getZoom();

		for( var i=0;i< this.options.condition.length; i++ )
		{
			var c = this.options.condition[i];
			if ( zoom <= c.zoom )
			{

				if ( c.grid == 'a')
				{
					this.drawZoneGrid( bounds );
				}
				else
				{
					this.drawGrid( bounds, zoom, c.grid);
				}
				try
				{
					if ( this._layer  ) this._layer.bringToBack();
				}
				catch( ex ){}
				break;
			}
		}
		/*
		if ( zoom < 8 )
		{
			this.drawZoneGrid( bounds );
		}
		else if ( zoom <= 10 )
		{
			// 100kmグリッド
			this.drawGrid( bounds, zoom, 100 * 1000 );
		}
		else if ( zoom <= 12 )
		{
			// 10kmグリッド
			this.drawGrid( bounds, zoom, 10 * 1000 );
		}
		else
		{
			// 1kmグリッド
			this.drawGrid( bounds, zoom, 1 * 1000 );
		}
		*/
	},




	// グリッド
	drawGrid : function( bounds, zoom, meter )
	{

		var startZone = GSI.UTM.Utils.lng2Zone( bounds.getWest() );
		var projUTM = new Proj4js.Proj(GSI.UTM.Utils.getUTMDefName( startZone ));
		var startLatLngPoint = new Proj4js.Point(bounds.getWest(),bounds.getSouth());
		var startUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,startLatLngPoint);

		startUTMPoint.x = Math.floor( startUTMPoint.x / meter ) * meter;
		startUTMPoint.x -= meter;

		startUTMPoint.y = Math.floor( startUTMPoint.y / meter ) * meter;
		startUTMPoint.y -= meter;

		// x軸ループ
		var utmX = startUTMPoint.x;
		var zone = startZone;
		var lineStyle = $.extend( true, {} , this.options.lineStyle );
		var xExit = false;

		var gridPoints = [];

		var lineIndex = 0;
		var labelIndex = 0;


		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure= true;

		while( true )
		{
			// 色決定
			//lineStyle.color = ( ( zone % 2 ) == 0 ? this.options.lineStyle.color : this.options.lineStyle.color2 );

			var currentZoneLng = GSI.UTM.Utils.zone2Lng( zone );
			var nextZoneLng = GSI.UTM.Utils.zone2Lng( zone + 1 );

			var isNextZone = true;
			var xExit2 = true;

			// y軸ループ
			var latlngs = [];
			var utmYs = [];
			var utmY = startUTMPoint.y;
			var yIndex = 0;

			var x10mNumber = '';
			if ( meter <100 * 1000 )
			{
				x10mNumber = utmX;

			}
			while( true )
			{
				var utmPoint =new Proj4js.Point(utmX,utmY);
				var latLngPoint = Proj4js.transform(projUTM, GSI.UTM.Utils.PROJ_WORLD,utmPoint);
				var mark = GSI.UTM.Utils.getUTMMark( latLngPoint.y );

				//
				var latLng = L.latLng(latLngPoint.y, latLngPoint.x);

				utmYs.push( utmY );
				latlngs.push( latLng );

				if ( !gridPoints[ yIndex ] ) gridPoints[ yIndex ] = [];
				gridPoints[ yIndex ].push( latLng );

				if ( latLngPoint.x < nextZoneLng ) isNextZone = false;
				if ( latLngPoint.x <= bounds.getEast() ) xExit2 = false;

				yIndex++;
				utmY += meter;
				if ( latLngPoint.y > bounds.getNorth() ) break;
			}

			if ( latlngs.length > 0  )
			{
				if ( this._lines.length <= lineIndex )
				{
					var polyline = L.polyline(latlngs, lineStyle);
					polyline._noMeasure = true;
					layer.addLayer( polyline );
					this._lines.push( polyline );
				}
				else
				{
					var polyline = this._lines[lineIndex];
					polyline.setLatLngs( latlngs );
				}
				lineIndex++;
			}

			if ( isNextZone )
			{
				// 横線
				for ( var i=0; i<gridPoints.length; i++ )
				{
					if( !gridPoints[i] ) continue;
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints[i] );
					}
					lineIndex++;
				}
				gridPoints = [];
				zone++;
				projUTM = new Proj4js.Proj(GSI.UTM.Utils.getUTMDefName( zone ));


				startLatLngPoint = new Proj4js.Point(GSI.UTM.Utils.zone2Lng( zone ),bounds.getSouth());
				startUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,startLatLngPoint);

				startUTMPoint.x = Math.floor( startUTMPoint.x / meter ) * meter;
				startUTMPoint.x -= meter;

				startUTMPoint.y = Math.floor( startUTMPoint.y / meter ) * meter;
				startUTMPoint.y -= meter;
				utmX = startUTMPoint.x;
			}
			else
			{
				// ラベル表示
				for ( var i=0; i<latlngs.length; i++ )
				{
					var latlng = latlngs[i];
					var utmY = utmYs[i];
					if ( this._labels.length <= labelIndex )
					{
						var label = new L.Label({
								zoomAnimation : true,
								noHide : true,
								offset: [8, -24],
								className: this.options.labelClassName,
								clickable : false
							});
						label.setContent(  GSI.UTM.Utils.getUTMPointName( zone, mark, utmX, utmY, 4, meter >=100000 ) );
						label.setLatLng( latlng);
						layer.addLayer( label );
						this._labels.push( label );
					}
					else
					{
						var label = this._labels[labelIndex];
						label.setContent(  GSI.UTM.Utils.getUTMPointName( zone, mark, utmX, utmY, 4, meter >=100000 ) );
						label.setLatLng( latlng );
					}
					labelIndex++;
				}
			}
			if ( xExit )
			{

				// 横線
				for ( var i=0; i<gridPoints.length; i++ )
				{

					if( !gridPoints[i] ) continue;

					//console.log( i);
					if ( this._lines.length <= lineIndex )
					{

						var polyline = L.polyline(gridPoints[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );

					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints[i] );
					}
					lineIndex++;

				}
				gridPoints = [];
				break;
			}

			utmX += meter;
			xExit = xExit2;
		}

		if (!this._layer )
		{
			this._layer  = layer;
			this._map.addLayer( this._layer );
		}

		this._clearLayerArr(this._lines, lineIndex);
		this._clearLayerArr(this._labels, labelIndex);

	},

	// 小縮尺用グリッド
	drawZoneGrid : function(bounds)
	{
		var startX = Math.floor( bounds.getWest() / 6 ) * 6;
		var startY = Math.floor( bounds.getSouth() / 8 ) * 8;

		var endX = ( Math.floor( bounds.getEast() / 6 ) + 1 ) * 6;
		var endY = ( Math.floor( bounds.getNorth() / 8 ) + 1 ) * 8;

		var lineStyle = $.extend( true, {} , this.options.lineStyle );

		var lineIndex = 0;
		var labelIndex = 0;

		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure= true;

		for ( var y = startY; y<=endY; y += 8 )
		{
			var mark = GSI.UTM.Utils.getUTMMark( y );

			if ( y < 16 ) continue;
			if (y >= 57 ) break;

			var latlngs = [];
			for ( var x = startX; x<=endX; x+=6 )
			{

				var zone = Math.floor(x/6) + 31;
				var nextZone = Math.floor((x+6)/6) + 31;

				if ( zone < 51 ) continue;
				if (  zone > 57 ) break;

				if ( y+8 <= endY && y +8 < 57 && x+6 <= endX && nextZone <=57 )
				{

					if ( this._labels.length <= labelIndex )
					{
						var label = new L.Label({
								zoomAnimation : true,
								noHide : true,
								offset: [8, -24],
								className: this.options.labelClassName

							});
						label.setContent( zone + mark);
						label.setLatLng( { 'lng' : x, 'lat' : y} );
						layer.addLayer( label );
						this._labels.push( label );
					}
					else
					{
						var label = this._labels[labelIndex];
						label.setContent( zone + mark);
						label.setLatLng( { 'lng' : x, 'lat' : y} );
					}
					labelIndex ++;

				}
				latlngs.push( L.latLng(y, x) );
			}

			if ( this._lines.length <= lineIndex )
			{
				var polyline = L.polyline(latlngs, lineStyle);
				polyline._noMeasure = true;
				layer.addLayer( polyline );
				this._lines.push( polyline );
			}
			else
			{
				var polyline = this._lines[lineIndex];
				polyline.setLatLngs( latlngs );
			}
			lineIndex++;

		}



		for ( var x = startX; x<=endX; x+=6 )
		{
			var zone = Math.floor(x/6) + 31;
			if ( zone < 51 || zone > 57 ) continue;

			var latlngs = [];

			for ( var y = startY; y<=endY; y += 8 )
			{
				if ( y < 16 || y >= 57 ) continue;

				latlngs.push( L.latLng(y, x) );
			}
			if ( this._lines.length <= lineIndex )
			{
				var polyline = L.polyline(latlngs, lineStyle);
				polyline._noMeasure = true;
				layer.addLayer( polyline );

				this._lines.push( polyline );
			}
			else
			{
				var polyline = this._lines[lineIndex];
				polyline.setLatLngs( latlngs );
			}
			lineIndex++;
		}


		if (!this._layer )
		{
			this._layer  = layer;
			this._map.addLayer( this._layer );
		}

		this._clearLayerArr(this._lines, lineIndex);
		this._clearLayerArr(this._labels, labelIndex);

	},

	_clearLayerArr : function( arr, idx )
	{
		if ( this._layer )
		{
			for ( var i=idx; i<arr.length; i++ )
			{
				this._layer.removeLayer( arr[i] );
			}
		}
		if ( arr.length > idx )
		{
			arr.splice(idx);
		}
	},

	clear : function()
	{

		if ( this._layer )
		{
			this._map.removeLayer( this._layer );
			this._layer = null;
		}

		this._lines = [];
		this._labels = [];
	},

	setVisible : function( visible )
	{
		if ( visible )
		{
			this.show();
		}
		else
		{
			this.hide();
		}
	},

	getVisible : function()
	{
		return this.options.visible;
	},

	show : function()
	{
		if ( !this.options.visible )
		{
			this.options.visible = true;
			this._map.on('moveend', this._onMoveEnd);
			this.refresh();
		}
	},

	hide : function()
	{
		if ( this.options.visible )
		{
			this.options.visible = false;
			this._map.off('moveend', this._onMoveEnd);
			this.refresh();
		}
	}


} );




/************************************************************************

GSI.JihokuLine
	磁北線

************************************************************************/

GSI.JihokuLine = L.Class.extend( {

	options : {
		visible : false,
		num : 5,
		lineStyle : {
			"color": "#ff0000",
			"weight": 2,
			"opacity": 1,
			"fill" : false,
			"fillOpacity":1,
			"clickable" : false
		}
	},
	initialize : function (map,options)
	{
		options = L.setOptions(this, options);
		this._map = map;

		this._refresh = L.bind(this.refresh, this);

		this.setVisible(this.options.visible);
	},

	getVariation : function ()
	{
		var center = this._map.getCenter();
		var px = center.lng;
		var py = center.lat;

		//経緯度座標(10進数)を小数点以下6桁に丸める
		px = px * 1000000;
		px = parseInt(px);
		px = px / 1000000;
		py = py * 1000000;
		py = parseInt(py);
		py = py / 1000000;

		//円周率
		var pi = Math.PI;

		//西偏角計算
		var KEE = px - 138;
		var KNN = py - 37;
		var KKK = (7+40.585/60) + (19.003/60) * KNN - (6.265 / 60) * KEE + (0.009 / 60) * KNN * KNN + (0.024 / 60) * KNN * KEE - (0.591 / 60) * KEE * KEE;

		//度からラジアンに
		KKK = KKK * pi / 180;
		return KKK;
	},

	refresh : function()
	{
		var center = this._map.getCenter();
		//非表示 or 下記範囲外
		//経度：122度～154度
		//緯度：20度～46度
		if (
			( !this.options.visible )
			||
			( center.lat < 20 || center.lat > 46 || center.lng <122 || center.lng >154 )
			)
		{
			if ( this._layer )
			{
				this._map.removeLayer( this._layer );
				this._layer = null;
			}

			this._lines = null;
			return ;
		}

		var count = this.options.num;

		var variation = this.getVariation();

		// 地図中央の経度
		var centerLng = this._map.getCenter().lng;
		var bounds = this._map.getBounds();

		// 表示されている領域の高さ
		var mapHeight = Math.abs(bounds.getSouth() - bounds.getNorth());
		// 表示されている領域の幅
		var mapWidth = Math.abs(bounds.getEast() - bounds.getWest());



		if ( !this._lines ) this._lines = [];
		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure = true;

		var lineStyle = this.options.lineStyle;


		for(var i = 0; i < count; i++)
		{
			/*
				var line = {
					"type": "LineString",
					"coordinates": []//[[H1, V1], [H2, V2]]
				}
			*/
			var latLngArr = null;

			if (Math.tan(variation) >= 0)
			{

				latLngArr =[
					L.latLng(bounds.getNorth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(variation)) * i / (count - 1) ),
					L.latLng(bounds.getSouth(), bounds.getWest()  + (mapWidth - mapHeight * Math.tan(variation)) * i / (count - 1) + mapHeight * Math.tan(variation))
				];
			} else {
				latLngArr =[
					L.latLng(bounds.getNorth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(variation)) * i / (count - 1) + mapHeight * Math.tan(variation) ),
					L.latLng(bounds.getSouth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(variation)) * i / (count - 1))
				];

			}
			if ( this._lines.length -1 < i )
			{
				var line = L.polyline(latLngArr,lineStyle );
				line._noMeasure = true;
				layer.addLayer( line );

				this._lines.push( line );
			}
			else
			{
				this._lines[i].setLatLngs(latLngArr);
			}
		}

		if ( !this._layer )
		{
			this._layer = layer;
			this._map.addLayer( this._layer );
		}
		if ( this._layer  ) this._layer.bringToBack();
		//this.layer = L.geoJson(lines, {style: lineStyle});

		//this.layer.addTo(this.map);
	},

	setVisible : function( on )
	{
		this.options.visible = on;
		if ( this.options.visible )
		{
			this._map.on('move', this._refresh );
		}
		else
		{
			this._map.off('move', this._refresh );
		}
		this.refresh();
	},

	getVisible : function()
	{
		return this.options.visible;
	}

} );







/************************************************************************

GSI.CenterCross
	中心マーク

************************************************************************/
GSI.CenterCrossMarker = L.Marker.extend( {

	_initIcon: function () {
		var options = this.options,
		    map = this._map,
		    animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
		    classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

		var icon = options.icon.createIcon(this._icon),
			addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}

			if (options.alt) {
				icon.alt = options.alt;
			}
		}

		L.DomUtil.addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;

		this._initInteraction();

		if (options.riseOnHover) {
			L.DomEvent
				.on(icon, 'mouseover', this._bringToFront, this)
				.on(icon, 'mouseout', this._resetZIndex, this);
		}

		var newShadow = options.icon.createShadow(this._shadow),
			addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			L.DomUtil.addClass(newShadow, classToAdd);
		}
		this._shadow = newShadow;


		if (options.opacity < 1) {
			this._updateOpacity();
		}


		var panes = this._map._panes;

		if (addIcon) {
			panes.shadowPane.appendChild(this._icon);
		}

		if (newShadow && addShadow) {
			panes.objectsPane.appendChild(this._shadow);
		}
	},

	_removeIcon: function () {
		if (this.options.riseOnHover) {
			L.DomEvent
			    .off(this._icon, 'mouseover', this._bringToFront)
			    .off(this._icon, 'mouseout', this._resetZIndex);
		}

		this._map._panes.shadowPane.removeChild(this._icon);

		this._icon = null;
	},

	_removeShadow: function () {
		if (this._shadow) {
			this._map._panes.objectsPane.removeChild(this._shadow);
		}
		this._shadow = null;
	}


} );


GSI.CenterCross = L.Class.extend( {

	marker : null,
	options : {
		visible : true
	},
	initialize : function (map,options)
	{
		options = L.setOptions(this, options);
		this.map = map;
		this._refresh = L.bind(this.refresh, this);

		this.setVisible(this.options.visible);
	},

	refresh : function()
	{
		if ( this.options.visible )
		{
			var pos = this.map.getCenter();
			if ( !this.marker )
			{
				var icon = L.icon({
					iconUrl: 'image/map/crosshairs.png',
					iconSize:     [32, 32],
					iconAnchor:   [16, 16]
				});


				this.marker = new GSI.CenterCrossMarker(pos, {
					icon: icon,
					clickable:
					false,draggable: false,
					keyboard: false,
					opacity: 0.8,
					zIndexOffset : 0
				});
				this.marker.addTo(this.map);
			}
			else
			{
				this.marker.setLatLng( pos );
			}
		}
		else if ( this.marker )
		{
			this.map.removeLayer( this.marker );
			this.marker = null;
		}

	},

	setVisible : function( on )
	{
		this.options.visible = on;
		if ( this.options.visible )
		{
			this.map.on('move', this._refresh );
		}
		else
		{
			this.map.off('move', this._refresh );
		}
		this.refresh();
	},

	getVisible : function()
	{
		return this.options.visible;
	}

} );





/************************************************************************

GSI.BaseLayer
	地図

************************************************************************/
GSI.BaseLayer = L.TileLayer.extend({

	baseLayerList : null,
	activeIndex : 0,
	isGrayScale : false,
	opacity : 1,
	highQuality : false,

	//noWrap : true,
	//continuousWorld : true,

	initialize: function (baseLayerList, defaultMap, options) {

		this.activeIndex = 0;

		if ( defaultMap )
		{
			for( var i=0; i<baseLayerList.length; i++ )
			{
				if ( baseLayerList[i].id == defaultMap )
				{
					this.activeIndex = i;
					break;
				}
			}
		}
		this.baseLayerList = baseLayerList;
		options = L.setOptions(this, options);
		options.minZoom = 2;
		this.setActiveIndex(this.activeIndex);

		//this.setOpacity( 0.5 );
	},

	setHighQuality : function( on )
	{
		this.highQuality = on
		if ( this.highQuality && ( this._map && this._map.getZoom() < 18 ) )
			this.options.tileSize = 128;
		else
			this.options.tileSize = 256;
		this.redraw();
	},

	getHighQuality : function()
	{
		return this.highQuality;
	},

	_getZoomForUrl: function () {

		var options = this.options;

		var zoom = this._map.getZoom();

		if ( this.highQuality )
		{
			zoom++;
			if ( zoom > 18 )
			{
				zoom = 18;
				this.options.tileSize = 256;
			}
			else
			{
				this.options.tileSize = 128;
			}
		}

		if (options.zoomReverse) {
			zoom = options.maxZoom - zoom;
		}

		zoom += options.zoomOffset;

		return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
	},


	getActiveId : function()
	{
		return this.baseLayerList[ this.activeIndex ].id;
	},

	getActiveIndex : function()
	{
		return this.activeIndex;

	},
	setActiveIndex : function(idx)
	{
		this.activeIndex = idx;
		this._url = this.baseLayerList[idx].url;
		if ( this.baseLayerList[idx].subdomains )
			this.options.subdomains =  this.baseLayerList[idx].subdomains;
		this.options.maxNativeZoom =  this.baseLayerList[idx].maxNativeZoom;
		this.options.errorTileUrl = this.baseLayerList[idx].errorTileUrl;

		if ( this.baseLayerList[idx].minZoom )
			this.options.minZoom =  this.baseLayerList[idx].minZoom;
		//this.options.continuousWorld = true;
		//this.options.noWrap = true;
		this.setUrl( this._url );
	},
	_createTile: function () {
		var tile = L.TileLayer.prototype._createTile.call(this);

		return tile;
	},
	_tileOnLoad: function () {


		var layer = this._layer;
		if (layer.isGrayScale  && this.src !== L.Util.emptyImageUrl) {
			$(this).addClass( "grayscale" );
			if ( GSI.Utils.Browser.ie )
			{
				if ( GSI.Utils.Browser.version >= 10 )
				{
					if ( !$( this ).data( "_src" ) )
					{
						$( this ).data( { "_src" : this.src } );
						this.src = this._layer.grayscaleIE1011( this );//.src );
					}
				}
				else
				{
					$(this).css( { 'filter' : 'gray', opacity : this._layer.opacity} );
				}
			}
		}
		L.TileLayer.prototype._tileOnLoad.call(this);
	},

	_createTile: function () {
		var tile = L.TileLayer.prototype._createTile.call(this);
		//
		if (this.isGrayScale )
		{
			if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version >= 10)
				$( tile ).attr( {'crossOrigin':'Anonymous'} );
			$(tile).addClass( "grayscale" );
			if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version < 10)
			{
				$(tile).css( { 'filter' : 'gray', opacity : this.opacity} );
			}
		}
		return tile;
	},

	_resetTile : function(tile)
	{
		$( tile ).data( { "_src" : null } );
	},

	setOpacity : function(opacity)
	{
		this.opacity = opacity;
		L.TileLayer.prototype.setOpacity.call(this, opacity);
	},
	getOpacity : function(opacity)
	{
		return this.opacity ;
	},


	grayscaleIE1011 : function (img ) //src)
	{
		var size = this._getTileSize();

		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		//var img = new Image();
		//img.src = src;
		canvas.width = size;
		canvas.height = size;
		ctx.drawImage(img, 0, 0);
		var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

		for(var y = 0; y < imgPixels.height; y++)
		{
			for(var x = 0; x < imgPixels.width; x++)
			{
				var i = (y * 4) * imgPixels.width + x * 4;
				var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
				imgPixels.data[i] = avg;
				imgPixels.data[i + 1] = avg;
				imgPixels.data[i + 2] = avg;
			 }
		}
		ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

		return canvas.toDataURL();
	},

	getGrayScale : function()
	{
		return this.isGrayScale;
	},

	setGrayScale : function(isGrayScale)
	{
		if ( this.isGrayScale != isGrayScale )
		{
			this.isGrayScale = isGrayScale;
			this.redraw();
			/*
			if ( this._tiles )
			{
				if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version >= 10)
				{
					if ( this.isGrayScale )
					{
						for( var key in this._tiles )
						{
							var img = this._tiles[ key ];
							if ( !$( img ).data( "_src" ) )
							{
								$( img ).data( { "_src" : img.src } );
								img.src = this.grayscaleIE1011( img );//.src );
							}
						}
					}
					else
					{
						for( var key in this._tiles )
						{
							var img = this._tiles[ key ];
							if ( $( img ).data( "_src" ) )
							{
								img.src = $( img ).data( "_src" );
								$( img ).data( { "_src" : null } )
							}
						}
					}
				}
				else
				{
					if ( this.isGrayScale )
					{
						for( var key in this._tiles )
						{
							$( this._tiles[ key ] ).addClass( "grayscale" );
							if ( GSI.Utils.Browser.ie ) $( this._tiles[ key ] ).css( { 'filter' : 'gray', opacity : this.opacity} );
						}
					}
					else
					{
						for( var key in this._tiles )
						{
							$( this._tiles[ key ] ).removeClass( "grayscale" );
							if ( GSI.Utils.Browser.ie ) $( this._tiles[ key ] ).css( { 'filter' : '', opacity : this.opacity} );
						}
					}
				}
			}
			*/
		}
	}

} );



/************************************************************************

GSI.GSITMSLayer
	TMSレイヤー

************************************************************************/
GSI.GSITMSLayer = L.TileLayer.extend({

	initialize : function(url, options)
	{
		var urlParts = url.split( '{tms}' );
		this._url = urlParts[ 0 ];
		this._ext = urlParts[ 1];

		L.setOptions(this, options);
	},

	_zeroPad : function(num,len) {
		var result = "" + num;
		while (result.length < len) {
		result = "0"+result;
		}
		return result;
	},

	getTileUrl: function (tilePoint)
	{

		var z = tilePoint.z;
		var x = this._zeroPad(tilePoint.x,7);
		var y = this._zeroPad(tilePoint.y,7);

		var dir = '';
		for (var i = 0; i < 6; i++)
		{
			var xi = x.substr(i, 1);
			var yi = y.substr(i, 1);
			dir += "/" + xi + yi;
		}

		var url = L.Util.template(this._url, {s: this._getSubdomain(tilePoint)});
		//console.log( url.replace( '{tms}', z + dir + "/" + x + y  ) );
		return url + z + dir + "/" + x + y + this._ext;

	}
} );

/************************************************************************

GSI.LayersJSON
	layers.json,layers.txt読み込み

************************************************************************/


GSI.LayersJSON = L.Class.extend( {
	includes: L.Mixin.Events,

	ajax : null,
	layers : [],
	visibleLayers: [],
	visibleLayersHash : {},

	currentFileIndex : -1,

	options : {
		files : [ "layers.txt" ]
	},

	initialize : function (options)
	{
		options = L.setOptions(this, options);

		if ( options.layers )
		{
			this.options.layers = $.extend( true, [], options.layers );

			this._loadingData= [];
			for ( var i=0; i<this.options.layers.length; i++ )
			{
				this._loadingData.push( {
					url : this.options.layers[i],
					layers : []
				} );
			}
		}


		if ( !this.options.visibleLayers ) this.options.visibleLayers = [];

		for ( var i=0; i<this.options.visibleLayers.length; i++ )
		{
			var layerData = this.options.visibleLayers[i];
			var info = {
				id : layerData.id,
				idx : this.visibleLayers.length,
				initialOpacity : layerData.opacity
			};
			this.visibleLayers.push( info );
			this.visibleLayersHash[ layerData.id ] = info;
		}
	},


	setHasTileList : function( tileIdList )
	{
		this.hasTileList = tileIdList;
		this.refreshHasState();
	},

	refreshHasState : function()
	{
		if ( !this.hasTileList || !this.layers ) return;
		for ( var i=0; i<this.layers.length; i++ )
		{
			var info = this.layers[i];
			info.hasTile = ( this.hasTileList[ info._cocotileId ] == true  || !info.cocotile );
		}

	},

	load : function()
	{
		if ( this.ajax )
		{
			try
			{
				this.ajax.abort();
			}
			catch( e )
			{

			}
			this.ajax = null;
		}

		if ( location.protocol == 'file:' || this.options.layersJSON )
		{
			if ( this.options.layersJSON )
			{

				this._timerId = setTimeout( L.bind( function(){
					clearTimeout( this._timerId  );

					this._timerId  = null;

					this._data = this.options.layersJSON;
					this.layers = [];
					this._initializeData( this._data, null );
					this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers } );

				}, this ), 0 );

			}
			else
			{
				var dlg = new GSI.Modal.FileSelectDialog({title:'layers.txtファイルを選択してください'});
				dlg.on( "positive", L.bind( this._onFileLoad, this ) );
				dlg.on( "negative", L.bind( this._onLoadErrorExit, this ) );
				dlg.show();
			}

		}
		else
		{
			if ( this._loadingData )
			{
				this.currentFileIndex = -1;
				this._loadNext();
			}
			else
			{
				this.ajax = $.ajax({
					type: "GET",
					url: "layers.txt",
					dataType: "text",
					cache:false,
					success : L.bind(this._onLoad, this),
					error : L.bind(this._onLoadError, this)
				});
			}

		}
	},
	_loadNext : function()
	{
		this.currentFileIndex++;

		if ( this.currentFileIndex >= this._loadingData.length )
		{

			//this._onLoadErrorExit();

			this._data = [];

			for ( var i=0; i<this._loadingData.length; i++ )
			{
				//var layers = this._loadingData[i];
				// concatは？
				for ( var j=0; j<this._loadingData[i].layers.length; j++ )
				{
					this._data.push( this._loadingData[i].layers[j] );
				}

			}



			this._loadingData = null;

			this._original = $.extend(true, [], this._data);
			this.layers = [];

			this._initializeData( this._data, null );

			this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers } );
			return;
		}

		var url = this._loadingData[ this.currentFileIndex ].url;

		this.ajax = $.ajax({
			type: "GET",
			url: url,
			dataType: "text",
			cache:false,
			success : L.bind(this._onLoad, this),
			error : L.bind(this._onLoadError, this)
		});
	},
	/*
	_loadNext : function()
	{
		this.currentFileIndex++;

		if ( this.currentFileIndex >= this.options.files.length )
		{

			this._onLoadErrorExit();

			return;
		}

		var url = this.options.files[ this.currentFileIndex ];

		this.ajax = $.ajax({
			type: "GET",
			url: url,
			dataType: "text",
			cache:false,
			success : L.bind(this._onLoad, this),
			error : L.bind(this._onLoadError, this)
		});
	},
	*/
	_onLoad : function(data)
	{
		var json = JSON.parse(data);

		if ( this._loadingData )
		{
			this._loadingData[ this.currentFileIndex ].layers = json.layers;
			this._loadNext();
		}
		else
		{
			if ( json.layers )
			{
				this._data = json.layers;

				this._original = $.extend(true, [], this._data);
				this.layers = [];

				this._initializeData( this._data, null );

				this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers } );
			}
			else this._onLoadError();
			return;
		}
		//this.tree = JSON.parse(data);
		//this._original = $.extend(true, [], this.tree);
		//this.layers = [];

		//this._initTree( this.tree, null );

		//this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers } );
	},

	getOriginal : function()
	{
		return this._original;
	},

	_onFileLoad : function(e)
	{
		this._data = JSON.parse(e.text);
		this._original = $.extend(true, [], this._data);
		this.layers = [];

		this._initializeData( this._data, null );
		this.fire( "load", { tree: this._data, visibleLayers : this.visibleLayers } );
	},

	_initializeData : function( data, parent )
	{
		if ( !data ) return;

		//var tree = data.layers;
		this._initializeTree( data, parent );
		this.tree = data;
	},

	_url2LayerType : function( url )
	{
		if ( !url ) return "";
		url = $.trim( url );

		if ( url.match( /\{tms\}/ ) )
		{
			return "tms";
		}

		if ( url.match( /photoprot\.php/ ) )
		{
			return "kml";
		}

		var ext = "";
		var layerType = "";
		var matchResult = url.match( /.*\.([^.]+$)/ );
		// 拡張子
		if (  matchResult ) ext = matchResult[1]





		// kml
		if ( ext == "kml" )
		{
			layerType = "kml";
			return layerType;
		}

		// タイルかどうか
		if ( url.match( /(\{x\})/ ) )
		{
			switch( ext )
			{
				case "geojson":
					layerType = "geojson_tile";
					break;
				case "topojson":
					layerType = "topojson_tile";
					break;
				default:
					layerType = "tile";
					break;
			}
		}
		else
		{
			switch( ext )
			{
				case "geojson":
				case "topojson":
				case "kml":
					layerType = ext;
					break;
			}

		}

		return layerType;


	},

	_getFolderId : function(lv)
	{
		if ( !this._currentFolderIdList ) this._currentFolderIdList = {};

		if ( !this._currentFolderIdList[ '' + lv ] )
			this._currentFolderIdList[ '' + lv ]  = 1;

		var result = this._currentFolderIdList[ '' + lv ] ;


		this._currentFolderIdList[ '' + lv ] ++;

		return result;

	},

	_initializeTree : function( tree, parent )
	{
		if ( !tree ) return;

		var folderCount = 0;

		for ( var i=0; i<tree.length; i++ )
		{
			if ( tree[i].type == "Layer" ) //!tree[i].children )
			{
				var info = tree[i];
				info.layerType = this._url2LayerType( info.url );
				info._cocotileId = '';
				if ( info.cocotile  )
				{
					var matchArr = info.url.match(/\/xyz\/([^\/]+)\//);
					if ( matchArr )
					{
						info._cocotileId = matchArr[1];
						if (  this.hasTileList )
							info.hasTile = ( this.hasTileList[ info._cocotileId ] == true );
					}
				}

				if ( this.visibleLayersHash[ info.id ] )
				{
					var layerInfo = this.visibleLayersHash[ info.id ];
					info.initialOpacity =layerInfo.initialOpacity;
					this.visibleLayersHash[ info.id ].info = info;
				}
				this.layers.push( info );
			}
			else
			{
				if ( !tree[ i ] .id )
				{
					tree[ i ] .id = ( parent ? parent.id + '_' + folderCount : 'f' + folderCount );
					folderCount ++;

					//console.log( tree[ i ] .id + '/' + tree[ i ] .title );
				}
			}
			tree[i].parent = parent;

			this._initializeTree( tree[i].entries, tree[i]);
		}

	},


	_onLoadError : function()
	{
		if ( this._loadingData )
			this._loadNext();
		else
			alert( 'レイヤー設定ファイルが読み込めませんでした。' );
	},


	_onFileLoadErrorRetry : function()
	{
		this.reader = new FileReader();
		this.reader.onload = L.bind( this._onFileLoad, this);
		this.reader.onerror = L.bind( this._onLoadErrorExit, this);
		this.reader.readAsText("./layer.txt");
	},


	_onLoadErrorExit : function()
	{
		//GSI.Modal.Message.show( 'レイヤー設定ファイルが読み込めませんでした。',{closeBtnVisible:false, className:"abc"} );

		//alert( 'レイヤー設定ファイルが読み込めませんでした。' );
	}
} );






/************************************************************************

GSI.MiniMap
	MiniMap

************************************************************************/

GSI.MiniMap = L.Class.extend( {

	initialize : function( map, options )
	{
		this.map = map;
	},

	setVisible : function( visible )
	{
		if ( visible )
		{
			this.show();
		}
		else
		{
			this.hide();
		}
	},


	getVisible : function()
	{
		return ( this.miniMap  ? true : false );

	},

	show: function()
	{
		if ( !this.miniMap )
		{
			var baseLayer = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png' );
			this.miniMap = new L.Control.MiniMap(baseLayer, { toggleDisplay: false }).addTo(this.map);
		}
	},

	hide : function()
	{

		if ( this.miniMap  )
		{
			this.map.removeControl( this.miniMap );
			this.miniMap = null;
		}
	}

} );



/************************************************************************

GSI.COCOTileLayer
	ココタイル

************************************************************************/
GSI.COCOTileLayer = L.Class.extend({
	includes: L.Mixin.Events,
	visible : true,
	options: {
		minZoom: 0,
		maxZoom: 18,
		tileSize: 256,
		subdomains: 'abc',
		errorTileUrl: '',
		zoomOffset: 0,
		refreshInterval: 1000,
		/*
		maxNativeZoom: null,
		zIndex: null,
		tms: false,
		continuousWorld: false,
		noWrap: false,
		zoomReverse: false,
		detectRetina: false,
		reuseTiles: false,
		bounds: false,
		*/
		unloadInvisibleTiles: L.Browser.mobile,
		updateWhenIdle: L.Browser.mobile
	},

	initialize: function (map, url, options) {
		this.map = map;
		options = L.setOptions(this, options);
		this.visible = options.visible;
		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);
			options.zoomOffset++;

			if (options.minZoom > 0) {
				options.minZoom--;
			}
			this.options.maxZoom--;
		}

		if (options.bounds) {
			options.bounds = L.latLngBounds(options.bounds);
		}

		this._url = url;

		var subdomains = this.options.subdomains;

		if (typeof subdomains === 'string') {
			this.options.subdomains = subdomains.split('');
		}

		if ( options.visible )
		{

			this.addTo( this.map );
		}
	},


	onAdd: function (map) {
		this._map = map;

		this._reset();
		this._update();


		map.on({
			'viewreset': this._reset,
			'moveend': this._moveend,
			'movestart': this._movestart
		}, this);



	},


	addTo: function (map) {
		this.visible = true;
		map.addLayer(this);
		return this;
	},

	getVisible : function()
	{
		return this.visible;
	},


	setVisible : function( on)
	{
		if ( on )
		{
			this.addTo( this.map );
		}
		else if ( this._map )
		{

			this.visible = false;
			this.map .removeLayer( this );
			this.fire('hide', null );
		}

	},

	refresh : function()
	{
		if ( this.visible )
		{
			this._reset();
			this._update();
		}
	},

	onRemove: function (map) {
		//this._container.parentNode.removeChild(this._container);

		map.off({
			'viewreset': this._reset,
			'moveend': this._update,
			'movestart': this._movestart
		}, this);


		this._map = null;
	},


	_reset: function (e) {

		if ( this._tiles )
		{
			for ( var id in this._tiles )
			{
				var tile = this._tiles[ id ];
				if ( tile.ajax )
				{
					tile.ajax.abort();
					tile.ajax = null;
				}
			}
		}

		if ( this.refreshTimerId )
		{
			clearTimeout( this.refreshTimerId );
			this.refreshTimerId = null;
		}

		this._haveTiles = {};
		this._tiles = {};
		this._tilesToLoad = 0;

	},


	_moveend : function() {
		if (!this._map) { return; }

		this.refreshTimerId =  setTimeout(
			L.Util.bind( this._timerRefresh, this ),
			this.options.refreshInterval );


	},

	_movestart : function() {

		this._reset();
	},

	_timerRefresh : function() {
		this._update();

	},

	_update : function() {

		if ( this.refreshTimerId )
		{
			clearTimeout( this.refreshTimerId );
			this.refreshTimerId = null;
		}

		if (!this._map) { return; }

		var map = this._map,
		    bounds = this.map.getPixelBounds(),
		    zoom = this.map.getZoom(),
		    tileSize = this._getTileSize();

		if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
			return;
		}

		var tileBounds = L.bounds(
		        bounds.min.divideBy(tileSize)._floor(),
		        bounds.max.divideBy(tileSize)._floor());

		this._addTilesFromCenterOut(tileBounds);


	},


	_getTileSize: function () {
		var map = this._map,
		    zoom = this.map.getZoom() + this.options.zoomOffset,
		    zoomN = this.options.maxNativeZoom,
		    tileSize = this.options.tileSize;

		if (zoomN && zoom > zoomN) {
			tileSize = Math.round(this.map.getZoomScale(zoom) / this.map.getZoomScale(zoomN) * tileSize);
		}

		return tileSize;
	},

	_tileShouldBeLoaded: function (tilePoint) {
		if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
			return false; // already loaded
		}

		var options = this.options;

		if (!options.continuousWorld) {
			var limit = this._getWrapTileNum();

			// don't load if exceeds world bounds
			if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
				tilePoint.y < 0 || tilePoint.y >= limit.y) { return false; }
		}

		if (options.bounds) {
			var tileSize = options.tileSize,
			    nwPoint = tilePoint.multiplyBy(tileSize),
			    sePoint = nwPoint.add([tileSize, tileSize]),
			    nw = this._map.unproject(nwPoint),
			    se = this._map.unproject(sePoint);

			// TODO temporary hack, will be removed after refactoring projections
			// https://github.com/Leaflet/Leaflet/issues/1618
			if (!options.continuousWorld && !options.noWrap) {
				nw = nw.wrap();
				se = se.wrap();
			}

			if (!options.bounds.intersects([nw, se])) { return false; }
		}

		return true;
	},

	_addTilesFromCenterOut: function (bounds) {
		var queue = [],
		    center = bounds.getCenter();

		var j, i, point;

		for (j = bounds.min.y; j <= bounds.max.y; j++) {
			for (i = bounds.min.x; i <= bounds.max.x; i++) {
				point = new L.Point(i, j);

				if (this._tileShouldBeLoaded(point)) {
					queue.push(point);
				}
			}
		}

		var tilesToLoad = queue.length;

		if (tilesToLoad === 0) { return; }

		queue.sort(function (a, b) {
			return a.distanceTo(center) - b.distanceTo(center);
		});

		this._tilesToLoad += tilesToLoad;

		for (i = 0; i < tilesToLoad; i++) {
			this._addTile(queue[i]);
		}

		this.fire('loadstart', null );
	},

	_getTilePos: function (tilePoint) {
		var origin = this._map.getPixelOrigin(),
		    tileSize = this._getTileSize();

		return tilePoint.multiplyBy(tileSize).subtract(origin);
	},

	_addTile: function (tilePoint) {
		var tilePos = this._getTilePos(tilePoint);

		var tile = {};//this._getTile();
		this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
		this._loadTile(tile, tilePoint);

	},


	_resetTile: function (/*tile*/) {},

	_adjustTilePoint: function (tilePoint) {

		var limit = this._getWrapTileNum();

		if (!this.options.continuousWorld && !this.options.noWrap) {
			tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
		}

		if (this.options.tms) {
			tilePoint.y = limit.y - tilePoint.y - 1;
		}

		tilePoint.z = this._getZoomForUrl();
	},
	_getZoomForUrl: function () {

		var options = this.options,
		    zoom = this._map.getZoom();

		if (options.zoomReverse) {
			zoom = options.maxZoom - zoom;
		}

		zoom += options.zoomOffset;

		return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
	},


	_getWrapTileNum: function () {
		var crs = this._map.options.crs,
		    size = crs.getSize(this._map.getZoom());
		return size.divideBy(this._getTileSize())._floor();
	},

	getTileUrl: function (tilePoint) {
		return L.Util.template(this._url, L.extend({
			s: this._getSubdomain(tilePoint),
			z: tilePoint.z,
			x: tilePoint.x,
			y: tilePoint.y
		}, this.options));
	},
	_getSubdomain: function (tilePoint) {
		var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
		return this.options.subdomains[index];
	},
	_loadTile: function (tile, tilePoint) {

		this._adjustTilePoint(tilePoint);
		tile.src = this.getTileUrl(tilePoint);

		tile.ajax = $.ajax({
			url: tile.src,
			cache: false,
			crossDomain : true,
			success:  L.Util.bind( this._tileLoaded, this, tile ),
			error : function(e) { } //console.log( e );}
		});
		/*
		var target = document.createElement('script');
		target.charset = 'utf-8';
		target.src = 'http://portal.cyberjapan.jp/GsiJsLibrary/interface.php?callback=hoge&request='+
			encodeURIComponent (tile.src ) ;
		document.body.appendChild(target);
		function hoge(result) {

		}

		return;
		var parameter = {};
		parameter['request'] = tile.src;

		tile.ajax = $.ajax({

			type: "GET",
			url:"http://portal.cyberjapan.jp/GsiJsLibrary/interface.php",
			data: parameter,
			dataType: "jsonp",
			timeout: 30000,
			success: L.bind( this._tileLoaded, this, tile )

		});
		*/
	},

	_tileLoaded : function(tile) {
		if ( tile.ajax )
		{
			var lines = tile.ajax.responseText.split( "\n" );
			if ( lines.length > 0 )
			{
				var line = lines[ 0 ];
				var ids = line.split( ',' );

				for ( var i=0; i< ids.length; i ++ )
				{
					var tileId = ids[ i ];
					this._haveTiles[ tileId ] = true;
				}
			}

			tile.ajax = null;
		}
		tile.loaded = true;

		for ( var id in this._tiles )
		{
			var tile = this._tiles[ id ];
			if ( tile.ajax || !tile.loaded )
			{
				return;
			}
		}
		if ( this.options.onLoad ) this.options.onLoad( this._haveTiles );
		this.fire('load', { tileIds : this._haveTiles } );


		// end

	}

} );




/************************************************************************

GSI.Links

************************************************************************/
GSI.Links ={};

GSI.Links.getURL = function( id, center, z ) {
	if ( id == "gsi3d" )
	{
		if ( GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 ) )
		{
			alert( 'お使いのWebブラウザは地理院地図3Dに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
		if ( z >= 15 ) z = 14;
		return 'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z=' + z + '&lat=' + center.lat + '&lon=' + center.lng;
	}
	else if ( id == 'mapion' )
	{
		var zoomLevel = 10;

		if(z <= 6)			{zoomLevel = 1;}
		else if(z <= 8)		{zoomLevel = 2;}
		else if(z <= 9)		{zoomLevel = 3;}
		else if(z <= 10)	{zoomLevel = 4;}
		else if(z <= 11)	{zoomLevel = 5;}
		else if(z <= 13)	{zoomLevel = 6;}
		else if(z <= 14)	{zoomLevel = 7;}
		else if(z <= 16)	{zoomLevel = 8;}
		else if(z <= 17)	{zoomLevel = 9;}
		else				{zoomLevel = 10;}
		return 'http://www.mapion.co.jp/m/' + center.lat + '_' + center.lng + '_' + zoomLevel + '/?wgs=1';
	}
	else if ( id == 'itsumonavi' )
	{
		var zoomLevel = 18;
		var japanP = GSI.Utils.world2Japan(center);
		var y = Math.round(japanP.y * 3600 * 1000);
		var x = Math.round(japanP.x * 3600 * 1000);

		if(z <= 5)			{zoomLevel = 1;}
		else if(z <= 6)		{zoomLevel = 2;}
		else if(z <= 7)		{zoomLevel = 3;}
		else if(z <= 8)		{zoomLevel = 4;}
		else if(z <= 9)		{zoomLevel = 6;}
		else if(z <= 10)	{zoomLevel = 7;}
		else if(z <= 11)	{zoomLevel = 8;}
		else if(z <= 12)	{zoomLevel = 9;}
		else if(z <= 13)	{zoomLevel = 10;}
		else if(z <= 14)	{zoomLevel = 11;}
		else if(z <= 15)	{zoomLevel = 13;}
		else if(z <= 16)	{zoomLevel = 14;}
		else if(z <= 17)	{zoomLevel = 16;}
		else				{zoomLevel = 18;}

		return "http://www.its-mo.com/z-" + y +"-" + x + "-" + zoomLevel + ".htm";
	}
	else
	{
		return id;
	}
};








/************************************************************************

GSI.Control.BaseLayerSelector

************************************************************************/
GSI.BaseLayerSelector = L.Class.extend( {

	includes: L.Mixin.Events,

	initialize : function( map, baseLayer, tiles, options )
	{
		this.map = map;
		this.baseLayer = baseLayer;
		this.tiles = tiles;
		options = L.setOptions(this, options);
	},

	show : function(bottom)
	{
		this._create(bottom);
		this._container.fadeIn('fast');
	},

	hide : function()
	{
		if ( this._container )
		{
			this._container
			.fadeOut( 'fast', L.bind( function(){
				this._container.remove();
				delete this._container;
				this._container = null;
			}, this ) );
		}
	},

	_create : function(bottom)
	{
		if ( this._container ) return;

		this._container = $( '<div>' ).addClass( 'leaflet-buttons-control-baselayerselector' ).css({
			"z-index":10000,
			"position" : "absolute",
			"left" : "10px",
			"bottom" : bottom + "px"
		}).hide();

		var table = $( "<table>" );
		var tbody = $( "<tbody>" );
		var tr = $( "<tr>" );


		for ( var i= 0; i<this.tiles.length; i++ )
		{
			var className = '';
			if( i== this.baseLayer.getActiveIndex() )
			{
				className = 'active';
			}

			var td = $("<td>" ).css( {"text-align":"center"} ).addClass( className );
			var div = $( '<div>' );
			var a = $( '<a>' ).attr( { title:'背景地図を「' + this.tiles[i ].title+ '」に変更">','href':'javascript:void(0);', "tileindex":i} );
			var img = $( "<img>" )
				.css( { width:"60px", height:"60px"} )
				.attr( { 'src' : this.tiles[i ].icon } );

			a.append( img );
			div.append( a );
			td.append( div );


			//var title = $( '<a title="凡例・関連情報を表示" href="' + this.tiles[i].legendUrl + '" >' + this.tiles[i ].title + '</a>' );

			var title = $( '<a>' ).attr( {'title' : '凡例・関連情報を表示'} ).html( this.tiles[i ].title  );

			if ( this.tiles[i].legendUrl && this.tiles[i].legendUrl != '' )
			{
				title.attr( { 'href' : this.tiles[i].legendUrl, 'target' : '_blank' } );
			}
			else
			{
				title.attr( { 'href' : 'javascript:void(0);'} );
			}
			td.append( title );
			tr.append( td );


			a.click( L.bind( function(a){
				this.fire( "click",{activeIndex:a.attr( 'tileindex' )} );
			}, this, a ) );


			/*
			L.DomEvent
				.addListener(a[0], 'click', this._clicked2, { 'this_' : this, "target_" : a[0] } );
			*/
		}

		tbody.append( tr );
		table.append( tbody );
		this._container.append( table );


		var frame = $( '<div>' ).addClass( 'control' );

		table = $( "<table>" );
		tbody = $( "<tbody>" );

		// 透過率

		tr = $( "<tr>" );
		var td =$( "<td>" ).html( '透過率' );
		tr.append( td);

		var td =$( '<td width="200">' );


		var opacity = this.baseLayer.getOpacity();

		var opacitySlider = $( '<div style="margin-left:12px;">' );
		var sliderChangeHandler = L.bind( function(opacitySlider) {
				var opacity = opacitySlider.slider( 'option' , 'value');
				opacity = (100 - opacity) / 100;
				this.baseLayer.setOpacity( opacity );
			}, this, opacitySlider );

		opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.floor(( 1 - opacity ) * 100 ),
			"slide" : sliderChangeHandler,
			"change" : sliderChangeHandler,
			"stop" : sliderChangeHandler
		});
		td.append( opacitySlider );
		tr.append (td);

		tbody.append( tr );


		// グレースケール
		if (
			( !GSI.Utils.Browser.ie && !GSI.Utils.Browser.isAndroid )
			||
			( GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version < 10 || ( CONFIG.USEIE10GRAYSCALE && GSI.Utils.Browser.version == 10 ) || ( CONFIG.USEIE11GRAYSCALE && GSI.Utils.Browser.version >= 11 ) ) )
		 )
		{
			tr = $( "<tr>" );

			var td =$( '<td colspan="2">' );

			var table2 = $( '<table>');
			var tbody2 = $( '<tbody>' );


			var tr2 = $( "<tr>" );
			var td2 =$( "<td>" );

			/*
			var grayscaleCheck = $('<input>').attr( { id:'GSI_COTNROL_BaseLayerSelector_GRAYSCALE',type:'checkbox', checked:(this.baseLayer.getGrayScale())} );
			*/
			var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:(this.baseLayer.getGrayScale())} );

			var label = $( '<label for="' +  onOffSwitch.getId() + '"></label>' ).html( 'グレースケール' );
			td2.append( label );
			tr2.append( td2);


			td2 =$( "<td>" ).css( { "padding-left":"8px"} );
			td2.append( onOffSwitch.getElement() );
			tr2.append( td2);

			onOffSwitch.on( 'change', L.bind( function(onOffSwitch){

				this.baseLayer.setGrayScale( onOffSwitch.checked() );

			}, this, onOffSwitch ) );


			tbody2.append( tr2 );
			table2.append( tbody2 );



			td.append( table2 );
			tr.append( td );
			tbody.append( tr );

		}

		table.append( tbody );
		frame.append( table );

		this._container.append( frame );

		$( document.body ).append( this._container );

	}


} );

GSI.Control.BaseLayerSelector = L.Control.extend({
	options: {
		visible : true,
		position: 'topleft',
		'iconUrl': null,  // string
		'onClick': function(){},  // callback function
		'hideText': false,  // bool
		'maxWidth': 30,  // number
		'doToggle': true,  // bool
		'toggleStatus': false  // bool
	},

	tiles : [],
	activeIndex : 0,
	initialize: function ( map,tiles, options) {


		this.baseLayer = new GSI.BaseLayer(CONFIG.BASETILES, options.defaultMap, {
			errorTileUrl : 'image/map/no-data.png',
			attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>国土地理院</a>"
		});

		this.baseLayer.addTo(map);

		options = L.setOptions(this, options);
		this._button = {};
		if ( !options.visible ) return;

		map.on( 'mousedown', L.bind( this.onMapClick,this ) );
		map.on( 'touchstart', L.bind( this.onMapClick,this ) );


		this.tiles = tiles;
		this.options.position = options.position;
		this.setButton(options);
	},

	getBaseLayer : function()
	{
		return this.baseLayer;
	},

	onMapClick : function()
	{
		/*
		if(this._button.toggleStatus) {	//currently true, remove class
			L.DomUtil.removeClass(this._container.childNodes[0],'leaflet-buttons-control-toggleon');
			this._update();
			this.toggle();
		}
		*/
		if ( this._selector )
		{
			this._selector.hide();
		}
		$(this._container ).fadeIn( 'fast' );
	},



	onAdd: function (map) {
		this._map = map;
		var container = $("<div>").css({marin:0,padding:0}).addClass("leaflet-control-baselayerselector");
		//L.DomUtil.create('div', 'leaflet-control-baselayerselector');

		this._container = container[0];
		if ( !this.options.visible ) this._container.style.display="none";
		this._update();
		return this._container;
	},

	onRemove: function (map) {
	},

	setButton: function (options) {
		var button = {
		'text': options.text,                 //string
		'iconUrl': options.iconUrl,           //string
		'onClick': options.onClick,           //callback function
		'hideText': !!options.hideText,         //forced bool
		'maxWidth': options.maxWidth || 70,     //number
		'doToggle': true,			//bool
		'toggleStatus': false //bool
		};


		this._button = button;
		this._update();
	},


	destroy: function () {
		this._button = {};
		this._update();
	},

	toggle: function (e) {
		if ( !this.options.visible ) return;

		if(typeof e === 'boolean'){
			this._button.toggleStatus = e;
		}
		else{
			this._button.toggleStatus = !this._button.toggleStatus;
		}
		this._update();
	},

	_update: function () {
		if (!this._map) {
		  return;
		}
		if ( !this.options.visible ) return;

		/*
		if ( this._container )
		{
			$( this._container ).fadeOut( 'fast', L.bind( function(){
				$( this._container ).empty();
				this._makeButton(this._button, true);
			}, this ) );
		}
		else
		*/
		{
			if ( this._container ) $( this._container ).empty();
			this._makeButton(this._button);
		}
	},

	_makeButton: function (button, fadeIn) {


		var newButton = $("<div>").addClass( 'leaflet-buttons-control-baselayerselector' );
		$(this._container).append( newButton );

		//L.DomUtil.create('div', 'leaflet-buttons-control-baselayerselector', this._container);
		//if(button.toggleStatus)
		//	newButton.addClass("leaflet-buttons-control-baselayerselector-toggleon")
		//	L.DomUtil.addClass(newButton,'leaflet-buttons-control-baselayerselector-toggleon');


		//if(this._button.toggleStatus)
		if ( false )
		{

			button.text = '';

			var table = $( "<table>" );
			var tbody = $( "<tbody>" );
			var tr = $( "<tr>" );


			for ( var i= 0; i<this.tiles.length; i++ )
			{
				var className = '';
				if( i== this.baseLayer.getActiveIndex() )
				{
					className = 'active';
				}

				var td = $("<td>" ).css( {"text-align":"center"} ).addClass( className );
				var div = $( '<div>' );
				var a = $( '<a>' ).attr( { title:'背景地図を「' + this.tiles[i ].title+ '」に変更">','href':'javascript:void(0);', "tileindex":i} );
				var img = $( "<img>" )
					.css( { width:"60px", height:"60px"} )
					.attr( { 'src' : this.tiles[i ].icon } );

				a.append( img );
				div.append( a );
				td.append( div );


				//var title = $( '<a title="凡例・関連情報を表示" href="' + this.tiles[i].legendUrl + '" >' + this.tiles[i ].title + '</a>' );

				var title = $( '<a>' ).attr( {'title' : '凡例・関連情報を表示'} ).html( this.tiles[i ].title  );

				if ( this.tiles[i].legendUrl && this.tiles[i].legendUrl != '' )
				{
					title.attr( { 'href' : this.tiles[i].legendUrl, 'target' : '_blank' } );
				}
				else
				{
					title.attr( { 'href' : 'javascript:void(0);'} );
				}
				td.append( title );
				tr.append( td );
				/*
				tr.append( td );
				var newText = L.DomUtil.create('div', className, newButton);
				button.text =
					'<img width="54" height="54" src="' + this.tiles[i ].icon + '">' +
					'<div style="text-align:center;">' + this.tiles[i ].title + '</div>';

				newText.innerHTML = button.text;
				newText.setAttribute( 'tileindex', i );
				*/
				L.DomEvent
					.addListener(a[0], 'click', this._clicked2, { 'this_' : this, "target_" : a[0] } );
				/*
				L.DomEvent
					.addListener(title[0], 'click', function(e){ if ( this.href_ && this.href_ != '' ) window.open(this.href_);}, { "href_":this.tiles[i].legendUrl} );
				*/
			}

			tbody.append( tr );
			table.append( tbody );
			newButton.append( table );


			var frame = $( '<div>' ).addClass( 'control' );

			table = $( "<table>" );
			tbody = $( "<tbody>" );

			// 透過率

			tr = $( "<tr>" );
			var td =$( "<td>" ).html( '透過率' );
			tr.append( td);

			var td =$( '<td width="200">' );


			var opacity = this.baseLayer.getOpacity();

			var opacitySlider = $( '<div style="margin-left:12px;">' );
			var sliderChangeHandler = L.bind( function(opacitySlider) {
					var opacity = opacitySlider.slider( 'option' , 'value');
					opacity = (100 - opacity) / 100;
					this.baseLayer.setOpacity( opacity );
				}, this, opacitySlider );

			opacitySlider.slider({range: "min",min: 0,max: 100, value: Math.floor(( 1 - opacity ) * 100 ),
				"slide" : sliderChangeHandler,
				"change" : sliderChangeHandler,
				"stop" : sliderChangeHandler
			});
			td.append( opacitySlider );
			tr.append (td);

			tbody.append( tr );


			// グレースケール
			if (
				( !GSI.Utils.Browser.ie && !( GSI.Utils.Browser.isChrome && GSI.Utils.Browser.isAndroid ) )
				||
				( GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version < 10 || ( CONFIG.USEIE10GRAYSCALE && GSI.Utils.Browser.version == 10 ) || ( CONFIG.USEIE11GRAYSCALE && GSI.Utils.Browser.version >= 11 ) ) )
			 )
			{
				tr = $( "<tr>" );

				var td =$( '<td colspan="2">' );

				var table2 = $( '<table>');
				var tbody2 = $( '<tbody>' );


				var tr2 = $( "<tr>" );
				var td2 =$( "<td>" );

				/*
				var grayscaleCheck = $('<input>').attr( { id:'GSI_COTNROL_BaseLayerSelector_GRAYSCALE',type:'checkbox', checked:(this.baseLayer.getGrayScale())} );
				*/
				var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:(this.baseLayer.getGrayScale())} );

				var label = $( '<label for="' +  onOffSwitch.getId() + '"></label>' ).html( 'グレースケール' );
				td2.append( label );
				tr2.append( td2);


				td2 =$( "<td>" ).css( { "padding-left":"8px"} );
				td2.append( onOffSwitch.getElement() );
				tr2.append( td2);

				onOffSwitch.on( 'change', L.bind( function(onOffSwitch){

					this.baseLayer.setGrayScale( onOffSwitch.checked() );

				}, this, onOffSwitch ) );


				tbody2.append( tr2 );
				table2.append( tbody2 );



				td.append( table2 );
				tr.append( td );
				tbody.append( tr );

			}

			table.append( tbody );
			frame.append( table );

			newButton.append( frame );

			//L.DomEvent.addListener(newButton, 'click', L.DomEvent.stop);
			L.DomEvent.disableClickPropagation(newButton[0]);
		}
		else
		{
			var img = $( "<img>" ).css({width:"34px", height:"34px"}).attr( { src:this.tiles[this.baseLayer.getActiveIndex() ].icon} );
			newButton.append( img );
			//var span = L.DomUtil.create('span', 'leaflet-buttons-control-text', newButton);
			//var text = document.createTextNode(button.text);  //is there an L.DomUtil for this?

			L.DomEvent
				.addListener(newButton[0], 'click', L.DomEvent.stop)
				.addListener(newButton[0], 'click', this._clicked,this);
			L.DomEvent.disableClickPropagation(newButton[0]);
		}

		//if ( fadeIn ) $( this._container ).sledeDown( 'fast' );

		return newButton;

	},
	_clicked2: function (e) {
		if ( this.this_.baseLayer.getActiveIndex() != this.target_.getAttribute( 'tileindex' ) )
		{
			this.this_.baseLayer.setActiveIndex( this.target_.getAttribute( 'tileindex' ));
		}

		this.this_._clicked();
	},
	_clicked: function () {  //'this' refers to button

		/*
		if(this._button.doToggle)
		{
			if(this._button.toggleStatus) {	//currently true, remove class
				L.DomUtil.removeClass(this._container.childNodes[0],'leaflet-buttons-control-toggleon');
			}
			else{
				L.DomUtil.addClass(this._container.childNodes[0],'leaflet-buttons-control-toggleon');
			}

			 this._update();
			this.toggle();
		}
		*/

		if ( !this._selector )
		{
			this._selector = new GSI.BaseLayerSelector ( map, this.baseLayer, this.tiles, this.options );
			this._selector .on( "click",L.bind( function(e){

				if ( this.baseLayer.getActiveIndex() != e.activeIndex )
				{
					this.baseLayer.setActiveIndex( e.activeIndex);
				}
				this.onMapClick();
			}, this ) );
		}

		var pos = $( this._container ).offset();
		var sz = GSI.Utils.getScreenSize();


		$( this._container ).fadeOut( 'fast' );
		this._selector.show( sz.h - ( pos.top + $( this._container).outerHeight( false ) ) );

		return;
	}

});







/************************************************************************

GSI.OnOffSwitch
	OnOffスイッチ

************************************************************************/
GSI.OnOffSwitch = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		className : "filetext",
		checked:true
	},
	classNames : {
		"onoff":"gsi_onoffswitch",
		"filetext":"gsi_onoffswitch_file_text",
		"visible":"gsi_onoffswitch_visible",
		"visibleall":"gsi_onoffswitch_visible_all",
		"usecocotile":"gsi_onoffswitch_usecocotile"

	},

	initialize : function (options)
	{
		options = L.setOptions(this, options);

		this._create();

	},

	getElement : function()
	{
		return this.frame;
	},

	getCheckBox : function()
	{
		return this.input;
	},
	getId : function()
	{
		return this.id;
	},
	_create : function()
	{
		var id = 'GSI_OnOffSwitch_' + GSI.Utils.getCurrentID();
		this.id = id;

		this.frame = $("<span>").addClass( this.classNames[ this.options.className ] );
		this.input = $( '<input>' ).attr( {
				'type' : 'checkbox',
				'id' : id
			} ).addClass( 'checkbox' );
		this.frame.append(this.input);
		if ( this.options.checked )
		{
			this.input.attr({"checked": true} );
		}

		var label = $( '<label>' ).addClass( 'label' ).attr( {
				'for' : id
			} );

		var span = $( '<span>' ).addClass( 'inner' );
		label.append( span );

		span = $( '<span>' ).addClass( 'switch' );
		label.append( span );

		this.frame.append( label );

		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8 )
		{
			this._initCheckBoxIE8();
			this.frame.click( L.bind( this.onFrameClick, this  ) );
		}
		else
		{
			this.input.click( L.bind( function(){this.fire( 'change' );}, this  ) );
		}


	},

	_initCheckBoxIE8 : function()
	{
		if ( this.input.is( ":checked" ) )
		{
			this.frame.find( '.label,.inner' ).addClass("on_label_inner");
			this.frame.find( '.label,.switch' ).addClass("on_label_switch");
		}
		else
		{

			this.frame.find( '.label,.inner' ).removeClass("on_label_inner");
			this.frame.find( '.label,.switch' ).removeClass("on_label_switch");
		}
	},

	onFrameClick : function()
	{
		this.input.attr({"checked": !this.input.is( ":checked" )} );
		this._initCheckBoxIE8();
		this.fire( 'change' );
	},

	checked : function( value)
	{
		if ( value == true )
		{
			this.input.attr( {"checked": true} );
			this.input.prop( {"checked": true} );
		}
		else if ( value == false )
		{
			this.input.attr( {"checked": false} );
			this.input.prop( {"checked": false} );
		}

		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8 )
		{
			this._initCheckBoxIE8();
		}

		return this.input.is( ':checked' );
	}
});


/************************************************************************

GSI.Control.AccessCounter

************************************************************************/
GSI.Control.AccessCounter = L.Control.extend({
	options: {
		position: 'bottomright',
		url : '',
		refreshInterval : 0
	},

	retryCounter : 0,
	counter : null,

	initialize: function (options)
	{
		L.setOptions(this, options);
	},

	onAdd: function (map)
	{
    	this._map = map;
		this._container = L.DomUtil.create('div', 'gsi_control_accesscounter');
		if ( this.options.url != '' )
		{
			this._update();
			this._load();
		}
		$( this._container ).attr( {title:GSI.TEXT.ACCESSCOUNTER.TOOLTIP} ).tooltip( {
			position : { my: "right bottom", at: "right top", collision: "flipfit" },
			tooltipClass : "gsi_control_accesscounter_tooltip"
		} );

		return this._container;
	},

	onRemove: function (map) {
	},

	_load : function()
	{
		if( this.options.url == '' ) return;
		//if ( this.url.match(/(http|https):\/\/.+/) )
		if ( !CONFIG.FORCECORS && !GSI.Utils.isLocalUrl(this.options.url) )
		//if ( GSI.ClientMode .baseUrl && GSI.ClientMode .baseUrl != '' )
		{
			var parameter = {
				url : this.options.url,
				lf: 0
			};

			this.ajax = $.ajax({
				type: "GET",
				dataType: "jsonp",
				data: parameter,
				url: CONFIG.SERVERAPI.GETJSONP,
				success:  L.Util.bind( this._onLoad, this ),
				error:  L.Util.bind( this._onLoadError, this )
			});
		}
		else
		{
			this.ajax = $.ajax({
				type: "GET",
				dataType:"text",
				url : this.options.url,
				success:  L.Util.bind( this._onLoad, this ),
				error:  L.Util.bind( this._onLoadError, this )
			});
		}
	},

	_onLoad : function(result)
	{
		try
		{
			var data = null;
			if ( !result) return;
			if ( result.data )
			{
				data = result.data;

				//data = $.parseXML( result.data );
			}
			else data = result;

			this.counter = JSON.parse( data );

			if ( this._container ) this._update();

			this._next();
		}
		catch(e)
		{
			this._onLoadError();
		}
	},

	_next : function()
	{
		if ( this.options.refreshInterval > 0 )
		{
			if ( this._timerId )
			{
				clearTimeout( this._timerId );
				this._timerId = null;
			}
			//
			this._timerId = setTimeout( L.bind(this._load,this), this.options.refreshInterval);
		}
	},

	_retry : function()
	{
		if ( this._timerId )
		{
			clearTimeout( this._timerId );
			this._timerId = null;
		}

		this.retryCounter++;
		this._load();
	},

	_onLoadError : function()
	{
		if ( this._timerId )
		{
			clearTimeout( this._timerId );
			this._timerId = null;
		}

		if ( this.retryCounter < CONFIG.ACCESSCOUNTERRETRY )
		{
			// 10秒後にリトライ
			this._timerId = setTimeout( L.bind(this._retry,this), 10000);
		}
	},

	_update : function()
	{
		var today = new Date();
		var yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
		var todayCaption = ( '00' + ( today.getMonth() + 1 ) ).slice(-2) + '/' +( '00' + today.getDate() ).slice(-2);
		var yesterdayCaption = ( '00' + ( yesterday.getMonth() + 1 ) ).slice(-2) + '/' + ( '00' + yesterday.getDate() ).slice(-2);

		if (!this._map) return;
		if ( this.counter )
		{

			$(this._container).css({margin:0}).html(
				todayCaption + '&nbsp;' + this.counter.today + '、' +
				yesterdayCaption +'&nbsp;' + this.counter.yesterday + '、' +
				'総計&nbsp;' +  ( this.counter.total + '' ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			);
		}
		else
		{
			$(this._container).css({margin:0}).html(
				todayCaption + '&nbsp;--、' +
				yesterdayCaption +'&nbsp;--、' +
				'総計&nbsp;------'
			);
		}
	}


} );




/************************************************************************

GSI.Control.Spacer

************************************************************************/
GSI.Control.Spacer = L.Control.extend({
	options: {
		position: 'bottomleft'
	},

	counter : null,

	initialize: function (options)
	{
		L.setOptions(this, options);
	},

	setHeight: function(height)
	{
		$(this._container).css( {height:height + "px"} );
	},

	onAdd: function (map)
	{
    	this._map = map;
		this._container = L.DomUtil.create('div');
		$(this._container).css( { margin:0,padding:0, heght:0, width:0 } );
		return this._container;
	},

	onRemove: function (map) {
	}


} );


/************************************************************************

GSI.Control.Button

************************************************************************/
GSI.Control.Button = L.Control.extend({
  options: {
    position: 'topleft',
    maxWidth: "300px"
  },
  initialize: function (elem,options) {
    this._button = {};
    this.elem = elem;
    this.options.position = options.position;
    this.setButton(options);
  },

  onAdd: function (map) {
    this._map = map;
    var container = L.DomUtil.create('div', '');

    this._container = container;

    this._update();
    return this._container;
  },

  onRemove: function (map) {
  },

  setButton: function (options) {
    var button = {
      'text': options.text,
      'onClick': options.onClick,
      'class': options.className
    };

    this._button = button;
    this._update();
  },

  destroy: function () {
  	this._button = {};
  	this._update();
  },

  _update: function () {
    if (!this._map) {
      return;
    }

    this._container.innerHTML = '';
    this._makeButton(this._button);

  },

  _makeButton: function (button) {
    var newButton = this.elem;
    this.elem.style.color = '#fff';
    $(this._container).append( newButton );
    L.DomEvent
      .addListener(newButton, 'click', L.DomEvent.stop);
    L.DomEvent.disableClickPropagation(newButton);
    return newButton;

  }

});



GSI.Utils.encodeHTML = function( src)
{
	src = src.replace( '<' , '&lt;' );
	src = src.replace( '>' , '&gt;' );
	return src;

};

GSI.Utils.getInternetExplorerVersion = function (){
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	else if (navigator.appName == 'Netscape'){
		var ua = navigator.userAgent;
		var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	return rv;
};

GSI.Utils.Browser = {};
GSI.Utils.Browser.userAgent = window.navigator.userAgent.toLowerCase();

if (typeof document.documentElement.style.maxHeight != "undefined") {

	var ieVersion= GSI.Utils.getInternetExplorerVersion();


	if (ieVersion < 1 ){
	// IE 以外
	}else {
	// IE8 以降
		GSI.Utils.Browser.ie = true;
		GSI.Utils.Browser.version = ieVersion;
	}
} else {
	// IE 6.0 以下

	GSI.Utils.Browser.ie = true;
	GSI.Utils.Browser.version = 6;
}


GSI.Utils.Browser.isiPhone = GSI.Utils.Browser.userAgent.indexOf('iphone') >= 0;
GSI.Utils.Browser.isiPod = GSI.Utils.Browser.userAgent.indexOf('ipod') >= 0;
GSI.Utils.Browser.isiPad = GSI.Utils.Browser.userAgent.indexOf('ipad') >= 0;
GSI.Utils.Browser.isiOS = (GSI.Utils.Browser.isiPhone || GSI.Utils.Browser.isiPod || GSI.Utils.Browser.isiPad);
GSI.Utils.Browser.isAndroid = GSI.Utils.Browser.userAgent.indexOf('android') >= 0;
GSI.Utils.Browser.isSmartMobile = ( GSI.Utils.Browser.isiOS || GSI.Utils.Browser.isAndroid );
GSI.Utils.Browser.isChrome = GSI.Utils.Browser.userAgent.indexOf('chrome') != -1;

GSI.Utils.hasFileAPI =( window.File && window.FileReader && window.FileList && window.Blob );




GSI.Utils.getCurrentID = function() {

	var id = 1;
	if ( !GSI.Utils._currentID )
	{
		GSI.Utils._currentID = 1;
	}
	id = GSI.Utils._currentID;
	GSI.Utils._currentID++;
	return id;
};

GSI.Utils.isLocalUrl = function(url) {

	if ( ( GSI.ClientMode .baseUrl && GSI.ClientMode .baseUrl != '' ) || url.match(/(http|https):\/\/.+/) )
	{
		return false;
	}
	else
	{
		return true;
	}

};


GSI.Utils.flashPlayerVersion = null;

GSI.Utils.canUseFlashPlayer = function()
{
	if ( GSI.Utils.flashPlayerVersion == null )
	{
		GSI.Utils.flashPlayerVersion = GSI.Utils.getFlashPlayerVersion();

	}
	return ( GSI.Utils.flashPlayerVersion > 0 );
};


GSI.Utils.getFlashPlayerVersion = function()
{
	var result = 0;
	if(navigator.plugins && navigator.mimeTypes['application/x-shockwave-flash']){
		var plugin = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
		if(plugin){
			result = parseInt(plugin.description.match(/\d+\.\d+/));
		}
	} else {
		try{
			var flashOCX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
			if(flashOCX){
				result = parseInt(flashOCX[0]);
			}
		}catch(e){}
	}
	if(result <= 6){
		result = 0;
	}
	return result;
};


GSI.Utils.getCurrentPath = function()
{
	var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
	var port = _location.port;
	var pathName = _location.pathname;

	if ( pathName.length <= 0 || pathName.charAt( 0 ) != '/' )
		pathName = '/' + pathName;

	return _location.protocol + '//' +
		( _location.host ? _location.host: _location.hostname ) +
		pathName;

};

GSI.Utils.getTimeStampString = function() {
	var now = new Date();

	var year = now.getFullYear(); // 年
	var month = now.getMonth() + 1; // 月
	var day = now.getDate(); // 日
	var hour = now.getHours(); // 時
	var min = now.getMinutes(); // 分
	var sec = now.getSeconds(); // 秒
	var msec = now.getMilliseconds(); // ミリ秒
	var result =
		year + '' +
		( '00' + day ).slice(-2) +
		( '00' + month ).slice(-2)  +
		( '00' + hour ).slice(-2) +
		( '00' + min ).slice(-2) +
		( '00' + sec ).slice(-2) +
		msec ;
	return result;
};


GSI.Utils.getScreenSize = function() {
	return {
		w : window.innerWidth ? window.innerWidth: $(window).width(),
		h : window.innerHeight ? window.innerHeight: $(window).height()
	};
};

GSI.Utils.world2Japan = function(latLng){
	var worldLonLat = new Proj4js.Proj('EPSG:4326');
	var japanLonLat = new Proj4js.Proj('EPSG:4301');
	var worldP = new Proj4js.Point(latLng.lng,latLng.lat);
	var japanP = Proj4js.transform(worldLonLat,japanLonLat,worldP);
	return {x:japanP.x, y:japanP.y}
};


GSI.Utils.latLngToDMS = function(latLng) {
	var latD = Math.floor(latLng.lat);
	var latM = Math.floor( ( latLng.lat - latD ) * 60 );
	var latS = (latLng.lat-latD-(latM/60))*3600;

	if(latS==60){latS=0; latM=latM+1;};
	if(latM==60){latM=0; latD=latD+1;};

	var lngD = Math.floor(latLng.lng);
	var lngM = Math.floor( ( latLng.lng - lngD ) * 60 );
	var lngS = (latLng.lng-lngD-(lngM/60))*3600;

	if(lngS==60){lngS=0; lngM=lngM+1;};
	if(lngM==60){lngM=0; lngD=lngD+1;};

	return {
		lat : {
			d : latD, m:latM, s: latS
		},
		lng : {
			d : lngD, m:lngM, s: lngS
		}
	};
};








/************************************************************************

	旧地理院地図より

************************************************************************/


//2014年06月30日現在
GSI.ZUYOU_LIST = {		//左下の経度、左下の緯度、右上の経度、右上の緯度が順に秒単位で入っています。
"知床岬":{b200k:"知床岬11号-3",west:522805,south:159320,east:523385,north:159660},
"知床岳":{b200k:"知床岬11号-4",west:522835,south:159000,east:523415,north:159340},
"ルシャ川":{b200k:"知床岬15号-2",west:522385,south:159000,east:522965,north:159340},
"硫黄山":{b200k:"知床岬16号-1",west:522540,south:158680,east:523115,north:159020},
"羅臼":{b200k:"知床岬16号-2",west:522385,south:158380,east:522960,north:158720},
"知床五湖":{b200k:"知床岬16号-3",west:522000,south:158680,east:522575,north:159020},
"知床峠":{b200k:"知床岬16号-4",west:521935,south:158380,east:522510,north:158720},
"納沙布":{b200k:"標津4号-4",west:524565,south:155980,east:525135,north:156320},
"根室北部":{b200k:"標津8号-2",west:524060,south:155980,east:524630,north:156320},
"野付崎":{b200k:"標津11号-3",west:522840,south:156730,east:523410,north:157070},
"本別海":{b200k:"標津12号-4",west:522840,south:155980,east:523410,north:156320},
//"遠音別岳":{b200k:"標津13号-3",west:522040,south:158080,east:522615,north:158420}, 140630変更
"遠音別岳":{b200k:"標津13号-3",west:522060,south:158080,east:522635,north:158420},
"根室峯浜":{b200k:"標津13号-4",west:521935,south:157780,east:522510,north:158120},
"薫別":{b200k:"標津14号-3",west:521935,south:157480,east:522510,north:157820},
"伊茶仁":{b200k:"標津14号-4",west:521935,south:157180,east:522510,north:157520},
"標津":{b200k:"標津15号-1",west:522390,south:156880,east:522960,north:157220},
"尾岱沼":{b200k:"標津15号-2",west:522390,south:156580,east:522960,north:156920},
"川北":{b200k:"標津15号-3",west:521940,south:156880,east:522510,north:157220},
"俵橋":{b200k:"標津15号-4",west:521940,south:156580,east:522510,north:156920},
"床丹":{b200k:"標津16号-1",west:522410,south:156280,east:522980,north:156620},
"別海":{b200k:"標津16号-2",west:522390,south:155980,east:522960,north:156320},
"中春別":{b200k:"標津16号-3",west:521940,south:156280,east:522510,north:156620},
"豊原":{b200k:"標津16号-4",west:521940,south:155980,east:522510,north:156320},
"友知":{b200k:"根室5号-1",west:524190,south:155680,east:524760,north:156020},
"根室南部":{b200k:"根室5号-3",west:523740,south:155680,east:524310,north:156020},
"落石":{b200k:"根室5号-4",west:523740,south:155370,east:524310,north:155710},
"東梅":{b200k:"根室9号-1",west:523290,south:155680,east:523860,north:156020},
"別当賀":{b200k:"根室9号-2",west:523290,south:155380,east:523860,north:155720},
"風蓮湖":{b200k:"根室9号-3",west:522840,south:155680,east:523410,north:156020},
"厚床":{b200k:"根室9号-4",west:522840,south:155365,east:523410,north:155705},
"奥行":{b200k:"根室13号-1",west:522390,south:155680,east:522960,north:156020},
"姉別":{b200k:"根室13号-2",west:522390,south:155380,east:522960,north:155720},
"上風連":{b200k:"根室13号-3",west:521940,south:155680,east:522510,north:156020},
"東円朱別":{b200k:"根室13号-4",west:521940,south:155380,east:522510,north:155720},
"奔幌戸":{b200k:"根室14号-1",west:522390,south:155080,east:522955,north:155420},
"霧多布":{b200k:"根室14号-2",west:522390,south:154780,east:522955,north:155120},
"茶内":{b200k:"根室14号-3",west:521940,south:155080,east:522505,north:155420},
"琵琶瀬":{b200k:"根室14号-4",west:521940,south:154780,east:522505,north:155120},
"ウトロ":{b200k:"網走4号-2",west:521485,south:158380,east:522060,north:158720},
"網走":{b200k:"網走12号-4",west:519235,south:158380,east:519810,north:158720},
"能取岬":{b200k:"網走16号-1",west:518785,south:158680,east:519360,north:159020},
"能取湖":{b200k:"網走16号-2",west:518785,south:158380,east:519360,north:158720},
"常呂":{b200k:"網走16号-3",west:518335,south:158680,east:518910,north:159020},
"卯原内":{b200k:"網走16号-4",west:518335,south:158380,east:518910,north:158720},
"真鯉":{b200k:"斜里1号-1",west:521520,south:158080,east:522095,north:158420},
"海別岳":{b200k:"斜里1号-2",west:521485,south:157780,east:522060,north:158120},
"峰浜":{b200k:"斜里1号-3",west:521035,south:158080,east:521610,north:158420},
"朱円":{b200k:"斜里1号-4",west:521035,south:157780,east:521610,north:158120},
"西古多糠":{b200k:"斜里2号-1",west:521485,south:157480,east:522060,north:157820},
"武佐岳":{b200k:"斜里2号-2",west:521485,south:157180,east:522060,north:157520},
"瑠辺斯岳":{b200k:"斜里2号-3",west:521035,south:157480,east:521610,north:157820},
"俣落岳":{b200k:"斜里2号-4",west:521035,south:157180,east:521610,north:157520},
"武佐":{b200k:"斜里3号-1",west:521490,south:156880,east:522060,north:157220},
"中標津":{b200k:"斜里3号-2",west:521490,south:156580,east:522060,north:156920},
"第二俣落":{b200k:"斜里3号-3",west:521040,south:156880,east:521610,north:157220},
"西竹":{b200k:"斜里3号-4",west:521040,south:156580,east:521610,north:156920},
"上春別":{b200k:"斜里4号-1",west:521490,south:156280,east:522060,north:156620},
"中西別":{b200k:"斜里4号-2",west:521490,south:155980,east:522060,north:156320},
"計根別":{b200k:"斜里4号-3",west:521040,south:156280,east:521610,north:156620},
"西春別":{b200k:"斜里4号-4",west:521040,south:155980,east:521610,north:156320},
"斜里":{b200k:"斜里5号-2",west:520585,south:157790,east:521160,north:158130},
"清里":{b200k:"斜里5号-4",west:520135,south:157805,east:520710,north:158145},
"斜里岳":{b200k:"斜里6号-1",west:520585,south:157480,east:521160,north:157820},
"サマッケヌプリ山":{b200k:"斜里6号-2",west:520585,south:157180,east:521160,north:157520},
"札弦":{b200k:"斜里6号-3",west:520135,south:157480,east:520710,north:157820},
"緑":{b200k:"斜里6号-4",west:520135,south:157180,east:520710,north:157520},
"養老牛温泉":{b200k:"斜里7号-1",west:520590,south:156880,east:521160,north:157220},
"養老牛":{b200k:"斜里7号-2",west:520590,south:156580,east:521160,north:156920},
"摩周湖北部":{b200k:"斜里7号-3",west:520140,south:156880,east:520710,north:157220},
"摩周湖南部":{b200k:"斜里7号-4",west:520140,south:156580,east:520710,north:156920},
"虹別":{b200k:"斜里8号-1",west:520590,south:156280,east:521160,north:156620},
"泉川":{b200k:"斜里8号-2",west:520590,south:155980,east:521160,north:156320},
"南弟子屈":{b200k:"斜里8号-3",west:520140,south:156280,east:520710,north:156620},
"磯分内":{b200k:"斜里8号-4",west:520140,south:155980,east:520710,north:156320},
"浜小清水":{b200k:"斜里9号-1",west:519685,south:158080,east:520260,north:158420},
"小清水":{b200k:"斜里9号-2",west:519685,south:157780,east:520260,north:158120},
"藻琴":{b200k:"斜里9号-3",west:519235,south:158080,east:519810,north:158420},
"東藻琴":{b200k:"斜里9号-4",west:519235,south:157780,east:519810,north:158120},
"上徳":{b200k:"斜里10号-1",west:519685,south:157480,east:520260,north:157820},
"野上峠":{b200k:"斜里10号-2",west:519685,south:157180,east:520260,north:157520},
"末広":{b200k:"斜里10号-3",west:519235,south:157480,east:519810,north:157820},
"藻琴山":{b200k:"斜里10号-4",west:519235,south:157180,east:519810,north:157520},
"川湯":{b200k:"斜里11号-1",west:519690,south:156880,east:520260,north:157220},
"美留和":{b200k:"斜里11号-2",west:519690,south:156580,east:520260,north:156920},
"屈斜路湖":{b200k:"斜里11号-3",west:519240,south:156880,east:519810,north:157220},
"和琴":{b200k:"斜里11号-4",west:519240,south:156580,east:519810,north:156920},
"弟子屈":{b200k:"斜里12号-1",west:519690,south:156280,east:520260,north:156620},
"上オソツベツ":{b200k:"斜里12号-2",west:519690,south:155980,east:520260,north:156320},
"辺計礼山":{b200k:"斜里12号-3",west:519240,south:156280,east:519810,north:156620},
"奥久著呂":{b200k:"斜里12号-4",west:519240,south:155980,east:519810,north:156320},
"呼人":{b200k:"斜里13号-1",west:518785,south:158080,east:519360,north:158420},
"女満別":{b200k:"斜里13号-2",west:518785,south:157780,east:519360,north:158120},
"越歳":{b200k:"斜里13号-3",west:518335,south:158080,east:518910,north:158420},
"緋牛内":{b200k:"斜里13号-4",west:518335,south:157780,east:518910,north:158120},
"北見福住":{b200k:"斜里14号-1",west:518785,south:157480,east:519360,north:157820},
"古梅":{b200k:"斜里14号-2",west:518785,south:157180,east:519360,north:157520},
"美幌":{b200k:"斜里14号-3",west:518335,south:157480,east:518910,north:157820},
"津別":{b200k:"斜里14号-4",west:518335,south:157180,east:518910,north:157520},
"サマッカリヌプリ":{b200k:"斜里15号-1",west:518790,south:156880,east:519360,north:157220},
"コトニヌプリ":{b200k:"斜里15号-2",west:518790,south:156580,east:519360,north:156920},
"上里":{b200k:"斜里15号-3",west:518340,south:156880,east:518910,north:157220},
"木禽岳":{b200k:"斜里15号-4",west:518340,south:156580,east:518910,north:156920},
"雄阿寒岳":{b200k:"斜里16号-1",west:518790,south:156280,east:519360,north:156620},
"ピリカネップ":{b200k:"斜里16号-2",west:518790,south:155980,east:519360,north:156320},
"阿寒湖":{b200k:"斜里16号-3",west:518340,south:156280,east:518910,north:156620},
"雌阿寒岳":{b200k:"斜里16号-4",west:518340,south:155980,east:518910,north:156320},
"矢臼別":{b200k:"釧路1号-1",west:521490,south:155680,east:522060,north:156020},
"茶内原野":{b200k:"釧路1号-2",west:521490,south:155380,east:522060,north:155720},
"フッポウシ川":{b200k:"釧路1号-3",west:521040,south:155680,east:521610,north:156020},
"別寒辺牛川中流":{b200k:"釧路1号-4",west:521040,south:155380,east:521610,north:155720},
"糸魚沢":{b200k:"釧路2号-1",west:521490,south:155080,east:522055,north:155420},
"厚岸湖":{b200k:"釧路2号-2",west:521490,south:154780,east:522055,north:155120},
"釧路太田":{b200k:"釧路2号-3",west:521040,south:155080,east:521605,north:155420},
"厚岸":{b200k:"釧路2号-4",west:521040,south:154780,east:521605,north:155120},
"床潭":{b200k:"釧路3号-1",west:521490,south:154480,east:522055,north:154820},
"尻羽岬":{b200k:"釧路3号-3",west:521040,south:154480,east:521605,north:154820},
"上チャンベツ":{b200k:"釧路5号-1",west:520590,south:155680,east:521160,north:156020},
"中チャンベツ":{b200k:"釧路5号-2",west:520590,south:155380,east:521160,north:155720},
"標茶":{b200k:"釧路5号-3",west:520140,south:155680,east:520710,north:156020},
"五十石":{b200k:"釧路5号-4",west:520140,south:155380,east:520710,north:155720},
"片無去":{b200k:"釧路6号-1",west:520590,south:155080,east:521155,north:155420},
"尾幌":{b200k:"釧路6号-2",west:520590,south:154780,east:521155,north:155120},
"塘路湖":{b200k:"釧路6号-3",west:520140,south:155080,east:520705,north:155420},
"上尾幌":{b200k:"釧路6号-4",west:520140,south:154780,east:520705,north:155120},
"仙鳳趾":{b200k:"釧路7号-1",west:520590,south:154480,east:521155,north:154820},
"昆布森":{b200k:"釧路7号-3",west:520140,south:154480,east:520705,north:154820},
"中久著呂":{b200k:"釧路9号-1",west:519690,south:155680,east:520260,north:156020},
"下久著呂":{b200k:"釧路9号-2",west:519690,south:155380,east:520260,north:155720},
"茂雪裡":{b200k:"釧路9号-3",west:519240,south:155680,east:519810,north:156020},
"鶴居":{b200k:"釧路9号-4",west:519240,south:155380,east:519810,north:155720},
"細岡":{b200k:"釧路10号-1",west:519690,south:155080,east:520255,north:155420},
"遠矢":{b200k:"釧路10号-2",west:519690,south:154780,east:520255,north:155120},
"下幌呂":{b200k:"釧路10号-3",west:519240,south:155080,east:519805,north:155420},
"大楽毛":{b200k:"釧路10号-4",west:519240,south:154780,east:519805,north:155120},
"釧路":{b200k:"釧路11号-1",west:519690,south:154480,east:520255,north:154820},
"釧路港":{b200k:"釧路11号-3",west:519240,south:154480,east:519805,north:154820},
"上幌呂":{b200k:"釧路13号-1",west:518790,south:155680,east:519360,north:156020},
"徹別":{b200k:"釧路13号-2",west:518790,south:155380,east:519360,north:155720},
"上徹別":{b200k:"釧路13号-3",west:518340,south:155680,east:518910,north:156020},
"布伏内":{b200k:"釧路13号-4",west:518340,south:155380,east:518910,north:155720},
"阿寒":{b200k:"釧路14号-1",west:518790,south:155080,east:519355,north:155420},
"山花":{b200k:"釧路14号-2",west:518790,south:154780,east:519355,north:155120},
"上庶路":{b200k:"釧路14号-3",west:518340,south:155080,east:518905,north:155420},
"中庶路":{b200k:"釧路14号-4",west:518340,south:154780,east:518905,north:155120},
"庶路":{b200k:"釧路15号-1",west:518790,south:154480,east:519355,north:154820},
"白糠":{b200k:"釧路15号-3",west:518340,south:154480,east:518905,north:154820},
"サロマ湖東部":{b200k:"紋別4号-1",west:517885,south:158680,east:518460,north:159020},
"浜佐呂間":{b200k:"紋別4号-2",west:517885,south:158380,east:518460,north:158720},
"サロマ湖":{b200k:"紋別4号-3",west:517435,south:158710,east:518010,north:159050},
"佐呂間":{b200k:"紋別4号-4",west:517435,south:158380,east:518010,north:158720},
"登栄床":{b200k:"紋別7号-2",west:517035,south:158980,east:517615,north:159320},
"中湧別":{b200k:"紋別7号-4",west:516535,south:159005,east:517115,north:159345},
"芭露":{b200k:"紋別8号-1",west:516985,south:158680,east:517560,north:159020},
"若里":{b200k:"紋別8号-2",west:516985,south:158380,east:517560,north:158720},
"上湧別":{b200k:"紋別8号-3",west:516535,south:158680,east:517110,north:159020},
"遠軽":{b200k:"紋別8号-4",west:516535,south:158380,east:517110,north:158720},
"紋別":{b200k:"紋別10号-4",west:515635,south:159580,east:516215,north:159920},
"小向":{b200k:"紋別11号-1",west:516135,south:159280,east:516715,north:159620},
"志文":{b200k:"紋別11号-2",west:516085,south:158980,east:516665,north:159320},
"中渚滑":{b200k:"紋別11号-3",west:515635,south:159280,east:516215,north:159620},
"上渚滑":{b200k:"紋別11号-4",west:515635,south:158980,east:516215,north:159320},
"上富美":{b200k:"紋別12号-1",west:516085,south:158680,east:516660,north:159020},
"瀬戸瀬":{b200k:"紋別12号-2",west:516085,south:158380,east:516660,north:158720},
"立牛岳":{b200k:"紋別12号-3",west:515635,south:158680,east:516210,north:159020},
"丸瀬布北部":{b200k:"紋別12号-4",west:515635,south:158380,east:516210,north:158720},
"沢木":{b200k:"紋別13号-4",west:514735,south:160180,east:515315,north:160520},
"沙留":{b200k:"紋別14号-1",west:515185,south:159880,east:515765,north:160220},
"豊野":{b200k:"紋別14号-2",west:515185,south:159580,east:515765,north:159920},
"興部":{b200k:"紋別14号-3",west:514735,south:159880,east:515315,north:160220},
"秋里":{b200k:"紋別14号-4",west:514735,south:159580,east:515315,north:159920},
"中宇津々":{b200k:"紋別15号-1",west:515185,south:159280,east:515765,north:159620},
"北見滝下":{b200k:"紋別15号-2",west:515185,south:158980,east:515765,north:159320},
"欝岳":{b200k:"紋別15号-3",west:514735,south:159280,east:515315,north:159620},
"滝上":{b200k:"紋別15号-4",west:514735,south:158980,east:515315,north:159320},
"立牛":{b200k:"紋別16号-1",west:515185,south:158680,east:515760,north:159020},
"丸立峠":{b200k:"紋別16号-2",west:515185,south:158380,east:515760,north:158720},
"滝西":{b200k:"紋別16号-3",west:514735,south:158680,east:515310,north:159020},
"上雄柏":{b200k:"紋別16号-4",west:514735,south:158380,east:515310,north:158720},
"日吉":{b200k:"北見1号-1",west:517885,south:158080,east:518460,north:158420},
"端野":{b200k:"北見1号-2",west:517885,south:157780,east:518460,north:158120},
"佐呂間山":{b200k:"北見1号-3",west:517435,south:158080,east:518010,north:158420},
"上仁頃":{b200k:"北見1号-4",west:517435,south:157780,east:518010,north:158120},
"北見":{b200k:"北見2号-1",west:517885,south:157480,east:518460,north:157820},
"開成":{b200k:"北見2号-2",west:517885,south:157180,east:518460,north:157520},
"相内":{b200k:"北見2号-3",west:517435,south:157480,east:518010,north:157820},
"常川":{b200k:"北見2号-4",west:517435,south:157180,east:518010,north:157520},
"本岐":{b200k:"北見3号-1",west:517890,south:156880,east:518460,north:157220},
"北見相生":{b200k:"北見3号-2",west:517890,south:156580,east:518460,north:156920},
"訓津峠":{b200k:"北見3号-3",west:517440,south:156880,east:518010,north:157220},
"上陸別":{b200k:"北見3号-4",west:517440,south:156580,east:518010,north:156920},
"イユダニヌプリ山":{b200k:"北見4号-1",west:517890,south:156280,east:518460,north:156620},
"オンネトー":{b200k:"北見4号-2",west:517890,south:155980,east:518460,north:156320},
"陸別東部":{b200k:"北見4号-3",west:517440,south:156280,east:518010,north:156620},
"上足寄":{b200k:"北見4号-4",west:517440,south:155980,east:518010,north:156320},
"若佐":{b200k:"北見5号-1",west:516985,south:158080,east:517560,north:158420},
"花園":{b200k:"北見5号-2",west:516985,south:157780,east:517560,north:158120},
"生田原":{b200k:"北見5号-3",west:516535,south:158080,east:517110,north:158420},
"伊吹":{b200k:"北見5号-4",west:516535,south:157780,east:517110,north:158120},
"留辺蘂東部":{b200k:"北見6号-1",west:516985,south:157480,east:517560,north:157820},
"訓子府":{b200k:"北見6号-2",west:516985,south:157180,east:517560,north:157520},
"留辺蘂西部":{b200k:"北見6号-3",west:516535,south:157480,east:517110,north:157820},
"置戸":{b200k:"北見6号-4",west:516535,south:157180,east:517110,north:157520},
"小利別":{b200k:"北見7号-1",west:516990,south:156880,east:517560,north:157220},
"釧路川上":{b200k:"北見7号-2",west:516990,south:156580,east:517560,north:156920},
"北見勝山":{b200k:"北見7号-3",west:516540,south:156880,east:517110,north:157220},
"勲祢別川上流":{b200k:"北見7号-4",west:516540,south:156580,east:517110,north:156920},
"陸別":{b200k:"北見8号-1",west:516990,south:156280,east:517560,north:156620},
"大誉地":{b200k:"北見8号-2",west:516990,south:155980,east:517560,north:156320},
"西斗満":{b200k:"北見8号-3",west:516540,south:156280,east:517110,north:156620},
"上利別":{b200k:"北見8号-4",west:516540,south:155980,east:517110,north:156320},
"瀬戸瀬温泉":{b200k:"北見9号-1",west:516085,south:158080,east:516660,north:158420},
"岩戸":{b200k:"北見9号-2",west:516085,south:157780,east:516660,north:158120},
"丸瀬布南部":{b200k:"北見9号-3",west:515635,south:158080,east:516210,north:158420},
"上武利":{b200k:"北見9号-4",west:515635,south:157780,east:516210,north:158120},
"花丘":{b200k:"北見10号-1",west:516085,south:157480,east:516660,north:157820},
"大和":{b200k:"北見10号-2",west:516085,south:157180,east:516660,north:157520},
"武利川上流":{b200k:"北見10号-3",west:515635,south:157480,east:516210,north:157820},
"富士見":{b200k:"北見10号-4",west:515635,south:157180,east:516210,north:157520},
"常元":{b200k:"北見11号-1",west:516090,south:156880,east:516660,north:157220},
"東三国山":{b200k:"北見11号-2",west:516090,south:156580,east:516660,north:156920},
"曲り沢峠":{b200k:"北見11号-3",west:515640,south:156880,east:516210,north:157220},
"クマネシリ岳":{b200k:"北見11号-4",west:515640,south:156580,east:516210,north:156920},
"喜登牛山":{b200k:"北見12号-1",west:516090,south:156280,east:516660,north:156620},
"喜登牛":{b200k:"北見12号-2",west:516090,south:155980,east:516660,north:156320},
"美里別川上流":{b200k:"北見12号-3",west:515640,south:156280,east:516210,north:156620},
"芽登温泉":{b200k:"北見12号-4",west:515640,south:155980,east:516210,north:156320},
"旧白滝":{b200k:"北見13号-1",west:515185,south:158080,east:515760,north:158420},
"白滝":{b200k:"北見13号-2",west:515185,south:157780,east:515760,north:158120},
"雄柏山":{b200k:"北見13号-3",west:514735,south:158080,east:515310,north:158420},
"北見峠":{b200k:"北見13号-4",west:514735,south:157780,east:515310,north:158120},
"上支湧別":{b200k:"北見14号-1",west:515185,south:157480,east:515760,north:157820},
"武利岳":{b200k:"北見14号-2",west:515185,south:157180,east:515760,north:157520},
"平山":{b200k:"北見14号-3",west:514735,south:157480,east:515310,north:157820},
"大函":{b200k:"北見14号-4",west:514735,south:157180,east:515310,north:157520},
"石北峠":{b200k:"北見15号-1",west:515190,south:156880,east:515760,north:157220},
"十勝三股":{b200k:"北見15号-2",west:515190,south:156580,east:515760,north:156920},
"大雪湖":{b200k:"北見15号-3",west:514740,south:156880,east:515310,north:157220},
"石狩岳":{b200k:"北見15号-4",west:514740,south:156580,east:515310,north:156920},
"幌加":{b200k:"北見16号-1",west:515190,south:156280,east:515760,north:156620},
"糠平":{b200k:"北見16号-2",west:515190,south:155980,east:515760,north:156320},
"ニペソツ山":{b200k:"北見16号-3",west:514740,south:156280,east:515310,north:156620},
"ウペペサンケ山":{b200k:"北見16号-4",west:514740,south:155980,east:515310,north:156320},
"庶路川上流":{b200k:"帯広1号-1",west:517890,south:155680,east:518460,north:156020},
"右股":{b200k:"帯広1号-2",west:517890,south:155380,east:518460,north:155720},
"上螺湾":{b200k:"帯広1号-3",west:517440,south:155680,east:518010,north:156020},
"ウコタキヌプリ":{b200k:"帯広1号-4",west:517440,south:155380,east:518010,north:155720},
"上茶路":{b200k:"帯広2号-1",west:517890,south:155080,east:518455,north:155420},
"縫別":{b200k:"帯広2号-2",west:517890,south:154780,east:518455,north:155120},
"ピラウンナイ川":{b200k:"帯広2号-3",west:517440,south:155080,east:518005,north:155420},
"ヌプキベツ":{b200k:"帯広2号-4",west:517440,south:154780,east:518005,north:155120},
"河原":{b200k:"帯広3号-1",west:517890,south:154480,east:518455,north:154820},
"音別":{b200k:"帯広3号-2",west:517890,south:154180,east:518455,north:154520},
"霧里":{b200k:"帯広3号-3",west:517440,south:154480,east:518005,north:154820},
"直別":{b200k:"帯広3号-4",west:517440,south:154180,east:518005,north:154520},
"厚内":{b200k:"帯広4号-3",west:517440,south:153880,east:518005,north:154220},
"螺湾":{b200k:"帯広5号-1",west:516990,south:155680,east:517560,north:156020},
"奥仙美里":{b200k:"帯広5号-2",west:516990,south:155380,east:517560,north:155720},
"愛冠":{b200k:"帯広5号-3",west:516540,south:155680,east:517110,north:156020},
"足寄":{b200k:"帯広5号-4",west:516540,south:155380,east:517110,north:155720},
"栄穂":{b200k:"帯広6号-1",west:516990,south:155080,east:517555,north:155420},
"川流布":{b200k:"帯広6号-2",west:516990,south:154780,east:517555,north:155120},
"本別":{b200k:"帯広6号-3",west:516540,south:155080,east:517105,north:155420},
"宝生":{b200k:"帯広6号-4",west:516540,south:154780,east:517105,north:155120},
"活平":{b200k:"帯広7号-1",west:516990,south:154480,east:517555,north:154820},
"常室":{b200k:"帯広7号-2",west:516990,south:154180,east:517555,north:154520},
"東台":{b200k:"帯広7号-3",west:516540,south:154480,east:517105,north:154820},
"十弗":{b200k:"帯広7号-4",west:516540,south:154180,east:517105,north:154520},
"浦幌":{b200k:"帯広8号-1",west:516990,south:153880,east:517555,north:154220},
"十勝大津":{b200k:"帯広8号-2",west:516990,south:153580,east:517555,north:153920},
"茂岩":{b200k:"帯広8号-3",west:516540,south:153880,east:517105,north:154220},
"旅来":{b200k:"帯広8号-4",west:516540,south:153580,east:517105,north:153920},
"芽登":{b200k:"帯広9号-1",west:516090,south:155680,east:516660,north:156020},
"活込":{b200k:"帯広9号-2",west:516090,south:155380,east:516660,north:155720},
"萩ヶ岡":{b200k:"帯広9号-3",west:515640,south:155680,east:516210,north:156020},
"上士幌":{b200k:"帯広9号-4",west:515640,south:155380,east:516210,north:155720},
"押帯":{b200k:"帯広10号-1",west:516090,south:155080,east:516655,north:155420},
"十勝高島":{b200k:"帯広10号-2",west:516090,south:154780,east:516655,north:155120},
"士幌":{b200k:"帯広10号-3",west:515640,south:155080,east:516205,north:155420},
"東音更":{b200k:"帯広10号-4",west:515640,south:154780,east:516205,north:155120},
"十勝池田":{b200k:"帯広11号-1",west:516090,south:154480,east:516655,north:154820},
"川合":{b200k:"帯広11号-2",west:516090,south:154180,east:516655,north:154520},
"十勝川温泉":{b200k:"帯広11号-3",west:515640,south:154480,east:516205,north:154820},
"幕別":{b200k:"帯広11号-4",west:515640,south:154180,east:516205,north:154520},
"農野牛":{b200k:"帯広12号-1",west:516090,south:153880,east:516655,north:154220},
"二宮":{b200k:"帯広12号-2",west:516090,south:153580,east:516655,north:153920},
"糠内":{b200k:"帯広12号-3",west:515640,south:153880,east:516205,north:154220},
"駒畠":{b200k:"帯広12号-4",west:515640,south:153580,east:516205,north:153920},
"勢多山":{b200k:"帯広13号-1",west:515190,south:155680,east:515760,north:156020},
"中音更":{b200k:"帯広13号-2",west:515190,south:155380,east:515760,north:155720},
"然別湖":{b200k:"帯広13号-3",west:514740,south:155680,east:515310,north:156020},
"扇ヶ原":{b200k:"帯広13号-4",west:514740,south:155380,east:515310,north:155720},
"中士幌":{b200k:"帯広14号-1",west:515190,south:155080,east:515755,north:155420},
"駒場":{b200k:"帯広14号-2",west:515190,south:154780,east:515755,north:155120},
"瓜幕":{b200k:"帯広14号-3",west:514740,south:155080,east:515305,north:155420},
"上然別":{b200k:"帯広14号-4",west:514740,south:154780,east:515305,north:155120},
"帯広北部":{b200k:"帯広15号-1",west:515190,south:154480,east:515755,north:154820},
"帯広南部":{b200k:"帯広15号-2",west:515190,south:154180,east:515755,north:154520},
"祥栄":{b200k:"帯広15号-3",west:514740,south:154480,east:515305,north:154820},
"芽室":{b200k:"帯広15号-4",west:514740,south:154180,east:515305,north:154520},
"大正":{b200k:"帯広16号-1",west:515190,south:153880,east:515755,north:154220},
"中札内":{b200k:"帯広16号-2",west:515190,south:153580,east:515755,north:153920},
"上帯広":{b200k:"帯広16号-3",west:514740,south:153880,east:515305,north:154220},
"十勝清川":{b200k:"帯広16号-4",west:514740,south:153580,east:515305,north:153920},
"湧洞沼":{b200k:"広尾5号-3",west:516540,south:153280,east:517105,north:153620},
"生花":{b200k:"広尾9号-1",west:516090,south:153280,east:516655,north:153620},
"晩成":{b200k:"広尾9号-2",west:516135,south:152980,east:516695,north:153320},
"上更別":{b200k:"広尾9号-3",west:515640,south:153280,east:516205,north:153620},
"忠類":{b200k:"広尾9号-4",west:515645,south:152980,east:516205,north:153320},
"浜大樹":{b200k:"広尾10号-1",west:516095,south:152680,east:516655,north:153020},
"大樹":{b200k:"広尾10号-3",west:515645,south:152680,east:516205,north:153020},
"豊似":{b200k:"広尾10号-4",west:515680,south:152380,east:516240,north:152720},
"広尾":{b200k:"広尾11号-3",west:515645,south:152080,east:516205,north:152420},
"音調津":{b200k:"広尾11号-4",west:515645,south:151780,east:516205,north:152120},
"日高目黒":{b200k:"広尾12号-3",west:515645,south:151480,east:516205,north:151820},
"庶野":{b200k:"広尾12号-4",west:515645,south:151180,east:516205,north:151520},
"更別":{b200k:"広尾13号-1",west:515190,south:153280,east:515755,north:153620},
"尾田":{b200k:"広尾13号-2",west:515195,south:152980,east:515755,north:153320},
"上札内":{b200k:"広尾13号-3",west:514740,south:153280,east:515305,north:153620},
"拓進":{b200k:"広尾13号-4",west:514745,south:152980,east:515305,north:153320},
"開進":{b200k:"広尾14号-1",west:515195,south:152680,east:515755,north:153020},
"中豊似":{b200k:"広尾14号-2",west:515195,south:152380,east:515755,north:152720},
"ヌビナイ川上流":{b200k:"広尾14号-3",west:514745,south:152680,east:515305,north:153020},
"トヨニ岳":{b200k:"広尾14号-4",west:514745,south:152380,east:515305,north:152720},
"札楽古":{b200k:"広尾15号-1",west:515195,south:152080,east:515755,north:152420},
"広尾岳":{b200k:"広尾15号-2",west:515195,south:151780,east:515755,north:152120},
"楽古岳":{b200k:"広尾15号-3",west:514745,south:152080,east:515305,north:152420},
"新富":{b200k:"広尾15号-4",west:514745,south:151780,east:515305,north:152120},
"袴腰山":{b200k:"広尾16号-1",west:515195,south:151480,east:515755,north:151820},
"えりも":{b200k:"広尾16号-2",west:515195,south:151180,east:515755,north:151520},
"アポイ岳":{b200k:"広尾16号-3",west:514745,south:151480,east:515305,north:151820},
"幌満":{b200k:"広尾16号-4",west:514745,south:151180,east:515305,north:151520},
"襟裳岬":{b200k:"広尾南13号-1",west:515285,south:150880,east:515840,north:151220},
"音標":{b200k:"枝幸4号-4",west:513830,south:160780,east:514415,north:161120},
"目梨泊":{b200k:"枝幸6号-4",west:512930,south:161980,east:513515,north:162320},
"徳志別":{b200k:"枝幸7号-2",west:513380,south:161380,east:513965,north:161720},
"枝幸":{b200k:"枝幸7号-3",west:512930,south:161680,east:513515,north:162020},
"下幌別":{b200k:"枝幸7号-4",west:512930,south:161380,east:513515,north:161720},
"乙忠部":{b200k:"枝幸8号-1",west:513380,south:161080,east:513965,north:161420},
"上音標":{b200k:"枝幸8号-2",west:513380,south:160780,east:513965,north:161120},
"志美宇丹":{b200k:"枝幸8号-3",west:512930,south:161080,east:513515,north:161420},
"上徳志別":{b200k:"枝幸8号-4",west:512930,south:160780,east:513515,north:161120},
"浅茅野台地":{b200k:"枝幸9号-4",west:512030,south:162580,east:512620,north:162920},
"頓別":{b200k:"枝幸10号-1",west:512480,south:162280,east:513065,north:162620},
"斜内":{b200k:"枝幸10号-2",west:512480,south:161980,east:513065,north:162320},
"浜頓別":{b200k:"枝幸10号-3",west:512030,south:162280,east:512615,north:162620},
"下頓別":{b200k:"枝幸10号-4",west:512030,south:161980,east:512615,north:162320},
"ポロヌプリ山":{b200k:"枝幸11号-1",west:512480,south:161680,east:513065,north:162020},
"歌登":{b200k:"枝幸11号-2",west:512480,south:161380,east:513065,north:161720},
"中頓別":{b200k:"枝幸11号-3",west:512030,south:161680,east:512615,north:162020},
"上頓別":{b200k:"枝幸11号-4",west:512030,south:161380,east:512615,north:161720},
"本幌別":{b200k:"枝幸12号-1",west:512480,south:161080,east:513065,north:161420},
"屋根棟山":{b200k:"枝幸12号-2",west:512480,south:160780,east:513065,north:161120},
"小頓別":{b200k:"枝幸12号-3",west:512030,south:161080,east:512615,north:161420},
"音威子府":{b200k:"枝幸12号-4",west:512030,south:160780,east:512615,north:161120},
"猿払":{b200k:"枝幸13号-1",west:511580,south:162880,east:512170,north:163220},
"浅茅野":{b200k:"枝幸13号-2",west:511580,south:162580,east:512170,north:162920},
"鬼志別":{b200k:"枝幸13号-3",west:511130,south:162880,east:511720,north:163220},
"エタンパック山":{b200k:"枝幸13号-4",west:511130,south:162580,east:511720,north:162920},
"安別":{b200k:"枝幸14号-1",west:511580,south:162280,east:512165,north:162620},
"イソサンヌプリ山":{b200k:"枝幸14号-2",west:511580,south:161980,east:512165,north:162320},
"セキタンベツ川":{b200k:"枝幸14号-3",west:511130,south:162280,east:511715,north:162620},
"上問寒":{b200k:"枝幸14号-4",west:511130,south:161980,east:511715,north:162320},
"松音知":{b200k:"枝幸15号-1",west:511580,south:161680,east:512165,north:162020},
"敏音知":{b200k:"枝幸15号-2",west:511580,south:161380,east:512165,north:161720},
"中問寒":{b200k:"枝幸15号-3",west:511130,south:161680,east:511715,north:162020},
"問寒別":{b200k:"枝幸15号-4",west:511130,south:161380,east:511715,north:161720},
"ペンケ山":{b200k:"枝幸16号-1",west:511580,south:161080,east:512165,north:161420},
"筬島":{b200k:"枝幸16号-2",west:511580,south:160780,east:512165,north:161120},
"天塩中川":{b200k:"枝幸16号-3",west:511130,south:161080,east:511715,north:161420},
"佐久":{b200k:"枝幸16号-4",west:511130,south:160780,east:511715,north:161120},
"北見幌内":{b200k:"名寄1号-1",west:514285,south:160480,east:514865,north:160820},
"雄武":{b200k:"名寄1号-2",west:514285,south:160180,east:514865,north:160520},
"中幌内":{b200k:"名寄1号-3",west:513835,south:160480,east:514415,north:160820},
"上雄武":{b200k:"名寄1号-4",west:513835,south:160180,east:514415,north:160520},
"トーウツ岳":{b200k:"名寄2号-1",west:514285,south:159880,east:514865,north:160220},
"上興部":{b200k:"名寄2号-2",west:514285,south:159580,east:514865,north:159920},
"毛鐘尻山":{b200k:"名寄2号-3",west:513835,south:159880,east:514415,north:160220},
"奥興部":{b200k:"名寄2号-4",west:513835,south:159580,east:514415,north:159920},
"西興部":{b200k:"名寄3号-1",west:514285,south:159280,east:514865,north:159620},
"上札久留":{b200k:"名寄3号-2",west:514285,south:158980,east:514865,north:159320},
"一の橋":{b200k:"名寄3号-3",west:513835,south:159280,east:514415,north:159620},
"名寄川上流":{b200k:"名寄3号-4",west:513835,south:158980,east:514415,north:159320},
"茂瀬":{b200k:"名寄4号-1",west:514285,south:158680,east:514860,north:159020},
"渚滑岳":{b200k:"名寄4号-2",west:514285,south:158380,east:514860,north:158720},
"藻瀬狩山":{b200k:"名寄4号-3",west:513835,south:158680,east:514410,north:159020},
"於鬼頭岳":{b200k:"名寄4号-4",west:513835,south:158380,east:514410,north:158720},
"シアッシリ山":{b200k:"名寄5号-1",west:513385,south:160480,east:513965,north:160820},
"美深峠":{b200k:"名寄5号-2",west:513385,south:160180,east:513965,north:160520},
"黒岩山":{b200k:"名寄5号-3",west:512935,south:160480,east:513515,north:160820},
"仁宇布":{b200k:"名寄5号-4",west:512935,south:160180,east:513515,north:160520},
"幌内越峠":{b200k:"名寄6号-1",west:513385,south:159880,east:513965,north:160220},
"サンル":{b200k:"名寄6号-2",west:513385,south:159580,east:513965,north:159920},
"ピヤシリ山":{b200k:"名寄6号-3",west:512935,south:159880,east:513515,north:160220},
"見晴山":{b200k:"名寄6号-4",west:512935,south:159580,east:513515,north:159920},
"下川":{b200k:"名寄7号-1",west:513385,south:159280,east:513965,north:159620},
"新下川":{b200k:"名寄7号-2",west:513385,south:158980,east:513965,north:159320},
"上名寄":{b200k:"名寄7号-3",west:512935,south:159280,east:513515,north:159620},
"日進":{b200k:"名寄7号-4",west:512935,south:158980,east:513515,north:159320},
"岩尾内湖":{b200k:"名寄8号-1",west:513385,south:158680,east:513960,north:159020},
"茂志利":{b200k:"名寄8号-2",west:513385,south:158380,east:513960,north:158720},
"中央":{b200k:"名寄8号-3",west:512935,south:158680,east:513510,north:159020},
"乙部山":{b200k:"名寄8号-4",west:512935,south:158380,east:513510,north:158720},
"函岳":{b200k:"名寄9号-1",west:512485,south:160480,east:513065,north:160820},
"雄木禽":{b200k:"名寄9号-2",west:512485,south:160180,east:513065,north:160520},
"恩根内":{b200k:"名寄9号-3",west:512035,south:160480,east:512615,north:160820},
"紋穂内":{b200k:"名寄9号-4",west:512035,south:160180,east:512615,north:160520},
"智恵文":{b200k:"名寄10号-1",west:512485,south:159880,east:513065,north:160220},
"名寄":{b200k:"名寄10号-2",west:512485,south:159580,east:513065,north:159920},
"美深":{b200k:"名寄10号-3",west:512035,south:159880,east:512615,north:160220},
"母子里":{b200k:"名寄10号-4",west:512035,south:159580,east:512615,north:159920},
"天塩風連":{b200k:"名寄11号-1",west:512485,south:159280,east:513065,north:159620},
"士別":{b200k:"名寄11号-2",west:512485,south:158980,east:513065,north:159320},
"西風連":{b200k:"名寄11号-3",west:512035,south:159280,east:512615,north:159620},
"温根別":{b200k:"名寄11号-4",west:512035,south:158980,east:512615,north:159320},
"上士別":{b200k:"名寄12号-1",west:512485,south:158680,east:513060,north:159020},
"和寒":{b200k:"名寄12号-2",west:512485,south:158380,east:513060,north:158720},
"剣淵":{b200k:"名寄12号-3",west:512035,south:158680,east:512610,north:159020},
"三和":{b200k:"名寄12号-4",west:512035,south:158380,east:512610,north:158720},
"小車峠":{b200k:"名寄13号-1",west:511585,south:160480,east:512165,north:160820},
"小車岳":{b200k:"名寄13号-2",west:511585,south:160180,east:512165,north:160520},
"共和":{b200k:"名寄13号-3",west:511135,south:160480,east:511715,north:160820},
"茶古志山":{b200k:"名寄13号-4",west:511135,south:160180,east:511715,north:160520},
"苦頓別山":{b200k:"名寄14号-1",west:511585,south:159880,east:512165,north:160220},
"朱鞠内湖北部":{b200k:"名寄14号-2",west:511585,south:159580,east:512165,north:159920},
"遠別川上流":{b200k:"名寄14号-3",west:511135,south:159880,east:511715,north:160220},
"ピッシリ山":{b200k:"名寄14号-4",west:511135,south:159580,east:511715,north:159920},
"朱鞠内":{b200k:"名寄15号-1",west:511585,south:159280,east:512165,north:159620},
"添牛内":{b200k:"名寄15号-2",west:511585,south:158980,east:512165,north:159320},
"羽幌岳":{b200k:"名寄15号-3",west:511135,south:159280,east:511715,north:159620},
"霧立峠":{b200k:"名寄15号-4",west:511135,south:158980,east:511715,north:159320},
"政和":{b200k:"名寄16号-1",west:511585,south:158680,east:512160,north:159020},
"幌加内":{b200k:"名寄16号-2",west:511585,south:158380,east:512160,north:158720},
"三頭山":{b200k:"名寄16号-3",west:511135,south:158680,east:511710,north:159020},
"長留内岳":{b200k:"名寄16号-4",west:511135,south:158380,east:511710,north:158720},
"天塩岳":{b200k:"旭川1号-1",west:514285,south:158080,east:514860,north:158420},
"中越":{b200k:"旭川1号-2",west:514285,south:157780,east:514860,north:158120},
"宇江内山":{b200k:"旭川1号-3",west:513835,south:158080,east:514410,north:158420},
"上川":{b200k:"旭川1号-4",west:513835,south:157780,east:514410,north:158120},
"万景壁":{b200k:"旭川2号-1",west:514285,south:157480,east:514860,north:157820},
"層雲峡":{b200k:"旭川2号-2",west:514285,south:157180,east:514860,north:157520},
"菊水":{b200k:"旭川2号-3",west:513835,south:157480,east:514410,north:157820},
"愛山溪温泉":{b200k:"旭川2号-4",west:513835,south:157180,east:514410,north:157520},
"白雲岳":{b200k:"旭川3号-1",west:514290,south:156880,east:514860,north:157220},
"五色ヶ原":{b200k:"旭川3号-2",west:514290,south:156580,east:514860,north:156920},
"旭岳":{b200k:"旭川3号-3",west:513840,south:156880,east:514410,north:157220},
"トムラウシ山":{b200k:"旭川3号-4",west:513840,south:156580,east:514410,north:156920},
"トムラウシ川":{b200k:"旭川4号-1",west:514290,south:156280,east:514860,north:156620},
"ペンケベツ":{b200k:"旭川4号-2",west:514290,south:155980,east:514860,north:156320},
"オプタテシケ山":{b200k:"旭川4号-3",west:513840,south:156280,east:514410,north:156620},
"チカベツ山":{b200k:"旭川4号-4",west:513840,south:155980,east:514410,north:156320},
"中愛別山":{b200k:"旭川5号-1",west:513385,south:158080,east:513960,north:158420},
"中愛別":{b200k:"旭川5号-2",west:513385,south:157780,east:513960,north:158120},
"協和":{b200k:"旭川5号-3",west:512935,south:158080,east:513510,north:158420},
"愛別":{b200k:"旭川5号-4",west:512935,south:157780,east:513510,north:158120},
"東山":{b200k:"旭川6号-1",west:513385,south:157480,east:513960,north:157820},
"石狩瑞穂":{b200k:"旭川6号-2",west:513385,south:157180,east:513960,north:157520},
"当麻":{b200k:"旭川6号-3",west:512935,south:157480,east:513510,north:157820},
"岐登牛山":{b200k:"旭川6号-4",west:512935,south:157180,east:513510,north:157520},
"俵真布":{b200k:"旭川7号-1",west:513390,south:156880,east:513960,north:157220},
"藤山":{b200k:"旭川7号-2",west:513390,south:156580,east:513960,north:156920},
"志比内":{b200k:"旭川7号-3",west:512940,south:156880,east:513510,north:157220},
"置杵牛":{b200k:"旭川7号-4",west:512940,south:156580,east:513510,north:156920},
"白金温泉":{b200k:"旭川8号-1",west:513390,south:156280,east:513960,north:156620},
"十勝岳":{b200k:"旭川8号-2",west:513390,south:155980,east:513960,north:156320},
"旭野":{b200k:"旭川8号-3",west:512940,south:156280,east:513510,north:156620},
"本幸":{b200k:"旭川8号-4",west:512940,south:155980,east:513510,north:156320},
"蘭留":{b200k:"旭川9号-1",west:512485,south:158080,east:513060,north:158420},
"比布":{b200k:"旭川9号-2",west:512485,south:157780,east:513060,north:158120},
"福原":{b200k:"旭川9号-3",west:512035,south:158080,east:512610,north:158420},
"鷹栖":{b200k:"旭川9号-4",west:512035,south:157780,east:512610,north:158120},
"永山":{b200k:"旭川10号-1",west:512485,south:157480,east:513060,north:157820},
"西神楽":{b200k:"旭川10号-2",west:512485,south:157180,east:513060,north:157520},
"旭川":{b200k:"旭川10号-3",west:512035,south:157480,east:512610,north:157820},
"雨紛":{b200k:"旭川10号-4",west:512035,south:157180,east:512610,north:157520},
"美瑛":{b200k:"旭川11号-1",west:512490,south:156880,east:513060,north:157220},
"美馬牛":{b200k:"旭川11号-2",west:512490,south:156580,east:513060,north:156920},
"神楽岳":{b200k:"旭川11号-3",west:512040,south:156880,east:512610,north:157220},
"瑠辺蘂山":{b200k:"旭川11号-4",west:512040,south:156580,east:512610,north:156920},
"上富良野":{b200k:"旭川12号-1",west:512490,south:156280,east:513060,north:156620},
"富良野":{b200k:"旭川12号-2",west:512490,south:155980,east:513060,north:156320},
"野花南":{b200k:"旭川12号-3",west:512040,south:156280,east:512610,north:156620},
"島ノ下":{b200k:"旭川12号-4",west:512040,south:155980,east:512610,north:156320},
"沼牛":{b200k:"旭川13号-1",west:511585,south:158080,east:512160,north:158420},
"江丹別":{b200k:"旭川13号-2",west:511585,south:157780,east:512160,north:158120},
"鷹泊貯水池":{b200k:"旭川13号-3",west:511135,south:158080,east:511710,north:158420},
"鷹泊":{b200k:"旭川13号-4",west:511135,south:157780,east:511710,north:158120},
"湯内":{b200k:"旭川14号-1",west:511585,south:157480,east:512160,north:157820},
"神居古潭":{b200k:"旭川14号-2",west:511585,south:157180,east:512160,north:157520},
"多度志":{b200k:"旭川14号-3",west:511135,south:157480,east:511710,north:157820},
"石狩深川":{b200k:"旭川14号-4",west:511135,south:157180,east:511710,north:157520},
"石狩新城":{b200k:"旭川15号-1",west:511590,south:156880,east:512160,north:157220},
"芦別":{b200k:"旭川15号-2",west:511590,south:156580,east:512160,north:156920},
"イルムケップ山":{b200k:"旭川15号-3",west:511140,south:156880,east:511710,north:157220},
"赤平":{b200k:"旭川15号-4",west:511140,south:156580,east:511710,north:156920},
"上芦別":{b200k:"旭川16号-1",west:511590,south:156280,east:512160,north:156620},
"奥芦別":{b200k:"旭川16号-2",west:511590,south:155980,east:512160,north:156320},
"文珠":{b200k:"旭川16号-3",west:511140,south:156280,east:511710,north:156620},
"美唄山":{b200k:"旭川16号-4",west:511140,south:155980,east:511710,north:156320},
"ニペソツ":{b200k:"夕張岳1号-1",west:514290,south:155680,east:514860,north:156020},
"岩松":{b200k:"夕張岳1号-2",west:514290,south:155380,east:514860,north:155720},
"十勝ペンケ山":{b200k:"夕張岳1号-3",west:513840,south:155680,east:514410,north:156020},
"佐幌岳":{b200k:"夕張岳1号-4",west:513840,south:155380,east:514410,north:155720},
"鹿追":{b200k:"夕張岳2号-1",west:514290,south:155080,east:514855,north:155420},
"十勝清水":{b200k:"夕張岳2号-2",west:514290,south:154780,east:514855,north:155120},
"狩勝峠":{b200k:"夕張岳2号-3",west:513840,south:155080,east:514405,north:155420},
"新得":{b200k:"夕張岳2号-4",west:513840,south:154780,east:514405,north:155120},
"御影":{b200k:"夕張岳3号-1",west:514290,south:154480,east:514855,north:154820},
"渋山":{b200k:"夕張岳3号-2",west:514290,south:154180,east:514855,north:154520},
"十勝石山":{b200k:"夕張岳3号-3",west:513840,south:154480,east:514405,north:154820},
"芽室岳":{b200k:"夕張岳3号-4",west:513840,south:154180,east:514405,north:154520},
"上美生":{b200k:"夕張岳4号-1",west:514290,south:153880,east:514855,north:154220},
"拓成":{b200k:"夕張岳4号-2",west:514290,south:153580,east:514855,north:153920},
"妙敷山":{b200k:"夕張岳4号-3",west:513840,south:153880,east:514405,north:154220},
"札内岳":{b200k:"夕張岳4号-4",west:513840,south:153580,east:514405,north:153920},
"シーソラプチ川":{b200k:"夕張岳5号-1",west:513390,south:155680,east:513960,north:156020},
"北落合":{b200k:"夕張岳5号-2",west:513390,south:155380,east:513960,north:155720},
"麓郷":{b200k:"夕張岳5号-3",west:512940,south:155680,east:513510,north:156020},
"西達布":{b200k:"夕張岳5号-4",west:512940,south:155380,east:513510,north:155720},
"落合":{b200k:"夕張岳6号-1",west:513390,south:155080,east:513955,north:155420},
"上トマム":{b200k:"夕張岳6号-2",west:513390,south:154780,east:513955,north:155120},
"幾寅":{b200k:"夕張岳6号-3",west:512940,south:155080,east:513505,north:155420},
"下トマム":{b200k:"夕張岳6号-4",west:512940,south:154780,east:513505,north:155120},
"沙流岳":{b200k:"夕張岳7号-1",west:513390,south:154480,east:513955,north:154820},
"ペンケヌーシ岳":{b200k:"夕張岳7号-2",west:513390,south:154180,east:513955,north:154520},
"双珠別湖":{b200k:"夕張岳7号-3",west:512940,south:154480,east:513505,north:154820},
"千栄":{b200k:"夕張岳7号-4",west:512940,south:154180,east:513505,north:154520},
"ピパイロ岳":{b200k:"夕張岳8号-1",west:513390,south:153880,east:513955,north:154220},
"幌尻岳":{b200k:"夕張岳8号-2",west:513390,south:153580,east:513955,north:153920},
"二岐岳":{b200k:"夕張岳8号-3",west:512940,south:153880,east:513505,north:154220},
"ヌカンライ岳":{b200k:"夕張岳8号-4",west:512940,south:153580,east:513505,north:153920},
"布部":{b200k:"夕張岳9号-1",west:512490,south:155680,east:513060,north:156020},
"山部":{b200k:"夕張岳9号-2",west:512490,south:155380,east:513060,north:155720},
"布部岳":{b200k:"夕張岳9号-3",west:512040,south:155680,east:512610,north:156020},
"芦別岳":{b200k:"夕張岳9号-4",west:512040,south:155380,east:512610,north:155720},
"石狩金山":{b200k:"夕張岳10号-1",west:512490,south:155080,east:513055,north:155420},
"占冠":{b200k:"夕張岳10号-2",west:512490,south:154780,east:513055,north:155120},
"夕張岳":{b200k:"夕張岳10号-3",west:512040,south:155080,east:512605,north:155420},
"屏風山":{b200k:"夕張岳10号-4",west:512040,south:154780,east:512605,north:155120},
"占冠中央":{b200k:"夕張岳11号-1",west:512490,south:154480,east:513055,north:154820},
"日高":{b200k:"夕張岳11号-2",west:512490,south:154180,east:513055,north:154520},
"ニニウ":{b200k:"夕張岳11号-3",west:512040,south:154480,east:512605,north:154820},
"胆振福山":{b200k:"夕張岳11号-4",west:512040,south:154180,east:512605,north:154520},
"三岩":{b200k:"夕張岳12号-1",west:512490,south:153880,east:513055,north:154220},
"豊糠":{b200k:"夕張岳12号-2",west:512490,south:153580,east:513055,north:153920},
"仁世宇":{b200k:"夕張岳12号-3",west:512040,south:153880,east:512605,north:154220},
"振内":{b200k:"夕張岳12号-4",west:512040,south:153580,east:512605,north:153920},
"崕山":{b200k:"夕張岳13号-1",west:511590,south:155680,east:512160,north:156020},
"幾春別岳":{b200k:"夕張岳13号-2",west:511590,south:155380,east:512160,north:155720},
"芦別湖":{b200k:"夕張岳13号-3",west:511140,south:155680,east:511710,north:156020},
"桂沢湖":{b200k:"夕張岳13号-4",west:511140,south:155380,east:511710,north:155720},
"滝ノ沢岳":{b200k:"夕張岳14号-1",west:511590,south:155080,east:512155,north:155420},
"白金川":{b200k:"夕張岳14号-2",west:511590,south:154780,east:512155,north:155120},
"夕張川上流":{b200k:"夕張岳14号-3",west:511140,south:155080,east:511705,north:155420},
"シューパロ湖":{b200k:"夕張岳14号-4",west:511140,south:154780,east:511705,north:155120},
"長和":{b200k:"夕張岳15号-1",west:511590,south:154480,east:512155,north:154820},
"稲里":{b200k:"夕張岳15号-2",west:511590,south:154180,east:512155,north:154520},
"紅葉山":{b200k:"夕張岳15号-3",west:511140,south:154480,east:511705,north:154820},
"十三里":{b200k:"夕張岳15号-4",west:511140,south:154180,east:511705,north:154520},
"穂別":{b200k:"夕張岳16号-1",west:511590,south:153880,east:512155,north:154220},
"荷負":{b200k:"夕張岳16号-2",west:511590,south:153580,east:512155,north:153920},
"厚真川上流":{b200k:"夕張岳16号-3",west:511140,south:153880,east:511705,north:154220},
"胆振豊田":{b200k:"夕張岳16号-4",west:511140,south:153580,east:511705,north:153920},
"岩内川上流":{b200k:"浦河1号-1",west:514290,south:153280,east:514855,north:153620},
"歴舟川上流":{b200k:"浦河1号-2",west:514295,south:152980,east:514855,north:153320},
"札内川上流":{b200k:"浦河1号-3",west:513840,south:153280,east:514405,north:153620},
"ヤオロマップ岳":{b200k:"浦河1号-4",west:513845,south:152980,east:514405,north:153320},
"神威岳":{b200k:"浦河2号-1",west:514295,south:152680,east:514855,north:153020},
"ピリカヌプリ":{b200k:"浦河2号-2",west:514295,south:152380,east:514855,north:152720},
"ピリガイ山":{b200k:"浦河2号-3",west:513845,south:152680,east:514405,north:153020},
"元浦川上流":{b200k:"浦河2号-4",west:513845,south:152380,east:514405,north:152720},
"日高幌別川上流":{b200k:"浦河3号-1",west:514295,south:152080,east:514855,north:152420},
"上杵臼":{b200k:"浦河3号-2",west:514295,south:151780,east:514855,north:152120},
"上野深":{b200k:"浦河3号-3",west:513845,south:152080,east:514405,north:152420},
"西舎":{b200k:"浦河3号-4",west:513845,south:151780,east:514405,north:152120},
"様似":{b200k:"浦河4号-1",west:514295,south:151480,east:514855,north:151820},
"浦河":{b200k:"浦河4号-3",west:513845,south:151480,east:514405,north:151820},
"イドンナップ岳":{b200k:"浦河5号-1",west:513390,south:153280,east:513955,north:153620},
"日高大山":{b200k:"浦河5号-2",west:513395,south:152980,east:513955,north:153320},
"新冠湖":{b200k:"浦河5号-3",west:512940,south:153280,east:513505,north:153620},
"岩清水":{b200k:"浦河5号-4",west:512945,south:152980,east:513505,north:153320},
"セタウシ山":{b200k:"浦河6号-1",west:513395,south:152680,east:513955,north:153020},
"美河":{b200k:"浦河6号-2",west:513395,south:152380,east:513955,north:152720},
"農屋":{b200k:"浦河6号-3",west:512945,south:152680,east:513505,north:153020},
"ペラリ山":{b200k:"浦河6号-4",west:512945,south:152380,east:513505,north:152720},
"歌笛":{b200k:"浦河7号-1",west:513395,south:152080,east:513955,north:152420},
"荻伏":{b200k:"浦河7号-2",west:513330,south:151780,east:513890,north:152120},
"三石":{b200k:"浦河7号-3",west:512945,south:152080,east:513505,north:152420},
"貫気別山":{b200k:"浦河9号-1",west:512490,south:153280,east:513055,north:153620},
"太陽":{b200k:"浦河9号-2",west:512495,south:152980,east:513055,north:153320},
"日高旭":{b200k:"浦河9号-3",west:512040,south:153280,east:512605,north:153620},
"新和":{b200k:"浦河9号-4",west:512045,south:152980,east:512605,north:153320},
"明和":{b200k:"浦河10号-1",west:512495,south:152680,east:513055,north:153020},
"御園":{b200k:"浦河10号-2",west:512495,south:152380,east:513055,north:152720},
"共栄":{b200k:"浦河10号-3",west:512045,south:152680,east:512605,north:153020},
"静内":{b200k:"浦河10号-4",west:512000,south:152380,east:512560,north:152720},
"東静内":{b200k:"浦河11号-1",west:512470,south:152080,east:513030,north:152420},
"平取":{b200k:"浦河13号-1",west:511590,south:153280,east:512155,north:153620},
"庫富":{b200k:"浦河13号-2",west:511595,south:152980,east:512155,north:153320},
"旭岡":{b200k:"浦河13号-3",west:511140,south:153280,east:511705,north:153620},
"富川":{b200k:"浦河13号-4",west:511145,south:152980,east:511705,north:153320},
"厚賀":{b200k:"浦河14号-1",west:511595,south:152680,east:512155,north:153020},
"門別":{b200k:"浦河14号-3",west:511145,south:152680,east:511705,north:153020},
"宗谷岬":{b200k:"稚内3号-2",west:510680,south:163780,east:511270,north:164120},
"宗谷":{b200k:"稚内4号-1",west:510760,south:163480,east:511350,north:163820},
"モイマ山":{b200k:"稚内4号-2",west:510680,south:163180,east:511270,north:163520},
"富磯":{b200k:"稚内4号-3",west:510230,south:163480,east:510820,north:163820},
"声問":{b200k:"稚内4号-4",west:510230,south:163180,east:510820,north:163520},
"野寒布岬":{b200k:"稚内8号-1",west:509780,south:163480,east:510370,north:163820},
"稚内":{b200k:"稚内8号-2",west:509780,south:163180,east:510370,north:163520},
"船泊":{b200k:"稚内16号-3",west:507380,south:163490,east:507970,north:163830},
"礼文岳":{b200k:"稚内16号-4",west:507380,south:163180,east:507970,north:163520},
"知来別":{b200k:"稚内東16号-4",west:511185,south:163180,east:511775,north:163520},
"曲淵":{b200k:"天塩1号-1",west:510680,south:162880,east:511270,north:163220},
"下豊別":{b200k:"天塩1号-2",west:510680,south:162580,east:511270,north:162920},
"樺岡":{b200k:"天塩1号-3",west:510230,south:162880,east:510820,north:163220},
"沼川":{b200k:"天塩1号-4",west:510230,south:162580,east:510820,north:162920},
"豊幌":{b200k:"天塩2号-1",west:510680,south:162280,east:511265,north:162620},
"本流":{b200k:"天塩2号-2",west:510680,south:161980,east:511265,north:162320},
"豊富":{b200k:"天塩2号-3",west:510230,south:162280,east:510815,north:162620},
"幌延":{b200k:"天塩2号-4",west:510230,south:161980,east:510815,north:162320},
"安牛":{b200k:"天塩3号-1",west:510680,south:161680,east:511265,north:162020},
"雄信内":{b200k:"天塩3号-2",west:510680,south:161380,east:511265,north:161720},
"振老":{b200k:"天塩3号-3",west:510230,south:161680,east:510815,north:162020},
"更岸":{b200k:"天塩3号-4",west:510200,south:161380,east:510785,north:161720},
"泉源":{b200k:"天塩4号-1",west:510680,south:161080,east:511265,north:161420},
"天塩清川":{b200k:"天塩4号-2",west:510680,south:160780,east:511265,north:161120},
"丸松":{b200k:"天塩4号-3",west:510230,south:161080,east:510815,north:161420},
"遠別":{b200k:"天塩4号-4",west:510230,south:160780,east:510815,north:161120},
"上勇知":{b200k:"天塩5号-1",west:509700,south:162880,east:510290,north:163220},
"兜沼":{b200k:"天塩5号-2",west:509780,south:162580,east:510370,north:162920},
"夕来":{b200k:"天塩5号-4",west:509330,south:162580,east:509920,north:162920},
"豊徳":{b200k:"天塩6号-1",west:509690,south:162280,east:510275,north:162620},
"稚咲内":{b200k:"天塩6号-2",west:509780,south:161980,east:510365,north:162320},
"浜里":{b200k:"天塩7号-1",west:509780,south:161680,east:510365,north:162020},
"雄忠志内":{b200k:"天塩9号-4",west:508430,south:162580,east:509020,north:162920},
"鬼脇":{b200k:"天塩10号-3",west:508430,south:162280,east:509015,north:162620},
"鴛泊":{b200k:"天塩13号-2",west:507980,south:162600,east:508570,north:162940},
"香深":{b200k:"天塩13号-3",west:507530,south:162880,east:508120,north:163220},
"仙法志":{b200k:"天塩14号-1",west:507980,south:162280,east:508565,north:162620},
"東野":{b200k:"羽幌1号-1",west:510685,south:160480,east:511265,north:160820},
"大成":{b200k:"羽幌1号-2",west:510685,south:160180,east:511265,north:160520},
"歌越":{b200k:"羽幌1号-3",west:510235,south:160480,east:510815,north:160820},
"初山別":{b200k:"羽幌1号-4",west:510235,south:160180,east:510815,north:160520},
"初山別川上流":{b200k:"羽幌2号-1",west:510685,south:159880,east:511265,north:160220},
"羽幌貯水池":{b200k:"羽幌2号-2",west:510685,south:159580,east:511265,north:159920},
"天塩有明":{b200k:"羽幌2号-3",west:510235,south:159880,east:510815,north:160220},
"曙":{b200k:"羽幌2号-4",west:510235,south:159580,east:510815,north:159920},
"幌別山":{b200k:"羽幌3号-1",west:510685,south:159280,east:511265,north:159620},
"白頭山":{b200k:"羽幌3号-2",west:510685,south:158980,east:511265,north:159320},
"上羽幌":{b200k:"羽幌3号-3",west:510235,south:159280,east:510815,north:159620},
"三溪":{b200k:"羽幌3号-4",west:510235,south:158980,east:510815,north:159320},
"大天狗岳":{b200k:"羽幌4号-1",west:510685,south:158680,east:511260,north:159020},
"滝下":{b200k:"羽幌4号-2",west:510685,south:158380,east:511260,north:158720},
"ルペシュペナイ川":{b200k:"羽幌4号-3",west:510235,south:158680,east:510810,north:159020},
"達布":{b200k:"羽幌4号-4",west:510235,south:158380,east:510810,north:158720},
"羽幌":{b200k:"羽幌6号-2",west:509785,south:159580,east:510365,north:159920},
"苫前":{b200k:"羽幌7号-1",west:509785,south:159280,east:510365,north:159620},
"力昼":{b200k:"羽幌7号-2",west:509785,south:158980,east:510365,north:159320},
"港町":{b200k:"羽幌8号-1",west:509785,south:158680,east:510360,north:159020},
"小平":{b200k:"羽幌8号-2",west:509785,south:158380,east:510360,north:158720},
"焼尻島":{b200k:"羽幌10号-3",west:508640,south:159880,east:509220,north:160220},
"ホロピリ湖":{b200k:"留萌1号-1",west:510685,south:158080,east:511260,north:158420},
"恵比島":{b200k:"留萌1号-2",west:510685,south:157780,east:511260,north:158120},
"ポロシリ山":{b200k:"留萌1号-3",west:510235,south:158080,east:510810,north:158420},
"幌糠":{b200k:"留萌1号-4",west:510235,south:157780,east:510810,north:158120},
"石狩沼田":{b200k:"留萌2号-1",west:510685,south:157480,east:511260,north:157820},
"妹背牛":{b200k:"留萌2号-2",west:510685,south:157180,east:511260,north:157520},
"美葉牛":{b200k:"留萌2号-3",west:510235,south:157480,east:510810,north:157820},
"恵岱別":{b200k:"留萌2号-4",west:510235,south:157180,east:510810,north:157520},
"江部乙":{b200k:"留萌3号-1",west:510690,south:156880,east:511260,north:157220},
"滝川":{b200k:"留萌3号-2",west:510690,south:156580,east:511260,north:156920},
"石狩大和":{b200k:"留萌3号-3",west:510240,south:156880,east:510810,north:157220},
"総進":{b200k:"留萌3号-4",west:510240,south:156580,east:510810,north:156920},
"砂川":{b200k:"留萌4号-1",west:510690,south:156280,east:511260,north:156620},
"茶志内":{b200k:"留萌4号-2",west:510690,south:155980,east:511260,north:156320},
"浦臼":{b200k:"留萌4号-3",west:510240,south:156280,east:510810,north:156620},
"晩生内":{b200k:"留萌4号-4",west:510240,south:155980,east:510810,north:156320},
"留萌":{b200k:"留萌5号-1",west:509785,south:158080,east:510360,north:158420},
"大和田":{b200k:"留萌5号-2",west:509785,south:157780,east:510360,north:158120},
"増毛":{b200k:"留萌5号-4",west:509335,south:157780,east:509910,north:158120},
"信砂御料":{b200k:"留萌6号-1",west:509785,south:157480,east:510360,north:157820},
"恵岱岳":{b200k:"留萌6号-2",west:509785,south:157180,east:510360,north:157520},
"暑寒沢":{b200k:"留萌6号-3",west:509335,south:157480,east:509910,north:157820},
"暑寒別岳":{b200k:"留萌6号-4",west:509280,south:157180,east:509855,north:157520},
"吉野":{b200k:"留萌7号-1",west:509790,south:156880,east:510360,north:157220},
"南幌加":{b200k:"留萌7号-2",west:509790,south:156580,east:510360,north:156920},
"御料地":{b200k:"留萌7号-3",west:509340,south:156880,east:509910,north:157220},
"四番川":{b200k:"留萌7号-4",west:509340,south:156580,east:509910,north:156920},
"ピンネシリ":{b200k:"留萌8号-1",west:509790,south:156280,east:510360,north:156620},
"月形":{b200k:"留萌8号-2",west:509790,south:155980,east:510360,north:156320},
"二番川":{b200k:"留萌8号-3",west:509340,south:156280,east:509910,north:156620},
"青山中央":{b200k:"留萌8号-4",west:509340,south:155980,east:509910,north:156320},
"別苅":{b200k:"留萌10号-1",west:508820,south:157500,east:509395,north:157840},
"雄冬":{b200k:"留萌10号-2",west:508770,south:157180,east:509345,north:157520},
"浜益":{b200k:"留萌11号-1",west:508820,south:156880,east:509390,north:157220},
"柏木":{b200k:"留萌11号-2",west:508820,south:156580,east:509390,north:156920},
"濃昼":{b200k:"留萌12号-1",west:508890,south:156280,east:509460,north:156620},
"厚田":{b200k:"留萌12号-2",west:508890,south:155980,east:509460,north:156320},
"幾春別":{b200k:"札幌1号-1",west:510690,south:155680,east:511260,north:156020},
"三笠":{b200k:"札幌1号-2",west:510690,south:155380,east:511260,north:155720},
"美唄":{b200k:"札幌1号-3",west:510240,south:155680,east:510810,north:156020},
"岩見沢":{b200k:"札幌1号-4",west:510240,south:155380,east:510810,north:155720},
"美流渡":{b200k:"札幌2号-1",west:510690,south:155080,east:511255,north:155420},
"夕張":{b200k:"札幌2号-2",west:510690,south:154780,east:511255,north:155120},
"上志文":{b200k:"札幌2号-3",west:510240,south:155080,east:510805,north:155420},
"栗山":{b200k:"札幌2号-4",west:510240,south:154780,east:510805,north:155120},
"雨霧山":{b200k:"札幌3号-1",west:510690,south:154480,east:511255,north:154820},
"川端":{b200k:"札幌3号-2",west:510690,south:154180,east:511255,north:154520},
"三川":{b200k:"札幌3号-3",west:510240,south:154480,east:510805,north:154820},
"追分":{b200k:"札幌3号-4",west:510240,south:154180,east:510805,north:154520},
"幌内":{b200k:"札幌4号-1",west:510690,south:153880,east:511255,north:154220},
"厚真":{b200k:"札幌4号-2",west:510690,south:153580,east:511255,north:153920},
"早来":{b200k:"札幌4号-3",west:510240,south:153880,east:510805,north:154220},
"遠浅":{b200k:"札幌4号-4",west:510240,south:153580,east:510805,north:153920},
"市南":{b200k:"札幌5号-1",west:509790,south:155680,east:510360,north:156020},
"上幌向":{b200k:"札幌5号-2",west:509790,south:155380,east:510360,north:155720},
"弁華別":{b200k:"札幌5号-3",west:509340,south:155680,east:509910,north:156020},
"石狩当別":{b200k:"札幌5号-4",west:509340,south:155380,east:509910,north:155720},
"栗沢":{b200k:"札幌6号-1",west:509790,south:155080,east:510355,north:155420},
"長沼":{b200k:"札幌6号-2",west:509790,south:154780,east:510355,north:155120},
"江別":{b200k:"札幌6号-3",west:509340,south:155080,east:509905,north:155420},
"野幌":{b200k:"札幌6号-4",west:509340,south:154780,east:509905,north:155120},
"南長沼":{b200k:"札幌7号-1",west:509790,south:154480,east:510355,north:154820},
"長都":{b200k:"札幌7号-2",west:509790,south:154180,east:510355,north:154520},
"北広島":{b200k:"札幌7号-3",west:509340,south:154480,east:509905,north:154820},
"恵庭":{b200k:"札幌7号-4",west:509340,south:154180,east:509905,north:154520},
"千歳":{b200k:"札幌8号-1",west:509790,south:153880,east:510355,north:154220},
"ウトナイ湖":{b200k:"札幌8号-2",west:509790,south:153580,east:510355,north:153920},
"胆振蘭越":{b200k:"札幌8号-3",west:509340,south:153880,east:509905,north:154220},
"胆振高丘":{b200k:"札幌8号-4",west:509340,south:153580,east:509905,north:153920},
"望来":{b200k:"札幌9号-1",west:508860,south:155680,east:509430,north:156020},
"太美":{b200k:"札幌9号-2",west:508890,south:155380,east:509460,north:155720},
"石狩":{b200k:"札幌9号-4",west:508440,south:155380,east:509010,north:155720},
"札幌東北部":{b200k:"札幌10号-1",west:508890,south:155080,east:509455,north:155420},
"札幌東部":{b200k:"札幌10号-2",west:508890,south:154780,east:509455,north:155120},
"札幌北部":{b200k:"札幌10号-3",west:508440,south:155080,east:509005,north:155420},
"札幌":{b200k:"札幌10号-4",west:508440,south:154780,east:509005,north:155120},
"清田":{b200k:"札幌11号-1",west:508890,south:154480,east:509455,north:154820},
"島松山":{b200k:"札幌11号-2",west:508890,south:154180,east:509455,north:154520},
"石山":{b200k:"札幌11号-3",west:508440,south:154480,east:509005,north:154820},
"空沼岳":{b200k:"札幌11号-4",west:508440,south:154180,east:509005,north:154520},
"支笏湖温泉":{b200k:"札幌12号-1",west:508890,south:153880,east:509455,north:154220},
"樽前山":{b200k:"札幌12号-2",west:508890,south:153580,east:509455,north:153920},
"恵庭岳":{b200k:"札幌12号-3",west:508440,south:153880,east:509005,north:154220},
"風不死岳":{b200k:"札幌12号-4",west:508440,south:153580,east:509005,north:153920},
"小樽東部":{b200k:"札幌13号-4",west:507540,south:155380,east:508110,north:155720},
"銭函":{b200k:"札幌14号-1",west:507990,south:155095,east:508560,north:155435},
"手稲山":{b200k:"札幌14号-2",west:507990,south:154780,east:508555,north:155120},
"張碓":{b200k:"札幌14号-3",west:507540,south:155080,east:508105,north:155420},
"余市岳":{b200k:"札幌14号-4",west:507540,south:154780,east:508105,north:155120},
"定山溪":{b200k:"札幌15号-1",west:507990,south:154480,east:508555,north:154820},
"札幌岳":{b200k:"札幌15号-2",west:507990,south:154180,east:508555,north:154520},
"無意根山":{b200k:"札幌15号-3",west:507540,south:154480,east:508105,north:154820},
"中山峠":{b200k:"札幌15号-4",west:507540,south:154180,east:508105,north:154520},
"漁岳":{b200k:"札幌16号-1",west:507990,south:153880,east:508555,north:154220},
"白老岳":{b200k:"札幌16号-2",west:507990,south:153580,east:508555,north:153920},
"栄":{b200k:"札幌16号-3",west:507540,south:153880,east:508105,north:154220},
"双葉":{b200k:"札幌16号-4",west:507540,south:153580,east:508105,north:153920},
"軽舞":{b200k:"苫小牧1号-1",west:510690,south:153280,east:511255,north:153620},
"鵡川":{b200k:"苫小牧1号-2",west:510695,south:152980,east:511255,north:153320},
"上厚真":{b200k:"苫小牧1号-3",west:510240,south:153280,east:510805,north:153620},
"勇払":{b200k:"苫小牧5号-1",west:509790,south:153280,east:510355,north:153620},
"苫小牧":{b200k:"苫小牧5号-3",west:509340,south:153280,east:509905,north:153620},
"錦岡":{b200k:"苫小牧9号-1",west:508890,south:153280,east:509455,north:153620},
"社台":{b200k:"苫小牧9号-2",west:508895,south:152980,east:509455,north:153320},
"森野":{b200k:"苫小牧9号-3",west:508440,south:153280,east:509005,north:153620},
"白老":{b200k:"苫小牧9号-4",west:508445,south:152980,east:509005,north:153320},
"徳舜瞥山":{b200k:"苫小牧13号-1",west:507990,south:153280,east:508555,north:153620},
"飛生":{b200k:"苫小牧13号-2",west:507995,south:152980,east:508555,north:153320},
"蟠溪":{b200k:"苫小牧13号-3",west:507540,south:153280,east:508105,north:153620},
"カルルス温泉":{b200k:"苫小牧13号-4",west:507545,south:152980,east:508105,north:153320},
"登別温泉":{b200k:"苫小牧14号-1",west:508035,south:152680,east:508595,north:153020},
"鷲別岳":{b200k:"苫小牧14号-3",west:507545,south:152680,east:508105,north:153020},
"室蘭東北部":{b200k:"苫小牧14号-4",west:507545,south:152380,east:508105,north:152720},
"尻屋":{b200k:"尻屋崎12号-2",west:508900,south:148805,east:509450,north:149145},
"入口":{b200k:"尻屋崎12号-4",west:508450,south:148780,east:509000,north:149120},
"尾札部":{b200k:"尻屋崎13号-4",west:507545,south:150580,east:508100,north:150920},
"恵山":{b200k:"尻屋崎14号-1",west:507995,south:150400,east:508550,north:150740},
"古武井":{b200k:"尻屋崎14号-3",west:507545,south:150280,east:508100,north:150620},
"戸井":{b200k:"尻屋崎14号-4",west:507545,south:149980,east:508100,north:150320},
"木野部":{b200k:"尻屋崎16号-1",west:507995,south:149080,east:508550,north:149420},
"大畑":{b200k:"尻屋崎16号-2",west:508000,south:148780,east:508550,north:149120},
"下風呂":{b200k:"尻屋崎16号-3",west:507545,south:149080,east:508100,north:149420},
"薬研温泉":{b200k:"尻屋崎16号-4",west:507550,south:148780,east:508100,north:149120},
"小樽西部":{b200k:"岩内1号-2",west:507090,south:155380,east:507660,north:155720},
"余市":{b200k:"岩内1号-4",west:506640,south:155380,east:507210,north:155720},
"於古発山":{b200k:"岩内2号-1",west:507090,south:155080,east:507655,north:155420},
"阿女鱒岳":{b200k:"岩内2号-2",west:507090,south:154780,east:507655,north:155120},
"仁木":{b200k:"岩内2号-3",west:506640,south:155080,east:507205,north:155420},
"赤井川":{b200k:"岩内2号-4",west:506640,south:154780,east:507205,north:155120},
"本倶登山":{b200k:"岩内3号-1",west:507090,south:154480,east:507655,north:154820},
"京極":{b200k:"岩内3号-2",west:507090,south:154180,east:507655,north:154520},
"瑞穂":{b200k:"岩内3号-3",west:506640,south:154480,east:507205,north:154820},
"倶知安":{b200k:"岩内3号-4",west:506640,south:154180,east:507205,north:154520},
"喜茂別":{b200k:"岩内4号-1",west:507090,south:153880,east:507655,north:154220},
"留寿都":{b200k:"岩内4号-2",west:507090,south:153580,east:507655,north:153920},
"羊蹄山":{b200k:"岩内4号-3",west:506640,south:153880,east:507205,north:154220},
"三ノ原":{b200k:"岩内4号-4",west:506640,south:153580,east:507205,north:153920},
"豊浜":{b200k:"岩内5号-2",west:506190,south:155410,east:506760,north:155750},
"美国":{b200k:"岩内5号-3",west:505785,south:155680,east:506355,north:156020},
"両古美山":{b200k:"岩内5号-4",west:505740,south:155380,east:506310,north:155720},
"然別":{b200k:"岩内6号-1",west:506190,south:155080,east:506755,north:155420},
"銀山":{b200k:"岩内6号-2",west:506190,south:154780,east:506755,north:155120},
"熊追山":{b200k:"岩内6号-3",west:505740,south:155080,east:506305,north:155420},
"茅沼":{b200k:"岩内6号-4",west:505720,south:154780,east:506285,north:155120},
"小沢":{b200k:"岩内7号-1",west:506190,south:154480,east:506755,north:154820},
"ニセコアンヌプリ":{b200k:"岩内7号-2",west:506190,south:154180,east:506755,north:154520},
"岩内":{b200k:"岩内7号-3",west:505740,south:154480,east:506305,north:154820},
"チセヌプリ":{b200k:"岩内7号-4",west:505740,south:154180,east:506305,north:154520},
"ニセコ":{b200k:"岩内8号-1",west:506190,south:153880,east:506755,north:154220},
"昆布岳":{b200k:"岩内8号-2",west:506190,south:153580,east:506755,north:153920},
"蘭越":{b200k:"岩内8号-3",west:505740,south:153880,east:506305,north:154220},
"後志立川":{b200k:"岩内8号-4",west:505740,south:153580,east:506305,north:153920},
"余別":{b200k:"岩内9号-1",west:505290,south:155680,east:505860,north:156020},
"ポンネアンチシ山":{b200k:"岩内9号-2",west:505290,south:155380,east:505860,north:155720},
"神威岬":{b200k:"岩内9号-3",west:504840,south:155695,east:505410,north:156035},
"珊内":{b200k:"岩内9号-4",west:504840,south:155380,east:505410,north:155720},
"神恵内":{b200k:"岩内10号-1",west:505290,south:155080,east:505855,north:155420},
"雷電岬":{b200k:"岩内11号-1",west:505290,south:154480,east:505855,north:154820},
"雷電山":{b200k:"岩内11号-2",west:505290,south:154180,east:505855,north:154520},
"島古丹":{b200k:"岩内11号-4",west:504840,south:154180,east:505405,north:154520},
"目名":{b200k:"岩内12号-1",west:505290,south:153880,east:505855,north:154220},
"白井川":{b200k:"岩内12号-2",west:505290,south:153580,east:505855,north:153920},
"歌棄":{b200k:"岩内12号-3",west:504840,south:153880,east:505405,north:154220},
"熱郛":{b200k:"岩内12号-4",west:504840,south:153580,east:505405,north:153920},
"寿都":{b200k:"岩内16号-1",west:504390,south:153880,east:504955,north:154220},
"本目":{b200k:"岩内16号-2",west:504390,south:153580,east:504955,north:153920},
"永豊":{b200k:"岩内16号-4",west:503940,south:153580,east:504505,north:153920},
"積丹岬":{b200k:"岩内北8号-4",west:505530,south:155980,east:506100,north:156320},
"仲洞爺":{b200k:"室蘭1号-1",west:507090,south:153280,east:507655,north:153620},
"壮瞥":{b200k:"室蘭1号-2",west:507095,south:152980,east:507655,north:153320},
"洞爺":{b200k:"室蘭1号-3",west:506640,south:153280,east:507205,north:153620},
"洞爺湖温泉":{b200k:"室蘭1号-4",west:506580,south:152980,east:507140,north:153320},
"稀府":{b200k:"室蘭2号-1",west:507095,south:152680,east:507655,north:153020},
"本輪西":{b200k:"室蘭2号-2",west:507095,south:152380,east:507655,north:152720},
"伊達":{b200k:"室蘭2号-3",west:506645,south:152680,east:507205,north:153020},
"室蘭":{b200k:"室蘭3号-1",west:507320,south:152080,east:507880,north:152420},
"鹿部":{b200k:"室蘭4号-4",west:506645,south:151180,east:507205,north:151520},
"豊浦":{b200k:"室蘭5号-1",west:506190,south:153280,east:506755,north:153620},
"礼文華峠":{b200k:"室蘭5号-3",west:505740,south:153280,east:506305,north:153620},
"礼文華":{b200k:"室蘭5号-4",west:505745,south:152980,east:506305,north:153320},
"砂原":{b200k:"室蘭8号-1",west:506230,south:151480,east:506790,north:151820},
"駒ヶ岳":{b200k:"室蘭8号-2",west:506195,south:151180,east:506755,north:151520},
"渡島森":{b200k:"室蘭8号-3",west:505745,south:151480,east:506305,north:151820},
"姫川":{b200k:"室蘭8号-4",west:505745,south:151180,east:506305,north:151520},
"静狩":{b200k:"室蘭9号-1",west:505290,south:153280,east:505855,north:153620},
"長万部":{b200k:"室蘭9号-2",west:505295,south:152980,east:505855,north:153320},
"黒松内":{b200k:"室蘭9号-3",west:504840,south:153280,east:505405,north:153620},
"渡島双葉":{b200k:"室蘭9号-4",west:504845,south:152980,east:505405,north:153320},
"国縫":{b200k:"室蘭10号-3",west:504845,south:152680,east:505405,north:153020},
"黒岩":{b200k:"室蘭10号-4",west:504845,south:152380,east:505405,north:152720},
"落部":{b200k:"室蘭11号-2",west:505295,south:151780,east:505855,north:152120},
"八雲":{b200k:"室蘭11号-3",west:504845,south:152080,east:505405,north:152420},
"山越":{b200k:"室蘭11号-4",west:504845,south:151780,east:505405,north:152120},
"濁川":{b200k:"室蘭12号-1",west:505295,south:151480,east:505855,north:151820},
"狗神岳":{b200k:"室蘭12号-2",west:505295,south:151180,east:505855,north:151520},
"野田追岳":{b200k:"室蘭12号-3",west:504845,south:151480,east:505405,north:151820},
"乙部岳":{b200k:"室蘭12号-4",west:504845,south:151180,east:505405,north:151520},
"大平山":{b200k:"室蘭13号-1",west:504390,south:153280,east:504955,north:153620},
"二股温泉":{b200k:"室蘭13号-2",west:504395,south:152980,east:504955,north:153320},
"賀老高原":{b200k:"室蘭13号-3",west:503940,south:153280,east:504505,north:153620},
"メップ岳":{b200k:"室蘭13号-4",west:503945,south:152980,east:504505,north:153320},
"美利河":{b200k:"室蘭14号-1",west:504395,south:152680,east:504955,north:153020},
"ルコツ岳":{b200k:"室蘭14号-2",west:504395,south:152380,east:504955,north:152720},
"今金":{b200k:"室蘭14号-3",west:503945,south:152680,east:504505,north:153020},
"八束":{b200k:"室蘭14号-4",west:503945,south:152380,east:504505,north:152720},
"上八雲":{b200k:"室蘭15号-1",west:504395,south:152080,east:504955,north:152420},
"春日":{b200k:"室蘭15号-2",west:504395,south:151780,east:504955,north:152120},
"後志日進":{b200k:"室蘭15号-3",west:503945,south:152080,east:504505,north:152420},
"遊楽部岳":{b200k:"室蘭15号-4",west:503945,south:151780,east:504505,north:152120},
"砂蘭部岳":{b200k:"室蘭16号-1",west:504395,south:151480,east:504955,north:151820},
"ササマクリ山":{b200k:"室蘭16号-2",west:504395,south:151180,east:504955,north:151520},
"渡島鮎川":{b200k:"室蘭16号-3",west:503945,south:151480,east:504505,north:151820},
"相沼":{b200k:"室蘭16号-4",west:503945,south:151180,east:504505,north:151520},
"臼尻":{b200k:"函館1号-1",west:507095,south:150880,east:507650,north:151220},
"川汲":{b200k:"函館1号-2",west:507095,south:150580,east:507650,north:150920},
"横津岳":{b200k:"函館1号-3",west:506645,south:150880,east:507200,north:151220},
"赤川":{b200k:"函館1号-4",west:506645,south:150580,east:507200,north:150920},
"鉄山":{b200k:"函館2号-1",west:507095,south:150280,east:507650,north:150620},
"汐首":{b200k:"函館2号-2",west:507095,south:149980,east:507650,north:150320},
"五稜郭":{b200k:"函館2号-3",west:506645,south:150280,east:507200,north:150620},
"大間":{b200k:"函館3号-2",west:507095,south:149380,east:507650,north:149720},
"佐井":{b200k:"函館4号-1",west:507035,south:149080,east:507590,north:149420},
"白土山":{b200k:"函館4号-2",west:507100,south:148780,east:507650,north:149120},
"長後":{b200k:"函館4号-4",west:506650,south:148780,east:507200,north:149120},
"大沼公園":{b200k:"函館5号-1",west:506195,south:150880,east:506750,north:151220},
"七飯":{b200k:"函館5号-2",west:506195,south:150580,east:506750,north:150920},
"木地挽山":{b200k:"函館5号-3",west:505745,south:150880,east:506300,north:151220},
"陣屋":{b200k:"函館5号-4",west:505745,south:150580,east:506300,north:150920},
"函館":{b200k:"函館6号-1",west:506195,south:150260,east:506750,north:150600},
"茂辺地":{b200k:"函館6号-3",west:505745,south:150280,east:506300,north:150620},
"当別":{b200k:"函館6号-4",west:505745,south:149980,east:506300,north:150320},
"設計山":{b200k:"函館9号-1",west:505295,south:150880,east:505850,north:151220},
"富里":{b200k:"函館9号-2",west:505295,south:150580,east:505850,north:150920},
"鶉町":{b200k:"函館9号-3",west:504845,south:150880,east:505400,north:151220},
"館":{b200k:"函館9号-4",west:504845,south:150580,east:505400,north:150920},
"桂岳":{b200k:"函館10号-1",west:505295,south:150280,east:505850,north:150620},
"木古内":{b200k:"函館10号-2",west:505295,south:149980,east:505850,north:150320},
"瓜谷山":{b200k:"函館10号-3",west:504845,south:150280,east:505400,north:150620},
"神明":{b200k:"函館10号-4",west:504845,south:149980,east:505400,north:150320},
"渡島知内":{b200k:"函館11号-1",west:505295,south:149680,east:505850,north:150020},
"涌元":{b200k:"函館11号-2",west:505295,south:149380,east:505850,north:149720},
"湯ノ里":{b200k:"函館11号-3",west:504845,south:149680,east:505400,north:150020},
"千軒":{b200k:"函館11号-4",west:504845,south:149380,east:505400,north:149720},
"乙部":{b200k:"函館13号-1",west:504395,south:150880,east:504950,north:151220},
"江差":{b200k:"函館13号-2",west:504390,south:150580,east:504945,north:150920},
"桂岡":{b200k:"函館14号-1",west:504395,south:150280,east:504950,north:150620},
"湯ノ岱":{b200k:"函館14号-2",west:504395,south:149980,east:504950,north:150320},
"上ノ国":{b200k:"函館14号-3",west:503945,south:150280,east:504500,north:150620},
"石崎":{b200k:"函館14号-4",west:503945,south:149980,east:504500,north:150320},
"七ッ岳":{b200k:"函館15号-1",west:504395,south:149680,east:504950,north:150020},
"大千軒岳":{b200k:"函館15号-2",west:504395,south:149380,east:504950,north:149720},
"原口":{b200k:"函館15号-3",west:503895,south:149680,east:504450,north:150020},
"江良":{b200k:"函館15号-4",west:503895,south:149380,east:504450,north:149720},
"渡島福島":{b200k:"函館12号-3",west:504845,south:149080,east:505400,north:149420},
"渡島吉岡":{b200k:"函館16号-1",west:504395,south:149080,east:504950,north:149420},
"白神岬":{b200k:"函館16号-2",west:504570,south:148780,east:505120,north:149120},
"松前":{b200k:"函館16号-3",west:503945,south:149080,east:504500,north:149420},
"狩場山":{b200k:"久遠1号-1",west:503490,south:153280,east:504055,north:153620},
"カスベ岳":{b200k:"久遠1号-2",west:503495,south:152980,east:504055,north:153320},
"須築":{b200k:"久遠1号-3",west:503040,south:153280,east:503605,north:153620},
"美谷":{b200k:"久遠1号-4",west:503040,south:152980,east:503600,north:153320},
"瀬棚":{b200k:"久遠2号-1",west:503405,south:152680,east:503965,north:153020},
"北檜山":{b200k:"久遠2号-2",west:503495,south:152380,east:504055,north:152720},
"太櫓":{b200k:"久遠2号-4",west:503045,south:152380,east:503605,north:152720},
"左股":{b200k:"久遠3号-1",west:503495,south:152080,east:504055,north:152420},
"貝取澗":{b200k:"久遠3号-2",west:503495,south:151780,east:504055,north:152120},
"後志太田":{b200k:"久遠3号-3",west:503045,south:152080,east:503605,north:152420},
"久遠":{b200k:"久遠3号-4",west:503045,south:151780,east:503605,north:152120},
"熊石":{b200k:"久遠4号-1",west:503495,south:151480,east:504055,north:151820},
"奥尻":{b200k:"久遠7号-4",west:502145,south:151780,east:502705,north:152120},
"赤石":{b200k:"久遠12号-1",west:501815,south:151480,east:502375,north:151820},
"青苗":{b200k:"久遠12号-2",west:501815,south:151180,east:502375,north:151520},
"神威脇":{b200k:"久遠11号-2",west:501695,south:151780,east:502255,north:152120},
"原歌":{b200k:"久遠北4号-2",west:503490,south:153580,east:504055,north:153920},
"渡島大島":{b200k:"渡島大島12号-1",west:501485,south:149200,east:502040,north:149540},
"猿ヶ森":{b200k:"野辺地9号-1",west:508900,south:148480,east:509450,north:148820},
"蒲野沢":{b200k:"野辺地9号-3",west:508450,south:148480,east:509000,north:148820},
"近川":{b200k:"野辺地9号-4",west:508530,south:148180,east:509080,north:148520},
"陸奥泊":{b200k:"野辺地10号-1",west:508900,south:147880,east:509450,north:148220},
"出戸":{b200k:"野辺地10号-2",west:508900,south:147580,east:509450,north:147920},
"有畑":{b200k:"野辺地10号-3",west:508450,south:147880,east:509000,north:148220},
"陸奥横浜":{b200k:"野辺地10号-4",west:508420,south:147580,east:508970,north:147920},
"尾駮":{b200k:"野辺地11号-1",west:508900,south:147280,east:509450,north:147620},
"天ヶ森":{b200k:"野辺地11号-2",west:508900,south:146980,east:509450,north:147320},
"戸鎖":{b200k:"野辺地11号-3",west:508450,south:147280,east:509000,north:147620},
"平沼":{b200k:"野辺地11号-4",west:508450,south:146980,east:509000,north:147320},
"六川目":{b200k:"野辺地12号-1",west:508900,south:146680,east:509445,north:147020},
"浜三沢":{b200k:"野辺地12号-2",west:508900,south:146380,east:509445,north:146720},
"甲地":{b200k:"野辺地12号-3",west:508450,south:146680,east:508995,north:147020},
"三沢":{b200k:"野辺地12号-4",west:508450,south:146380,east:508995,north:146720},
"むつ":{b200k:"野辺地13号-1",west:508000,south:148480,east:508550,north:148820},
"城ヶ沢":{b200k:"野辺地13号-2",west:508020,south:148180,east:508570,north:148520},
"恐山":{b200k:"野辺地13号-3",west:507550,south:148480,east:508100,north:148820},
"戸沢":{b200k:"野辺地13号-4",west:507550,south:148180,east:508100,north:148520},
"目ノ越":{b200k:"野辺地15号-1",west:508000,south:147280,east:508550,north:147620},
"野辺地":{b200k:"野辺地15号-2",west:508000,south:146980,east:508550,north:147320},
"清水川":{b200k:"野辺地15号-3",west:507550,south:147280,east:508100,north:147620},
"狩場沢":{b200k:"野辺地15号-4",west:507550,south:146980,east:508100,north:147320},
"乙供":{b200k:"野辺地16号-1",west:508000,south:146680,east:508545,north:147020},
"七戸":{b200k:"野辺地16号-2",west:508000,south:146380,east:508545,north:146720},
"上清水目":{b200k:"野辺地16号-3",west:507550,south:146680,east:508095,north:147020},
"銀南木":{b200k:"野辺地16号-4",west:507550,south:146380,east:508095,north:146720},
"陸中中野":{b200k:"八戸3号-3",west:510250,south:144880,east:510795,north:145220},
"久慈":{b200k:"八戸3号-4",west:510255,south:144580,east:510795,north:144920},
"普代":{b200k:"八戸4号-2",west:510705,south:143980,east:511245,north:144320},
"陸中野田":{b200k:"八戸4号-3",west:510270,south:144280,east:510810,north:144620},
"玉川":{b200k:"八戸4号-4",west:510255,south:143980,east:510795,north:144320},
"八戸東部":{b200k:"八戸5号-4",west:509350,south:145780,east:509895,north:146120},
"角浜":{b200k:"八戸6号-1",west:509800,south:145480,east:510345,north:145820},
"種市":{b200k:"八戸6号-2",west:509800,south:145180,east:510345,north:145520},
"新井田":{b200k:"八戸6号-3",west:509350,south:145480,east:509895,north:145820},
"階上岳":{b200k:"八戸6号-4",west:509350,south:145180,east:509895,north:145520},
"陸中大野":{b200k:"八戸7号-1",west:509800,south:144880,east:510345,north:145220},
"大川目":{b200k:"八戸7号-2",west:509805,south:144580,east:510345,north:144920},
"小軽米":{b200k:"八戸7号-3",west:509350,south:144880,east:509895,north:145220},
"戸呂町":{b200k:"八戸7号-4",west:509355,south:144580,east:509895,north:144920},
"岩瀬張":{b200k:"八戸8号-1",west:509805,south:144280,east:510345,north:144620},
"端神":{b200k:"八戸8号-2",west:509805,south:143980,east:510345,north:144320},
"陸中関":{b200k:"八戸8号-3",west:509355,south:144280,east:509895,north:144620},
"安家森":{b200k:"八戸8号-4",west:509355,south:143980,east:509895,north:144320},
"百石":{b200k:"八戸9号-1",west:508900,south:146080,east:509445,north:146420},
"八戸西部":{b200k:"八戸9号-2",west:508900,south:145780,east:509445,north:146120},
"犬落瀬":{b200k:"八戸9号-3",west:508450,south:146080,east:508995,north:146420},
"五戸":{b200k:"八戸9号-4",west:508450,south:145780,east:508995,north:146120},
"苫米地":{b200k:"八戸10号-1",west:508900,south:145480,east:509445,north:145820},
"市野沢":{b200k:"八戸10号-2",west:508900,south:145180,east:509445,north:145520},
"剣吉":{b200k:"八戸10号-3",west:508450,south:145480,east:508995,north:145820},
"三戸":{b200k:"八戸10号-4",west:508450,south:145180,east:508995,north:145520},
"陸中軽米":{b200k:"八戸11号-1",west:508900,south:144880,east:509445,north:145220},
"伊保内":{b200k:"八戸11号-2",west:508905,south:144580,east:509445,north:144920},
"陸奥福岡":{b200k:"八戸11号-3",west:508450,south:144880,east:508995,north:145220},
"一戸":{b200k:"八戸11号-4",west:508455,south:144580,east:508995,north:144920},
"陸中戸田":{b200k:"八戸12号-1",west:508905,south:144280,east:509445,north:144620},
"葛巻":{b200k:"八戸12号-2",west:508905,south:143980,east:509445,north:144320},
"仁昌寺":{b200k:"八戸12号-3",west:508455,south:144280,east:508995,north:144620},
"宇別":{b200k:"八戸12号-4",west:508455,south:143980,east:508995,north:144320},
"十和田":{b200k:"八戸13号-1",west:508000,south:146080,east:508545,north:146420},
"切田":{b200k:"八戸13号-2",west:508000,south:145780,east:508545,north:146120},
"法量":{b200k:"八戸13号-3",west:507550,south:146080,east:508095,north:146420},
"奥瀬":{b200k:"八戸13号-4",west:507550,south:145780,east:508095,north:146120},
"金ヶ沢":{b200k:"八戸14号-1",west:508000,south:145480,east:508545,north:145820},
"田子":{b200k:"八戸14号-2",west:508000,south:145180,east:508545,north:145520},
"戸来岳":{b200k:"八戸14号-3",west:507550,south:145480,east:508095,north:145820},
"清水頭":{b200k:"八戸14号-4",west:507550,south:145180,east:508095,north:145520},
"上斗米":{b200k:"八戸15号-1",west:508000,south:144880,east:508545,north:145220},
"浄法寺":{b200k:"八戸15号-2",west:508005,south:144580,east:508545,north:144920},
"石亀":{b200k:"八戸15号-3",west:507550,south:144880,east:508095,north:145220},
"稲庭岳":{b200k:"八戸15号-4",west:507555,south:144580,east:508095,north:144920},
"駒ヶ嶺":{b200k:"八戸16号-1",west:508005,south:144280,east:508545,north:144620},
"陸奥中山":{b200k:"八戸16号-2",west:508005,south:143980,east:508545,north:144320},
"陸奥荒屋":{b200k:"八戸16号-3",west:507555,south:144280,east:508095,north:144620},
"七時雨山":{b200k:"八戸16号-4",west:507555,south:143980,east:508095,north:144320},
"田野畑":{b200k:"盛岡1号-1",west:510705,south:143680,east:511245,north:144020},
"小本":{b200k:"盛岡1号-2",west:510705,south:143380,east:511245,north:143720},
"沼袋":{b200k:"盛岡1号-3",west:510255,south:143680,east:510795,north:144020},
"岩泉":{b200k:"盛岡1号-4",west:510255,south:143380,east:510795,north:143720},
"田老鉱山":{b200k:"盛岡2号-1",west:510705,south:143080,east:511245,north:143420},
"田老":{b200k:"盛岡2号-2",west:510705,south:142780,east:511245,north:143120},
"有芸":{b200k:"盛岡2号-3",west:510255,south:143080,east:510795,north:143420},
"峠ノ神山":{b200k:"盛岡2号-4",west:510255,south:142780,east:510795,north:143120},
"宮古":{b200k:"盛岡3号-1",west:510705,south:142480,east:511245,north:142820},
"津軽石":{b200k:"盛岡3号-2",west:510705,south:142180,east:511240,north:142520},
"茂市":{b200k:"盛岡3号-3",west:510255,south:142480,east:510795,north:142820},
"高滝森":{b200k:"盛岡3号-4",west:510255,south:142180,east:510790,north:142520},
"陸中山田":{b200k:"盛岡4号-1",west:510705,south:141880,east:511240,north:142220},
"大槌":{b200k:"盛岡4号-2",west:510720,south:141580,east:511255,north:141920},
"陸中金沢":{b200k:"盛岡4号-3",west:510255,south:141880,east:510790,north:142220},
"橋野":{b200k:"盛岡4号-4",west:510255,south:141580,east:510790,north:141920},
"安家":{b200k:"盛岡5号-1",west:509805,south:143680,east:510345,north:144020},
"門":{b200k:"盛岡5号-2",west:509805,south:143380,east:510345,north:143720},
"陸中五日市":{b200k:"盛岡5号-3",west:509355,south:143680,east:509895,north:144020},
"早坂高原":{b200k:"盛岡5号-4",west:509355,south:143380,east:509895,north:143720},
"陸中大川":{b200k:"盛岡6号-1",west:509805,south:143080,east:510345,north:143420},
"和井内":{b200k:"盛岡6号-2",west:509805,south:142780,east:510345,north:143120},
"釜津田":{b200k:"盛岡6号-3",west:509355,south:143080,east:509895,north:143420},
"害鷹森":{b200k:"盛岡6号-4",west:509355,south:142780,east:509895,north:143120},
"陸中川井":{b200k:"盛岡7号-1",west:509805,south:142480,east:510345,north:142820},
"江繋":{b200k:"盛岡7号-2",west:509805,south:142180,east:510340,north:142520},
"陸中川内":{b200k:"盛岡7号-3",west:509355,south:142480,east:509895,north:142820},
"高桧山":{b200k:"盛岡7号-4",west:509355,south:142180,east:509890,north:142520},
"白見山":{b200k:"盛岡8号-1",west:509805,south:141880,east:510340,north:142220},
"能舟木":{b200k:"盛岡8号-2",west:509805,south:141580,east:510340,north:141920},
"大出":{b200k:"盛岡8号-3",west:509355,south:141880,east:509890,north:142220},
"土淵":{b200k:"盛岡8号-4",west:509355,south:141580,east:509890,north:141920},
"小屋瀬":{b200k:"盛岡9号-1",west:508905,south:143680,east:509445,north:144020},
"薮川":{b200k:"盛岡9号-2",west:508905,south:143380,east:509445,north:143720},
"陸中北山形":{b200k:"盛岡9号-3",west:508455,south:143680,east:508995,north:144020},
"陸中南山形":{b200k:"盛岡9号-4",west:508455,south:143380,east:508995,north:143720},
"岩洞":{b200k:"盛岡10号-1",west:508905,south:143080,east:509445,north:143420},
"青松葉山":{b200k:"盛岡10号-2",west:508905,south:142780,east:509445,north:143120},
"外山":{b200k:"盛岡10号-3",west:508455,south:143080,east:508995,north:143420},
"大志田":{b200k:"盛岡10号-4",west:508455,south:142780,east:508995,north:143120},
"松草":{b200k:"盛岡11号-1",west:508905,south:142480,east:509445,north:142820},
"早池峰山":{b200k:"盛岡11号-2",west:508905,south:142180,east:509440,north:142520},
"区界":{b200k:"盛岡11号-3",west:508455,south:142480,east:508995,north:142820},
"陸中折壁":{b200k:"盛岡11号-4",west:508455,south:142180,east:508990,north:142520},
"竪沢":{b200k:"盛岡12号-1",west:508905,south:141880,east:509440,north:142220},
"上宮守":{b200k:"盛岡12号-2",west:508905,south:141580,east:509440,north:141920},
"大迫":{b200k:"盛岡12号-3",west:508455,south:141880,east:508990,north:142220},
"宮守":{b200k:"盛岡12号-4",west:508455,south:141580,east:508990,north:141920},
"沼宮内":{b200k:"盛岡13号-1",west:508005,south:143680,east:508545,north:144020},
"渋民":{b200k:"盛岡13号-2",west:508005,south:143380,east:508545,north:143720},
"平舘":{b200k:"盛岡13号-3",west:507555,south:143680,east:508095,north:144020},
"大更":{b200k:"盛岡13号-4",west:507555,south:143380,east:508095,north:143720},
"鷹高":{b200k:"盛岡14号-1",west:508005,south:143080,east:508545,north:143420},
"盛岡":{b200k:"盛岡14号-2",west:508005,south:142780,east:508545,north:143120},
"姥屋敷":{b200k:"盛岡14号-3",west:507555,south:143080,east:508095,north:143420},
"小岩井農場":{b200k:"盛岡14号-4",west:507555,south:142780,east:508095,north:143120},
"矢幅":{b200k:"盛岡15号-1",west:508005,south:142480,east:508545,north:142820},
"日詰":{b200k:"盛岡15号-2",west:508005,south:142180,east:508540,north:142520},
"南昌山":{b200k:"盛岡15号-3",west:507555,south:142480,east:508095,north:142820},
"志和":{b200k:"盛岡15号-4",west:507555,south:142180,east:508090,north:142520},
"石鳥谷":{b200k:"盛岡16号-1",west:508005,south:141880,east:508540,north:142220},
"土沢":{b200k:"盛岡16号-2",west:508005,south:141580,east:508540,north:141920},
"花巻温泉":{b200k:"盛岡16号-3",west:507555,south:141880,east:508090,north:142220},
"花巻":{b200k:"盛岡16号-4",west:507555,south:141580,east:508090,north:141920},
"閉伊崎":{b200k:"盛岡東15号-3",west:511155,south:142480,east:511695,north:142820},
"舘":{b200k:"盛岡東15号-4",west:511155,south:142180,east:511690,north:142520},
"霞露ヶ岳":{b200k:"盛岡東16号-3",west:511155,south:141880,east:511690,north:142220},
"釜石":{b200k:"一関1号-1",west:510705,south:141280,east:511240,north:141620},
"陸中平田":{b200k:"一関1号-2",west:510705,south:140980,east:511240,north:141320},
"小佐野":{b200k:"一関1号-3",west:510255,south:141280,east:510790,north:141620},
"小白浜":{b200k:"一関1号-4",west:510255,south:140980,east:510790,north:141320},
"陸前千歳":{b200k:"一関2号-1",west:510705,south:140680,east:511240,north:141020},
"越喜来":{b200k:"一関2号-3",west:510255,south:140680,east:510790,north:141020},
"綾里":{b200k:"一関2号-4",west:510255,south:140380,east:510790,north:140720},
"陸中大橋":{b200k:"一関5号-1",west:509805,south:141280,east:510340,north:141620},
"五葉山":{b200k:"一関5号-2",west:509805,south:140980,east:510340,north:141320},
"遠野":{b200k:"一関5号-3",west:509355,south:141280,east:509890,north:141620},
"陸前八日町":{b200k:"一関5号-4",west:509355,south:140980,east:509890,north:141320},
"盛":{b200k:"一関6号-1",west:509805,south:140680,east:510340,north:141020},
"大船渡":{b200k:"一関6号-2",west:509805,south:140380,east:510340,north:140720},
"世田米":{b200k:"一関6号-3",west:509355,south:140680,east:509890,north:141020},
"今泉":{b200k:"一関6号-4",west:509355,south:140380,east:509890,north:140720},
"陸前広田":{b200k:"一関7号-1",west:509805,south:140080,east:510340,north:140420},
"唐桑":{b200k:"一関7号-2",west:509810,south:139780,east:510340,north:140120},
"鹿折":{b200k:"一関7号-3",west:509355,south:140080,east:509890,north:140420},
"気仙沼":{b200k:"一関7号-4",west:509360,south:139780,east:509890,north:140120},
"津谷":{b200k:"一関8号-3",west:509360,south:139480,east:509890,north:139820},
"伊里前":{b200k:"一関8号-4",west:509360,south:139180,east:509890,north:139520},
"小友":{b200k:"一関9号-1",west:508905,south:141280,east:509440,north:141620},
"種山ヶ原":{b200k:"一関9号-2",west:508905,south:140980,east:509440,north:141320},
"野手崎":{b200k:"一関9号-3",west:508455,south:141280,east:508990,north:141620},
"人首":{b200k:"一関9号-4",west:508455,south:140980,east:508990,north:141320},
"鷹ノ巣山":{b200k:"一関10号-1",west:508905,south:140680,east:509440,north:141020},
"陸中大原":{b200k:"一関10号-2",west:508905,south:140380,east:509440,north:140720},
"阿原山":{b200k:"一関10号-3",west:508455,south:140680,east:508990,north:141020},
"沖田":{b200k:"一関10号-4",west:508455,south:140380,east:508990,north:140720},
"折壁":{b200k:"一関11号-1",west:508905,south:140080,east:509440,north:140420},
"津谷川":{b200k:"一関11号-2",west:508910,south:139780,east:509440,north:140120},
"千厩北部":{b200k:"一関11号-3",west:508455,south:140080,east:508990,north:140420},
"千厩南部":{b200k:"一関11号-4",west:508460,south:139780,east:508990,north:140120},
"馬籠":{b200k:"一関12号-1",west:508910,south:139480,east:509440,north:139820},
"志津川":{b200k:"一関12号-2",west:508910,south:139180,east:509440,north:139520},
"米川":{b200k:"一関12号-3",west:508460,south:139480,east:508990,north:139820},
"米谷":{b200k:"一関12号-4",west:508460,south:139180,east:508990,north:139520},
"口内":{b200k:"一関13号-1",west:508005,south:141280,east:508540,north:141620},
"陸中江刺":{b200k:"一関13号-2",west:508005,south:140980,east:508540,north:141320},
"北上":{b200k:"一関13号-3",west:507555,south:141280,east:508090,north:141620},
"金ヶ崎":{b200k:"一関13号-4",west:507555,south:140980,east:508090,north:141320},
"水沢":{b200k:"一関14号-1",west:508005,south:140680,east:508540,north:141020},
"前沢":{b200k:"一関14号-2",west:508005,south:140380,east:508540,north:140720},
"供養塚":{b200k:"一関14号-3",west:507555,south:140680,east:508090,north:141020},
"古戸":{b200k:"一関14号-4",west:507555,south:140380,east:508090,north:140720},
"一関":{b200k:"一関15号-1",west:508005,south:140080,east:508540,north:140420},
"有壁":{b200k:"一関15号-2",west:508010,south:139780,east:508540,north:140120},
"平泉":{b200k:"一関15号-3",west:507555,south:140080,east:508090,north:140420},
"萩荘":{b200k:"一関15号-4",west:507560,south:139780,east:508090,north:140120},
"若柳":{b200k:"一関16号-1",west:508010,south:139480,east:508540,north:139820},
"佐沼":{b200k:"一関16号-2",west:508010,south:139180,east:508540,north:139520},
"金成":{b200k:"一関16号-3",west:507560,south:139480,east:508090,north:139820},
"築館":{b200k:"一関16号-4",west:507560,south:139180,east:508090,north:139520},
"陸前相川":{b200k:"石巻5号-3",west:509360,south:138880,east:509890,north:139220},
"大須":{b200k:"石巻5号-4",west:509360,south:138580,east:509890,north:138920},
"出島":{b200k:"石巻6号-3",west:509360,south:138280,east:509890,north:138620},
"寄磯":{b200k:"石巻6号-4",west:509360,south:137980,east:509890,north:138320},
"金華山":{b200k:"石巻7号-3",west:509360,south:137680,east:509890,north:138020},
"折立":{b200k:"石巻9号-1",west:508910,south:138880,east:509440,north:139220},
"雄勝":{b200k:"石巻9号-2",west:508910,south:138580,east:509440,north:138920},
"登米":{b200k:"石巻9号-3",west:508460,south:138880,east:508990,north:139220},
"飯野川":{b200k:"石巻9号-4",west:508460,south:138580,east:508990,north:138920},
"女川":{b200k:"石巻10号-1",west:508910,south:138280,east:509440,north:138620},
"荻浜":{b200k:"石巻10号-2",west:508910,south:137980,east:509440,north:138320},
"石巻":{b200k:"石巻10号-3",west:508460,south:138280,east:508990,north:138620},
"渡波":{b200k:"石巻10号-4",west:508460,south:137980,east:508990,north:138320},
"網地島":{b200k:"石巻11号-1",west:508910,south:137675,east:509440,north:138015},
"西野":{b200k:"石巻13号-1",west:508010,south:138880,east:508540,north:139220},
"涌谷":{b200k:"石巻13号-2",west:508010,south:138580,east:508540,north:138920},
"高清水":{b200k:"石巻13号-3",west:507560,south:138880,east:508090,north:139220},
"小牛田":{b200k:"石巻13号-4",west:507560,south:138580,east:508090,north:138920},
"広淵":{b200k:"石巻14号-1",west:508010,south:138280,east:508540,north:138620},
"小野":{b200k:"石巻14号-2",west:508010,south:137980,east:508540,north:138320},
"鹿島台":{b200k:"石巻14号-3",west:507560,south:138280,east:508090,north:138620},
"松島":{b200k:"石巻14号-4",west:507560,south:137980,east:508090,north:138320},
"宮戸島":{b200k:"石巻15号-1",west:508010,south:137680,east:508540,north:138020},
"塩竈":{b200k:"石巻15号-3",west:507560,south:137680,east:508090,north:138020},
"陸奥畑":{b200k:"青森1号-1",west:507100,south:148480,east:507650,north:148820},
"陸奥川内":{b200k:"青森1号-2",west:507100,south:148180,east:507650,north:148520},
"牛滝":{b200k:"青森1号-3",west:506650,south:148480,east:507200,north:148820},
"源藤城":{b200k:"青森1号-4",west:506650,south:148180,east:507200,north:148520},
"脇野沢":{b200k:"青森2号-3",west:506650,south:147880,east:507200,north:148220},
"小湊":{b200k:"青森3号-1",west:507100,south:147280,east:507650,north:147620},
"東岳":{b200k:"青森3号-2",west:507100,south:146980,east:507650,north:147320},
"茂浦":{b200k:"青森3号-3",west:506750,south:147280,east:507300,north:147620},
"浅虫":{b200k:"青森3号-4",west:506650,south:146980,east:507200,north:147320},
"折紙山":{b200k:"青森4号-1",west:507100,south:146680,east:507645,north:147020},
"田代平":{b200k:"青森4号-2",west:507100,south:146380,east:507645,north:146720},
"青森東部":{b200k:"青森4号-3",west:506650,south:146680,east:507195,north:147020},
"雲谷":{b200k:"青森4号-4",west:506650,south:146380,east:507195,north:146720},
"袰月":{b200k:"青森5号-4",west:505780,south:148180,east:506330,north:148520},
"大川平":{b200k:"青森6号-3",west:505780,south:147880,east:506330,north:148220},
"蟹田":{b200k:"青森6号-4",west:505810,south:147580,east:506360,north:147920},
"蓬田":{b200k:"青森7号-1",west:506200,south:147280,east:506750,north:147620},
"油川":{b200k:"青森7号-2",west:506200,south:146980,east:506750,north:147320},
"大倉岳":{b200k:"青森7号-3",west:505750,south:147280,east:506300,north:147620},
"源八森":{b200k:"青森7号-4",west:505750,south:146980,east:506300,north:147320},
"青森西部":{b200k:"青森8号-1",west:506200,south:146680,east:506745,north:147020},
"王余魚沢":{b200k:"青森8号-2",west:506200,south:146380,east:506745,north:146720},
"大釈迦":{b200k:"青森8号-3",west:505750,south:146680,east:506295,north:147020},
"浪岡":{b200k:"青森8号-4",west:505750,south:146380,east:506295,north:146720},
"三厩":{b200k:"青森9号-2",west:505300,south:148180,east:505850,north:148520},
"龍飛崎":{b200k:"青森9号-4",west:504850,south:148180,east:505400,north:148520},
"増川岳":{b200k:"青森10号-1",west:505300,south:147880,east:505850,north:148220},
"薄市":{b200k:"青森10号-2",west:505300,south:147580,east:505850,north:147920},
"小泊":{b200k:"青森10号-3",west:504850,south:147880,east:505400,north:148220},
"津軽相内":{b200k:"青森10号-4",west:504850,south:147580,east:505400,north:147920},
"中里":{b200k:"青森11号-1",west:505300,south:147280,east:505850,north:147620},
"金木":{b200k:"青森11号-2",west:505300,south:146980,east:505850,north:147320},
"車力":{b200k:"青森11号-3",west:504850,south:147280,east:505400,north:147620},
"菰槌":{b200k:"青森11号-4",west:504850,south:146980,east:505400,north:147320},
"五所川原":{b200k:"青森12号-1",west:505300,south:146680,east:505845,north:147020},
"板柳":{b200k:"青森12号-2",west:505300,south:146380,east:505845,north:146720},
"森田":{b200k:"青森12号-3",west:504850,south:146680,east:505395,north:147020},
"十面沢":{b200k:"青森12号-4",west:504850,south:146380,east:505395,north:146720},
"鰺ヶ沢":{b200k:"青森16号-1",west:504400,south:146680,east:504945,north:147020},
"種里":{b200k:"青森16号-2",west:504400,south:146380,east:504945,north:146720},
"田野沢":{b200k:"青森16号-3",west:503950,south:146680,east:504495,north:147020},
"北金ヶ沢":{b200k:"青森16号-4",west:503950,south:146380,east:504495,north:146720},
"驫木":{b200k:"青森西4号-2",west:503500,south:146380,east:504045,north:146720},
"八甲田山":{b200k:"弘前1号-1",west:507100,south:146080,east:507645,north:146420},
"陸奥焼山":{b200k:"弘前1号-2",west:507100,south:145780,east:507645,north:146120},
"酸ヶ湯":{b200k:"弘前1号-3",west:506650,south:146080,east:507195,north:146420},
"温川":{b200k:"弘前1号-4",west:506650,south:145780,east:507195,north:146120},
"十和田湖東部":{b200k:"弘前2号-1",west:507100,south:145480,east:507645,north:145820},
"中滝":{b200k:"弘前2号-2",west:507100,south:145180,east:507645,north:145520},
"十和田湖西部":{b200k:"弘前2号-3",west:506650,south:145480,east:507195,north:145820},
"小坂鉱山":{b200k:"弘前2号-4",west:506650,south:145180,east:507195,north:145520},
"犬吠森":{b200k:"弘前3号-1",west:507100,south:144880,east:507645,north:145220},
"四角岳":{b200k:"弘前3号-2",west:507105,south:144580,east:507645,north:144920},
"毛馬内":{b200k:"弘前3号-3",west:506650,south:144880,east:507195,north:145220},
"花輪":{b200k:"弘前3号-4",west:506655,south:144580,east:507195,north:144920},
"田山":{b200k:"弘前4号-1",west:507105,south:144280,east:507645,north:144620},
"竜ヶ森":{b200k:"弘前4号-2",west:507105,south:143980,east:507645,north:144320},
"湯瀬":{b200k:"弘前4号-3",west:506655,south:144280,east:507195,north:144620},
"熊沢":{b200k:"弘前4号-4",west:506655,south:143980,east:507195,north:144320},
"温湯":{b200k:"弘前5号-1",west:506200,south:146080,east:506745,north:146420},
"沖浦":{b200k:"弘前5号-2",west:506200,south:145780,east:506745,north:146120},
"黒石":{b200k:"弘前5号-3",west:505750,south:146080,east:506295,north:146420},
"大鰐":{b200k:"弘前5号-4",west:505750,south:145780,east:506295,north:146120},
"碇ヶ関":{b200k:"弘前6号-1",west:506200,south:145480,east:506745,north:145820},
"陸中濁川":{b200k:"弘前6号-2",west:506200,south:145180,east:506745,north:145520},
"阿闍羅山":{b200k:"弘前6号-3",west:505750,south:145480,east:506295,north:145820},
"白沢":{b200k:"弘前6号-4",west:505750,south:145180,east:506295,north:145520},
"小坂":{b200k:"弘前7号-1",west:506200,south:144880,east:506745,north:145220},
"十二所":{b200k:"弘前7号-2",west:506205,south:144580,east:506745,north:144920},
"大館":{b200k:"弘前7号-3",west:505750,south:144880,east:506295,north:145220},
"扇田":{b200k:"弘前7号-4",west:505755,south:144580,east:506295,north:144920},
"大葛":{b200k:"弘前8号-1",west:506205,south:144280,east:506745,north:144620},
"サンケ森":{b200k:"弘前8号-2",west:506205,south:143980,east:506745,north:144320},
"明利又":{b200k:"弘前8号-3",west:505755,south:144280,east:506295,north:144620},
"太平湖":{b200k:"弘前8号-4",west:505755,south:143980,east:506295,north:144320},
"弘前":{b200k:"弘前9号-1",west:505300,south:146080,east:505845,north:146420},
"久渡寺":{b200k:"弘前9号-2",west:505300,south:145780,east:505845,north:146120},
"岩木山":{b200k:"弘前9号-3",west:504850,south:146080,east:505395,north:146420},
"陸奥田代":{b200k:"弘前9号-4",west:504850,south:145780,east:505395,north:146120},
"田代岳":{b200k:"弘前10号-1",west:505300,south:145480,east:505845,north:145820},
"越山":{b200k:"弘前10号-2",west:505300,south:145180,east:505845,north:145520},
"尾太岳":{b200k:"弘前10号-3",west:504850,south:145480,east:505395,north:145820},
"真名子":{b200k:"弘前10号-4",west:504850,south:145180,east:505395,north:145520},
"早口":{b200k:"弘前11号-1",west:505300,south:144880,east:505845,north:145220},
"鷹巣東部":{b200k:"弘前11号-2",west:505305,south:144580,east:505845,north:144920},
"藤琴":{b200k:"弘前11号-3",west:504850,south:144880,east:505395,north:145220},
"鷹巣西部":{b200k:"弘前11号-4",west:504855,south:144580,east:505395,north:144920},
"桂瀬":{b200k:"弘前12号-1",west:505305,south:144280,east:505845,north:144620},
"阿仁前田":{b200k:"弘前12号-2",west:505305,south:143980,east:505845,north:144320},
"米内沢":{b200k:"弘前12号-3",west:504855,south:144280,east:505395,north:144620},
"沖田面":{b200k:"弘前12号-4",west:504855,south:143980,east:505395,north:144320},
"枯木平":{b200k:"弘前13号-1",west:504400,south:146080,east:504945,north:146420},
"川原平":{b200k:"弘前13号-2",west:504400,south:145780,east:504945,north:146120},
"長慶平":{b200k:"弘前13号-3",west:503950,south:146080,east:504495,north:146420},
"白神岳":{b200k:"弘前13号-4",west:503950,south:145780,east:504495,north:146120},
"冷水岳":{b200k:"弘前14号-1",west:504400,south:145480,east:504945,north:145820},
"羽後焼山":{b200k:"弘前14号-2",west:504400,south:145180,east:504945,north:145520},
"二ッ森":{b200k:"弘前14号-3",west:503950,south:145480,east:504495,north:145820},
"中浜":{b200k:"弘前14号-4",west:503950,south:145180,east:504495,north:145520},
"根城岱":{b200k:"弘前15号-1",west:504400,south:144880,east:504945,north:145220},
"二ツ井":{b200k:"弘前15号-2",west:504405,south:144580,east:504945,north:144920},
"羽後水沢":{b200k:"弘前15号-3",west:503950,south:144880,east:504495,north:145220},
"能代":{b200k:"弘前15号-4",west:503900,south:144580,east:504440,north:144920},
"下岩川":{b200k:"弘前16号-1",west:504405,south:144280,east:504945,north:144620},
"小又口":{b200k:"弘前16号-2",west:504405,south:143980,east:504945,north:144320},
"森岳":{b200k:"弘前16号-3",west:503955,south:144280,east:504495,north:144620},
"鹿渡":{b200k:"弘前16号-4",west:503955,south:143980,east:504495,north:144320},
"茶臼岳":{b200k:"秋田1号-1",west:507105,south:143680,east:507645,north:144020},
"松川温泉":{b200k:"秋田1号-2",west:507105,south:143380,east:507645,north:143720},
"八幡平":{b200k:"秋田1号-3",west:506655,south:143680,east:507195,north:144020},
"曲崎山":{b200k:"秋田1号-4",west:506655,south:143380,east:507195,north:143720},
"篠崎":{b200k:"秋田2号-1",west:507105,south:143080,east:507645,north:143420},
"雫石":{b200k:"秋田2号-2",west:507105,south:142780,east:507645,north:143120},
"秋田駒ヶ岳":{b200k:"秋田2号-3",west:506655,south:143080,east:507195,north:143420},
"国見温泉":{b200k:"秋田2号-4",west:506655,south:142780,east:507195,north:143120},
"鶯宿":{b200k:"秋田3号-1",west:507105,south:142480,east:507645,north:142820},
"須賀倉山":{b200k:"秋田3号-2",west:507105,south:142180,east:507640,north:142520},
"羽後朝日岳":{b200k:"秋田3号-3",west:506655,south:142480,east:507195,north:142820},
"北川舟":{b200k:"秋田3号-4",west:506655,south:142180,east:507190,north:142520},
"鉛":{b200k:"秋田4号-1",west:507105,south:141880,east:507640,north:142220},
"尻平川":{b200k:"秋田4号-2",west:507105,south:141580,east:507640,north:141920},
"陸中猿橋":{b200k:"秋田4号-3",west:506655,south:141880,east:507190,north:142220},
"新町":{b200k:"秋田4号-4",west:506655,south:141580,east:507190,north:141920},
"玉川温泉":{b200k:"秋田5号-1",west:506205,south:143680,east:506745,north:144020},
"羽後玉川":{b200k:"秋田5号-2",west:506205,south:143380,east:506745,north:143720},
"森吉山":{b200k:"秋田5号-3",west:505755,south:143680,east:506295,north:144020},
"戸鳥内":{b200k:"秋田5号-4",west:505755,south:143380,east:506295,north:143720},
"田沢":{b200k:"秋田6号-1",west:506205,south:143080,east:506745,north:143420},
"田沢湖":{b200k:"秋田6号-2",west:506205,south:142780,east:506745,north:143120},
"上桧木内":{b200k:"秋田6号-3",west:505755,south:143080,east:506295,north:143420},
"下桧木内":{b200k:"秋田6号-4",west:505755,south:142780,east:506295,north:143120},
"抱返り溪谷":{b200k:"秋田7号-1",west:506205,south:142480,east:506745,north:142820},
"大神成":{b200k:"秋田7号-2",west:506205,south:142180,east:506740,north:142520},
"角館":{b200k:"秋田7号-3",west:505755,south:142480,east:506295,north:142820},
"羽後長野":{b200k:"秋田7号-4",west:505755,south:142180,east:506290,north:142520},
"真昼岳":{b200k:"秋田8号-1",west:506205,south:141880,east:506740,north:142220},
"左草":{b200k:"秋田8号-2",west:506205,south:141580,east:506740,north:141920},
"六郷":{b200k:"秋田8号-3",west:505755,south:141880,east:506290,north:142220},
"金沢本町":{b200k:"秋田8号-4",west:505755,south:141580,east:506290,north:141920},
"阿仁合":{b200k:"秋田9号-1",west:505305,south:143680,east:505845,north:144020},
"比立内":{b200k:"秋田9号-2",west:505305,south:143380,east:505845,north:143720},
"八木沢":{b200k:"秋田9号-3",west:504855,south:143680,east:505395,north:144020},
"天上倉山":{b200k:"秋田9号-4",west:504855,south:143380,east:505395,north:143720},
"番鳥森":{b200k:"秋田10号-1",west:505305,south:143080,east:505845,north:143420},
"羽後庄内":{b200k:"秋田10号-2",west:505305,south:142780,east:505845,north:143120},
"太平山":{b200k:"秋田10号-3",west:504855,south:143080,east:505395,north:143420},
"岩見三内":{b200k:"秋田10号-4",west:504855,south:142780,east:505395,north:143120},
"稲沢":{b200k:"秋田11号-1",west:505305,south:142480,east:505845,north:142820},
"刈和野東部":{b200k:"秋田11号-2",west:505305,south:142180,east:505840,north:142520},
"羽後境":{b200k:"秋田11号-3",west:504855,south:142480,east:505395,north:142820},
"刈和野":{b200k:"秋田11号-4",west:504855,south:142180,east:505390,north:142520},
"大曲":{b200k:"秋田12号-1",west:505305,south:141880,east:505840,north:142220},
"角間川":{b200k:"秋田12号-2",west:505305,south:141580,east:505840,north:141920},
"悪戸野":{b200k:"秋田12号-3",west:504855,south:141880,east:505390,north:142220},
"八沢木":{b200k:"秋田12号-4",west:504855,south:141580,east:505390,north:141920},
"湯ノ又":{b200k:"秋田13号-1",west:504405,south:143680,east:504945,north:144020},
"蓬内台":{b200k:"秋田13号-2",west:504405,south:143380,east:504945,north:143720},
"五城目":{b200k:"秋田13号-3",west:503955,south:143680,east:504495,north:144020},
"大久保":{b200k:"秋田13号-4",west:503955,south:143380,east:504495,north:143720},
"松原":{b200k:"秋田14号-1",west:504405,south:143080,east:504945,north:143420},
"秋田東部":{b200k:"秋田14号-2",west:504405,south:142780,east:504945,north:143120},
"土崎":{b200k:"秋田14号-3",west:503955,south:143080,east:504495,north:143420},
"秋田西部":{b200k:"秋田14号-4",west:503955,south:142780,east:504495,north:143120},
"羽後和田":{b200k:"秋田15号-1",west:504405,south:142480,east:504945,north:142820},
"新波":{b200k:"秋田15号-2",west:504405,south:142180,east:504940,north:142520},
"羽川":{b200k:"秋田15号-3",west:503955,south:142480,east:504495,north:142820},
"内道川":{b200k:"秋田15号-4",west:503955,south:142180,east:504490,north:142520},
"新沢":{b200k:"秋田16号-1",west:504405,south:141880,east:504940,north:142220},
"岩野目沢":{b200k:"秋田16号-2",west:504405,south:141580,east:504940,north:141920},
"岩谷":{b200k:"秋田16号-3",west:503955,south:141880,east:504490,north:142220},
"本荘":{b200k:"秋田16号-4",west:503955,south:141580,east:504490,north:141920},
"和賀仙人":{b200k:"新庄1号-1",west:507105,south:141280,east:507640,north:141620},
"夏油温泉":{b200k:"新庄1号-2",west:507105,south:140980,east:507640,north:141320},
"陸中川尻":{b200k:"新庄1号-3",west:506655,south:141280,east:507190,north:141620},
"三界山":{b200k:"新庄1号-4",west:506655,south:140980,east:507190,north:141320},
"石淵ダム":{b200k:"新庄2号-1",west:507105,south:140680,east:507640,north:141020},
"高檜能山":{b200k:"新庄2号-2",west:507105,south:140380,east:507640,north:140720},
"焼石岳":{b200k:"新庄2号-3",west:506655,south:140680,east:507190,north:141020},
"真湯温泉":{b200k:"新庄2号-4",west:506655,south:140380,east:507190,north:140720},
"本寺":{b200k:"新庄3号-1",west:507105,south:140080,east:507640,north:140420},
"沼倉":{b200k:"新庄3号-2",west:507110,south:139780,east:507640,north:140120},
"栗駒山":{b200k:"新庄3号-3",west:506655,south:140080,east:507190,north:140420},
"切留":{b200k:"新庄3号-4",west:506660,south:139780,east:507190,north:140120},
"岩ヶ崎":{b200k:"新庄4号-1",west:507110,south:139480,east:507640,north:139820},
"真坂":{b200k:"新庄4号-2",west:507110,south:139180,east:507640,north:139520},
"花山湖":{b200k:"新庄4号-3",west:506660,south:139480,east:507190,north:139820},
"川渡":{b200k:"新庄4号-4",west:506660,south:139180,east:507190,north:139520},
"羽後黒沢":{b200k:"新庄5号-1",west:506205,south:141280,east:506740,north:141620},
"田子内":{b200k:"新庄5号-2",west:506205,south:140980,east:506740,north:141320},
"横手":{b200k:"新庄5号-3",west:505755,south:141280,east:506290,north:141620},
"十文字":{b200k:"新庄5号-4",west:505755,south:140980,east:506290,north:141320},
"椿台":{b200k:"新庄6号-1",west:506205,south:140680,east:506740,north:141020},
"小安温泉":{b200k:"新庄6号-2",west:506205,south:140380,east:506740,north:140720},
"稲庭":{b200k:"新庄6号-3",west:505755,south:140680,east:506290,north:141020},
"菅生":{b200k:"新庄6号-4",west:505755,south:140380,east:506290,north:140720},
"桂沢":{b200k:"新庄7号-1",west:506205,south:140080,east:506740,north:140420},
"軍沢":{b200k:"新庄7号-2",west:506210,south:139780,east:506740,north:140120},
"秋ノ宮":{b200k:"新庄7号-3",west:505755,south:140080,east:506290,north:140420},
"鬼首峠":{b200k:"新庄7号-4",west:505760,south:139780,east:506290,north:140120},
"鬼首":{b200k:"新庄8号-1",west:506210,south:139480,east:506740,north:139820},
"鳴子":{b200k:"新庄8号-2",west:506210,south:139180,east:506740,north:139520},
"向町":{b200k:"新庄8号-3",west:505760,south:139480,east:506290,north:139820},
"羽前赤倉":{b200k:"新庄8号-4",west:505760,south:139180,east:506290,north:139520},
"浅舞":{b200k:"新庄9号-1",west:505305,south:141280,east:505840,north:141620},
"西馬音内":{b200k:"新庄9号-2",west:505305,south:140980,east:505840,north:141320},
"老方":{b200k:"新庄9号-3",west:504855,south:141280,east:505390,north:141620},
"羽後田代":{b200k:"新庄9号-4",west:504855,south:140980,east:505390,north:141320},
"湯沢":{b200k:"新庄10号-1",west:505305,south:140680,east:505840,north:141020},
"横堀":{b200k:"新庄10号-2",west:505305,south:140380,east:505840,north:140720},
"上笹子":{b200k:"新庄10号-3",west:504855,south:140680,east:505390,north:141020},
"松ノ木峠":{b200k:"新庄10号-4",west:504855,south:140380,east:505390,north:140720},
"羽後川井":{b200k:"新庄11号-1",west:505305,south:140080,east:505840,north:140420},
"神室山":{b200k:"新庄11号-2",west:505310,south:139780,east:505840,north:140120},
"及位":{b200k:"新庄11号-3",west:504855,south:140080,east:505390,north:140420},
"羽前金山":{b200k:"新庄11号-4",west:504860,south:139780,east:505390,north:140120},
"瀬見":{b200k:"新庄12号-1",west:505310,south:139480,east:505840,north:139820},
"月楯":{b200k:"新庄12号-2",west:505310,south:139180,east:505840,north:139520},
"新庄":{b200k:"新庄12号-3",west:504860,south:139480,east:505390,north:139820},
"舟形":{b200k:"新庄12号-4",west:504860,south:139180,east:505390,north:139520},
"大琴":{b200k:"新庄13号-1",west:504405,south:141280,east:504940,north:141620},
"矢島":{b200k:"新庄13号-2",west:504405,south:140980,east:504940,north:141320},
"前郷":{b200k:"新庄13号-3",west:503955,south:141280,east:504490,north:141620},
"川辺":{b200k:"新庄13号-4",west:503955,south:140980,east:504490,north:141320},
"中直根":{b200k:"新庄14号-1",west:504405,south:140680,east:504940,north:141020},
"丁岳":{b200k:"新庄14号-2",west:504405,south:140380,east:504940,north:140720},
"鳥海山":{b200k:"新庄14号-3",west:503955,south:140680,east:504490,north:141020},
"湯ノ台":{b200k:"新庄14号-4",west:503955,south:140380,east:504490,north:140720},
"差首鍋":{b200k:"新庄15号-1",west:504405,south:140080,east:504940,north:140420},
"大沢":{b200k:"新庄15号-2",west:504410,south:139780,east:504940,north:140120},
"升田":{b200k:"新庄15号-3",west:503955,south:140080,east:504490,north:140420},
"中野俣":{b200k:"新庄15号-4",west:503960,south:139780,east:504490,north:140120},
"羽根沢温泉":{b200k:"新庄16号-1",west:504410,south:139480,east:504940,north:139820},
"古口":{b200k:"新庄16号-2",west:504410,south:139180,east:504940,north:139520},
"清川":{b200k:"新庄16号-3",west:503960,south:139480,east:504490,north:139820},
"木の沢":{b200k:"新庄16号-4",west:503960,south:139180,east:504490,north:139520},
"荒谷":{b200k:"仙台1号-1",west:507110,south:138880,east:507640,north:139220},
"古川":{b200k:"仙台1号-2",west:507110,south:138580,east:507640,north:138920},
"岩出山":{b200k:"仙台1号-3",west:506660,south:138880,east:507190,north:139220},
"中新田":{b200k:"仙台1号-4",west:506660,south:138580,east:507190,north:138920},
"吉岡":{b200k:"仙台2号-1",west:507110,south:138280,east:507640,north:138620},
"富谷":{b200k:"仙台2号-2",west:507110,south:137980,east:507640,north:138320},
"七ッ森":{b200k:"仙台2号-3",west:506660,south:138280,east:507190,north:138620},
"根白石":{b200k:"仙台2号-4",west:506660,south:137980,east:507190,north:138320},
"仙台東北部":{b200k:"仙台3号-1",west:507110,south:137680,east:507640,north:138020},
"仙台東南部":{b200k:"仙台3号-2",west:507135,south:137380,east:507660,north:137720},
"仙台西北部":{b200k:"仙台3号-3",west:506660,south:137680,east:507190,north:138020},
"仙台西南部":{b200k:"仙台3号-4",west:506660,south:137380,east:507185,north:137720},
"仙台空港":{b200k:"仙台4号-1",west:507110,south:137080,east:507635,north:137420},
"荒浜":{b200k:"仙台4号-2",west:507110,south:136780,east:507635,north:137120},
"岩沼":{b200k:"仙台4号-3",west:506660,south:137080,east:507185,north:137420},
"亘理":{b200k:"仙台4号-4",west:506660,south:136780,east:507185,north:137120},
"西上野目":{b200k:"仙台5号-1",west:506210,south:138880,east:506740,north:139220},
"薬莱山":{b200k:"仙台5号-2",west:506210,south:138580,east:506740,north:138920},
"魚取沼":{b200k:"仙台5号-3",west:505760,south:138880,east:506290,north:139220},
"銀山温泉":{b200k:"仙台5号-4",west:505760,south:138580,east:506290,north:138920},
"升沢":{b200k:"仙台6号-1",west:506210,south:138280,east:506740,north:138620},
"定義":{b200k:"仙台6号-2",west:506210,south:137980,east:506740,north:138320},
"船形山":{b200k:"仙台6号-3",west:505760,south:138280,east:506290,north:138620},
"関山峠":{b200k:"仙台6号-4",west:505760,south:137980,east:506290,north:138320},
"熊ケ根":{b200k:"仙台7号-1",west:506210,south:137680,east:506740,north:138020},
"陸前川崎":{b200k:"仙台7号-2",west:506210,south:137380,east:506735,north:137720},
"作並":{b200k:"仙台7号-3",west:505760,south:137680,east:506290,north:138020},
"今宿":{b200k:"仙台7号-4",west:505760,south:137380,east:506285,north:137720},
"村田":{b200k:"仙台8号-1",west:506210,south:137080,east:506735,north:137420},
"大河原":{b200k:"仙台8号-2",west:506210,south:136780,east:506735,north:137120},
"遠刈田":{b200k:"仙台8号-3",west:505760,south:137080,east:506285,north:137420},
"白石":{b200k:"仙台8号-4",west:505760,south:136780,east:506285,north:137120},
"尾花沢":{b200k:"仙台9号-1",west:505310,south:138880,east:505840,north:139220},
"延沢":{b200k:"仙台9号-2",west:505310,south:138580,east:505840,north:138920},
"海谷":{b200k:"仙台9号-3",west:504860,south:138880,east:505390,north:139220},
"富並":{b200k:"仙台9号-4",west:504860,south:138580,east:505390,north:138920},
"楯岡":{b200k:"仙台10号-1",west:505310,south:138280,east:505840,north:138620},
"天童":{b200k:"仙台10号-2",west:505310,south:137980,east:505840,north:138320},
"谷地":{b200k:"仙台10号-3",west:504860,south:138280,east:505390,north:138620},
"寒河江":{b200k:"仙台10号-4",west:504860,south:137980,east:505390,north:138320},
"山寺":{b200k:"仙台11号-1",west:505310,south:137680,east:505840,north:138020},
"笹谷峠":{b200k:"仙台11号-2",west:505310,south:137380,east:505835,north:137720},
"山形北部":{b200k:"仙台11号-3",west:504860,south:137680,east:505390,north:138020},
"山形南部":{b200k:"仙台11号-4",west:504860,south:137380,east:505385,north:137720},
"蔵王山":{b200k:"仙台12号-1",west:505310,south:137080,east:505835,north:137420},
"不忘山":{b200k:"仙台12号-2",west:505310,south:136780,east:505835,north:137120},
"上山":{b200k:"仙台12号-3",west:504860,south:137080,east:505385,north:137420},
"二井宿":{b200k:"仙台12号-4",west:504860,south:136780,east:505385,north:137120},
"肘折":{b200k:"仙台13号-1",west:504410,south:138880,east:504940,north:139220},
"葉山":{b200k:"仙台13号-2",west:504410,south:138580,east:504940,north:138920},
"立谷沢":{b200k:"仙台13号-3",west:503960,south:138880,east:504490,north:139220},
"月山":{b200k:"仙台13号-4",west:503960,south:138580,east:504490,north:138920},
"海味":{b200k:"仙台14号-1",west:504410,south:138280,east:504940,north:138620},
"左沢":{b200k:"仙台14号-2",west:504410,south:137980,east:504940,north:138320},
"本道寺":{b200k:"仙台14号-3",west:503960,south:138280,east:504490,north:138620},
"貫見":{b200k:"仙台14号-4",west:503960,south:137980,east:504490,north:138320},
"宮宿":{b200k:"仙台15号-1",west:504410,south:137680,east:504940,north:138020},
"白鷹山":{b200k:"仙台15号-2",west:504410,south:137380,east:504935,north:137720},
"太郎":{b200k:"仙台15号-3",west:503960,south:137680,east:504490,north:138020},
"荒砥":{b200k:"仙台15号-4",west:503960,south:137380,east:504485,north:137720},
"羽前中山":{b200k:"仙台16号-1",west:504410,south:137080,east:504935,north:137420},
"赤湯":{b200k:"仙台16号-2",west:504410,south:136780,east:504935,north:137120},
"長井":{b200k:"仙台16号-3",west:503960,south:137080,east:504485,north:137420},
"羽前小松":{b200k:"仙台16号-4",west:503960,south:136780,east:504485,north:137120},
"山下":{b200k:"福島1号-1",west:507110,south:136480,east:507635,north:136820},
"新地":{b200k:"福島1号-2",west:507110,south:136180,east:507635,north:136520},
"角田":{b200k:"福島1号-3",west:506660,south:136480,east:507185,north:136820},
"丸森":{b200k:"福島1号-4",west:506660,south:136180,east:507185,north:136520},
"相馬中村":{b200k:"福島2号-1",west:507110,south:135880,east:507635,north:136220},
"磐城鹿島":{b200k:"福島2号-2",west:507110,south:135580,east:507635,north:135920},
"青葉":{b200k:"福島2号-3",west:506660,south:135880,east:507185,north:136220},
"磐城草野":{b200k:"福島2号-4",west:506660,south:135580,east:507185,north:135920},
"原町":{b200k:"福島3号-1",west:507110,south:135280,east:507635,north:135620},
"小高":{b200k:"福島3号-2",west:507115,south:134980,east:507635,north:135320},
"小宮":{b200k:"福島3号-3",west:506660,south:135280,east:507185,north:135620},
"下津島":{b200k:"福島3号-4",west:506665,south:134980,east:507185,north:135320},
"浪江":{b200k:"福島4号-1",west:507115,south:134680,east:507635,north:135020},
"夜の森":{b200k:"福島4号-2",west:507115,south:134380,east:507635,north:134720},
"古道":{b200k:"福島4号-3",west:506665,south:134680,east:507185,north:135020},
"上川内":{b200k:"福島4号-4",west:506665,south:134380,east:507185,north:134720},
"白石東南部":{b200k:"福島5号-1",west:506210,south:136480,east:506735,north:136820},
"舟生":{b200k:"福島5号-2",west:506210,south:136180,east:506735,north:136520},
"白石南部":{b200k:"福島5号-3",west:505760,south:136480,east:506285,north:136820},
"桑折":{b200k:"福島5号-4",west:505760,south:136180,east:506285,north:136520},
"霊山":{b200k:"福島6号-1",west:506210,south:135880,east:506735,north:136220},
"萩平":{b200k:"福島6号-2",west:506210,south:135580,east:506735,north:135920},
"保原":{b200k:"福島6号-3",west:505760,south:135880,east:506285,north:136220},
"月舘":{b200k:"福島6号-4",west:505760,south:135580,east:506285,north:135920},
"飯樋":{b200k:"福島7号-1",west:506210,south:135280,east:506735,north:135620},
"上移":{b200k:"福島7号-2",west:506215,south:134980,east:506735,north:135320},
"川俣":{b200k:"福島7号-3",west:505760,south:135280,east:506285,north:135620},
"岩代小浜":{b200k:"福島7号-4",west:505765,south:134980,east:506285,north:135320},
"常葉":{b200k:"福島8号-1",west:506215,south:134680,east:506735,north:135020},
"上大越":{b200k:"福島8号-2",west:506215,south:134380,east:506735,north:134720},
"船引":{b200k:"福島8号-3",west:505765,south:134680,east:506285,north:135020},
"柳橋":{b200k:"福島8号-4",west:505765,south:134380,east:506285,north:134720},
"関":{b200k:"福島9号-1",west:505310,south:136480,east:505835,north:136820},
"中茂庭":{b200k:"福島9号-2",west:505310,south:136180,east:505835,north:136520},
"稲子":{b200k:"福島9号-3",west:504860,south:136480,east:505385,north:136820},
"栗子山":{b200k:"福島9号-4",west:504860,south:136180,east:505385,north:136520},
"福島北部":{b200k:"福島10号-1",west:505310,south:135880,east:505835,north:136220},
"福島南部":{b200k:"福島10号-2",west:505310,south:135580,east:505835,north:135920},
"板谷":{b200k:"福島10号-3",west:504860,south:135880,east:505385,north:136220},
"土湯温泉":{b200k:"福島10号-4",west:504860,south:135580,east:505385,north:135920},
"二本松":{b200k:"福島11号-1",west:505310,south:135280,east:505835,north:135620},
"岩代本宮":{b200k:"福島11号-2",west:505315,south:134980,east:505835,north:135320},
"安達太良山":{b200k:"福島11号-3",west:504860,south:135280,east:505385,north:135620},
"玉井":{b200k:"福島11号-4",west:504865,south:134980,east:505385,north:135320},
"三春":{b200k:"福島12号-1",west:505315,south:134680,east:505835,north:135020},
"郡山":{b200k:"福島12号-2",west:505315,south:134380,east:505835,north:134720},
"磐梯熱海":{b200k:"福島12号-3",west:504865,south:134680,east:505385,north:135020},
"郡山西部":{b200k:"福島12号-4",west:504865,south:134380,east:505385,north:134720},
"糠野目":{b200k:"福島13号-1",west:504410,south:136480,east:504935,north:136820},
"米沢東部":{b200k:"福島13号-2",west:504410,south:136180,east:504935,north:136520},
"米沢北部":{b200k:"福島13号-3",west:503960,south:136480,east:504485,north:136820},
"米沢":{b200k:"福島13号-4",west:503960,south:136180,east:504485,north:136520},
"天元台":{b200k:"福島14号-1",west:504410,south:135880,east:504935,north:136220},
"吾妻山":{b200k:"福島14号-2",west:504410,south:135580,east:504935,north:135920},
"白布温泉":{b200k:"福島14号-3",west:503960,south:135880,east:504485,north:136220},
"桧原湖":{b200k:"福島14号-4",west:503960,south:135580,east:504485,north:135920},
"中ノ沢":{b200k:"福島15号-1",west:504410,south:135280,east:504935,north:135620},
"関都":{b200k:"福島15号-2",west:504415,south:134980,east:504935,north:135320},
"磐梯山":{b200k:"福島15号-3",west:503960,south:135280,east:504485,north:135620},
"猪苗代":{b200k:"福島15号-4",west:503965,south:134980,east:504485,north:135320},
"山潟":{b200k:"福島16号-1",west:504415,south:134680,east:504935,north:135020},
"岩代中野":{b200k:"福島16号-2",west:504415,south:134380,east:504935,north:134720},
"原":{b200k:"福島16号-3",west:503965,south:134680,east:504485,north:135020},
"岩代福良":{b200k:"福島16号-4",west:503965,south:134380,east:504485,north:134720},
"南海老":{b200k:"福島東14号-4",west:507560,south:135580,east:508085,north:135920},
"大甕":{b200k:"福島東15号-3",west:507560,south:135280,east:508085,north:135620},
"塚原":{b200k:"福島東15号-4",west:507565,south:134980,east:508085,north:135320},
"磐城双葉":{b200k:"福島東16号-3",west:507565,south:134680,east:508085,north:135020},
"磐城富岡":{b200k:"福島東16号-4",west:507565,south:134380,east:508085,north:134720},
"成子内":{b200k:"白河1号-1",west:507115,south:134080,east:507635,north:134420},
"上浅見川":{b200k:"白河1号-2",west:507115,south:133780,east:507635,north:134120},
"坂シ内":{b200k:"白河1号-3",west:506665,south:134080,east:507185,north:134420},
"川前":{b200k:"白河1号-4",west:506665,south:133780,east:507185,north:134120},
"四倉":{b200k:"白河2号-1",west:507130,south:133480,east:507650,north:133820},
"平":{b200k:"白河2号-2",west:507115,south:133180,east:507635,north:133520},
"水石山":{b200k:"白河2号-3",west:506665,south:133480,east:507185,north:133820},
"常磐湯本":{b200k:"白河2号-4",west:506665,south:133180,east:507185,north:133520},
"小名浜":{b200k:"白河3号-1",west:507115,south:132880,east:507635,north:133220},
"磐城泉":{b200k:"白河3号-3",west:506665,south:132880,east:507185,north:133220},
"勿来":{b200k:"白河3号-4",west:506665,south:132580,east:507185,north:132920},
"大津":{b200k:"白河4号-3",west:506665,south:132280,east:507180,north:132620},
"小野新町":{b200k:"白河5号-1",west:506215,south:134080,east:506735,north:134420},
"上三坂":{b200k:"白河5号-2",west:506215,south:133780,east:506735,north:134120},
"田母神":{b200k:"白河5号-3",west:505765,south:134080,east:506285,north:134420},
"上蓬田":{b200k:"白河5号-4",west:505765,south:133780,east:506285,north:134120},
"下市萱":{b200k:"白河6号-1",west:506215,south:133480,east:506735,north:133820},
"上遠野":{b200k:"白河6号-2",west:506215,south:133180,east:506735,north:133520},
"竹貫":{b200k:"白河6号-3",west:505765,south:133480,east:506285,north:133820},
"磐城新宿":{b200k:"白河6号-4",west:505765,south:133180,east:506285,north:133520},
"上平石":{b200k:"白河7号-1",west:506215,south:132880,east:506735,north:133220},
"川部":{b200k:"白河7号-2",west:506215,south:132580,east:506735,north:132920},
"橋場":{b200k:"白河7号-3",west:505765,south:132880,east:506285,north:133220},
"磐城片貝":{b200k:"白河7号-4",west:505765,south:132580,east:506285,north:132920},
"磯原":{b200k:"白河8号-1",west:506215,south:132280,east:506730,north:132620},
"高萩":{b200k:"白河8号-2",west:506215,south:131980,east:506730,north:132320},
"里美牧場":{b200k:"白河8号-3",west:505765,south:132280,east:506280,north:132620},
"竪破山":{b200k:"白河8号-4",west:505765,south:131980,east:506280,north:132320},
"須賀川東部":{b200k:"白河9号-1",west:505315,south:134080,east:505835,north:134420},
"母畑":{b200k:"白河9号-2",west:505315,south:133780,east:505835,north:134120},
"須賀川西部":{b200k:"白河9号-3",west:504865,south:134080,east:505385,north:134420},
"矢吹":{b200k:"白河9号-4",west:504865,south:133780,east:505385,north:134120},
"磐城石川":{b200k:"白河10号-1",west:505315,south:133480,east:505835,north:133820},
"棚倉":{b200k:"白河10号-2",west:505315,south:133180,east:505835,north:133520},
"泉崎":{b200k:"白河10号-3",west:504865,south:133480,east:505385,north:133820},
"磐城金山":{b200k:"白河10号-4",west:504865,south:133180,east:505385,north:133520},
"塙":{b200k:"白河11号-1",west:505315,south:132880,east:505835,north:133220},
"東舘":{b200k:"白河11号-2",west:505315,south:132580,east:505835,north:132920},
"八溝山":{b200k:"白河11号-3",west:504865,south:132880,east:505385,north:133220},
"町付":{b200k:"白河11号-4",west:504865,south:132580,east:505385,north:132920},
"袋田":{b200k:"白河12号-1",west:505315,south:132280,east:505830,north:132620},
"大中宿":{b200k:"白河12号-2",west:505315,south:131980,east:505830,north:132320},
"大子":{b200k:"白河12号-3",west:504865,south:132280,east:505380,north:132620},
"常陸大沢":{b200k:"白河12号-4",west:504865,south:131980,east:505380,north:132320},
"岩代長沼":{b200k:"白河13号-1",west:504415,south:134080,east:504935,north:134420},
"上小屋":{b200k:"白河13号-2",west:504415,south:133780,east:504935,north:134120},
"羽鳥湖":{b200k:"白河13号-3",west:503965,south:134080,east:504485,north:134420},
"新甲子":{b200k:"白河13号-4",west:503965,south:133780,east:504485,north:134120},
"白河":{b200k:"白河14号-1",west:504415,south:133480,east:504935,north:133820},
"旗宿":{b200k:"白河14号-2",west:504415,south:133180,east:504935,north:133520},
"那須湯本":{b200k:"白河14号-3",west:503965,south:133480,east:504485,north:133820},
"黒田原":{b200k:"白河14号-4",west:503965,south:133180,east:504485,north:133520},
"伊王野":{b200k:"白河15号-1",west:504415,south:132880,east:504935,north:133220},
"黒羽田町":{b200k:"白河15号-2",west:504415,south:132580,east:504935,north:132920},
"黒磯":{b200k:"白河15号-3",west:503965,south:132880,east:504485,north:133220},
"大田原":{b200k:"白河15号-4",west:503965,south:132580,east:504485,north:132920},
"下野小川":{b200k:"白河16号-1",west:504415,south:132280,east:504930,north:132620},
"馬頭":{b200k:"白河16号-2",west:504415,south:131980,east:504930,north:132320},
"佐久山":{b200k:"白河16号-3",west:503965,south:132280,east:504480,north:132620},
"喜連川":{b200k:"白河16号-4",west:503965,south:131980,east:504480,north:132320},
"井出":{b200k:"白河東13号-3",west:507565,south:134080,east:508085,north:134420},
"下浅見川":{b200k:"白河東13号-4",west:507565,south:133780,east:508085,north:134120},
"日立":{b200k:"水戸5号-1",west:506215,south:131680,east:506730,north:132020},
"日立南部":{b200k:"水戸5号-2",west:506215,south:131380,east:506730,north:131720},
"町屋":{b200k:"水戸5号-3",west:505765,south:131680,east:506280,north:132020},
"常陸太田":{b200k:"水戸5号-4",west:505765,south:131380,east:506280,north:131720},
"常陸久慈":{b200k:"水戸6号-3",west:505787,south:131080,east:506302,north:131420},
"ひたちなか":{b200k:"水戸6号-4",west:505800,south:130780,east:506315,north:131120},
"磯浜":{b200k:"水戸7号-3",west:505765,south:130480,east:506280,north:130820},
"徳宿":{b200k:"水戸7号-4",west:505765,south:130180,east:506280,north:130520},
"荒野":{b200k:"水戸8号-2",west:506220,south:129580,east:506730,north:129920},
"鉾田":{b200k:"水戸8号-3",west:505765,south:129880,east:506280,north:130220},
"武井":{b200k:"水戸8号-4",west:505770,south:129580,east:506280,north:129920},
"山方":{b200k:"水戸9号-1",west:505315,south:131680,east:505830,north:132020},
"常陸大宮":{b200k:"水戸9号-2",west:505315,south:131380,east:505830,north:131720},
"上小瀬":{b200k:"水戸9号-3",west:504865,south:131680,east:505380,north:132020},
"野口":{b200k:"水戸9号-4",west:504865,south:131380,east:505380,north:131720},
"石塚":{b200k:"水戸10号-1",west:505315,south:131080,east:505830,north:131420},
"水戸":{b200k:"水戸10号-2",west:505315,south:130780,east:505830,north:131120},
"徳蔵":{b200k:"水戸10号-3",west:504865,south:131080,east:505380,north:131420},
"笠間":{b200k:"水戸10号-4",west:504865,south:130780,east:505380,north:131120},
"小鶴":{b200k:"水戸11号-1",west:505315,south:130480,east:505830,north:130820},
"下吉影":{b200k:"水戸11号-2",west:505315,south:130180,east:505830,north:130520},
"岩間":{b200k:"水戸11号-3",west:504865,south:130480,east:505380,north:130820},
"石岡":{b200k:"水戸11号-4",west:504865,south:130180,east:505380,north:130520},
"常陸玉造":{b200k:"水戸12号-1",west:505315,south:129880,east:505830,north:130220},
"西蓮寺":{b200k:"水戸12号-2",west:505320,south:129580,east:505830,north:129920},
"常陸高浜":{b200k:"水戸12号-3",west:504865,south:129880,east:505380,north:130220},
"木原":{b200k:"水戸12号-4",west:504870,south:129580,east:505380,north:129920},
"烏山":{b200k:"水戸13号-1",west:504415,south:131680,east:504930,north:132020},
"茂木":{b200k:"水戸13号-2",west:504415,south:131380,east:504930,north:131720},
"仁井田":{b200k:"水戸13号-3",west:503965,south:131680,east:504480,north:132020},
"祖母井":{b200k:"水戸13号-4",west:503965,south:131380,east:504480,north:131720},
"中飯":{b200k:"水戸14号-1",west:504415,south:131080,east:504930,north:131420},
"羽黒":{b200k:"水戸14号-2",west:504415,south:130780,east:504930,north:131120},
"真岡":{b200k:"水戸14号-3",west:503965,south:131080,east:504480,north:131420},
"岩瀬":{b200k:"水戸14号-4",west:503965,south:130780,east:504480,north:131120},
"加波山":{b200k:"水戸15号-1",west:504415,south:130480,east:504930,north:130820},
"柿岡":{b200k:"水戸15号-2",west:504415,south:130180,east:504930,north:130520},
"真壁":{b200k:"水戸15号-3",west:503965,south:130480,east:504480,north:130820},
"筑波":{b200k:"水戸15号-4",west:503965,south:130180,east:504480,north:130520},
"常陸藤沢":{b200k:"水戸16号-1",west:504415,south:129880,east:504930,north:130220},
"土浦":{b200k:"水戸16号-2",west:504420,south:129580,east:504930,north:129920},
"上郷":{b200k:"水戸16号-3",west:503965,south:129880,east:504480,north:130220},
"谷田部":{b200k:"水戸16号-4",west:503970,south:129580,east:504480,north:129920},
"鹿島矢田部":{b200k:"千葉2号-3",west:506670,south:128680,east:507180,north:129020},
"銚子":{b200k:"千葉2号-4",west:506670,south:128380,east:507180,north:128720},
"常陸鹿島":{b200k:"千葉5号-1",west:506220,south:129280,east:506730,north:129620},
"神栖":{b200k:"千葉5号-2",west:506235,south:128980,east:506745,north:129320},
"潮来":{b200k:"千葉5号-3",west:505770,south:129280,east:506280,north:129620},
"佐原東部":{b200k:"千葉5号-4",west:505770,south:128980,east:506280,north:129320},
"小南":{b200k:"千葉6号-1",west:506220,south:128680,east:506730,north:129020},
"旭":{b200k:"千葉6号-2",west:506220,south:128380,east:506730,north:128720},
"岩部":{b200k:"千葉6号-3",west:505770,south:128680,east:506280,north:129020},
"八日市場":{b200k:"千葉6号-4",west:505770,south:128380,east:506280,north:128720},
"木戸":{b200k:"千葉7号-3",west:505770,south:128075,east:506280,north:128415},
"麻生":{b200k:"千葉9号-1",west:505320,south:129280,east:505830,north:129620},
"佐原西部":{b200k:"千葉9号-2",west:505320,south:128980,east:505830,north:129320},
"江戸崎":{b200k:"千葉9号-3",west:504870,south:129280,east:505380,north:129620},
"下総滑川":{b200k:"千葉9号-4",west:504870,south:128980,east:505380,north:129320},
"成田国際空港":{b200k:"千葉10号-1",west:505320,south:128680,east:505830,north:129020},
"多古":{b200k:"千葉10号-2",west:505320,south:128380,east:505830,north:128720},
"成田":{b200k:"千葉10号-3",west:504870,south:128680,east:505380,north:129020},
"酒々井":{b200k:"千葉10号-4",west:504870,south:128380,east:505380,north:128720},
"成東":{b200k:"千葉11号-1",west:505320,south:128080,east:505830,north:128420},
"上総片貝":{b200k:"千葉11号-2",west:505320,south:127780,east:505830,north:128120},
"八街":{b200k:"千葉11号-3",west:504870,south:128080,east:505380,north:128420},
"東金":{b200k:"千葉11号-4",west:504870,south:127780,east:505380,north:128120},
"四天木":{b200k:"千葉12号-1",west:505320,south:127480,east:505830,north:127820},
"東浪見":{b200k:"千葉12号-2",west:505320,south:127180,east:505830,north:127520},
"茂原":{b200k:"千葉12号-3",west:504870,south:127480,east:505380,north:127820},
"上総一宮":{b200k:"千葉12号-4",west:504870,south:127180,east:505380,north:127520},
"牛久":{b200k:"千葉13号-1",west:504420,south:129280,east:504930,north:129620},
"龍ケ崎":{b200k:"千葉13号-2",west:504420,south:128980,east:504930,north:129320},
"藤代":{b200k:"千葉13号-3",west:503970,south:129280,east:504480,north:129620},
"取手":{b200k:"千葉13号-4",west:503970,south:128980,east:504480,north:129320},
"小林":{b200k:"千葉14号-1",west:504420,south:128680,east:504930,north:129020},
"佐倉":{b200k:"千葉14号-2",west:504420,south:128380,east:504930,north:128720},
"白井":{b200k:"千葉14号-3",west:503970,south:128680,east:504480,north:129020},
"習志野":{b200k:"千葉14号-4",west:503970,south:128380,east:504480,north:128720},
"千葉東部":{b200k:"千葉15号-1",west:504420,south:128080,east:504930,north:128420},
"蘇我":{b200k:"千葉15号-2",west:504420,south:127780,east:504930,north:128120},
"千葉西部":{b200k:"千葉15号-3",west:503970,south:128080,east:504480,north:128420},
"五井":{b200k:"千葉15号-4",west:503970,south:127780,east:504480,north:128120},
"海士有木":{b200k:"千葉16号-1",west:504420,south:127480,east:504930,north:127820},
"鶴舞":{b200k:"千葉16号-2",west:504420,south:127180,east:504930,north:127520},
"姉崎":{b200k:"千葉16号-3",west:503970,south:127480,east:504480,north:127820},
"上総横田":{b200k:"千葉16号-4",west:503970,south:127180,east:504480,north:127520},
"上総長者":{b200k:"大多喜9号-1",west:505320,south:126880,east:505825,north:127220},
"上総大原":{b200k:"大多喜9号-2",west:505320,south:126580,east:505825,north:126920},
"国吉":{b200k:"大多喜9号-3",west:504870,south:126880,east:505375,north:127220},
"御宿":{b200k:"大多喜9号-4",west:504870,south:126580,east:505375,north:126920},
"勝浦":{b200k:"大多喜10号-3",west:504870,south:126280,east:505375,north:126620},
"大多喜":{b200k:"大多喜13号-1",west:504420,south:126880,east:504925,north:127220},
"上総中野":{b200k:"大多喜13号-2",west:504420,south:126580,east:504925,north:126920},
"久留里":{b200k:"大多喜13号-3",west:503970,south:126880,east:504475,north:127220},
"坂畑":{b200k:"大多喜13号-4",west:503970,south:126580,east:504475,north:126920},
"安房小湊":{b200k:"大多喜14号-1",west:504420,south:126280,east:504925,north:126620},
"鴨川":{b200k:"大多喜14号-3",west:503970,south:126280,east:504475,north:126620},
"安房和田":{b200k:"大多喜14号-4",west:503970,south:125980,east:504475,north:126320},
"深浦":{b200k:"深浦1号-1",west:503480,south:146080,east:504025,north:146420},
"十二湖":{b200k:"深浦1号-2",west:503500,south:145780,east:504045,north:146120},
"大間越":{b200k:"深浦2号-1",west:503500,south:145480,east:504045,north:145820},
"岩館":{b200k:"深浦2号-2",west:503500,south:145180,east:504045,north:145520},
"羽後浜田":{b200k:"深浦4号-1",west:503505,south:144280,east:504045,north:144620},
"大潟":{b200k:"深浦4号-2",west:503505,south:143980,east:504045,north:144320},
"寒風山":{b200k:"男鹿1号-1",west:503505,south:143680,east:504045,north:144020},
"船越":{b200k:"男鹿1号-2",west:503505,south:143380,east:504045,north:143720},
"北浦":{b200k:"男鹿1号-3",west:503055,south:143680,east:503595,north:144020},
"船川":{b200k:"男鹿1号-4",west:503000,south:143380,east:503540,north:143720},
"戸賀":{b200k:"男鹿5号-1",west:502605,south:143665,east:503145,north:144005},
"平沢":{b200k:"酒田1号-1",west:503505,south:141280,east:504040,north:141620},
"象潟":{b200k:"酒田1号-2",west:503505,south:140980,east:504040,north:141320},
"小砂川":{b200k:"酒田2号-1",west:503505,south:140680,east:504040,north:141020},
"吹浦":{b200k:"酒田2号-2",west:503505,south:140380,east:504040,north:140720},
"十里塚":{b200k:"酒田2号-4",west:503055,south:140380,east:503590,north:140720},
"羽後観音寺":{b200k:"酒田3号-1",west:503505,south:140080,east:504040,north:140420},
"余目":{b200k:"酒田3号-2",west:503510,south:139780,east:504040,north:140120},
"酒田北部":{b200k:"酒田3号-3",west:503055,south:140080,east:503590,north:140420},
"酒田南部":{b200k:"酒田3号-4",west:503060,south:139780,east:503590,north:140120},
"藤島":{b200k:"酒田4号-1",west:503510,south:139480,east:504040,north:139820},
"羽黒山":{b200k:"酒田4号-2",west:503510,south:139180,east:504040,north:139520},
"湯野浜":{b200k:"酒田4号-3",west:503010,south:139480,east:503540,north:139820},
"鶴岡":{b200k:"酒田4号-4",west:503060,south:139180,east:503590,north:139520},
"三瀬":{b200k:"酒田8号-2",west:502590,south:139180,east:503120,north:139520},
"大網":{b200k:"村上1号-1",west:503510,south:138880,east:504040,north:139220},
"湯殿山":{b200k:"村上1号-2",west:503510,south:138580,east:504040,north:138920},
"下名川":{b200k:"村上1号-3",west:503060,south:138880,east:503590,north:139220},
"上田沢":{b200k:"村上1号-4",west:503060,south:138580,east:503590,north:138920},
"赤見堂岳":{b200k:"村上2号-1",west:503510,south:138280,east:504040,north:138620},
"大井沢":{b200k:"村上2号-2",west:503510,south:137980,east:504040,north:138320},
"大鳥":{b200k:"村上2号-3",west:503060,south:138280,east:503590,north:138620},
"大鳥池":{b200k:"村上2号-4",west:503060,south:137980,east:503590,north:138320},
"朝日岳":{b200k:"村上3号-1",west:503510,south:137680,east:504040,north:138020},
"羽前葉山":{b200k:"村上3号-2",west:503510,south:137380,east:504035,north:137720},
"相模山":{b200k:"村上3号-3",west:503060,south:137680,east:503590,north:138020},
"徳網":{b200k:"村上3号-4",west:503060,south:137380,east:503585,north:137720},
"羽前上郷":{b200k:"村上4号-1",west:503510,south:137080,east:504035,north:137420},
"手ノ子":{b200k:"村上4号-2",west:503510,south:136780,east:504035,north:137120},
"五味沢":{b200k:"村上4号-3",west:503060,south:137080,east:503585,north:137420},
"小国東部":{b200k:"村上4号-4",west:503060,south:136780,east:503585,north:137120},
"山五十川":{b200k:"村上5号-1",west:502610,south:138880,east:503140,north:139220},
"木野俣":{b200k:"村上5号-2",west:502610,south:138580,east:503140,north:138920},
"温海":{b200k:"村上5号-3",west:502160,south:138880,east:502690,north:139220},
"鼠ヶ関":{b200k:"村上5号-4",west:502160,south:138580,east:502690,north:138920},
"雷":{b200k:"村上6号-1",west:502610,south:138280,east:503140,north:138620},
"鳴海山":{b200k:"村上6号-2",west:502610,south:137980,east:503140,north:138320},
"勝木":{b200k:"村上6号-3",west:502160,south:138280,east:502690,north:138620},
"蒲萄":{b200k:"村上6号-4",west:502160,south:137980,east:502690,north:138320},
"円吾山":{b200k:"村上7号-1",west:502610,south:137680,east:503140,north:138020},
"三面":{b200k:"村上7号-2",west:502610,south:137380,east:503135,north:137720},
"塩野町":{b200k:"村上7号-3",west:502160,south:137680,east:502690,north:138020},
"越後門前":{b200k:"村上7号-4",west:502160,south:137380,east:502685,north:137720},
"舟渡":{b200k:"村上8号-1",west:502610,south:137080,east:503135,north:137420},
"小国":{b200k:"村上8号-2",west:502610,south:136780,east:503135,north:137120},
"越後下関":{b200k:"村上8号-3",west:502160,south:137080,east:502685,north:137420},
"安角":{b200k:"村上8号-4",west:502160,south:136780,east:502685,north:137120},
"越後寒川":{b200k:"村上10号-1",west:501710,south:138280,east:502240,north:138620},
"笹川":{b200k:"村上10号-2",west:501710,south:137980,east:502240,north:138320},
"柏尾":{b200k:"村上11号-1",west:501710,south:137680,east:502240,north:138020},
"村上":{b200k:"村上11号-2",west:501710,south:137380,east:502235,north:137720},
"坂町":{b200k:"村上12号-1",west:501670,south:137080,east:502195,north:137420},
"中条":{b200k:"村上12号-2",west:501710,south:136780,east:502235,north:137120},
"稲荷岡":{b200k:"村上12号-4",west:501215,south:136780,east:501740,north:137120},
"玉庭":{b200k:"新潟1号-1",west:503510,south:136480,east:504035,north:136820},
"入田沢":{b200k:"新潟1号-2",west:503510,south:136180,east:504035,north:136520},
"叶水":{b200k:"新潟1号-3",west:503060,south:136480,east:503585,north:136820},
"岩倉":{b200k:"新潟1号-4",west:503060,south:136180,east:503585,north:136520},
"飯森山":{b200k:"新潟2号-1",west:503510,south:135880,east:504035,north:136220},
"熱塩":{b200k:"新潟2号-2",west:503510,south:135580,east:504035,north:135920},
"川入":{b200k:"新潟2号-3",west:503060,south:135880,east:503585,north:136220},
"加納":{b200k:"新潟2号-4",west:503060,south:135580,east:503585,north:135920},
"喜多方東部":{b200k:"新潟3号-1",west:503510,south:135280,east:504035,north:135620},
"会津広田":{b200k:"新潟3号-2",west:503515,south:134980,east:504035,north:135320},
"喜多方西部":{b200k:"新潟3号-3",west:503060,south:135280,east:503585,north:135620},
"坂下":{b200k:"新潟3号-4",west:503065,south:134980,east:503585,north:135320},
"若松":{b200k:"新潟4号-1",west:503515,south:134680,east:504035,north:135020},
"上三寄":{b200k:"新潟4号-2",west:503515,south:134380,east:504035,north:134720},
"会津高田":{b200k:"新潟4号-3",west:503065,south:134680,east:503585,north:135020},
"東尾岐":{b200k:"新潟4号-4",west:503065,south:134380,east:503585,north:134720},
"長者原":{b200k:"新潟5号-1",west:502610,south:136480,east:503135,north:136820},
"飯豊山":{b200k:"新潟5号-2",west:502610,south:136180,east:503135,north:136520},
"えぶり差岳":{b200k:"新潟5号-3",west:502160,south:136480,east:502685,north:136820},
"二王子岳":{b200k:"新潟5号-4",west:502160,south:136180,east:502685,north:136520},
"大日岳":{b200k:"新潟6号-1",west:502610,south:135880,east:503135,north:136220},
"飯里":{b200k:"新潟6号-2",west:502610,south:135580,east:503135,north:135920},
"蒜場山":{b200k:"新潟6号-3",west:502160,south:135880,east:502685,north:136220},
"日出谷":{b200k:"新潟6号-4",west:502160,south:135580,east:502685,north:135920},
"野沢":{b200k:"新潟7号-1",west:502610,south:135280,east:503135,north:135620},
"柳津":{b200k:"新潟7号-2",west:502615,south:134980,east:503135,north:135320},
"徳沢":{b200k:"新潟7号-3",west:502160,south:135280,east:502685,north:135620},
"安座":{b200k:"新潟7号-4",west:502165,south:134980,east:502685,north:135320},
"宮下":{b200k:"新潟8号-1",west:502615,south:134680,east:503135,north:135020},
"博士山":{b200k:"新潟8号-2",west:502615,south:134380,east:503135,north:134720},
"沼沢沼":{b200k:"新潟8号-3",west:502165,south:134680,east:502685,north:135020},
"野尻":{b200k:"新潟8号-4",west:502165,south:134380,east:502685,north:134720},
"菅谷":{b200k:"新潟9号-1",west:501710,south:136480,east:502235,north:136820},
"上赤谷":{b200k:"新潟9号-2",west:501710,south:136180,east:502235,north:136520},
"新発田":{b200k:"新潟9号-3",west:501260,south:136480,east:501785,north:136820},
"天王":{b200k:"新潟9号-4",west:501260,south:136180,east:501785,north:136520},
"東赤谷":{b200k:"新潟10号-1",west:501710,south:135880,east:502235,north:136220},
"津川":{b200k:"新潟10号-2",west:501710,south:135580,east:502235,north:135920},
"出湯":{b200k:"新潟10号-3",west:501260,south:135880,east:501785,north:136220},
"馬下":{b200k:"新潟10号-4",west:501260,south:135580,east:501785,north:135920},
"越後豊川":{b200k:"新潟11号-1",west:501710,south:135280,east:502235,north:135620},
"御神楽岳":{b200k:"新潟11号-2",west:501715,south:134980,east:502235,north:135320},
"高石":{b200k:"新潟11号-3",west:501260,south:135280,east:501785,north:135620},
"室谷":{b200k:"新潟11号-4",west:501265,south:134980,east:501785,north:135320},
"貉ヶ森山":{b200k:"新潟12号-1",west:501715,south:134680,east:502235,north:135020},
"会津横田":{b200k:"新潟12号-2",west:501715,south:134380,east:502235,north:134720},
"駒形山":{b200k:"新潟12号-3",west:501265,south:134680,east:501785,north:135020},
"只見":{b200k:"新潟12号-4",west:501265,south:134380,east:501785,north:134720},
"松浜":{b200k:"新潟13号-1",west:500810,south:136480,east:501335,north:136820},
"水原":{b200k:"新潟13号-2",west:500810,south:136180,east:501335,north:136520},
"新潟北部":{b200k:"新潟13号-3",west:500360,south:136480,east:500885,north:136820},
"新潟南部":{b200k:"新潟13号-4",west:500360,south:136180,east:500885,north:136520},
"新津":{b200k:"新潟14号-1",west:500810,south:135880,east:501335,north:136220},
"村松":{b200k:"新潟14号-2",west:500810,south:135580,east:501335,north:135920},
"白根":{b200k:"新潟14号-3",west:500360,south:135880,east:500885,north:136220},
"矢代田":{b200k:"新潟14号-4",west:500360,south:135580,east:500885,north:135920},
"越後白山":{b200k:"新潟15号-1",west:500810,south:135280,east:501335,north:135620},
"粟ヶ岳":{b200k:"新潟15号-2",west:500815,south:134980,east:501335,north:135320},
"加茂":{b200k:"新潟15号-3",west:500360,south:135280,east:500885,north:135620},
"森町":{b200k:"新潟15号-4",west:500365,south:134980,east:500885,north:135320},
"光明山":{b200k:"新潟16号-1",west:500815,south:134680,east:501335,north:135020},
"守門岳":{b200k:"新潟16号-2",west:500815,south:134380,east:501335,north:134720},
"栃堀":{b200k:"新潟16号-3",west:500365,south:134680,east:500885,north:135020},
"穴沢":{b200k:"新潟16号-4",west:500365,south:134380,east:500885,north:134720},
"湯野上":{b200k:"日光1号-1",west:503515,south:134080,east:504035,north:134420},
"甲子山":{b200k:"日光1号-2",west:503515,south:133780,east:504035,north:134120},
"林中":{b200k:"日光1号-3",west:503065,south:134080,east:503585,north:134420},
"田島":{b200k:"日光1号-4",west:503065,south:133780,east:503585,north:134120},
"那須岳":{b200k:"日光2号-1",west:503515,south:133480,east:504035,north:133820},
"板室":{b200k:"日光2号-2",west:503515,south:133180,east:504035,north:133520},
"栗生沢":{b200k:"日光2号-3",west:503065,south:133480,east:503585,north:133820},
"日留賀岳":{b200k:"日光2号-4",west:503065,south:133180,east:503585,north:133520},
"関谷":{b200k:"日光3号-1",west:503515,south:132880,east:504035,north:133220},
"西那須野":{b200k:"日光3号-2",west:503515,south:132580,east:504035,north:132920},
"塩原":{b200k:"日光3号-3",west:503065,south:132880,east:503585,north:133220},
"高原山":{b200k:"日光3号-4",west:503065,south:132580,east:503585,north:132920},
"矢板":{b200k:"日光4号-1",west:503515,south:132280,east:504030,north:132620},
"氏家":{b200k:"日光4号-2",west:503515,south:131980,east:504030,north:132320},
"玉生":{b200k:"日光4号-3",west:503065,south:132280,east:503580,north:132620},
"下野大沢":{b200k:"日光4号-4",west:503065,south:131980,east:503580,north:132320},
"大芦":{b200k:"日光5号-1",west:502615,south:134080,east:503135,north:134420},
"針生":{b200k:"日光5号-2",west:502615,south:133780,east:503135,north:134120},
"和泉田":{b200k:"日光5号-3",west:502165,south:134080,east:502685,north:134420},
"会津山口":{b200k:"日光5号-4",west:502165,south:133780,east:502685,north:134120},
"糸沢":{b200k:"日光6号-1",west:502615,south:133480,east:503135,north:133820},
"荒海山":{b200k:"日光6号-2",west:502615,south:133180,east:503135,north:133520},
"松戸原":{b200k:"日光6号-3",west:502165,south:133480,east:502685,north:133820},
"湯ノ花":{b200k:"日光6号-4",west:502165,south:133180,east:502685,north:133520},
"五十里湖":{b200k:"日光7号-1",west:502615,south:132880,east:503135,north:133220},
"川治":{b200k:"日光7号-2",west:502615,south:132580,east:503135,north:132920},
"湯西川":{b200k:"日光7号-3",west:502165,south:132880,east:502685,north:133220},
"川俣湖":{b200k:"日光7号-4",west:502165,south:132580,east:502685,north:132920},
"鬼怒川温泉":{b200k:"日光8号-1",west:502615,south:132280,east:503130,north:132620},
"今市":{b200k:"日光8号-2",west:502615,south:131980,east:503130,north:132320},
"日光北部":{b200k:"日光8号-3",west:502165,south:132280,east:502680,north:132620},
"日光南部":{b200k:"日光8号-4",west:502165,south:131980,east:502680,north:132320},
"会津小林":{b200k:"日光9号-1",west:501715,south:134080,east:502235,north:134420},
"城郭朝日山":{b200k:"日光9号-2",west:501715,south:133780,east:502235,north:134120},
"田子倉湖":{b200k:"日光9号-3",west:501265,south:134080,east:501785,north:134420},
"会津朝日岳":{b200k:"日光9号-4",west:501265,south:133780,east:501785,north:134120},
"内川":{b200k:"日光10号-1",west:501715,south:133480,east:502235,north:133820},
"檜枝岐":{b200k:"日光10号-2",west:501715,south:133180,east:502235,north:133520},
"高幽山":{b200k:"日光10号-3",west:501265,south:133480,east:501785,north:133820},
"会津駒ヶ岳":{b200k:"日光10号-4",west:501265,south:133180,east:501785,north:133520},
"帝釈山":{b200k:"日光11号-1",west:501715,south:132880,east:502235,north:133220},
"川俣温泉":{b200k:"日光11号-2",west:501715,south:132580,east:502235,north:132920},
"燧ヶ岳":{b200k:"日光11号-3",west:501265,south:132880,east:501785,north:133220},
"三平峠":{b200k:"日光11号-4",west:501265,south:132580,east:501785,north:132920},
"男体山":{b200k:"日光12号-1",west:501715,south:132280,east:502230,north:132620},
"中禅寺湖":{b200k:"日光12号-2",west:501715,south:131980,east:502230,north:132320},
"丸沼":{b200k:"日光12号-3",west:501265,south:132280,east:501780,north:132620},
"皇海山":{b200k:"日光12号-4",west:501265,south:131980,east:501780,north:132320},
"毛猛山":{b200k:"日光13号-1",west:500815,south:134080,east:501335,north:134420},
"未丈ヶ岳":{b200k:"日光13号-2",west:500815,south:133780,east:501335,north:134120},
"須原":{b200k:"日光13号-3",west:500365,south:134080,east:500885,north:134420},
"大湯":{b200k:"日光13号-4",west:500365,south:133780,east:500885,north:134120},
"奥只見湖":{b200k:"日光14号-1",west:500815,south:133480,east:501335,north:133820},
"平ヶ岳":{b200k:"日光14号-2",west:500815,south:133180,east:501335,north:133520},
"八海山":{b200k:"日光14号-3",west:500365,south:133480,east:500885,north:133820},
"兎岳":{b200k:"日光14号-4",west:500365,south:133180,east:500885,north:133520},
"尾瀬ヶ原":{b200k:"日光15号-1",west:500815,south:132880,east:501335,north:133220},
"至仏山":{b200k:"日光15号-2",west:500815,south:132580,east:501335,north:132920},
"奥利根湖":{b200k:"日光15号-3",west:500365,south:132880,east:500885,north:133220},
"藤原":{b200k:"日光15号-4",west:500365,south:132580,east:500885,north:132920},
"鎌田":{b200k:"日光16号-1",west:500815,south:132280,east:501330,north:132620},
"追貝":{b200k:"日光16号-2",west:500815,south:131980,east:501330,north:132320},
"藤原湖":{b200k:"日光16号-3",west:500365,south:132280,east:500880,north:132620},
"後閑":{b200k:"日光16号-4",west:500365,south:131980,east:500880,north:132320},
"宝積寺":{b200k:"宇都宮1号-1",west:503515,south:131680,east:504030,north:132020},
"宇都宮東部":{b200k:"宇都宮1号-2",west:503515,south:131380,east:504030,north:131720},
"大谷":{b200k:"宇都宮1号-3",west:503065,south:131680,east:503580,north:132020},
"宇都宮西部":{b200k:"宇都宮1号-4",west:503065,south:131380,east:503580,north:131720},
"上三川":{b200k:"宇都宮2号-1",west:503515,south:131080,east:504030,north:131420},
"久下田":{b200k:"宇都宮2号-2",west:503515,south:130780,east:504030,north:131120},
"壬生":{b200k:"宇都宮2号-3",west:503065,south:131080,east:503580,north:131420},
"小金井":{b200k:"宇都宮2号-4",west:503065,south:130780,east:503580,north:131120},
"下館":{b200k:"宇都宮3号-1",west:503515,south:130480,east:504030,north:130820},
"下妻":{b200k:"宇都宮3号-2",west:503515,south:130180,east:504030,north:130520},
"小山":{b200k:"宇都宮3号-3",west:503065,south:130480,east:503580,north:130820},
"諸川":{b200k:"宇都宮3号-4",west:503065,south:130180,east:503580,north:130520},
"石下":{b200k:"宇都宮4号-1",west:503515,south:129880,east:504030,north:130220},
"水海道":{b200k:"宇都宮4号-2",west:503520,south:129580,east:504030,north:129920},
"下総境":{b200k:"宇都宮4号-3",west:503065,south:129880,east:503580,north:130220},
"宝珠花":{b200k:"宇都宮4号-4",west:503070,south:129580,east:503580,north:129920},
"文挾":{b200k:"宇都宮5号-1",west:502615,south:131680,east:503130,north:132020},
"鹿沼":{b200k:"宇都宮5号-2",west:502615,south:131380,east:503130,north:131720},
"古峰原":{b200k:"宇都宮5号-3",west:502165,south:131680,east:502680,north:132020},
"中粕尾":{b200k:"宇都宮5号-4",west:502165,south:131380,east:502680,north:131720},
"下野大柿":{b200k:"宇都宮6号-1",west:502615,south:131080,east:503130,north:131420},
"栃木":{b200k:"宇都宮6号-2",west:502615,south:130780,east:503130,north:131120},
"仙波":{b200k:"宇都宮6号-3",west:502165,south:131080,east:502680,north:131420},
"田沼":{b200k:"宇都宮6号-4",west:502165,south:130780,east:502680,north:131120},
"下野藤岡":{b200k:"宇都宮7号-1",west:502615,south:130480,east:503130,north:130820},
"古河":{b200k:"宇都宮7号-2",west:502615,south:130180,east:503130,north:130520},
"佐野":{b200k:"宇都宮7号-3",west:502165,south:130480,east:502680,north:130820},
"館林":{b200k:"宇都宮7号-4",west:502165,south:130180,east:502680,north:130520},
"栗橋":{b200k:"宇都宮8号-1",west:502615,south:129880,east:503130,north:130220},
"久喜":{b200k:"宇都宮8号-2",west:502620,south:129580,east:503130,north:129920},
"加須":{b200k:"宇都宮8号-3",west:502165,south:129880,east:502680,north:130220},
"鴻巣":{b200k:"宇都宮8号-4",west:502170,south:129580,east:502680,north:129920},
"足尾":{b200k:"宇都宮9号-1",west:501715,south:131680,east:502230,north:132020},
"沢入":{b200k:"宇都宮9号-2",west:501715,south:131380,east:502230,north:131720},
"袈裟丸山":{b200k:"宇都宮9号-3",west:501265,south:131680,east:501780,north:132020},
"上野花輪":{b200k:"宇都宮9号-4",west:501265,south:131380,east:501780,north:131720},
"番場":{b200k:"宇都宮10号-1",west:501715,south:131080,east:502230,north:131420},
"足利北部":{b200k:"宇都宮10号-2",west:501715,south:130780,east:502230,north:131120},
"大間々":{b200k:"宇都宮10号-3",west:501265,south:131080,east:501780,north:131420},
"桐生":{b200k:"宇都宮10号-4",west:501265,south:130780,east:501780,north:131120},
"足利南部":{b200k:"宇都宮11号-1",west:501715,south:130480,east:502230,north:130820},
"妻沼":{b200k:"宇都宮11号-2",west:501715,south:130180,east:502230,north:130520},
"上野境":{b200k:"宇都宮11号-3",west:501265,south:130480,east:501780,north:130820},
"深谷":{b200k:"宇都宮11号-4",west:501265,south:130180,east:501780,north:130520},
"熊谷":{b200k:"宇都宮12号-1",west:501715,south:129880,east:502230,north:130220},
"東松山":{b200k:"宇都宮12号-2",west:501720,south:129580,east:502230,north:129920},
"三ヶ尻":{b200k:"宇都宮12号-3",west:501265,south:129880,east:501780,north:130220},
"武蔵小川":{b200k:"宇都宮12号-4",west:501270,south:129580,east:501780,north:129920},
"高平":{b200k:"宇都宮13号-1",west:500815,south:131680,east:501330,north:132020},
"赤城山":{b200k:"宇都宮13号-2",west:500815,south:131380,east:501330,north:131720},
"沼田":{b200k:"宇都宮13号-3",west:500365,south:131680,east:500880,north:132020},
"鯉沢":{b200k:"宇都宮13号-4",west:500365,south:131380,east:500880,north:131720},
"鼻毛石":{b200k:"宇都宮14号-1",west:500815,south:131080,east:501330,north:131420},
"大胡":{b200k:"宇都宮14号-2",west:500815,south:130780,east:501330,north:131120},
"渋川":{b200k:"宇都宮14号-3",west:500365,south:131080,east:500880,north:131420},
"前橋":{b200k:"宇都宮14号-4",west:500365,south:130780,east:500880,north:131120},
"伊勢崎":{b200k:"宇都宮15号-1",west:500815,south:130480,east:501330,north:130820},
"本庄":{b200k:"宇都宮15号-2",west:500815,south:130180,east:501330,north:130520},
"高崎":{b200k:"宇都宮15号-3",west:500365,south:130480,east:500880,north:130820},
"藤岡":{b200k:"宇都宮15号-4",west:500365,south:130180,east:500880,north:130520},
"寄居":{b200k:"宇都宮16号-1",west:500815,south:129880,east:501330,north:130220},
"安戸":{b200k:"宇都宮16号-2",west:500820,south:129580,east:501330,north:129920},
"鬼石":{b200k:"宇都宮16号-3",west:500365,south:129880,east:500880,north:130220},
"皆野":{b200k:"宇都宮16号-4",west:500370,south:129580,east:500880,north:129920},
"守谷":{b200k:"東京1号-1",west:503520,south:129280,east:504030,north:129620},
"流山":{b200k:"東京1号-2",west:503520,south:128980,east:504030,north:129320},
"野田市":{b200k:"東京1号-3",west:503070,south:129280,east:503580,north:129620},
"越谷":{b200k:"東京1号-4",west:503070,south:128980,east:503580,north:129320},
"松戸":{b200k:"東京2号-1",west:503520,south:128680,east:504030,north:129020},
"船橋":{b200k:"東京2号-2",west:503520,south:128380,east:504030,north:128720},
"草加":{b200k:"東京2号-3",west:503070,south:128680,east:503580,north:129020},
"東京首部":{b200k:"東京2号-4",west:503070,south:128380,east:503580,north:128720},
"浦安":{b200k:"東京3号-1",west:503520,south:128080,east:504030,north:128420},
"東京南部":{b200k:"東京3号-3",west:503070,south:128080,east:503580,north:128420},
"東京国際空港":{b200k:"東京3号-4",west:503070,south:127780,east:503580,north:128120},
"奈良輪":{b200k:"東京4号-1",west:503520,south:127480,east:504030,north:127820},
"木更津":{b200k:"東京4号-2",west:503520,south:127180,east:504030,north:127520},
"東扇島":{b200k:"東京4号-3",west:503070,south:127480,east:503580,north:127820},
"大堀":{b200k:"東京4号-4",west:503070,south:127180,east:503580,north:127520},
"岩槻":{b200k:"東京5号-1",west:502620,south:129280,east:503130,north:129620},
"浦和":{b200k:"東京5号-2",west:502620,south:128980,east:503130,north:129320},
"上尾":{b200k:"東京5号-3",west:502170,south:129280,east:502680,north:129620},
"与野":{b200k:"東京5号-4",west:502170,south:128980,east:502680,north:129320},
"赤羽":{b200k:"東京6号-1",west:502620,south:128680,east:503130,north:129020},
"東京西部":{b200k:"東京6号-2",west:502620,south:128380,east:503130,north:128720},
"志木":{b200k:"東京6号-3",west:502170,south:128680,east:502680,north:129020},
"吉祥寺":{b200k:"東京6号-4",west:502170,south:128380,east:502680,north:128720},
"東京西南部":{b200k:"東京7号-1",west:502620,south:128080,east:503130,north:128420},
"川崎":{b200k:"東京7号-2",west:502620,south:127780,east:503130,north:128120},
"溝口":{b200k:"東京7号-3",west:502170,south:128080,east:502680,north:128420},
"荏田":{b200k:"東京7号-4",west:502170,south:127780,east:502680,north:128120},
"横浜東部":{b200k:"東京8号-1",west:502620,south:127480,east:503130,north:127820},
"本牧":{b200k:"東京8号-2",west:502620,south:127180,east:503130,north:127520},
"横浜西部":{b200k:"東京8号-3",west:502170,south:127480,east:502680,north:127820},
"戸塚":{b200k:"東京8号-4",west:502170,south:127180,east:502680,north:127520},
"川越北部":{b200k:"東京9号-1",west:501720,south:129280,east:502230,north:129620},
"川越南部":{b200k:"東京9号-2",west:501720,south:128980,east:502230,north:129320},
"越生":{b200k:"東京9号-3",west:501270,south:129280,east:501780,north:129620},
"飯能":{b200k:"東京9号-4",west:501270,south:128980,east:501780,north:129320},
"所沢":{b200k:"東京10号-1",west:501720,south:128680,east:502230,north:129020},
"立川":{b200k:"東京10号-2",west:501720,south:128380,east:502230,north:128720},
"青梅":{b200k:"東京10号-3",west:501270,south:128680,east:501780,north:129020},
"拝島":{b200k:"東京10号-4",west:501270,south:128380,east:501780,north:128720},
"武蔵府中":{b200k:"東京11号-1",west:501720,south:128080,east:502230,north:128420},
"原町田":{b200k:"東京11号-2",west:501720,south:127780,east:502230,north:128120},
"八王子":{b200k:"東京11号-3",west:501270,south:128080,east:501780,north:128420},
"上溝":{b200k:"東京11号-4",west:501270,south:127780,east:501780,north:128120},
"座間":{b200k:"東京12号-1",west:501720,south:127480,east:502230,north:127820},
"藤沢":{b200k:"東京12号-2",west:501720,south:127180,east:502230,north:127520},
"厚木":{b200k:"東京12号-3",west:501270,south:127480,east:501780,north:127820},
"伊勢原":{b200k:"東京12号-4",west:501270,south:127180,east:501780,north:127520},
"正丸峠":{b200k:"東京13号-1",west:500820,south:129280,east:501330,north:129620},
"原市場":{b200k:"東京13号-2",west:500820,south:128980,east:501330,north:129320},
"秩父":{b200k:"東京13号-3",west:500370,south:129280,east:500880,north:129620},
"武蔵日原":{b200k:"東京13号-4",west:500370,south:128980,east:500880,north:129320},
"武蔵御岳":{b200k:"東京14号-1",west:500820,south:128680,east:501330,north:129020},
"五日市":{b200k:"東京14号-2",west:500820,south:128380,east:501330,north:128720},
"奥多摩湖":{b200k:"東京14号-3",west:500370,south:128680,east:500880,north:129020},
"猪丸":{b200k:"東京14号-4",west:500370,south:128380,east:500880,north:128720},
"与瀬":{b200k:"東京15号-1",west:500820,south:128080,east:501330,north:128420},
"青野原":{b200k:"東京15号-2",west:500820,south:127780,east:501330,north:128120},
"上野原":{b200k:"東京15号-3",west:500370,south:128080,east:500880,north:128420},
"大室山":{b200k:"東京15号-4",west:500370,south:127780,east:500880,north:128120},
"大山":{b200k:"東京16号-1",west:500820,south:127480,east:501330,north:127820},
"秦野":{b200k:"東京16号-2",west:500820,south:127180,east:501330,north:127520},
"中川":{b200k:"東京16号-3",west:500370,south:127480,east:500880,north:127820},
"山北":{b200k:"東京16号-4",west:500370,south:127180,east:500880,north:127520},
"鹿野山":{b200k:"横須賀1号-1",west:503520,south:126880,east:504025,north:127220},
"鬼泪山":{b200k:"横須賀1号-2",west:503520,south:126580,east:504025,north:126920},
"富津":{b200k:"横須賀1号-3",west:503070,south:126880,east:503575,north:127220},
"上総湊":{b200k:"横須賀1号-4",west:503070,south:126580,east:503575,north:126920},
"金束":{b200k:"横須賀2号-1",west:503520,south:126280,east:504025,north:126620},
"安房古川":{b200k:"横須賀2号-2",west:503520,south:125980,east:504025,north:126320},
"保田":{b200k:"横須賀2号-3",west:503070,south:126280,east:503575,north:126620},
"那古":{b200k:"横須賀2号-4",west:503070,south:125980,east:503575,north:126320},
"千倉":{b200k:"横須賀3号-1",west:503520,south:125680,east:504025,north:126020},
"白浜":{b200k:"横須賀3号-2",west:503340,south:125380,east:503845,north:125720},
"館山":{b200k:"横須賀3号-3",west:503070,south:125680,east:503575,north:126020},
"横須賀":{b200k:"横須賀5号-1",west:502620,south:126880,east:503125,north:127220},
"浦賀":{b200k:"横須賀5号-2",west:502620,south:126580,east:503125,north:126920},
"鎌倉":{b200k:"横須賀5号-3",west:502170,south:126880,east:502675,north:127220},
"秋谷":{b200k:"横須賀5号-4",west:502170,south:126580,east:502675,north:126920},
"三浦三崎":{b200k:"横須賀6号-1",west:502470,south:126280,east:502975,north:126620},
"江の島":{b200k:"横須賀9号-1",west:501720,south:126880,east:502225,north:127220},
"平塚":{b200k:"横須賀9号-3",west:501270,south:126880,east:501775,north:127220},
"大島北部":{b200k:"横須賀12号-1",west:501600,south:125080,east:502105,north:125420},
"大島南部":{b200k:"横須賀12号-2",west:501600,south:124780,east:502105,north:125120},
"小田原北部":{b200k:"横須賀13号-1",west:500820,south:126880,east:501325,north:127220},
"小田原南部":{b200k:"横須賀13号-2",west:500820,south:126580,east:501325,north:126920},
"関本":{b200k:"横須賀13号-3",west:500370,south:126880,east:500875,north:127220},
"箱根":{b200k:"横須賀13号-4",west:500370,south:126580,east:500875,north:126920},
"真鶴岬":{b200k:"横須賀14号-1",west:500820,south:126280,east:501325,north:126620},
"熱海":{b200k:"横須賀14号-3",west:500370,south:126280,east:500875,north:126620},
"網代":{b200k:"横須賀14号-4",west:500370,south:125980,east:500875,north:126320},
"川奈":{b200k:"横須賀15号-1",west:500820,south:125530,east:501325,north:125870},
"伊東":{b200k:"横須賀15号-3",west:500370,south:125680,east:500875,north:126020},
"天城山":{b200k:"横須賀15号-4",west:500370,south:125380,east:500875,north:125720},
"稲取":{b200k:"横須賀16号-3",west:500370,south:125080,east:500875,north:125420},
"三宅島":{b200k:"三宅島8号-3",west:501995,south:122530,east:502495,north:122870},
"利島":{b200k:"三宅島9号-4",west:501065,south:124030,east:501570,north:124370},
"新島":{b200k:"三宅島10号-3",west:501065,south:123730,east:501565,north:124070},
"式根島":{b200k:"三宅島10号-4",west:501065,south:123430,east:501565,north:123770},
"神津島":{b200k:"三宅島15号-2",west:500625,south:123040,east:501125,north:123380},
"御蔵島":{b200k:"御蔵島1号-4",west:502265,south:121780,east:502765,north:122120},
"八丈島":{b200k:"八丈島2号-3",west:503075,south:119080,east:503570,north:119420},
"八丈島南部":{b200k:"八丈島2号-4",west:503075,south:118780,east:503570,north:119120},
"八丈小島":{b200k:"八丈島6号-1",west:502625,south:119080,east:503120,north:119420},
"鳥島":{b200k:"号-",west:504885,south:109480,east:505365,north:109820},
"兄島":{b200k:"小笠原諸島13号-1",west:511635,south:97600,east:512100,north:97940},
"父島":{b200k:"小笠原諸島13号-2",west:511695,south:97300,east:512160,north:97640},
"母島北部":{b200k:"小笠原諸島15号-2",west:511560,south:95830,east:512025,north:96170},
"母島南部":{b200k:"小笠原諸島16号-1",west:511635,south:95530,east:512100,north:95870},
"北硫黄島":{b200k:"号-",west:508500,south:91420,east:508960,north:91760},
"硫黄島":{b200k:"号-",west:508560,south:89020,east:509015,north:89360},
"南硫黄島":{b200k:"号-",west:508945,south:86980,east:509400,north:87320},
"媒島":{b200k:"号-",west:511635,south:99280,east:512100,north:99620},
"聟島":{b200k:"号-",west:511380,south:99580,east:511850,north:99920},
"水津":{b200k:"相川8号-4",west:498480,south:136780,east:499005,north:137120},
"鷲崎":{b200k:"相川11号-1",west:498210,south:137695,east:498740,north:138035},
"小田":{b200k:"相川11号-2",west:498110,south:137380,east:498635,north:137720},
"北田野浦":{b200k:"相川11号-4",west:497660,south:137380,east:498185,north:137720},
"両津北部":{b200k:"相川12号-1",west:498110,south:137080,east:498635,north:137420},
"両津":{b200k:"相川12号-2",west:498065,south:136780,east:498590,north:137120},
"金北山":{b200k:"相川12号-3",west:497650,south:137080,east:498175,north:137420},
"相川":{b200k:"相川12号-4",west:497580,south:136780,east:498105,north:137120},
"内野":{b200k:"長岡1号-2",west:499910,south:136180,east:500435,north:136520},
"巻":{b200k:"長岡2号-1",west:499910,south:135880,east:500435,north:136220},
"越後吉田":{b200k:"長岡2号-2",west:499910,south:135580,east:500435,north:135920},
"角田山":{b200k:"長岡2号-3",west:499460,south:135880,east:499985,north:136220},
"弥彦":{b200k:"長岡2号-4",west:499460,south:135580,east:499985,north:135920},
"三条":{b200k:"長岡3号-1",west:499910,south:135280,east:500435,north:135620},
"見附":{b200k:"長岡3号-2",west:499915,south:134980,east:500435,north:135320},
"寺泊":{b200k:"長岡3号-3",west:499430,south:135280,east:499955,north:135620},
"与板":{b200k:"長岡3号-4",west:499465,south:134980,east:499985,north:135320},
"栃尾":{b200k:"長岡4号-1",west:499915,south:134680,east:500435,north:135020},
"半蔵金":{b200k:"長岡4号-2",west:499915,south:134380,east:500435,north:134720},
"長岡":{b200k:"長岡4号-3",west:499465,south:134680,east:499985,north:135020},
"片貝":{b200k:"長岡4号-4",west:499465,south:134380,east:499985,north:134720},
"岩首":{b200k:"長岡5号-3",west:498480,south:136480,east:499005,north:136820},
"出雲崎":{b200k:"長岡7号-2",west:499015,south:134980,east:499535,north:135320},
"西山":{b200k:"長岡8号-1",west:499015,south:134680,east:499535,north:135020},
"塚野山":{b200k:"長岡8号-2",west:499015,south:134380,east:499535,north:134720},
"宮川":{b200k:"長岡8号-3",west:498565,south:134680,east:499085,north:135020},
"柏崎":{b200k:"長岡8号-4",west:498520,south:134380,east:499040,north:134720},
"畑野":{b200k:"長岡9号-1",west:498065,south:136480,east:498590,north:136820},
"赤泊":{b200k:"長岡9号-2",west:498110,south:136180,east:498635,north:136520},
"河原田":{b200k:"長岡9号-3",west:497580,south:136480,east:498105,north:136820},
"羽茂本郷":{b200k:"長岡9号-4",west:497660,south:136180,east:498185,north:136520},
"小木":{b200k:"長岡10号-3",west:497660,south:135880,east:498185,north:136220},
"小平尾":{b200k:"高田1号-1",west:499915,south:134080,east:500435,north:134420},
"小出":{b200k:"高田1号-2",west:499915,south:133780,east:500435,north:134120},
"小千谷":{b200k:"高田1号-3",west:499465,south:134080,east:499985,north:134420},
"岩沢":{b200k:"高田1号-4",west:499465,south:133780,east:499985,north:134120},
"五日町":{b200k:"高田2号-1",west:499915,south:133480,east:500435,north:133820},
"六日町":{b200k:"高田2号-2",west:499915,south:133180,east:500435,north:133520},
"十日町":{b200k:"高田2号-3",west:499465,south:133480,east:499985,north:133820},
"塩沢":{b200k:"高田2号-4",west:499465,south:133180,east:499985,north:133520},
"巻機山":{b200k:"高田3号-1",west:499915,south:132880,east:500435,north:133220},
"茂倉岳":{b200k:"高田3号-2",west:499915,south:132580,east:500435,north:132920},
"越後湯沢":{b200k:"高田3号-3",west:499465,south:132880,east:499985,north:133220},
"土樽":{b200k:"高田3号-4",west:499465,south:132580,east:499985,north:132920},
"水上":{b200k:"高田4号-1",west:499915,south:132280,east:500430,north:132620},
"猿ヶ京":{b200k:"高田4号-2",west:499915,south:131980,east:500430,north:132320},
"三国峠":{b200k:"高田4号-3",west:499465,south:132280,east:499980,north:132620},
"四万":{b200k:"高田4号-4",west:499465,south:131980,east:499980,north:132320},
"法坂":{b200k:"高田5号-1",west:499015,south:134080,east:499535,north:134420},
"岡野町":{b200k:"高田5号-2",west:499015,south:133780,east:499535,north:134120},
"越後野田":{b200k:"高田5号-3",west:498565,south:134080,east:499085,north:134420},
"石黒":{b200k:"高田5号-4",west:498565,south:133780,east:499085,north:134120},
"千手":{b200k:"高田6号-1",west:499015,south:133480,east:499535,north:133820},
"大割野":{b200k:"高田6号-2",west:499015,south:133180,east:499535,north:133520},
"松代":{b200k:"高田6号-3",west:498565,south:133480,east:499085,north:133820},
"松之山温泉":{b200k:"高田6号-4",west:498565,south:133180,east:499085,north:133520},
"赤沢":{b200k:"高田7号-1",west:499015,south:132880,east:499535,north:133220},
"苗場山":{b200k:"高田7号-2",west:499015,south:132580,east:499535,north:132920},
"信濃森":{b200k:"高田7号-3",west:498565,south:132880,east:499085,north:133220},
"鳥甲山":{b200k:"高田7号-4",west:498565,south:132580,east:499085,north:132920},
"佐武流山":{b200k:"高田8号-1",west:499015,south:132280,east:499530,north:132620},
"野反湖":{b200k:"高田8号-2",west:499015,south:131980,east:499530,north:132320},
"切明":{b200k:"高田8号-3",west:498565,south:132280,east:499080,north:132620},
"岩菅山":{b200k:"高田8号-4",west:498565,south:131980,east:499080,north:132320},
"柿崎":{b200k:"高田9号-1",west:498080,south:134080,east:498600,north:134420},
"原之町":{b200k:"高田9号-2",west:498115,south:133780,east:498635,north:134120},
"潟町":{b200k:"高田9号-4",west:497640,south:133780,east:498160,north:134120},
"安塚":{b200k:"高田10号-1",west:498115,south:133480,east:498635,north:133820},
"柳島":{b200k:"高田10号-2",west:498115,south:133180,east:498635,north:133520},
"高田東部":{b200k:"高田10号-3",west:497665,south:133480,east:498185,north:133820},
"新井":{b200k:"高田10号-4",west:497665,south:133180,east:498185,north:133520},
"野沢温泉":{b200k:"高田11号-1",west:498115,south:132880,east:498635,north:133220},
"往郷":{b200k:"高田11号-2",west:498115,south:132580,east:498635,north:132920},
"猿橋":{b200k:"高田11号-3",west:497665,south:132880,east:498185,north:133220},
"飯山":{b200k:"高田11号-4",west:497665,south:132580,east:498185,north:132920},
"夜間瀬":{b200k:"高田12号-1",west:498115,south:132280,east:498630,north:132620},
"中野東部":{b200k:"高田12号-2",west:498115,south:131980,east:498630,north:132320},
"替佐":{b200k:"高田12号-3",west:497665,south:132280,east:498180,north:132620},
"中野西部":{b200k:"高田12号-4",west:497665,south:131980,east:498180,north:132320},
"高田西部":{b200k:"高田14号-1",west:497215,south:133500,east:497735,north:133840},
"重倉山":{b200k:"高田14号-2",west:497215,south:133180,east:497735,north:133520},
"名立大町":{b200k:"高田14号-3",west:496720,south:133500,east:497240,north:133840},
"槇":{b200k:"高田14号-4",west:496765,south:133180,east:497285,north:133520},
"関山":{b200k:"高田15号-1",west:497215,south:132880,east:497735,north:133220},
"赤倉":{b200k:"高田15号-2",west:497215,south:132580,east:497735,north:132920},
"湯川内":{b200k:"高田15号-3",west:496765,south:132880,east:497285,north:133220},
"妙高山":{b200k:"高田15号-4",west:496765,south:132580,east:497285,north:132920},
"信濃柏原":{b200k:"高田16号-1",west:497215,south:132280,east:497730,north:132620},
"若槻":{b200k:"高田16号-2",west:497215,south:131980,east:497730,north:132320},
"高妻山":{b200k:"高田16号-3",west:496765,south:132280,east:497280,north:132620},
"戸隠":{b200k:"高田16号-4",west:496765,south:131980,east:497280,north:132320},
"上野中山":{b200k:"長野1号-1",west:499915,south:131680,east:500430,north:132020},
"金井":{b200k:"長野1号-2",west:499915,south:131380,east:500430,north:131720},
"中之条":{b200k:"長野1号-3",west:499465,south:131680,east:499980,north:132020},
"群馬原町":{b200k:"長野1号-4",west:499465,south:131380,east:499980,north:131720},
"伊香保":{b200k:"長野2号-1",west:499915,south:131080,east:500430,north:131420},
"下室田":{b200k:"長野2号-2",west:499915,south:130780,east:500430,north:131120},
"榛名湖":{b200k:"長野2号-3",west:499465,south:131080,east:499980,north:131420},
"三ノ倉":{b200k:"長野2号-4",west:499465,south:130780,east:499980,north:131120},
"富岡":{b200k:"長野3号-1",west:499915,south:130480,east:500430,north:130820},
"上野吉井":{b200k:"長野3号-2",west:499915,south:130180,east:500430,north:130520},
"松井田":{b200k:"長野3号-3",west:499465,south:130480,east:499980,north:130820},
"下仁田":{b200k:"長野3号-4",west:499465,south:130180,east:499980,north:130520},
"万場":{b200k:"長野4号-1",west:499915,south:129880,east:500430,north:130220},
"長又":{b200k:"長野4号-2",west:499920,south:129580,east:500430,north:129920},
"神ヶ原":{b200k:"長野4号-3",west:499465,south:129880,east:499980,north:130220},
"両神山":{b200k:"長野4号-4",west:499470,south:129580,east:499980,north:129920},
"小雨":{b200k:"長野5号-1",west:499015,south:131680,east:499530,north:132020},
"長野原":{b200k:"長野5号-2",west:499015,south:131380,east:499530,north:131720},
"上野草津":{b200k:"長野5号-3",west:498565,south:131680,east:499080,north:132020},
"大前":{b200k:"長野5号-4",west:498565,south:131380,east:499080,north:131720},
"浅間隠山":{b200k:"長野6号-1",west:499015,south:131080,east:499530,north:131420},
"軽井沢":{b200k:"長野6号-2",west:499015,south:130780,east:499530,north:131120},
"北軽井沢":{b200k:"長野6号-3",west:498565,south:131080,east:499080,north:131420},
"浅間山":{b200k:"長野6号-4",west:498565,south:130780,east:499080,north:131120},
"南軽井沢":{b200k:"長野7号-1",west:499015,south:130480,east:499530,north:130820},
"荒船山":{b200k:"長野7号-2",west:499015,south:130180,east:499530,north:130520},
"御代田":{b200k:"長野7号-3",west:498565,south:130480,east:499080,north:130820},
"信濃田口":{b200k:"長野7号-4",west:498565,south:130180,east:499080,north:130520},
"十石峠":{b200k:"長野8号-1",west:499015,south:129880,east:499530,north:130220},
"浜平":{b200k:"長野8号-2",west:499020,south:129580,east:499530,north:129920},
"海瀬":{b200k:"長野8号-3",west:498565,south:129880,east:499080,north:130220},
"信濃中島":{b200k:"長野8号-4",west:498570,south:129580,east:499080,north:129920},
"御飯岳":{b200k:"長野9号-1",west:498115,south:131680,east:498630,north:132020},
"四阿山":{b200k:"長野9号-2",west:498115,south:131380,east:498630,north:131720},
"須坂":{b200k:"長野9号-3",west:497665,south:131680,east:498180,north:132020},
"菅平":{b200k:"長野9号-4",west:497665,south:131380,east:498180,north:131720},
"嬬恋田代":{b200k:"長野10号-1",west:498115,south:131080,east:498630,north:131420},
"車坂峠":{b200k:"長野10号-2",west:498115,south:130780,east:498630,north:131120},
"真田":{b200k:"長野10号-3",west:497665,south:131080,east:498180,north:131420},
"上田":{b200k:"長野10号-4",west:497665,south:130780,east:498180,north:131120},
"小諸":{b200k:"長野11号-1",west:498115,south:130480,east:498630,north:130820},
"臼田":{b200k:"長野11号-2",west:498115,south:130180,east:498630,north:130520},
"丸子":{b200k:"長野11号-3",west:497665,south:130480,east:498180,north:130820},
"春日本郷":{b200k:"長野11号-4",west:497665,south:130180,east:498180,north:130520},
"高野町":{b200k:"長野12号-1",west:498115,south:129880,east:498630,north:130220},
"松原湖":{b200k:"長野12号-2",west:498120,south:129580,east:498630,north:129920},
"蓼科山":{b200k:"長野12号-3",west:497665,south:129880,east:498180,north:130220},
"蓼科":{b200k:"長野12号-4",west:497670,south:129580,east:498180,north:129920},
"長野":{b200k:"長野13号-1",west:497215,south:131680,east:497730,north:132020},
"信濃松代":{b200k:"長野13号-2",west:497215,south:131380,east:497730,north:131720},
"信濃中条":{b200k:"長野13号-3",west:496765,south:131680,east:497280,north:132020},
"稲荷山":{b200k:"長野13号-4",west:496765,south:131380,east:497280,north:131720},
"坂城":{b200k:"長野14号-1",west:497215,south:131080,east:497730,north:131420},
"別所温泉":{b200k:"長野14号-2",west:497215,south:130780,east:497730,north:131120},
"麻績":{b200k:"長野14号-3",west:496765,south:131080,east:497280,north:131420},
"信濃西条":{b200k:"長野14号-4",west:496765,south:130780,east:497280,north:131120},
"武石":{b200k:"長野15号-1",west:497215,south:130480,east:497730,north:130820},
"和田":{b200k:"長野15号-2",west:497215,south:130180,east:497730,north:130520},
"三才山":{b200k:"長野15号-3",west:496765,south:130480,east:497280,north:130820},
"山辺":{b200k:"長野15号-4",west:496765,south:130180,east:497280,north:130520},
"霧ヶ峰":{b200k:"長野16号-1",west:497215,south:129880,east:497730,north:130220},
"南大塩":{b200k:"長野16号-2",west:497220,south:129580,east:497730,north:129920},
"鉢伏山":{b200k:"長野16号-3",west:496765,south:129880,east:497280,north:130220},
"諏訪":{b200k:"長野16号-4",west:496770,south:129580,east:497280,north:129920},
"三峰":{b200k:"甲府1号-1",west:499920,south:129280,east:500430,north:129620},
"雲取山":{b200k:"甲府1号-2",west:499920,south:128980,east:500430,north:129320},
"中津峡":{b200k:"甲府1号-3",west:499470,south:129280,east:499980,north:129620},
"雁坂峠":{b200k:"甲府1号-4",west:499470,south:128980,east:499980,north:129320},
"丹波":{b200k:"甲府2号-1",west:499920,south:128680,east:500430,north:129020},
"七保":{b200k:"甲府2号-2",west:499920,south:128380,east:500430,north:128720},
"柳沢峠":{b200k:"甲府2号-3",west:499470,south:128680,east:499980,north:129020},
"大菩薩峠":{b200k:"甲府2号-4",west:499470,south:128380,east:499980,north:128720},
"大月":{b200k:"甲府3号-1",west:499920,south:128080,east:500430,north:128420},
"都留":{b200k:"甲府3号-2",west:499920,south:127780,east:500430,north:128120},
"笹子":{b200k:"甲府3号-3",west:499470,south:128080,east:499980,north:128420},
"河口湖東部":{b200k:"甲府3号-4",west:499470,south:127780,east:499980,north:128120},
"御正体山":{b200k:"甲府4号-1",west:499920,south:127480,east:500430,north:127820},
"駿河小山":{b200k:"甲府4号-2",west:499920,south:127180,east:500430,north:127520},
"富士吉田":{b200k:"甲府4号-3",west:499470,south:127480,east:499980,north:127820},
"須走":{b200k:"甲府4号-4",west:499470,south:127180,east:499980,north:127520},
"居倉":{b200k:"甲府5号-1",west:499020,south:129280,east:499530,north:129620},
"金峰山":{b200k:"甲府5号-2",west:499020,south:128980,east:499530,north:129320},
"御所平":{b200k:"甲府5号-3",west:498570,south:129280,east:499080,north:129620},
"瑞牆山":{b200k:"甲府5号-4",west:498570,south:128980,east:499080,north:129320},
"川浦":{b200k:"甲府6号-1",west:499020,south:128680,east:499530,north:129020},
"塩山":{b200k:"甲府6号-2",west:499020,south:128380,east:499530,north:128720},
"茅ヶ岳":{b200k:"甲府6号-3",west:498570,south:128680,east:499080,north:129020},
"甲府北部":{b200k:"甲府6号-4",west:498570,south:128380,east:499080,north:128720},
"石和":{b200k:"甲府7号-1",west:499020,south:128080,east:499530,north:128420},
"河口湖西部":{b200k:"甲府7号-2",west:499020,south:127780,east:499530,north:128120},
"甲府":{b200k:"甲府7号-3",west:498570,south:128080,east:499080,north:128420},
"市川大門":{b200k:"甲府7号-4",west:498570,south:127780,east:499080,north:128120},
"鳴沢":{b200k:"甲府8号-1",west:499020,south:127480,east:499530,north:127820},
"富士山":{b200k:"甲府8号-2",west:499020,south:127180,east:499530,north:127520},
"精進":{b200k:"甲府8号-3",west:498570,south:127480,east:499080,north:127820},
"人穴":{b200k:"甲府8号-4",west:498570,south:127180,east:499080,north:127520},
"八ヶ岳東部":{b200k:"甲府9号-1",west:498120,south:129280,east:498630,north:129620},
"谷戸":{b200k:"甲府9号-2",west:498120,south:128980,east:498630,north:129320},
"八ヶ岳西部":{b200k:"甲府9号-3",west:497670,south:129280,east:498180,north:129620},
"小淵沢":{b200k:"甲府9号-4",west:497670,south:128980,east:498180,north:129320},
"若神子":{b200k:"甲府10号-1",west:498120,south:128680,east:498630,north:129020},
"韮崎":{b200k:"甲府10号-2",west:498120,south:128380,east:498630,north:128720},
"長坂上条":{b200k:"甲府10号-3",west:497670,south:128680,east:498180,north:129020},
"鳳凰山":{b200k:"甲府10号-4",west:497670,south:128380,east:498180,north:128720},
"小笠原":{b200k:"甲府11号-1",west:498120,south:128080,east:498630,north:128420},
"鰍沢":{b200k:"甲府11号-2",west:498120,south:127780,east:498630,north:128120},
"夜叉神峠":{b200k:"甲府11号-3",west:497670,south:128080,east:498180,north:128420},
"奈良田":{b200k:"甲府11号-4",west:497670,south:127780,east:498180,north:128120},
"切石":{b200k:"甲府12号-1",west:498120,south:127480,east:498630,north:127820},
"身延":{b200k:"甲府12号-2",west:498120,south:127180,east:498630,north:127520},
"新倉":{b200k:"甲府12号-3",west:497670,south:127480,east:498180,north:127820},
"七面山":{b200k:"甲府12号-4",west:497670,south:127180,east:498180,north:127520},
"茅野":{b200k:"甲府13号-1",west:497220,south:129280,east:497730,north:129620},
"信濃富士見":{b200k:"甲府13号-2",west:497220,south:128980,east:497730,north:129320},
"辰野":{b200k:"甲府13号-3",west:496770,south:129280,east:497280,north:129620},
"高遠":{b200k:"甲府13号-4",west:496770,south:128980,east:497280,north:129320},
"甲斐駒ヶ岳":{b200k:"甲府14号-1",west:497220,south:128680,east:497730,north:129020},
"仙丈ヶ岳":{b200k:"甲府14号-2",west:497220,south:128380,east:497730,north:128720},
"信濃溝口":{b200k:"甲府14号-3",west:496770,south:128680,east:497280,north:129020},
"市野瀬":{b200k:"甲府14号-4",west:496770,south:128380,east:497280,north:128720},
"間ノ岳":{b200k:"甲府15号-1",west:497220,south:128080,east:497730,north:128420},
"塩見岳":{b200k:"甲府15号-2",west:497220,south:127780,east:497730,north:128120},
"鹿塩":{b200k:"甲府15号-3",west:496770,south:128080,east:497280,north:128420},
"信濃大河原":{b200k:"甲府15号-4",west:496770,south:127780,east:497280,north:128120},
"赤石岳":{b200k:"甲府16号-1",west:497220,south:127480,east:497730,north:127820},
"上河内岳":{b200k:"甲府16号-2",west:497220,south:127180,east:497730,north:127520},
"大沢岳":{b200k:"甲府16号-3",west:496770,south:127480,east:497280,north:127820},
"光岳":{b200k:"甲府16号-4",west:496770,south:127180,east:497280,north:127520},
"御殿場":{b200k:"静岡1号-1",west:499920,south:126880,east:500425,north:127220},
"裾野":{b200k:"静岡1号-2",west:499920,south:126580,east:500425,north:126920},
"印野":{b200k:"静岡1号-3",west:499470,south:126880,east:499975,north:127220},
"愛鷹山":{b200k:"静岡1号-4",west:499470,south:126580,east:499975,north:126920},
"三島":{b200k:"静岡2号-1",west:499920,south:126280,east:500425,north:126620},
"韮山":{b200k:"静岡2号-2",west:499920,south:125980,east:500425,north:126320},
"沼津":{b200k:"静岡2号-3",west:499470,south:126280,east:499975,north:126620},
"大瀬崎":{b200k:"静岡2号-4",west:499470,south:125980,east:499975,north:126320},
"修善寺":{b200k:"静岡3号-1",west:499920,south:125680,east:500425,north:126020},
"湯ヶ島":{b200k:"静岡3号-2",west:499920,south:125380,east:500425,north:125720},
"達磨山":{b200k:"静岡3号-3",west:499470,south:125680,east:499975,north:126020},
"土肥":{b200k:"静岡3号-4",west:499470,south:125380,east:499975,north:125720},
"湯ヶ野":{b200k:"静岡4号-1",west:499920,south:125080,east:500425,north:125420},
"下田":{b200k:"静岡4号-2",west:499935,south:124780,east:500440,north:125120},
"仁科":{b200k:"静岡4号-3",west:499450,south:125080,east:499955,north:125420},
"伊豆松崎":{b200k:"静岡4号-4",west:499450,south:124780,east:499955,north:125120},
"天母山":{b200k:"静岡5号-1",west:499020,south:126880,east:499525,north:127220},
"入山瀬":{b200k:"静岡5号-2",west:499020,south:126580,east:499525,north:126920},
"上井出":{b200k:"静岡5号-3",west:498570,south:126880,east:499075,north:127220},
"富士宮":{b200k:"静岡5号-4",west:498570,south:126580,east:499075,north:126920},
"吉原":{b200k:"静岡6号-1",west:499020,south:126280,east:499525,north:126620},
"蒲原":{b200k:"静岡6号-3",west:498570,south:126280,east:499075,north:126620},
"興津":{b200k:"静岡6号-4",west:498570,south:125980,east:499075,north:126320},
"南部":{b200k:"静岡9号-1",west:498120,south:126880,east:498625,north:127220},
"篠井山":{b200k:"静岡9号-2",west:498120,south:126580,east:498625,north:126920},
"梅ヶ島":{b200k:"静岡9号-3",west:497670,south:126880,east:498175,north:127220},
"湯の森":{b200k:"静岡9号-4",west:497670,south:126580,east:498175,north:126920},
"和田島":{b200k:"静岡10号-1",west:498120,south:126280,east:498625,north:126620},
"清水":{b200k:"静岡10号-2",west:498120,south:125980,east:498625,north:126320},
"駿河落合":{b200k:"静岡10号-3",west:497670,south:126280,east:498175,north:126620},
"牛妻":{b200k:"静岡10号-4",west:497670,south:125980,east:498175,north:126320},
"静岡東部":{b200k:"静岡11号-1",west:498135,south:125680,east:498640,north:126020},
"静岡西部":{b200k:"静岡11号-3",west:497670,south:125680,east:498175,north:126020},
"焼津":{b200k:"静岡11号-4",west:497670,south:125380,east:498175,north:125720},
"住吉":{b200k:"静岡12号-3",west:497670,south:125080,east:498175,north:125420},
"畑薙湖":{b200k:"静岡13号-1",west:497220,south:126880,east:497725,north:127220},
"井川":{b200k:"静岡13号-2",west:497220,south:126580,east:497725,north:126920},
"池口岳":{b200k:"静岡13号-3",west:496770,south:126880,east:497275,north:127220},
"寸又峡温泉":{b200k:"静岡13号-4",west:496770,south:126580,east:497275,north:126920},
"千頭":{b200k:"静岡14号-1",west:497220,south:126280,east:497725,north:126620},
"石上":{b200k:"静岡14号-2",west:497220,south:125980,east:497725,north:126320},
"蕎麦粒山":{b200k:"静岡14号-3",west:496770,south:126280,east:497275,north:126620},
"高郷":{b200k:"静岡14号-4",west:496770,south:125980,east:497275,north:126320},
"伊久美":{b200k:"静岡15号-1",west:497220,south:125680,east:497725,north:126020},
"向谷":{b200k:"静岡15号-2",west:497220,south:125380,east:497725,north:125720},
"家山":{b200k:"静岡15号-3",west:496770,south:125680,east:497275,north:126020},
"八高山":{b200k:"静岡15号-4",west:496770,south:125380,east:497275,north:125720},
"島田":{b200k:"静岡16号-1",west:497220,south:125080,east:497725,north:125420},
"相良":{b200k:"静岡16号-2",west:497235,south:124780,east:497740,north:125120},
"掛川":{b200k:"静岡16号-3",west:496770,south:125080,east:497275,north:125420},
"下平川":{b200k:"静岡16号-4",west:496770,south:124780,east:497275,north:125120},
"神子元島":{b200k:"御前崎1号-1",west:499920,south:124480,east:500425,north:124820},
"石廊崎":{b200k:"御前崎1号-3",west:499470,south:124480,east:499975,north:124820},
"御前崎":{b200k:"御前崎13号-1",west:497235,south:124480,east:497740,north:124820},
"千浜":{b200k:"御前崎13号-3",west:496770,south:124480,east:497275,north:124820},
"梶屋敷":{b200k:"富山2号-2",west:496315,south:133180,east:496835,north:133520},
"糸魚川":{b200k:"富山2号-4",west:495865,south:133180,east:496385,north:133520},
"越後大野":{b200k:"富山3号-1",west:496315,south:132880,east:496835,north:133220},
"雨飾山":{b200k:"富山3号-2",west:496315,south:132580,east:496835,north:132920},
"小滝":{b200k:"富山3号-3",west:495865,south:132880,east:496385,north:133220},
"越後平岩":{b200k:"富山3号-4",west:495865,south:132580,east:496385,north:132920},
"雨中":{b200k:"富山4号-1",west:496315,south:132280,east:496830,north:132620},
"塩島":{b200k:"富山4号-2",west:496315,south:131980,east:496830,north:132320},
"白馬岳":{b200k:"富山4号-3",west:495865,south:132280,east:496380,north:132620},
"白馬町":{b200k:"富山4号-4",west:495865,south:131980,east:496380,north:132320},
"親不知":{b200k:"富山7号-1",west:495415,south:132900,east:495935,north:133240},
"小川温泉":{b200k:"富山7号-2",west:495415,south:132580,east:495935,north:132920},
"泊":{b200k:"富山7号-3",west:494965,south:132880,east:495485,north:133220},
"舟見":{b200k:"富山7号-4",west:494965,south:132580,east:495485,north:132920},
"黒薙温泉":{b200k:"富山8号-1",west:495415,south:132280,east:495930,north:132620},
"欅平":{b200k:"富山8号-2",west:495415,south:131980,east:495930,north:132320},
"宇奈月":{b200k:"富山8号-3",west:494965,south:132280,east:495480,north:132620},
"毛勝山":{b200k:"富山8号-4",west:494965,south:131980,east:495480,north:132320},
"青木":{b200k:"富山11号-1",west:494515,south:132880,east:495035,north:133220},
"三日市":{b200k:"富山11号-2",west:494515,south:132580,east:495035,north:132920},
"魚津":{b200k:"富山12号-1",west:494515,south:132280,east:495030,north:132620},
"越中大浦":{b200k:"富山12号-2",west:494515,south:131980,east:495030,north:132320},
"滑川":{b200k:"富山12号-3",west:494065,south:132280,east:494580,north:132620},
"上市":{b200k:"富山12号-4",west:494065,south:131980,east:494580,north:132320},
"宇出津":{b200k:"富山13号-1",west:493620,south:134080,east:494140,north:134420},
"鵜川":{b200k:"富山13号-3",west:493165,south:134080,east:493685,north:134420},
"前波":{b200k:"富山13号-4",west:493165,south:133780,east:493685,north:134120},
"小口瀬戸":{b200k:"富山14号-3",west:493165,south:133480,east:493685,north:133820},
"庵":{b200k:"富山14号-4",west:493165,south:133180,east:493685,north:133520},
"虻ガ島":{b200k:"富山15号-3",west:493165,south:132880,east:493685,north:133220},
"宇波":{b200k:"富山15号-4",west:493165,south:132580,east:493685,north:132920},
"富山港":{b200k:"富山16号-1",west:493615,south:132280,east:494130,north:132620},
"富山":{b200k:"富山16号-2",west:493615,south:131980,east:494130,north:132320},
"伏木":{b200k:"富山16号-3",west:493165,south:132280,east:493680,north:132620},
"高岡":{b200k:"富山16号-4",west:493165,south:131980,east:493680,north:132320},
"高府":{b200k:"高山1号-1",west:496315,south:131680,east:496830,north:132020},
"日名":{b200k:"高山1号-2",west:496315,south:131380,east:496830,north:131720},
"神城":{b200k:"高山1号-3",west:495865,south:131680,east:496380,north:132020},
"大町":{b200k:"高山1号-4",west:495865,south:131380,east:496380,north:131720},
"信濃池田":{b200k:"高山2号-1",west:496315,south:131080,east:496830,north:131420},
"明科":{b200k:"高山2号-2",west:496315,south:130780,east:496830,north:131120},
"大町南部":{b200k:"高山2号-3",west:495865,south:131080,east:496380,north:131420},
"有明":{b200k:"高山2号-4",west:495865,south:130780,east:496380,north:131120},
"豊科":{b200k:"高山3号-1",west:496315,south:130480,east:496830,north:130820},
"松本":{b200k:"高山3号-2",west:496315,south:130180,east:496830,north:130520},
"信濃小倉":{b200k:"高山3号-3",west:495865,south:130480,east:496380,north:130820},
"波田":{b200k:"高山3号-4",west:495865,south:130180,east:496380,north:130520},
"塩尻":{b200k:"高山4号-1",west:496315,south:129880,east:496830,north:130220},
"北小野":{b200k:"高山4号-2",west:496320,south:129580,east:496830,north:129920},
"古見":{b200k:"高山4号-3",west:495865,south:129880,east:496380,north:130220},
"贄川":{b200k:"高山4号-4",west:495870,south:129580,east:496380,north:129920},
"十字峡":{b200k:"高山5号-1",west:495415,south:131680,east:495930,north:132020},
"黒部湖":{b200k:"高山5号-2",west:495415,south:131380,east:495930,north:131720},
"剱岳":{b200k:"高山5号-3",west:494965,south:131680,east:495480,north:132020},
"立山":{b200k:"高山5号-4",west:494965,south:131380,east:495480,north:131720},
"烏帽子岳":{b200k:"高山6号-1",west:495415,south:131080,east:495930,north:131420},
"槍ヶ岳":{b200k:"高山6号-2",west:495415,south:130780,east:495930,north:131120},
"薬師岳":{b200k:"高山6号-3",west:494965,south:131080,east:495480,north:131420},
"三俣蓮華岳":{b200k:"高山6号-4",west:494965,south:130780,east:495480,north:131120},
"穂高岳":{b200k:"高山7号-1",west:495415,south:130480,east:495930,north:130820},
"上高地":{b200k:"高山7号-2",west:495415,south:130180,east:495930,north:130520},
"笠ヶ岳":{b200k:"高山7号-3",west:494965,south:130480,east:495480,north:130820},
"焼岳":{b200k:"高山7号-4",west:494965,south:130180,east:495480,north:130520},
"梓湖":{b200k:"高山8号-1",west:495415,south:129880,east:495930,north:130220},
"寄合渡":{b200k:"高山8号-2",west:495420,south:129580,east:495930,north:129920},
"乗鞍岳":{b200k:"高山8号-3",west:494965,south:129880,east:495480,north:130220},
"野麦":{b200k:"高山8号-4",west:494970,south:129580,east:495480,north:129920},
"大岩":{b200k:"高山9号-1",west:494515,south:131680,east:495030,north:132020},
"小見":{b200k:"高山9号-2",west:494515,south:131380,east:495030,north:131720},
"五百石":{b200k:"高山9号-3",west:494065,south:131680,east:494580,north:132020},
"千垣":{b200k:"高山9号-4",west:494065,south:131380,east:494580,north:131720},
"有峰湖":{b200k:"高山10号-1",west:494515,south:131080,east:495030,north:131420},
"下之本":{b200k:"高山10号-2",west:494515,south:130780,east:495030,north:131120},
"東茂住":{b200k:"高山10号-3",west:494065,south:131080,east:494580,north:131420},
"鹿間":{b200k:"高山10号-4",west:494065,south:130780,east:494580,north:131120},
"長倉":{b200k:"高山11号-1",west:494515,south:130480,east:495030,north:130820},
"旗鉾":{b200k:"高山11号-2",west:494515,south:130180,east:495030,north:130520},
"船津":{b200k:"高山11号-3",west:494065,south:130480,east:494580,north:130820},
"町方":{b200k:"高山11号-4",west:494065,south:130180,east:494580,north:130520},
"飛騨青屋":{b200k:"高山12号-1",west:494515,south:129880,east:495030,north:130220},
"朝日貯水池":{b200k:"高山12号-2",west:494520,south:129580,east:495030,north:129920},
"高山":{b200k:"高山12号-3",west:494065,south:129880,east:494580,north:130220},
"久々野":{b200k:"高山12号-4",west:494070,south:129580,east:494580,north:129920},
"速星":{b200k:"高山13号-1",west:493615,south:131680,east:494130,north:132020},
"八尾":{b200k:"高山13号-2",west:493615,south:131380,east:494130,north:131720},
"宮森新":{b200k:"高山13号-3",west:493165,south:131680,east:493680,north:132020},
"山田温泉":{b200k:"高山13号-4",west:493165,south:131380,east:493680,north:131720},
"猪谷":{b200k:"高山14号-1",west:493615,south:131080,east:494130,north:131420},
"打保":{b200k:"高山14号-2",west:493615,south:130780,east:494130,north:131120},
"利賀":{b200k:"高山14号-3",west:493165,south:131080,east:493680,north:131420},
"白木峰":{b200k:"高山14号-4",west:493165,south:130780,east:493680,north:131120},
"林":{b200k:"高山15号-1",west:493615,south:130480,east:494130,north:130820},
"飛騨古川":{b200k:"高山15号-2",west:493615,south:130180,east:494130,north:130520},
"角川":{b200k:"高山15号-3",west:493165,south:130480,east:493680,north:130820},
"猪臥山":{b200k:"高山15号-4",west:493165,south:130180,east:493680,north:130520},
"三日町":{b200k:"高山16号-1",west:493615,south:129880,east:494130,north:130220},
"位山":{b200k:"高山16号-2",west:493620,south:129580,east:494130,north:129920},
"夏厩":{b200k:"高山16号-3",west:493165,south:129880,east:493680,north:130220},
"六厩":{b200k:"高山16号-4",west:493170,south:129580,east:493680,north:129920},
"宮木":{b200k:"飯田1号-1",west:496320,south:129280,east:496830,north:129620},
"伊那":{b200k:"飯田1号-2",west:496320,south:128980,east:496830,north:129320},
"薮原":{b200k:"飯田1号-3",west:495870,south:129280,east:496380,north:129620},
"宮ノ越":{b200k:"飯田1号-4",west:495870,south:128980,east:496380,north:129320},
"伊那宮田":{b200k:"飯田2号-1",west:496320,south:128680,east:496830,north:129020},
"赤穂":{b200k:"飯田2号-2",west:496320,south:128380,east:496830,north:128720},
"木曽駒ヶ岳":{b200k:"飯田2号-3",west:495870,south:128680,east:496380,north:129020},
"空木岳":{b200k:"飯田2号-4",west:495870,south:128380,east:496380,north:128720},
"伊那大島":{b200k:"飯田3号-1",west:496320,south:128080,east:496830,north:128420},
"下市田":{b200k:"飯田3号-2",west:496320,south:127780,east:496830,north:128120},
"安平路山":{b200k:"飯田3号-3",west:495870,south:128080,east:496380,north:128420},
"飯田":{b200k:"飯田3号-4",west:495870,south:127780,east:496380,north:128120},
"上久堅":{b200k:"飯田4号-1",west:496320,south:127480,east:496830,north:127820},
"上町":{b200k:"飯田4号-2",west:496320,south:127180,east:496830,north:127520},
"時又":{b200k:"飯田4号-3",west:495870,south:127480,east:496380,north:127820},
"山田河内":{b200k:"飯田4号-4",west:495870,south:127180,east:496380,north:127520},
"末川":{b200k:"飯田5号-1",west:495420,south:129280,east:495930,north:129620},
"木曽福島":{b200k:"飯田5号-2",west:495420,south:128980,east:495930,north:129320},
"木曽西野":{b200k:"飯田5号-3",west:494970,south:129280,east:495480,north:129620},
"御岳高原":{b200k:"飯田5号-4",west:494970,south:128980,east:495480,north:129320},
"上松":{b200k:"飯田6号-1",west:495420,south:128680,east:495930,north:129020},
"木曽須原":{b200k:"飯田6号-2",west:495420,south:128380,east:495930,north:128720},
"王滝":{b200k:"飯田6号-3",west:494970,south:128680,east:495480,north:129020},
"奥三界岳":{b200k:"飯田6号-4",west:494970,south:128380,east:495480,north:128720},
"南木曽岳":{b200k:"飯田7号-1",west:495420,south:128080,east:495930,north:128420},
"兀岳":{b200k:"飯田7号-2",west:495420,south:127780,east:495930,north:128120},
"三留野":{b200k:"飯田7号-3",west:494970,south:128080,east:495480,north:128420},
"妻籠":{b200k:"飯田7号-4",west:494970,south:127780,east:495480,north:128120},
"伊那駒場":{b200k:"飯田8号-1",west:495420,south:127480,east:495930,north:127820},
"浪合":{b200k:"飯田8号-2",west:495420,south:127180,east:495930,north:127520},
"中津川":{b200k:"飯田8号-3",west:494970,south:127480,east:495480,north:127820},
"美濃焼山":{b200k:"飯田8号-4",west:494970,south:127180,east:495480,north:127520},
"胡桃島":{b200k:"飯田9号-1",west:494520,south:129280,east:495030,north:129620},
"御嶽山":{b200k:"飯田9号-2",west:494520,south:128980,east:495030,north:129320},
"飛騨小坂":{b200k:"飯田9号-3",west:494070,south:129280,east:494580,north:129620},
"湯屋":{b200k:"飯田9号-4",west:494070,south:128980,east:494580,north:129320},
"滝越":{b200k:"飯田10号-1",west:494520,south:128680,east:495030,north:129020},
"加子母":{b200k:"飯田10号-2",west:494520,south:128380,east:495030,north:128720},
"宮地":{b200k:"飯田10号-3",west:494070,south:128680,east:494580,north:129020},
"小和知":{b200k:"飯田10号-4",west:494070,south:128380,east:494580,north:128720},
"付知":{b200k:"飯田11号-1",west:494520,south:128080,east:495030,north:128420},
"美濃福岡":{b200k:"飯田11号-2",west:494520,south:127780,east:495030,north:128120},
"神土":{b200k:"飯田11号-3",west:494070,south:128080,east:494580,north:128420},
"切井":{b200k:"飯田11号-4",west:494070,south:127780,east:494580,north:128120},
"恵那":{b200k:"飯田12号-1",west:494520,south:127480,east:495030,north:127820},
"岩村":{b200k:"飯田12号-2",west:494520,south:127180,east:495030,north:127520},
"武並":{b200k:"飯田12号-3",west:494070,south:127480,east:494580,north:127820},
"瑞浪":{b200k:"飯田12号-4",west:494070,south:127180,east:494580,north:127520},
"山之口":{b200k:"飯田13号-1",west:493620,south:129280,east:494130,north:129620},
"萩原":{b200k:"飯田13号-2",west:493620,south:128980,east:494130,north:129320},
"飛騨大原":{b200k:"飯田13号-3",west:493170,south:129280,east:493680,north:129620},
"二間手":{b200k:"飯田13号-4",west:493170,south:128980,east:493680,north:129320},
"下呂":{b200k:"飯田14号-1",west:493620,south:128680,east:494130,north:129020},
"焼石":{b200k:"飯田14号-2",west:493620,south:128380,east:494130,north:128720},
"郡上市島":{b200k:"飯田14号-3",west:493170,south:128680,east:493680,north:129020},
"沢":{b200k:"飯田14号-4",west:493170,south:128380,east:493680,north:128720},
"金山":{b200k:"飯田15号-1",west:493620,south:128080,east:494130,north:128420},
"河岐":{b200k:"飯田15号-2",west:493620,south:127780,east:494130,north:128120},
"美濃川合":{b200k:"飯田15号-3",west:493170,south:128080,east:493680,north:128420},
"上麻生":{b200k:"飯田15号-4",west:493170,south:127780,east:493680,north:128120},
"御嵩":{b200k:"飯田16号-1",west:493620,south:127480,east:494130,north:127820},
"土岐":{b200k:"飯田16号-2",west:493620,south:127180,east:494130,north:127520},
"美濃加茂":{b200k:"飯田16号-3",west:493170,south:127480,east:493680,north:127820},
"小泉":{b200k:"飯田16号-4",west:493170,south:127180,east:493680,north:127520},
"伊那和田":{b200k:"豊橋1号-1",west:496320,south:126880,east:496825,north:127220},
"水窪湖":{b200k:"豊橋1号-2",west:496320,south:126580,east:496825,north:126920},
"満島":{b200k:"豊橋1号-3",west:495870,south:126880,east:496375,north:127220},
"三河大谷":{b200k:"豊橋1号-4",west:495870,south:126580,east:496375,north:126920},
"門桁":{b200k:"豊橋2号-1",west:496320,south:126280,east:496825,north:126620},
"気田":{b200k:"豊橋2号-2",west:496320,south:125980,east:496825,north:126320},
"佐久間":{b200k:"豊橋2号-3",west:495870,south:126280,east:496375,north:126620},
"中部":{b200k:"豊橋2号-4",west:495870,south:125980,east:496375,north:126320},
"犬居":{b200k:"豊橋3号-1",west:496320,south:125680,east:496825,north:126020},
"森":{b200k:"豊橋3号-2",west:496320,south:125380,east:496825,north:125720},
"秋葉山":{b200k:"豊橋3号-3",west:495870,south:125680,east:496375,north:126020},
"二俣":{b200k:"豊橋3号-4",west:495870,south:125380,east:496375,north:125720},
"山梨":{b200k:"豊橋4号-1",west:496320,south:125080,east:496825,north:125420},
"袋井":{b200k:"豊橋4号-2",west:496320,south:124775,east:496825,north:125115},
"笠井":{b200k:"豊橋4号-3",west:495870,south:125080,east:496375,north:125420},
"磐田":{b200k:"豊橋4号-4",west:495870,south:124780,east:496375,north:125120},
"平谷":{b200k:"豊橋5号-1",west:495420,south:126880,east:495925,north:127220},
"茶臼山":{b200k:"豊橋5号-2",west:495420,south:126580,east:495925,north:126920},
"横道":{b200k:"豊橋5号-3",west:494970,south:126880,east:495475,north:127220},
"根羽":{b200k:"豊橋5号-4",west:494970,south:126580,east:495475,north:126920},
"見出":{b200k:"豊橋6号-1",west:495420,south:126280,east:495925,north:126620},
"三河本郷":{b200k:"豊橋6号-2",west:495420,south:125980,east:495925,north:126320},
"田口":{b200k:"豊橋6号-3",west:494970,south:126280,east:495475,north:126620},
"海老":{b200k:"豊橋6号-4",west:494970,south:125980,east:495475,north:126320},
"熊":{b200k:"豊橋7号-1",west:495420,south:125680,east:495925,north:126020},
"伊平":{b200k:"豊橋7号-2",west:495420,south:125380,east:495925,north:125720},
"三河大野":{b200k:"豊橋7号-3",west:494970,south:125680,east:495475,north:126020},
"三河富岡":{b200k:"豊橋7号-4",west:494970,south:125380,east:495475,north:125720},
"気賀":{b200k:"豊橋8号-1",west:495420,south:125080,east:495925,north:125420},
"浜松":{b200k:"豊橋8号-2",west:495420,south:124760,east:495925,north:125100},
"三ヶ日":{b200k:"豊橋8号-3",west:494970,south:125080,east:495475,north:125420},
"新居町":{b200k:"豊橋8号-4",west:494970,south:124780,east:495475,north:125120},
"明智":{b200k:"豊橋9号-1",west:494520,south:126880,east:495025,north:127220},
"川ヶ渡":{b200k:"豊橋9号-2",west:494520,south:126580,east:495025,north:126920},
"猿爪":{b200k:"豊橋9号-3",west:494070,south:126880,east:494575,north:127220},
"小渡":{b200k:"豊橋9号-4",west:494070,south:126580,east:494575,north:126920},
"寧比曽岳":{b200k:"豊橋10号-1",west:494520,south:126280,east:495025,north:126620},
"三河湖":{b200k:"豊橋10号-2",west:494520,south:125980,east:495025,north:126320},
"足助":{b200k:"豊橋10号-3",west:494070,south:126280,east:494575,north:126620},
"東大沼":{b200k:"豊橋10号-4",west:494070,south:125980,east:494575,north:126320},
"高里":{b200k:"豊橋11号-1",west:494520,south:125680,east:495025,north:126020},
"新城":{b200k:"豊橋11号-2",west:494520,south:125380,east:495025,north:125720},
"三河宮崎":{b200k:"豊橋11号-3",west:494070,south:125680,east:494575,north:126020},
"御油":{b200k:"豊橋11号-4",west:494070,south:125380,east:494575,north:125720},
"豊橋":{b200k:"豊橋12号-1",west:494520,south:125080,east:495025,north:125420},
"二川":{b200k:"豊橋12号-2",west:494520,south:124780,east:495025,north:125120},
"小坂井":{b200k:"豊橋12号-3",west:494070,south:125080,east:494575,north:125420},
"老津":{b200k:"豊橋12号-4",west:494070,south:124780,east:494575,north:125120},
"多治見":{b200k:"豊橋13号-1",west:493620,south:126880,east:494125,north:127220},
"猿投山":{b200k:"豊橋13号-2",west:493620,south:126580,east:494125,north:126920},
"高蔵寺":{b200k:"豊橋13号-3",west:493170,south:126880,east:493675,north:127220},
"瀬戸":{b200k:"豊橋13号-4",west:493170,south:126580,east:493675,north:126920},
"豊田北部":{b200k:"豊橋14号-1",west:493620,south:126280,east:494125,north:126620},
"豊田南部":{b200k:"豊橋14号-2",west:493620,south:125980,east:494125,north:126320},
"平針":{b200k:"豊橋14号-3",west:493170,south:126280,east:493675,north:126620},
"知立":{b200k:"豊橋14号-4",west:493170,south:125980,east:493675,north:126320},
"岡崎":{b200k:"豊橋15号-1",west:493620,south:125680,east:494125,north:126020},
"幸田":{b200k:"豊橋15号-2",west:493620,south:125380,east:494125,north:125720},
"安城":{b200k:"豊橋15号-3",west:493170,south:125680,east:493675,north:126020},
"西尾":{b200k:"豊橋15号-4",west:493170,south:125380,east:493675,north:125720},
"蒲郡":{b200k:"豊橋16号-1",west:493620,south:125080,east:494125,north:125420},
"仁崎":{b200k:"豊橋16号-2",west:493620,south:124780,east:494125,north:125120},
"吉田":{b200k:"豊橋16号-3",west:493170,south:125080,east:493675,north:125420},
"佐久島":{b200k:"豊橋16号-4",west:493110,south:124780,east:493615,north:125120},
"掛塚":{b200k:"伊良湖岬1号-3",west:495870,south:124480,east:496375,north:124820},
"田原":{b200k:"伊良湖岬9号-3",west:494085,south:124480,east:494590,north:124820},
"野田":{b200k:"伊良湖岬13号-1",west:493620,south:124480,east:494125,north:124820},
"伊良湖岬":{b200k:"伊良湖岬13号-3",west:493170,south:124460,east:493675,north:124800},
"珠洲岬":{b200k:"輪島3号-4",west:493965,south:134980,east:494485,north:135320},
"能登飯田":{b200k:"輪島4号-3",west:494065,south:134680,east:494585,north:135020},
"宝立山":{b200k:"輪島8号-1",west:493620,south:134700,east:494140,north:135040},
"松波":{b200k:"輪島8号-2",west:493620,south:134380,east:494140,north:134720},
"曽々木":{b200k:"輪島8号-3",west:493165,south:134680,east:493685,north:135020},
"柳田":{b200k:"輪島8号-4",west:493165,south:134380,east:493685,north:134720},
"舳倉島":{b200k:"輪島10号-1",west:492500,south:136000,east:493025,north:136340},
"輪島":{b200k:"輪島12号-2",west:492715,south:134395,east:493235,north:134735},
"皆月":{b200k:"輪島12号-4",west:492240,south:134380,east:492760,north:134720},
"長沢":{b200k:"七尾1号-1",west:492715,south:134080,east:493235,north:134420},
"穴水":{b200k:"七尾1号-2",west:492715,south:133780,east:493235,north:134120},
"門前":{b200k:"七尾1号-3",west:492265,south:134080,east:492785,north:134420},
"下唐川":{b200k:"七尾1号-4",west:492265,south:133780,east:492785,north:134120},
"和倉":{b200k:"七尾2号-1",west:492715,south:133480,east:493235,north:133820},
"七尾":{b200k:"七尾2号-2",west:492715,south:133180,east:493235,north:133520},
"中島":{b200k:"七尾2号-3",west:492265,south:133480,east:492785,north:133820},
"能登高浜":{b200k:"七尾2号-4",west:492265,south:133180,east:492785,north:133520},
"能登二宮":{b200k:"七尾3号-1",west:492715,south:132880,east:493235,north:133220},
"氷見":{b200k:"七尾3号-2",west:492715,south:132580,east:493235,north:132920},
"柴垣":{b200k:"七尾3号-3",west:492265,south:132880,east:492785,north:133220},
"羽咋":{b200k:"七尾3号-4",west:492265,south:132580,east:492785,north:132920},
"飯久保":{b200k:"七尾4号-1",west:492715,south:132280,east:493230,north:132620},
"戸出":{b200k:"七尾4号-2",west:492715,south:131980,east:493230,north:132320},
"宝達山":{b200k:"七尾4号-3",west:492265,south:132280,east:492780,north:132620},
"石動":{b200k:"七尾4号-4",west:492265,south:131980,east:492780,north:132320},
"能登黒島":{b200k:"七尾5号-1",west:491815,south:134080,east:492335,north:134420},
"剱地":{b200k:"七尾5号-2",west:491815,south:133780,east:492335,north:134120},
"富来":{b200k:"七尾6号-1",west:491815,south:133480,east:492335,north:133820},
"能登福浦":{b200k:"七尾6号-2",west:491815,south:133180,east:492335,north:133520},
"加賀高松":{b200k:"七尾8号-1",west:491815,south:132280,east:492330,north:132620},
"津幡":{b200k:"七尾8号-2",west:491815,south:131980,east:492330,north:132320},
"砺波":{b200k:"金沢1号-1",west:492715,south:131680,east:493230,north:132020},
"城端":{b200k:"金沢1号-2",west:492715,south:131380,east:493230,north:131720},
"倶利伽羅":{b200k:"金沢1号-3",west:492265,south:131680,east:492780,north:132020},
"福光":{b200k:"金沢1号-4",west:492265,south:131380,east:492780,north:131720},
"下梨":{b200k:"金沢2号-1",west:492715,south:131080,east:493230,north:131420},
"上梨":{b200k:"金沢2号-2",west:492715,south:130780,east:493230,north:131120},
"湯涌":{b200k:"金沢2号-3",west:492265,south:131080,east:492780,north:131420},
"西赤尾":{b200k:"金沢2号-4",west:492265,south:130780,east:492780,north:131120},
"鳩谷":{b200k:"金沢3号-1",west:492715,south:130480,east:493230,north:130820},
"平瀬":{b200k:"金沢3号-2",west:492715,south:130180,east:493230,north:130520},
"中宮温泉":{b200k:"金沢3号-3",west:492265,south:130480,east:492780,north:130820},
"新岩間温泉":{b200k:"金沢3号-4",west:492265,south:130180,east:492780,north:130520},
"御母衣":{b200k:"金沢4号-1",west:492715,south:129880,east:493230,north:130220},
"新渕":{b200k:"金沢4号-2",west:492720,south:129580,east:493230,north:129920},
"白山":{b200k:"金沢4号-3",west:492265,south:129880,east:492780,north:130220},
"二ノ峰":{b200k:"金沢4号-4",west:492270,south:129580,east:492780,north:129920},
"粟崎":{b200k:"金沢5号-1",west:491815,south:131680,east:492330,north:132020},
"金沢":{b200k:"金沢5号-2",west:491815,south:131380,east:492330,north:131720},
"金石":{b200k:"金沢5号-3",west:491365,south:131680,east:491880,north:132020},
"松任":{b200k:"金沢5号-4",west:491365,south:131380,east:491880,north:131720},
"鶴来":{b200k:"金沢6号-1",west:491815,south:131080,east:492330,north:131420},
"口直海":{b200k:"金沢6号-2",west:491815,south:130780,east:492330,north:131120},
"粟生":{b200k:"金沢6号-3",west:491365,south:131080,east:491880,north:131420},
"別宮":{b200k:"金沢6号-4",west:491365,south:130780,east:491880,north:131120},
"市原":{b200k:"金沢7号-1",west:491815,south:130480,east:492330,north:130820},
"白峰":{b200k:"金沢7号-2",west:491815,south:130180,east:492330,north:130520},
"尾小屋":{b200k:"金沢7号-3",west:491365,south:130480,east:491880,north:130820},
"加賀丸山":{b200k:"金沢7号-4",west:491365,south:130180,east:491880,north:130520},
"加賀市ノ瀬":{b200k:"金沢8号-1",west:491815,south:129880,east:492330,north:130220},
"願教寺山":{b200k:"金沢8号-2",west:491820,south:129580,east:492330,north:129920},
"北谷":{b200k:"金沢8号-3",west:491365,south:129880,east:491880,north:130220},
"越前勝山":{b200k:"金沢8号-4",west:491370,south:129580,east:491880,north:129920},
"美川":{b200k:"金沢10号-1",west:490915,south:131080,east:491430,north:131420},
"小松":{b200k:"金沢10号-2",west:490915,south:130780,east:491430,north:131120},
"片山津温泉":{b200k:"金沢10号-4",west:490465,south:130780,east:490980,north:131120},
"動橋":{b200k:"金沢11号-1",west:490915,south:130480,east:491430,north:130820},
"山中":{b200k:"金沢11号-2",west:490915,south:130180,east:491430,north:130520},
"大聖寺":{b200k:"金沢11号-3",west:490465,south:130480,east:490980,north:130820},
"越前中川":{b200k:"金沢11号-4",west:490465,south:130180,east:490980,north:130520},
"龍谷":{b200k:"金沢12号-1",west:490915,south:129880,east:491430,north:130220},
"山王":{b200k:"金沢12号-2",west:490920,south:129580,east:491430,north:129920},
"丸岡":{b200k:"金沢12号-3",west:490465,south:129880,east:490980,north:130220},
"永平寺":{b200k:"金沢12号-4",west:490470,south:129580,east:490980,north:129920},
"北潟":{b200k:"金沢15号-1",west:490015,south:130480,east:490530,north:130820},
"三国":{b200k:"金沢15号-2",west:489975,south:130180,east:490490,north:130520},
"越前森田":{b200k:"金沢16号-1",west:490015,south:129880,east:490530,north:130220},
"福井":{b200k:"金沢16号-2",west:490020,south:129580,east:490530,north:129920},
"鮎川":{b200k:"金沢16号-3",west:489565,south:129880,east:490080,north:130220},
"越前蒲生":{b200k:"金沢16号-4",west:489530,south:129580,east:490040,north:129920},
"大鷲":{b200k:"岐阜1号-1",west:492720,south:129280,east:493230,north:129620},
"那留":{b200k:"岐阜1号-2",west:492720,south:128980,east:493230,north:129320},
"石徹白":{b200k:"岐阜1号-3",west:492270,south:129280,east:492780,north:129620},
"白鳥":{b200k:"岐阜1号-4",west:492270,south:128980,east:492780,north:129320},
"徳永":{b200k:"岐阜2号-1",west:492720,south:128680,east:493230,north:129020},
"郡上八幡":{b200k:"岐阜2号-2",west:492720,south:128380,east:493230,north:128720},
"門原":{b200k:"岐阜2号-3",west:492270,south:128680,east:492780,north:129020},
"上ヶ瀬":{b200k:"岐阜2号-4",west:492270,south:128380,east:492780,north:128720},
"苅安":{b200k:"岐阜3号-1",west:492720,south:128080,east:493230,north:128420},
"美濃":{b200k:"岐阜3号-2",west:492720,south:127780,east:493230,north:128120},
"下洞戸":{b200k:"岐阜3号-3",west:492270,south:128080,east:492780,north:128420},
"岩佐":{b200k:"岐阜3号-4",west:492270,south:127780,east:492780,north:128120},
"美濃関":{b200k:"岐阜4号-1",west:492720,south:127480,east:493230,north:127820},
"犬山":{b200k:"岐阜4号-2",west:492720,south:127180,east:493230,north:127520},
"岐阜北部":{b200k:"岐阜4号-3",west:492270,south:127480,east:492780,north:127820},
"岐阜":{b200k:"岐阜4号-4",west:492270,south:127180,east:492780,north:127520},
"下山":{b200k:"岐阜5号-1",west:491820,south:129280,east:492330,north:129620},
"越前朝日":{b200k:"岐阜5号-2",west:491820,south:128980,east:492330,north:129320},
"荒島岳":{b200k:"岐阜5号-3",west:491370,south:129280,east:491880,north:129620},
"中竜鉱山":{b200k:"岐阜5号-4",west:491370,south:128980,east:491880,north:129320},
"平家岳":{b200k:"岐阜6号-1",west:491820,south:128680,east:492330,north:129020},
"下大須":{b200k:"岐阜6号-2",west:491820,south:128380,east:492330,north:128720},
"能郷白山":{b200k:"岐阜6号-3",west:491370,south:128680,east:491880,north:129020},
"能郷":{b200k:"岐阜6号-4",west:491370,south:128380,east:491880,north:128720},
"谷合":{b200k:"岐阜7号-1",west:491820,south:128080,east:492330,north:128420},
"美濃神海":{b200k:"岐阜7号-2",west:491820,south:127780,east:492330,north:128120},
"樽見":{b200k:"岐阜7号-3",west:491370,south:128080,east:491880,north:128420},
"谷汲":{b200k:"岐阜7号-4",west:491370,south:127780,east:491880,north:128120},
"北方":{b200k:"岐阜8号-1",west:491820,south:127480,east:492330,north:127820},
"岐阜西部":{b200k:"岐阜8号-2",west:491820,south:127180,east:492330,north:127520},
"池野":{b200k:"岐阜8号-3",west:491370,south:127480,east:491880,north:127820},
"大垣":{b200k:"岐阜8号-4",west:491370,south:127180,east:491880,north:127520},
"越前大野":{b200k:"岐阜9号-1",west:490920,south:129280,east:491430,north:129620},
"宝慶寺":{b200k:"岐阜9号-2",west:490920,south:128980,east:491430,north:129320},
"河和田":{b200k:"岐阜9号-3",west:490470,south:129280,east:490980,north:129620},
"稲荷":{b200k:"岐阜9号-4",west:490470,south:128980,east:490980,north:129320},
"冠山":{b200k:"岐阜10号-1",west:490920,south:128680,east:491430,north:129020},
"美濃徳山":{b200k:"岐阜10号-2",west:490920,south:128380,east:491430,north:128720},
"古木":{b200k:"岐阜10号-3",west:490470,south:128680,east:490980,north:129020},
"広野":{b200k:"岐阜10号-4",west:490470,south:128380,east:490980,north:128720},
"美濃広瀬":{b200k:"岐阜11号-1",west:490920,south:128080,east:491430,north:128420},
"横山":{b200k:"岐阜11号-2",west:490920,south:127780,east:491430,north:128120},
"美濃川上":{b200k:"岐阜11号-3",west:490470,south:128080,east:490980,north:128420},
"近江川合":{b200k:"岐阜11号-4",west:490470,south:127780,east:490980,north:128120},
"美束":{b200k:"岐阜12号-1",west:490920,south:127480,east:491430,north:127820},
"関ヶ原":{b200k:"岐阜12号-2",west:490920,south:127180,east:491430,north:127520},
"虎御前山":{b200k:"岐阜12号-3",west:490470,south:127480,east:490980,north:127820},
"長浜":{b200k:"岐阜12号-4",west:490470,south:127180,east:490980,north:127520},
"鯖江":{b200k:"岐阜13号-1",west:490020,south:129280,east:490530,north:129620},
"武生":{b200k:"岐阜13号-2",west:490020,south:128980,east:490530,north:129320},
"織田":{b200k:"岐阜13号-3",west:489570,south:129280,east:490080,north:129620},
"糠":{b200k:"岐阜13号-4",west:489560,south:128980,east:490070,north:129320},
"今庄":{b200k:"岐阜14号-1",west:490020,south:128680,east:490530,north:129020},
"板取":{b200k:"岐阜14号-2",west:490020,south:128380,east:490530,north:128720},
"河野":{b200k:"岐阜14号-3",west:489570,south:128680,east:490080,north:129020},
"杉津":{b200k:"岐阜14号-4",west:489570,south:128380,east:490080,north:128720},
"中河内":{b200k:"岐阜15号-1",west:490020,south:128080,east:490530,north:128420},
"木之本":{b200k:"岐阜15号-2",west:490020,south:127780,east:490530,north:128120},
"敦賀":{b200k:"岐阜15号-3",west:489570,south:128080,east:490080,north:128420},
"駄口":{b200k:"岐阜15号-4",west:489570,south:127780,east:490080,north:128120},
"竹生島":{b200k:"岐阜16号-1",west:490020,south:127480,east:490530,north:127820},
"南浜":{b200k:"岐阜16号-2",west:490020,south:127180,east:490530,north:127520},
"海津":{b200k:"岐阜16号-3",west:489570,south:127480,east:490080,north:127820},
"今津":{b200k:"岐阜16号-4",west:489570,south:127180,east:490080,north:127520},
"小牧":{b200k:"名古屋1号-1",west:492720,south:126880,east:493225,north:127220},
"名古屋北部":{b200k:"名古屋1号-2",west:492720,south:126580,east:493225,north:126920},
"一宮":{b200k:"名古屋1号-3",west:492270,south:126880,east:492775,north:127220},
"清洲":{b200k:"名古屋1号-4",west:492270,south:126580,east:492775,north:126920},
"名古屋南部":{b200k:"名古屋2号-1",west:492720,south:126280,east:493225,north:126620},
"鳴海":{b200k:"名古屋2号-2",west:492720,south:125980,east:493225,north:126320},
"蟹江":{b200k:"名古屋2号-3",west:492270,south:126280,east:492775,north:126620},
"飛島":{b200k:"名古屋2号-4",west:492270,south:125980,east:492775,north:126320},
"刈谷":{b200k:"名古屋3号-1",west:492720,south:125680,east:493225,north:126020},
"半田":{b200k:"名古屋3号-2",west:492720,south:125380,east:493225,north:125720},
"大野":{b200k:"名古屋3号-3",west:492270,south:125680,east:492775,north:126020},
"常滑":{b200k:"名古屋3号-4",west:492270,south:125380,east:492775,north:125720},
"河和":{b200k:"名古屋4号-1",west:492720,south:125080,east:493225,north:125420},
"師崎":{b200k:"名古屋4号-2",west:492650,south:124780,east:493155,north:125120},
"野間":{b200k:"名古屋4号-3",west:492270,south:125080,east:492775,north:125420},
"竹鼻":{b200k:"名古屋5号-1",west:491820,south:126880,east:492325,north:127220},
"津島":{b200k:"名古屋5号-2",west:491820,south:126580,east:492325,north:126920},
"養老":{b200k:"名古屋5号-3",west:491370,south:126880,east:491875,north:127220},
"駒野":{b200k:"名古屋5号-4",west:491370,south:126580,east:491875,north:126920},
"弥富":{b200k:"名古屋6号-1",west:491820,south:126280,east:492325,north:126620},
"桑名":{b200k:"名古屋6号-2",west:491820,south:125980,east:492325,north:126320},
"阿下喜":{b200k:"名古屋6号-3",west:491370,south:126280,east:491875,north:126620},
"菰野":{b200k:"名古屋6号-4",west:491370,south:125980,east:491875,north:126320},
"四日市東部":{b200k:"名古屋7号-1",west:491820,south:125680,east:492325,north:126020},
"南五味塚":{b200k:"名古屋7号-2",west:491820,south:125380,east:492325,north:125720},
"四日市西部":{b200k:"名古屋7号-3",west:491370,south:125680,east:491875,north:126020},
"鈴鹿":{b200k:"名古屋7号-4",west:491370,south:125380,east:491875,north:125720},
"白子":{b200k:"名古屋8号-3",west:491370,south:125080,east:491875,north:125420},
"津東部":{b200k:"名古屋8号-4",west:491370,south:124780,east:491875,north:125120},
"霊仙山":{b200k:"名古屋9号-1",west:490920,south:126880,east:491425,north:127220},
"篠立":{b200k:"名古屋9号-2",west:490920,south:126580,east:491425,north:126920},
"彦根東部":{b200k:"名古屋9号-3",west:490470,south:126880,east:490975,north:127220},
"高宮":{b200k:"名古屋9号-4",west:490470,south:126580,east:490975,north:126920},
"竜ヶ岳":{b200k:"名古屋10号-1",west:490920,south:126280,east:491425,north:126620},
"御在所山":{b200k:"名古屋10号-2",west:490920,south:125980,east:491425,north:126320},
"百済寺":{b200k:"名古屋10号-3",west:490470,south:126280,east:490975,north:126620},
"日野東部":{b200k:"名古屋10号-4",west:490470,south:125980,east:490975,north:126320},
"伊船":{b200k:"名古屋11号-1",west:490920,south:125680,east:491425,north:126020},
"亀山":{b200k:"名古屋11号-2",west:490920,south:125380,east:491425,north:125720},
"土山":{b200k:"名古屋11号-3",west:490470,south:125680,east:490975,north:126020},
"鈴鹿峠":{b200k:"名古屋11号-4",west:490470,south:125380,east:490975,north:125720},
"椋本":{b200k:"名古屋12号-1",west:490920,south:125080,east:491425,north:125420},
"津西部":{b200k:"名古屋12号-2",west:490920,south:124780,east:491425,north:125120},
"平松":{b200k:"名古屋12号-3",west:490470,south:125080,east:490975,north:125420},
"佐田":{b200k:"名古屋12号-4",west:490470,south:124780,east:490975,north:125120},
"彦根西部":{b200k:"名古屋13号-1",west:490020,south:126880,east:490525,north:127220},
"能登川":{b200k:"名古屋13号-2",west:490020,south:126580,east:490525,north:126920},
"勝野":{b200k:"名古屋13号-3",west:489570,south:126880,east:490075,north:127220},
"沖島":{b200k:"名古屋13号-4",west:489570,south:126580,east:490075,north:126920},
"八日市":{b200k:"名古屋14号-1",west:490020,south:126280,east:490525,north:126620},
"日野西部":{b200k:"名古屋14号-2",west:490020,south:125980,east:490525,north:126320},
"近江八幡":{b200k:"名古屋14号-3",west:489570,south:126280,east:490075,north:126620},
"野洲":{b200k:"名古屋14号-4",west:489570,south:125980,east:490075,north:126320},
"水口":{b200k:"名古屋15号-1",west:490020,south:125680,east:490525,north:126020},
"甲賀":{b200k:"名古屋15号-2",west:490020,south:125380,east:490525,north:125720},
"三雲":{b200k:"名古屋15号-3",west:489570,south:125680,east:490075,north:126020},
"信楽":{b200k:"名古屋15号-4",west:489570,south:125380,east:490075,north:125720},
"上野":{b200k:"名古屋16号-1",west:490020,south:125080,east:490525,north:125420},
"伊勢路":{b200k:"名古屋16号-2",west:490020,south:124780,east:490525,north:125120},
"島ヶ原":{b200k:"名古屋16号-3",west:489570,south:125080,east:490075,north:125420},
"月ヶ瀬":{b200k:"名古屋16号-4",west:489570,south:124780,east:490075,north:125120},
"答志":{b200k:"伊勢1号-2",west:492720,south:124180,east:493225,north:124520},
"二見":{b200k:"伊勢1号-4",west:492270,south:124180,east:492775,north:124520},
"浦村":{b200k:"伊勢2号-1",west:492725,south:123880,east:493225,north:124220},
"安乗":{b200k:"伊勢2号-2",west:492725,south:123580,east:493225,north:123920},
"鳥羽":{b200k:"伊勢2号-3",west:492275,south:123880,east:492775,north:124220},
"磯部":{b200k:"伊勢2号-4",west:492275,south:123580,east:492775,north:123920},
"波切":{b200k:"伊勢3号-1",west:492725,south:123280,east:493225,north:123620},
"浜島":{b200k:"伊勢3号-3",west:492275,south:123280,east:492775,north:123620},
"片田":{b200k:"伊勢3号-4",west:492275,south:122980,east:492775,north:123320},
"明野":{b200k:"伊勢5号-2",west:491820,south:124180,east:492325,north:124520},
"松阪港":{b200k:"伊勢5号-3",west:491385,south:124480,east:491890,north:124820},
"松阪":{b200k:"伊勢5号-4",west:491370,south:124180,east:491875,north:124520},
"伊勢":{b200k:"伊勢6号-1",west:491825,south:123880,east:492325,north:124220},
"五ヶ所浦":{b200k:"伊勢6号-2",west:491825,south:123580,east:492325,north:123920},
"国束山":{b200k:"伊勢6号-3",west:491375,south:123880,east:491875,north:124220},
"脇出":{b200k:"伊勢6号-4",west:491375,south:123580,east:491875,north:123920},
"相賀浦":{b200k:"伊勢7号-1",west:491825,south:123280,east:492325,north:123620},
//"贄浦":{b200k:"伊勢7号-3",west:491375,south:123280,east:491875,north:123620}, 140630変更
"贄浦":{b200k:"伊勢7号-3",west:491375,south:123250,east:491875,north:123590},
"大仰":{b200k:"伊勢9号-1",west:490920,south:124480,east:491425,north:124820},
"大河内":{b200k:"伊勢9号-2",west:490920,south:124180,east:491425,north:124520},
"二本木":{b200k:"伊勢9号-3",west:490470,south:124480,east:490975,north:124820},
"伊勢奥津":{b200k:"伊勢9号-4",west:490470,south:124180,east:490975,north:124520},
"横野":{b200k:"伊勢10号-1",west:490925,south:123880,east:491425,north:124220},
"伊勢佐原":{b200k:"伊勢10号-2",west:490925,south:123580,east:491425,north:123920},
"宮前":{b200k:"伊勢10号-3",west:490475,south:123880,east:490975,north:124220},
"江馬":{b200k:"伊勢10号-4",west:490475,south:123580,east:490975,north:123920},
"古和浦":{b200k:"伊勢11号-1",west:490925,south:123280,east:491425,north:123620},
//"錦":{b200k:"伊勢11号-2",west:490935,south:122980,east:491435,north:123320}, 140630変更
"錦":{b200k:"伊勢11号-2",west:490950,south:122980,east:491450,north:123320},
"間弓":{b200k:"伊勢11号-3",west:490475,south:123280,east:490975,north:123620},
"長島":{b200k:"伊勢11号-4",west:490475,south:122980,east:490975,north:123320},
"島勝浦":{b200k:"伊勢12号-3",west:490475,south:122680,east:490975,north:123020},
"九鬼":{b200k:"伊勢12号-4",west:490475,south:122380,east:490975,north:122720},
"阿保":{b200k:"伊勢13号-1",west:490020,south:124480,east:490525,north:124820},
"倶留尊山":{b200k:"伊勢13号-2",west:490020,south:124180,east:490525,north:124520},
"名張":{b200k:"伊勢13号-3",west:489570,south:124480,east:490075,north:124820},
"大和大野":{b200k:"伊勢13号-4",west:489570,south:124180,east:490075,north:124520},
"菅野":{b200k:"伊勢14号-1",west:490025,south:123880,east:490525,north:124220},
"七日市":{b200k:"伊勢14号-2",west:490025,south:123580,east:490525,north:123920},
"高見山":{b200k:"伊勢14号-3",west:489575,south:123880,east:490075,north:124220},
"大豆生":{b200k:"伊勢14号-4",west:489575,south:123580,east:490075,north:123920},
"宮川貯水池":{b200k:"伊勢15号-1",west:490025,south:123280,east:490525,north:123620},
"大杉峡谷":{b200k:"伊勢15号-2",west:490025,south:122980,east:490525,north:123320},
"大和柏木":{b200k:"伊勢15号-3",west:489575,south:123280,east:490075,north:123620},
"大台ヶ原山":{b200k:"伊勢15号-4",west:489575,south:122980,east:490075,north:123320},
"引本浦":{b200k:"伊勢16号-1",west:490025,south:122680,east:490525,north:123020},
"尾鷲":{b200k:"伊勢16号-2",west:490025,south:122380,east:490525,north:122720},
"河合":{b200k:"伊勢16号-3",west:489575,south:122680,east:490075,north:123020},
"高代山":{b200k:"伊勢16号-4",west:489575,south:122380,east:490075,north:122720},
"賀田":{b200k:"木本13号-1",west:490035,south:122080,east:490535,north:122420},
"磯崎":{b200k:"木本13号-2",west:490025,south:121780,east:490525,north:122120},
"七色貯水池":{b200k:"木本13号-3",west:489575,south:122080,east:490075,north:122420},
"木本":{b200k:"木本13号-4",west:489575,south:121780,east:490075,north:122120},
"阿田和":{b200k:"木本14号-3",west:489575,south:121480,east:490075,north:121820},
"鵜殿":{b200k:"木本14号-4",west:489575,south:121180,east:490075,north:121520},
"梅浦":{b200k:"宮津1号-1",west:489120,south:129280,east:489630,north:129620},
"竹波":{b200k:"宮津2号-2",west:489120,south:128380,east:489630,north:128720},
"早瀬":{b200k:"宮津3号-1",west:489120,south:128080,east:489630,north:128420},
"三方":{b200k:"宮津3号-2",west:489120,south:127780,east:489630,north:128120},
"常神":{b200k:"宮津3号-3",west:488670,south:128080,east:489180,north:128420},
"西津":{b200k:"宮津3号-4",west:488670,south:127780,east:489180,north:128120},
"熊川":{b200k:"宮津4号-1",west:489120,south:127480,east:489630,north:127820},
"饗庭野":{b200k:"宮津4号-2",west:489120,south:127180,east:489630,north:127520},
"遠敷":{b200k:"宮津4号-3",west:488670,south:127480,east:489180,north:127820},
"古屋":{b200k:"宮津4号-4",west:488670,south:127180,east:489180,north:127520},
"鋸崎":{b200k:"宮津7号-2",west:488220,south:127780,east:488730,north:128120},
"難波江":{b200k:"宮津7号-4",west:487770,south:127780,east:488280,north:128120},
"小浜":{b200k:"宮津8号-1",west:488220,south:127480,east:488730,north:127820},
"久坂":{b200k:"宮津8号-2",west:488220,south:127180,east:488730,north:127520},
"高浜":{b200k:"宮津8号-3",west:487770,south:127480,east:488280,north:127820},
"口坂本":{b200k:"宮津8号-4",west:487770,south:127180,east:488280,north:127520},
"丹後平田":{b200k:"宮津10号-4",west:486870,south:128380,east:487380,north:128720},
"成生岬":{b200k:"宮津11号-1",west:487320,south:128100,east:487830,north:128440},
"青葉山":{b200k:"宮津11号-2",west:487320,south:127780,east:487830,north:128120},
"丹後由良":{b200k:"宮津11号-4",west:486870,south:127780,east:487380,north:128120},
"東舞鶴":{b200k:"宮津12号-1",west:487320,south:127480,east:487830,north:127820},
"丹波大町":{b200k:"宮津12号-2",west:487320,south:127180,east:487830,north:127520},
"西舞鶴":{b200k:"宮津12号-3",west:486870,south:127480,east:487380,north:127820},
"梅迫":{b200k:"宮津12号-4",west:486870,south:127180,east:487380,north:127520},
"丹後中浜":{b200k:"宮津14号-1",west:486420,south:128680,east:486930,north:129020},
"丹後平":{b200k:"宮津14号-2",west:486420,south:128380,east:486930,north:128720},
"網野":{b200k:"宮津14号-4",west:485970,south:128380,east:486480,north:128720},
"日置":{b200k:"宮津15号-1",west:486435,south:128080,east:486945,north:128420},
"宮津":{b200k:"宮津15号-2",west:486420,south:127780,east:486930,north:128120},
"峰山":{b200k:"宮津15号-3",west:485970,south:128080,east:486480,north:128420},
"四辻":{b200k:"宮津15号-4",west:485970,south:127780,east:486480,north:128120},
"内宮":{b200k:"宮津16号-1",west:486420,south:127480,east:486930,north:127820},
"河守":{b200k:"宮津16号-2",west:486420,south:127180,east:486930,north:127520},
"大江山":{b200k:"宮津16号-3",west:485970,south:127480,east:486480,north:127820},
"三岳山":{b200k:"宮津16号-4",west:485970,south:127180,east:486480,north:127520},
"北小松":{b200k:"京都及大阪1号-1",west:489120,south:126880,east:489625,north:127220},
"比良山":{b200k:"京都及大阪1号-2",west:489120,south:126580,east:489625,north:126920},
"久多":{b200k:"京都及大阪1号-3",west:488670,south:126880,east:489175,north:127220},
"花脊":{b200k:"京都及大阪1号-4",west:488670,south:126580,east:489175,north:126920},
"堅田":{b200k:"京都及大阪2号-1",west:489120,south:126280,east:489625,north:126620},
"草津":{b200k:"京都及大阪2号-2",west:489120,south:125980,east:489625,north:126320},
"大原":{b200k:"京都及大阪2号-3",west:488670,south:126280,east:489175,north:126620},
"京都東北部":{b200k:"京都及大阪2号-4",west:488670,south:125980,east:489175,north:126320},
"瀬田":{b200k:"京都及大阪3号-1",west:489120,south:125680,east:489625,north:126020},
"朝宮":{b200k:"京都及大阪3号-2",west:489120,south:125380,east:489625,north:125720},
"京都東南部":{b200k:"京都及大阪3号-3",west:488670,south:125680,east:489175,north:126020},
"宇治":{b200k:"京都及大阪3号-4",west:488670,south:125380,east:489175,north:125720},
"笠置山":{b200k:"京都及大阪4号-1",west:489120,south:125080,east:489625,north:125420},
"柳生":{b200k:"京都及大阪4号-2",west:489120,south:124780,east:489625,north:125120},
"田辺":{b200k:"京都及大阪4号-3",west:488670,south:125080,east:489175,north:125420},
"奈良":{b200k:"京都及大阪4号-4",west:488670,south:124780,east:489175,north:125120},
"中":{b200k:"京都及大阪5号-1",west:488220,south:126880,east:488725,north:127220},
"上弓削":{b200k:"京都及大阪5号-2",west:488220,south:126580,east:488725,north:126920},
"島":{b200k:"京都及大阪5号-3",west:487770,south:126880,east:488275,north:127220},
"四ッ谷":{b200k:"京都及大阪5号-4",west:487770,south:126580,east:488275,north:126920},
"周山":{b200k:"京都及大阪6号-1",west:488220,south:126280,east:488725,north:126620},
"京都西北部":{b200k:"京都及大阪6号-2",west:488220,south:125980,east:488725,north:126320},
"殿田":{b200k:"京都及大阪6号-3",west:487770,south:126280,east:488275,north:126620},
"亀岡":{b200k:"京都及大阪6号-4",west:487770,south:125980,east:488275,north:126320},
"京都西南部":{b200k:"京都及大阪7号-1",west:488220,south:125680,east:488725,north:126020},
"淀":{b200k:"京都及大阪7号-2",west:488220,south:125380,east:488725,north:125720},
"法貴":{b200k:"京都及大阪7号-3",west:487770,south:125680,east:488275,north:126020},
"高槻":{b200k:"京都及大阪7号-4",west:487770,south:125380,east:488275,north:125720},
"枚方":{b200k:"京都及大阪8号-1",west:488220,south:125080,east:488725,north:125420},
"生駒山":{b200k:"京都及大阪8号-2",west:488220,south:124780,east:488725,north:125120},
"吹田":{b200k:"京都及大阪8号-3",west:487770,south:125080,east:488275,north:125420},
"大阪東北部":{b200k:"京都及大阪8号-4",west:487770,south:124780,east:488275,north:125120},
"和知":{b200k:"京都及大阪9号-1",west:487320,south:126880,east:487825,north:127220},
"胡麻":{b200k:"京都及大阪9号-2",west:487320,south:126580,east:487825,north:126920},
"綾部":{b200k:"京都及大阪9号-3",west:486870,south:126880,east:487375,north:127220},
"菟原":{b200k:"京都及大阪9号-4",west:486870,south:126580,east:487375,north:126920},
"園部":{b200k:"京都及大阪10号-1",west:487320,south:126280,east:487825,north:126620},
"埴生":{b200k:"京都及大阪10号-2",west:487320,south:125980,east:487825,north:126320},
"細工所":{b200k:"京都及大阪10号-3",west:486870,south:126280,east:487375,north:126620},
"福住":{b200k:"京都及大阪10号-4",west:486870,south:125980,east:487375,north:126320},
"妙見山":{b200k:"京都及大阪11号-1",west:487320,south:125680,east:487825,north:126020},
"広根":{b200k:"京都及大阪11号-2",west:487320,south:125380,east:487825,north:125720},
"木津":{b200k:"京都及大阪11号-3",west:486870,south:125680,east:487375,north:126020},
"武田尾":{b200k:"京都及大阪11号-4",west:486870,south:125380,east:487375,north:125720},
"伊丹":{b200k:"京都及大阪12号-1",west:487320,south:125080,east:487825,north:125420},
"大阪西北部":{b200k:"京都及大阪12号-2",west:487320,south:124780,east:487825,north:125120},
"宝塚":{b200k:"京都及大阪12号-3",west:486870,south:125080,east:487375,north:125420},
"西宮":{b200k:"京都及大阪12号-4",west:486870,south:124780,east:487375,north:125120},
"福知山東部":{b200k:"京都及大阪13号-1",west:486420,south:126880,east:486925,north:127220},
"市島":{b200k:"京都及大阪13号-2",west:486420,south:126580,east:486925,north:126920},
"福知山西部":{b200k:"京都及大阪13号-3",west:485970,south:126880,east:486475,north:127220},
"黒井":{b200k:"京都及大阪13号-4",west:485970,south:126580,east:486475,north:126920},
"宮田":{b200k:"京都及大阪14号-1",west:486420,south:126280,east:486925,north:126620},
"篠山":{b200k:"京都及大阪14号-2",west:486420,south:125980,east:486925,north:126320},
"柏原":{b200k:"京都及大阪14号-3",west:485970,south:126280,east:486475,north:126620},
"谷川":{b200k:"京都及大阪14号-4",west:485970,south:125980,east:486475,north:126320},
"藍本":{b200k:"京都及大阪15号-1",west:486420,south:125680,east:486925,north:126020},
"三田":{b200k:"京都及大阪15号-2",west:486420,south:125380,east:486925,north:125720},
"比延":{b200k:"京都及大阪15号-3",west:485970,south:125680,east:486475,north:126020},
"天神":{b200k:"京都及大阪15号-4",west:485970,south:125380,east:486475,north:125720},
"有馬":{b200k:"京都及大阪16号-1",west:486420,south:125080,east:486925,north:125420},
"神戸首部":{b200k:"京都及大阪16号-2",west:486420,south:124780,east:486925,north:125120},
"淡河":{b200k:"京都及大阪16号-3",west:485970,south:125080,east:486475,north:125420},
"前開":{b200k:"京都及大阪16号-4",west:485970,south:124780,east:486475,north:125120},
"大和白石":{b200k:"和歌山1号-1",west:489120,south:124480,east:489625,north:124820},
"初瀬":{b200k:"和歌山1号-2",west:489120,south:124180,east:489625,north:124520},
"大和郡山":{b200k:"和歌山1号-3",west:488670,south:124480,east:489175,north:124820},
"桜井":{b200k:"和歌山1号-4",west:488670,south:124180,east:489175,north:124520},
"古市場":{b200k:"和歌山2号-1",west:489125,south:123880,east:489625,north:124220},
"新子":{b200k:"和歌山2号-2",west:489125,south:123580,east:489625,north:123920},
"畝傍山":{b200k:"和歌山2号-3",west:488675,south:123880,east:489175,north:124220},
"吉野山":{b200k:"和歌山2号-4",west:488675,south:123580,east:489175,north:123920},
"洞川":{b200k:"和歌山3号-1",west:489125,south:123280,east:489625,north:123620},
"弥山":{b200k:"和歌山3号-2",west:489125,south:122980,east:489625,north:123320},
"中戸":{b200k:"和歌山3号-3",west:488675,south:123280,east:489175,north:123620},
"南日裏":{b200k:"和歌山3号-4",west:488675,south:122980,east:489175,north:123320},
"釈迦ヶ岳":{b200k:"和歌山4号-1",west:489125,south:122680,east:489625,north:123020},
"池原":{b200k:"和歌山4号-2",west:489125,south:122380,east:489625,north:122720},
"辻堂":{b200k:"和歌山4号-3",west:488675,south:122680,east:489175,north:123020},
"風屋":{b200k:"和歌山4号-4",west:488675,south:122380,east:489175,north:122720},
"信貴山":{b200k:"和歌山5号-1",west:488220,south:124480,east:488725,north:124820},
"大和高田":{b200k:"和歌山5号-2",west:488220,south:124180,east:488725,north:124520},
"大阪東南部":{b200k:"和歌山5号-3",west:487770,south:124480,east:488275,north:124820},
"古市":{b200k:"和歌山5号-4",west:487770,south:124180,east:488275,north:124520},
"御所":{b200k:"和歌山6号-1",west:488225,south:123880,east:488725,north:124220},
"五條":{b200k:"和歌山6号-2",west:488225,south:123580,east:488725,north:123920},
"富田林":{b200k:"和歌山6号-3",west:487775,south:123880,east:488275,north:124220},
"岩湧山":{b200k:"和歌山6号-4",west:487775,south:123580,east:488275,north:123920},
"富貴":{b200k:"和歌山7号-1",west:488225,south:123280,east:488725,north:123620},
"猿谷貯水池":{b200k:"和歌山7号-2",west:488225,south:122980,east:488725,north:123320},
"橋本":{b200k:"和歌山7号-3",west:487775,south:123280,east:488275,north:123620},
"高野山":{b200k:"和歌山7号-4",west:487775,south:122980,east:488275,north:123320},
"上垣内":{b200k:"和歌山8号-1",west:488225,south:122680,east:488725,north:123020},
"伯母子岳":{b200k:"和歌山8号-2",west:488225,south:122380,east:488725,north:122720},
"梁瀬":{b200k:"和歌山8号-3",west:487775,south:122680,east:488275,north:123020},
"護摩壇山":{b200k:"和歌山8号-4",west:487775,south:122380,east:488275,north:122720},
"大阪西南部":{b200k:"和歌山9号-1",west:487320,south:124480,east:487825,north:124820},
"堺":{b200k:"和歌山9号-2",west:487315,south:124180,east:487820,north:124520},
"阪神港":{b200k:"和歌山9号-3",west:486870,south:124480,east:487375,north:124820}, //140630追加
"岸和田東部":{b200k:"和歌山10号-1",west:487325,south:123880,east:487825,north:124220},
"内畑":{b200k:"和歌山10号-2",west:487325,south:123580,east:487825,north:123920},
"岸和田西部":{b200k:"和歌山10号-3",west:486875,south:123880,east:487375,north:124220},
"樽井":{b200k:"和歌山10号-4",west:486875,south:123580,east:487375,north:123920},
"粉河":{b200k:"和歌山11号-1",west:487325,south:123280,east:487825,north:123620},
"龍門山":{b200k:"和歌山11号-2",west:487325,south:122980,east:487825,north:123320},
"岩出":{b200k:"和歌山11号-3",west:486875,south:123280,east:487375,north:123620},
"丸栖":{b200k:"和歌山11号-4",west:486875,south:122980,east:487375,north:123320},
"田":{b200k:"和歌山12号-1",west:487325,south:122680,east:487825,north:123020},
"紀伊清水":{b200k:"和歌山12号-2",west:487325,south:122380,east:487825,north:122720},
"動木":{b200k:"和歌山12号-3",west:486875,south:122680,east:487375,north:123020},
"金屋":{b200k:"和歌山12号-4",west:486875,south:122380,east:487375,north:122720},
"神戸南部":{b200k:"和歌山13号-1",west:486420,south:124480,east:486925,north:124820},
"須磨":{b200k:"和歌山13号-3",west:485970,south:124480,east:486475,north:124820},
"田之代":{b200k:"和歌山13号-4",west:485970,south:124180,east:486475,north:124520},
"尾崎":{b200k:"和歌山14号-2",west:486425,south:123580,east:486925,north:123920},
"淡輪":{b200k:"和歌山15号-1",west:486425,south:123280,east:486925,north:123620},
"和歌山":{b200k:"和歌山15号-2",west:486425,south:122980,east:486925,north:123320},
"加太":{b200k:"和歌山15号-3",west:485975,south:123230,east:486475,north:123570},
"海南":{b200k:"和歌山16号-1",west:486425,south:122680,east:486925,north:123020},
"湯浅":{b200k:"和歌山16号-2",west:486425,south:122380,east:486925,north:122720},
"初島町":{b200k:"和歌山16号-3",west:485975,south:122680,east:486475,north:123020},
"箕島":{b200k:"和歌山16号-4",west:485975,south:122380,east:486475,north:122720},
"大沼":{b200k:"田辺1号-1",west:489125,south:122080,east:489625,north:122420},
"瀞八丁":{b200k:"田辺1号-2",west:489125,south:121780,east:489625,north:122120},
"十津川温泉":{b200k:"田辺1号-3",west:488675,south:122080,east:489175,north:122420},
"伏拝":{b200k:"田辺1号-4",west:488675,south:121780,east:489175,north:122120},
"大里":{b200k:"田辺2号-1",west:489125,south:121480,east:489625,north:121820},
"新宮":{b200k:"田辺2号-2",west:489125,south:121180,east:489625,north:121520},
"本宮":{b200k:"田辺2号-3",west:488675,south:121480,east:489175,north:121820},
"紀伊大野":{b200k:"田辺2号-4",west:488675,south:121180,east:489175,north:121520},
"紀伊勝浦":{b200k:"田辺3号-1",west:489125,south:120880,east:489620,north:121220},
"下里":{b200k:"田辺3号-2",west:489125,south:120580,east:489620,north:120920},
"滝の拝":{b200k:"田辺3号-3",west:488675,south:120880,east:489170,north:121220},
"古座":{b200k:"田辺3号-4",west:488675,south:120580,east:489170,north:120920},
"串本":{b200k:"田辺4号-3",west:488675,south:120280,east:489170,north:120620},
"重里":{b200k:"田辺5号-1",west:488225,south:122080,east:488725,north:122420},
"発心門":{b200k:"田辺5号-2",west:488225,south:121780,east:488725,north:122120},
"龍神":{b200k:"田辺5号-3",west:487775,south:122080,east:488275,north:122420},
"恩行司":{b200k:"田辺5号-4",west:487775,south:121780,east:488275,north:122120},
"皆地":{b200k:"田辺6号-1",west:488225,south:121480,east:488725,north:121820},
"木守":{b200k:"田辺6号-2",west:488225,south:121180,east:488725,north:121520},
"栗栖川":{b200k:"田辺6号-3",west:487775,south:121480,east:488275,north:121820},
"合川":{b200k:"田辺6号-4",west:487775,south:121180,east:488275,north:121520},
"下露":{b200k:"田辺7号-1",west:488225,south:120880,east:488720,north:121220},
"三尾川":{b200k:"田辺7号-2",west:488225,south:120580,east:488720,north:120920},
"市鹿野":{b200k:"田辺7号-3",west:487775,south:120880,east:488270,north:121220},
"江住":{b200k:"田辺7号-4",west:487775,south:120580,east:488270,north:120920},
"田並":{b200k:"田辺8号-1",west:488225,south:120280,east:488720,north:120620},
"寒川":{b200k:"田辺9号-1",west:487325,south:122080,east:487825,north:122420},
"西":{b200k:"田辺9号-2",west:487325,south:121780,east:487825,north:122120},
"川原河":{b200k:"田辺9号-3",west:486875,south:122080,east:487375,north:122420},
"古井":{b200k:"田辺9号-4",west:486875,south:121780,east:487375,north:122120},
"秋津川":{b200k:"田辺10号-1",west:487325,south:121480,east:487825,north:121820},
"紀伊田辺":{b200k:"田辺10号-2",west:487325,south:121180,east:487825,north:121520},
"紀伊南部":{b200k:"田辺10号-3",west:486875,south:121480,east:487375,north:121820},
"紀伊白浜":{b200k:"田辺10号-4",west:486875,south:121180,east:487375,north:121520},
"富田":{b200k:"田辺11号-1",west:487310,south:120880,east:487805,north:121220},
"紀伊日置":{b200k:"田辺11号-2",west:487325,south:120580,east:487820,north:120920},
"高家":{b200k:"田辺13号-1",west:486425,south:122080,east:486925,north:122420},
"御坊":{b200k:"田辺13号-2",west:486425,south:121780,east:486925,north:122120},
"紀伊由良":{b200k:"田辺13号-3",west:485975,south:122080,east:486475,north:122420},
"三尾":{b200k:"田辺13号-4",west:485975,south:121780,east:486475,north:122120},
"印南":{b200k:"田辺14号-1",west:486425,south:121480,east:486925,north:121820},
"塩江":{b200k:"鳥取2号-2",west:485520,south:128380,east:486030,north:128720},
"久美浜":{b200k:"鳥取3号-1",west:485520,south:128080,east:486030,north:128420},
"須田":{b200k:"鳥取3号-2",west:485520,south:127780,east:486030,north:128120},
"城崎":{b200k:"鳥取3号-3",west:485070,south:128100,east:485580,north:128440},
"豊岡":{b200k:"鳥取3号-4",west:485070,south:127780,east:485580,north:128120},
"出石":{b200k:"鳥取4号-1",west:485520,south:127480,east:486030,north:127820},
"直見":{b200k:"鳥取4号-2",west:485520,south:127180,east:486030,north:127520},
"江原":{b200k:"鳥取4号-3",west:485070,south:127480,east:485580,north:127820},
"八鹿":{b200k:"鳥取4号-4",west:485070,south:127180,east:485580,north:127520},
"香住":{b200k:"鳥取7号-1",west:484620,south:128080,east:485130,north:128420},
"神鍋山":{b200k:"鳥取7号-2",west:484620,south:127780,east:485130,north:128120},
"余部":{b200k:"鳥取7号-3",west:484170,south:128080,east:484680,north:128420},
"味取":{b200k:"鳥取7号-4",west:484170,south:127780,east:484680,north:128120},
"栃本":{b200k:"鳥取8号-1",west:484620,south:127480,east:485130,north:127820},
"関宮":{b200k:"鳥取8号-2",west:484620,south:127180,east:485130,north:127520},
"村岡":{b200k:"鳥取8号-3",west:484170,south:127480,east:484680,north:127820},
"氷ノ山":{b200k:"鳥取8号-4",west:484170,south:127180,east:484680,north:127520},
"浜坂":{b200k:"鳥取11号-1",west:483720,south:128080,east:484230,north:128420},
"湯":{b200k:"鳥取11号-2",west:483720,south:127780,east:484230,north:128120},
"田後":{b200k:"鳥取11号-3",west:483270,south:128080,east:483780,north:128420},
"浦富":{b200k:"鳥取11号-4",west:483270,south:127780,east:483780,north:128120},
"扇ノ山":{b200k:"鳥取12号-1",west:483720,south:127480,east:484230,north:127820},
"若桜":{b200k:"鳥取12号-2",west:483720,south:127180,east:484230,north:127520},
"稲葉山":{b200k:"鳥取12号-3",west:483270,south:127480,east:483780,north:127820},
"因幡郡家":{b200k:"鳥取12号-4",west:483270,south:127180,east:483780,north:127520},
"鳥取北部":{b200k:"鳥取15号-2",west:482820,south:127780,east:483330,north:128120},
"浜村":{b200k:"鳥取15号-4",west:482370,south:127780,east:482880,north:128120},
"鳥取南部":{b200k:"鳥取16号-1",west:482820,south:127480,east:483330,north:127820},
"用瀬":{b200k:"鳥取16号-2",west:482820,south:127180,east:483330,north:127520},
"鹿野":{b200k:"鳥取16号-3",west:482370,south:127480,east:482880,north:127820},
"岩坪":{b200k:"鳥取16号-4",west:482370,south:127180,east:482880,north:127520},
"矢名瀬":{b200k:"姫路1号-1",west:485520,south:126880,east:486025,north:127220},
"大名草":{b200k:"姫路1号-2",west:485520,south:126580,east:486025,north:126920},
"但馬竹田":{b200k:"姫路1号-3",west:485070,south:126880,east:485575,north:127220},
"但馬新井":{b200k:"姫路1号-4",west:485070,south:126580,east:485575,north:126920},
"丹波和田":{b200k:"姫路2号-1",west:485520,south:126280,east:486025,north:126620},
"中村町":{b200k:"姫路2号-2",west:485520,south:125980,east:486025,north:126320},
"生野":{b200k:"姫路2号-3",west:485070,south:126280,east:485575,north:126620},
"粟賀町":{b200k:"姫路2号-4",west:485070,south:125980,east:485575,north:126320},
"西脇":{b200k:"姫路3号-1",west:485520,south:125680,east:486025,north:126020},
"社":{b200k:"姫路3号-2",west:485520,south:125380,east:486025,north:125720},
"北条":{b200k:"姫路3号-3",west:485070,south:125680,east:485575,north:126020},
"笠原":{b200k:"姫路3号-4",west:485070,south:125380,east:485575,north:125720},
"三木":{b200k:"姫路4号-1",west:485520,south:125080,east:486025,north:125420},
"東二見":{b200k:"姫路4号-2",west:485520,south:124780,east:486025,north:125120},
"加古川":{b200k:"姫路4号-3",west:485070,south:125080,east:485575,north:125420},
"高砂":{b200k:"姫路4号-4",west:485070,south:124780,east:485575,north:125120},
"大屋市場":{b200k:"姫路5号-1",west:484620,south:126880,east:485125,north:127220},
"神子畑":{b200k:"姫路5号-2",west:484620,south:126580,east:485125,north:126920},
"戸倉峠":{b200k:"姫路5号-3",west:484170,south:126880,east:484675,north:127220},
"音水湖":{b200k:"姫路5号-4",west:484170,south:126580,east:484675,north:126920},
"長谷":{b200k:"姫路6号-1",west:484620,south:126280,east:485125,north:126620},
"寺前":{b200k:"姫路6号-2",west:484620,south:125980,east:485125,north:126320},
"安積":{b200k:"姫路6号-3",west:484170,south:126280,east:484675,north:126620},
"山崎":{b200k:"姫路6号-4",west:484170,south:125980,east:484675,north:126320},
"前之庄":{b200k:"姫路7号-1",west:484620,south:125680,east:485125,north:126020},
"姫路北部":{b200k:"姫路7号-2",west:484620,south:125380,east:485125,north:125720},
"安志":{b200k:"姫路7号-3",west:484170,south:125680,east:484675,north:126020},
"龍野":{b200k:"姫路7号-4",west:484170,south:125380,east:484675,north:125720},
"姫路南部":{b200k:"姫路8号-1",west:484620,south:125080,east:485125,north:125420},
"網干":{b200k:"姫路8号-3",west:484170,south:125080,east:484675,north:125420},
"真浦":{b200k:"姫路8号-4",west:484170,south:124630,east:484675,north:124970},
"岩屋堂":{b200k:"姫路9号-1",west:483720,south:126880,east:484225,north:127220},
"西河内":{b200k:"姫路9号-2",west:483720,south:126580,east:484225,north:126920},
"郷原":{b200k:"姫路9号-3",west:483270,south:126880,east:483775,north:127220},
"坂根":{b200k:"姫路9号-4",west:483270,south:126580,east:483775,north:126920},
"千草":{b200k:"姫路10号-1",west:483720,south:126280,east:484225,north:126620},
"土万":{b200k:"姫路10号-2",west:483720,south:125980,east:484225,north:126320},
"古町":{b200k:"姫路10号-3",west:483270,south:126280,east:483775,north:126620},
"佐用":{b200k:"姫路10号-4",west:483270,south:125980,east:483775,north:126320},
"三日月":{b200k:"姫路11号-1",west:483720,south:125680,east:484225,north:126020},
"二木":{b200k:"姫路11号-2",west:483720,south:125380,east:484225,north:125720},
"上月":{b200k:"姫路11号-3",west:483270,south:125680,east:483775,north:126020},
"上郡":{b200k:"姫路11号-4",west:483270,south:125380,east:483775,north:125720},
"相生":{b200k:"姫路12号-1",west:483720,south:125080,east:484225,north:125420},
"播州赤穂":{b200k:"姫路12号-2",west:483720,south:124780,east:484225,north:125120},
"備前三石":{b200k:"姫路12号-3",west:483270,south:125080,east:483775,north:125420},
"日生":{b200k:"姫路12号-4",west:483270,south:124780,east:483775,north:125120},
"智頭":{b200k:"姫路13号-1",west:482820,south:126880,east:483325,north:127220},
"大背":{b200k:"姫路13号-2",west:482820,south:126580,east:483325,north:126920},
"加瀬木":{b200k:"姫路13号-3",west:482370,south:126880,east:482875,north:127220},
"美作加茂":{b200k:"姫路13号-4",west:482370,south:126580,east:482875,north:126920},
"日本原":{b200k:"姫路14号-1",west:482820,south:126280,east:483325,north:126620},
"真加部":{b200k:"姫路14号-2",west:482820,south:125980,east:483325,north:126320},
"楢":{b200k:"姫路14号-3",west:482370,south:126280,east:482875,north:126620},
"津山東部":{b200k:"姫路14号-4",west:482370,south:125980,east:482875,north:126320},
"林野":{b200k:"姫路15号-1",west:482820,south:125680,east:483325,north:126020},
"日笠":{b200k:"姫路15号-2",west:482820,south:125380,east:483325,north:125720},
"柵原":{b200k:"姫路15号-3",west:482370,south:125680,east:482875,north:126020},
"周匝":{b200k:"姫路15号-4",west:482370,south:125380,east:482875,north:125720},
"和気":{b200k:"姫路16号-1",west:482820,south:125080,east:483325,north:125420},
"片上":{b200k:"姫路16号-2",west:482820,south:124780,east:483325,north:125120},
"万富":{b200k:"姫路16号-3",west:482370,south:125080,east:482875,north:125420},
"備前瀬戸":{b200k:"姫路16号-4",west:482370,south:124780,east:482875,north:125120},
"明石":{b200k:"徳島1号-1",west:485520,south:124480,east:486025,north:124820},
"仮屋":{b200k:"徳島1号-2",west:485500,south:124180,east:486005,north:124520},
"志筑":{b200k:"徳島2号-1",west:485525,south:123880,east:486025,north:124220},
"洲本":{b200k:"徳島2号-2",west:485400,south:123580,east:485900,north:123920},
"郡家":{b200k:"徳島2号-3",west:485075,south:123880,east:485575,north:124220},
"都志":{b200k:"徳島2号-4",west:484990,south:123580,east:485490,north:123920},
"由良":{b200k:"徳島3号-1",west:485525,south:123280,east:486025,north:123620},
"広田":{b200k:"徳島3号-3",west:485075,south:123280,east:485575,north:123620},
"諭鶴羽山":{b200k:"徳島3号-4",west:485090,south:122980,east:485590,north:123320},
"福良":{b200k:"徳島7号-1",west:484625,south:123280,east:485125,north:123620},
"鳴門海峡":{b200k:"徳島7号-2",west:484625,south:122980,east:485125,north:123320},
"撫養":{b200k:"徳島7号-4",west:484175,south:122980,east:484675,north:123320},
"板東":{b200k:"徳島8号-3",west:484185,south:122680,east:484685,north:123020},
"徳島":{b200k:"徳島8号-4",west:484185,south:122380,east:484685,north:122720},
"西島":{b200k:"徳島9号-1",west:483720,south:124480,east:484225,north:124820},
"寒霞溪":{b200k:"徳島9号-4",west:483290,south:124180,east:483795,north:124520},
"草壁":{b200k:"徳島10号-3",west:483275,south:123880,east:483775,north:124220},
"引田":{b200k:"徳島11号-2",west:483725,south:123005,east:484225,north:123345},
"讃岐津田":{b200k:"徳島11号-3",west:483290,south:123280,east:483790,north:123620},
"三本松":{b200k:"徳島11号-4",west:483275,south:122980,east:483775,north:123320},
"大寺":{b200k:"徳島12号-1",west:483725,south:122680,east:484225,north:123020},
"石井":{b200k:"徳島12号-2",west:483725,south:122380,east:484225,north:122720},
"市場":{b200k:"徳島12号-3",west:483275,south:122680,east:483775,north:123020},
"川島":{b200k:"徳島12号-4",west:483275,south:122380,east:483775,north:122720},
"牛窓":{b200k:"徳島13号-1",west:482820,south:124480,east:483325,north:124820},
"小江":{b200k:"徳島13号-2",west:482820,south:124180,east:483325,north:124520},
"西大寺":{b200k:"徳島13号-3",west:482370,south:124480,east:482875,north:124820},
"犬島":{b200k:"徳島13号-4",west:482370,south:124180,east:482875,north:124520},
"土庄":{b200k:"徳島14号-1",west:482825,south:123880,east:483325,north:124220},
"五剣山":{b200k:"徳島14号-2",west:482835,south:123580,east:483335,north:123920},
"豊島":{b200k:"徳島14号-3",west:482375,south:123880,east:482875,north:124220},
"高松北部":{b200k:"徳島14号-4",west:482375,south:123580,east:482875,north:123920},
"志度":{b200k:"徳島15号-1",west:482825,south:123280,east:483325,north:123620},
"鹿庭":{b200k:"徳島15号-2",west:482825,south:122980,east:483325,north:123320},
"高松南部":{b200k:"徳島15号-3",west:482375,south:123280,east:482875,north:123620},
"川東":{b200k:"徳島15号-4",west:482375,south:122980,east:482875,north:123320},
"西赤谷":{b200k:"徳島16号-1",west:482825,south:122680,east:483325,north:123020},
"脇町":{b200k:"徳島16号-2",west:482825,south:122380,east:483325,north:122720},
"讃岐塩江":{b200k:"徳島16号-3",west:482375,south:122680,east:482875,north:123020},
"貞光":{b200k:"徳島16号-4",west:482375,south:122380,east:482875,north:122720},
"阿波富岡":{b200k:"剣山5号-1",west:484625,south:122105,east:485125,north:122445},
"橘":{b200k:"剣山5号-2",west:484625,south:121780,east:485125,north:122120},
"立江":{b200k:"剣山5号-3",west:484175,south:122080,east:484675,north:122420},
"馬場":{b200k:"剣山5号-4",west:484175,south:121780,east:484675,north:122120},
"阿部":{b200k:"剣山6号-1",west:484625,south:121480,east:485125,north:121820},
"阿波由岐":{b200k:"剣山6号-3",west:484175,south:121480,east:484675,north:121820},
"日和佐":{b200k:"剣山6号-4",west:484175,south:121180,east:484675,north:121520},
"阿波三溪":{b200k:"剣山9号-1",west:483725,south:122080,east:484225,north:122420},
"阿井":{b200k:"剣山9号-2",west:483725,south:121780,east:484225,north:122120},
"阿波寄井":{b200k:"剣山9号-3",west:483275,south:122080,east:483775,north:122420},
"雲早山":{b200k:"剣山9号-4",west:483275,south:121780,east:483775,north:122120},
"桜谷":{b200k:"剣山10号-1",west:483725,south:121480,east:484225,north:121820},
"山河内":{b200k:"剣山10号-2",west:483725,south:121180,east:484225,north:121520},
"長安口貯水池":{b200k:"剣山10号-3",west:483275,south:121480,east:483775,north:121820},
"小川口":{b200k:"剣山10号-4",west:483275,south:121180,east:483775,north:121520},
"牟岐":{b200k:"剣山11号-1",west:483735,south:120880,east:484230,north:121220},
"奥浦":{b200k:"剣山11号-3",west:483275,south:120880,east:483770,north:121220},
"甲浦":{b200k:"剣山11号-4",west:483275,south:120580,east:483770,north:120920},
"伏越ノ鼻":{b200k:"剣山12号-3",west:483275,south:120280,east:483770,north:120620},
"阿波川井":{b200k:"剣山13号-1",west:482825,south:122080,east:483325,north:122420},
"谷口":{b200k:"剣山13号-2",west:482825,south:121780,east:483325,north:122120},
"阿波古見":{b200k:"剣山13号-3",west:482375,south:122080,east:482875,north:122420},
"剣山":{b200k:"剣山13号-4",west:482375,south:121780,east:482875,north:122120},
"阿波出原":{b200k:"剣山14号-1",west:482825,south:121480,east:483325,north:121820},
"湯桶丸":{b200k:"剣山14号-2",west:482825,south:121180,east:483325,north:121520},
"北川":{b200k:"剣山14号-3",west:482375,south:121480,east:482875,north:121820},
"赤城尾山":{b200k:"剣山14号-4",west:482375,south:121180,east:482875,north:121520},
"久尾":{b200k:"剣山15号-1",west:482825,south:120880,east:483320,north:121220},
"名留川":{b200k:"剣山15号-2",west:482825,south:120580,east:483320,north:120920},
"土佐魚梁瀬":{b200k:"剣山15号-3",west:482375,south:120880,east:482870,north:121220},
"馬路":{b200k:"剣山15号-4",west:482375,south:120580,east:482870,north:120920},
"入木":{b200k:"剣山16号-1",west:482825,south:120280,east:483320,north:120620},
"佐喜浜":{b200k:"剣山16号-2",west:482825,south:119980,east:483320,north:120320},
"奈半利":{b200k:"剣山16号-3",west:482375,south:120280,east:482870,north:120620},
"羽根":{b200k:"剣山16号-4",west:482375,south:119980,east:482870,north:120320},
"室戸岬":{b200k:"剣山南13号-1",west:482675,south:119680,east:483170,north:120020},
"西村":{b200k:"西郷10号-4",west:479545,south:130720,east:480060,north:131060},
"布施":{b200k:"西郷11号-3",west:479845,south:130420,east:480360,north:130760},
"西郷":{b200k:"西郷11号-4",west:479845,south:130120,east:480360,north:130460},
"隠岐北方":{b200k:"西郷15号-1",west:479395,south:130420,east:479910,north:130760},
"都万":{b200k:"西郷15号-2",west:479395,south:130120,east:479910,north:130460},
"菱浦":{b200k:"西郷16号-3",west:478955,south:129825,east:479470,north:130165},
"崎":{b200k:"西郷16号-4",west:478950,south:129520,east:479460,north:129860},
"浦郷":{b200k:"西郷西4号-1",west:478495,south:129820,east:479010,north:130160},
"知夫":{b200k:"西郷西4号-2",west:478500,south:129520,east:479010,north:129860},
"青谷":{b200k:"松江3号-2",west:481920,south:127780,east:482430,north:128120},
"松崎":{b200k:"松江4号-1",west:481920,south:127480,east:482430,north:127820},
"三朝":{b200k:"松江4号-2",west:481920,south:127180,east:482430,north:127520},
"倉吉":{b200k:"松江4号-3",west:481470,south:127490,east:481980,north:127830},
"関金宿":{b200k:"松江4号-4",west:481470,south:127180,east:481980,north:127520},
"赤碕":{b200k:"松江7号-2",west:480960,south:127780,east:481470,north:128120},
"御来屋":{b200k:"松江7号-4",west:480510,south:127780,east:481020,north:128120},
"伯耆浦安":{b200k:"松江8号-1",west:481020,south:127480,east:481530,north:127820},
"泰久寺":{b200k:"松江8号-2",west:481020,south:127180,east:481530,north:127520},
"船上山":{b200k:"松江8号-3",west:480570,south:127480,east:481080,north:127820},
"伯耆大山":{b200k:"松江8号-4",west:480570,south:127180,east:481080,north:127520},
"美保関":{b200k:"松江11号-4",west:479670,south:127790,east:480180,north:128130},
"淀江":{b200k:"松江12号-1",west:480120,south:127480,east:480630,north:127820},
"伯耆溝口":{b200k:"松江12号-2",west:480120,south:127180,east:480630,north:127520},
"米子":{b200k:"松江12号-3",west:479670,south:127480,east:480180,north:127820},
"母里":{b200k:"松江12号-4",west:479670,south:127180,east:480180,north:127520},
"境港":{b200k:"松江15号-2",west:479220,south:127780,east:479730,north:128120},
"瀬崎":{b200k:"松江15号-3",west:478770,south:128080,east:479280,north:128420},
"加賀":{b200k:"松江15号-4",west:478770,south:127780,east:479280,north:128120},
"揖屋":{b200k:"松江16号-1",west:479220,south:127480,east:479730,north:127820},
"広瀬":{b200k:"松江16号-2",west:479220,south:127180,east:479730,north:127520},
"松江":{b200k:"松江16号-3",west:478770,south:127480,east:479280,north:127820},
"玉造":{b200k:"松江16号-4",west:478770,south:127180,east:479280,north:127520},
"上斎原":{b200k:"高梁1号-1",west:481920,south:126880,east:482425,north:127220},
"奥津":{b200k:"高梁1号-2",west:481920,south:126580,east:482425,north:126920},
"下鍛冶屋":{b200k:"高梁1号-3",west:481470,south:126880,east:481975,north:127220},
"富西谷":{b200k:"高梁1号-4",west:481470,south:126580,east:481975,north:126920},
"香々美":{b200k:"高梁2号-1",west:481920,south:126280,east:482425,north:126620},
"津山西部":{b200k:"高梁2号-2",west:481920,south:125980,east:482425,north:126320},
"美作宮原":{b200k:"高梁2号-3",west:481470,south:126280,east:481975,north:126620},
"久世":{b200k:"高梁2号-4",west:481470,south:125980,east:481975,north:126320},
"下弓削":{b200k:"高梁3号-1",west:481920,south:125680,east:482425,north:126020},
"福渡":{b200k:"高梁3号-2",west:481920,south:125380,east:482425,north:125720},
"西川":{b200k:"高梁3号-3",west:481470,south:125680,east:481975,north:126020},
"下加茂":{b200k:"高梁3号-4",west:481470,south:125380,east:481975,north:125720},
"金川":{b200k:"高梁4号-1",west:481920,south:125080,east:482425,north:125420},
"岡山北部":{b200k:"高梁4号-2",west:481920,south:124780,east:482425,north:125120},
"東山内":{b200k:"高梁4号-3",west:481470,south:125080,east:481975,north:125420},
"総社東部":{b200k:"高梁4号-4",west:481470,south:124780,east:481975,north:125120},
"蒜山":{b200k:"高梁5号-1",west:481020,south:126880,east:481525,north:127220},
"湯原湖":{b200k:"高梁5号-2",west:481020,south:126580,east:481525,north:126920},
"延助":{b200k:"高梁5号-3",west:480570,south:126880,east:481075,north:127220},
"美作新庄":{b200k:"高梁5号-4",west:480570,south:126580,east:481075,north:126920},
"横部":{b200k:"高梁6号-1",west:481020,south:126280,east:481525,north:126620},
"勝山":{b200k:"高梁6号-2",west:481020,south:125980,east:481525,north:126320},
"上刑部":{b200k:"高梁6号-3",west:480570,south:126280,east:481075,north:126620},
"刑部":{b200k:"高梁6号-4",west:480570,south:125980,east:481075,north:126320},
"呰部":{b200k:"高梁7号-1",west:481020,south:125680,east:481525,north:126020},
"有漢市場":{b200k:"高梁7号-2",west:481020,south:125380,east:481525,north:125720},
"井倉":{b200k:"高梁7号-3",west:480570,south:125680,east:481075,north:126020},
"川面市場":{b200k:"高梁7号-4",west:480570,south:125380,east:481075,north:125720},
"豪溪":{b200k:"高梁8号-1",west:481020,south:125080,east:481525,north:125420},
"総社西部":{b200k:"高梁8号-2",west:481020,south:124780,east:481525,north:125120},
"高梁":{b200k:"高梁8号-3",west:480570,south:125080,east:481075,north:125420},
"三山":{b200k:"高梁8号-4",west:480570,south:124780,east:481075,north:125120},
"江尾":{b200k:"高梁9号-1",west:480120,south:126880,east:480625,north:127220},
"根雨":{b200k:"高梁9号-2",west:480120,south:126580,east:480625,north:126920},
"井尻":{b200k:"高梁9号-3",west:479670,south:126880,east:480175,north:127220},
"印賀":{b200k:"高梁9号-4",west:479670,south:126580,east:480175,north:126920},
"千屋実":{b200k:"高梁10号-1",west:480120,south:126280,east:480625,north:126620},
"足立":{b200k:"高梁10号-2",west:480120,south:125980,east:480625,north:126320},
"上石見":{b200k:"高梁10号-3",west:479670,south:126280,east:480175,north:126620},
"油野":{b200k:"高梁10号-4",west:479670,south:125980,east:480175,north:126320},
"新見":{b200k:"高梁11号-1",west:480120,south:125680,east:480625,north:126020},
"吹屋":{b200k:"高梁11号-2",west:480120,south:125380,east:480625,north:125720},
"備中矢田":{b200k:"高梁11号-3",west:479670,south:125680,east:480175,north:126020},
"東城":{b200k:"高梁11号-4",west:479670,south:125380,east:480175,north:125720},
"備中市場":{b200k:"高梁12号-1",west:480120,south:125080,east:480625,north:125420},
"地頭":{b200k:"高梁12号-2",west:480120,south:124780,east:480625,north:125120},
"油木":{b200k:"高梁12号-3",west:479670,south:125080,east:480175,north:125420},
"小畠":{b200k:"高梁12号-4",west:479670,south:124780,east:480175,north:125120},
"出雲布部":{b200k:"高梁13号-1",west:479220,south:126880,east:479725,north:127220},
"阿毘縁":{b200k:"高梁13号-2",west:479220,south:126580,east:479725,north:126920},
"上山佐":{b200k:"高梁13号-3",west:478770,south:126880,east:479275,north:127220},
"横田":{b200k:"高梁13号-4",west:478770,south:126580,east:479275,north:126920},
"多里":{b200k:"高梁14号-1",west:479220,south:126280,east:479725,north:126620},
"道後山":{b200k:"高梁14号-2",west:479220,south:125980,east:479725,north:126320},
"下横田":{b200k:"高梁14号-3",west:478770,south:126280,east:479275,north:126620},
"比婆山":{b200k:"高梁14号-4",west:478770,south:125980,east:479275,north:126320},
"小奴可":{b200k:"高梁15号-1",west:479220,south:125680,east:479725,north:126020},
"帝釈峡":{b200k:"高梁15号-2",west:479220,south:125380,east:479725,north:125720},
"西城":{b200k:"高梁15号-3",west:478770,south:125680,east:479275,north:126020},
"庄原":{b200k:"高梁15号-4",west:478770,south:125380,east:479275,north:125720},
"福永":{b200k:"高梁16号-1",west:479220,south:125080,east:479725,north:125420},
"高蓋":{b200k:"高梁16号-2",west:479220,south:124780,east:479725,north:125120},
"稲草":{b200k:"高梁16号-3",west:478770,south:125080,east:479275,north:125420},
"上下":{b200k:"高梁16号-4",west:478770,south:124780,east:479275,north:125120},
"岡山南部":{b200k:"岡山及丸亀1号-1",west:481920,south:124480,east:482425,north:124820},
"八浜":{b200k:"岡山及丸亀1号-2",west:481920,south:124180,east:482425,north:124520},
"倉敷":{b200k:"岡山及丸亀1号-3",west:481470,south:124480,east:481975,north:124820},
"茶屋町":{b200k:"岡山及丸亀1号-4",west:481470,south:124180,east:481975,north:124520},
"宇野":{b200k:"岡山及丸亀2号-1",west:481925,south:123880,east:482425,north:124220},
"五色台":{b200k:"岡山及丸亀2号-2",west:481925,south:123580,east:482425,north:123920},
"下津井":{b200k:"岡山及丸亀2号-3",west:481475,south:123880,east:481975,north:124220},
"本島":{b200k:"岡山及丸亀2号-4",west:481475,south:123580,east:481975,north:123920},
"白峰山":{b200k:"岡山及丸亀3号-1",west:481925,south:123280,east:482425,north:123620},
"滝宮":{b200k:"岡山及丸亀3号-2",west:481925,south:122980,east:482425,north:123320},
"丸亀":{b200k:"岡山及丸亀3号-3",west:481475,south:123280,east:481975,north:123620},
"善通寺":{b200k:"岡山及丸亀3号-4",west:481475,south:122980,east:481975,north:123320},
"内田":{b200k:"岡山及丸亀4号-1",west:481925,south:122680,east:482425,north:123020},
"辻":{b200k:"岡山及丸亀4号-2",west:481925,south:122380,east:482425,north:122720},
"福良見":{b200k:"岡山及丸亀4号-3",west:481475,south:122680,east:481975,north:123020},
"阿波池田":{b200k:"岡山及丸亀4号-4",west:481475,south:122380,east:481975,north:122720},
"箭田":{b200k:"岡山及丸亀5号-1",west:481020,south:124480,east:481525,north:124820},
"玉島":{b200k:"岡山及丸亀5号-2",west:481020,south:124180,east:481525,north:124520},
"矢掛":{b200k:"岡山及丸亀5号-3",west:480570,south:124480,east:481075,north:124820},
"笠岡":{b200k:"岡山及丸亀5号-4",west:480570,south:124180,east:481075,north:124520},
"水島港":{b200k:"岡山及丸亀6号-1",west:481025,south:123880,east:481525,north:124220},
"讃岐広島":{b200k:"岡山及丸亀6号-2",west:481025,south:123580,east:481525,north:123920},
"寄島":{b200k:"岡山及丸亀6号-3",west:480575,south:123880,east:481075,north:124220},
"白石島":{b200k:"岡山及丸亀6号-4",west:480575,south:123580,east:481075,north:123920},
"讃岐粟島":{b200k:"岡山及丸亀7号-1",west:481025,south:123280,east:481525,north:123620},
"仁尾":{b200k:"岡山及丸亀7号-2",west:481025,south:122980,east:481525,north:123320},
"六島":{b200k:"岡山及丸亀7号-3",west:480575,south:123280,east:481075,north:123620},
"紫雲出山":{b200k:"岡山及丸亀7号-4",west:480575,south:122980,east:481075,north:123320},
"観音寺":{b200k:"岡山及丸亀8号-1",west:481025,south:122680,east:481525,north:123020},
"讃岐豊浜":{b200k:"岡山及丸亀8号-2",west:481025,south:122380,east:481525,north:122720},
"伊吹島":{b200k:"岡山及丸亀12号-1",west:480335,south:122680,east:480835,north:123020},
"川之江":{b200k:"岡山及丸亀8号-4",west:480575,south:122380,east:481075,north:122720},
"井原":{b200k:"岡山及丸亀9号-1",west:480120,south:124480,east:480625,north:124820},
"神辺":{b200k:"岡山及丸亀9号-2",west:480120,south:124180,east:480625,north:124520},
"金丸":{b200k:"岡山及丸亀9号-3",west:479670,south:124480,east:480175,north:124820},
"新市":{b200k:"岡山及丸亀9号-4",west:479670,south:124180,east:480175,north:124520},
"福山東部":{b200k:"岡山及丸亀10号-1",west:480125,south:123880,east:480625,north:124220},
"鞆":{b200k:"岡山及丸亀10号-2",west:480125,south:123580,east:480625,north:123920},
"福山西部":{b200k:"岡山及丸亀10号-3",west:479675,south:123880,east:480175,north:124220},
"常石":{b200k:"岡山及丸亀10号-4",west:479675,south:123580,east:480175,north:123920},
"百貫島":{b200k:"岡山及丸亀11号-3",west:479675,south:123280,east:480175,north:123620},
"魚島":{b200k:"岡山及丸亀11号-4",west:479675,south:122920,east:480175,north:123260},
"木野山":{b200k:"岡山及丸亀13号-1",west:479220,south:124480,east:479725,north:124820},
"府中":{b200k:"岡山及丸亀13号-2",west:479220,south:124180,east:479725,north:124520},
"本郷":{b200k:"岡山及丸亀13号-3",west:478770,south:124480,east:479275,north:124820},
"甲山":{b200k:"岡山及丸亀13号-4",west:478770,south:124180,east:479275,north:124520},
"三成":{b200k:"岡山及丸亀14号-1",west:479225,south:123880,east:479725,north:124220},
"尾道":{b200k:"岡山及丸亀14号-2",west:479225,south:123580,east:479725,north:123920},
"垣内":{b200k:"岡山及丸亀14号-3",west:478775,south:123880,east:479275,north:124220},
"三原":{b200k:"岡山及丸亀14号-4",west:478775,south:123580,east:479275,north:123920},
"備後土生":{b200k:"岡山及丸亀15号-1",west:479225,south:123280,east:479725,north:123620},
"岩城":{b200k:"岡山及丸亀15号-2",west:479225,south:122980,east:479725,north:123320},
"瀬戸田":{b200k:"岡山及丸亀15号-3",west:478775,south:123280,east:479275,north:123620},
"木浦":{b200k:"岡山及丸亀15号-4",west:478775,south:122980,east:479275,north:123320},
"幸新田":{b200k:"岡山及丸亀16号-3",west:478775,south:122680,east:479275,north:123020},
"今治東部":{b200k:"岡山及丸亀16号-4",west:478775,south:122380,east:479275,north:122720},
"阿波中津":{b200k:"高知1号-1",west:481925,south:122080,east:482425,north:122420},
"京上":{b200k:"高知1号-2",west:481925,south:121780,east:482425,north:122120},
"阿波川口":{b200k:"高知1号-3",west:481475,south:122080,east:481975,north:122420},
"大歩危":{b200k:"高知1号-4",west:481475,south:121780,east:481975,north:122120},
"久保沼井":{b200k:"高知2号-1",west:481925,south:121480,east:482425,north:121820},
"大栃":{b200k:"高知2号-2",west:481925,south:121180,east:482425,north:121520},
"東土居":{b200k:"高知2号-3",west:481475,south:121480,east:481975,north:121820},
"奈呂":{b200k:"高知2号-4",west:481475,south:121180,east:481975,north:121520},
"畑山":{b200k:"高知3号-1",west:481925,south:120880,east:482420,north:121220},
"土佐土居":{b200k:"高知3号-2",west:481925,south:120580,east:482420,north:120920},
"美良布":{b200k:"高知3号-3",west:481475,south:120880,east:481970,north:121220},
"手結":{b200k:"高知3号-4",west:481475,south:120580,east:481970,north:120920},
"安芸":{b200k:"高知4号-1",west:481925,south:120280,east:482420,north:120620},
"伊予新宮":{b200k:"高知5号-1",west:481025,south:122080,east:481525,north:122420},
"野鹿池山":{b200k:"高知5号-2",west:481025,south:121780,east:481525,north:122120},
"伊予三島":{b200k:"高知5号-3",west:480575,south:122080,east:481075,north:122420},
"佐々連尾山":{b200k:"高知5号-4",west:480575,south:121780,east:481075,north:122120},
"杉":{b200k:"高知6号-1",west:481025,south:121480,east:481525,north:121820},
"繁藤":{b200k:"高知6号-2",west:481025,south:121180,east:481525,north:121520},
"本山":{b200k:"高知6号-3",west:480575,south:121480,east:481075,north:121820},
"田井":{b200k:"高知6号-4",west:480575,south:121180,east:481075,north:121520},
"土佐山田":{b200k:"高知7号-1",west:481025,south:120880,east:481520,north:121220},
"後免":{b200k:"高知7号-2",west:481025,south:120580,east:481520,north:120920},
"土佐山":{b200k:"高知7号-3",west:480575,south:120880,east:481070,north:121220},
"高知":{b200k:"高知7号-4",west:480575,south:120580,east:481070,north:120920},
"土佐長浜":{b200k:"高知8号-3",west:480575,south:120280,east:481070,north:120620},
"東予土居":{b200k:"高知9号-1",west:480125,south:122080,east:480625,north:122420},
"弟地":{b200k:"高知9号-2",west:480125,south:121780,east:480625,north:122120},
"新居浜":{b200k:"高知9号-3",west:479675,south:122090,east:480175,north:122430},
"別子銅山":{b200k:"高知9号-4",west:479675,south:121780,east:480175,north:122120},
"土佐小松":{b200k:"高知10号-1",west:480125,south:121480,east:480625,north:121820},
"西石原":{b200k:"高知10号-2",west:480125,south:121180,east:480625,north:121520},
"日ノ浦":{b200k:"高知10号-3",west:479675,south:121480,east:480175,north:121820},
"日比原":{b200k:"高知10号-4",west:479675,south:121180,east:480175,north:121520},
"川口":{b200k:"高知11号-1",west:480125,south:120880,east:480620,north:121220},
"いの":{b200k:"高知11号-2",west:480125,south:120580,east:480620,north:120920},
"思地":{b200k:"高知11号-3",west:479675,south:120880,east:480170,north:121220},
"越知":{b200k:"高知11号-4",west:479675,south:120580,east:480170,north:120920},
"土佐高岡":{b200k:"高知12号-1",west:480125,south:120280,east:480620,north:120620},
"甲崎":{b200k:"高知12号-2",west:480125,south:119980,east:480620,north:120320},
"佐川":{b200k:"高知12号-3",west:479675,south:120280,east:480170,north:120620},
"須崎":{b200k:"高知12号-4",west:479675,south:119980,east:480170,north:120320},
"西条北部":{b200k:"高知13号-1",west:479225,south:122080,east:479725,north:122420},
"西条":{b200k:"高知13号-2",west:479225,south:121780,east:479725,north:122120},
"壬生川":{b200k:"高知13号-3",west:478775,south:122080,east:479275,north:122420},
"伊予小松":{b200k:"高知13号-4",west:478775,south:121780,east:479275,north:122120},
"瓶ヶ森":{b200k:"高知14号-1",west:479225,south:121480,east:479725,north:121820},
"筒上山":{b200k:"高知14号-2",west:479225,south:121180,east:479725,north:121520},
"石鎚山":{b200k:"高知14号-3",west:478775,south:121480,east:479275,north:121820},
"面河溪":{b200k:"高知14号-4",west:478775,south:121180,east:479275,north:121520},
"上土居":{b200k:"高知15号-1",west:479225,south:120880,east:479720,north:121220},
"大崎":{b200k:"高知15号-2",west:479225,south:120580,east:479720,north:120920},
"東川":{b200k:"高知15号-3",west:478775,south:120880,east:479270,north:121220},
"柳井川":{b200k:"高知15号-4",west:478775,south:120580,east:479270,north:120920},
"長者":{b200k:"高知16号-1",west:479225,south:120280,east:479720,north:120620},
"萩中":{b200k:"高知16号-2",west:479225,south:119980,east:479720,north:120320},
"王在家":{b200k:"高知16号-3",west:478775,south:120280,east:479270,north:120620},
"新田":{b200k:"高知16号-4",west:478775,south:119980,east:479270,north:120320},
"一子碆":{b200k:"窪川9号-3",west:479675,south:119680,east:480170,north:120020},
"大名鹿":{b200k:"窪川15号-4",west:478775,south:118180,east:479270,north:118520},
"久礼":{b200k:"窪川13号-1",west:479225,south:119680,east:479720,north:120020},
"窪川":{b200k:"窪川13号-2",west:479240,south:119380,east:479735,north:119720},
"米の川":{b200k:"窪川13号-3",west:478775,south:119680,east:479270,north:120020},
"土佐川口":{b200k:"窪川13号-4",west:478775,south:119380,east:479270,north:119720},
"興津浦":{b200k:"窪川14号-1",west:479225,south:119080,east:479720,north:119420},
"伊与喜":{b200k:"窪川14号-3",west:478775,south:119080,east:479270,north:119420},
"土佐佐賀":{b200k:"窪川14号-4",west:478775,south:118780,east:479270,north:119120},
"恵曇":{b200k:"大社3号-2",west:478320,south:127780,east:478830,north:128120},
"秋鹿":{b200k:"大社4号-1",west:478320,south:127480,east:478830,north:127820},
"宍道":{b200k:"大社4号-2",west:478320,south:127180,east:478830,north:127520},
"平田":{b200k:"大社4号-3",west:477870,south:127505,east:478380,north:127845},
"出雲今市":{b200k:"大社4号-4",west:477870,south:127180,east:478380,north:127520},
"日御碕":{b200k:"大社8号-1",west:477390,south:127480,east:477900,north:127820},
"大社":{b200k:"大社8号-2",west:477420,south:127180,east:477930,north:127520},
"木次":{b200k:"浜田1号-1",west:478320,south:126880,east:478825,north:127220},
"湯村":{b200k:"浜田1号-2",west:478320,south:126580,east:478825,north:126920},
"稗原":{b200k:"浜田1号-3",west:477870,south:126880,east:478375,north:127220},
"掛合":{b200k:"浜田1号-4",west:477870,south:126580,east:478375,north:126920},
"阿井町":{b200k:"浜田2号-1",west:478320,south:126280,east:478825,north:126620},
"比婆新市":{b200k:"浜田2号-2",west:478320,south:125980,east:478825,north:126320},
"出雲吉田":{b200k:"浜田2号-3",west:477870,south:126280,east:478375,north:126620},
"頓原":{b200k:"浜田2号-4",west:477870,south:125980,east:478375,north:126320},
"比和":{b200k:"浜田3号-1",west:478320,south:125680,east:478825,north:126020},
"永田":{b200k:"浜田3号-2",west:478320,south:125380,east:478825,north:125720},
"櫃田":{b200k:"浜田3号-3",west:477870,south:125680,east:478375,north:126020},
"上布野":{b200k:"浜田3号-4",west:477870,south:125380,east:478375,north:125720},
"三良坂":{b200k:"浜田4号-1",west:478320,south:125080,east:478825,north:125420},
"吉舎":{b200k:"浜田4号-2",west:478320,south:124780,east:478825,north:125120},
"三次":{b200k:"浜田4号-3",west:477870,south:125080,east:478375,north:125420},
"甲立":{b200k:"浜田4号-4",west:477870,south:124780,east:478375,north:125120},
"神西湖":{b200k:"浜田5号-1",west:477420,south:126880,east:477925,north:127220},
"反辺":{b200k:"浜田5号-2",west:477420,south:126580,east:477925,north:126920},
"田儀":{b200k:"浜田5号-3",west:476970,south:126880,east:477475,north:127220},
"石見大田":{b200k:"浜田5号-4",west:476970,south:126580,east:477475,north:126920},
"三瓶山東部":{b200k:"浜田6号-1",west:477420,south:126280,east:477925,north:126620},
"野萱":{b200k:"浜田6号-2",west:477420,south:125980,east:477925,north:126320},
"三瓶山西部":{b200k:"浜田6号-3",west:476970,south:126280,east:477475,north:126620},
"石見小原":{b200k:"浜田6号-4",west:476970,south:125980,east:477475,north:126320},
"赤名":{b200k:"浜田7号-1",west:477420,south:125680,east:477925,north:126020},
"口羽町":{b200k:"浜田7号-2",west:477420,south:125380,east:477925,north:125720},
"木路原":{b200k:"浜田7号-3",west:476970,south:125680,east:477475,north:126020},
"出羽":{b200k:"浜田7号-4",west:476970,south:125380,east:477475,north:125720},
"前川":{b200k:"浜田8号-1",west:477420,south:125080,east:477925,north:125420},
"安芸横田":{b200k:"浜田8号-2",west:477420,south:124780,east:477925,north:125120},
"生田":{b200k:"浜田8号-3",west:476970,south:125080,east:477475,north:125420},
"八重":{b200k:"浜田8号-4",west:476970,south:124780,east:477475,north:125120},
"大浦":{b200k:"浜田9号-2",west:476520,south:126580,east:477025,north:126920},
"仁万":{b200k:"浜田10号-1",west:476520,south:126280,east:477025,north:126620},
"大家":{b200k:"浜田10号-2",west:476520,south:125980,east:477025,north:126320},
"温泉津":{b200k:"浜田10号-3",west:476070,south:126280,east:476575,north:126620},
"浅利":{b200k:"浜田10号-4",west:476070,south:125980,east:476575,north:126320},
"川本":{b200k:"浜田11号-1",west:476520,south:125680,east:477025,north:126020},
"矢上":{b200k:"浜田11号-2",west:476520,south:125380,east:477025,north:125720},
"川戸":{b200k:"浜田11号-3",west:476070,south:125680,east:476575,north:126020},
"石見今市":{b200k:"浜田11号-4",west:476070,south:125380,east:476575,north:125720},
"大朝":{b200k:"浜田12号-1",west:476520,south:125080,east:477025,north:125420},
"志路原":{b200k:"浜田12号-2",west:476520,south:124780,east:477025,north:125120},
"石見坂本":{b200k:"浜田12号-3",west:476070,south:125080,east:476575,north:125420},
"大仙原":{b200k:"浜田12号-4",west:476070,south:124780,east:476575,north:125120},
"江津":{b200k:"浜田14号-2",west:475620,south:125980,east:476125,north:126320},
"都野津":{b200k:"浜田15号-1",west:475620,south:125680,east:476125,north:126020},
"石見今福":{b200k:"浜田15号-2",west:475620,south:125380,east:476125,north:125720},
"下府":{b200k:"浜田15号-3",west:475170,south:125680,east:475675,north:126020},
"浜田":{b200k:"浜田15号-4",west:475165,south:125380,east:475670,north:125720},
"波佐":{b200k:"浜田16号-1",west:475620,south:125080,east:476125,north:125420},
"臥龍山":{b200k:"浜田16号-2",west:475620,south:124780,east:476125,north:125120},
"木都賀":{b200k:"浜田16号-3",west:475170,south:125080,east:475675,north:125420},
"宇津川":{b200k:"浜田16号-4",west:475170,south:124780,east:475675,north:125120},
"備後小国":{b200k:"広島1号-1",west:478320,south:124480,east:478825,north:124820},
"下徳良":{b200k:"広島1号-2",west:478320,south:124180,east:478825,north:124520},
"敷名":{b200k:"広島1号-3",west:477870,south:124480,east:478375,north:124820},
"乃美":{b200k:"広島1号-4",west:477870,south:124180,east:478375,north:124520},
"河内":{b200k:"広島2号-1",west:478325,south:123880,east:478825,north:124220},
"竹原":{b200k:"広島2号-2",west:478325,south:123580,east:478825,north:123920},
"白市":{b200k:"広島2号-3",west:477875,south:123880,east:478375,north:124220},
"田万里市":{b200k:"広島2号-4",west:477875,south:123580,east:478375,north:123920},
"白水":{b200k:"広島3号-1",west:478325,south:123280,east:478825,north:123620},
"木江":{b200k:"広島3号-2",west:478325,south:122980,east:478825,north:123320},
"三津":{b200k:"広島3号-3",west:477875,south:123280,east:478375,north:123620},
"大長":{b200k:"広島3号-4",west:477875,south:122980,east:478375,north:123320},
"波止浜":{b200k:"広島4号-1",west:478325,south:122680,east:478825,north:123020},
"今治西部":{b200k:"広島4号-2",west:478325,south:122380,east:478825,north:122720},
"大浜":{b200k:"広島4号-3",west:477875,south:122680,east:478375,north:123020},
"菊間":{b200k:"広島4号-4",west:477875,south:122380,east:478375,north:122720},
"安芸吉田":{b200k:"広島5号-1",west:477420,south:124480,east:477925,north:124820},
"井原市":{b200k:"広島5号-2",west:477420,south:124180,east:477925,north:124520},
"佐々井":{b200k:"広島5号-3",west:476970,south:124480,east:477475,north:124820},
"可部":{b200k:"広島5号-4",west:476970,south:124180,east:477475,north:124520},
"安芸西条":{b200k:"広島6号-1",west:477425,south:123880,east:477925,north:124220},
"清水原":{b200k:"広島6号-2",west:477425,south:123580,east:477925,north:123920},
"中深川":{b200k:"広島6号-3",west:476975,south:123880,east:477475,north:124220},
"海田市":{b200k:"広島6号-4",west:476975,south:123580,east:477475,north:123920},
"安芸内海":{b200k:"広島7号-1",west:477425,south:123280,east:477925,north:123620},
"仁方":{b200k:"広島7号-2",west:477425,south:122980,east:477925,north:123320},
"吉浦":{b200k:"広島7号-3",west:476975,south:123280,east:477475,north:123620},
"呉":{b200k:"広島7号-4",west:476975,south:122980,east:477475,north:123320},
"上黒島":{b200k:"広島8号-1",west:477425,south:122680,east:477925,north:123020},
"安居島":{b200k:"広島8号-2",west:477425,south:122380,east:477925,north:122720},
"倉橋島":{b200k:"広島8号-3",west:476975,south:122680,east:477475,north:123020},
"鹿老渡":{b200k:"広島8号-4",west:476975,south:122380,east:477475,north:122720},
"琴谷":{b200k:"広島9号-1",west:476520,south:124480,east:477025,north:124820},
"飯室":{b200k:"広島9号-2",west:476520,south:124180,east:477025,north:124520},
"加計":{b200k:"広島9号-3",west:476070,south:124480,east:476575,north:124820},
"坪野":{b200k:"広島9号-4",west:476070,south:124180,east:476575,north:124520},
"祇園":{b200k:"広島10号-1",west:476525,south:123880,east:477025,north:124220},
"広島":{b200k:"広島10号-2",west:476525,south:123580,east:477025,north:123920},
"川角":{b200k:"広島10号-3",west:476075,south:123880,east:476575,north:124220},
"廿日市":{b200k:"広島10号-4",west:476075,south:123580,east:476575,north:123920},
"似島":{b200k:"広島11号-1",west:476525,south:123280,east:477025,north:123620},
"江田島":{b200k:"広島11号-2",west:476525,south:122980,east:477025,north:123320},
"厳島":{b200k:"広島11号-3",west:476075,south:123280,east:476575,north:123620},
"阿多田島":{b200k:"広島11号-4",west:476075,south:122980,east:476575,north:123320},
"大君":{b200k:"広島12号-1",west:476525,south:122680,east:477025,north:123020},
"柱島":{b200k:"広島12号-2",west:476525,south:122380,east:477025,north:122720},
"甲島":{b200k:"広島12号-3",west:476075,south:122680,east:476575,north:123020},
"三段峡":{b200k:"広島13号-1",west:475620,south:124480,east:476125,north:124820},
"戸河内":{b200k:"広島13号-2",west:475620,south:124180,east:476125,north:124520},
"出合原":{b200k:"広島13号-3",west:475170,south:124480,east:475675,north:124820},
"野入":{b200k:"広島13号-4",west:475170,south:124180,east:475675,north:124520},
"湯来":{b200k:"広島14号-1",west:475625,south:123880,east:476125,north:124220},
"津田":{b200k:"広島14号-2",west:475625,south:123580,east:476125,north:123920},
"安芸冠山":{b200k:"広島14号-3",west:475175,south:123880,east:475675,north:124220},
"宇佐郷":{b200k:"広島14号-4",west:475175,south:123580,east:475675,north:123920},
"玖波":{b200k:"広島15号-1",west:475625,south:123280,east:476125,north:123620},
"大竹":{b200k:"広島15号-2",west:475625,south:122980,east:476125,north:123320},
"周防本郷":{b200k:"広島15号-3",west:475175,south:123280,east:475675,north:123620},
"渋前":{b200k:"広島15号-4",west:475175,south:122980,east:475675,north:123320},
"岩国":{b200k:"広島16号-1",west:475625,south:122680,east:476125,north:123020},
"由宇":{b200k:"広島16号-2",west:475625,south:122380,east:476125,north:122720},
"玖珂":{b200k:"広島16号-3",west:475175,south:122680,east:475675,north:123020},
"上久原":{b200k:"広島16号-4",west:475175,south:122380,east:475675,north:122720},
"鈍川":{b200k:"松山1号-1",west:478325,south:122080,east:478825,north:122420},
"東三方ヶ森":{b200k:"松山1号-2",west:478325,south:121780,east:478825,north:122120},
"伊予北条":{b200k:"松山1号-3",west:477875,south:122080,east:478375,north:122420},
"松山北部":{b200k:"松山1号-4",west:477875,south:121780,east:478375,north:122120},
"伊予川内":{b200k:"松山2号-1",west:478325,south:121480,east:478825,north:121820},
"石墨山":{b200k:"松山2号-2",west:478325,south:121180,east:478825,north:121520},
"松山南部":{b200k:"松山2号-3",west:477875,south:121480,east:478375,north:121820},
"砥部":{b200k:"松山2号-4",west:477875,south:121180,east:478375,north:121520},
"久万":{b200k:"松山3号-1",west:478325,south:120880,east:478820,north:121220},
"笠取山":{b200k:"松山3号-2",west:478325,south:120580,east:478820,north:120920},
"総津":{b200k:"松山3号-3",west:477875,south:120880,east:478370,north:121220},
"伊予小田":{b200k:"松山3号-4",west:477875,south:120580,east:478370,north:120920},
"越知面":{b200k:"松山4号-1",west:478325,south:120280,east:478820,north:120620},
"梼原":{b200k:"松山4号-2",west:478325,south:119980,east:478820,north:120320},
"惣川":{b200k:"松山4号-3",west:477875,south:120280,east:478370,north:120620},
"土居":{b200k:"松山4号-4",west:477875,south:119980,east:478370,north:120320},
"伊予小浜":{b200k:"松山5号-1",west:477425,south:122080,east:477925,north:122420},
"三津浜":{b200k:"松山5号-2",west:477425,south:121780,east:477925,north:122120},
"津和地":{b200k:"松山5号-3",west:476975,south:122080,east:477475,north:122420},
"由利島":{b200k:"松山5号-4",west:476975,south:121780,east:477475,north:122120},
"郡中":{b200k:"松山6号-1",west:477425,south:121480,east:477925,north:121820},
"上灘":{b200k:"松山6号-2",west:477395,south:121180,east:477895,north:121520},
"中山":{b200k:"松山7号-1",west:477425,south:120880,east:477920,north:121220},
"内子":{b200k:"松山7号-2",west:477425,south:120580,east:477920,north:120920},
"串":{b200k:"松山7号-3",west:476975,south:120880,east:477470,north:121220},
"大洲":{b200k:"松山7号-4",west:476975,south:120580,east:477470,north:120920},
"鹿野川":{b200k:"松山8号-1",west:477425,south:120280,east:477920,north:120620},
"野村":{b200k:"松山8号-2",west:477425,south:119980,east:477920,north:120320},
"東多田":{b200k:"松山8号-3",west:476975,south:120280,east:477470,north:120620},
"卯之町":{b200k:"松山8号-4",west:476975,south:119980,east:477470,north:120320},
"伊保田":{b200k:"松山9号-1",west:476525,south:122073,east:477025,north:122413},
"久賀":{b200k:"松山9号-3",west:476075,south:122105,east:476575,north:122445},
"安下庄":{b200k:"松山9号-4",west:476090,south:121780,east:476590,north:122120},
"平郡島東部":{b200k:"松山10号-3",west:476075,south:121480,east:476575,north:121820},
"伊予長浜":{b200k:"松山11号-1",west:476525,south:120880,east:477020,north:121220},
"出海":{b200k:"松山11号-2",west:476525,south:120580,east:477020,north:120920},
"八幡浜":{b200k:"松山12号-1",west:476525,south:120280,east:477020,north:120620},
"三瓶":{b200k:"松山12号-2",west:476525,south:119980,east:477020,north:120320},
"湊浦":{b200k:"松山12号-3",west:476075,south:120340,east:476570,north:120680},
"伊予大島":{b200k:"松山12号-4",west:476075,south:119980,east:476570,north:120320},
"大畠":{b200k:"松山13号-1",west:475625,south:122080,east:476125,north:122420},
"阿月":{b200k:"松山13号-2",west:475625,south:121780,east:476125,north:122120},
"柳井":{b200k:"松山13号-3",west:475175,south:122080,east:475675,north:122420},
"水場":{b200k:"松山13号-4",west:475145,south:121780,east:475645,north:122120},
"平郡島":{b200k:"松山14号-1",west:475625,south:121480,east:476125,north:121820},
"周防八島":{b200k:"松山14号-2",west:475625,south:121180,east:476125,north:121520},
"室津":{b200k:"松山14号-3",west:475175,south:121480,east:475675,north:121820},
"三机":{b200k:"松山16号-1",west:475625,south:120280,east:476120,north:120620},
"二名津":{b200k:"松山16号-2",west:475625,south:119980,east:476120,north:120320},
"三崎":{b200k:"松山16号-4",west:475175,south:119980,east:475670,north:120320},
"土佐松原":{b200k:"宇和島1号-1",west:478325,south:119680,east:478820,north:120020},
"田野々":{b200k:"宇和島1号-2",west:478325,south:119380,east:478820,north:119720},
"下鍵山":{b200k:"宇和島1号-3",west:477875,south:119680,east:478370,north:120020},
"江川崎":{b200k:"宇和島1号-4",west:477875,south:119380,east:478370,north:119720},
"大用":{b200k:"宇和島2号-1",west:478325,south:119080,east:478820,north:119420},
"蕨岡":{b200k:"宇和島2号-2",west:478325,south:118780,east:478820,north:119120},
"口屋内":{b200k:"宇和島2号-3",west:477875,south:119080,east:478370,north:119420},
"川登":{b200k:"宇和島2号-4",west:477875,south:118780,east:478370,north:119120},
"土佐中村":{b200k:"宇和島3号-1",west:478345,south:118480,east:478840,north:118820},
"下ノ加江":{b200k:"宇和島3号-2",west:478325,south:118180,east:478820,north:118520},
"有岡":{b200k:"宇和島3号-3",west:477875,south:118480,east:478370,north:118820},
"来栖野":{b200k:"宇和島3号-4",west:477875,south:118180,east:478370,north:118520},
"土佐清水":{b200k:"宇和島4号-1",west:478330,south:117880,east:478825,north:118220},
"足摺岬":{b200k:"宇和島4号-2",west:478530,south:117730,east:479020,north:118070},
"下川口":{b200k:"宇和島4号-3",west:477880,south:117880,east:478375,north:118220},
"近永":{b200k:"宇和島5号-1",west:477425,south:119680,east:477920,north:120020},
"松丸":{b200k:"宇和島5号-2",west:477425,south:119380,east:477920,north:119720},
"伊予吉田":{b200k:"宇和島5号-3",west:476975,south:119680,east:477470,north:120020},
"宇和島":{b200k:"宇和島5号-4",west:476975,south:119380,east:477470,north:119720},
"御内":{b200k:"宇和島6号-1",west:477425,south:119080,east:477920,north:119420},
"楠山":{b200k:"宇和島6号-2",west:477425,south:118780,east:477920,north:119120},
"伊予岩松":{b200k:"宇和島6号-3",west:476975,south:119080,east:477470,north:119420},
"柏":{b200k:"宇和島6号-4",west:476975,south:118780,east:477470,north:119120},
"宿毛":{b200k:"宇和島7号-1",west:477425,south:118480,east:477920,north:118820},
"小筑紫":{b200k:"宇和島7号-2",west:477425,south:118180,east:477920,north:118520},
"城辺":{b200k:"宇和島7号-3",west:476975,south:118480,east:477470,north:118820},
"福浦":{b200k:"宇和島7号-4",west:476975,south:118180,east:477470,north:118520},
"柏島":{b200k:"宇和島8号-1",west:477430,south:117880,east:477925,north:118220},
"母島":{b200k:"宇和島8号-4",west:476980,south:117670,east:477470,north:118010},
"伊予高山":{b200k:"宇和島9号-1",west:476505,south:119680,east:477000,north:120020},
"遊子":{b200k:"宇和島9号-2",west:476525,south:119380,east:477020,north:119720},
"戸島":{b200k:"宇和島9号-4",west:476075,south:119380,east:476570,north:119720},
"結出":{b200k:"宇和島10号-1",west:476525,south:119080,east:477020,north:119420},
"魚神山":{b200k:"宇和島10号-2",west:476525,south:118780,east:477020,north:119120},
"日振島":{b200k:"宇和島10号-3",west:476075,south:119080,east:476570,north:119420},
"伊予鹿島":{b200k:"宇和島11号-1",west:476525,south:118480,east:477020,north:118820},
"高茂岬":{b200k:"宇和島11号-2",west:476525,south:118180,east:477020,north:118520},
"鵜来島":{b200k:"宇和島12号-1",west:476530,south:117790,east:477020,north:118130},
"保戸島":{b200k:"宇和島14号-3",west:475175,south:118930,east:475670,north:119270},
"鶴御崎":{b200k:"宇和島15号-3",west:475175,south:118480,east:475670,north:118820},
"沖黒島":{b200k:"宇和島15号-4",west:475175,south:118180,east:475670,north:118520},
"三隅":{b200k:"見島4号-1",west:474705,south:125080,east:475210,north:125420},
"仙道郷":{b200k:"見島4号-2",west:474720,south:124780,east:475225,north:125120},
"益田":{b200k:"見島4号-4",west:474270,south:124780,east:474775,north:125120},
"飯浦":{b200k:"見島8号-2",west:473820,south:124780,east:474325,north:125120},
"見島":{b200k:"見島16号-1",west:472020,south:125080,east:472525,north:125420},
"都茂郷":{b200k:"山口1号-1",west:474720,south:124480,east:475225,north:124820},
"石谷":{b200k:"山口1号-2",west:474720,south:124180,east:475225,north:124520},
"石見横田":{b200k:"山口1号-3",west:474270,south:124480,east:474775,north:124820},
"日原":{b200k:"山口1号-4",west:474270,south:124180,east:474775,north:124520},
"安蔵寺山":{b200k:"山口2号-1",west:474725,south:123880,east:475225,north:124220},
"六日市":{b200k:"山口2号-2",west:474725,south:123580,east:475225,north:123920},
"津和野":{b200k:"山口2号-3",west:474275,south:123880,east:474775,north:124220},
"椛谷":{b200k:"山口2号-4",west:474275,south:123580,east:474775,north:123920},
"周防広瀬":{b200k:"山口3号-1",west:474725,south:123280,east:475225,north:123620},
"周防須万":{b200k:"山口3号-2",west:474725,south:122980,east:475225,north:123320},
"莇ヶ岳":{b200k:"山口3号-3",west:474275,south:123280,east:474775,north:123620},
"周防鹿野":{b200k:"山口3号-4",west:474275,south:122980,east:474775,north:123320},
"菅野湖":{b200k:"山口4号-1",west:474725,south:122680,east:475225,north:123020},
"呼坂":{b200k:"山口4号-2",west:474725,south:122380,east:475225,north:122720},
"須々万本郷":{b200k:"山口4号-3",west:474275,south:122680,east:474775,north:123020},
"徳山":{b200k:"山口4号-4",west:474275,south:122380,east:474775,north:122720},
"江崎":{b200k:"山口5号-1",west:473820,south:124480,east:474325,north:124820},
"長門新市":{b200k:"山口5号-2",west:473820,south:124180,east:474325,north:124520},
"須佐":{b200k:"山口5号-3",west:473370,south:124480,east:473875,north:124820},
"宇田":{b200k:"山口5号-4",west:473370,south:124180,east:473875,north:124520},
"十種ヶ峰":{b200k:"山口6号-1",west:473825,south:123880,east:474325,north:124220},
"徳佐中":{b200k:"山口6号-2",west:473825,south:123580,east:474325,north:123920},
"長門広瀬":{b200k:"山口6号-3",west:473375,south:123880,east:473875,north:124220},
"生雲中":{b200k:"山口6号-4",west:473375,south:123580,east:473875,north:123920},
"大原湖":{b200k:"山口7号-1",west:473825,south:123280,east:474325,north:123620},
"堀":{b200k:"山口7号-2",west:473825,south:122980,east:474325,north:123320},
"長門峡":{b200k:"山口7号-3",west:473375,south:123280,east:473875,north:123620},
"仁保":{b200k:"山口7号-4",west:473375,south:122980,east:473875,north:123320},
"島地":{b200k:"山口8号-1",west:473825,south:122680,east:474325,north:123020},
"福川":{b200k:"山口8号-2",west:473825,south:122380,east:474325,north:122720},
"矢田":{b200k:"山口8号-3",west:473375,south:122680,east:473875,north:123020},
"防府":{b200k:"山口8号-4",west:473375,south:122380,east:473875,north:122720},
"櫃島":{b200k:"山口9号-2",west:472920,south:124180,east:473425,north:124520},
"越ヶ浜":{b200k:"山口10号-1",west:472925,south:123880,east:473425,north:124220},
"萩":{b200k:"山口10号-2",west:472925,south:123580,east:473425,north:123920},
"通":{b200k:"山口10号-3",west:472475,south:123880,east:472975,north:124220},
"三隅中":{b200k:"山口10号-4",west:472475,south:123580,east:472975,north:123920},
"佐々並":{b200k:"山口11号-1",west:472925,south:123280,east:473425,north:123620},
"山口":{b200k:"山口11号-2",west:472925,south:122980,east:473425,north:123320},
"秋吉台北部":{b200k:"山口11号-3",west:472475,south:123280,east:472975,north:123620},
"秋吉台":{b200k:"山口11号-4",west:472475,south:122980,east:472975,north:123320},
"小郡":{b200k:"山口12号-1",west:472925,south:122680,east:473425,north:123020},
"台道":{b200k:"山口12号-2",west:472925,south:122380,east:473425,north:122720},
"湯ノ口":{b200k:"山口12号-3",west:472475,south:122680,east:472975,north:123020},
"阿知須":{b200k:"山口12号-4",west:472475,south:122380,east:472975,north:122720},
"青海島北部":{b200k:"山口14号-1",west:472025,south:123880,east:472525,north:124220},
"仙崎":{b200k:"山口14号-2",west:472025,south:123580,east:472525,north:123920},
"長門古市":{b200k:"山口14号-4",west:471575,south:123590,east:472075,north:123930},
"長門湯本":{b200k:"山口15号-1",west:472025,south:123280,east:472525,north:123620},
"於福":{b200k:"山口15号-2",west:472025,south:122980,east:472525,north:123320},
"俵山":{b200k:"山口15号-3",west:471575,south:123280,east:472075,north:123620},
"西市":{b200k:"山口15号-4",west:471575,south:122980,east:472075,north:123320},
"伊佐":{b200k:"山口16号-1",west:472025,south:122680,east:472525,north:123020},
"厚狭":{b200k:"山口16号-2",west:472025,south:122380,east:472525,north:122720},
"田部":{b200k:"山口16号-3",west:471575,south:122680,east:472075,north:123020},
"小月":{b200k:"山口16号-4",west:471575,south:122380,east:472075,north:122720},
"光":{b200k:"中津1号-1",west:474725,south:122080,east:475225,north:122420},
"笠戸島":{b200k:"中津1号-3",west:474275,south:122080,east:474775,north:122420},
"祝島":{b200k:"中津2号-1",west:474725,south:121480,east:475225,north:121820},
"野島":{b200k:"中津5号-1",west:473825,south:122080,east:474325,north:122420},
"佐波島":{b200k:"中津5号-3",west:473375,south:122080,east:473875,north:122420},
"姫島":{b200k:"中津6号-2",west:473825,south:121180,east:474325,north:121520},
"竹田津":{b200k:"中津6号-4",west:473375,south:121180,east:473875,north:121520},
"富来浦":{b200k:"中津7号-1",west:473825,south:120880,east:474320,north:121220},
"鶴川":{b200k:"中津7号-2",west:473825,south:120580,east:474320,north:120920},
"香々地":{b200k:"中津7号-3",west:473375,south:120880,east:473870,north:121220},
"両子山":{b200k:"中津7号-4",west:473375,south:120580,east:473870,north:120920},
"下原":{b200k:"中津8号-1",west:473825,south:120280,east:474320,north:120620},
"住吉浜":{b200k:"中津8号-2",west:473825,south:119980,east:474320,north:120320},
"若宮":{b200k:"中津8号-3",west:473375,south:120280,east:473870,north:120620},
"杵築":{b200k:"中津8号-4",west:473375,south:119980,east:473870,north:120320},
"竹島":{b200k:"中津9号-1",west:472925,south:122080,east:473425,north:122420},
"宇部東部":{b200k:"中津9号-3",west:472475,south:122080,east:472975,north:122420},
"浜":{b200k:"中津11号-1",west:472925,south:120880,east:473420,north:121220},
"豊後高田":{b200k:"中津11号-2",west:472925,south:120580,east:473420,north:120920},
"定留":{b200k:"中津11号-3",west:472475,south:120880,east:472970,north:121220},
"宇佐":{b200k:"中津11号-4",west:472475,south:120580,east:472970,north:120920},
"立石":{b200k:"中津12号-1",west:472925,south:120280,east:473420,north:120620},
"豊後豊岡":{b200k:"中津12号-2",west:472925,south:119980,east:473420,north:120320},
"下市":{b200k:"中津12号-3",west:472475,south:120280,east:472970,north:120620},
"斉藤":{b200k:"中津12号-4",west:472475,south:119980,east:472970,north:120320},
"宇部":{b200k:"中津13号-1",west:472025,south:122080,east:472525,north:122420},
"白野江":{b200k:"中津13号-3",west:471575,south:122080,east:472075,north:122420},
"喜多久":{b200k:"中津13号-4",west:471560,south:121780,east:472060,north:122120},
"神ノ島":{b200k:"中津14号-3",west:471560,south:121480,east:472060,north:121820},
"蓑島":{b200k:"中津14号-4",west:471575,south:121180,east:472075,north:121520},
"中津":{b200k:"中津15号-1",west:472025,south:120880,east:472520,north:121220},
"土佐井":{b200k:"中津15号-2",west:472025,south:120580,east:472520,north:120920},
"椎田":{b200k:"中津15号-3",west:471575,south:120880,east:472070,north:121220},
"下河内":{b200k:"中津15号-4",west:471575,south:120580,east:472070,north:120920},
"耶馬溪東部":{b200k:"中津16号-1",west:472025,south:120280,east:472520,north:120620},
"深耶馬溪":{b200k:"中津16号-2",west:472025,south:119980,east:472520,north:120320},
"耶馬溪西部":{b200k:"中津16号-3",west:471575,south:120280,east:472070,north:120620},
"裏耶馬溪":{b200k:"中津16号-4",west:471575,south:119980,east:472070,north:120320},
"佐賀関":{b200k:"大分1号-1",west:474705,south:119530,east:475200,north:119870},
"坂ノ市":{b200k:"大分1号-4",west:474275,south:119400,east:474770,north:119740},
"無垢島":{b200k:"大分2号-1",west:474725,south:119080,east:475220,north:119420},
"浅海井":{b200k:"大分2号-2",west:474725,south:118780,east:475220,north:119120},
"臼杵":{b200k:"大分2号-3",west:474275,south:119080,east:474770,north:119420},
"津久見":{b200k:"大分2号-4",west:474275,south:118780,east:474770,north:119120},
"佐伯":{b200k:"大分3号-1",west:474725,south:118480,east:475220,north:118820},
"畑野浦":{b200k:"大分3号-2",west:474725,south:118180,east:475220,north:118520},
"植松":{b200k:"大分3号-3",west:474275,south:118480,east:474770,north:118820},
"上直見":{b200k:"大分3号-4",west:474275,south:118180,east:474770,north:118520},
"蒲江":{b200k:"大分4号-1",west:474730,south:117880,east:475225,north:118220},
"深島":{b200k:"大分4号-2",west:474730,south:117580,east:475220,north:117920},
"三川内":{b200k:"大分4号-3",west:474280,south:117880,east:474775,north:118220},
"古江":{b200k:"大分4号-4",west:474280,south:117580,east:474770,north:117920},
"家島":{b200k:"大分5号-1",west:473825,south:119680,east:474320,north:120020},
"鶴崎":{b200k:"大分5号-2",west:473825,south:119380,east:474320,north:119720},
"別府東部":{b200k:"大分5号-3",west:473375,south:119680,east:473870,north:120020},
"大分":{b200k:"大分5号-4",west:473375,south:119380,east:473870,north:119720},
"戸次本町":{b200k:"大分6号-1",west:473825,south:119080,east:474320,north:119420},
"犬飼":{b200k:"大分6号-2",west:473825,south:118780,east:474320,north:119120},
"野津原":{b200k:"大分6号-3",west:473375,south:119080,east:473870,north:119420},
"田中":{b200k:"大分6号-4",west:473375,south:118780,east:473870,north:119120},
"佩楯山":{b200k:"大分7号-1",west:473825,south:118480,east:474320,north:118820},
"千束":{b200k:"大分7号-2",west:473825,south:118180,east:474320,north:118520},
"三重町":{b200k:"大分7号-3",west:473375,south:118480,east:473870,north:118820},
"中津留":{b200k:"大分7号-4",west:473375,south:118180,east:473870,north:118520},
"重岡":{b200k:"大分8号-1",west:473830,south:117880,east:474325,north:118220},
"熊田":{b200k:"大分8号-2",west:473830,south:117580,east:474320,north:117920},
"木浦鉱山":{b200k:"大分8号-3",west:473380,south:117880,east:473875,north:118220},
"祝子川":{b200k:"大分8号-4",west:473380,south:117580,east:473870,north:117920},
"別府西部":{b200k:"大分9号-1",west:472925,south:119680,east:473420,north:120020},
"小野屋":{b200k:"大分9号-2",west:472925,south:119380,east:473420,north:119720},
"日出生台":{b200k:"大分9号-3",west:472475,south:119680,east:472970,north:120020},
"湯平":{b200k:"大分9号-4",west:472475,south:119380,east:472970,north:119720},
"豊後今市":{b200k:"大分10号-1",west:472925,south:119080,east:473420,north:119420},
"朝地":{b200k:"大分10号-2",west:472925,south:118780,east:473420,north:119120},
"大船山":{b200k:"大分10号-3",west:472475,south:119080,east:472970,north:119420},
"久住":{b200k:"大分10号-4",west:472475,south:118780,east:472970,north:119120},
"竹田":{b200k:"大分11号-1",west:472925,south:118480,east:473420,north:118820},
"小原":{b200k:"大分11号-2",west:472925,south:118180,east:473420,north:118520},
"桜町":{b200k:"大分11号-3",west:472475,south:118480,east:472970,north:118820},
"豊後柏原":{b200k:"大分11号-4",west:472475,south:118180,east:472970,north:118520},
"見立":{b200k:"大分12号-1",west:472930,south:117880,east:473425,north:118220},
"大菅":{b200k:"大分12号-2",west:472930,south:117580,east:473420,north:117920},
"祖母山":{b200k:"大分12号-3",west:472480,south:117880,east:472975,north:118220},
"三田井":{b200k:"大分12号-4",west:472480,south:117580,east:472970,north:117920},
"豊後森":{b200k:"大分13号-1",west:472025,south:119680,east:472520,north:120020},
"豊後中村":{b200k:"大分13号-2",west:472025,south:119380,east:472520,north:119720},
"天ヶ瀬":{b200k:"大分13号-3",west:471575,south:119680,east:472070,north:120020},
"杖立":{b200k:"大分13号-4",west:471575,south:119380,east:472070,north:119720},
"湯坪":{b200k:"大分14号-1",west:472025,south:119080,east:472520,north:119420},
"久住山":{b200k:"大分14号-2",west:472025,south:118780,east:472520,north:119120},
"宮原":{b200k:"大分14号-3",west:471575,south:119080,east:472070,north:119420},
"満願寺":{b200k:"大分14号-4",west:471575,south:118780,east:472070,north:119120},
"坂梨":{b200k:"大分15号-1",west:472025,south:118480,east:472520,north:118820},
"根子岳":{b200k:"大分15号-2",west:472025,south:118180,east:472520,north:118520},
"坊中":{b200k:"大分15号-3",west:471575,south:118480,east:472070,north:118820},
"阿蘇山":{b200k:"大分15号-4",west:471575,south:118180,east:472070,north:118520},
"高森":{b200k:"大分16号-1",west:472030,south:117880,east:472525,north:118220},
"馬見原":{b200k:"大分16号-2",west:472030,south:117580,east:472520,north:117920},
"肥後吉田":{b200k:"大分16号-3",west:471580,south:117880,east:472075,north:118220},
"大平":{b200k:"大分16号-4",west:471580,south:117580,east:472070,north:117920},
"島浦":{b200k:"延岡1号-3",west:474280,south:117280,east:474770,north:117620},
"延岡北部":{b200k:"延岡5号-1",west:473830,south:117280,east:474320,north:117620},
"延岡":{b200k:"延岡5号-2",west:473830,south:116980,east:474320,north:117320},
"行縢山":{b200k:"延岡5号-3",west:473380,south:117280,east:473870,north:117620},
"川水流":{b200k:"延岡5号-4",west:473380,south:116980,east:473870,north:117320},
"日向":{b200k:"延岡6号-1",west:473830,south:116680,east:474320,north:117020},
"平岩":{b200k:"延岡6号-2",west:473830,south:116380,east:474320,north:116720},
"上井野":{b200k:"延岡6号-3",west:473380,south:116680,east:473870,north:117020},
"山陰":{b200k:"延岡6号-4",west:473380,south:116380,east:473870,north:116720},
"都農":{b200k:"延岡7号-3",west:473380,south:116080,east:473870,north:116420},
"川南":{b200k:"延岡7号-4",west:473380,south:115780,east:473870,north:116120},
"高鍋":{b200k:"延岡8号-3",west:473380,south:115480,east:473870,north:115820},
"日向日置":{b200k:"延岡8号-4",west:473380,south:115180,east:473870,north:115520},
"日之影":{b200k:"延岡9号-1",west:472930,south:117280,east:473420,north:117620},
"宇納間":{b200k:"延岡9号-2",west:472930,south:116980,east:473420,north:117320},
"諸塚山":{b200k:"延岡9号-3",west:472480,south:117280,east:472970,north:117620},
"諸塚":{b200k:"延岡9号-4",west:472480,south:116980,east:472970,north:117320},
"田代":{b200k:"延岡10号-1",west:472930,south:116680,east:473420,north:117020},
"坪谷":{b200k:"延岡10号-2",west:472930,south:116380,east:473420,north:116720},
"清水岳":{b200k:"延岡10号-3",west:472480,south:116680,east:472970,north:117020},
"神門":{b200k:"延岡10号-4",west:472480,south:116380,east:472970,north:116720},
"尾鈴山":{b200k:"延岡11号-1",west:472930,south:116080,east:473420,north:116420},
"石河内":{b200k:"延岡11号-2",west:472930,south:115780,east:473420,north:116120},
"尾八重":{b200k:"延岡11号-3",west:472480,south:116080,east:472970,north:116420},
"瓢丹淵":{b200k:"延岡11号-4",west:472480,south:115780,east:472970,north:116120},
"妻":{b200k:"延岡12号-1",west:472930,south:115480,east:473420,north:115820},
"佐土原":{b200k:"延岡12号-2",west:472930,south:115180,east:473420,north:115520},
"三納":{b200k:"延岡12号-3",west:472480,south:115480,east:472970,north:115820},
"岩崎":{b200k:"延岡12号-4",west:472480,south:115180,east:472970,north:115520},
"鞍岡":{b200k:"延岡13号-1",west:472030,south:117280,east:472520,north:117620},
"胡摩山":{b200k:"延岡13号-2",west:472030,south:116980,east:472520,north:117320},
"緑川":{b200k:"延岡13号-3",west:471580,south:117280,east:472070,north:117620},
"国見岳":{b200k:"延岡13号-4",west:471580,south:116980,east:472070,north:117320},
"上椎葉":{b200k:"延岡14号-1",west:472030,south:116680,east:472520,north:117020},
"日向大河内":{b200k:"延岡14号-2",west:472030,south:116380,east:472520,north:116720},
"不土野":{b200k:"延岡14号-3",west:471580,south:116680,east:472070,north:117020},
"古屋敷":{b200k:"延岡14号-4",west:471580,south:116380,east:472070,north:116720},
"石堂山":{b200k:"延岡15号-1",west:472030,south:116080,east:472520,north:116420},
"村所":{b200k:"延岡15号-2",west:472030,south:115780,east:472520,north:116120},
"市房山":{b200k:"延岡15号-3",west:471580,south:116080,east:472070,north:116420},
"槻木":{b200k:"延岡15号-4",west:471580,south:115780,east:472070,north:116120},
"掃部岳":{b200k:"延岡16号-1",west:472030,south:115480,east:472520,north:115820},
"大森岳":{b200k:"延岡16号-2",west:472030,south:115180,east:472520,north:115520},
"田代ヶ八重":{b200k:"延岡16号-3",west:471580,south:115480,east:472070,north:115820},
"須木":{b200k:"延岡16号-4",west:471580,south:115180,east:472070,north:115520},
"宮崎北部":{b200k:"宮崎9号-1",west:472930,south:114880,east:473420,north:115220},
"宮崎":{b200k:"宮崎9号-2",west:472930,south:114580,east:473420,north:114920},
"日向本庄":{b200k:"宮崎9号-3",west:472480,south:114880,east:472970,north:115220},
"田野":{b200k:"宮崎9号-4",west:472480,south:114580,east:472970,north:114920},
"日向青島":{b200k:"宮崎10号-1",west:472930,south:114280,east:473415,north:114620},
"郷之原":{b200k:"宮崎10号-2",west:472930,south:113980,east:473415,north:114320},
"築地原":{b200k:"宮崎10号-3",west:472480,south:114280,east:472965,north:114620},
"坂元":{b200k:"宮崎10号-4",west:472480,south:113980,east:472965,north:114320},
"鵜戸":{b200k:"宮崎11号-1",west:472930,south:113680,east:473415,north:114020},
"油津":{b200k:"宮崎11号-2",west:472930,south:113380,east:473415,north:113720},
"飫肥":{b200k:"宮崎11号-3",west:472480,south:113680,east:472965,north:114020},
"榎原":{b200k:"宮崎11号-4",west:472480,south:113380,east:472965,north:113720},
"幸島":{b200k:"宮崎12号-1",west:472930,south:113080,east:473415,north:113420},
"本城":{b200k:"宮崎12号-3",west:472480,south:113080,east:472965,north:113420},
"都井岬":{b200k:"宮崎12号-4",west:472430,south:112780,east:472915,north:113120},
"紙屋":{b200k:"宮崎13号-1",west:472030,south:114880,east:472520,north:115220},
"有水":{b200k:"宮崎13号-2",west:472030,south:114580,east:472520,north:114920},
"高原":{b200k:"宮崎13号-3",west:471580,south:114880,east:472070,north:115220},
"高崎新田":{b200k:"宮崎13号-4",west:471580,south:114580,east:472070,north:114920},
"高城":{b200k:"宮崎14号-1",west:472030,south:114280,east:472515,north:114620},
"山王原":{b200k:"宮崎14号-2",west:472030,south:113980,east:472515,north:114320},
"庄内":{b200k:"宮崎14号-3",west:471580,south:114280,east:472065,north:114620},
"都城":{b200k:"宮崎14号-4",west:471580,south:113980,east:472065,north:114320},
"尾平野":{b200k:"宮崎15号-1",west:472030,south:113680,east:472515,north:114020},
"園田":{b200k:"宮崎15号-2",west:472030,south:113380,east:472515,north:113720},
"末吉":{b200k:"宮崎15号-3",west:471580,south:113680,east:472065,north:114020},
"大隅松山":{b200k:"宮崎15号-4",west:471580,south:113380,east:472065,north:113720},
"串間":{b200k:"宮崎16号-1",west:472030,south:113080,east:472515,north:113420},
"志布志":{b200k:"宮崎16号-3",west:471580,south:113080,east:472065,north:113420},
"大隅柏原":{b200k:"宮崎16号-4",west:471580,south:112780,east:472065,north:113120},
"長門川尻":{b200k:"小串2号-1",west:471125,south:123880,east:471625,north:124220},
"阿川":{b200k:"小串2号-2",west:471125,south:123580,east:471625,north:123920},
"角島":{b200k:"小串2号-4",west:470675,south:123580,east:471175,north:123920},
"滝部":{b200k:"小串3号-1",west:471110,south:123280,east:471610,north:123620},
"小串":{b200k:"小串3号-2",west:471125,south:122980,east:471625,north:123320},
"川棚温泉":{b200k:"小串4号-1",west:471125,south:122680,east:471625,north:123020},
"安岡":{b200k:"小串4号-2",west:471125,south:122380,east:471625,north:122720},
"蓋井島":{b200k:"小串4号-3",west:470675,south:122680,east:471175,north:123020},
"下関":{b200k:"福岡1号-1",west:471125,south:122080,east:471625,north:122420},
"小倉":{b200k:"福岡1号-2",west:471125,south:121780,east:471625,north:122120},
"六連島":{b200k:"福岡1号-3",west:470675,south:122100,east:471175,north:122440},
"八幡":{b200k:"福岡1号-4",west:470675,south:121780,east:471175,north:122120},
"苅田":{b200k:"福岡2号-1",west:471125,south:121480,east:471625,north:121820},
"行橋":{b200k:"福岡2号-2",west:471125,south:121180,east:471625,north:121520},
"徳力":{b200k:"福岡2号-3",west:470675,south:121480,east:471175,north:121820},
"金田":{b200k:"福岡2号-4",west:470675,south:121180,east:471175,north:121520},
"豊前本庄":{b200k:"福岡3号-1",west:471125,south:120880,east:471620,north:121220},
"伊良原":{b200k:"福岡3号-2",west:471125,south:120580,east:471620,north:120920},
"田川":{b200k:"福岡3号-3",west:470675,south:120880,east:471170,north:121220},
"筑前山田":{b200k:"福岡3号-4",west:470675,south:120580,east:471170,north:120920},
"英彦山":{b200k:"福岡4号-1",west:471125,south:120280,east:471620,north:120620},
"大行司":{b200k:"福岡4号-2",west:471125,south:119980,east:471620,north:120320},
"小石原":{b200k:"福岡4号-3",west:470675,south:120280,east:471170,north:120620},
"吉井":{b200k:"福岡4号-4",west:470675,south:119980,east:471170,north:120320},
"岩屋":{b200k:"福岡5号-1",west:470225,south:122080,east:470725,north:122420},
"折尾":{b200k:"福岡5号-2",west:470225,south:121780,east:470725,north:122120},
"吉木":{b200k:"福岡5号-4",west:469775,south:121780,east:470275,north:122120},
"中間":{b200k:"福岡6号-1",west:470225,south:121480,east:470725,north:121820},
"直方":{b200k:"福岡6号-2",west:470225,south:121180,east:470725,north:121520},
"筑前東郷":{b200k:"福岡6号-3",west:469775,south:121480,east:470275,north:121820},
"脇田":{b200k:"福岡6号-4",west:469775,south:121180,east:470275,north:121520},
"飯塚":{b200k:"福岡7号-1",west:470225,south:120880,east:470720,north:121220},
"大隈":{b200k:"福岡7号-2",west:470225,south:120580,east:470720,north:120920},
"篠栗":{b200k:"福岡7号-3",west:469775,south:120880,east:470270,north:121220},
"太宰府":{b200k:"福岡7号-4",west:469775,south:120580,east:470270,north:120920},
"甘木":{b200k:"福岡8号-1",west:470225,south:120280,east:470720,north:120620},
"田主丸":{b200k:"福岡8号-2",west:470225,south:119980,east:470720,north:120320},
"二日市":{b200k:"福岡8号-3",west:469775,south:120280,east:470270,north:120620},
"鳥栖":{b200k:"福岡8号-4",west:469775,south:119980,east:470270,north:120320},
"神湊":{b200k:"福岡9号-2",west:469325,south:121780,east:469825,north:122120},
"津屋崎":{b200k:"福岡10号-1",west:469325,south:121480,east:469825,north:121820},
"古賀":{b200k:"福岡10号-2",west:469325,south:121180,east:469825,north:121520},
"志賀島":{b200k:"福岡10号-4",west:468875,south:121180,east:469375,north:121520},
"福岡":{b200k:"福岡11号-1",west:469325,south:120880,east:469820,north:121220},
"福岡南部":{b200k:"福岡11号-2",west:469325,south:120580,east:469820,north:120920},
"福岡西部":{b200k:"福岡11号-3",west:468875,south:120880,east:469370,north:121220},
"福岡西南部":{b200k:"福岡11号-4",west:468875,south:120580,east:469370,north:120920},
"不入道":{b200k:"福岡12号-1",west:469325,south:120280,east:469820,north:120620},
"中原":{b200k:"福岡12号-2",west:469325,south:119980,east:469820,north:120320},
"脊振山":{b200k:"福岡12号-3",west:468875,south:120280,east:469370,north:120620},
"広滝":{b200k:"福岡12号-4",west:468875,south:119980,east:469370,north:120320},
"玄界島":{b200k:"福岡14号-2",west:468425,south:121180,east:468925,north:121520},
"宮浦":{b200k:"福岡15号-1",west:468425,south:120880,east:468920,north:121220},
"前原":{b200k:"福岡15号-2",west:468425,south:120580,east:468920,north:120920},
"芥屋":{b200k:"福岡15号-4",west:467975,south:120615,east:468470,north:120955},
"雷山":{b200k:"福岡16号-1",west:468425,south:120280,east:468920,north:120620},
"古湯":{b200k:"福岡16号-2",west:468425,south:119980,east:468920,north:120320},
"浜崎":{b200k:"福岡16号-3",west:467975,south:120280,east:468470,north:120620},
"相知":{b200k:"福岡16号-4",west:467975,south:119980,east:468470,north:120320},
"日田":{b200k:"熊本1号-1",west:471125,south:119680,east:471620,north:120020},
"豊後大野":{b200k:"熊本1号-2",west:471125,south:119380,east:471620,north:119720},
"千足":{b200k:"熊本1号-3",west:470675,south:119680,east:471170,north:120020},
"十籠":{b200k:"熊本1号-4",west:470675,south:119380,east:471170,north:119720},
"鯛生":{b200k:"熊本2号-1",west:471125,south:119080,east:471620,north:119420},
"立門":{b200k:"熊本2号-2",west:471125,south:118780,east:471620,north:119120},
"宮ノ尾":{b200k:"熊本2号-3",west:470675,south:119080,east:471170,north:119420},
"八方ヶ岳":{b200k:"熊本2号-4",west:470675,south:118780,east:471170,north:119120},
"鞍岳":{b200k:"熊本3号-1",west:471125,south:118480,east:471620,north:118820},
"立野":{b200k:"熊本3号-2",west:471125,south:118180,east:471620,north:118520},
"菊池":{b200k:"熊本3号-3",west:470675,south:118480,east:471170,north:118820},
"肥後大津":{b200k:"熊本3号-4",west:470675,south:118180,east:471170,north:118520},
"大矢野原":{b200k:"熊本4号-1",west:471130,south:117880,east:471625,north:118220},
"浜町":{b200k:"熊本4号-2",west:471130,south:117580,east:471620,north:117920},
"健軍":{b200k:"熊本4号-3",west:470680,south:117880,east:471175,north:118220},
"御船":{b200k:"熊本4号-4",west:470680,south:117580,east:471170,north:117920},
"草野":{b200k:"熊本5号-1",west:470225,south:119680,east:470720,north:120020},
"黒木":{b200k:"熊本5号-2",west:470225,south:119380,east:470720,north:119720},
"久留米":{b200k:"熊本5号-3",west:469775,south:119680,east:470270,north:120020},
"八女":{b200k:"熊本5号-4",west:469775,south:119380,east:470270,north:119720},
"高井川":{b200k:"熊本6号-1",west:470225,south:119080,east:470720,north:119420},
"山鹿":{b200k:"熊本6号-2",west:470225,south:118780,east:470720,north:119120},
"野町":{b200k:"熊本6号-3",west:469775,south:119080,east:470270,north:119420},
"関町":{b200k:"熊本6号-4",west:469775,south:118780,east:470270,north:119120},
"来民":{b200k:"熊本7号-1",west:470225,south:118480,east:470720,north:118820},
"植木":{b200k:"熊本7号-2",west:470225,south:118180,east:470720,north:118520},
"玉名":{b200k:"熊本7号-3",west:469775,south:118480,east:470270,north:118820},
"伊倉":{b200k:"熊本7号-4",west:469775,south:118180,east:470270,north:118520},
"熊本":{b200k:"熊本8号-1",west:470230,south:117880,east:470725,north:118220},
"宇土":{b200k:"熊本8号-2",west:470230,south:117580,east:470720,north:117920},
"肥後船津":{b200k:"熊本8号-3",west:469780,south:117880,east:470275,north:118220},
"網津":{b200k:"熊本8号-4",west:469780,south:117580,east:470270,north:117920},
"久留米西部":{b200k:"熊本9号-1",west:469325,south:119680,east:469820,north:120020},
"羽犬塚":{b200k:"熊本9号-2",west:469325,south:119380,east:469820,north:119720},
"佐賀北部":{b200k:"熊本9号-3",west:468875,south:119680,east:469370,north:120020},
"佐賀南部":{b200k:"熊本9号-4",west:468875,south:119380,east:469370,north:119720},
"柳川":{b200k:"熊本10号-1",west:469325,south:119080,east:469820,north:119420},
"大牟田":{b200k:"熊本10号-2",west:469325,south:118780,east:469820,north:119120},
"佐賀空港":{b200k:"熊本10号-3",west:468875,south:119080,east:469370,north:119420},
"荒尾":{b200k:"熊本11号-1",west:469325,south:118480,east:469820,north:118820},
"下沖洲":{b200k:"熊本11号-2",west:469325,south:118180,east:469820,north:118520},
"多比良":{b200k:"熊本11号-4",west:468875,south:118180,east:469370,north:118520},
"島原":{b200k:"熊本12号-3",west:468915,south:117880,east:469410,north:118220},
"雲仙":{b200k:"熊本12号-4",west:468880,south:117580,east:469370,north:117920},
"小城":{b200k:"熊本13号-1",west:468425,south:119680,east:468920,north:120020},
"牛津":{b200k:"熊本13号-2",west:468425,south:119380,east:468920,north:119720},
"多久":{b200k:"熊本13号-3",west:467975,south:119680,east:468470,north:120020},
"武雄":{b200k:"熊本13号-4",west:467975,south:119380,east:468470,north:119720},
"牛屋":{b200k:"熊本14号-1",west:468425,south:119080,east:468920,north:119420},
"多良":{b200k:"熊本14号-2",west:468425,south:118780,east:468920,north:119120},
"鹿島":{b200k:"熊本14号-3",west:467975,south:119080,east:468470,north:119420},
"古枝":{b200k:"熊本14号-4",west:467975,south:118780,east:468470,north:119120},
"肥前大浦":{b200k:"熊本15号-1",west:468425,south:118480,east:468920,north:118820},
"湯江":{b200k:"熊本15号-2",west:468425,south:118180,east:468920,north:118520},
"多良岳":{b200k:"熊本15号-3",west:467975,south:118480,east:468470,north:118820},
"諫早":{b200k:"熊本15号-4",west:467975,south:118180,east:468470,north:118520},
"愛野":{b200k:"熊本16号-1",west:468440,south:117880,east:468935,north:118220},
"肥前小浜":{b200k:"熊本16号-2",west:468430,south:117580,east:468920,north:117920},
"諫早南部":{b200k:"熊本16号-3",west:467980,south:117880,east:468475,north:118220},
"畝野":{b200k:"八代1号-1",west:471130,south:117280,east:471620,north:117620},
"葉木":{b200k:"八代1号-2",west:471130,south:116980,east:471620,north:117320},
"甲佐":{b200k:"八代1号-3",west:470680,south:117280,east:471170,north:117620},
"柿迫":{b200k:"八代1号-4",west:470680,south:116980,east:471170,north:117320},
"椎原":{b200k:"八代2号-1",west:471130,south:116680,east:471620,north:117020},
"梶原":{b200k:"八代2号-2",west:471130,south:116380,east:471620,north:116720},
"宮園":{b200k:"八代2号-3",west:470680,south:116680,east:471170,north:117020},
"頭地":{b200k:"八代2号-4",west:470680,south:116380,east:471170,north:116720},
"多良木":{b200k:"八代3号-1",west:471130,south:116080,east:471620,north:116420},
"免田":{b200k:"八代3号-2",west:471130,south:115780,east:471620,north:116120},
"肥後田代":{b200k:"八代3号-3",west:470680,south:116080,east:471170,north:116420},
"人吉":{b200k:"八代3号-4",west:470680,south:115780,east:471170,north:116120},
"白髪岳":{b200k:"八代4号-1",west:471130,south:115480,east:471620,north:115820},
"日向大久保":{b200k:"八代4号-2",west:471130,south:115180,east:471620,north:115520},
"肥後大畑":{b200k:"八代4号-3",west:470680,south:115480,east:471170,north:115820},
"えびの":{b200k:"八代4号-4",west:470680,south:115180,east:471170,north:115520},
"松橋":{b200k:"八代5号-1",west:470230,south:117280,east:470720,north:117620},
"鏡":{b200k:"八代5号-2",west:470230,south:116980,east:470720,north:117320},
"松合":{b200k:"八代5号-3",west:469780,south:117280,east:470270,north:117620},
"八代":{b200k:"八代5号-4",west:469780,south:116980,east:470270,north:117320},
"坂本":{b200k:"八代6号-1",west:470230,south:116680,east:470720,north:117020},
"中津道":{b200k:"八代6号-2",west:470230,south:116380,east:470720,north:116720},
"日奈久":{b200k:"八代6号-3",west:469780,south:116680,east:470270,north:117020},
"田浦":{b200k:"八代6号-4",west:469780,south:116380,east:470270,north:116720},
"高沢":{b200k:"八代7号-1",west:470230,south:116080,east:470720,north:116420},
"一勝地":{b200k:"八代7号-2",west:470230,south:115780,east:470720,north:116120},
"佐敷":{b200k:"八代7号-3",west:469780,south:116080,east:470270,north:116420},
"大関山":{b200k:"八代7号-4",west:469760,south:115780,east:470250,north:116120},
"大塚":{b200k:"八代8号-1",west:470230,south:115480,east:470720,north:115820},
"吉松":{b200k:"八代8号-2",west:470230,south:115180,east:470720,north:115520},
"山野":{b200k:"八代8号-3",west:469780,south:115480,east:470270,north:115820},
"大口":{b200k:"八代8号-4",west:469780,south:115180,east:470270,north:115520},
"三角":{b200k:"八代9号-1",west:469330,south:117280,east:469820,north:117620},
"天草松島":{b200k:"八代9号-2",west:469330,south:116980,east:469820,north:117320},
"須川":{b200k:"八代9号-3",west:468880,south:117280,east:469370,north:117620},
"天草赤崎":{b200k:"八代9号-4",west:468880,south:116980,east:469370,north:117320},
"姫浦":{b200k:"八代10号-1",west:469330,south:116680,east:469820,north:117020},
"高戸":{b200k:"八代10号-2",west:469330,south:116380,east:469820,north:116720},
"大島子":{b200k:"八代10号-3",west:468880,south:116680,east:469370,north:117020},
"棚底":{b200k:"八代10号-4",west:468880,south:116380,east:469370,north:116720},
"計石":{b200k:"八代11号-1",west:469330,south:116080,east:469820,north:116420},
"水俣":{b200k:"八代11号-2",west:469290,south:115780,east:469780,north:116120},
"唐木崎":{b200k:"八代11号-3",west:468880,south:116080,east:469370,north:116420},
"湯出":{b200k:"八代12号-1",west:469330,south:115480,east:469820,north:115820},
"宮之元":{b200k:"八代12号-2",west:469330,south:115180,east:469820,north:115520},
"米ノ津":{b200k:"八代12号-3",west:468880,south:115480,east:469370,north:115820},
"出水":{b200k:"八代12号-4",west:468880,south:115180,east:469370,north:115520},
"口之津":{b200k:"八代13号-1",west:468430,south:117280,east:468920,north:117620},
"御領":{b200k:"八代13号-2",west:468430,south:116980,east:468920,north:117320},
"天草富岡":{b200k:"八代13号-4",west:467980,south:116980,east:468470,north:117320},
"本渡":{b200k:"八代14号-1",west:468430,south:116680,east:468920,north:117020},
"小宮地":{b200k:"八代14号-2",west:468430,south:116380,east:468920,north:116720},
"天草下田":{b200k:"八代14号-3",west:467980,south:116680,east:468470,north:117020},
"鬼海ヶ浦":{b200k:"八代14号-4",west:467980,south:116380,east:468470,north:116720},
"宮野河内":{b200k:"八代15号-1",west:468430,south:116080,east:468920,north:116420},
"薩摩鷹巣":{b200k:"八代15号-2",west:468430,south:115780,east:468920,north:116120},
"河浦":{b200k:"八代15号-3",west:467980,south:116080,east:468470,north:116420},
"牛深":{b200k:"八代15号-4",west:467980,south:115780,east:468470,north:116120},
"黒之瀬戸":{b200k:"八代16号-1",west:468430,south:115480,east:468920,north:115820},
"阿久根":{b200k:"八代16号-2",west:468430,south:115180,east:468920,north:115520},
"指江":{b200k:"八代16号-3",west:467980,south:115480,east:468470,north:115820},
"日向小林":{b200k:"鹿児島1号-1",west:471130,south:114880,east:471620,north:115220},
"高千穂峰":{b200k:"鹿児島1号-2",west:471130,south:114580,east:471620,north:114920},
"韓国岳":{b200k:"鹿児島1号-3",west:470680,south:114880,east:471170,north:115220},
"霧島温泉":{b200k:"鹿児島1号-4",west:470680,south:114580,east:471170,north:114920},
"高野":{b200k:"鹿児島2号-1",west:471130,south:114280,east:471615,north:114620},
"財部":{b200k:"鹿児島2号-2",west:471130,south:113980,east:471615,north:114320},
"日当山":{b200k:"鹿児島2号-3",west:470680,south:114280,east:471165,north:114620},
"国分":{b200k:"鹿児島2号-4",west:470680,south:113980,east:471165,north:114320},
"岩川":{b200k:"鹿児島3号-1",west:471130,south:113680,east:471615,north:114020},
"野方":{b200k:"鹿児島3号-2",west:471130,south:113380,east:471615,north:113720},
"牛根境":{b200k:"鹿児島3号-3",west:470680,south:113680,east:471165,north:114020},
"百引":{b200k:"鹿児島3号-4",west:470680,south:113380,east:471165,north:113720},
"持留":{b200k:"鹿児島4号-1",west:471130,south:113080,east:471615,north:113420},
"大隅高山":{b200k:"鹿児島4号-2",west:471130,south:112780,east:471615,north:113120},
"上祓川":{b200k:"鹿児島4号-3",west:470680,south:113080,east:471165,north:113420},
"鹿屋":{b200k:"鹿児島4号-4",west:470680,south:112780,east:471165,north:113120},
"栗野":{b200k:"鹿児島5号-1",west:470230,south:114880,east:470720,north:115220},
"横川":{b200k:"鹿児島5号-2",west:470230,south:114580,east:470720,north:114920},
"永野":{b200k:"鹿児島5号-3",west:469780,south:114880,east:470270,north:115220},
"薩摩黒木":{b200k:"鹿児島5号-4",west:469780,south:114580,east:470270,north:114920},
"石原":{b200k:"鹿児島6号-1",west:470230,south:114280,east:470715,north:114620},
"加治木":{b200k:"鹿児島6号-2",west:470230,south:113980,east:470715,north:114320},
"蒲生":{b200k:"鹿児島6号-3",west:469780,south:114280,east:470265,north:114620},
"脇元":{b200k:"鹿児島6号-4",west:469780,south:113980,east:470265,north:114320},
"桜島北部":{b200k:"鹿児島7号-1",west:470230,south:113680,east:470715,north:114020},
"桜島南部":{b200k:"鹿児島7号-2",west:470230,south:113380,east:470715,north:113720},
"鹿児島北部":{b200k:"鹿児島7号-3",west:469780,south:113680,east:470265,north:114020},
"鹿児島南部":{b200k:"鹿児島7号-4",west:469780,south:113380,east:470265,north:113720},
"垂水":{b200k:"鹿児島8号-1",west:470230,south:113080,east:470715,north:113420},
"瀬々串":{b200k:"鹿児島8号-3",west:469780,south:113080,east:470265,north:113420},
"喜入":{b200k:"鹿児島8号-4",west:469780,south:112780,east:470265,north:113120},
"湯田":{b200k:"鹿児島9号-1",west:469330,south:114880,east:469820,north:115220},
"宮之城":{b200k:"鹿児島9号-2",west:469330,south:114580,east:469820,north:114920},
"紫尾山":{b200k:"鹿児島9号-3",west:468880,south:114880,east:469370,north:115220},
"東郷":{b200k:"鹿児島9号-4",west:468880,south:114580,east:469370,north:114920},
"塔之原":{b200k:"鹿児島10号-1",west:469330,south:114280,east:469815,north:114620},
"薩摩郡山":{b200k:"鹿児島10号-2",west:469330,south:113980,east:469815,north:114320},
"川内":{b200k:"鹿児島10号-3",west:468880,south:114280,east:469365,north:114620},
"串木野":{b200k:"鹿児島10号-4",west:468880,south:113980,east:469365,north:114320},
"伊集院":{b200k:"鹿児島11号-1",west:469330,south:113680,east:469815,north:114020},
"春山":{b200k:"鹿児島11号-2",west:469330,south:113380,east:469815,north:113720},
"長里":{b200k:"鹿児島11号-3",west:468880,south:113680,east:469365,north:114020},
"伊作":{b200k:"鹿児島11号-4",west:468880,south:113380,east:469365,north:113720},
"神殿":{b200k:"鹿児島12号-1",west:469330,south:113080,east:469815,north:113420},
"知覧":{b200k:"鹿児島12号-2",west:469330,south:112780,east:469815,north:113120},
"唐仁原":{b200k:"鹿児島12号-3",west:468880,south:113080,east:469365,north:113420},
"加世田":{b200k:"鹿児島12号-4",west:468880,south:112780,east:469365,north:113120},
"大川":{b200k:"鹿児島13号-1",west:468430,south:114880,east:468920,north:115220},
"西方":{b200k:"鹿児島13号-2",west:468430,south:114580,east:468920,north:114920},
"羽島":{b200k:"鹿児島14号-1",west:468430,south:114280,east:468915,north:114620},
"荒川浜":{b200k:"鹿児島14号-2",west:468430,south:113980,east:468915,north:114320},
"片浦":{b200k:"鹿児島16号-1",west:468330,south:113020,east:468815,north:113360},
"野間岳":{b200k:"鹿児島16号-2",west:468430,south:112780,east:468915,north:113120},
"上名":{b200k:"開聞岳1号-1",west:471130,south:112480,east:471615,north:112820},
"半ヶ石":{b200k:"開聞岳1号-2",west:471130,south:112180,east:471615,north:112520},
"神川":{b200k:"開聞岳1号-3",west:470680,south:112480,east:471165,north:112820},
"大根占":{b200k:"開聞岳1号-4",west:470680,south:112180,east:471165,north:112520},
"稲尾岳":{b200k:"開聞岳2号-1",west:471130,south:111880,east:471615,north:112220},
"辺塚":{b200k:"開聞岳2号-3",west:470680,south:111880,east:471165,north:112220},
"浜尻":{b200k:"開聞岳2号-4",west:470680,south:111580,east:471165,north:111920},
"西之表":{b200k:"開聞岳4号-2",west:471150,south:110380,east:471630,north:110720},
"二月田":{b200k:"開聞岳5号-1",west:470230,south:112480,east:470715,north:112820},
"指宿":{b200k:"開聞岳5号-2",west:470230,south:112180,east:470715,north:112520},
"今和泉":{b200k:"開聞岳5号-3",west:469780,south:112480,east:470265,north:112820},
"開聞岳":{b200k:"開聞岳5号-4",west:469780,south:112180,east:470265,north:112520},
"伊座敷":{b200k:"開聞岳6号-1",west:470230,south:111820,east:470715,north:112160},
"佐多岬":{b200k:"開聞岳6号-2",west:470230,south:111520,east:470715,north:111860},
"長崎鼻":{b200k:"開聞岳6号-3",west:469780,south:111880,east:470265,north:112220},
"薩摩石垣":{b200k:"開聞岳9号-1",west:469330,south:112480,east:469815,north:112820},
"三俣":{b200k:"開聞岳9号-2",west:469330,south:112180,east:469815,north:112520},
"枕崎":{b200k:"開聞岳9号-3",west:468880,south:112473,east:469365,north:112813},
"薩摩竹島":{b200k:"開聞岳12号-1",west:469335,south:110680,east:469815,north:111020},
"薩摩硫黄島":{b200k:"開聞岳12号-3",west:468885,south:110620,east:469365,north:110960},
"坊":{b200k:"開聞岳13号-1",west:468430,south:112480,east:468915,north:112820},
"内之浦":{b200k:"開聞岳東13号-3",west:471580,south:112480,east:472065,north:112820},
"岸良":{b200k:"開聞岳東13号-4",west:471580,south:112180,east:472065,north:112520},
"国上":{b200k:"開聞岳東16号-3",west:471585,south:110695,east:472065,north:111035},
"安納":{b200k:"開聞岳東16号-4",west:471585,south:110380,east:472065,north:110720},
"浜津脇":{b200k:"屋久島東13号-3",west:471375,south:110080,east:471855,north:110420},
"大隅野間":{b200k:"屋久島1号-2",west:471285,south:109780,east:471765,north:110120},
"島間":{b200k:"屋久島2号-1",west:471065,south:109480,east:471545,north:109820},
"上中":{b200k:"屋久島2号-2",west:471075,south:109180,east:471555,north:109520},
"安房":{b200k:"屋久島6号-2",west:470190,south:109090,east:470670,north:109430},
"屋久宮之浦":{b200k:"屋久島6号-3",west:469910,south:109390,east:470390,north:109730},
"宮之浦岳":{b200k:"屋久島6号-4",west:469770,south:109090,east:470250,north:109430},
"尾之間":{b200k:"屋久島7号-3",west:469910,south:108790,east:470390,north:109130},
"一湊":{b200k:"屋久島10号-1",west:469485,south:109390,east:469965,north:109730},
"永田岳":{b200k:"屋久島10号-2",west:469340,south:109100,east:469820,north:109440},
"栗生":{b200k:"屋久島11号-1",west:469455,south:108790,east:469935,north:109130},
"口永良部島":{b200k:"屋久島14号-1",west:468495,south:109480,east:468975,north:109820},
"佐須奈":{b200k:"厳原9号-1",west:465720,south:124480,east:466225,north:124820},
"琴":{b200k:"厳原9号-2",west:465720,south:124180,east:466225,north:124520},
"佐護":{b200k:"厳原9号-3",west:465270,south:124480,east:465775,north:124820},
"鹿見":{b200k:"厳原9号-4",west:465270,south:124180,east:465775,north:124520},
"志多賀":{b200k:"厳原10号-1",west:465725,south:123880,east:466225,north:124220},
"仁位":{b200k:"厳原10号-4",west:465425,south:123580,east:465925,north:123920},
"三根":{b200k:"厳原10号-3",west:465275,south:123880,east:465775,north:124220},
"廻":{b200k:"厳原14号-2",west:464975,south:123580,east:465475,north:123920},
"鶏知":{b200k:"厳原11号-3",west:465425,south:123280,east:465925,north:123620},
"阿連":{b200k:"厳原15号-1",west:464975,south:123280,east:465475,north:123620},
"厳原":{b200k:"厳原11号-4",west:465275,south:122980,east:465775,north:123320},
"小茂田":{b200k:"厳原15号-2",west:464825,south:122980,east:465325,north:123320},
"豆酘":{b200k:"厳原16号-1",west:464975,south:122680,east:465475,north:123020},
"泉":{b200k:"厳原北12号-2",west:465720,south:124780,east:466225,north:125120},
"芦辺":{b200k:"唐津2号-3",west:467075,south:121480,east:467575,north:121820},
"印通寺":{b200k:"唐津2号-4",west:467075,south:121180,east:467575,north:121520},
"呼子":{b200k:"唐津3号-2",west:467525,south:120580,east:468020,north:120920},
"加唐島":{b200k:"唐津3号-3",west:467280,south:120880,east:467775,north:121220},
"波戸岬":{b200k:"唐津3号-4",west:467050,south:120580,east:467545,north:120920},
"唐津":{b200k:"唐津4号-1",west:467525,south:120280,east:468020,north:120620},
"徳須恵":{b200k:"唐津4号-2",west:467525,south:119980,east:468020,north:120320},
"高串":{b200k:"唐津4号-3",west:467075,south:120280,east:467570,north:120620},
"今福":{b200k:"唐津4号-4",west:467075,south:119980,east:467570,north:120320},
"勝本":{b200k:"唐津5号-2",west:466745,south:121780,east:467245,north:122120},
"湯本":{b200k:"唐津6号-1",west:466625,south:121480,east:467125,north:121820},
"郷ノ浦":{b200k:"唐津6号-2",west:466625,south:121180,east:467125,north:121520},
"鷹島":{b200k:"唐津8号-1",west:466625,south:120280,east:467120,north:120620},
"志佐":{b200k:"唐津8号-2",west:466625,south:119980,east:467120,north:120320},
"的山大島":{b200k:"唐津8号-3",west:466175,south:120305,east:466670,north:120645},
"平戸":{b200k:"唐津8号-4",west:466175,south:119980,east:466670,north:120320},
"生月島北部":{b200k:"唐津12号-1",west:465725,south:120280,east:466220,north:120620},
"生月":{b200k:"唐津12号-2",west:465725,south:119980,east:466220,north:120320},
"伊万里":{b200k:"長崎1号-1",west:467525,south:119680,east:468020,north:120020},
"有田":{b200k:"長崎1号-2",west:467525,south:119380,east:468020,north:119720},
"楠久":{b200k:"長崎1号-3",west:467075,south:119680,east:467570,north:120020},
"蔵宿":{b200k:"長崎1号-4",west:467075,south:119380,east:467570,north:119720},
"嬉野":{b200k:"長崎2号-1",west:467525,south:119080,east:468020,north:119420},
"彼杵":{b200k:"長崎2号-2",west:467525,south:118780,east:468020,north:119120},
"早岐":{b200k:"長崎2号-3",west:467075,south:119080,east:467570,north:119420},
"川棚":{b200k:"長崎2号-4",west:467075,south:118780,east:467570,north:119120},
"武留路山":{b200k:"長崎3号-1",west:467525,south:118480,east:468020,north:118820},
"大村":{b200k:"長崎3号-2",west:467525,south:118180,east:468020,north:118520},
"喰場":{b200k:"長崎3号-3",west:467075,south:118480,east:467570,north:118820},
"長浦":{b200k:"長崎3号-4",west:467075,south:118180,east:467570,north:118520},
"長崎東北部":{b200k:"長崎4号-1",west:467530,south:117880,east:468025,north:118220},
"長崎東南部":{b200k:"長崎4号-2",west:467530,south:117580,east:468020,north:117920},
"長崎西北部":{b200k:"長崎4号-3",west:467080,south:117880,east:467575,north:118220},
"長崎西南部":{b200k:"長崎4号-4",west:467080,south:117580,east:467570,north:117920},
"江迎":{b200k:"長崎5号-1",west:466625,south:119680,east:467120,north:120020},
"佐世保北部":{b200k:"長崎5号-2",west:466625,south:119380,east:467120,north:119720},
"肥前川内":{b200k:"長崎5号-3",west:466175,south:119680,east:466670,north:120020},
"楠泊":{b200k:"長崎5号-4",west:466175,south:119380,east:466670,north:119720},
"佐世保南部":{b200k:"長崎6号-1",west:466625,south:119080,east:467120,north:119420},
"面高":{b200k:"長崎6号-2",west:466625,south:118780,east:467120,north:119120},
"肥前黒島":{b200k:"長崎6号-3",west:466175,south:119080,east:466670,north:119420},
"蛎浦":{b200k:"長崎6号-4",west:466175,south:118780,east:466670,north:119120},
"板浦":{b200k:"長崎7号-1",west:466625,south:118480,east:467120,north:118820},
"神浦":{b200k:"長崎7号-2",west:466625,south:118180,east:467120,north:118520},
"釜ノ浦":{b200k:"長崎7号-3",west:466175,south:118480,east:466670,north:118820},
"池島":{b200k:"長崎7号-4",west:466175,south:118180,east:466670,north:118520},
"三重":{b200k:"長崎8号-1",west:466630,south:117880,east:467125,north:118220},
"紐差":{b200k:"長崎9号-1",west:465725,south:119680,east:466220,north:120020},
"志々伎":{b200k:"長崎9号-2",west:465725,south:119380,east:466220,north:119720},
"野子":{b200k:"長崎9号-4",west:465275,south:119380,east:465770,north:119720},
"大立島":{b200k:"長崎10号-2",west:465725,south:118780,east:466220,north:119120},
"肥前江島":{b200k:"長崎10号-4",west:465275,south:118630,east:465770,north:118970},
"宇久島":{b200k:"長崎13号-3",west:464585,south:119620,east:465080,north:119960},
"小値賀島":{b200k:"長崎13号-4",west:464435,south:119380,east:464930,north:119720},
"頭ヶ島":{b200k:"長崎14号-2",west:464825,south:118780,east:465320,north:119120},
"津和崎":{b200k:"長崎14号-3",west:464435,south:119080,east:464930,north:119420},
"立串":{b200k:"長崎14号-4",west:464375,south:118780,east:464870,north:119120},
"友住":{b200k:"長崎15号-1",west:464825,south:118480,east:465320,north:118820},
"有川":{b200k:"長崎15号-3",west:464375,south:118480,east:464870,north:118820},
"奈良尾":{b200k:"長崎15号-4",west:464315,south:118180,east:464810,north:118520},
"佐尾":{b200k:"長崎16号-3",west:464380,south:117880,east:464875,north:118220},
"千々":{b200k:"野母崎1号-1",west:467350,south:117280,east:467840,north:117620},
"肥前高島":{b200k:"野母崎1号-3",west:466900,south:117280,east:467390,north:117620},
"天草高浜":{b200k:"野母崎2号-2",west:467530,south:116380,east:468020,north:116720},
"大江":{b200k:"野母崎3号-1",west:467530,south:116080,east:468020,north:116420},
"魚貫崎":{b200k:"野母崎3号-2",west:467530,south:115780,east:468020,north:116120},
"野母崎":{b200k:"野母崎1号-4",west:466900,south:116980,east:467390,north:117320},
"里":{b200k:"甑島1号-2",west:467540,south:114430,east:468030,north:114770},
"海鼠池":{b200k:"甑島1号-4",west:467080,south:114580,east:467570,north:114920},
"中甑":{b200k:"甑島2号-3",west:467080,south:114280,east:467565,north:114620},
"青瀬":{b200k:"甑島6号-2",west:466810,south:113980,east:467295,north:114320},
"手打":{b200k:"甑島7号-1",west:466630,south:113680,east:467115,north:114020},
"薩摩黒島":{b200k:"黒島3号-2",west:467535,south:110830,east:468015,north:111170},
"宇治群島":{b200k:"黒島9号-2",west:465820,south:112060,east:466305,north:112400},
"草垣群島":{b200k:"黒島11号-2",west:465735,south:110920,east:466215,north:111260},
"口之島":{b200k:"中之島1号-1",west:467595,south:107740,east:468075,north:108080},
"中之島":{b200k:"中之島1号-2",west:467355,south:107260,east:467830,north:107600},
"臥蛇島":{b200k:"中之島5号-4",west:466185,south:107380,east:466660,north:107720},
"諏訪之瀬島":{b200k:"中之島7号-1",west:466625,south:106540,east:467100,north:106880},
"宝島":{b200k:"宝島14号-1",west:465060,south:104720,east:465535,north:105060},
"横当島":{b200k:"宝島16号-3",west:464175,south:103540,east:464645,north:103880},
"喜界島北部":{b200k:"奄美大島2号-2",west:467690,south:101920,east:468160,north:102260},
"喜界島南部":{b200k:"奄美大島3号-1",west:467570,south:101620,east:468040,north:101960},
"笠利崎":{b200k:"奄美大島5号-2",west:466640,south:102580,east:467110,north:102920},
"奄美空港":{b200k:"奄美大島6号-1",west:466640,south:102280,east:467110,north:102620},
"赤尾木":{b200k:"奄美大島6号-2",west:466640,south:101980,east:467110,north:102320},
"龍郷":{b200k:"奄美大島6号-3",west:466190,south:102280,east:466660,north:102620},
"名瀬東部":{b200k:"奄美大島6号-4",west:466190,south:101980,east:466660,north:102320},
"奄美小湊":{b200k:"奄美大島7号-3",west:466190,south:101680,east:466660,north:102020},
"名瀬西部":{b200k:"奄美大島10号-2",west:465740,south:101980,east:466210,north:102320},
"大棚":{b200k:"奄美大島10号-4",west:465290,south:101980,east:465760,north:102320},
"住用":{b200k:"奄美大島11号-1",west:465740,south:101680,east:466210,north:102020},
"山間":{b200k:"奄美大島11号-2",west:465740,south:101380,east:466210,north:101720},
"湯湾":{b200k:"奄美大島11号-3",west:465290,south:101680,east:465760,north:102020},
"奄美久慈":{b200k:"奄美大島11号-4",west:465290,south:101380,east:465760,north:101720},
"節子":{b200k:"奄美大島12号-1",west:465740,south:101080,east:466210,north:101420},
"古仁屋":{b200k:"奄美大島12号-3",west:465290,south:101080,east:465760,north:101420},
"秋徳":{b200k:"奄美大島12号-4",west:465290,south:100780,east:465760,north:101120},
"宇検":{b200k:"奄美大島15号-1",west:464840,south:101680,east:465310,north:102020},
"西古見":{b200k:"奄美大島15号-2",west:464840,south:101380,east:465310,north:101720},
"瀬武":{b200k:"奄美大島16号-1",west:464840,south:101080,east:465310,north:101420},
"与路":{b200k:"奄美大島16号-2",west:464840,south:100780,east:465310,north:101120},
"肥前赤島":{b200k:"福江1号-2",west:463985,south:119260,east:464480,north:119600},
"串島":{b200k:"福江3号-1",west:463925,south:118480,east:464420,north:118820},
"漁生浦":{b200k:"福江3号-2",west:463865,south:118180,east:464360,north:118520},
"浦":{b200k:"福江4号-1",west:463930,south:117880,east:464425,north:118220},
"蠑螺島":{b200k:"福江4号-2",west:463930,south:117580,east:464420,north:117920},
"岐宿":{b200k:"福江4号-3",west:463480,south:117910,east:463975,north:118250},
"五島福江":{b200k:"福江4号-4",west:463480,south:117580,east:463970,north:117920},
"肥前柏":{b200k:"福江8号-1",west:463030,south:117880,east:463525,north:118220},
"三井楽":{b200k:"福江8号-2",west:463030,south:117580,east:463520,north:117920},
"嵯峨ノ島":{b200k:"福江8号-4",west:462580,south:117580,east:463070,north:117920},
"崎山":{b200k:"富江1号-1",west:463750,south:117280,east:464240,north:117620},
"黄島":{b200k:"富江1号-2",west:463750,south:116980,east:464240,north:117320},
"富江":{b200k:"富江1号-3",west:463300,south:117280,east:463790,north:117620},
"坪":{b200k:"富江1号-4",west:463300,south:116980,east:463790,north:117320},
"玉之浦":{b200k:"富江5号-1",west:462850,south:117280,east:463340,north:117620},
"男島及女島":{b200k:"富江12号-4",west:461890,south:115090,east:462380,north:115430},
"山":{b200k:"徳之島1号-2",west:463940,south:100195,east:464410,north:100535},
"平土野":{b200k:"徳之島2号-1",west:463940,south:99880,east:464410,north:100220},
"伊仙":{b200k:"徳之島2号-2",west:463940,south:99580,east:464410,north:99920},
"沖永良部島東部":{b200k:"徳之島8号-2",west:463020,south:98470,east:463485,north:98810},
"沖永良部島西部":{b200k:"徳之島8号-4",west:462600,south:98350,east:463065,north:98690},
"井之川":{b200k:"徳之島東14号-3",west:464360,south:99880,east:464830,north:100220},
"亀津":{b200k:"徳之島東14号-4",west:464360,south:99580,east:464830,north:99920},
"与論島":{b200k:"与論島2号-2",west:462140,south:97180,east:462605,north:97520},
"奥":{b200k:"与論島3号-4",west:461480,south:96580,east:461945,north:96920},
"楚洲":{b200k:"与論島4号-3",west:461640,south:96280,east:462105,north:96620},
"安波":{b200k:"与論島4号-4",west:461640,south:95980,east:462105,north:96320},
"伊平屋島北部":{b200k:"与論島10号-1",west:460550,south:97330,east:461015,north:97670},
"与那":{b200k:"与論島8号-1",west:461230,south:96280,east:461695,north:96620},
"辺土名":{b200k:"与論島8号-2",west:461230,south:95980,east:461695,north:96320},
"大宜味":{b200k:"与論島8号-4",west:460780,south:95980,east:461245,north:96320},
"伊平屋島南部":{b200k:"与論島10号-2",west:460340,south:97030,east:460805,north:97370},
"伊是名島":{b200k:"与論島11号-1",west:460340,south:96730,east:460805,north:97070},
"仲宗根":{b200k:"与論島12号-2",west:460335,south:95980,east:460800,north:96320},
"伊江島":{b200k:"与論島12号-4",west:459870,south:95980,east:460335,north:96320},
"国頭平良":{b200k:"那覇5号-1",west:461210,south:95680,east:461675,north:96020},
"天仁屋":{b200k:"那覇5号-2",west:461210,south:95380,east:461675,north:95720},
"仲尾次":{b200k:"那覇5号-3",west:460780,south:95680,east:461245,north:96020},
"瀬嵩":{b200k:"那覇5号-4",west:460780,south:95380,east:461245,north:95720},
"宜野座":{b200k:"那覇6号-3",west:460680,south:95080,east:461140,north:95420},
"伊計島":{b200k:"那覇6号-4",west:460680,south:94780,east:461140,north:95120},
"名護":{b200k:"那覇9号-1",west:460340,south:95680,east:460805,north:96020},
"名護南部":{b200k:"那覇9号-2",west:460340,south:95380,east:460805,north:95720},
"瀬底島":{b200k:"那覇9号-3",west:459920,south:95680,east:460385,north:96020},
"金武":{b200k:"那覇10号-1",west:460315,south:95080,east:460775,north:95420},
"宮城島":{b200k:"那覇10号-2",west:460315,south:94780,east:460775,north:95120},
"石川":{b200k:"那覇10号-3",west:459885,south:95080,east:460345,north:95420},
"沖縄市北部":{b200k:"那覇10号-4",west:459885,south:94780,east:460345,north:95120},
"屋慶名":{b200k:"那覇11号-1",west:460335,south:94480,east:460795,north:94820},
"津堅":{b200k:"那覇11号-2",west:460315,south:94180,east:460775,north:94520},
"沖縄市南部":{b200k:"那覇11号-3",west:459890,south:94480,east:460350,north:94820},
"与那原":{b200k:"那覇11号-4",west:459885,south:94180,east:460345,north:94520},
"久高島":{b200k:"那覇12号-1",west:460315,south:93880,east:460775,north:94220},
"知念":{b200k:"那覇12号-3",west:459885,south:93880,east:460345,north:94220},
"北大東島":{b200k:"号-",west:472380,south:93160,east:472840,north:93500},
"南大東島":{b200k:"号-",west:472225,south:92860,east:472685,north:93200},
"高志保":{b200k:"那覇14号-2",west:459460,south:94780,east:459920,north:95120},
"大謝名":{b200k:"那覇15号-1",west:459460,south:94480,east:459920,north:94820},
"那覇":{b200k:"那覇15号-2",west:459440,south:94180,east:459900,north:94520},
"糸満":{b200k:"那覇16号-1",west:459440,south:93880,east:459900,north:94220},
"喜屋武岬":{b200k:"那覇16号-2",west:459440,south:93580,east:459900,north:93920},
"粟国島":{b200k:"久米島5号-1",west:457860,south:95530,east:458325,north:95870},
"渡嘉敷":{b200k:"久米島3号-2",west:458420,south:94210,east:458880,north:94550},
"座間味":{b200k:"久米島3号-4",west:457990,south:94170,east:458450,north:94510},
"阿波連岬":{b200k:"久米島4号-3",west:458100,south:93910,east:458560,north:94250},
"渡名喜島":{b200k:"久米島6号-2",west:457440,south:94780,east:457900,north:95120},
"久米島東部":{b200k:"久米島10号-2",west:456520,south:94720,east:456980,north:95060},
"久米島":{b200k:"久米島10号-4",west:456120,south:94720,east:456580,north:95060},
"久米島南部":{b200k:"久米島11号-3",west:456230,south:94420,east:456690,north:94760},
"フデ岩":{b200k:"宮古島1号-4",west:450799,south:89880,east:451302,north:90220},
"西平安名岬":{b200k:"宮古島2号-4",west:450895,south:89380,east:451350,north:89720},
"福北":{b200k:"宮古島3号-1",west:451310,south:89100,east:451765,north:89440},
"東平安名岬":{b200k:"宮古島3号-2",west:451310,south:88800,east:451765,north:89140},
"平良":{b200k:"宮古島3号-3",west:450895,south:89080,east:451350,north:89420},
"上地":{b200k:"宮古島3号-4",west:450855,south:88780,east:451310,north:89120},
"池間島":{b200k:"宮古島2号-3",west:450780,south:89540,east:451235,north:89880},
"伊良部島":{b200k:"宮古島7号-1",west:450460,south:89200,east:450915,north:89540},
"水納島":{b200k:"宮古島15号-2",west:448645,south:88900,east:449100,north:89240},
"多良間島":{b200k:"宮古島8号-1",west:448645,south:88600,east:449100,north:88940},
"魚釣島":{b200k:"魚釣島6号-4",west:444415,south:92500,east:444875,north:92840},
"平久保崎":{b200k:"石垣島1号-3",west:447240,south:88480,east:447695,north:88820},
"伊原間":{b200k:"石垣島1号-4",west:447240,south:88180,east:447695,north:88520},
"伊野田":{b200k:"石垣島2号-3",west:447065,south:87880,east:447520,north:88220},
"白保":{b200k:"石垣島2号-4",west:447065,south:87580,east:447520,north:87920},
"川平":{b200k:"石垣島6号-1",west:446640,south:87880,east:447095,north:88220},
"石垣":{b200k:"石垣島6号-2",west:446640,south:87580,east:447095,north:87920},
"小浜島":{b200k:"石垣島6号-4",west:446185,south:87460,east:446640,north:87800},
"竹富島":{b200k:"石垣島7号-1",west:446640,south:87320,east:447095,north:87660},
"黒島":{b200k:"石垣島11号-2",west:446065,south:87040,east:446520,north:87380},
"美原":{b200k:"石垣島10号-2",west:445735,south:87580,east:446190,north:87920},
"鳩間島":{b200k:"石垣島10号-3",west:445495,south:87880,east:445950,north:88220},
"船浦":{b200k:"石垣島10号-4",west:445300,south:87580,east:445755,north:87920},
"西表大原":{b200k:"石垣島11号-1",west:445735,south:87270,east:446190,north:87610},
"舟浮":{b200k:"石垣島11号-3",west:445300,south:87280,east:445755,north:87620},
"波照間島":{b200k:"石垣島12号-4",west:445495,south:86380,east:445950,north:86720},
"ウビラ石":{b200k:"石垣島15号-1",west:444900,south:87340,east:445355,north:87680},
"与那国島":{b200k:"号-",west:442525,south:87880,east:442980,north:88220},
"歯舞海馬島":{b200k:"色丹島11号-2",west:526800,south:156630,east:527370,north:156980},
"多楽島":{b200k:"色丹島11号-3",west:526500,south:156980,east:527070,north:157330},
"志発島":{b200k:"色丹島15号-2",west:525790,south:156435,east:526420,north:156785},
"ハルカリモシリ島":{b200k:"色丹島16号-2",west:526050,south:156085,east:526620,north:156435},
"勇留島":{b200k:"色丹島16号-3",west:525480,south:156210,east:526050,north:156560},
"秋勇留島":{b200k:"色丹島16号-4",west:525480,south:155860,east:526050,north:156210},
"水晶島":{b200k:"標津4号-1",west:524850,south:156130,east:525480,north:156480},
"作万別":{b200k:"標津5号-2",west:524370,south:157825,east:524940,north:158175},
"東沸":{b200k:"標津5号-4",west:523800,south:157825,east:524370,north:158175},
"シロマンベツ川":{b200k:"標津6号-3",west:523800,south:157475,east:524370,north:157825},
"シャリカリベツ":{b200k:"標津9号-2",west:523230,south:157825,east:523800,north:158175},
"米戸賀":{b200k:"標津10号-1",west:523230,south:157475,east:523800,north:157825},
"国後泊":{b200k:"標津10号-2",west:523470,south:157125,east:524100,north:157475},
"古釜布":{b200k:"標津1号-3",west:524580,south:158175,east:525210,north:158525},
"秩苅別":{b200k:"標津5号-1",west:523950,south:158175,east:524580,north:158525},
"オンネ湖":{b200k:"知床岬3号-1",west:525120,south:159225,east:525750,north:159575},
"摺鉢山":{b200k:"知床岬3号-2",west:525300,south:158875,east:525870,north:159225},
"エビカラウス山":{b200k:"知床岬3号-4",west:524730,south:158875,east:525300,north:159225},
"近布内":{b200k:"知床岬4号-1",west:524970,south:158525,east:525540,north:158875},
"ニキショロ湖":{b200k:"知床岬8号-1",west:524400,south:158525,east:524970,north:158875},
"安渡移矢岬":{b200k:"安渡移矢岬6号-3",west:527250,south:159925,east:527820,north:160275},
"ポンアトイヤ":{b200k:"安渡移矢岬6号-4",west:527250,south:159575,east:527820,north:159925},
"東ビロク湖":{b200k:"安渡移矢岬10号-2",west:526680,south:159575,east:527250,north:159925},
"ソコボイ":{b200k:"安渡移矢岬10号-3",west:526290,south:159925,east:526860,north:160275},
"礼文磯":{b200k:"安渡移矢岬11号-3",west:526320,south:159225,east:526950,north:159575},
"爺爺岳":{b200k:"安渡移矢岬14号-2",west:526110,south:159575,east:526680,north:159925},
"ルルイ岳":{b200k:"安渡移矢岬14号-3",west:525720,south:159925,east:526290,north:160275},
"円山":{b200k:"安渡移矢岬14号-4",west:525540,south:159575,east:526110,north:159925},
"乳呑路":{b200k:"安渡移矢岬15号-3",west:525750,south:159225,east:526320,north:159575},
//ここから140630追加
"斜古丹":{b200k:"色丹島1号-4",west:528315,south:157730,east:528945,north:158080},
"イネモシリ":{b200k:"色丹島2号-3",west:528315,south:157380,east:528945,north:157730},
"穴澗湾":{b200k:"色丹島6号-1",west:527685,south:157610,east:528315,north:157960},
"松ヶ浜湾":{b200k:"色丹島6号-2",west:527685,south:157260,east:528315,north:157610},
"ラッキベツ岬":{b200k:"蘂取3号-4",west:535470,south:163750,east:536100,north:164100},
"弁財崎":{b200k:"蘂取4号-3",west:535530,south:163400,east:536100,north:163750},
"硫黄岳":{b200k:"蘂取4号-4",west:535530,south:163050,east:536100,north:163400},
"蘂取岬":{b200k:"蘂取7号-2",west:534840,south:163750,east:535470,north:164100},
"長根山":{b200k:"蘂取8号-1",west:534960,south:163400,east:535530,north:163750},
"蘂取沼":{b200k:"蘂取8号-2",west:534960,south:163050,east:535530,north:163400},
"蘂取岳":{b200k:"蘂取8号-3",west:534390,south:163400,east:534960,north:163750},
"乙今牛山":{b200k:"蘂取8号-4",west:534390,south:163050,east:534960,north:163400},
"トウロ沼":{b200k:"蘂取12号-4",west:533820,south:163050,east:534390,north:163400},
"大岬":{b200k:"蘂取16西号-1",west:532230,south:163400,east:532800,north:163750},
"散布山":{b200k:"蘂取16西号-2",west:532230,south:163050,east:532860,north:163400},
"トシルリ":{b200k:"別飛9号-2",west:534210,south:162700,east:534840,north:163050},
"留茶留原":{b200k:"別飛9号-4",west:533640,south:162700,east:534210,north:163050},
"アンコロ川":{b200k:"別飛13号-2",west:533010,south:162700,east:533640,north:163050},
"乙知志岬":{b200k:"別飛14号-1",west:533250,south:162350,east:533880,north:162700},
"指臼山":{b200k:"別飛14号-3",west:532680,south:162350,east:533250,north:162700},
"指臼鼻":{b200k:"別飛14号-4",west:532680,south:162000,east:533250,north:162350},
"別飛":{b200k:"紗那1号-2",west:532440,south:162700,east:533010,north:163050},
"ナヨカ湾":{b200k:"紗那1号-4",west:531810,south:162700,east:532440,north:163050},
"三角山":{b200k:"紗那2号-1",west:532110,south:162350,east:532680,north:162700},
"小田萌山":{b200k:"紗那2号-2",west:532110,south:162000,east:532680,north:162350},
"程越":{b200k:"紗那3号-1",west:532200,south:161650,east:532770,north:162000},
"レブン沼":{b200k:"紗那3号-3",west:531630,south:161650,east:532200,north:162000},
"内保":{b200k:"紗那6号-1",west:531540,south:162350,east:532110,north:162700},
"年萌湖":{b200k:"紗那6号-2",west:531540,south:162000,east:532110,north:162350},
"珊湖崎":{b200k:"紗那6号-3",west:530910,south:162350,east:531480,north:162700},
"振別":{b200k:"紗那6号-4",west:530970,south:162000,east:531540,north:162350},
"天寧":{b200k:"紗那7号-3",west:531060,south:161650,east:531630,north:162000},
"チカッポロ":{b200k:"紗那7号-4",west:531150,south:161300,east:531720,north:161650},
"オワタリ川":{b200k:"紗那11号-1",west:530490,south:161650,east:531060,north:162000},
"単冠山":{b200k:"紗那11号-2",west:530580,south:161300,east:531150,north:161650},
"西単冠山":{b200k:"紗那11号-4",west:530010,south:161300,east:530580,north:161650},
"野塚崎":{b200k:"紗那12号-1",west:530580,south:160950,east:531150,north:161300},
"入里節":{b200k:"紗那12号-3",west:530010,south:160950,east:530580,north:161300},
"阿登佐岳":{b200k:"紗那15号-2",west:529440,south:161300,east:530010,north:161650},
"神居古丹":{b200k:"紗那16号-1",west:529440,south:160950,east:530010,north:161300},
"メナトイ崎":{b200k:"得茂別湖9号-3",west:530010,south:160600,east:530580,north:160950},
"得茂別湖":{b200k:"得茂別湖13号-1",west:529440,south:160600,east:530010,north:160950},
"得茂別":{b200k:"得茂別湖13号-2",west:529815,south:160250,east:530385,north:160600},
"六甲":{b200k:"得茂別湖13号-4",west:529245,south:160250,east:529815,north:160600},
"萌消崎":{b200k:"安渡移矢岬1号-1",west:528870,south:160600,east:529440,north:160950},
"丹根萌":{b200k:"安渡移矢岬1号-2",west:528675,south:160250,east:529245,north:160600},
"ベルタルベ山":{b200k:"安渡移矢岬2号-1",west:528675,south:159900,east:529305,north:160250},
//ここまで140630追加
"琵琶瀬(延伸分図)":{b200k:"",west:521970,south:154760,east:522120,north:154800},
"登栄床(延伸分図)":{b200k:"",west:517585,south:158980,east:517645,north:159080},
"晩成(延伸分図)":{b200k:"",west:516665,south:153220,east:516750,north:153320},
"荻伏(延伸分図)":{b200k:"",west:513145,south:152035,east:513360,north:152115},
"知来別(延伸分図)":{b200k:"",west:511745,south:163180,east:511890,north:163300},
"登別温泉(延伸分図)":{b200k:"",west:508565,south:152960,east:508625,north:153020},
"尻屋(延伸分図)":{b200k:"",west:509200,south:149100,east:509340,north:149190},
"洞爺湖温泉(延伸分図)":{b200k:"",west:506520,south:153250,east:506610,north:153320},
"佐井(延伸分図)":{b200k:"",west:507000,south:149080,east:507060,north:149140},
"白神岬(延伸分図)":{b200k:"",west:505120,south:148680,east:505320,north:148860},
"松前小島(分図)":{b200k:"",west:503190,south:148830,east:503370,north:148950},
"陸中中野(延伸分図)":{b200k:"",west:510255,south:145180,east:510440,north:145380},
"茂浦(延伸分図)":{b200k:"",west:507120,south:147580,east:507300,north:147690},
"龍飛崎(延伸分図)":{b200k:"",west:505140,south:148500,east:505320,north:148680},
"能代(延伸分図)":{b200k:"",west:503880,south:144690,east:503930,north:144750},
"小名浜(延伸分図)":{b200k:"",west:507120,south:132840,east:507210,north:132960},
"神栖(延伸分図)":{b200k:"",west:506720,south:128980,east:506760,north:129080},
"久六島(分図)":{b200k:"",west:502170,south:145890,east:502230,north:145950},
"戸賀(延伸分図)":{b200k:"",west:502860,south:143955,east:502980,north:144080},
"飛島(分図)":{b200k:"",west:502260,south:141030,east:502470,north:141190},
//"湯野浜(延伸分図)":{b200k:"",west:502980,south:139480,east:503040,north:139580}, 140630変更
"湯野浜(延伸分図)":{b200k:"",west:502960,south:139480,east:503040,north:139580},
"粟島(分図)":{b200k:"",west:501150,south:138330,east:501390,north:138600},
"稲荷岡(延伸分図)":{b200k:"",west:501180,south:136780,east:501240,north:136920},
"真鶴岬(延伸分図)":{b200k:"",west:500940,south:126100,east:501060,north:126280},
"川奈(延伸分図)":{b200k:"",west:500820,south:125830,east:500910,north:125920},
"大野原島(分図)":{b200k:"",west:501750,south:122540,east:501810,north:122590},
"銭洲(分図)":{b200k:"",west:499710,south:122160,east:499830,north:122280},
"藺灘波島(分図)":{b200k:"",west:501450,south:121110,east:501540,north:121170},
"青ヶ島(分図)":{b200k:"",west:503070,south:116760,east:503250,north:116920},
"ベヨネース列岩(分図)":{b200k:"",west:503670,south:114750,east:503730,north:114810},
"須美寿島(分図)":{b200k:"",west:504150,south:113130,east:504210,north:113220},
"孀婦岩(分図)":{b200k:"",west:505200,south:107220,east:505260,north:107280},
"母島北部(延伸分図)":{b200k:"",west:511600,south:96130,east:511700,north:96210},
"南鳥島(分図)":{b200k:"",west:554280,south:87390,east:554370,north:87490},
"沖ノ鳥島(分図)":{b200k:"",west:489830,south:73470,east:490000,north:73560},
"嫁島(分図)":{b200k:"",west:511920,south:98910,east:512040,north:99030},
"西之島(分図)":{b200k:"",west:507115,south:98065,east:507205,north:98125},
"柏崎(延伸分図)":{b200k:"",west:498470,south:134380,east:498550,north:134460},
"小木(延伸分図)":{b200k:"",west:497520,south:136080,east:497700,north:136240},
"名立大町(延伸分図)":{b200k:"",west:496640,south:133500,east:496750,north:133590},
"静岡東部(延伸分図)":{b200k:"",west:498610,south:125910,east:498700,north:126010},
"神子元島(延伸分図)":{b200k:"",west:500160,south:124440,east:500220,north:124480},
"宇出津(延伸分図)":{b200k:"",west:494040,south:134360,east:494190,north:134500},
"田原(延伸分図)":{b200k:"",west:494550,south:124740,east:494700,north:124820},
"珠洲岬(延伸分図)":{b200k:"",west:494420,south:134980,east:494540,north:135060},
// "七ッ島(分図)":{b200k:"",west:492650,south:135270,east:492900,north:135440}, 140630変更
"七ツ島(分図)":{b200k:"",west:492650,south:135270,east:492900,north:135440},
"三国(延伸分図)":{b200k:"",west:489950,south:130200,east:489990,north:130250},
"越前蒲生(延伸分図)":{b200k:"",west:489480,south:129580,east:489560,north:129650},
"松阪港(延伸分図)":{b200k:"",west:491850,south:124480,east:491940,north:124560},
"錦(延伸分図)":{b200k:"",west:491400,south:123210,east:491580,north:123320},
"九鬼(延伸分図)":{b200k:"",west:490500,south:122250,east:490600,north:122420},
"丹後平田(延伸分図)":{b200k:"",west:486870,south:128310,east:487140,north:128400},
"成生岬(延伸分図)":{b200k:"",west:487470,south:128400,east:487620,north:128580},
// "岸和田西部(延伸分図)":{b200k:"",west:486715,south:123880,east:486975,north:124045}, 140630変更
"岸和田西部(延伸分図)":{b200k:"",west:486705,south:123880,east:486970,north:124045},
"神戸南部(延伸分図)":{b200k:"",west:486870,south:124720,east:487050,north:124820},
"加太(延伸分図)":{b200k:"",west:486350,south:123180,east:486475,north:123270},
"紀伊白浜(延伸分図)":{b200k:"",west:487170,south:121110,east:487350,north:121220},
"真浦(延伸分図)":{b200k:"",west:484675,south:124855,east:485040,north:124920},
"諭鶴羽山(延伸分図)":{b200k:"",west:485310,south:122940,east:485420,north:123060},
"水ノ子礁(分図)":{b200k:"",west:483840,south:124160,east:483900,north:124200},
"阿部(延伸分図)":{b200k:"",west:485080,south:121760,east:485370,north:121910},
"室戸岬(延伸分図)":{b200k:"",west:482980,south:119640,east:483120,north:119720},
"竹島(分図)":{b200k:"",west:474660,south:134010,east:474780,north:134130},
"鞆(延伸分図)":{b200k:"",west:480390,south:123500,east:480510,north:123600},
"四阪島(分図)":{b200k:"",west:479340,south:122760,east:479500,north:122880},
"平田(延伸分図)":{b200k:"",west:478290,south:127800,east:478380,north:127860},
"久賀(延伸分図)":{b200k:"",west:476360,south:122390,east:476420,north:122495},
"安下庄(延伸分図)":{b200k:"",west:476555,south:122035,east:476640,north:122120},
"平郡島東部(延伸分図)":{b200k:"",west:476510,south:121580,east:476670,north:121770},
"伊予青島(分図)":{b200k:"",west:476900,south:121425,east:476980,north:121470},
"水場(延伸分図)":{b200k:"",west:475110,south:121920,east:475150,north:121960},
"宇和島(分図)":{b200k:"",west:475230,south:121420,east:475335,north:121480},
"水ノ子島(分図)":{b200k:"",west:475810,south:118930,east:475870,north:118990},
"三隅(延伸分図)":{b200k:"",west:474570,south:125370,east:474705,north:125490},
"須佐(延伸分図)":{b200k:"",west:473700,south:124770,east:473850,north:124860},
"通(延伸分図)":{b200k:"",west:472560,south:124180,east:472680,north:124280},
"蒲江(延伸分図)":{b200k:"",west:475180,south:118140,east:475260,north:118220},
"岩屋(延伸分図)":{b200k:"",west:470520,south:122380,east:470700,north:122500},
"筑前沖ノ島(分図)":{b200k:"",west:468330,south:123210,east:468450,north:123330},
"小呂島(分図)":{b200k:"",west:468060,south:121860,east:468180,north:121980},
"三池島(分図)":{b200k:"",west:469260,south:118920,east:469290,north:118950},
"指江(延伸分図)":{b200k:"",west:467820,south:115680,east:467980,north:115820},
"伊作(延伸分図)":{b200k:"",west:468780,south:113520,east:468880,north:113640},
"西之表(延伸分図)":{b200k:"",west:471000,south:110580,east:471150,north:110820},
"デン島(分図)":{b200k:"",west:468330,south:110670,east:468420,north:110730},
"ヤクロ瀬(分図)":{b200k:"",west:469110,south:110560,east:469200,north:110620},
"内之浦(延伸分図)":{b200k:"",west:472050,south:112575,east:472085,north:112635},
"大隅野間(延伸分図)":{b200k:"",west:471240,south:109790,east:471310,north:109870},
"島間(延伸分図)":{b200k:"",west:471045,south:109595,east:471090,north:109695},
"印通寺(延伸分図)":{b200k:"",west:467430,south:121410,east:467730,north:121500},
"加唐島(延伸分図)":{b200k:"",west:467700,south:121220,east:468000,north:121320},
"帆上ノ瀬(分図)":{b200k:"",west:465870,south:119225,east:465930,north:119265},
"中の瀬(分図)":{b200k:"",west:468135,south:114645,east:468210,north:114705},
"鷹島(分図)":{b200k:"",west:467010,south:113175,east:467085,north:113235},
"津倉瀬(分図)":{b200k:"",west:467040,south:112680,east:467100,north:112740},
"口之島(延伸分図)":{b200k:"",west:468060,south:108080,east:468300,north:108210},
"平島(分図)":{b200k:"",west:466260,south:106800,east:466380,north:106920},
"悪石島(分図)":{b200k:"",west:466470,south:105990,east:466650,north:106140},
"宝島(延伸分図)":{b200k:"",west:465480,south:105060,east:465750,north:105240},
"サンドン岩(分図)":{b200k:"",west:467160,south:103470,east:467250,north:103560},
"白瀬(分図)":{b200k:"",west:463665,south:119445,east:463725,north:119505},
"肥前鳥島(分図)":{b200k:"",west:461160,south:116060,east:461220,north:116120},
"鮫瀬(分図)":{b200k:"",west:462030,south:115050,east:462090,north:115110},
"安波(延伸分図)":{b200k:"",west:461640,south:95850,east:461790,north:96010},
"石川(延伸分図)":{b200k:"",west:460230,south:95380,east:460380,north:95460},
"沖大東島(分図)":{b200k:"",west:472200,south:88020,east:472320,north:88140},
"高志保(延伸分図)":{b200k:"",west:459720,south:95080,east:459920,north:95220},
"慶伊瀬島(分図)":{b200k:"",west:459085,south:94470,east:459330,north:94605},
"ルカン礁(分図)":{b200k:"",west:459060,south:93935,east:459180,north:94020},
"硫黄鳥島(分図)":{b200k:"",west:461550,south:100280,east:461680,north:100400},
"久米鳥島(分図)":{b200k:"",west:456540,south:95700,east:456630,north:95790},
"上地(延伸分図)":{b200k:"",west:450840,south:88930,east:450940,north:89040},
"大正島(分図)":{b200k:"",west:448380,south:93270,east:448440,north:93360},
"久場島(分図)":{b200k:"",west:445200,south:93270,east:445320,north:93360},
"中御神島(分図)":{b200k:"",west:444780,south:87060,east:444900,north:87150},
"津屋崎(延伸分図)":{b200k:"",west:469290,south:121510,east:469390,north:121580},
"二神島(分図)":{b200k:"",west:466255,south:120970,east:466420,north:121035},
"神ノ島(延伸分図)":{b200k:"",west:471600,south:121680,east:471780,north:121920}
};







GSI.MUNI_ARRAY = {};
GSI.MUNI_ARRAY["1100"] = '1,北海道,1100,札幌市,さっぽろし,141.3543886,43.06208877';
GSI.MUNI_ARRAY["1101"] = '1,北海道,1101,札幌市　中央区,さっぽろし　ちゅうおうく,141.3409671,43.0553865';
GSI.MUNI_ARRAY["1102"] = '1,北海道,1102,札幌市　北区,さっぽろし　きたく,141.3408807,43.09079296';
GSI.MUNI_ARRAY["1103"] = '1,北海道,1103,札幌市　東区,さっぽろし　ひがしく,141.3636111,43.07611111';
GSI.MUNI_ARRAY["1104"] = '1,北海道,1104,札幌市　白石区,さっぽろし　しろいしく,141.40522,43.04756872';
GSI.MUNI_ARRAY["1105"] = '1,北海道,1105,札幌市　豊平区,さっぽろし　とよひらく,141.3800612,43.03134414';
GSI.MUNI_ARRAY["1106"] = '1,北海道,1106,札幌市　南区,さっぽろし　みなみく,141.3533998,42.99000828';
GSI.MUNI_ARRAY["1107"] = '1,北海道,1107,札幌市　西区,さっぽろし　にしく,141.3008974,43.0744547';
GSI.MUNI_ARRAY["1108"] = '1,北海道,1108,札幌市　厚別区,さっぽろし　あつべつく,141.4747615,43.03639318';
GSI.MUNI_ARRAY["1109"] = '1,北海道,1109,札幌市　手稲区,さっぽろし　ていねく,141.2457843,43.12187423';
GSI.MUNI_ARRAY["1110"] = '1,北海道,1110,札幌市　清田区,さっぽろし　きよたく,141.4437927,42.99951523';
GSI.MUNI_ARRAY["1202"] = '1,北海道,1202,函館市,はこだてし,140.7290679,41.76864057';
GSI.MUNI_ARRAY["1203"] = '1,北海道,1203,小樽市,おたるし,140.9944857,43.19070647';
GSI.MUNI_ARRAY["1204"] = '1,北海道,1204,旭川市,あさひかわし,142.365,43.77083333';
GSI.MUNI_ARRAY["1205"] = '1,北海道,1205,室蘭市,むろらんし,140.9736731,42.31520812';
GSI.MUNI_ARRAY["1206"] = '1,北海道,1206,釧路市,くしろし,144.3817102,42.98492315';
GSI.MUNI_ARRAY["1207"] = '1,北海道,1207,帯広市,おびひろし,143.1962056,42.92405501';
GSI.MUNI_ARRAY["1208"] = '1,北海道,1208,北見市,きたみし,143.8957877,43.80392712';
GSI.MUNI_ARRAY["1209"] = '1,北海道,1209,夕張市,ゆうばりし,141.9740889,43.0568559';
GSI.MUNI_ARRAY["1210"] = '1,北海道,1210,岩見沢市,いわみざわし,141.7758333,43.19611111';
GSI.MUNI_ARRAY["1211"] = '1,北海道,1211,網走市,あばしりし,144.2734742,44.02063505';
GSI.MUNI_ARRAY["1212"] = '1,北海道,1212,留萌市,るもいし,141.6369314,43.94100709';
GSI.MUNI_ARRAY["1213"] = '1,北海道,1213,苫小牧市,とまこまいし,141.6055556,42.63416667';
GSI.MUNI_ARRAY["1214"] = '1,北海道,1214,稚内市,わっかないし,141.6730675,45.41563748';
GSI.MUNI_ARRAY["1215"] = '1,北海道,1215,美唄市,びばいし,141.8540435,43.3330171';
GSI.MUNI_ARRAY["1216"] = '1,北海道,1216,芦別市,あしべつし,142.1894862,43.51821332';
GSI.MUNI_ARRAY["1217"] = '1,北海道,1217,江別市,えべつし,141.5360696,43.10365105';
GSI.MUNI_ARRAY["1218"] = '1,北海道,1218,赤平市,あかびらし,142.0441993,43.55798822';
GSI.MUNI_ARRAY["1219"] = '1,北海道,1219,紋別市,もんべつし,143.3541667,44.35638889';
GSI.MUNI_ARRAY["1220"] = '1,北海道,1220,士別市,しべつし,142.4001608,44.17857528';
GSI.MUNI_ARRAY["1221"] = '1,北海道,1221,名寄市,なよろし,142.4631835,44.3559089';
GSI.MUNI_ARRAY["1222"] = '1,北海道,1222,三笠市,みかさし,141.8753755,43.24565996';
GSI.MUNI_ARRAY["1223"] = '1,北海道,1223,根室市,ねむろし,145.5828718,43.33007352';
GSI.MUNI_ARRAY["1224"] = '1,北海道,1224,千歳市,ちとせし,141.6510058,42.82100926';
GSI.MUNI_ARRAY["1225"] = '1,北海道,1225,滝川市,たきかわし,141.9103899,43.55772933';
GSI.MUNI_ARRAY["1226"] = '1,北海道,1226,砂川市,すながわし,141.9034778,43.49478639';
GSI.MUNI_ARRAY["1227"] = '1,北海道,1227,歌志内市,うたしないし,142.0352778,43.52166667';
GSI.MUNI_ARRAY["1228"] = '1,北海道,1228,深川市,ふかがわし,142.0535134,43.72319472';
GSI.MUNI_ARRAY["1229"] = '1,北海道,1229,富良野市,ふらのし,142.3831468,43.34200922';
GSI.MUNI_ARRAY["1230"] = '1,北海道,1230,登別市,のぼりべつし,141.1066667,42.41277778';
GSI.MUNI_ARRAY["1231"] = '1,北海道,1231,恵庭市,えにわし,141.5777691,42.88258231';
GSI.MUNI_ARRAY["1233"] = '1,北海道,1233,伊達市,だてし,140.8647222,42.47194444';
GSI.MUNI_ARRAY["1234"] = '1,北海道,1234,北広島市,きたひろしまし,141.5635545,42.98566933';
GSI.MUNI_ARRAY["1235"] = '1,北海道,1235,石狩市,いしかりし,141.3155556,43.17138889';
GSI.MUNI_ARRAY["1236"] = '1,北海道,1236,北斗市,ほくとし,140.6530556,41.82416667';
GSI.MUNI_ARRAY["1303"] = '1,北海道,1303,当別町,とうべつちょう,141.5171281,43.22381951';
GSI.MUNI_ARRAY["1304"] = '1,北海道,1304,新篠津村,しんしのつむら,141.6492815,43.22541251';
GSI.MUNI_ARRAY["1331"] = '1,北海道,1331,松前町,まつまえちょう,140.1103613,41.42996802';
GSI.MUNI_ARRAY["1332"] = '1,北海道,1332,福島町,ふくしまちょう,140.2512881,41.48374263';
GSI.MUNI_ARRAY["1333"] = '1,北海道,1333,知内町,しりうちちょう,140.4188889,41.59833333';
GSI.MUNI_ARRAY["1334"] = '1,北海道,1334,木古内町,きこないちょう,140.4376294,41.6783268';
GSI.MUNI_ARRAY["1337"] = '1,北海道,1337,七飯町,ななえちょう,140.6944054,41.89571953';
GSI.MUNI_ARRAY["1343"] = '1,北海道,1343,鹿部町,しかべちょう,140.8158333,42.03861111';
GSI.MUNI_ARRAY["1345"] = '1,北海道,1345,森町,もりまち,140.5764167,42.10496108';
GSI.MUNI_ARRAY["1346"] = '1,北海道,1346,八雲町,やくもちょう,140.2651921,42.25589383';
GSI.MUNI_ARRAY["1347"] = '1,北海道,1347,長万部町,おしゃまんべちょう,140.3801967,42.51340337';
GSI.MUNI_ARRAY["1361"] = '1,北海道,1361,江差町,えさしちょう,140.1275909,41.86928745';
GSI.MUNI_ARRAY["1362"] = '1,北海道,1362,上ノ国町,かみのくにちょう,140.1213889,41.80111111';
GSI.MUNI_ARRAY["1363"] = '1,北海道,1363,厚沢部町,あっさぶちょう,140.2253619,41.92094925';
GSI.MUNI_ARRAY["1364"] = '1,北海道,1364,乙部町,おとべちょう,140.1353881,41.96854529';
GSI.MUNI_ARRAY["1367"] = '1,北海道,1367,奥尻町,おくしりちょう,139.5141374,42.17228824';
GSI.MUNI_ARRAY["1370"] = '1,北海道,1370,今金町,いまかねちょう,140.0086423,42.42937171';
GSI.MUNI_ARRAY["1371"] = '1,北海道,1371,せたな町,せたなちょう,139.8833333,42.41694444';
GSI.MUNI_ARRAY["1391"] = '1,北海道,1391,島牧村,しままきむら,140.0615316,42.70049649';
GSI.MUNI_ARRAY["1392"] = '1,北海道,1392,寿都町,すっつちょう,140.2288275,42.7910538';
GSI.MUNI_ARRAY["1393"] = '1,北海道,1393,黒松内町,くろまつないちょう,140.3077778,42.66777778';
GSI.MUNI_ARRAY["1394"] = '1,北海道,1394,蘭越町,らんこしちょう,140.5283803,42.80923992';
GSI.MUNI_ARRAY["1395"] = '1,北海道,1395,ニセコ町,にせこちょう,140.6875294,42.80480026';
GSI.MUNI_ARRAY["1396"] = '1,北海道,1396,真狩村,まっかりむら,140.8036719,42.7630045';
GSI.MUNI_ARRAY["1397"] = '1,北海道,1397,留寿都村,るすつむら,140.8756242,42.73730784';
GSI.MUNI_ARRAY["1398"] = '1,北海道,1398,喜茂別町,きもべつちょう,140.9345372,42.79543379';
GSI.MUNI_ARRAY["1399"] = '1,北海道,1399,京極町,きょうごくちょう,140.8841146,42.8582269';
GSI.MUNI_ARRAY["1400"] = '1,北海道,1400,倶知安町,くっちゃんちょう,140.7590211,42.90171229';
GSI.MUNI_ARRAY["1401"] = '1,北海道,1401,共和町,きょうわちょう,140.6114265,42.98040776';
GSI.MUNI_ARRAY["1402"] = '1,北海道,1402,岩内町,いわないちょう,140.5091811,42.97878475';
GSI.MUNI_ARRAY["1403"] = '1,北海道,1403,泊村,とまりむら,140.4989034,43.06300163';
GSI.MUNI_ARRAY["1404"] = '1,北海道,1404,神恵内村,かもえないむら,140.4309293,43.14380532';
GSI.MUNI_ARRAY["1405"] = '1,北海道,1405,積丹町,しゃこたんちょう,140.5979824,43.29874919';
GSI.MUNI_ARRAY["1406"] = '1,北海道,1406,古平町,ふるびらちょう,140.6389515,43.26533414';
GSI.MUNI_ARRAY["1407"] = '1,北海道,1407,仁木町,にきちょう,140.7661111,43.15166667';
GSI.MUNI_ARRAY["1408"] = '1,北海道,1408,余市町,よいちちょう,140.7835239,43.19531756';
GSI.MUNI_ARRAY["1409"] = '1,北海道,1409,赤井川村,あかいがわむら,140.8136322,43.08349202';
GSI.MUNI_ARRAY["1423"] = '1,北海道,1423,南幌町,なんぽろちょう,141.6502959,43.06371295';
GSI.MUNI_ARRAY["1424"] = '1,北海道,1424,奈井江町,ないえちょう,141.8827778,43.42527778';
GSI.MUNI_ARRAY["1425"] = '1,北海道,1425,上砂川町,かみすながわちょう,141.9835294,43.482118';
GSI.MUNI_ARRAY["1427"] = '1,北海道,1427,由仁町,ゆにちょう,141.79028,42.99960678';
GSI.MUNI_ARRAY["1428"] = '1,北海道,1428,長沼町,ながぬまちょう,141.6954173,43.01036818';
GSI.MUNI_ARRAY["1429"] = '1,北海道,1429,栗山町,くりやまちょう,141.7840938,43.05630081';
GSI.MUNI_ARRAY["1430"] = '1,北海道,1430,月形町,つきがたちょう,141.6695448,43.33839288';
GSI.MUNI_ARRAY["1431"] = '1,北海道,1431,浦臼町,うらうすちょう,141.8187355,43.43036951';
GSI.MUNI_ARRAY["1432"] = '1,北海道,1432,新十津川町,しんとつかわちょう,141.8770965,43.54847601';
GSI.MUNI_ARRAY["1433"] = '1,北海道,1433,妹背牛町,もせうしちょう,141.9615052,43.70017033';
GSI.MUNI_ARRAY["1434"] = '1,北海道,1434,秩父別町,ちっぷべつちょう,141.9578543,43.76701307';
GSI.MUNI_ARRAY["1436"] = '1,北海道,1436,雨竜町,うりゅうちょう,141.8890417,43.64396502';
GSI.MUNI_ARRAY["1437"] = '1,北海道,1437,北竜町,ほくりゅうちょう,141.8791667,43.73138889';
GSI.MUNI_ARRAY["1438"] = '1,北海道,1438,沼田町,ぬまたちょう,141.9336905,43.80670325';
GSI.MUNI_ARRAY["1452"] = '1,北海道,1452,鷹栖町,たかすちょう,142.3544444,43.84333333';
GSI.MUNI_ARRAY["1453"] = '1,北海道,1453,東神楽町,ひがしかぐらちょう,142.4515003,43.69638494';
GSI.MUNI_ARRAY["1454"] = '1,北海道,1454,当麻町,とうまちょう,142.5083928,43.82813767';
GSI.MUNI_ARRAY["1455"] = '1,北海道,1455,比布町,ぴっぷちょう,142.4776752,43.87500414';
GSI.MUNI_ARRAY["1456"] = '1,北海道,1456,愛別町,あいべつちょう,142.5778203,43.90667341';
GSI.MUNI_ARRAY["1457"] = '1,北海道,1457,上川町,かみかわちょう,142.7704637,43.84712409';
GSI.MUNI_ARRAY["1458"] = '1,北海道,1458,東川町,ひがしかわちょう,142.5101593,43.6988984';
GSI.MUNI_ARRAY["1459"] = '1,北海道,1459,美瑛町,びえいちょう,142.4670597,43.5883298';
GSI.MUNI_ARRAY["1460"] = '1,北海道,1460,上富良野町,かみふらのちょう,142.4671231,43.45561409';
GSI.MUNI_ARRAY["1461"] = '1,北海道,1461,中富良野町,なかふらのちょう,142.4252778,43.40583333';
GSI.MUNI_ARRAY["1462"] = '1,北海道,1462,南富良野町,みなみふらのちょう,142.5683333,43.16416667';
GSI.MUNI_ARRAY["1463"] = '1,北海道,1463,占冠村,しむかっぷむら,142.3985363,42.97987952';
GSI.MUNI_ARRAY["1464"] = '1,北海道,1464,和寒町,わっさむちょう,142.4134008,44.02312874';
GSI.MUNI_ARRAY["1465"] = '1,北海道,1465,剣淵町,けんぶちちょう,142.3613267,44.09576224';
GSI.MUNI_ARRAY["1468"] = '1,北海道,1468,下川町,しもかわちょう,142.6352023,44.3025664';
GSI.MUNI_ARRAY["1469"] = '1,北海道,1469,美深町,びふかちょう,142.3430577,44.48102079';
GSI.MUNI_ARRAY["1470"] = '1,北海道,1470,音威子府村,おといねっぷむら,142.2622139,44.72504179';
GSI.MUNI_ARRAY["1471"] = '1,北海道,1471,中川町,なかがわちょう,142.0713889,44.81138889';
GSI.MUNI_ARRAY["1472"] = '1,北海道,1472,幌加内町,ほろかないちょう,142.1538298,44.00979823';
GSI.MUNI_ARRAY["1481"] = '1,北海道,1481,増毛町,ましけちょう,141.5249105,43.85605933';
GSI.MUNI_ARRAY["1482"] = '1,北海道,1482,小平町,おびらちょう,141.6627616,44.01546152';
GSI.MUNI_ARRAY["1483"] = '1,北海道,1483,苫前町,とままえちょう,141.6529088,44.30614209';
GSI.MUNI_ARRAY["1484"] = '1,北海道,1484,羽幌町,はぼろちょう,141.6973205,44.36054972';
GSI.MUNI_ARRAY["1485"] = '1,北海道,1485,初山別村,しょさんべつむら,141.7663169,44.53214682';
GSI.MUNI_ARRAY["1486"] = '1,北海道,1486,遠別町,えんべつちょう,141.7923268,44.7225084';
GSI.MUNI_ARRAY["1487"] = '1,北海道,1487,天塩町,てしおちょう,141.7453521,44.88817257';
GSI.MUNI_ARRAY["1511"] = '1,北海道,1511,猿払村,さるふつむら,142.1089722,45.3306092';
GSI.MUNI_ARRAY["1512"] = '1,北海道,1512,浜頓別町,はまとんべつちょう,142.3597348,45.1237794';
GSI.MUNI_ARRAY["1513"] = '1,北海道,1513,中頓別町,なかとんべつちょう,142.2867365,44.96976136';
GSI.MUNI_ARRAY["1514"] = '1,北海道,1514,枝幸町,えさしちょう,142.5814043,44.93873333';
GSI.MUNI_ARRAY["1516"] = '1,北海道,1516,豊富町,とよとみちょう,141.7775026,45.10285676';
GSI.MUNI_ARRAY["1517"] = '1,北海道,1517,礼文町,れぶんちょう,141.0477509,45.30308199';
GSI.MUNI_ARRAY["1518"] = '1,北海道,1518,利尻町,りしりちょう,141.1395796,45.18701663';
GSI.MUNI_ARRAY["1519"] = '1,北海道,1519,利尻富士町,りしりふじちょう,141.2147222,45.2475';
GSI.MUNI_ARRAY["1520"] = '1,北海道,1520,幌延町,ほろのべちょう,141.8494444,45.01777778';
GSI.MUNI_ARRAY["1543"] = '1,北海道,1543,美幌町,びほろちょう,144.1071991,43.82371383';
GSI.MUNI_ARRAY["1544"] = '1,北海道,1544,津別町,つべつちょう,144.0248025,43.70633069';
GSI.MUNI_ARRAY["1545"] = '1,北海道,1545,斜里町,しゃりちょう,144.6708333,43.91138889';
GSI.MUNI_ARRAY["1546"] = '1,北海道,1546,清里町,きよさとちょう,144.5946817,43.83523767';
GSI.MUNI_ARRAY["1547"] = '1,北海道,1547,小清水町,こしみずちょう,144.4620985,43.85674521';
GSI.MUNI_ARRAY["1549"] = '1,北海道,1549,訓子府町,くんねっぷちょう,143.7416617,43.72536829';
GSI.MUNI_ARRAY["1550"] = '1,北海道,1550,置戸町,おけとちょう,143.5863889,43.67638889';
GSI.MUNI_ARRAY["1552"] = '1,北海道,1552,佐呂間町,さろまちょう,143.7747668,44.01785206';
GSI.MUNI_ARRAY["1555"] = '1,北海道,1555,遠軽町,えんがるちょう,143.5280486,44.06196432';
GSI.MUNI_ARRAY["1559"] = '1,北海道,1559,湧別町,ゆうべつちょう,143.573035,44.15160274';
GSI.MUNI_ARRAY["1560"] = '1,北海道,1560,滝上町,たきのうえちょう,143.0777778,44.19222222';
GSI.MUNI_ARRAY["1561"] = '1,北海道,1561,興部町,おこっぺちょう,143.1239513,44.46985058';
GSI.MUNI_ARRAY["1562"] = '1,北海道,1562,西興部村,にしおこっぺむら,142.9444613,44.32880793';
GSI.MUNI_ARRAY["1563"] = '1,北海道,1563,雄武町,おうむちょう,142.9618577,44.58248425';
GSI.MUNI_ARRAY["1564"] = '1,北海道,1564,大空町,おおぞらちょう,144.1725,43.91194444';
GSI.MUNI_ARRAY["1571"] = '1,北海道,1571,豊浦町,とようらちょう,140.711966,42.583409';
GSI.MUNI_ARRAY["1575"] = '1,北海道,1575,壮瞥町,そうべつちょう,140.885836,42.55210949';
GSI.MUNI_ARRAY["1578"] = '1,北海道,1578,白老町,しらおいちょう,141.3558661,42.55131326';
GSI.MUNI_ARRAY["1581"] = '1,北海道,1581,厚真町,あつまちょう,141.8778914,42.72363661';
GSI.MUNI_ARRAY["1584"] = '1,北海道,1584,洞爺湖町,とうやこちょう,140.7642741,42.55111704';
GSI.MUNI_ARRAY["1585"] = '1,北海道,1585,安平町,あびらちょう,141.8180556,42.76277778';
GSI.MUNI_ARRAY["1586"] = '1,北海道,1586,むかわ町,むかわちょう,141.9267449,42.57474771';
GSI.MUNI_ARRAY["1601"] = '1,北海道,1601,日高町,ひだかちょう,142.0742968,42.48033565';
GSI.MUNI_ARRAY["1602"] = '1,北海道,1602,平取町,びらとりちょう,142.1286988,42.58514013';
GSI.MUNI_ARRAY["1604"] = '1,北海道,1604,新冠町,にいかっぷちょう,142.3184391,42.36244309';
GSI.MUNI_ARRAY["1607"] = '1,北海道,1607,浦河町,うらかわちょう,142.7682026,42.16834176';
GSI.MUNI_ARRAY["1608"] = '1,北海道,1608,様似町,さまにちょう,142.9338889,42.12777778';
GSI.MUNI_ARRAY["1609"] = '1,北海道,1609,えりも町,えりもちょう,143.1483333,42.01638889';
GSI.MUNI_ARRAY["1610"] = '1,北海道,1610,新ひだか町,しんひだかちょう,142.3686044,42.34125547';
GSI.MUNI_ARRAY["1631"] = '1,北海道,1631,音更町,おとふけちょう,143.1978925,42.99413757';
GSI.MUNI_ARRAY["1632"] = '1,北海道,1632,士幌町,しほろちょう,143.2414601,43.16805004';
GSI.MUNI_ARRAY["1633"] = '1,北海道,1633,上士幌町,かみしほろちょう,143.2961787,43.23263469';
GSI.MUNI_ARRAY["1634"] = '1,北海道,1634,鹿追町,しかおいちょう,142.9889704,43.09887653';
GSI.MUNI_ARRAY["1635"] = '1,北海道,1635,新得町,しんとくちょう,142.8389096,43.07975642';
GSI.MUNI_ARRAY["1636"] = '1,北海道,1636,清水町,しみずちょう,142.8845411,43.01143823';
GSI.MUNI_ARRAY["1637"] = '1,北海道,1637,芽室町,めむろちょう,143.0508333,42.91194444';
GSI.MUNI_ARRAY["1638"] = '1,北海道,1638,中札内村,なかさつないむら,143.1323696,42.69757305';
GSI.MUNI_ARRAY["1639"] = '1,北海道,1639,更別村,さらべつむら,143.1878416,42.65038621';
GSI.MUNI_ARRAY["1641"] = '1,北海道,1641,大樹町,たいきちょう,143.2788889,42.4975';
GSI.MUNI_ARRAY["1642"] = '1,北海道,1642,広尾町,ひろおちょう,143.3116286,42.28593132';
GSI.MUNI_ARRAY["1643"] = '1,北海道,1643,幕別町,まくべつちょう,143.3561006,42.9082019';
GSI.MUNI_ARRAY["1644"] = '1,北海道,1644,池田町,いけだちょう,143.4485303,42.92900742';
GSI.MUNI_ARRAY["1645"] = '1,北海道,1645,豊頃町,とよころちょう,143.5058896,42.80102049';
GSI.MUNI_ARRAY["1646"] = '1,北海道,1646,本別町,ほんべつちょう,143.6105661,43.12467344';
GSI.MUNI_ARRAY["1647"] = '1,北海道,1647,足寄町,あしょろちょう,143.5540526,43.24480211';
GSI.MUNI_ARRAY["1648"] = '1,北海道,1648,陸別町,りくべつちょう,143.7472222,43.46888889';
GSI.MUNI_ARRAY["1649"] = '1,北海道,1649,浦幌町,うらほろちょう,143.6585781,42.80895698';
GSI.MUNI_ARRAY["1661"] = '1,北海道,1661,釧路町,くしろちょう,144.4660793,42.99617231';
GSI.MUNI_ARRAY["1662"] = '1,北海道,1662,厚岸町,あっけしちょう,144.8475,43.05194444';
GSI.MUNI_ARRAY["1663"] = '1,北海道,1663,浜中町,はまなかちょう,145.1295118,43.07711177';
GSI.MUNI_ARRAY["1664"] = '1,北海道,1664,標茶町,しべちゃちょう,144.6006586,43.30334699';
GSI.MUNI_ARRAY["1665"] = '1,北海道,1665,弟子屈町,てしかがちょう,144.4593251,43.48521336';
GSI.MUNI_ARRAY["1667"] = '1,北海道,1667,鶴居村,つるいむら,144.3211866,43.23007174';
GSI.MUNI_ARRAY["1668"] = '1,北海道,1668,白糠町,しらぬかちょう,144.0717316,42.95616451';
GSI.MUNI_ARRAY["1691"] = '1,北海道,1691,別海町,べつかいちょう,145.1173283,43.3940015';
GSI.MUNI_ARRAY["1692"] = '1,北海道,1692,中標津町,なかしべつちょう,144.971387,43.55520483';
GSI.MUNI_ARRAY["1693"] = '1,北海道,1693,標津町,しべつちょう,145.1313251,43.66126914';
GSI.MUNI_ARRAY["1694"] = '1,北海道,1694,羅臼町,らうすちょう,145.1894444,44.02194444';
GSI.MUNI_ARRAY["1695"] = '1,北海道,1695,色丹村,しこたんむら,146.8127778,43.8680556';
GSI.MUNI_ARRAY["1696"] = '1,北海道,1696,泊村,とまりむら,145.5097222,43.7358333';
GSI.MUNI_ARRAY["1697"] = '1,北海道,1697,留夜別村,るよべつむら,146.172777,44.2725000';
GSI.MUNI_ARRAY["1698"] = '1,北海道,1698,留別村,るべつむら,147.6975000,45.0961111';
GSI.MUNI_ARRAY["1699"] = '1,北海道,1699,紗那村,しゃなむら,147.8777778,45.2286111';
GSI.MUNI_ARRAY["1700"] = '1,北海道,1700,蘂取村,しべとろむら,148.6075000,45.4886111';
GSI.MUNI_ARRAY["2201"] = '2,青森県,2201,青森市,あおもりし,140.7475,40.82222222';
GSI.MUNI_ARRAY["2202"] = '2,青森県,2202,弘前市,ひろさきし,140.4641667,40.60305556';
GSI.MUNI_ARRAY["2203"] = '2,青森県,2203,八戸市,はちのへし,141.4883333,40.51222222';
GSI.MUNI_ARRAY["2204"] = '2,青森県,2204,黒石市,くろいしし,140.5944444,40.64277778';
GSI.MUNI_ARRAY["2205"] = '2,青森県,2205,五所川原市,ごしょがわらし,140.44,40.80805556';
GSI.MUNI_ARRAY["2206"] = '2,青森県,2206,十和田市,とわだし,141.2058333,40.61277778';
GSI.MUNI_ARRAY["2207"] = '2,青森県,2207,三沢市,みさわし,141.3688889,40.68333333';
GSI.MUNI_ARRAY["2208"] = '2,青森県,2208,むつ市,むつし,141.1830556,41.29305556';
GSI.MUNI_ARRAY["2209"] = '2,青森県,2209,つがる市,つがるし,140.38,40.80888889';
GSI.MUNI_ARRAY["2210"] = '2,青森県,2210,平川市,ひらかわし,140.5663889,40.58416667';
GSI.MUNI_ARRAY["2301"] = '2,青森県,2301,平内町,ひらないまち,140.9561111,40.92611111';
GSI.MUNI_ARRAY["2303"] = '2,青森県,2303,今別町,いまべつまち,140.4816667,41.18194444';
GSI.MUNI_ARRAY["2304"] = '2,青森県,2304,蓬田村,よもぎたむら,140.6558333,40.97194444';
GSI.MUNI_ARRAY["2307"] = '2,青森県,2307,外ヶ浜町,そとがはままち,140.6325,41.04333333';
GSI.MUNI_ARRAY["2321"] = '2,青森県,2321,鰺ヶ沢町,あじがさわまち,140.2088889,40.78';
GSI.MUNI_ARRAY["2323"] = '2,青森県,2323,深浦町,ふかうらまち,139.9277778,40.64805556';
GSI.MUNI_ARRAY["2343"] = '2,青森県,2343,西目屋村,にしめやむら,140.2963889,40.57694444';
GSI.MUNI_ARRAY["2361"] = '2,青森県,2361,藤崎町,ふじさきまち,140.5025,40.65611111';
GSI.MUNI_ARRAY["2362"] = '2,青森県,2362,大鰐町,おおわにまち,140.5677778,40.51833333';
GSI.MUNI_ARRAY["2367"] = '2,青森県,2367,田舎館村,いなかだてむら,140.55,40.63166667';
GSI.MUNI_ARRAY["2381"] = '2,青森県,2381,板柳町,いたやなぎまち,140.4575,40.69611111';
GSI.MUNI_ARRAY["2384"] = '2,青森県,2384,鶴田町,つるたまち,140.4286111,40.75888889';
GSI.MUNI_ARRAY["2387"] = '2,青森県,2387,中泊町,なかどまりまち,140.4397222,40.96527778';
GSI.MUNI_ARRAY["2401"] = '2,青森県,2401,野辺地町,のへじまち,141.1286111,40.86444444';
GSI.MUNI_ARRAY["2402"] = '2,青森県,2402,七戸町,しちのへまち,141.1577778,40.74472222';
GSI.MUNI_ARRAY["2405"] = '2,青森県,2405,六戸町,ろくのへまち,141.3247222,40.60972222';
GSI.MUNI_ARRAY["2406"] = '2,青森県,2406,横浜町,よこはままち,141.2475,41.08333333';
GSI.MUNI_ARRAY["2408"] = '2,青森県,2408,東北町,とうほくまち,141.2577778,40.72805556';
GSI.MUNI_ARRAY["2411"] = '2,青森県,2411,六ヶ所村,ろっかしょむら,141.3744444,40.9675';
GSI.MUNI_ARRAY["2412"] = '2,青森県,2412,おいらせ町,おいらせちょう,141.3977778,40.59916667';
GSI.MUNI_ARRAY["2423"] = '2,青森県,2423,大間町,おおままち,140.9072222,41.52666667';
GSI.MUNI_ARRAY["2424"] = '2,青森県,2424,東通村,ひがしどおりむら,141.3294444,41.27805556';
GSI.MUNI_ARRAY["2425"] = '2,青森県,2425,風間浦村,かざまうらむら,140.9955556,41.4875';
GSI.MUNI_ARRAY["2426"] = '2,青森県,2426,佐井村,さいむら,140.8591667,41.42972222';
GSI.MUNI_ARRAY["2441"] = '2,青森県,2441,三戸町,さんのへまち,141.2586111,40.37833333';
GSI.MUNI_ARRAY["2442"] = '2,青森県,2442,五戸町,ごのへまち,141.3077778,40.53111111';
GSI.MUNI_ARRAY["2443"] = '2,青森県,2443,田子町,たっこまち,141.1519444,40.34';
GSI.MUNI_ARRAY["2445"] = '2,青森県,2445,南部町,なんぶちょう,141.3816667,40.46694444';
GSI.MUNI_ARRAY["2446"] = '2,青森県,2446,階上町,はしかみちょう,141.6211111,40.4525';
GSI.MUNI_ARRAY["2450"] = '2,青森県,2450,新郷村,しんごうむら,141.1733333,40.46583333';
GSI.MUNI_ARRAY["3201"] = '3,岩手県,3201,盛岡市,もりおかし,141.1541667,39.70194444';
GSI.MUNI_ARRAY["3202"] = '3,岩手県,3202,宮古市,みやこし,141.9572222,39.64138889';
GSI.MUNI_ARRAY["3203"] = '3,岩手県,3203,大船渡市,おおふなとし,141.7083333,39.08222222';
GSI.MUNI_ARRAY["3205"] = '3,岩手県,3205,花巻市,はなまきし,141.1166667,39.38861111';
GSI.MUNI_ARRAY["3206"] = '3,岩手県,3206,北上市,きたかみし,141.1130556,39.28666667';
GSI.MUNI_ARRAY["3207"] = '3,岩手県,3207,久慈市,くじし,141.7752778,40.19027778';
GSI.MUNI_ARRAY["3208"] = '3,岩手県,3208,遠野市,とおのし,141.5336111,39.3275';
GSI.MUNI_ARRAY["3209"] = '3,岩手県,3209,一関市,いちのせきし,141.1263889,38.93444444';
GSI.MUNI_ARRAY["3210"] = '3,岩手県,3210,陸前高田市,りくぜんたかたし,141.6294444,39.01527778';
GSI.MUNI_ARRAY["3211"] = '3,岩手県,3211,釜石市,かまいしし,141.8855556,39.27583333';
GSI.MUNI_ARRAY["3213"] = '3,岩手県,3213,二戸市,にのへし,141.3047222,40.27111111';
GSI.MUNI_ARRAY["3214"] = '3,岩手県,3214,八幡平市,はちまんたいし,141.0952778,39.92638889';
GSI.MUNI_ARRAY["3215"] = '3,岩手県,3215,奥州市,おうしゅうし,141.1388889,39.14444444';
GSI.MUNI_ARRAY["3216"] = '3,岩手県,3216,滝沢市,たきざわし,141.0769444,39.73472222';
GSI.MUNI_ARRAY["3301"] = '3,岩手県,3301,雫石町,しずくいしちょう,140.9755556,39.69611111';
GSI.MUNI_ARRAY["3302"] = '3,岩手県,3302,葛巻町,くずまきまち,141.4363889,40.03972222';
GSI.MUNI_ARRAY["3303"] = '3,岩手県,3303,岩手町,いわてまち,141.2125,39.9725';
GSI.MUNI_ARRAY["3321"] = '3,岩手県,3321,紫波町,しわちょう,141.1677778,39.55472222';
GSI.MUNI_ARRAY["3322"] = '3,岩手県,3322,矢巾町,やはばちょう,141.1430556,39.60583333';
GSI.MUNI_ARRAY["3366"] = '3,岩手県,3366,西和賀町,にしわがまち,140.7791667,39.31777778';
GSI.MUNI_ARRAY["3381"] = '3,岩手県,3381,金ケ崎町,かねがさきちょう,141.1161111,39.19555556';
GSI.MUNI_ARRAY["3402"] = '3,岩手県,3402,平泉町,ひらいずみちょう,141.1141667,38.98666667';
GSI.MUNI_ARRAY["3441"] = '3,岩手県,3441,住田町,すみたちょう,141.5758333,39.14194444';
GSI.MUNI_ARRAY["3461"] = '3,岩手県,3461,大槌町,おおつちちょう,141.9063889,39.35972222';
GSI.MUNI_ARRAY["3482"] = '3,岩手県,3482,山田町,やまだまち,141.9488889,39.4675';
GSI.MUNI_ARRAY["3483"] = '3,岩手県,3483,岩泉町,いわいずみちょう,141.7966667,39.84305556';
GSI.MUNI_ARRAY["3484"] = '3,岩手県,3484,田野畑村,たのはたむら,141.8888889,39.93027778';
GSI.MUNI_ARRAY["3485"] = '3,岩手県,3485,普代村,ふだいむら,141.8861111,40.00527778';
GSI.MUNI_ARRAY["3501"] = '3,岩手県,3501,軽米町,かるまいまち,141.4605556,40.32666667';
GSI.MUNI_ARRAY["3503"] = '3,岩手県,3503,野田村,のだむら,141.8180556,40.11';
GSI.MUNI_ARRAY["3506"] = '3,岩手県,3506,九戸村,くのへむら,141.4188889,40.21138889';
GSI.MUNI_ARRAY["3507"] = '3,岩手県,3507,洋野町,ひろのちょう,141.7180556,40.40861111';
GSI.MUNI_ARRAY["3524"] = '3,岩手県,3524,一戸町,いちのへまち,141.2952778,40.21305556';
GSI.MUNI_ARRAY["4100"] = '4,宮城県,4100,仙台市,せんだいし,140.8697222,38.26805556';
GSI.MUNI_ARRAY["4101"] = '4,宮城県,4101,仙台市　青葉区,せんだいし　あおばく,140.8705556,38.26916667';
GSI.MUNI_ARRAY["4102"] = '4,宮城県,4102,仙台市　宮城野区,せんだいし　みやぎのく,140.9102778,38.26638889';
GSI.MUNI_ARRAY["4103"] = '4,宮城県,4103,仙台市　若林区,せんだいし　わかばやしく,140.9008333,38.24416667';
GSI.MUNI_ARRAY["4104"] = '4,宮城県,4104,仙台市　太白区,せんだいし　たいはくく,140.8772222,38.22444444';
GSI.MUNI_ARRAY["4105"] = '4,宮城県,4105,仙台市　泉区,せんだいし　いずみく,140.8813889,38.32638889';
GSI.MUNI_ARRAY["4202"] = '4,宮城県,4202,石巻市,いしのまきし,141.3027778,38.43416667';
GSI.MUNI_ARRAY["4203"] = '4,宮城県,4203,塩竈市,しおがまし,141.0222222,38.31444444';
GSI.MUNI_ARRAY["4205"] = '4,宮城県,4205,気仙沼市,けせんぬまし,141.57,38.90833333';
GSI.MUNI_ARRAY["4206"] = '4,宮城県,4206,白石市,しろいしし,140.6197222,38.00222222';
GSI.MUNI_ARRAY["4207"] = '4,宮城県,4207,名取市,なとりし,140.8919444,38.17166667';
GSI.MUNI_ARRAY["4208"] = '4,宮城県,4208,角田市,かくだし,140.7819444,37.97722222';
GSI.MUNI_ARRAY["4209"] = '4,宮城県,4209,多賀城市,たがじょうし,141.0044444,38.29388889';
GSI.MUNI_ARRAY["4211"] = '4,宮城県,4211,岩沼市,いわぬまし,140.87,38.10444444';
GSI.MUNI_ARRAY["4212"] = '4,宮城県,4212,登米市,とめし,141.1877778,38.69194444';
GSI.MUNI_ARRAY["4213"] = '4,宮城県,4213,栗原市,くりはらし,141.0213889,38.73027778';
GSI.MUNI_ARRAY["4214"] = '4,宮城県,4214,東松島市,ひがしまつしまし,141.2105556,38.42638889';
GSI.MUNI_ARRAY["4215"] = '4,宮城県,4215,大崎市,おおさきし,140.9555556,38.57722222';
GSI.MUNI_ARRAY["4301"] = '4,宮城県,4301,蔵王町,ざおうまち,140.6588889,38.09805556';
GSI.MUNI_ARRAY["4302"] = '4,宮城県,4302,七ケ宿町,しちかしゅくまち,140.4416667,37.99305556';
GSI.MUNI_ARRAY["4321"] = '4,宮城県,4321,大河原町,おおがわらまち,140.7308333,38.04944444';
GSI.MUNI_ARRAY["4322"] = '4,宮城県,4322,村田町,むらたまち,140.7225,38.11861111';
GSI.MUNI_ARRAY["4323"] = '4,宮城県,4323,柴田町,しばたまち,140.7658333,38.05638889';
GSI.MUNI_ARRAY["4324"] = '4,宮城県,4324,川崎町,かわさきまち,140.6436111,38.17777778';
GSI.MUNI_ARRAY["4341"] = '4,宮城県,4341,丸森町,まるもりまち,140.7655556,37.91138889';
GSI.MUNI_ARRAY["4361"] = '4,宮城県,4361,亘理町,わたりちょう,140.8527778,38.03777778';
GSI.MUNI_ARRAY["4362"] = '4,宮城県,4362,山元町,やまもとちょう,140.8777778,37.9625';
GSI.MUNI_ARRAY["4401"] = '4,宮城県,4401,松島町,まつしままち,141.0691667,38.38138889';
GSI.MUNI_ARRAY["4404"] = '4,宮城県,4404,七ヶ浜町,しちがはままち,141.0594444,38.30472222';
GSI.MUNI_ARRAY["4406"] = '4,宮城県,4406,利府町,りふちょう,140.9755556,38.33027778';
GSI.MUNI_ARRAY["4421"] = '4,宮城県,4421,大和町,たいわちょう,140.8863889,38.4375';
GSI.MUNI_ARRAY["4422"] = '4,宮城県,4422,大郷町,おおさとちょう,141.0044444,38.42444444';
GSI.MUNI_ARRAY["4423"] = '4,宮城県,4423,富谷町,とみやまち,140.8952778,38.4';
GSI.MUNI_ARRAY["4424"] = '4,宮城県,4424,大衡村,おおひらむら,140.8802778,38.4675';
GSI.MUNI_ARRAY["4444"] = '4,宮城県,4444,色麻町,しかまちょう,140.85,38.54888889';
GSI.MUNI_ARRAY["4445"] = '4,宮城県,4445,加美町,かみまち,140.855,38.57194444';
GSI.MUNI_ARRAY["4501"] = '4,宮城県,4501,涌谷町,わくやちょう,141.1283333,38.53972222';
GSI.MUNI_ARRAY["4505"] = '4,宮城県,4505,美里町,みさとまち,141.0569444,38.54444444';
GSI.MUNI_ARRAY["4581"] = '4,宮城県,4581,女川町,おながわちょう,141.4444444,38.44555556';
GSI.MUNI_ARRAY["4606"] = '4,宮城県,4606,南三陸町,みなみさんりくちょう,141.4463889,38.67777778';
GSI.MUNI_ARRAY["5201"] = '5,秋田県,5201,秋田市,あきたし,140.1025,39.71972222';
GSI.MUNI_ARRAY["5202"] = '5,秋田県,5202,能代市,のしろし,140.0266667,40.21222222';
GSI.MUNI_ARRAY["5203"] = '5,秋田県,5203,横手市,よこてし,140.5533333,39.31055556';
GSI.MUNI_ARRAY["5204"] = '5,秋田県,5204,大館市,おおだてし,140.5647222,40.27166667';
GSI.MUNI_ARRAY["5206"] = '5,秋田県,5206,男鹿市,おがし,139.8477778,39.88666667';
GSI.MUNI_ARRAY["5207"] = '5,秋田県,5207,湯沢市,ゆざわし,140.495,39.16388889';
GSI.MUNI_ARRAY["5209"] = '5,秋田県,5209,鹿角市,かづのし,140.7883333,40.21583333';
GSI.MUNI_ARRAY["5210"] = '5,秋田県,5210,由利本荘市,ゆりほんじょうし,140.0488889,39.38583333';
GSI.MUNI_ARRAY["5211"] = '5,秋田県,5211,潟上市,かたがみし,139.9888889,39.88333333';
GSI.MUNI_ARRAY["5212"] = '5,秋田県,5212,大仙市,だいせんし,140.4755556,39.45305556';
GSI.MUNI_ARRAY["5213"] = '5,秋田県,5213,北秋田市,きたあきたし,140.3708333,40.22611111';
GSI.MUNI_ARRAY["5214"] = '5,秋田県,5214,にかほ市,にかほし,139.9077778,39.20305556';
GSI.MUNI_ARRAY["5215"] = '5,秋田県,5215,仙北市,せんぼくし,140.7305556,39.7';
GSI.MUNI_ARRAY["5303"] = '5,秋田県,5303,小坂町,こさかまち,140.7469444,40.32777778';
GSI.MUNI_ARRAY["5327"] = '5,秋田県,5327,上小阿仁村,かみこあにむら,140.2958333,40.06333333';
GSI.MUNI_ARRAY["5346"] = '5,秋田県,5346,藤里町,ふじさとまち,140.2619444,40.27833333';
GSI.MUNI_ARRAY["5348"] = '5,秋田県,5348,三種町,みたねちょう,140.005,40.10166667';
GSI.MUNI_ARRAY["5349"] = '5,秋田県,5349,八峰町,はっぽうちょう,140.0386111,40.31888889';
GSI.MUNI_ARRAY["5361"] = '5,秋田県,5361,五城目町,ごじょうめまち,140.1116667,39.94416667';
GSI.MUNI_ARRAY["5363"] = '5,秋田県,5363,八郎潟町,はちろうがたまち,140.0733333,39.94944444';
GSI.MUNI_ARRAY["5366"] = '5,秋田県,5366,井川町,いかわまち,140.0816667,39.91416667';
GSI.MUNI_ARRAY["5368"] = '5,秋田県,5368,大潟村,おおがたむら,139.96,40.01777778';
GSI.MUNI_ARRAY["5434"] = '5,秋田県,5434,美郷町,みさとちょう,140.5825,39.46166667';
GSI.MUNI_ARRAY["5463"] = '5,秋田県,5463,羽後町,うごまち,140.4130556,39.19944444';
GSI.MUNI_ARRAY["5464"] = '5,秋田県,5464,東成瀬村,ひがしなるせむら,140.6488889,39.17888889';
GSI.MUNI_ARRAY["6201"] = '6,山形県,6201,山形市,やまがたし,140.3397222,38.25555556';
GSI.MUNI_ARRAY["6202"] = '6,山形県,6202,米沢市,よねざわし,140.1169444,37.92222222';
GSI.MUNI_ARRAY["6203"] = '6,山形県,6203,鶴岡市,つるおかし,139.8266667,38.72722222';
GSI.MUNI_ARRAY["6204"] = '6,山形県,6204,酒田市,さかたし,139.8363889,38.91444444';
GSI.MUNI_ARRAY["6205"] = '6,山形県,6205,新庄市,しんじょうし,140.3019444,38.76472222';
GSI.MUNI_ARRAY["6206"] = '6,山形県,6206,寒河江市,さがえし,140.2761111,38.38111111';
GSI.MUNI_ARRAY["6207"] = '6,山形県,6207,上山市,かみのやまし,140.2677778,38.14972222';
GSI.MUNI_ARRAY["6208"] = '6,山形県,6208,村山市,むらやまし,140.3805556,38.48361111';
GSI.MUNI_ARRAY["6209"] = '6,山形県,6209,長井市,ながいし,140.0405556,38.10777778';
GSI.MUNI_ARRAY["6210"] = '6,山形県,6210,天童市,てんどうし,140.3783333,38.36222222';
GSI.MUNI_ARRAY["6211"] = '6,山形県,6211,東根市,ひがしねし,140.3911111,38.43138889';
GSI.MUNI_ARRAY["6212"] = '6,山形県,6212,尾花沢市,おばなざわし,140.4058333,38.60083333';
GSI.MUNI_ARRAY["6213"] = '6,山形県,6213,南陽市,なんようし,140.1483333,38.05527778';
GSI.MUNI_ARRAY["6301"] = '6,山形県,6301,山辺町,やまのべまち,140.2625,38.28916667';
GSI.MUNI_ARRAY["6302"] = '6,山形県,6302,中山町,なかやままち,140.2830556,38.33333333';
GSI.MUNI_ARRAY["6321"] = '6,山形県,6321,河北町,かほくちょう,140.3144444,38.42638889';
GSI.MUNI_ARRAY["6322"] = '6,山形県,6322,西川町,にしかわまち,140.1477778,38.42666667';
GSI.MUNI_ARRAY["6323"] = '6,山形県,6323,朝日町,あさひまち,140.1458333,38.29916667';
GSI.MUNI_ARRAY["6324"] = '6,山形県,6324,大江町,おおえまち,140.2066667,38.38083333';
GSI.MUNI_ARRAY["6341"] = '6,山形県,6341,大石田町,おおいしだまち,140.3727778,38.59388889';
GSI.MUNI_ARRAY["6361"] = '6,山形県,6361,金山町,かねやままち,140.3394444,38.88333333';
GSI.MUNI_ARRAY["6362"] = '6,山形県,6362,最上町,もがみまち,140.5194444,38.75861111';
GSI.MUNI_ARRAY["6363"] = '6,山形県,6363,舟形町,ふながたまち,140.32,38.69166667';
GSI.MUNI_ARRAY["6364"] = '6,山形県,6364,真室川町,まむろがわまち,140.2525,38.85777778';
GSI.MUNI_ARRAY["6365"] = '6,山形県,6365,大蔵村,おおくらむら,140.2305556,38.70416667';
GSI.MUNI_ARRAY["6366"] = '6,山形県,6366,鮭川村,さけがわむら,140.2216667,38.79611111';
GSI.MUNI_ARRAY["6367"] = '6,山形県,6367,戸沢村,とざわむら,140.1436111,38.73777778';
GSI.MUNI_ARRAY["6381"] = '6,山形県,6381,高畠町,たかはたまち,140.1891667,38.00277778';
GSI.MUNI_ARRAY["6382"] = '6,山形県,6382,川西町,かわにしまち,140.0458333,38.00444444';
GSI.MUNI_ARRAY["6401"] = '6,山形県,6401,小国町,おぐにまち,139.7433333,38.06138889';
GSI.MUNI_ARRAY["6402"] = '6,山形県,6402,白鷹町,しらたかまち,140.0986111,38.18305556';
GSI.MUNI_ARRAY["6403"] = '6,山形県,6403,飯豊町,いいでまち,139.9875,38.04583333';
GSI.MUNI_ARRAY["6426"] = '6,山形県,6426,三川町,みかわまち,139.8497222,38.79444444';
GSI.MUNI_ARRAY["6428"] = '6,山形県,6428,庄内町,しょうないまち,139.9047222,38.84972222';
GSI.MUNI_ARRAY["6461"] = '6,山形県,6461,遊佐町,ゆざまち,139.9075,39.01472222';
GSI.MUNI_ARRAY["7201"] = '7,福島県,7201,福島市,ふくしまし,140.4747222,37.76083333';
GSI.MUNI_ARRAY["7202"] = '7,福島県,7202,会津若松市,あいづわかまつし,139.9297222,37.49472222';
GSI.MUNI_ARRAY["7203"] = '7,福島県,7203,郡山市,こおりやまし,140.3597222,37.40055556';
GSI.MUNI_ARRAY["7204"] = '7,福島県,7204,いわき市,いわきし,140.8877778,37.05055556';
GSI.MUNI_ARRAY["7205"] = '7,福島県,7205,白河市,しらかわし,140.2108333,37.12638889';
GSI.MUNI_ARRAY["7207"] = '7,福島県,7207,須賀川市,すかがわし,140.3727778,37.28666667';
GSI.MUNI_ARRAY["7208"] = '7,福島県,7208,喜多方市,きたかたし,139.8744444,37.65111111';
GSI.MUNI_ARRAY["7209"] = '7,福島県,7209,相馬市,そうまし,140.9197222,37.79666667';
GSI.MUNI_ARRAY["7210"] = '7,福島県,7210,二本松市,にほんまつし,140.4313889,37.58472222';
GSI.MUNI_ARRAY["7211"] = '7,福島県,7211,田村市,たむらし,140.5691667,37.44138889';
GSI.MUNI_ARRAY["7212"] = '7,福島県,7212,南相馬市,みなみそうまし,140.9572222,37.64222222';
GSI.MUNI_ARRAY["7213"] = '7,福島県,7213,伊達市,だてし,140.5630556,37.81888889';
GSI.MUNI_ARRAY["7214"] = '7,福島県,7214,本宮市,もとみやし,140.3938889,37.51333333';
GSI.MUNI_ARRAY["7301"] = '7,福島県,7301,桑折町,こおりまち,140.5163889,37.84944444';
GSI.MUNI_ARRAY["7303"] = '7,福島県,7303,国見町,くにみまち,140.5494444,37.87694444';
GSI.MUNI_ARRAY["7308"] = '7,福島県,7308,川俣町,かわまたまち,140.5983333,37.665';
GSI.MUNI_ARRAY["7322"] = '7,福島県,7322,大玉村,おおたまむら,140.3711111,37.53444444';
GSI.MUNI_ARRAY["7342"] = '7,福島県,7342,鏡石町,かがみいしまち,140.3436111,37.25277778';
GSI.MUNI_ARRAY["7344"] = '7,福島県,7344,天栄村,てんえいむら,140.2472222,37.25527778';
GSI.MUNI_ARRAY["7362"] = '7,福島県,7362,下郷町,しもごうまち,139.8722222,37.25555556';
GSI.MUNI_ARRAY["7364"] = '7,福島県,7364,檜枝岐村,ひのえまたむら,139.3888889,37.02416667';
GSI.MUNI_ARRAY["7367"] = '7,福島県,7367,只見町,ただみまち,139.3158333,37.34861111';
GSI.MUNI_ARRAY["7368"] = '7,福島県,7368,南会津町,みなみあいづまち,139.7733333,37.20027778';
GSI.MUNI_ARRAY["7402"] = '7,福島県,7402,北塩原村,きたしおばらむら,139.9377778,37.65583333';
GSI.MUNI_ARRAY["7405"] = '7,福島県,7405,西会津町,にしあいづまち,139.6475,37.58888889';
GSI.MUNI_ARRAY["7407"] = '7,福島県,7407,磐梯町,ばんだいまち,139.9883333,37.56194444';
GSI.MUNI_ARRAY["7408"] = '7,福島県,7408,猪苗代町,いなわしろまち,140.1047222,37.55777778';
GSI.MUNI_ARRAY["7421"] = '7,福島県,7421,会津坂下町,あいづばんげまち,139.8216667,37.56138889';
GSI.MUNI_ARRAY["7422"] = '7,福島県,7422,湯川村,ゆがわむら,139.8866667,37.56583333';
GSI.MUNI_ARRAY["7423"] = '7,福島県,7423,柳津町,やないづまち,139.7194444,37.52611111';
GSI.MUNI_ARRAY["7444"] = '7,福島県,7444,三島町,みしままち,139.6444444,37.47027778';
GSI.MUNI_ARRAY["7445"] = '7,福島県,7445,金山町,かねやままち,139.5247222,37.45388889';
GSI.MUNI_ARRAY["7446"] = '7,福島県,7446,昭和村,しょうわむら,139.6105556,37.33583333';
GSI.MUNI_ARRAY["7447"] = '7,福島県,7447,会津美里町,あいづみさとまち,139.8411111,37.46';
GSI.MUNI_ARRAY["7461"] = '7,福島県,7461,西郷村,にしごうむら,140.1552778,37.14194444';
GSI.MUNI_ARRAY["7464"] = '7,福島県,7464,泉崎村,いずみざきむら,140.2952778,37.15694444';
GSI.MUNI_ARRAY["7465"] = '7,福島県,7465,中島村,なかじまむら,140.3502778,37.14861111';
GSI.MUNI_ARRAY["7466"] = '7,福島県,7466,矢吹町,やぶきまち,140.3386111,37.20111111';
GSI.MUNI_ARRAY["7481"] = '7,福島県,7481,棚倉町,たなぐらまち,140.3797222,37.02972222';
GSI.MUNI_ARRAY["7482"] = '7,福島県,7482,矢祭町,やまつりまち,140.4247222,36.87138889';
GSI.MUNI_ARRAY["7483"] = '7,福島県,7483,塙町,はなわまち,140.4097222,36.95722222';
GSI.MUNI_ARRAY["7484"] = '7,福島県,7484,鮫川村,さめがわむら,140.5097222,37.0425';
GSI.MUNI_ARRAY["7501"] = '7,福島県,7501,石川町,いしかわまち,140.4522222,37.14416667';
GSI.MUNI_ARRAY["7502"] = '7,福島県,7502,玉川村,たまかわむら,140.4088889,37.21083333';
GSI.MUNI_ARRAY["7503"] = '7,福島県,7503,平田村,ひらたむら,140.5702778,37.21805556';
GSI.MUNI_ARRAY["7504"] = '7,福島県,7504,浅川町,あさかわまち,140.4127778,37.08083333';
GSI.MUNI_ARRAY["7505"] = '7,福島県,7505,古殿町,ふるどのまち,140.5558333,37.08916667';
GSI.MUNI_ARRAY["7521"] = '7,福島県,7521,三春町,みはるまち,140.4927778,37.44111111';
GSI.MUNI_ARRAY["7522"] = '7,福島県,7522,小野町,おのまち,140.6263889,37.28694444';
GSI.MUNI_ARRAY["7541"] = '7,福島県,7541,広野町,ひろのまち,140.9947222,37.21444444';
GSI.MUNI_ARRAY["7542"] = '7,福島県,7542,楢葉町,ならはまち,140.9936111,37.2825';
GSI.MUNI_ARRAY["7543"] = '7,福島県,7543,富岡町,とみおかまち,141.0086111,37.34555556';
GSI.MUNI_ARRAY["7544"] = '7,福島県,7544,川内村,かわうちむら,140.8094444,37.3375';
GSI.MUNI_ARRAY["7545"] = '7,福島県,7545,大熊町,おおくままち,140.9836111,37.40444444';
GSI.MUNI_ARRAY["7546"] = '7,福島県,7546,双葉町,ふたばまち,141.0125,37.44916667';
GSI.MUNI_ARRAY["7547"] = '7,福島県,7547,浪江町,なみえまち,141.0008333,37.49472222';
GSI.MUNI_ARRAY["7548"] = '7,福島県,7548,葛尾村,かつらおむら,140.7644444,37.50361111';
GSI.MUNI_ARRAY["7561"] = '7,福島県,7561,新地町,しんちまち,140.9194444,37.87611111';
GSI.MUNI_ARRAY["7564"] = '7,福島県,7564,飯舘村,いいたてむら,140.7355556,37.67916667';
GSI.MUNI_ARRAY["8201"] = '8,茨城県,8201,水戸市,みとし,140.4713889,36.36583333';
GSI.MUNI_ARRAY["8202"] = '8,茨城県,8202,日立市,ひたちし,140.6516667,36.59916667';
GSI.MUNI_ARRAY["8203"] = '8,茨城県,8203,土浦市,つちうらし,140.1961111,36.07194444';
GSI.MUNI_ARRAY["8204"] = '8,茨城県,8204,古河市,こがし,139.7558333,36.17888889';
GSI.MUNI_ARRAY["8205"] = '8,茨城県,8205,石岡市,いしおかし,140.2872222,36.19083333';
GSI.MUNI_ARRAY["8207"] = '8,茨城県,8207,結城市,ゆうきし,139.8775,36.30527778';
GSI.MUNI_ARRAY["8208"] = '8,茨城県,8208,龍ケ崎市,りゅうがさきし,140.1822222,35.91166667';
GSI.MUNI_ARRAY["8210"] = '8,茨城県,8210,下妻市,しもつまし,139.9675,36.18444444';
GSI.MUNI_ARRAY["8211"] = '8,茨城県,8211,常総市,じょうそうし,139.9938889,36.02361111';
GSI.MUNI_ARRAY["8212"] = '8,茨城県,8212,常陸太田市,ひたちおおたし,140.5311111,36.53833333';
GSI.MUNI_ARRAY["8214"] = '8,茨城県,8214,高萩市,たかはぎし,140.7097222,36.71361111';
GSI.MUNI_ARRAY["8215"] = '8,茨城県,8215,北茨城市,きたいばらきし,140.7511111,36.80194444';
GSI.MUNI_ARRAY["8216"] = '8,茨城県,8216,笠間市,かさまし,140.3041667,36.345';
GSI.MUNI_ARRAY["8217"] = '8,茨城県,8217,取手市,とりでし,140.0502778,35.91138889';
GSI.MUNI_ARRAY["8219"] = '8,茨城県,8219,牛久市,うしくし,140.1497222,35.97944444';
GSI.MUNI_ARRAY["8220"] = '8,茨城県,8220,つくば市,つくばし,140.0763889,36.08361111';
GSI.MUNI_ARRAY["8221"] = '8,茨城県,8221,ひたちなか市,ひたちなかし,140.5344444,36.39638889';
GSI.MUNI_ARRAY["8222"] = '8,茨城県,8222,鹿嶋市,かしまし,140.645,35.96583333';
GSI.MUNI_ARRAY["8223"] = '8,茨城県,8223,潮来市,いたこし,140.5552778,35.94722222';
GSI.MUNI_ARRAY["8224"] = '8,茨城県,8224,守谷市,もりやし,139.9755556,35.95138889';
GSI.MUNI_ARRAY["8225"] = '8,茨城県,8225,常陸大宮市,ひたちおおみやし,140.4108333,36.5425';
GSI.MUNI_ARRAY["8226"] = '8,茨城県,8226,那珂市,なかし,140.4866667,36.4575';
GSI.MUNI_ARRAY["8227"] = '8,茨城県,8227,筑西市,ちくせいし,139.9830556,36.30722222';
GSI.MUNI_ARRAY["8228"] = '8,茨城県,8228,坂東市,ばんどうし,139.8888889,36.04833333';
GSI.MUNI_ARRAY["8229"] = '8,茨城県,8229,稲敷市,いなしきし,140.3238889,35.95666667';
GSI.MUNI_ARRAY["8230"] = '8,茨城県,8230,かすみがうら市,かすみがうらし,140.2372222,36.15194444';
GSI.MUNI_ARRAY["8231"] = '8,茨城県,8231,桜川市,さくらがわし,140.0905556,36.32722222';
GSI.MUNI_ARRAY["8232"] = '8,茨城県,8232,神栖市,かみすし,140.6647222,35.89';
GSI.MUNI_ARRAY["8233"] = '8,茨城県,8233,行方市,なめがたし,140.4891667,35.99027778';
GSI.MUNI_ARRAY["8234"] = '8,茨城県,8234,鉾田市,ほこたし,140.5163889,36.15861111';
GSI.MUNI_ARRAY["8235"] = '8,茨城県,8235,つくばみらい市,つくばみらいし,140.0372222,35.96305556';
GSI.MUNI_ARRAY["8236"] = '8,茨城県,8236,小美玉市,おみたまし,140.3525,36.23944444';
GSI.MUNI_ARRAY["8302"] = '8,茨城県,8302,茨城町,いばらきまち,140.4247222,36.28694444';
GSI.MUNI_ARRAY["8309"] = '8,茨城県,8309,大洗町,おおあらいまち,140.575,36.31333333';
GSI.MUNI_ARRAY["8310"] = '8,茨城県,8310,城里町,しろさとまち,140.3763889,36.47916667';
GSI.MUNI_ARRAY["8341"] = '8,茨城県,8341,東海村,とうかいむら,140.5661111,36.47305556';
GSI.MUNI_ARRAY["8364"] = '8,茨城県,8364,大子町,だいごまち,140.3552778,36.76805556';
GSI.MUNI_ARRAY["8442"] = '8,茨城県,8442,美浦村,みほむら,140.3019444,36.00444444';
GSI.MUNI_ARRAY["8443"] = '8,茨城県,8443,阿見町,あみまち,140.215,36.03083333';
GSI.MUNI_ARRAY["8447"] = '8,茨城県,8447,河内町,かわちまち,140.2444444,35.88472222';
GSI.MUNI_ARRAY["8521"] = '8,茨城県,8521,八千代町,やちよまち,139.8913889,36.18138889';
GSI.MUNI_ARRAY["8542"] = '8,茨城県,8542,五霞町,ごかまち,139.7452778,36.11444444';
GSI.MUNI_ARRAY["8546"] = '8,茨城県,8546,境町,さかいまち,139.795,36.10861111';
GSI.MUNI_ARRAY["8564"] = '8,茨城県,8564,利根町,とねまち,140.1394444,35.85777778';
GSI.MUNI_ARRAY["9201"] = '9,栃木県,9201,宇都宮市,うつのみやし,139.8827778,36.55527778';
GSI.MUNI_ARRAY["9202"] = '9,栃木県,9202,足利市,あしかがし,139.4497222,36.34027778';
GSI.MUNI_ARRAY["9203"] = '9,栃木県,9203,栃木市,とちぎし,139.7302778,36.38138889';
GSI.MUNI_ARRAY["9204"] = '9,栃木県,9204,佐野市,さのし,139.5783333,36.31444444';
GSI.MUNI_ARRAY["9205"] = '9,栃木県,9205,鹿沼市,かぬまし,139.745,36.56722222';
GSI.MUNI_ARRAY["9206"] = '9,栃木県,9206,日光市,にっこうし,139.6983333,36.72';
GSI.MUNI_ARRAY["9208"] = '9,栃木県,9208,小山市,おやまし,139.8002778,36.31472222';
GSI.MUNI_ARRAY["9209"] = '9,栃木県,9209,真岡市,もおかし,140.0130556,36.44027778';
GSI.MUNI_ARRAY["9210"] = '9,栃木県,9210,大田原市,おおたわらし,140.0155556,36.87083333';
GSI.MUNI_ARRAY["9211"] = '9,栃木県,9211,矢板市,やいたし,139.9241667,36.80666667';
GSI.MUNI_ARRAY["9213"] = '9,栃木県,9213,那須塩原市,なすしおばらし,140.0461111,36.96166667';
GSI.MUNI_ARRAY["9214"] = '9,栃木県,9214,さくら市,さくらし,139.9663889,36.68527778';
GSI.MUNI_ARRAY["9215"] = '9,栃木県,9215,那須烏山市,なすからすやまし,140.1516667,36.65694444';
GSI.MUNI_ARRAY["9216"] = '9,栃木県,9216,下野市,しもつけし,139.8422222,36.38722222';
GSI.MUNI_ARRAY["9301"] = '9,栃木県,9301,上三川町,かみのかわまち,139.91,36.43916667';
GSI.MUNI_ARRAY["9342"] = '9,栃木県,9342,益子町,ましこまち,140.0930556,36.4675';
GSI.MUNI_ARRAY["9343"] = '9,栃木県,9343,茂木町,もてぎまち,140.1875,36.53222222';
GSI.MUNI_ARRAY["9344"] = '9,栃木県,9344,市貝町,いちかいまち,140.1022222,36.54333333';
GSI.MUNI_ARRAY["9345"] = '9,栃木県,9345,芳賀町,はがまち,140.0580556,36.54805556';
GSI.MUNI_ARRAY["9361"] = '9,栃木県,9361,壬生町,みぶまち,139.8038889,36.42722222';
GSI.MUNI_ARRAY["9364"] = '9,栃木県,9364,野木町,のぎまち,139.7408333,36.23305556';
GSI.MUNI_ARRAY["9367"] = '9,栃木県,9367,岩舟町,いわふねまち,139.6561111,36.31888889';
GSI.MUNI_ARRAY["9384"] = '9,栃木県,9384,塩谷町,しおやまち,139.8505556,36.7775';
GSI.MUNI_ARRAY["9386"] = '9,栃木県,9386,高根沢町,たかねざわまち,139.9866667,36.63111111';
GSI.MUNI_ARRAY["9407"] = '9,栃木県,9407,那須町,なすまち,140.1211111,37.01972222';
GSI.MUNI_ARRAY["9411"] = '9,栃木県,9411,那珂川町,なかがわまち,140.1713889,36.73833333';
GSI.MUNI_ARRAY["10201"] = '10,群馬県,10201,前橋市,まえばしし,139.0636111,36.38916667';
GSI.MUNI_ARRAY["10202"] = '10,群馬県,10202,高崎市,たかさきし,139.0036111,36.32194444';
GSI.MUNI_ARRAY["10203"] = '10,群馬県,10203,桐生市,きりゅうし,139.3305556,36.40527778';
GSI.MUNI_ARRAY["10204"] = '10,群馬県,10204,伊勢崎市,いせさきし,139.1966667,36.31138889';
GSI.MUNI_ARRAY["10205"] = '10,群馬県,10205,太田市,おおたし,139.3758333,36.29166667';
GSI.MUNI_ARRAY["10206"] = '10,群馬県,10206,沼田市,ぬまたし,139.0441667,36.64583333';
GSI.MUNI_ARRAY["10207"] = '10,群馬県,10207,館林市,たてばやしし,139.5422222,36.245';
GSI.MUNI_ARRAY["10208"] = '10,群馬県,10208,渋川市,しぶかわし,139.0005556,36.48944444';
GSI.MUNI_ARRAY["10209"] = '10,群馬県,10209,藤岡市,ふじおかし,139.0747222,36.25861111';
GSI.MUNI_ARRAY["10210"] = '10,群馬県,10210,富岡市,とみおかし,138.89,36.26';
GSI.MUNI_ARRAY["10211"] = '10,群馬県,10211,安中市,あんなかし,138.8872222,36.32638889';
GSI.MUNI_ARRAY["10212"] = '10,群馬県,10212,みどり市,みどりし,139.2811111,36.39472222';
GSI.MUNI_ARRAY["10344"] = '10,群馬県,10344,榛東村,しんとうむら,138.9813889,36.44027778';
GSI.MUNI_ARRAY["10345"] = '10,群馬県,10345,吉岡町,よしおかまち,139.0102778,36.4475';
GSI.MUNI_ARRAY["10366"] = '10,群馬県,10366,上野村,うえのむら,138.7772222,36.08333333';
GSI.MUNI_ARRAY["10367"] = '10,群馬県,10367,神流町,かんなまち,138.9169444,36.11611111';
GSI.MUNI_ARRAY["10382"] = '10,群馬県,10382,下仁田町,しもにたまち,138.7891667,36.2125';
GSI.MUNI_ARRAY["10383"] = '10,群馬県,10383,南牧村,なんもくむら,138.7113889,36.15861111';
GSI.MUNI_ARRAY["10384"] = '10,群馬県,10384,甘楽町,かんらまち,138.9219444,36.24305556';
GSI.MUNI_ARRAY["10421"] = '10,群馬県,10421,中之条町,なかのじょうまち,138.8411111,36.59';
GSI.MUNI_ARRAY["10424"] = '10,群馬県,10424,長野原町,ながのはらまち,138.6375,36.55222222';
GSI.MUNI_ARRAY["10425"] = '10,群馬県,10425,嬬恋村,つまごいむら,138.5302778,36.51666667';
GSI.MUNI_ARRAY["10426"] = '10,群馬県,10426,草津町,くさつまち,138.5961111,36.62055556';
GSI.MUNI_ARRAY["10428"] = '10,群馬県,10428,高山村,たかやまむら,138.9436111,36.62083333';
GSI.MUNI_ARRAY["10429"] = '10,群馬県,10429,東吾妻町,ひがしあがつままち,138.8255556,36.57138889';
GSI.MUNI_ARRAY["10443"] = '10,群馬県,10443,片品村,かたしなむら,139.2252778,36.7725';
GSI.MUNI_ARRAY["10444"] = '10,群馬県,10444,川場村,かわばむら,139.1066667,36.69472222';
GSI.MUNI_ARRAY["10448"] = '10,群馬県,10448,昭和村,しょうわむら,139.0658333,36.63972222';
GSI.MUNI_ARRAY["10449"] = '10,群馬県,10449,みなかみ町,みなかみまち,138.9991667,36.67888889';
GSI.MUNI_ARRAY["10464"] = '10,群馬県,10464,玉村町,たまむらまち,139.115,36.30444444';
GSI.MUNI_ARRAY["10521"] = '10,群馬県,10521,板倉町,いたくらまち,139.6102778,36.22305556';
GSI.MUNI_ARRAY["10522"] = '10,群馬県,10522,明和町,めいわまち,139.5341667,36.21138889';
GSI.MUNI_ARRAY["10523"] = '10,群馬県,10523,千代田町,ちよだまち,139.4425,36.21777778';
GSI.MUNI_ARRAY["10524"] = '10,群馬県,10524,大泉町,おおいずみまち,139.405,36.24777778';
GSI.MUNI_ARRAY["10525"] = '10,群馬県,10525,邑楽町,おうらまち,139.4625,36.2525';
GSI.MUNI_ARRAY["11100"] = '11,埼玉県,11100,さいたま市,さいたまし,139.6452778,35.86166667';
GSI.MUNI_ARRAY["11101"] = '11,埼玉県,11101,さいたま市　西区,さいたまし　にしく,139.5797222,35.925';
GSI.MUNI_ARRAY["11102"] = '11,埼玉県,11102,さいたま市　北区,さいたまし　きたく,139.62,35.93083333';
GSI.MUNI_ARRAY["11103"] = '11,埼玉県,11103,さいたま市　大宮区,さいたまし　おおみやく,139.6286111,35.90611111';
GSI.MUNI_ARRAY["11104"] = '11,埼玉県,11104,さいたま市　見沼区,さいたまし　みぬまく,139.6544444,35.93527778';
GSI.MUNI_ARRAY["11105"] = '11,埼玉県,11105,さいたま市　中央区,さいたまし　ちゅうおうく,139.6261111,35.88388889';
GSI.MUNI_ARRAY["11106"] = '11,埼玉県,11106,さいたま市　桜区,さいたまし　さくらく,139.6094444,35.85694444';
GSI.MUNI_ARRAY["11107"] = '11,埼玉県,11107,さいたま市　浦和区,さいたまし　うらわく,139.6452778,35.86166667';
GSI.MUNI_ARRAY["11108"] = '11,埼玉県,11108,さいたま市　南区,さいたまし　みなみく,139.6480556,35.84638889';
GSI.MUNI_ARRAY["11109"] = '11,埼玉県,11109,さいたま市　緑区,さいたまし　みどりく,139.6838889,35.87111111';
GSI.MUNI_ARRAY["11110"] = '11,埼玉県,11110,さいたま市　岩槻区,さいたまし　いわつきく,139.6941694,35.94972146';
GSI.MUNI_ARRAY["11201"] = '11,埼玉県,11201,川越市,かわごえし,139.4858333,35.925';
GSI.MUNI_ARRAY["11202"] = '11,埼玉県,11202,熊谷市,くまがやし,139.3886111,36.14722222';
GSI.MUNI_ARRAY["11203"] = '11,埼玉県,11203,川口市,かわぐちし,139.7241667,35.80777778';
GSI.MUNI_ARRAY["11206"] = '11,埼玉県,11206,行田市,ぎょうだし,139.4558333,36.13888889';
GSI.MUNI_ARRAY["11207"] = '11,埼玉県,11207,秩父市,ちちぶし,139.0855556,35.99166667';
GSI.MUNI_ARRAY["11208"] = '11,埼玉県,11208,所沢市,ところざわし,139.4688889,35.79944444';
GSI.MUNI_ARRAY["11209"] = '11,埼玉県,11209,飯能市,はんのうし,139.3277778,35.85583333';
GSI.MUNI_ARRAY["11210"] = '11,埼玉県,11210,加須市,かぞし,139.6019444,36.13138889';
GSI.MUNI_ARRAY["11211"] = '11,埼玉県,11211,本庄市,ほんじょうし,139.1902778,36.24388889';
GSI.MUNI_ARRAY["11212"] = '11,埼玉県,11212,東松山市,ひがしまつやまし,139.4,36.04222222';
GSI.MUNI_ARRAY["11214"] = '11,埼玉県,11214,春日部市,かすかべし,139.7525,35.97527778';
GSI.MUNI_ARRAY["11215"] = '11,埼玉県,11215,狭山市,さやまし,139.4122222,35.85305556';
GSI.MUNI_ARRAY["11216"] = '11,埼玉県,11216,羽生市,はにゅうし,139.5486111,36.17277778';
GSI.MUNI_ARRAY["11217"] = '11,埼玉県,11217,鴻巣市,こうのすし,139.5222222,36.06583333';
GSI.MUNI_ARRAY["11218"] = '11,埼玉県,11218,深谷市,ふかやし,139.2813889,36.1975';
GSI.MUNI_ARRAY["11219"] = '11,埼玉県,11219,上尾市,あげおし,139.5933333,35.9775';
GSI.MUNI_ARRAY["11221"] = '11,埼玉県,11221,草加市,そうかし,139.8055556,35.82555556';
GSI.MUNI_ARRAY["11222"] = '11,埼玉県,11222,越谷市,こしがやし,139.7908333,35.89111111';
GSI.MUNI_ARRAY["11223"] = '11,埼玉県,11223,蕨市,わらびし,139.6794444,35.82555556';
GSI.MUNI_ARRAY["11224"] = '11,埼玉県,11224,戸田市,とだし,139.6777778,35.8175';
GSI.MUNI_ARRAY["11225"] = '11,埼玉県,11225,入間市,いるまし,139.3911111,35.83583333';
GSI.MUNI_ARRAY["11227"] = '11,埼玉県,11227,朝霞市,あさかし,139.5936111,35.79722222';
GSI.MUNI_ARRAY["11228"] = '11,埼玉県,11228,志木市,しきし,139.5802778,35.83666667';
GSI.MUNI_ARRAY["11229"] = '11,埼玉県,11229,和光市,わこうし,139.6058333,35.78138889';
GSI.MUNI_ARRAY["11230"] = '11,埼玉県,11230,新座市,にいざし,139.5652778,35.79333333';
GSI.MUNI_ARRAY["11231"] = '11,埼玉県,11231,桶川市,おけがわし,139.5583333,36.00277778';
GSI.MUNI_ARRAY["11232"] = '11,埼玉県,11232,久喜市,くきし,139.6669444,36.06222222';
GSI.MUNI_ARRAY["11233"] = '11,埼玉県,11233,北本市,きたもとし,139.5302778,36.02722222';
GSI.MUNI_ARRAY["11234"] = '11,埼玉県,11234,八潮市,やしおし,139.8391667,35.82277778';
GSI.MUNI_ARRAY["11235"] = '11,埼玉県,11235,富士見市,ふじみし,139.5491667,35.85666667';
GSI.MUNI_ARRAY["11237"] = '11,埼玉県,11237,三郷市,みさとし,139.8725,35.83027778';
GSI.MUNI_ARRAY["11238"] = '11,埼玉県,11238,蓮田市,はすだし,139.6622222,35.99416667';
GSI.MUNI_ARRAY["11239"] = '11,埼玉県,11239,坂戸市,さかどし,139.4030556,35.95722222';
GSI.MUNI_ARRAY["11240"] = '11,埼玉県,11240,幸手市,さってし,139.7258333,36.07805556';
GSI.MUNI_ARRAY["11241"] = '11,埼玉県,11241,鶴ヶ島市,つるがしまし,139.3930556,35.93444444';
GSI.MUNI_ARRAY["11242"] = '11,埼玉県,11242,日高市,ひだかし,139.3391667,35.90777778';
GSI.MUNI_ARRAY["11243"] = '11,埼玉県,11243,吉川市,よしかわし,139.8413889,35.89111111';
GSI.MUNI_ARRAY["11245"] = '11,埼玉県,11245,ふじみ野市,ふじみのし,139.5197222,35.87944444';
GSI.MUNI_ARRAY["11301"] = '11,埼玉県,11301,伊奈町,いなまち,139.6238889,36';
GSI.MUNI_ARRAY["11324"] = '11,埼玉県,11324,三芳町,みよしまち,139.5266667,35.82833333';
GSI.MUNI_ARRAY["11326"] = '11,埼玉県,11326,毛呂山町,もろやままち,139.3161111,35.94166667';
GSI.MUNI_ARRAY["11327"] = '11,埼玉県,11327,越生町,おごせまち,139.2941667,35.96444444';
GSI.MUNI_ARRAY["11341"] = '11,埼玉県,11341,滑川町,なめがわまち,139.3608333,36.06611111';
GSI.MUNI_ARRAY["11342"] = '11,埼玉県,11342,嵐山町,らんざんまち,139.3202778,36.05666667';
GSI.MUNI_ARRAY["11343"] = '11,埼玉県,11343,小川町,おがわまち,139.2619444,36.05666667';
GSI.MUNI_ARRAY["11346"] = '11,埼玉県,11346,川島町,かわじままち,139.4816667,35.98138889';
GSI.MUNI_ARRAY["11347"] = '11,埼玉県,11347,吉見町,よしみまち,139.4538889,36.04';
GSI.MUNI_ARRAY["11348"] = '11,埼玉県,11348,鳩山町,はとやままち,139.3341667,35.98166667';
GSI.MUNI_ARRAY["11349"] = '11,埼玉県,11349,ときがわ町,ときがわまち,139.2969444,36.00861111';
GSI.MUNI_ARRAY["11361"] = '11,埼玉県,11361,横瀬町,よこぜまち,139.1002778,35.98722222';
GSI.MUNI_ARRAY["11362"] = '11,埼玉県,11362,皆野町,みなのまち,139.0988889,36.07083333';
GSI.MUNI_ARRAY["11363"] = '11,埼玉県,11363,長瀞町,ながとろまち,139.11,36.11472222';
GSI.MUNI_ARRAY["11365"] = '11,埼玉県,11365,小鹿野町,おがのまち,139.0086111,36.01722222';
GSI.MUNI_ARRAY["11369"] = '11,埼玉県,11369,東秩父村,ひがしちちぶむら,139.1947222,36.05805556';
GSI.MUNI_ARRAY["11381"] = '11,埼玉県,11381,美里町,みさとまち,139.1813889,36.17722222';
GSI.MUNI_ARRAY["11383"] = '11,埼玉県,11383,神川町,かみかわまち,139.1019444,36.21388889';
GSI.MUNI_ARRAY["11385"] = '11,埼玉県,11385,上里町,かみさとまち,139.1447222,36.25194444';
GSI.MUNI_ARRAY["11408"] = '11,埼玉県,11408,寄居町,よりいまち,139.1930556,36.11833333';
GSI.MUNI_ARRAY["11442"] = '11,埼玉県,11442,宮代町,みやしろまち,139.7227778,36.0225';
GSI.MUNI_ARRAY["11246"] = '11,埼玉県,11246,白岡市,しらおかし,139.6769444,36.01888889';
GSI.MUNI_ARRAY["11464"] = '11,埼玉県,11464,杉戸町,すぎとまち,139.7366667,36.02555556';
GSI.MUNI_ARRAY["11465"] = '11,埼玉県,11465,松伏町,まつぶしまち,139.8152778,35.92583333';
GSI.MUNI_ARRAY["12100"] = '12,千葉県,12100,千葉市,ちばし,140.1063889,35.60722222';
GSI.MUNI_ARRAY["12101"] = '12,千葉県,12101,千葉市　中央区,ちばし　ちゅうおうく,140.1247222,35.60888889';
GSI.MUNI_ARRAY["12102"] = '12,千葉県,12102,千葉市　花見川区,ちばし　はなみがわく,140.0691667,35.66277778';
GSI.MUNI_ARRAY["12103"] = '12,千葉県,12103,千葉市　稲毛区,ちばし　いなげく,140.1072222,35.63638889';
GSI.MUNI_ARRAY["12104"] = '12,千葉県,12104,千葉市　若葉区,ちばし　わかばく,140.1555556,35.63416667';
GSI.MUNI_ARRAY["12105"] = '12,千葉県,12105,千葉市　緑区,ちばし　みどりく,140.1763889,35.56027778';
GSI.MUNI_ARRAY["12106"] = '12,千葉県,12106,千葉市　美浜区,ちばし　みはまく,140.0630556,35.64027778';
GSI.MUNI_ARRAY["12202"] = '12,千葉県,12202,銚子市,ちょうしし,140.8266667,35.73472222';
GSI.MUNI_ARRAY["12203"] = '12,千葉県,12203,市川市,いちかわし,139.9311111,35.72194444';
GSI.MUNI_ARRAY["12204"] = '12,千葉県,12204,船橋市,ふなばしし,139.9825,35.69472222';
GSI.MUNI_ARRAY["12205"] = '12,千葉県,12205,館山市,たてやまし,139.87,34.99666667';
GSI.MUNI_ARRAY["12206"] = '12,千葉県,12206,木更津市,きさらづし,139.9169444,35.37611111';
GSI.MUNI_ARRAY["12207"] = '12,千葉県,12207,松戸市,まつどし,139.9030556,35.78777778';
GSI.MUNI_ARRAY["12208"] = '12,千葉県,12208,野田市,のだし,139.8747222,35.955';
GSI.MUNI_ARRAY["12210"] = '12,千葉県,12210,茂原市,もばらし,140.2880556,35.42833333';
GSI.MUNI_ARRAY["12211"] = '12,千葉県,12211,成田市,なりたし,140.3183333,35.77666667';
GSI.MUNI_ARRAY["12212"] = '12,千葉県,12212,佐倉市,さくらし,140.2238889,35.72388889';
GSI.MUNI_ARRAY["12213"] = '12,千葉県,12213,東金市,とうがねし,140.3661111,35.56';
GSI.MUNI_ARRAY["12215"] = '12,千葉県,12215,旭市,あさひし,140.6466667,35.72027778';
GSI.MUNI_ARRAY["12216"] = '12,千葉県,12216,習志野市,ならしのし,140.0266667,35.68083333';
GSI.MUNI_ARRAY["12217"] = '12,千葉県,12217,柏市,かしわし,139.9763889,35.86805556';
GSI.MUNI_ARRAY["12218"] = '12,千葉県,12218,勝浦市,かつうらし,140.3211111,35.1525';
GSI.MUNI_ARRAY["12219"] = '12,千葉県,12219,市原市,いちはらし,140.1155556,35.49805556';
GSI.MUNI_ARRAY["12220"] = '12,千葉県,12220,流山市,ながれやまし,139.9025,35.85611111';
GSI.MUNI_ARRAY["12221"] = '12,千葉県,12221,八千代市,やちよし,140.0997222,35.7225';
GSI.MUNI_ARRAY["12222"] = '12,千葉県,12222,我孫子市,あびこし,140.0283333,35.86416667';
GSI.MUNI_ARRAY["12223"] = '12,千葉県,12223,鴨川市,かもがわし,140.0988889,35.11416667';
GSI.MUNI_ARRAY["12224"] = '12,千葉県,12224,鎌ケ谷市,かまがやし,140.0008333,35.77694444';
GSI.MUNI_ARRAY["12225"] = '12,千葉県,12225,君津市,きみつし,139.9025,35.33055556';
GSI.MUNI_ARRAY["12226"] = '12,千葉県,12226,富津市,ふっつし,139.8569444,35.30416667';
GSI.MUNI_ARRAY["12227"] = '12,千葉県,12227,浦安市,うらやすし,139.9016667,35.65361111';
GSI.MUNI_ARRAY["12228"] = '12,千葉県,12228,四街道市,よつかいどうし,140.1683333,35.67';
GSI.MUNI_ARRAY["12229"] = '12,千葉県,12229,袖ケ浦市,そでがうらし,139.9547222,35.43';
GSI.MUNI_ARRAY["12230"] = '12,千葉県,12230,八街市,やちまたし,140.3183333,35.66583333';
GSI.MUNI_ARRAY["12231"] = '12,千葉県,12231,印西市,いんざいし,140.1458333,35.83222222';
GSI.MUNI_ARRAY["12232"] = '12,千葉県,12232,白井市,しろいし,140.0563889,35.79166667';
GSI.MUNI_ARRAY["12233"] = '12,千葉県,12233,富里市,とみさとし,140.3430556,35.72666667';
GSI.MUNI_ARRAY["12234"] = '12,千葉県,12234,南房総市,みなみぼうそうし,139.8402778,35.04333333';
GSI.MUNI_ARRAY["12235"] = '12,千葉県,12235,匝瑳市,そうさし,140.5644444,35.70777778';
GSI.MUNI_ARRAY["12236"] = '12,千葉県,12236,香取市,かとりし,140.4991667,35.89777778';
GSI.MUNI_ARRAY["12237"] = '12,千葉県,12237,山武市,さんむし,140.4136111,35.60277778';
GSI.MUNI_ARRAY["12238"] = '12,千葉県,12238,いすみ市,いすみし,140.3852778,35.25388889';
GSI.MUNI_ARRAY["12322"] = '12,千葉県,12322,酒々井町,しすいまち,140.2694444,35.725';
GSI.MUNI_ARRAY["12329"] = '12,千葉県,12329,栄町,さかえまち,140.2438889,35.84083333';
GSI.MUNI_ARRAY["12342"] = '12,千葉県,12342,神崎町,こうざきまち,140.4052778,35.90166667';
GSI.MUNI_ARRAY["12347"] = '12,千葉県,12347,多古町,たこまち,140.4677778,35.73555556';
GSI.MUNI_ARRAY["12349"] = '12,千葉県,12349,東庄町,とうのしょうまち,140.6688889,35.83722222';
GSI.MUNI_ARRAY["12239"] = '12,千葉県,12239,大網白里市,おおあみしらさとし,140.3211111,35.52166667';
GSI.MUNI_ARRAY["12403"] = '12,千葉県,12403,九十九里町,くじゅうくりまち,140.4405556,35.535';
GSI.MUNI_ARRAY["12409"] = '12,千葉県,12409,芝山町,しばやままち,140.4141667,35.69305556';
GSI.MUNI_ARRAY["12410"] = '12,千葉県,12410,横芝光町,よこしばひかりまち,140.5041667,35.66555556';
GSI.MUNI_ARRAY["12421"] = '12,千葉県,12421,一宮町,いちのみやまち,140.3688889,35.37277778';
GSI.MUNI_ARRAY["12422"] = '12,千葉県,12422,睦沢町,むつざわまち,140.3191667,35.36111111';
GSI.MUNI_ARRAY["12423"] = '12,千葉県,12423,長生村,ちょうせいむら,140.3541667,35.41222222';
GSI.MUNI_ARRAY["12424"] = '12,千葉県,12424,白子町,しらこまち,140.3744444,35.45444444';
GSI.MUNI_ARRAY["12426"] = '12,千葉県,12426,長柄町,ながらまち,140.2269444,35.43111111';
GSI.MUNI_ARRAY["12427"] = '12,千葉県,12427,長南町,ちょうなんまち,140.2372222,35.38666667';
GSI.MUNI_ARRAY["12441"] = '12,千葉県,12441,大多喜町,おおたきまち,140.2455556,35.285';
GSI.MUNI_ARRAY["12443"] = '12,千葉県,12443,御宿町,おんじゅくまち,140.3486111,35.19166667';
GSI.MUNI_ARRAY["12463"] = '12,千葉県,12463,鋸南町,きょなんまち,139.8355556,35.11111111';
GSI.MUNI_ARRAY["13101"] = '13,東京都,13101,千代田区,ちよだく,139.7536111,35.69388889';
GSI.MUNI_ARRAY["13102"] = '13,東京都,13102,中央区,ちゅうおうく,139.7722222,35.67083333';
GSI.MUNI_ARRAY["13103"] = '13,東京都,13103,港区,みなとく,139.7516667,35.65805556';
GSI.MUNI_ARRAY["13104"] = '13,東京都,13104,新宿区,しんじゅくく,139.7036111,35.69388889';
GSI.MUNI_ARRAY["13105"] = '13,東京都,13105,文京区,ぶんきょうく,139.7522222,35.70805556';
GSI.MUNI_ARRAY["13106"] = '13,東京都,13106,台東区,たいとうく,139.78,35.71277778';
GSI.MUNI_ARRAY["13107"] = '13,東京都,13107,墨田区,すみだく,139.8016667,35.71055556';
GSI.MUNI_ARRAY["13108"] = '13,東京都,13108,江東区,こうとうく,139.8172222,35.67305556';
GSI.MUNI_ARRAY["13109"] = '13,東京都,13109,品川区,しながわく,139.7302778,35.60888889';
GSI.MUNI_ARRAY["13110"] = '13,東京都,13110,目黒区,めぐろく,139.6983333,35.64138889';
GSI.MUNI_ARRAY["13111"] = '13,東京都,13111,大田区,おおたく,139.7161111,35.56138889';
GSI.MUNI_ARRAY["13112"] = '13,東京都,13112,世田谷区,せたがやく,139.6530556,35.64611111';
GSI.MUNI_ARRAY["13113"] = '13,東京都,13113,渋谷区,しぶやく,139.6980556,35.66388889';
GSI.MUNI_ARRAY["13114"] = '13,東京都,13114,中野区,なかのく,139.6638889,35.7075';
GSI.MUNI_ARRAY["13115"] = '13,東京都,13115,杉並区,すぎなみく,139.6363889,35.69944444';
GSI.MUNI_ARRAY["13116"] = '13,東京都,13116,豊島区,としまく,139.7155556,35.73222222';
GSI.MUNI_ARRAY["13117"] = '13,東京都,13117,北区,きたく,139.7336111,35.75277778';
GSI.MUNI_ARRAY["13118"] = '13,東京都,13118,荒川区,あらかわく,139.7833333,35.73611111';
GSI.MUNI_ARRAY["13119"] = '13,東京都,13119,板橋区,いたばしく,139.7094444,35.75111111';
GSI.MUNI_ARRAY["13120"] = '13,東京都,13120,練馬区,ねりまく,139.6522222,35.73555556';
GSI.MUNI_ARRAY["13121"] = '13,東京都,13121,足立区,あだちく,139.8047222,35.775';
GSI.MUNI_ARRAY["13122"] = '13,東京都,13122,葛飾区,かつしかく,139.8472222,35.74333333';
GSI.MUNI_ARRAY["13123"] = '13,東京都,13123,江戸川区,えどがわく,139.8683333,35.70666667';
GSI.MUNI_ARRAY["13201"] = '13,東京都,13201,八王子市,はちおうじし,139.3158333,35.66666667';
GSI.MUNI_ARRAY["13202"] = '13,東京都,13202,立川市,たちかわし,139.4077778,35.71388888';
GSI.MUNI_ARRAY["13203"] = '13,東京都,13203,武蔵野市,むさしのし,139.5661111,35.71777778';
GSI.MUNI_ARRAY["13204"] = '13,東京都,13204,三鷹市,みたかし,139.5594444,35.68333333';
GSI.MUNI_ARRAY["13205"] = '13,東京都,13205,青梅市,おうめし,139.2758333,35.78777778';
GSI.MUNI_ARRAY["13206"] = '13,東京都,13206,府中市,ふちゅうし,139.4777778,35.66888889';
GSI.MUNI_ARRAY["13207"] = '13,東京都,13207,昭島市,あきしまし,139.3536111,35.70555556';
GSI.MUNI_ARRAY["13208"] = '13,東京都,13208,調布市,ちょうふし,139.5408333,35.65055556';
GSI.MUNI_ARRAY["13209"] = '13,東京都,13209,町田市,まちだし,139.4466667,35.54861111';
GSI.MUNI_ARRAY["13210"] = '13,東京都,13210,小金井市,こがねいし,139.5030556,35.69944444';
GSI.MUNI_ARRAY["13211"] = '13,東京都,13211,小平市,こだいらし,139.4775,35.72861111';
GSI.MUNI_ARRAY["13212"] = '13,東京都,13212,日野市,ひのし,139.395,35.67138889';
GSI.MUNI_ARRAY["13213"] = '13,東京都,13213,東村山市,ひがしむらやまし,139.4686111,35.75472222';
GSI.MUNI_ARRAY["13214"] = '13,東京都,13214,国分寺市,こくぶんじし,139.4622222,35.71083333';
GSI.MUNI_ARRAY["13215"] = '13,東京都,13215,国立市,くにたちし,139.4413889,35.68388889';
GSI.MUNI_ARRAY["13218"] = '13,東京都,13218,福生市,ふっさし,139.3266667,35.73861111';
GSI.MUNI_ARRAY["13219"] = '13,東京都,13219,狛江市,こまえし,139.5786111,35.63472222';
GSI.MUNI_ARRAY["13220"] = '13,東京都,13220,東大和市,ひがしやまとし,139.4266667,35.74555556';
GSI.MUNI_ARRAY["13221"] = '13,東京都,13221,清瀬市,きよせし,139.5263889,35.78583333';
GSI.MUNI_ARRAY["13222"] = '13,東京都,13222,東久留米市,ひがしくるめし,139.5297222,35.75805556';
GSI.MUNI_ARRAY["13223"] = '13,東京都,13223,武蔵村山市,むさしむらやまし,139.3875,35.75472222';
GSI.MUNI_ARRAY["13224"] = '13,東京都,13224,多摩市,たまし,139.4463889,35.63694444';
GSI.MUNI_ARRAY["13225"] = '13,東京都,13225,稲城市,いなぎし,139.5047222,35.63805556';
GSI.MUNI_ARRAY["13227"] = '13,東京都,13227,羽村市,はむらし,139.3111111,35.76722222';
GSI.MUNI_ARRAY["13228"] = '13,東京都,13228,あきる野市,あきるのし,139.2941667,35.72888889';
GSI.MUNI_ARRAY["13229"] = '13,東京都,13229,西東京市,にしとうきょうし,139.5386111,35.72583333';
GSI.MUNI_ARRAY["13303"] = '13,東京都,13303,瑞穂町,みずほまち,139.3538889,35.77194444';
GSI.MUNI_ARRAY["13305"] = '13,東京都,13305,日の出町,ひのでまち,139.2575,35.74222222';
GSI.MUNI_ARRAY["13307"] = '13,東京都,13307,檜原村,ひのはらむら,139.1488889,35.72694444';
GSI.MUNI_ARRAY["13308"] = '13,東京都,13308,奥多摩町,おくたままち,139.0963889,35.80972222';
GSI.MUNI_ARRAY["13361"] = '13,東京都,13361,大島町,おおしままち,139.3558333,34.75';
GSI.MUNI_ARRAY["13362"] = '13,東京都,13362,利島村,としまむら,139.2822222,34.52944444';
GSI.MUNI_ARRAY["13363"] = '13,東京都,13363,新島村,にいじまむら,139.2572222,34.37694444';
GSI.MUNI_ARRAY["13364"] = '13,東京都,13364,神津島村,こうづしまむら,139.1347222,34.20555556';
GSI.MUNI_ARRAY["13381"] = '13,東京都,13381,三宅村,みやけむら,139.4797222,34.07583333';
GSI.MUNI_ARRAY["13382"] = '13,東京都,13382,御蔵島村,みくらじまむら,139.5958333,33.89722222';
GSI.MUNI_ARRAY["13401"] = '13,東京都,13401,八丈町,はちじょうまち,139.7908333,33.10944444';
GSI.MUNI_ARRAY["13402"] = '13,東京都,13402,青ヶ島村,あおがしまむら,139.7633333,32.46694444';
GSI.MUNI_ARRAY["13421"] = '13,東京都,13421,小笠原村,おがさわらむら,142.1919444,27.09444444';
GSI.MUNI_ARRAY["14100"] = '14,神奈川県,14100,横浜市,よこはまし,139.6380556,35.44416667';
GSI.MUNI_ARRAY["14101"] = '14,神奈川県,14101,横浜市　鶴見区,よこはまし　つるみく,139.6825,35.50833333';
GSI.MUNI_ARRAY["14102"] = '14,神奈川県,14102,横浜市　神奈川区,よこはまし　かながわく,139.6294444,35.47694444';
GSI.MUNI_ARRAY["14103"] = '14,神奈川県,14103,横浜市　西区,よこはまし　にしく,139.6169444,35.45361111';
GSI.MUNI_ARRAY["14104"] = '14,神奈川県,14104,横浜市　中区,よこはまし　なかく,139.6422222,35.44472222';
GSI.MUNI_ARRAY["14105"] = '14,神奈川県,14105,横浜市　南区,よこはまし　みなみく,139.6088889,35.43138889';
GSI.MUNI_ARRAY["14106"] = '14,神奈川県,14106,横浜市　保土ケ谷区,よこはまし　ほどがやく,139.5961111,35.46';
GSI.MUNI_ARRAY["14107"] = '14,神奈川県,14107,横浜市　磯子区,よこはまし　いそごく,139.6188889,35.40222222';
GSI.MUNI_ARRAY["14108"] = '14,神奈川県,14108,横浜市　金沢区,よこはまし　かなざわく,139.6244444,35.3375';
GSI.MUNI_ARRAY["14109"] = '14,神奈川県,14109,横浜市　港北区,よこはまし　こうほくく,139.6330556,35.51888889';
GSI.MUNI_ARRAY["14110"] = '14,神奈川県,14110,横浜市　戸塚区,よこはまし　とつかく,139.5325,35.39638889';
GSI.MUNI_ARRAY["14111"] = '14,神奈川県,14111,横浜市　港南区,よこはまし　こうなんく,139.5913889,35.40055556';
GSI.MUNI_ARRAY["14112"] = '14,神奈川県,14112,横浜市　旭区,よこはまし　あさひく,139.5447222,35.47472222';
GSI.MUNI_ARRAY["14113"] = '14,神奈川県,14113,横浜市　緑区,よこはまし　みどりく,139.5380556,35.5125';
GSI.MUNI_ARRAY["14114"] = '14,神奈川県,14114,横浜市　瀬谷区,よこはまし　せやく,139.4991667,35.46638889';
GSI.MUNI_ARRAY["14115"] = '14,神奈川県,14115,横浜市　栄区,よこはまし　さかえく,139.5541667,35.36444444';
GSI.MUNI_ARRAY["14116"] = '14,神奈川県,14116,横浜市　泉区,よこはまし　いずみく,139.4886111,35.41777778';
GSI.MUNI_ARRAY["14117"] = '14,神奈川県,14117,横浜市　青葉区,よこはまし　あおばく,139.5372222,35.55277778';
GSI.MUNI_ARRAY["14118"] = '14,神奈川県,14118,横浜市　都筑区,よこはまし　つづきく,139.5705556,35.54472222';
GSI.MUNI_ARRAY["14130"] = '14,神奈川県,14130,川崎市,かわさきし,139.7030556,35.53083333';
GSI.MUNI_ARRAY["14131"] = '14,神奈川県,14131,川崎市　川崎区,かわさきし　かわさきく,139.7038889,35.52972222';
GSI.MUNI_ARRAY["14132"] = '14,神奈川県,14132,川崎市　幸区,かわさきし　さいわいく,139.6875,35.54444444';
GSI.MUNI_ARRAY["14133"] = '14,神奈川県,14133,川崎市　中原区,かわさきし　なかはらく,139.6558333,35.57611111';
GSI.MUNI_ARRAY["14134"] = '14,神奈川県,14134,川崎市　高津区,かわさきし　たかつく,139.6080556,35.59944444';
GSI.MUNI_ARRAY["14135"] = '14,神奈川県,14135,川崎市　多摩区,かわさきし　たまく,139.5619444,35.61972222';
GSI.MUNI_ARRAY["14136"] = '14,神奈川県,14136,川崎市　宮前区,かわさきし　みやまえく,139.5786111,35.58916667';
GSI.MUNI_ARRAY["14137"] = '14,神奈川県,14137,川崎市　麻生区,かわさきし　あさおく,139.5058333,35.60388889';
GSI.MUNI_ARRAY["14150"] = '14,神奈川県,14150,相模原市,さがみはらし,139.3733333,35.57138889';
GSI.MUNI_ARRAY["14151"] = '14,神奈川県,14151,相模原市　緑区,さがみはらし　みどりく,139.345,35.59611111';
GSI.MUNI_ARRAY["14152"] = '14,神奈川県,14152,相模原市　中央区,さがみはらし　ちゅうおうく,139.3733333,35.57138889';
GSI.MUNI_ARRAY["14153"] = '14,神奈川県,14153,相模原市　南区,さがみはらし　みなみく,139.4302778,35.53027778';
GSI.MUNI_ARRAY["14201"] = '14,神奈川県,14201,横須賀市,よこすかし,139.6722222,35.28138889';
GSI.MUNI_ARRAY["14203"] = '14,神奈川県,14203,平塚市,ひらつかし,139.3497222,35.33555556';
GSI.MUNI_ARRAY["14204"] = '14,神奈川県,14204,鎌倉市,かまくらし,139.5469444,35.31916667';
GSI.MUNI_ARRAY["14205"] = '14,神奈川県,14205,藤沢市,ふじさわし,139.4913889,35.33916667';
GSI.MUNI_ARRAY["14206"] = '14,神奈川県,14206,小田原市,おだわらし,139.1522222,35.26472222';
GSI.MUNI_ARRAY["14207"] = '14,神奈川県,14207,茅ヶ崎市,ちがさきし,139.4047222,35.33388889';
GSI.MUNI_ARRAY["14208"] = '14,神奈川県,14208,逗子市,ずしし,139.5802778,35.29555556';
GSI.MUNI_ARRAY["14210"] = '14,神奈川県,14210,三浦市,みうらし,139.6205556,35.14416667';
GSI.MUNI_ARRAY["14211"] = '14,神奈川県,14211,秦野市,はだのし,139.2202778,35.37472222';
GSI.MUNI_ARRAY["14212"] = '14,神奈川県,14212,厚木市,あつぎし,139.3625,35.44305556';
GSI.MUNI_ARRAY["14213"] = '14,神奈川県,14213,大和市,やまとし,139.4580556,35.4875';
GSI.MUNI_ARRAY["14214"] = '14,神奈川県,14214,伊勢原市,いせはらし,139.315,35.40277778';
GSI.MUNI_ARRAY["14215"] = '14,神奈川県,14215,海老名市,えびなし,139.3908333,35.44638889';
GSI.MUNI_ARRAY["14216"] = '14,神奈川県,14216,座間市,ざまし,139.4075,35.48861111';
GSI.MUNI_ARRAY["14217"] = '14,神奈川県,14217,南足柄市,みなみあしがらし,139.1,35.32055556';
GSI.MUNI_ARRAY["14218"] = '14,神奈川県,14218,綾瀬市,あやせし,139.4269444,35.43722222';
GSI.MUNI_ARRAY["14301"] = '14,神奈川県,14301,葉山町,はやままち,139.5863889,35.27194444';
GSI.MUNI_ARRAY["14321"] = '14,神奈川県,14321,寒川町,さむかわまち,139.3841667,35.37305556';
GSI.MUNI_ARRAY["14341"] = '14,神奈川県,14341,大磯町,おおいそまち,139.3113889,35.30694444';
GSI.MUNI_ARRAY["14342"] = '14,神奈川県,14342,二宮町,にのみやまち,139.2552778,35.29944444';
GSI.MUNI_ARRAY["14361"] = '14,神奈川県,14361,中井町,なかいまち,139.2188889,35.33083333';
GSI.MUNI_ARRAY["14362"] = '14,神奈川県,14362,大井町,おおいまち,139.1563889,35.32666667';
GSI.MUNI_ARRAY["14363"] = '14,神奈川県,14363,松田町,まつだまち,139.1394444,35.34833333';
GSI.MUNI_ARRAY["14364"] = '14,神奈川県,14364,山北町,やまきたまち,139.0838889,35.36055556';
GSI.MUNI_ARRAY["14366"] = '14,神奈川県,14366,開成町,かいせいまち,139.1233333,35.33638889';
GSI.MUNI_ARRAY["14382"] = '14,神奈川県,14382,箱根町,はこねまち,139.1069444,35.2325';
GSI.MUNI_ARRAY["14383"] = '14,神奈川県,14383,真鶴町,まなづるまち,139.1372222,35.15833333';
GSI.MUNI_ARRAY["14384"] = '14,神奈川県,14384,湯河原町,ゆがわらまち,139.1083333,35.14777778';
GSI.MUNI_ARRAY["14401"] = '14,神奈川県,14401,愛川町,あいかわまち,139.3216667,35.52888889';
GSI.MUNI_ARRAY["14402"] = '14,神奈川県,14402,清川村,きよかわむら,139.2763889,35.48222222';
GSI.MUNI_ARRAY["15100"] = '15,新潟県,15100,新潟市,にいがたし,139.0363889,37.91611111';
GSI.MUNI_ARRAY["15101"] = '15,新潟県,15101,新潟市　北区,にいがたし　きたく,139.2186111,37.91638889';
GSI.MUNI_ARRAY["15102"] = '15,新潟県,15102,新潟市　東区,にいがたし　ひがしく,139.0925915,37.92477958';
GSI.MUNI_ARRAY["15103"] = '15,新潟県,15103,新潟市　中央区,にいがたし　ちゅうおうく,139.0363889,37.91611111';
GSI.MUNI_ARRAY["15104"] = '15,新潟県,15104,新潟市　江南区,にいがたし　こうなんく,139.0941667,37.86777778';
GSI.MUNI_ARRAY["15105"] = '15,新潟県,15105,新潟市　秋葉区,にいがたし　あきはく,139.1144444,37.78861111';
GSI.MUNI_ARRAY["15106"] = '15,新潟県,15106,新潟市　南区,にいがたし　みなみく,139.0191667,37.76583333';
GSI.MUNI_ARRAY["15107"] = '15,新潟県,15107,新潟市　西区,にいがたし　にしく,138.9716667,37.87388889';
GSI.MUNI_ARRAY["15108"] = '15,新潟県,15108,新潟市　西蒲区,にいがたし　にしかんく,138.8891667,37.76055556';
GSI.MUNI_ARRAY["15202"] = '15,新潟県,15202,長岡市,ながおかし,138.8388889,37.43638889';
GSI.MUNI_ARRAY["15204"] = '15,新潟県,15204,三条市,さんじょうし,138.9616667,37.63638889';
GSI.MUNI_ARRAY["15205"] = '15,新潟県,15205,柏崎市,かしわざきし,138.5588889,37.37194444';
GSI.MUNI_ARRAY["15206"] = '15,新潟県,15206,新発田市,しばたし,139.3277778,37.95083333';
GSI.MUNI_ARRAY["15208"] = '15,新潟県,15208,小千谷市,おぢやし,138.795,37.31444444';
GSI.MUNI_ARRAY["15209"] = '15,新潟県,15209,加茂市,かもし,139.0402778,37.66638889';
GSI.MUNI_ARRAY["15210"] = '15,新潟県,15210,十日町市,とおかまちし,138.7555556,37.1275';
GSI.MUNI_ARRAY["15211"] = '15,新潟県,15211,見附市,みつけし,138.9127778,37.53138889';
GSI.MUNI_ARRAY["15212"] = '15,新潟県,15212,村上市,むらかみし,139.48,38.22416667';
GSI.MUNI_ARRAY["15213"] = '15,新潟県,15213,燕市,つばめし,138.88,37.68611111';
GSI.MUNI_ARRAY["15216"] = '15,新潟県,15216,糸魚川市,いといがわし,137.8627778,37.03888889';
GSI.MUNI_ARRAY["15217"] = '15,新潟県,15217,妙高市,みょうこうし,138.2533423,37.02526874';
GSI.MUNI_ARRAY["15218"] = '15,新潟県,15218,五泉市,ごせんし,139.1825,37.74472222';
GSI.MUNI_ARRAY["15222"] = '15,新潟県,15222,上越市,じょうえつし,138.2361111,37.14805556';
GSI.MUNI_ARRAY["15223"] = '15,新潟県,15223,阿賀野市,あがのし,139.2258333,37.83444444';
GSI.MUNI_ARRAY["15224"] = '15,新潟県,15224,佐渡市,さどし,138.3683333,38.01805556';
GSI.MUNI_ARRAY["15225"] = '15,新潟県,15225,魚沼市,うおぬまし,138.9616667,37.23027778';
GSI.MUNI_ARRAY["15226"] = '15,新潟県,15226,南魚沼市,みなみうおぬまし,138.8761111,37.06555556';
GSI.MUNI_ARRAY["15227"] = '15,新潟県,15227,胎内市,たいないし,139.4102778,38.05972222';
GSI.MUNI_ARRAY["15307"] = '15,新潟県,15307,聖籠町,せいろうまち,139.2744444,37.97444444';
GSI.MUNI_ARRAY["15342"] = '15,新潟県,15342,弥彦村,やひこむら,138.8552778,37.69111111';
GSI.MUNI_ARRAY["15361"] = '15,新潟県,15361,田上町,たがみまち,139.0580556,37.69888889';
GSI.MUNI_ARRAY["15385"] = '15,新潟県,15385,阿賀町,あがまち,139.4586111,37.67555556';
GSI.MUNI_ARRAY["15405"] = '15,新潟県,15405,出雲崎町,いずもざきまち,138.7094444,37.53083333';
GSI.MUNI_ARRAY["15461"] = '15,新潟県,15461,湯沢町,ゆざわまち,138.8175,36.93388889';
GSI.MUNI_ARRAY["15482"] = '15,新潟県,15482,津南町,つなんまち,138.6525,37.01416667';
GSI.MUNI_ARRAY["15504"] = '15,新潟県,15504,刈羽村,かりわむら,138.6225,37.42222222';
GSI.MUNI_ARRAY["15581"] = '15,新潟県,15581,関川村,せきかわむら,139.565,38.08944444';
GSI.MUNI_ARRAY["15586"] = '15,新潟県,15586,粟島浦村,あわしまうらむら,139.2547222,38.46833333';
GSI.MUNI_ARRAY["16201"] = '16,富山県,16201,富山市,とやまし,137.2136111,36.69583333';
GSI.MUNI_ARRAY["16202"] = '16,富山県,16202,高岡市,たかおかし,137.0261111,36.75416667';
GSI.MUNI_ARRAY["16204"] = '16,富山県,16204,魚津市,うおづし,137.4091667,36.8275';
GSI.MUNI_ARRAY["16205"] = '16,富山県,16205,氷見市,ひみし,136.9863889,36.85722222';
GSI.MUNI_ARRAY["16206"] = '16,富山県,16206,滑川市,なめりかわし,137.3411111,36.76444444';
GSI.MUNI_ARRAY["16207"] = '16,富山県,16207,黒部市,くろべし,137.4491667,36.87361111';
GSI.MUNI_ARRAY["16208"] = '16,富山県,16208,砺波市,となみし,136.9622222,36.6475';
GSI.MUNI_ARRAY["16209"] = '16,富山県,16209,小矢部市,おやべし,136.8686111,36.67555556';
GSI.MUNI_ARRAY["16210"] = '16,富山県,16210,南砺市,なんとし,136.9194444,36.58777778';
GSI.MUNI_ARRAY["16211"] = '16,富山県,16211,射水市,いみずし,137.0997222,36.71222222';
GSI.MUNI_ARRAY["16321"] = '16,富山県,16321,舟橋村,ふなはしむら,137.3075,36.70361111';
GSI.MUNI_ARRAY["16322"] = '16,富山県,16322,上市町,かみいちまち,137.3625,36.69833333';
GSI.MUNI_ARRAY["16323"] = '16,富山県,16323,立山町,たてやままち,137.3136111,36.66333333';
GSI.MUNI_ARRAY["16342"] = '16,富山県,16342,入善町,にゅうぜんまち,137.5022222,36.93361111';
GSI.MUNI_ARRAY["16343"] = '16,富山県,16343,朝日町,あさひまち,137.56,36.94638889';
GSI.MUNI_ARRAY["17201"] = '17,石川県,17201,金沢市,かなざわし,136.6566667,36.56083333';
GSI.MUNI_ARRAY["17202"] = '17,石川県,17202,七尾市,ななおし,136.9672222,37.04305556';
GSI.MUNI_ARRAY["17203"] = '17,石川県,17203,小松市,こまつし,136.4455556,36.40861111';
GSI.MUNI_ARRAY["17204"] = '17,石川県,17204,輪島市,わじまし,136.8991667,37.39055556';
GSI.MUNI_ARRAY["17205"] = '17,石川県,17205,珠洲市,すずし,137.2602778,37.43638889';
GSI.MUNI_ARRAY["17206"] = '17,石川県,17206,加賀市,かがし,136.315,36.30277778';
GSI.MUNI_ARRAY["17207"] = '17,石川県,17207,羽咋市,はくいし,136.7788889,36.89361111';
GSI.MUNI_ARRAY["17209"] = '17,石川県,17209,かほく市,かほくし,136.7066667,36.72';
GSI.MUNI_ARRAY["17210"] = '17,石川県,17210,白山市,はくさんし,136.5655556,36.51444444';
GSI.MUNI_ARRAY["17211"] = '17,石川県,17211,能美市,のみし,136.4961111,36.4375';
GSI.MUNI_ARRAY["17212"] = '17,石川県,17212,野々市市,ののいちし,136.6097222,36.51944444';
GSI.MUNI_ARRAY["17324"] = '17,石川県,17324,川北町,かわきたまち,136.5422222,36.46861111';
GSI.MUNI_ARRAY["17361"] = '17,石川県,17361,津幡町,つばたまち,136.7283333,36.66861111';
GSI.MUNI_ARRAY["17365"] = '17,石川県,17365,内灘町,うちなだまち,136.645,36.65361111';
GSI.MUNI_ARRAY["17384"] = '17,石川県,17384,志賀町,しかまち,136.7780556,37.00638889';
GSI.MUNI_ARRAY["17386"] = '17,石川県,17386,宝達志水町,ほうだつしみずちょう,136.7977778,36.86277778';
GSI.MUNI_ARRAY["17407"] = '17,石川県,17407,中能登町,なかのとまち,136.9016667,36.98888889';
GSI.MUNI_ARRAY["17461"] = '17,石川県,17461,穴水町,あなみずまち,136.9125,37.23111111';
GSI.MUNI_ARRAY["17463"] = '17,石川県,17463,能登町,のとちょう,137.15,37.30666667';
GSI.MUNI_ARRAY["18201"] = '18,福井県,18201,福井市,ふくいし,136.2194444,36.06416667';
GSI.MUNI_ARRAY["18202"] = '18,福井県,18202,敦賀市,つるがし,136.0555556,35.64527778';
GSI.MUNI_ARRAY["18204"] = '18,福井県,18204,小浜市,おばまし,135.7466667,35.49555556';
GSI.MUNI_ARRAY["18205"] = '18,福井県,18205,大野市,おおのし,136.4875,35.98055556';
GSI.MUNI_ARRAY["18206"] = '18,福井県,18206,勝山市,かつやまし,136.5005556,36.06083333';
GSI.MUNI_ARRAY["18207"] = '18,福井県,18207,鯖江市,さばえし,136.1844444,35.95666667';
GSI.MUNI_ARRAY["18208"] = '18,福井県,18208,あわら市,あわらし,136.2288889,36.21138889';
GSI.MUNI_ARRAY["18209"] = '18,福井県,18209,越前市,えちぜんし,136.1691667,35.90333333';
GSI.MUNI_ARRAY["18210"] = '18,福井県,18210,坂井市,さかいし,136.2316667,36.16694444';
GSI.MUNI_ARRAY["18322"] = '18,福井県,18322,永平寺町,えいへいじちょう,136.2986111,36.09222222';
GSI.MUNI_ARRAY["18382"] = '18,福井県,18382,池田町,いけだちょう,136.3441667,35.89027778';
GSI.MUNI_ARRAY["18404"] = '18,福井県,18404,南越前町,みなみえちぜんちょう,136.1944444,35.835';
GSI.MUNI_ARRAY["18423"] = '18,福井県,18423,越前町,えちぜんちょう,136.1297222,35.97416667';
GSI.MUNI_ARRAY["18442"] = '18,福井県,18442,美浜町,みはまちょう,135.9405556,35.60055556';
GSI.MUNI_ARRAY["18481"] = '18,福井県,18481,高浜町,たかはまちょう,135.5511111,35.49027778';
GSI.MUNI_ARRAY["18483"] = '18,福井県,18483,おおい町,おおいちょう,135.6177778,35.48111111';
GSI.MUNI_ARRAY["18501"] = '18,福井県,18501,若狭町,わかさちょう,135.9083333,35.54888889';
GSI.MUNI_ARRAY["19201"] = '19,山梨県,19201,甲府市,こうふし,138.5683333,35.66222222';
GSI.MUNI_ARRAY["19202"] = '19,山梨県,19202,富士吉田市,ふじよしだし,138.8080556,35.4875';
GSI.MUNI_ARRAY["19204"] = '19,山梨県,19204,都留市,つるし,138.9055556,35.55138889';
GSI.MUNI_ARRAY["19205"] = '19,山梨県,19205,山梨市,やまなしし,138.6872222,35.69333333';
GSI.MUNI_ARRAY["19206"] = '19,山梨県,19206,大月市,おおつきし,138.94,35.61055556';
GSI.MUNI_ARRAY["19207"] = '19,山梨県,19207,韮崎市,にらさきし,138.4463889,35.70888889';
GSI.MUNI_ARRAY["19208"] = '19,山梨県,19208,南アルプス市,みなみあるぷすし,138.465,35.60833333';
GSI.MUNI_ARRAY["19209"] = '19,山梨県,19209,北杜市,ほくとし,138.4236111,35.77666667';
GSI.MUNI_ARRAY["19210"] = '19,山梨県,19210,甲斐市,かいし,138.5158333,35.66083333';
GSI.MUNI_ARRAY["19211"] = '19,山梨県,19211,笛吹市,ふえふきし,138.64,35.64722222';
GSI.MUNI_ARRAY["19212"] = '19,山梨県,19212,上野原市,うえのはらし,139.1086111,35.63027778';
GSI.MUNI_ARRAY["19213"] = '19,山梨県,19213,甲州市,こうしゅうし,138.7294444,35.70416666';
GSI.MUNI_ARRAY["19214"] = '19,山梨県,19214,中央市,ちゅうおうし,138.5172222,35.59972222';
GSI.MUNI_ARRAY["19346"] = '19,山梨県,19346,市川三郷町,いちかわみさとちょう,138.5022222,35.56527778';
GSI.MUNI_ARRAY["19364"] = '19,山梨県,19364,早川町,はやかわちょう,138.3630556,35.41277778';
GSI.MUNI_ARRAY["19365"] = '19,山梨県,19365,身延町,みのぶちょう,138.4425,35.4675';
GSI.MUNI_ARRAY["19366"] = '19,山梨県,19366,南部町,なんぶちょう,138.4861111,35.2425';
GSI.MUNI_ARRAY["19368"] = '19,山梨県,19368,富士川町,ふじかわちょう,138.4613889,35.56111111';
GSI.MUNI_ARRAY["19384"] = '19,山梨県,19384,昭和町,しょうわちょう,138.535,35.62805556';
GSI.MUNI_ARRAY["19422"] = '19,山梨県,19422,道志村,どうしむら,139.0336111,35.52805556';
GSI.MUNI_ARRAY["19423"] = '19,山梨県,19423,西桂町,にしかつらちょう,138.8469444,35.52416667';
GSI.MUNI_ARRAY["19424"] = '19,山梨県,19424,忍野村,おしのむら,138.8477778,35.46';
GSI.MUNI_ARRAY["19425"] = '19,山梨県,19425,山中湖村,やまなかこむら,138.8608333,35.41055556';
GSI.MUNI_ARRAY["19429"] = '19,山梨県,19429,鳴沢村,なるさわむら,138.7066667,35.48138889';
GSI.MUNI_ARRAY["19430"] = '19,山梨県,19430,富士河口湖町,ふじかわぐちこまち,138.755,35.49722222';
GSI.MUNI_ARRAY["19442"] = '19,山梨県,19442,小菅村,こすげむら,138.9402778,35.76027778';
GSI.MUNI_ARRAY["19443"] = '19,山梨県,19443,丹波山村,たばやまむら,138.9222222,35.78972222';
GSI.MUNI_ARRAY["20201"] = '20,長野県,20201,長野市,ながのし,138.1944444,36.64861111';
GSI.MUNI_ARRAY["20202"] = '20,長野県,20202,松本市,まつもとし,137.9719444,36.23805556';
GSI.MUNI_ARRAY["20203"] = '20,長野県,20203,上田市,うえだし,138.2491667,36.40194444';
GSI.MUNI_ARRAY["20204"] = '20,長野県,20204,岡谷市,おかやし,138.0494444,36.06694444';
GSI.MUNI_ARRAY["20205"] = '20,長野県,20205,飯田市,いいだし,137.8219444,35.51472222';
GSI.MUNI_ARRAY["20206"] = '20,長野県,20206,諏訪市,すわし,138.1141667,36.03916667';
GSI.MUNI_ARRAY["20207"] = '20,長野県,20207,須坂市,すざかし,138.3069444,36.65111111';
GSI.MUNI_ARRAY["20208"] = '20,長野県,20208,小諸市,こもろし,138.4261111,36.32694444';
GSI.MUNI_ARRAY["20209"] = '20,長野県,20209,伊那市,いなし,137.9538889,35.8275';
GSI.MUNI_ARRAY["20210"] = '20,長野県,20210,駒ヶ根市,こまがねし,137.9338889,35.72888889';
GSI.MUNI_ARRAY["20211"] = '20,長野県,20211,中野市,なかのし,138.3694444,36.74194444';
GSI.MUNI_ARRAY["20212"] = '20,長野県,20212,大町市,おおまちし,137.8508333,36.50305556';
GSI.MUNI_ARRAY["20213"] = '20,長野県,20213,飯山市,いいやまし,138.3655556,36.85166667';
GSI.MUNI_ARRAY["20214"] = '20,長野県,20214,茅野市,ちのし,138.1588889,35.99555556';
GSI.MUNI_ARRAY["20215"] = '20,長野県,20215,塩尻市,しおじりし,137.9536111,36.115';
GSI.MUNI_ARRAY["20217"] = '20,長野県,20217,佐久市,さくし,138.4769444,36.24888889';
GSI.MUNI_ARRAY["20218"] = '20,長野県,20218,千曲市,ちくまし,138.12,36.53388889';
GSI.MUNI_ARRAY["20219"] = '20,長野県,20219,東御市,とうみし,138.3305556,36.35944444';
GSI.MUNI_ARRAY["20220"] = '20,長野県,20220,安曇野市,あづみのし,137.8997222,36.30277778';
GSI.MUNI_ARRAY["20303"] = '20,長野県,20303,小海町,こうみまち,138.4836111,36.095';
GSI.MUNI_ARRAY["20304"] = '20,長野県,20304,川上村,かわかみむら,138.5783333,35.97555556';
GSI.MUNI_ARRAY["20305"] = '20,長野県,20305,南牧村,みなみまきむら,138.4922222,36.02083333';
GSI.MUNI_ARRAY["20306"] = '20,長野県,20306,南相木村,みなみあいきむら,138.5469444,36.03611111';
GSI.MUNI_ARRAY["20307"] = '20,長野県,20307,北相木村,きたあいきむら,138.5511111,36.05916667';
GSI.MUNI_ARRAY["20309"] = '20,長野県,20309,佐久穂町,さくほまち,138.4833333,36.16111111';
GSI.MUNI_ARRAY["20321"] = '20,長野県,20321,軽井沢町,かるいざわまち,138.5969444,36.34833333';
GSI.MUNI_ARRAY["20323"] = '20,長野県,20323,御代田町,みよたまち,138.5088889,36.32138889';
GSI.MUNI_ARRAY["20324"] = '20,長野県,20324,立科町,たてしなまち,138.3161111,36.27194444';
GSI.MUNI_ARRAY["20349"] = '20,長野県,20349,青木村,あおきむら,138.1286111,36.37';
GSI.MUNI_ARRAY["20350"] = '20,長野県,20350,長和町,ながわまち,138.2677778,36.25611111';
GSI.MUNI_ARRAY["20361"] = '20,長野県,20361,下諏訪町,しもすわまち,138.0802778,36.06972222';
GSI.MUNI_ARRAY["20362"] = '20,長野県,20362,富士見町,ふじみまち,138.2408333,35.91472222';
GSI.MUNI_ARRAY["20363"] = '20,長野県,20363,原村,はらむら,138.2175,35.96444444';
GSI.MUNI_ARRAY["20382"] = '20,長野県,20382,辰野町,たつのまち,137.9875,35.9825';
GSI.MUNI_ARRAY["20383"] = '20,長野県,20383,箕輪町,みのわまち,137.9819444,35.915';
GSI.MUNI_ARRAY["20384"] = '20,長野県,20384,飯島町,いいじままち,137.9194444,35.67638889';
GSI.MUNI_ARRAY["20385"] = '20,長野県,20385,南箕輪村,みなみみのわむら,137.9752778,35.87277778';
GSI.MUNI_ARRAY["20386"] = '20,長野県,20386,中川村,なかがわむら,137.9461111,35.63444444';
GSI.MUNI_ARRAY["20388"] = '20,長野県,20388,宮田村,みやだむら,137.9444444,35.76888889';
GSI.MUNI_ARRAY["20402"] = '20,長野県,20402,松川町,まつかわまち,137.9097222,35.59722222';
GSI.MUNI_ARRAY["20403"] = '20,長野県,20403,高森町,たかもりまち,137.8786111,35.55138889';
GSI.MUNI_ARRAY["20404"] = '20,長野県,20404,阿南町,あなんちょう,137.8161111,35.32361111';
GSI.MUNI_ARRAY["20407"] = '20,長野県,20407,阿智村,あちむら,137.7475,35.44388889';
GSI.MUNI_ARRAY["20409"] = '20,長野県,20409,平谷村,ひらやむら,137.6302778,35.32333333';
GSI.MUNI_ARRAY["20410"] = '20,長野県,20410,根羽村,ねばむら,137.5811111,35.25305556';
GSI.MUNI_ARRAY["20411"] = '20,長野県,20411,下條村,しもじょうむら,137.7861111,35.3975';
GSI.MUNI_ARRAY["20412"] = '20,長野県,20412,売木村,うるぎむら,137.7111111,35.27111111';
GSI.MUNI_ARRAY["20413"] = '20,長野県,20413,天龍村,てんりゅうむら,137.8544444,35.27638889';
GSI.MUNI_ARRAY["20414"] = '20,長野県,20414,泰阜村,やすおかむら,137.8458333,35.37722222';
GSI.MUNI_ARRAY["20415"] = '20,長野県,20415,喬木村,たかぎむら,137.8738889,35.51388889';
GSI.MUNI_ARRAY["20416"] = '20,長野県,20416,豊丘村,とよおかむら,137.8958333,35.55138889';
GSI.MUNI_ARRAY["20417"] = '20,長野県,20417,大鹿村,おおしかむら,138.0341667,35.57833333';
GSI.MUNI_ARRAY["20422"] = '20,長野県,20422,上松町,あげまつまち,137.6941667,35.78388889';
GSI.MUNI_ARRAY["20423"] = '20,長野県,20423,南木曽町,なぎそまち,137.6088889,35.60361111';
GSI.MUNI_ARRAY["20425"] = '20,長野県,20425,木祖村,きそむら,137.7830556,35.93638889';
GSI.MUNI_ARRAY["20429"] = '20,長野県,20429,王滝村,おうたきむら,137.5511111,35.80944444';
GSI.MUNI_ARRAY["20430"] = '20,長野県,20430,大桑村,おおくわむら,137.665,35.68277778';
GSI.MUNI_ARRAY["20432"] = '20,長野県,20432,木曽町,きそまち,137.6916667,35.8425';
GSI.MUNI_ARRAY["20446"] = '20,長野県,20446,麻績村,おみむら,138.0452778,36.45611111';
GSI.MUNI_ARRAY["20448"] = '20,長野県,20448,生坂村,いくさかむら,137.9275,36.42527778';
GSI.MUNI_ARRAY["20450"] = '20,長野県,20450,山形村,やまがたむら,137.8788889,36.16805556';
GSI.MUNI_ARRAY["20451"] = '20,長野県,20451,朝日村,あさひむら,137.8663889,36.12361111';
GSI.MUNI_ARRAY["20452"] = '20,長野県,20452,筑北村,ちくほくむら,138.0152778,36.42638889';
GSI.MUNI_ARRAY["20481"] = '20,長野県,20481,池田町,いけだまち,137.8747222,36.42138889';
GSI.MUNI_ARRAY["20482"] = '20,長野県,20482,松川村,まつかわむら,137.8544444,36.42416667';
GSI.MUNI_ARRAY["20485"] = '20,長野県,20485,白馬村,はくばむら,137.8622222,36.69833333';
GSI.MUNI_ARRAY["20486"] = '20,長野県,20486,小谷村,おたりむら,137.9083333,36.77916667';
GSI.MUNI_ARRAY["20521"] = '20,長野県,20521,坂城町,さかきまち,138.1802778,36.46194444';
GSI.MUNI_ARRAY["20541"] = '20,長野県,20541,小布施町,おぶせまち,138.3122222,36.69777778';
GSI.MUNI_ARRAY["20543"] = '20,長野県,20543,高山村,たかやまむら,138.3630556,36.67972222';
GSI.MUNI_ARRAY["20561"] = '20,長野県,20561,山ノ内町,やまのうちまち,138.4125,36.74472222';
GSI.MUNI_ARRAY["20562"] = '20,長野県,20562,木島平村,きじまだいらむら,138.4066667,36.85861111';
GSI.MUNI_ARRAY["20563"] = '20,長野県,20563,野沢温泉村,のざわおんせんむら,138.4405556,36.92277778';
GSI.MUNI_ARRAY["20583"] = '20,長野県,20583,信濃町,しなのまち,138.2069444,36.80638889';
GSI.MUNI_ARRAY["20588"] = '20,長野県,20588,小川村,おがわむら,137.9744444,36.61694444';
GSI.MUNI_ARRAY["20590"] = '20,長野県,20590,飯綱町,いいづなまち,138.2355556,36.755';
GSI.MUNI_ARRAY["20602"] = '20,長野県,20602,栄村,さかえむら,138.5775,36.9875';
GSI.MUNI_ARRAY["21201"] = '21,岐阜県,21201,岐阜市,ぎふし,136.7608333,35.42333333';
GSI.MUNI_ARRAY["21202"] = '21,岐阜県,21202,大垣市,おおがきし,136.6127778,35.35944444';
GSI.MUNI_ARRAY["21203"] = '21,岐阜県,21203,高山市,たかやまし,137.2522222,36.14583333';
GSI.MUNI_ARRAY["21204"] = '21,岐阜県,21204,多治見市,たじみし,137.1322222,35.33277778';
GSI.MUNI_ARRAY["21205"] = '21,岐阜県,21205,関市,せきし,136.9177778,35.49583333';
GSI.MUNI_ARRAY["21206"] = '21,岐阜県,21206,中津川市,なかつがわし,137.5005556,35.4875';
GSI.MUNI_ARRAY["21207"] = '21,岐阜県,21207,美濃市,みのし,136.9075,35.54472222';
GSI.MUNI_ARRAY["21208"] = '21,岐阜県,21208,瑞浪市,みずなみし,137.2544444,35.36194444';
GSI.MUNI_ARRAY["21209"] = '21,岐阜県,21209,羽島市,はしまし,136.7033333,35.32';
GSI.MUNI_ARRAY["21210"] = '21,岐阜県,21210,恵那市,えなし,137.4127778,35.44944444';
GSI.MUNI_ARRAY["21211"] = '21,岐阜県,21211,美濃加茂市,みのかもし,137.0155556,35.44027778';
GSI.MUNI_ARRAY["21212"] = '21,岐阜県,21212,土岐市,ときし,137.1833333,35.3525';
GSI.MUNI_ARRAY["21213"] = '21,岐阜県,21213,各務原市,かかみがはらし,136.8486111,35.39888889';
GSI.MUNI_ARRAY["21214"] = '21,岐阜県,21214,可児市,かにし,137.0611111,35.42583333';
GSI.MUNI_ARRAY["21215"] = '21,岐阜県,21215,山県市,やまがたし,136.7813889,35.50611111';
GSI.MUNI_ARRAY["21216"] = '21,岐阜県,21216,瑞穂市,みずほし,136.6908333,35.39194444';
GSI.MUNI_ARRAY["21217"] = '21,岐阜県,21217,飛騨市,ひだし,137.1861111,36.23833333';
GSI.MUNI_ARRAY["21218"] = '21,岐阜県,21218,本巣市,もとすし,136.6786111,35.48305556';
GSI.MUNI_ARRAY["21219"] = '21,岐阜県,21219,郡上市,ぐじょうし,136.9644444,35.74861111';
GSI.MUNI_ARRAY["21220"] = '21,岐阜県,21220,下呂市,げろし,137.2441667,35.80583333';
GSI.MUNI_ARRAY["21221"] = '21,岐阜県,21221,海津市,かいづし,136.6366667,35.22055556';
GSI.MUNI_ARRAY["21302"] = '21,岐阜県,21302,岐南町,ぎなんちょう,136.7827778,35.38972222';
GSI.MUNI_ARRAY["21303"] = '21,岐阜県,21303,笠松町,かさまつちょう,136.7633333,35.36722222';
GSI.MUNI_ARRAY["21341"] = '21,岐阜県,21341,養老町,ようろうちょう,136.5613889,35.30833333';
GSI.MUNI_ARRAY["21361"] = '21,岐阜県,21361,垂井町,たるいちょう,136.5269444,35.37027778';
GSI.MUNI_ARRAY["21362"] = '21,岐阜県,21362,関ケ原町,せきがはらちょう,136.4672222,35.36527778';
GSI.MUNI_ARRAY["21381"] = '21,岐阜県,21381,神戸町,ごうどちょう,136.6086111,35.4175';
GSI.MUNI_ARRAY["21382"] = '21,岐阜県,21382,輪之内町,わのうちちょう,136.6375,35.285';
GSI.MUNI_ARRAY["21383"] = '21,岐阜県,21383,安八町,あんぱちちょう,136.6655556,35.33555556';
GSI.MUNI_ARRAY["21401"] = '21,岐阜県,21401,揖斐川町,いびがわちょう,136.5680556,35.48694444';
GSI.MUNI_ARRAY["21403"] = '21,岐阜県,21403,大野町,おおのちょう,136.6275,35.47055556';
GSI.MUNI_ARRAY["21404"] = '21,岐阜県,21404,池田町,いけだちょう,136.5730556,35.44222222';
GSI.MUNI_ARRAY["21421"] = '21,岐阜県,21421,北方町,きたがたちょう,136.6861111,35.43694444';
GSI.MUNI_ARRAY["21501"] = '21,岐阜県,21501,坂祝町,さかほぎちょう,136.9852778,35.42666667';
GSI.MUNI_ARRAY["21502"] = '21,岐阜県,21502,富加町,とみかちょう,136.9797222,35.48472222';
GSI.MUNI_ARRAY["21503"] = '21,岐阜県,21503,川辺町,かわべちょう,137.0705556,35.48666667';
GSI.MUNI_ARRAY["21504"] = '21,岐阜県,21504,七宗町,ひちそうちょう,137.12,35.54388889';
GSI.MUNI_ARRAY["21505"] = '21,岐阜県,21505,八百津町,やおつちょう,137.1416667,35.47611111';
GSI.MUNI_ARRAY["21506"] = '21,岐阜県,21506,白川町,しらかわちょう,137.1883333,35.58222222';
GSI.MUNI_ARRAY["21507"] = '21,岐阜県,21507,東白川村,ひがししらかわむら,137.3238889,35.6425';
GSI.MUNI_ARRAY["21521"] = '21,岐阜県,21521,御嵩町,みたけちょう,137.1308333,35.43444444';
GSI.MUNI_ARRAY["21604"] = '21,岐阜県,21604,白川村,しらかわむら,136.8986111,36.27083333';
GSI.MUNI_ARRAY["22100"] = '22,静岡県,22100,静岡市,しずおかし,138.3827778,34.97555556';
GSI.MUNI_ARRAY["22101"] = '22,静岡県,22101,静岡市　葵区,しずおかし　あおいく,138.3830556,34.97527778';
GSI.MUNI_ARRAY["22102"] = '22,静岡県,22102,静岡市　駿河区,しずおかし　するがく,138.4041667,34.96055556';
GSI.MUNI_ARRAY["22103"] = '22,静岡県,22103,静岡市　清水区,しずおかし　しみずく,138.4897222,35.01583333';
GSI.MUNI_ARRAY["22130"] = '22,静岡県,22130,浜松市,はままつし,137.7266667,34.71083333';
GSI.MUNI_ARRAY["22131"] = '22,静岡県,22131,浜松市　中区,はままつし　なかく,137.7266667,34.71111111';
GSI.MUNI_ARRAY["22132"] = '22,静岡県,22132,浜松市　東区,はままつし　ひがしく,137.7916667,34.74138889';
GSI.MUNI_ARRAY["22133"] = '22,静岡県,22133,浜松市　西区,はままつし　にしく,137.6452778,34.69277778';
GSI.MUNI_ARRAY["22134"] = '22,静岡県,22134,浜松市　南区,はままつし　みなみく,137.7522222,34.66722222';
GSI.MUNI_ARRAY["22135"] = '22,静岡県,22135,浜松市　北区,はままつし　きたく,137.6511111,34.80611111';
GSI.MUNI_ARRAY["22136"] = '22,静岡県,22136,浜松市　浜北区,はままつし　はまきたく,137.79,34.79305556';
GSI.MUNI_ARRAY["22137"] = '22,静岡県,22137,浜松市　天竜区,はままつし　てんりゅうく,137.8161111,34.87277778';
GSI.MUNI_ARRAY["22203"] = '22,静岡県,22203,沼津市,ぬまづし,138.8636111,35.09555556';
GSI.MUNI_ARRAY["22205"] = '22,静岡県,22205,熱海市,あたみし,139.0716667,35.09611111';
GSI.MUNI_ARRAY["22206"] = '22,静岡県,22206,三島市,みしまし,138.9186111,35.11861111';
GSI.MUNI_ARRAY["22207"] = '22,静岡県,22207,富士宮市,ふじのみやし,138.6213889,35.22222222';
GSI.MUNI_ARRAY["22208"] = '22,静岡県,22208,伊東市,いとうし,139.1019444,34.96583333';
GSI.MUNI_ARRAY["22209"] = '22,静岡県,22209,島田市,しまだし,138.1761111,34.83638889';
GSI.MUNI_ARRAY["22210"] = '22,静岡県,22210,富士市,ふじし,138.6763889,35.16138889';
GSI.MUNI_ARRAY["22211"] = '22,静岡県,22211,磐田市,いわたし,137.8513889,34.71777778';
GSI.MUNI_ARRAY["22212"] = '22,静岡県,22212,焼津市,やいづし,138.3230556,34.86694444';
GSI.MUNI_ARRAY["22213"] = '22,静岡県,22213,掛川市,かけがわし,137.9983333,34.76861111';
GSI.MUNI_ARRAY["22214"] = '22,静岡県,22214,藤枝市,ふじえだし,138.2577778,34.8675';
GSI.MUNI_ARRAY["22215"] = '22,静岡県,22215,御殿場市,ごてんばし,138.935,35.30861111';
GSI.MUNI_ARRAY["22216"] = '22,静岡県,22216,袋井市,ふくろいし,137.925,34.75027778';
GSI.MUNI_ARRAY["22219"] = '22,静岡県,22219,下田市,しもだし,138.9452778,34.67944444';
GSI.MUNI_ARRAY["22220"] = '22,静岡県,22220,裾野市,すそのし,138.9066667,35.17388889';
GSI.MUNI_ARRAY["22221"] = '22,静岡県,22221,湖西市,こさいし,137.5316667,34.71861111';
GSI.MUNI_ARRAY["22222"] = '22,静岡県,22222,伊豆市,いずし,138.9469444,34.97666667';
GSI.MUNI_ARRAY["22223"] = '22,静岡県,22223,御前崎市,おまえざきし,138.1280556,34.63805556';
GSI.MUNI_ARRAY["22224"] = '22,静岡県,22224,菊川市,きくがわし,138.0841667,34.75777778';
GSI.MUNI_ARRAY["22225"] = '22,静岡県,22225,伊豆の国市,いずのくにし,138.9288889,35.02777778';
GSI.MUNI_ARRAY["22226"] = '22,静岡県,22226,牧之原市,まきのはらし,138.2247222,34.74';
GSI.MUNI_ARRAY["22301"] = '22,静岡県,22301,東伊豆町,ひがしいずちょう,139.0413889,34.77277778';
GSI.MUNI_ARRAY["22302"] = '22,静岡県,22302,河津町,かわづちょう,138.9875,34.75722222';
GSI.MUNI_ARRAY["22304"] = '22,静岡県,22304,南伊豆町,みなみいずちょう,138.8591667,34.65055556';
GSI.MUNI_ARRAY["22305"] = '22,静岡県,22305,松崎町,まつざきちょう,138.7788889,34.75305556';
GSI.MUNI_ARRAY["22306"] = '22,静岡県,22306,西伊豆町,にしいずちょう,138.7752778,34.77166667';
GSI.MUNI_ARRAY["22325"] = '22,静岡県,22325,函南町,かんなみちょう,138.9533333,35.08888888';
GSI.MUNI_ARRAY["22341"] = '22,静岡県,22341,清水町,しみずちょう,138.9027778,35.09916667';
GSI.MUNI_ARRAY["22342"] = '22,静岡県,22342,長泉町,ながいずみちょう,138.8972222,35.13777778';
GSI.MUNI_ARRAY["22344"] = '22,静岡県,22344,小山町,おやまちょう,138.9875,35.36';
GSI.MUNI_ARRAY["22424"] = '22,静岡県,22424,吉田町,よしだちょう,138.2519444,34.77083333';
GSI.MUNI_ARRAY["22429"] = '22,静岡県,22429,川根本町,かわねほんちょう,138.0816667,35.04694444';
GSI.MUNI_ARRAY["22461"] = '22,静岡県,22461,森町,もりまち,137.9272222,34.83555556';
GSI.MUNI_ARRAY["23100"] = '23,愛知県,23100,名古屋市,なごやし,136.9063889,35.18166667';
GSI.MUNI_ARRAY["23101"] = '23,愛知県,23101,名古屋市　千種区,なごやし　ちくさく,136.9463889,35.16638889';
GSI.MUNI_ARRAY["23102"] = '23,愛知県,23102,名古屋市　東区,なごやし　ひがしく,136.9261111,35.17944444';
GSI.MUNI_ARRAY["23103"] = '23,愛知県,23103,名古屋市　北区,なごやし　きたく,136.9116667,35.19416667';
GSI.MUNI_ARRAY["23104"] = '23,愛知県,23104,名古屋市　西区,なごやし　にしく,136.89,35.18916666';
GSI.MUNI_ARRAY["23105"] = '23,愛知県,23105,名古屋市　中村区,なごやし　なかむらく,136.8730556,35.16861111';
GSI.MUNI_ARRAY["23106"] = '23,愛知県,23106,名古屋市　中区,なごやし　なかく,136.9102778,35.16861111';
GSI.MUNI_ARRAY["23107"] = '23,愛知県,23107,名古屋市　昭和区,なごやし　しょうわく,136.9341667,35.15027778';
GSI.MUNI_ARRAY["23108"] = '23,愛知県,23108,名古屋市　瑞穂区,なごやし　みずほく,136.935,35.13166667';
GSI.MUNI_ARRAY["23109"] = '23,愛知県,23109,名古屋市　熱田区,なごやし　あつたく,136.9105556,35.12833333';
GSI.MUNI_ARRAY["23110"] = '23,愛知県,23110,名古屋市　中川区,なごやし　なかがわく,136.855,35.14166667';
GSI.MUNI_ARRAY["23111"] = '23,愛知県,23111,名古屋市　港区,なごやし　みなとく,136.8855556,35.10777778';
GSI.MUNI_ARRAY["23112"] = '23,愛知県,23112,名古屋市　南区,なごやし　みなみく,136.9311111,35.095';
GSI.MUNI_ARRAY["23113"] = '23,愛知県,23113,名古屋市　守山区,なごやし　もりやまく,136.9766667,35.20333333';
GSI.MUNI_ARRAY["23114"] = '23,愛知県,23114,名古屋市　緑区,なごやし　みどりく,136.9522222,35.07083333';
GSI.MUNI_ARRAY["23115"] = '23,愛知県,23115,名古屋市　名東区,なごやし　めいとうく,137.0102778,35.17583333';
GSI.MUNI_ARRAY["23116"] = '23,愛知県,23116,名古屋市　天白区,なごやし　てんぱくく,136.975,35.12277778';
GSI.MUNI_ARRAY["23201"] = '23,愛知県,23201,豊橋市,とよはしし,137.3913889,34.76916667';
GSI.MUNI_ARRAY["23202"] = '23,愛知県,23202,岡崎市,おかざきし,137.1730556,34.95472222';
GSI.MUNI_ARRAY["23203"] = '23,愛知県,23203,一宮市,いちのみやし,136.8025,35.30416667';
GSI.MUNI_ARRAY["23204"] = '23,愛知県,23204,瀬戸市,せとし,137.0841667,35.22333333';
GSI.MUNI_ARRAY["23205"] = '23,愛知県,23205,半田市,はんだし,136.9377778,34.8925';
GSI.MUNI_ARRAY["23206"] = '23,愛知県,23206,春日井市,かすがいし,136.9722222,35.2475';
GSI.MUNI_ARRAY["23207"] = '23,愛知県,23207,豊川市,とよかわし,137.3758333,34.82694444';
GSI.MUNI_ARRAY["23208"] = '23,愛知県,23208,津島市,つしまし,136.7413889,35.17722222';
GSI.MUNI_ARRAY["23209"] = '23,愛知県,23209,碧南市,へきなんし,136.9936111,34.88472222';
GSI.MUNI_ARRAY["23210"] = '23,愛知県,23210,刈谷市,かりやし,137.0025,34.98916667';
GSI.MUNI_ARRAY["23211"] = '23,愛知県,23211,豊田市,とよたし,137.1563889,35.08333333';
GSI.MUNI_ARRAY["23212"] = '23,愛知県,23212,安城市,あんじょうし,137.0802809,34.95861426';
GSI.MUNI_ARRAY["23213"] = '23,愛知県,23213,西尾市,にしおし,137.0619444,34.86194444';
GSI.MUNI_ARRAY["23214"] = '23,愛知県,23214,蒲郡市,がまごおりし,137.2197222,34.82638889';
GSI.MUNI_ARRAY["23215"] = '23,愛知県,23215,犬山市,いぬやまし,136.9441667,35.37861111';
GSI.MUNI_ARRAY["23216"] = '23,愛知県,23216,常滑市,とこなめし,136.8325,34.88666667';
GSI.MUNI_ARRAY["23217"] = '23,愛知県,23217,江南市,こうなんし,136.8708333,35.33222222';
GSI.MUNI_ARRAY["23219"] = '23,愛知県,23219,小牧市,こまきし,136.9122222,35.29111111';
GSI.MUNI_ARRAY["23220"] = '23,愛知県,23220,稲沢市,いなざわし,136.7802778,35.24805556';
GSI.MUNI_ARRAY["23221"] = '23,愛知県,23221,新城市,しんしろし,137.4986111,34.89916667';
GSI.MUNI_ARRAY["23222"] = '23,愛知県,23222,東海市,とうかいし,136.9025,35.02305556';
GSI.MUNI_ARRAY["23223"] = '23,愛知県,23223,大府市,おおぶし,136.9633333,35.01222222';
GSI.MUNI_ARRAY["23224"] = '23,愛知県,23224,知多市,ちたし,136.8647222,34.99666667';
GSI.MUNI_ARRAY["23225"] = '23,愛知県,23225,知立市,ちりゅうし,137.0505556,35.00138889';
GSI.MUNI_ARRAY["23226"] = '23,愛知県,23226,尾張旭市,おわりあさひし,137.0352778,35.21638889';
GSI.MUNI_ARRAY["23227"] = '23,愛知県,23227,高浜市,たかはまし,136.9877778,34.9275';
GSI.MUNI_ARRAY["23228"] = '23,愛知県,23228,岩倉市,いわくらし,136.8713889,35.28';
GSI.MUNI_ARRAY["23229"] = '23,愛知県,23229,豊明市,とよあけし,137.0127778,35.05388889';
GSI.MUNI_ARRAY["23230"] = '23,愛知県,23230,日進市,にっしんし,137.0394444,35.13194444';
GSI.MUNI_ARRAY["23231"] = '23,愛知県,23231,田原市,たはらし,137.2636111,34.66916667';
GSI.MUNI_ARRAY["23232"] = '23,愛知県,23232,愛西市,あいさいし,136.7283333,35.15277778';
GSI.MUNI_ARRAY["23233"] = '23,愛知県,23233,清須市,きよすし,136.8527778,35.19972222';
GSI.MUNI_ARRAY["23234"] = '23,愛知県,23234,北名古屋市,きたなごやし,136.8661111,35.24555556';
GSI.MUNI_ARRAY["23235"] = '23,愛知県,23235,弥富市,やとみし,136.7247222,35.11';
GSI.MUNI_ARRAY["23236"] = '23,愛知県,23236,みよし市,みよしし,137.0744444,35.08972222';
GSI.MUNI_ARRAY["23237"] = '23,愛知県,23237,あま市,あまし,136.7836111,35.20055556';
GSI.MUNI_ARRAY["23238"] = '23,愛知県,23238,長久手市,ながくてし,137.0486111,35.18416667';
GSI.MUNI_ARRAY["23302"] = '23,愛知県,23302,東郷町,とうごうちょう,137.0525,35.09694444';
GSI.MUNI_ARRAY["23342"] = '23,愛知県,23342,豊山町,とよやまちょう,136.9122222,35.25083333';
GSI.MUNI_ARRAY["23361"] = '23,愛知県,23361,大口町,おおぐちちょう,136.9077778,35.3325';
GSI.MUNI_ARRAY["23362"] = '23,愛知県,23362,扶桑町,ふそうちょう,136.9130556,35.35916667';
GSI.MUNI_ARRAY["23424"] = '23,愛知県,23424,大治町,おおはるちょう,136.82,35.175';
GSI.MUNI_ARRAY["23425"] = '23,愛知県,23425,蟹江町,かにえちょう,136.7869444,35.13222222';
GSI.MUNI_ARRAY["23427"] = '23,愛知県,23427,飛島村,とびしまむら,136.7913889,35.07888889';
GSI.MUNI_ARRAY["23441"] = '23,愛知県,23441,阿久比町,あぐいちょう,136.9155556,34.9325';
GSI.MUNI_ARRAY["23442"] = '23,愛知県,23442,東浦町,ひがしうらちょう,136.9655556,34.97722222';
GSI.MUNI_ARRAY["23445"] = '23,愛知県,23445,南知多町,みなみちたちょう,136.9297222,34.71527778';
GSI.MUNI_ARRAY["23446"] = '23,愛知県,23446,美浜町,みはまちょう,136.9083333,34.77888889';
GSI.MUNI_ARRAY["23447"] = '23,愛知県,23447,武豊町,たけとよちょう,136.915,34.85138889';
GSI.MUNI_ARRAY["23501"] = '23,愛知県,23501,幸田町,こうたちょう,137.1655556,34.86472222';
GSI.MUNI_ARRAY["23561"] = '23,愛知県,23561,設楽町,したらちょう,137.57,35.0975';
GSI.MUNI_ARRAY["23562"] = '23,愛知県,23562,東栄町,とうえいちょう,137.6977778,35.07694444';
GSI.MUNI_ARRAY["23563"] = '23,愛知県,23563,豊根村,とよねむら,137.7197222,35.14638889';
GSI.MUNI_ARRAY["24201"] = '24,三重県,24201,津市,つし,136.5055556,34.71861111';
GSI.MUNI_ARRAY["24202"] = '24,三重県,24202,四日市市,よっかいちし,136.6244444,34.965';
GSI.MUNI_ARRAY["24203"] = '24,三重県,24203,伊勢市,いせし,136.7094444,34.4875';
GSI.MUNI_ARRAY["24204"] = '24,三重県,24204,松阪市,まつさかし,136.5275,34.57805556';
GSI.MUNI_ARRAY["24205"] = '24,三重県,24205,桑名市,くわなし,136.6838889,35.06222222';
GSI.MUNI_ARRAY["24207"] = '24,三重県,24207,鈴鹿市,すずかし,136.5841667,34.88222222';
GSI.MUNI_ARRAY["24208"] = '24,三重県,24208,名張市,なばりし,136.1083333,34.6275';
GSI.MUNI_ARRAY["24209"] = '24,三重県,24209,尾鷲市,おわせし,136.1911111,34.07083333';
GSI.MUNI_ARRAY["24210"] = '24,三重県,24210,亀山市,かめやまし,136.4516667,34.85583333';
GSI.MUNI_ARRAY["24211"] = '24,三重県,24211,鳥羽市,とばし,136.8436111,34.48138889';
GSI.MUNI_ARRAY["24212"] = '24,三重県,24212,熊野市,くまのし,136.1002778,33.88861111';
GSI.MUNI_ARRAY["24214"] = '24,三重県,24214,いなべ市,いなべし,136.5613889,35.11583333';
GSI.MUNI_ARRAY["24215"] = '24,三重県,24215,志摩市,しまし,136.8297222,34.32833333';
GSI.MUNI_ARRAY["24216"] = '24,三重県,24216,伊賀市,いがし,136.13,34.76861111';
GSI.MUNI_ARRAY["24303"] = '24,三重県,24303,木曽岬町,きそさきちょう,136.7311111,35.07583333';
GSI.MUNI_ARRAY["24324"] = '24,三重県,24324,東員町,とういんちょう,136.5836111,35.07416667';
GSI.MUNI_ARRAY["24341"] = '24,三重県,24341,菰野町,こものちょう,136.5075,35.02';
GSI.MUNI_ARRAY["24343"] = '24,三重県,24343,朝日町,あさひちょう,136.6644444,35.03416667';
GSI.MUNI_ARRAY["24344"] = '24,三重県,24344,川越町,かわごえちょう,136.6738889,35.02305556';
GSI.MUNI_ARRAY["24441"] = '24,三重県,24441,多気町,たきちょう,136.5461111,34.49611111';
GSI.MUNI_ARRAY["24442"] = '24,三重県,24442,明和町,めいわちょう,136.6236111,34.54777778';
GSI.MUNI_ARRAY["24443"] = '24,三重県,24443,大台町,おおだいちょう,136.4080556,34.39333333';
GSI.MUNI_ARRAY["24461"] = '24,三重県,24461,玉城町,たまきちょう,136.6308333,34.49027778';
GSI.MUNI_ARRAY["24470"] = '24,三重県,24470,度会町,わたらいちょう,136.6225,34.43888889';
GSI.MUNI_ARRAY["24471"] = '24,三重県,24471,大紀町,たいきちょう,136.4158333,34.35805556';
GSI.MUNI_ARRAY["24472"] = '24,三重県,24472,南伊勢町,みなみいせちょう,136.7038889,34.35194444';
GSI.MUNI_ARRAY["24543"] = '24,三重県,24543,紀北町,きほくちょう,136.2313889,34.10916667';
GSI.MUNI_ARRAY["24561"] = '24,三重県,24561,御浜町,みはまちょう,136.0488889,33.81444444';
GSI.MUNI_ARRAY["24562"] = '24,三重県,24562,紀宝町,きほうちょう,136.0097222,33.73388889';
GSI.MUNI_ARRAY["25201"] = '25,滋賀県,25201,大津市,おおつし,135.8547222,35.01777778';
GSI.MUNI_ARRAY["25202"] = '25,滋賀県,25202,彦根市,ひこねし,136.2597222,35.27444444';
GSI.MUNI_ARRAY["25203"] = '25,滋賀県,25203,長浜市,ながはまし,136.2755556,35.38138889';
GSI.MUNI_ARRAY["25204"] = '25,滋賀県,25204,近江八幡市,おうみはちまんし,136.0980556,35.12833333';
GSI.MUNI_ARRAY["25206"] = '25,滋賀県,25206,草津市,くさつし,135.96,35.01305556';
GSI.MUNI_ARRAY["25207"] = '25,滋賀県,25207,守山市,もりやまし,135.9944444,35.05888889';
GSI.MUNI_ARRAY["25208"] = '25,滋賀県,25208,栗東市,りっとうし,135.9980556,35.02166667';
GSI.MUNI_ARRAY["25209"] = '25,滋賀県,25209,甲賀市,こうかし,136.1672222,34.96611111';
GSI.MUNI_ARRAY["25210"] = '25,滋賀県,25210,野洲市,やすし,136.0258333,35.0675';
GSI.MUNI_ARRAY["25211"] = '25,滋賀県,25211,湖南市,こなんし,136.085,35.00416667';
GSI.MUNI_ARRAY["25212"] = '25,滋賀県,25212,高島市,たかしまし,136.0355556,35.35277778';
GSI.MUNI_ARRAY["25213"] = '25,滋賀県,25213,東近江市,ひがしおうみし,136.2077778,35.11277778';
GSI.MUNI_ARRAY["25214"] = '25,滋賀県,25214,米原市,まいばらし,136.2838889,35.31527778';
GSI.MUNI_ARRAY["25383"] = '25,滋賀県,25383,日野町,ひのちょう,136.2461111,35.01805556';
GSI.MUNI_ARRAY["25384"] = '25,滋賀県,25384,竜王町,りゅうおうちょう,136.1244444,35.06083333';
GSI.MUNI_ARRAY["25425"] = '25,滋賀県,25425,愛荘町,あいしょうちょう,136.2125,35.16888889';
GSI.MUNI_ARRAY["25441"] = '25,滋賀県,25441,豊郷町,とよさとちょう,136.23,35.20055556';
GSI.MUNI_ARRAY["25442"] = '25,滋賀県,25442,甲良町,こうらちょう,136.2613889,35.20416667';
GSI.MUNI_ARRAY["25443"] = '25,滋賀県,25443,多賀町,たがちょう,136.2922222,35.22194444';
GSI.MUNI_ARRAY["26100"] = '26,京都府,26100,京都市,きょうとし,135.7683333,35.01166667';
GSI.MUNI_ARRAY["26101"] = '26,京都府,26101,京都市　北区,きょうとし　きたく,135.7541667,35.04111111';
GSI.MUNI_ARRAY["26102"] = '26,京都府,26102,京都市　上京区,きょうとし　かみぎょうく,135.7566667,35.02972222';
GSI.MUNI_ARRAY["26103"] = '26,京都府,26103,京都市　左京区,きょうとし　さきょうく,135.7785389,35.04860433';
GSI.MUNI_ARRAY["26104"] = '26,京都府,26104,京都市　中京区,きょうとし　なかぎょうく,135.7513889,35.01';
GSI.MUNI_ARRAY["26105"] = '26,京都府,26105,京都市　東山区,きょうとし　ひがしやまく,135.7763889,34.99694444';
GSI.MUNI_ARRAY["26106"] = '26,京都府,26106,京都市　下京区,きょうとし　しもぎょうく,135.7555556,34.9875';
GSI.MUNI_ARRAY["26107"] = '26,京都府,26107,京都市　南区,きょうとし　みなみく,135.7466667,34.97666667';
GSI.MUNI_ARRAY["26108"] = '26,京都府,26108,京都市　右京区,きょうとし　うきょうく,135.7158333,35.01027778';
GSI.MUNI_ARRAY["26109"] = '26,京都府,26109,京都市　伏見区,きょうとし　ふしみく,135.7613889,34.93611111';
GSI.MUNI_ARRAY["26110"] = '26,京都府,26110,京都市　山科区,きょうとし　やましなく,135.8136111,34.9725';
GSI.MUNI_ARRAY["26111"] = '26,京都府,26111,京都市　西京区,きょうとし　にしきょうく,135.6933333,34.985';
GSI.MUNI_ARRAY["26201"] = '26,京都府,26201,福知山市,ふくちやまし,135.1263889,35.29666667';
GSI.MUNI_ARRAY["26202"] = '26,京都府,26202,舞鶴市,まいづるし,135.3861111,35.47472222';
GSI.MUNI_ARRAY["26203"] = '26,京都府,26203,綾部市,あやべし,135.2586111,35.29888889';
GSI.MUNI_ARRAY["26204"] = '26,京都府,26204,宇治市,うじし,135.7997222,34.88444444';
GSI.MUNI_ARRAY["26205"] = '26,京都府,26205,宮津市,みやづし,135.1955556,35.53555556';
GSI.MUNI_ARRAY["26206"] = '26,京都府,26206,亀岡市,かめおかし,135.5738889,35.01361111';
GSI.MUNI_ARRAY["26207"] = '26,京都府,26207,城陽市,じょうようし,135.78,34.85305556';
GSI.MUNI_ARRAY["26208"] = '26,京都府,26208,向日市,むこうし,135.6983333,34.94861111';
GSI.MUNI_ARRAY["26209"] = '26,京都府,26209,長岡京市,ながおかきょうし,135.6955556,34.92666667';
GSI.MUNI_ARRAY["26210"] = '26,京都府,26210,八幡市,やわたし,135.7077778,34.87555556';
GSI.MUNI_ARRAY["26211"] = '26,京都府,26211,京田辺市,きょうたなべし,135.7677778,34.81444444';
GSI.MUNI_ARRAY["26212"] = '26,京都府,26212,京丹後市,きょうたんごし,135.0611111,35.62416667';
GSI.MUNI_ARRAY["26213"] = '26,京都府,26213,南丹市,なんたんし,135.47,35.10722222';
GSI.MUNI_ARRAY["26214"] = '26,京都府,26214,木津川市,きづがわし,135.8208333,34.73694444';
GSI.MUNI_ARRAY["26303"] = '26,京都府,26303,大山崎町,おおやまざきちょう,135.6886111,34.90277778';
GSI.MUNI_ARRAY["26322"] = '26,京都府,26322,久御山町,くみやまちょう,135.7327778,34.88138889';
GSI.MUNI_ARRAY["26343"] = '26,京都府,26343,井手町,いでちょう,135.8033333,34.79861111';
GSI.MUNI_ARRAY["26344"] = '26,京都府,26344,宇治田原町,うじたわらちょう,135.8569444,34.85277778';
GSI.MUNI_ARRAY["26364"] = '26,京都府,26364,笠置町,かさぎちょう,135.9394444,34.76055556';
GSI.MUNI_ARRAY["26365"] = '26,京都府,26365,和束町,わづかちょう,135.905,34.79583333';
GSI.MUNI_ARRAY["26366"] = '26,京都府,26366,精華町,せいかちょう,135.7858333,34.76083333';
GSI.MUNI_ARRAY["26367"] = '26,京都府,26367,南山城村,みなみやましろむら,135.9938889,34.77277778';
GSI.MUNI_ARRAY["26407"] = '26,京都府,26407,京丹波町,きょうたんばちょう,135.4233333,35.16444444';
GSI.MUNI_ARRAY["26463"] = '26,京都府,26463,伊根町,いねちょう,135.2727778,35.67527777';
GSI.MUNI_ARRAY["26465"] = '26,京都府,26465,与謝野町,よさのちょう,135.1527778,35.56527778';
GSI.MUNI_ARRAY["27100"] = '27,大阪府,27100,大阪市,おおさかし,135.5022222,34.69388889';
GSI.MUNI_ARRAY["27102"] = '27,大阪府,27102,大阪市　都島区,おおさかし　みやこじまく,135.5280556,34.70138889';
GSI.MUNI_ARRAY["27103"] = '27,大阪府,27103,大阪市　福島区,おおさかし　ふくしまく,135.4722222,34.69222222';
GSI.MUNI_ARRAY["27104"] = '27,大阪府,27104,大阪市　此花区,おおさかし　このはなく,135.4522222,34.68305556';
GSI.MUNI_ARRAY["27106"] = '27,大阪府,27106,大阪市　西区,おおさかし　にしく,135.4861111,34.67638889';
GSI.MUNI_ARRAY["27107"] = '27,大阪府,27107,大阪市　港区,おおさかし　みなとく,135.4608333,34.66388889';
GSI.MUNI_ARRAY["27108"] = '27,大阪府,27108,大阪市　大正区,おおさかし　たいしょうく,135.4727778,34.65027778';
GSI.MUNI_ARRAY["27109"] = '27,大阪府,27109,大阪市　天王寺区,おおさかし　てんのうじく,135.5194444,34.65777778';
GSI.MUNI_ARRAY["27111"] = '27,大阪府,27111,大阪市　浪速区,おおさかし　なにわく,135.4997222,34.65944444';
GSI.MUNI_ARRAY["27113"] = '27,大阪府,27113,大阪市　西淀川区,おおさかし　にしよどがわく,135.4561111,34.71138889';
GSI.MUNI_ARRAY["27114"] = '27,大阪府,27114,大阪市　東淀川区,おおさかし　ひがしよどがわく,135.5294444,34.74111111';
GSI.MUNI_ARRAY["27115"] = '27,大阪府,27115,大阪市　東成区,おおさかし　ひがしなりく,135.5411111,34.67';
GSI.MUNI_ARRAY["27116"] = '27,大阪府,27116,大阪市　生野区,おおさかし　いくのく,135.5344444,34.65361111';
GSI.MUNI_ARRAY["27117"] = '27,大阪府,27117,大阪市　旭区,おおさかし　あさひく,135.5441667,34.72138889';
GSI.MUNI_ARRAY["27118"] = '27,大阪府,27118,大阪市　城東区,おおさかし　じょうとうく,135.5461111,34.70194444';
GSI.MUNI_ARRAY["27119"] = '27,大阪府,27119,大阪市　阿倍野区,おおさかし　あべのく,135.5186111,34.63861111';
GSI.MUNI_ARRAY["27120"] = '27,大阪府,27120,大阪市　住吉区,おおさかし　すみよしく,135.5005556,34.60361111';
GSI.MUNI_ARRAY["27121"] = '27,大阪府,27121,大阪市　東住吉区,おおさかし　ひがしすみよしく,135.5269444,34.62194444';
GSI.MUNI_ARRAY["27122"] = '27,大阪府,27122,大阪市　西成区,おおさかし　にしなりく,135.4944444,34.635';
GSI.MUNI_ARRAY["27123"] = '27,大阪府,27123,大阪市　淀川区,おおさかし　よどがわく,135.4866667,34.72111111';
GSI.MUNI_ARRAY["27124"] = '27,大阪府,27124,大阪市　鶴見区,おおさかし　つるみく,135.5741667,34.70444444';
GSI.MUNI_ARRAY["27125"] = '27,大阪府,27125,大阪市　住之江区,おおさかし　すみのえく,135.4827778,34.60944444';
GSI.MUNI_ARRAY["27126"] = '27,大阪府,27126,大阪市　平野区,おおさかし　ひらのく,135.5461111,34.62111111';
GSI.MUNI_ARRAY["27127"] = '27,大阪府,27127,大阪市　北区,おおさかし　きたく,135.51,34.70555556';
GSI.MUNI_ARRAY["27128"] = '27,大阪府,27128,大阪市　中央区,おおさかし　ちゅうおうく,135.5097222,34.68111111';
GSI.MUNI_ARRAY["27140"] = '27,大阪府,27140,堺市,さかいし,135.4830556,34.57333333';
GSI.MUNI_ARRAY["27141"] = '27,大阪府,27141,堺市　堺区,さかいし　さかいく,135.4830556,34.57333333';
GSI.MUNI_ARRAY["27142"] = '27,大阪府,27142,堺市　中区,さかいし　なかく,135.4988889,34.52833333';
GSI.MUNI_ARRAY["27143"] = '27,大阪府,27143,堺市　東区,さかいし　ひがしく,135.5363889,34.53805556';
GSI.MUNI_ARRAY["27144"] = '27,大阪府,27144,堺市　西区,さかいし　にしく,135.4638889,34.535';
GSI.MUNI_ARRAY["27145"] = '27,大阪府,27145,堺市　南区,さかいし　みなみく,135.4902778,34.48638889';
GSI.MUNI_ARRAY["27146"] = '27,大阪府,27146,堺市　北区,さかいし　きたく,135.5172222,34.56555556';
GSI.MUNI_ARRAY["27147"] = '27,大阪府,27147,堺市　美原区,さかいし　みはらく,135.5608333,34.53861111';
GSI.MUNI_ARRAY["27202"] = '27,大阪府,27202,岸和田市,きしわだし,135.3711111,34.46027778';
GSI.MUNI_ARRAY["27203"] = '27,大阪府,27203,豊中市,とよなかし,135.47,34.78138889';
GSI.MUNI_ARRAY["27204"] = '27,大阪府,27204,池田市,いけだし,135.4286111,34.82166667';
GSI.MUNI_ARRAY["27205"] = '27,大阪府,27205,吹田市,すいたし,135.5169444,34.75944444';
GSI.MUNI_ARRAY["27206"] = '27,大阪府,27206,泉大津市,いずみおおつし,135.4102778,34.50444444';
GSI.MUNI_ARRAY["27207"] = '27,大阪府,27207,高槻市,たかつきし,135.6172222,34.84611111';
GSI.MUNI_ARRAY["27208"] = '27,大阪府,27208,貝塚市,かいづかし,135.3586111,34.43777778';
GSI.MUNI_ARRAY["27209"] = '27,大阪府,27209,守口市,もりぐちし,135.5641667,34.7375';
GSI.MUNI_ARRAY["27210"] = '27,大阪府,27210,枚方市,ひらかたし,135.6508333,34.81444444';
GSI.MUNI_ARRAY["27211"] = '27,大阪府,27211,茨木市,いばらきし,135.5686111,34.81638889';
GSI.MUNI_ARRAY["27212"] = '27,大阪府,27212,八尾市,やおし,135.6008333,34.62694444';
GSI.MUNI_ARRAY["27213"] = '27,大阪府,27213,泉佐野市,いずみさのし,135.3275,34.40666667';
GSI.MUNI_ARRAY["27214"] = '27,大阪府,27214,富田林市,とんだばやしし,135.5972222,34.49916667';
GSI.MUNI_ARRAY["27215"] = '27,大阪府,27215,寝屋川市,ねやがわし,135.6280556,34.76611111';
GSI.MUNI_ARRAY["27216"] = '27,大阪府,27216,河内長野市,かわちながのし,135.5641667,34.45833333';
GSI.MUNI_ARRAY["27217"] = '27,大阪府,27217,松原市,まつばらし,135.5516667,34.57805556';
GSI.MUNI_ARRAY["27218"] = '27,大阪府,27218,大東市,だいとうし,135.6233333,34.71194444';
GSI.MUNI_ARRAY["27219"] = '27,大阪府,27219,和泉市,いずみし,135.4236111,34.48361111';
GSI.MUNI_ARRAY["27220"] = '27,大阪府,27220,箕面市,みのおし,135.4705556,34.82694444';
GSI.MUNI_ARRAY["27221"] = '27,大阪府,27221,柏原市,かしわらし,135.6286111,34.57916667';
GSI.MUNI_ARRAY["27222"] = '27,大阪府,27222,羽曳野市,はびきのし,135.6061111,34.55777778';
GSI.MUNI_ARRAY["27223"] = '27,大阪府,27223,門真市,かどまし,135.5869444,34.73916667';
GSI.MUNI_ARRAY["27224"] = '27,大阪府,27224,摂津市,せっつし,135.5622222,34.77722222';
GSI.MUNI_ARRAY["27225"] = '27,大阪府,27225,高石市,たかいしし,135.4422222,34.52055556';
GSI.MUNI_ARRAY["27226"] = '27,大阪府,27226,藤井寺市,ふじいでらし,135.5975,34.57472222';
GSI.MUNI_ARRAY["27227"] = '27,大阪府,27227,東大阪市,ひがしおおさかし,135.6008333,34.67944444';
GSI.MUNI_ARRAY["27228"] = '27,大阪府,27228,泉南市,せんなんし,135.2736111,34.36583333';
GSI.MUNI_ARRAY["27229"] = '27,大阪府,27229,四條畷市,しじょうなわてし,135.6394444,34.74';
GSI.MUNI_ARRAY["27230"] = '27,大阪府,27230,交野市,かたのし,135.68,34.78805556';
GSI.MUNI_ARRAY["27231"] = '27,大阪府,27231,大阪狭山市,おおさかさやまし,135.5555556,34.50361111';
GSI.MUNI_ARRAY["27232"] = '27,大阪府,27232,阪南市,はんなんし,135.2397222,34.35944444';
GSI.MUNI_ARRAY["27301"] = '27,大阪府,27301,島本町,しまもとちょう,135.6627778,34.88388889';
GSI.MUNI_ARRAY["27321"] = '27,大阪府,27321,豊能町,とよのちょう,135.4941667,34.91888889';
GSI.MUNI_ARRAY["27322"] = '27,大阪府,27322,能勢町,のせちょう,135.4141667,34.9725';
GSI.MUNI_ARRAY["27341"] = '27,大阪府,27341,忠岡町,ただおかちょう,135.4011111,34.48694444';
GSI.MUNI_ARRAY["27361"] = '27,大阪府,27361,熊取町,くまとりちょう,135.3561111,34.40138889';
GSI.MUNI_ARRAY["27362"] = '27,大阪府,27362,田尻町,たじりちょう,135.2911111,34.39361111';
GSI.MUNI_ARRAY["27366"] = '27,大阪府,27366,岬町,みさきちょう,135.1422222,34.31694444';
GSI.MUNI_ARRAY["27381"] = '27,大阪府,27381,太子町,たいしちょう,135.6480556,34.51861111';
GSI.MUNI_ARRAY["27382"] = '27,大阪府,27382,河南町,かなんちょう,135.6297222,34.49166667';
GSI.MUNI_ARRAY["27383"] = '27,大阪府,27383,千早赤阪村,ちはやあかさかむ,135.6225,34.46444444';
GSI.MUNI_ARRAY["28100"] = '28,兵庫県,28100,神戸市,こうべし,135.1955556,34.69';
GSI.MUNI_ARRAY["28101"] = '28,兵庫県,28101,神戸市　東灘区,こうべし　ひがしなだく,135.2655556,34.72027778';
GSI.MUNI_ARRAY["28102"] = '28,兵庫県,28102,神戸市　灘区,こうべし　なだく,135.2394444,34.7125';
GSI.MUNI_ARRAY["28105"] = '28,兵庫県,28105,神戸市　兵庫区,こうべし　ひょうごく,135.1652778,34.68055556';
GSI.MUNI_ARRAY["28106"] = '28,兵庫県,28106,神戸市　長田区,こうべし　ながたく,135.1508333,34.66555556';
GSI.MUNI_ARRAY["28107"] = '28,兵庫県,28107,神戸市　須磨区,こうべし　すまく,135.1302778,34.65027778';
GSI.MUNI_ARRAY["28108"] = '28,兵庫県,28108,神戸市　垂水区,こうべし　たるみく,135.0569444,34.63055556';
GSI.MUNI_ARRAY["28109"] = '28,兵庫県,28109,神戸市　北区,こうべし　きたく,135.1444444,34.72722222';
GSI.MUNI_ARRAY["28110"] = '28,兵庫県,28110,神戸市　中央区,こうべし　ちゅうおうく,135.1977778,34.695';
GSI.MUNI_ARRAY["28111"] = '28,兵庫県,28111,神戸市　西区,こうべし　にしく,134.9816667,34.68305556';
GSI.MUNI_ARRAY["28201"] = '28,兵庫県,28201,姫路市,ひめじし,134.6855556,34.81527778';
GSI.MUNI_ARRAY["28202"] = '28,兵庫県,28202,尼崎市,あまがさきし,135.4063889,34.73333333';
GSI.MUNI_ARRAY["28203"] = '28,兵庫県,28203,明石市,あかしし,134.9975,34.64305556';
GSI.MUNI_ARRAY["28204"] = '28,兵庫県,28204,西宮市,にしのみやし,135.3419444,34.73777778';
GSI.MUNI_ARRAY["28205"] = '28,兵庫県,28205,洲本市,すもとし,134.8955556,34.3425';
GSI.MUNI_ARRAY["28206"] = '28,兵庫県,28206,芦屋市,あしやし,135.3044444,34.72694444';
GSI.MUNI_ARRAY["28207"] = '28,兵庫県,28207,伊丹市,いたみし,135.4008333,34.78416667';
GSI.MUNI_ARRAY["28208"] = '28,兵庫県,28208,相生市,あいおいし,134.4680556,34.80361111';
GSI.MUNI_ARRAY["28209"] = '28,兵庫県,28209,豊岡市,とよおかし,134.82,35.54444444';
GSI.MUNI_ARRAY["28210"] = '28,兵庫県,28210,加古川市,かこがわし,134.8413889,34.75694444';
GSI.MUNI_ARRAY["28212"] = '28,兵庫県,28212,赤穂市,あこうし,134.3902778,34.755';
GSI.MUNI_ARRAY["28213"] = '28,兵庫県,28213,西脇市,にしわきし,134.9694444,34.99333333';
GSI.MUNI_ARRAY["28214"] = '28,兵庫県,28214,宝塚市,たからづかし,135.3602778,34.8';
GSI.MUNI_ARRAY["28215"] = '28,兵庫県,28215,三木市,みきし,134.99,34.79666667';
GSI.MUNI_ARRAY["28216"] = '28,兵庫県,28216,高砂市,たかさごし,134.7905556,34.76583333';
GSI.MUNI_ARRAY["28217"] = '28,兵庫県,28217,川西市,かわにしし,135.4172222,34.83';
GSI.MUNI_ARRAY["28218"] = '28,兵庫県,28218,小野市,おのし,134.9316667,34.85305556';
GSI.MUNI_ARRAY["28219"] = '28,兵庫県,28219,三田市,さんだし,135.2252778,34.88944444';
GSI.MUNI_ARRAY["28220"] = '28,兵庫県,28220,加西市,かさいし,134.8419444,34.92777778';
GSI.MUNI_ARRAY["28221"] = '28,兵庫県,28221,篠山市,ささやまし,135.2191667,35.07583333';
GSI.MUNI_ARRAY["28222"] = '28,兵庫県,28222,養父市,やぶし,134.7675,35.40472222';
GSI.MUNI_ARRAY["28223"] = '28,兵庫県,28223,丹波市,たんばし,135.0358333,35.17722222';
GSI.MUNI_ARRAY["28224"] = '28,兵庫県,28224,南あわじ市,みなみあわじし,134.7791667,34.29583333';
GSI.MUNI_ARRAY["28225"] = '28,兵庫県,28225,朝来市,あさごし,134.8530556,35.33972222';
GSI.MUNI_ARRAY["28226"] = '28,兵庫県,28226,淡路市,あわじし,134.9147222,34.44';
GSI.MUNI_ARRAY["28227"] = '28,兵庫県,28227,宍粟市,しそうし,134.5494444,35.00444444';
GSI.MUNI_ARRAY["28228"] = '28,兵庫県,28228,加東市,かとうし,134.9736111,34.9175';
GSI.MUNI_ARRAY["28229"] = '28,兵庫県,28229,たつの市,たつのし,134.5455556,34.85805556';
GSI.MUNI_ARRAY["28301"] = '28,兵庫県,28301,猪名川町,いながわちょう,135.3761111,34.895';
GSI.MUNI_ARRAY["28365"] = '28,兵庫県,28365,多可町,たかちょう,134.9233333,35.05027778';
GSI.MUNI_ARRAY["28381"] = '28,兵庫県,28381,稲美町,いなみちょう,134.9136111,34.74888889';
GSI.MUNI_ARRAY["28382"] = '28,兵庫県,28382,播磨町,はりまちょう,134.8680556,34.71527778';
GSI.MUNI_ARRAY["28442"] = '28,兵庫県,28442,市川町,いちかわちょう,134.7630556,34.98944444';
GSI.MUNI_ARRAY["28443"] = '28,兵庫県,28443,福崎町,ふくさきちょう,134.7602778,34.95027778';
GSI.MUNI_ARRAY["28446"] = '28,兵庫県,28446,神河町,かみかわちょう,134.7394444,35.06416667';
GSI.MUNI_ARRAY["28464"] = '28,兵庫県,28464,太子町,たいしちょう,134.5780556,34.83361111';
GSI.MUNI_ARRAY["28481"] = '28,兵庫県,28481,上郡町,かみごおりちょう,134.3561111,34.87361111';
GSI.MUNI_ARRAY["28501"] = '28,兵庫県,28501,佐用町,さようちょう,134.3558333,35.00416667';
GSI.MUNI_ARRAY["28585"] = '28,兵庫県,28585,香美町,かみちょう,134.6291667,35.63222222';
GSI.MUNI_ARRAY["28586"] = '28,兵庫県,28586,新温泉町,しんおんせんちょう,134.4491667,35.62333333';
GSI.MUNI_ARRAY["29201"] = '29,奈良県,29201,奈良市,ならし,135.8047222,34.685';
GSI.MUNI_ARRAY["29202"] = '29,奈良県,29202,大和高田市,やまとたかだし,135.7363889,34.515';
GSI.MUNI_ARRAY["29203"] = '29,奈良県,29203,大和郡山市,やまとこおりやまし,135.7827778,34.64944444';
GSI.MUNI_ARRAY["29204"] = '29,奈良県,29204,天理市,てんりし,135.8372222,34.59666667';
GSI.MUNI_ARRAY["29205"] = '29,奈良県,29205,橿原市,かしはらし,135.7925,34.50916667';
GSI.MUNI_ARRAY["29206"] = '29,奈良県,29206,桜井市,さくらいし,135.8433333,34.51861111';
GSI.MUNI_ARRAY["29207"] = '29,奈良県,29207,五條市,ごじょうし,135.6938889,34.35194444';
GSI.MUNI_ARRAY["29208"] = '29,奈良県,29208,御所市,ごせし,135.7402778,34.46333333';
GSI.MUNI_ARRAY["29209"] = '29,奈良県,29209,生駒市,いこまし,135.7005556,34.69194444';
GSI.MUNI_ARRAY["29210"] = '29,奈良県,29210,香芝市,かしばし,135.6991667,34.54138889';
GSI.MUNI_ARRAY["29211"] = '29,奈良県,29211,葛城市,かつらぎし,135.7266667,34.48916667';
GSI.MUNI_ARRAY["29212"] = '29,奈良県,29212,宇陀市,うだし,135.9525,34.52777778';
GSI.MUNI_ARRAY["29322"] = '29,奈良県,29322,山添村,やまぞえむら,136.0438889,34.68138889';
GSI.MUNI_ARRAY["29342"] = '29,奈良県,29342,平群町,へぐりちょう,135.7005556,34.62916667';
GSI.MUNI_ARRAY["29343"] = '29,奈良県,29343,三郷町,さんごうちょう,135.6955556,34.60027778';
GSI.MUNI_ARRAY["29344"] = '29,奈良県,29344,斑鳩町,いかるがちょう,135.7305556,34.60888889';
GSI.MUNI_ARRAY["29345"] = '29,奈良県,29345,安堵町,あんどちょう,135.7566667,34.60666667';
GSI.MUNI_ARRAY["29361"] = '29,奈良県,29361,川西町,かわにしちょう,135.7741667,34.58444444';
GSI.MUNI_ARRAY["29362"] = '29,奈良県,29362,三宅町,みやけちょう,135.7730556,34.57361111';
GSI.MUNI_ARRAY["29363"] = '29,奈良県,29363,田原本町,たわらもとちょう,135.795,34.55666667';
GSI.MUNI_ARRAY["29385"] = '29,奈良県,29385,曽爾村,そにむら,136.1247222,34.51055556';
GSI.MUNI_ARRAY["29386"] = '29,奈良県,29386,御杖村,みつえむら,136.1661111,34.48805556';
GSI.MUNI_ARRAY["29401"] = '29,奈良県,29401,高取町,たかとりちょう,135.7930556,34.44944444';
GSI.MUNI_ARRAY["29402"] = '29,奈良県,29402,明日香村,あすかむら,135.8205556,34.47111111';
GSI.MUNI_ARRAY["29424"] = '29,奈良県,29424,上牧町,かんまきちょう,135.7166667,34.56277778';
GSI.MUNI_ARRAY["29425"] = '29,奈良県,29425,王寺町,おうじちょう,135.7069444,34.59472222';
GSI.MUNI_ARRAY["29426"] = '29,奈良県,29426,広陵町,こうりょうちょう,135.7508333,34.54277778';
GSI.MUNI_ARRAY["29427"] = '29,奈良県,29427,河合町,かわいちょう,135.7366667,34.57833333';
GSI.MUNI_ARRAY["29441"] = '29,奈良県,29441,吉野町,よしのちょう,135.8577778,34.39611111';
GSI.MUNI_ARRAY["29442"] = '29,奈良県,29442,大淀町,おおよどちょう,135.79,34.39055556';
GSI.MUNI_ARRAY["29443"] = '29,奈良県,29443,下市町,しもいちちょう,135.7919444,34.36111111';
GSI.MUNI_ARRAY["29444"] = '29,奈良県,29444,黒滝村,くろたきむら,135.8522222,34.30916667';
GSI.MUNI_ARRAY["29446"] = '29,奈良県,29446,天川村,てんかわむら,135.8552778,34.24194444';
GSI.MUNI_ARRAY["29447"] = '29,奈良県,29447,野迫川村,のせがわむら,135.6330556,34.16638889';
GSI.MUNI_ARRAY["29449"] = '29,奈良県,29449,十津川村,とつかわむら,135.7925,33.98861111';
GSI.MUNI_ARRAY["29450"] = '29,奈良県,29450,下北山村,しもきたやまむら,135.9552778,34.005';
GSI.MUNI_ARRAY["29451"] = '29,奈良県,29451,上北山村,かみきたやまむら,136.0002778,34.13444444';
GSI.MUNI_ARRAY["29452"] = '29,奈良県,29452,川上村,かわかみむら,135.9544444,34.33833333';
GSI.MUNI_ARRAY["29453"] = '29,奈良県,29453,東吉野村,ひがしよしのむら,135.9683333,34.40361111';
GSI.MUNI_ARRAY["30201"] = '30,和歌山県,30201,和歌山市,わかやまし,135.1708333,34.23055556';
GSI.MUNI_ARRAY["30202"] = '30,和歌山県,30202,海南市,かいなんし,135.2091667,34.15555556';
GSI.MUNI_ARRAY["30203"] = '30,和歌山県,30203,橋本市,はしもとし,135.6052778,34.31472222';
GSI.MUNI_ARRAY["30204"] = '30,和歌山県,30204,有田市,ありだし,135.1277778,34.08305556';
GSI.MUNI_ARRAY["30205"] = '30,和歌山県,30205,御坊市,ごぼうし,135.1525,33.89138889';
GSI.MUNI_ARRAY["30206"] = '30,和歌山県,30206,田辺市,たなべし,135.3777778,33.72805556';
GSI.MUNI_ARRAY["30207"] = '30,和歌山県,30207,新宮市,しんぐうし,135.9925,33.72416667';
GSI.MUNI_ARRAY["30208"] = '30,和歌山県,30208,紀の川市,きのかわし,135.3625,34.26972222';
GSI.MUNI_ARRAY["30209"] = '30,和歌山県,30209,岩出市,いわでし,135.3111111,34.25638889';
GSI.MUNI_ARRAY["30304"] = '30,和歌山県,30304,紀美野町,きみのちょう,135.3080556,34.16694444';
GSI.MUNI_ARRAY["30341"] = '30,和歌山県,30341,かつらぎ町,かつらぎちょう,135.5041667,34.29638889';
GSI.MUNI_ARRAY["30343"] = '30,和歌山県,30343,九度山町,くどやまちょう,135.5622222,34.28722222';
GSI.MUNI_ARRAY["30344"] = '30,和歌山県,30344,高野町,こうやちょう,135.5866667,34.21611111';
GSI.MUNI_ARRAY["30361"] = '30,和歌山県,30361,湯浅町,ゆあさちょう,135.1786111,34.03305556';
GSI.MUNI_ARRAY["30362"] = '30,和歌山県,30362,広川町,ひろがわちょう,135.1730556,34.03';
GSI.MUNI_ARRAY["30366"] = '30,和歌山県,30366,有田川町,ありだがわちょう,135.2161111,34.0575';
GSI.MUNI_ARRAY["30381"] = '30,和歌山県,30381,美浜町,みはまちょう,135.1333333,33.89361111';
GSI.MUNI_ARRAY["30382"] = '30,和歌山県,30382,日高町,ひだかちょう,135.1408333,33.92555556';
GSI.MUNI_ARRAY["30383"] = '30,和歌山県,30383,由良町,ゆらちょう,135.1183333,33.95944444';
GSI.MUNI_ARRAY["30390"] = '30,和歌山県,30390,印南町,いなみちょう,135.2180556,33.81833333';
GSI.MUNI_ARRAY["30391"] = '30,和歌山県,30391,みなべ町,みなべちょう,135.3216667,33.7725';
GSI.MUNI_ARRAY["30392"] = '30,和歌山県,30392,日高川町,ひだかがわちょう,135.1861111,33.91166667';
GSI.MUNI_ARRAY["30401"] = '30,和歌山県,30401,白浜町,しらはまちょう,135.3480556,33.67805556';
GSI.MUNI_ARRAY["30404"] = '30,和歌山県,30404,上富田町,かみとんだちょう,135.4288889,33.69611111';
GSI.MUNI_ARRAY["30406"] = '30,和歌山県,30406,すさみ町,すさみちょう,135.4966667,33.55027778';
GSI.MUNI_ARRAY["30421"] = '30,和歌山県,30421,那智勝浦町,なちかつうらちょう,135.9408333,33.62611111';
GSI.MUNI_ARRAY["30422"] = '30,和歌山県,30422,太地町,たいじちょう,135.9438889,33.59416667';
GSI.MUNI_ARRAY["30424"] = '30,和歌山県,30424,古座川町,こざがわちょう,135.8147222,33.53194444';
GSI.MUNI_ARRAY["30427"] = '30,和歌山県,30427,北山村,きたやまむら,135.9694444,33.93194444';
GSI.MUNI_ARRAY["30428"] = '30,和歌山県,30428,串本町,くしもとちょう,135.7813889,33.4725';
GSI.MUNI_ARRAY["31201"] = '31,鳥取県,31201,鳥取市,とっとりし,134.2352778,35.50111111';
GSI.MUNI_ARRAY["31202"] = '31,鳥取県,31202,米子市,よなごし,133.3311111,35.42805556';
GSI.MUNI_ARRAY["31203"] = '31,鳥取県,31203,倉吉市,くらよしし,133.8255556,35.43';
GSI.MUNI_ARRAY["31204"] = '31,鳥取県,31204,境港市,さかいみなとし,133.2316667,35.53972222';
GSI.MUNI_ARRAY["31302"] = '31,鳥取県,31302,岩美町,いわみちょう,134.3319444,35.57583333';
GSI.MUNI_ARRAY["31325"] = '31,鳥取県,31325,若桜町,わかさちょう,134.4008333,35.34';
GSI.MUNI_ARRAY["31328"] = '31,鳥取県,31328,智頭町,ちづちょう,134.2266667,35.265';
GSI.MUNI_ARRAY["31329"] = '31,鳥取県,31329,八頭町,やずちょう,134.2508333,35.40916667';
GSI.MUNI_ARRAY["31364"] = '31,鳥取県,31364,三朝町,みささちょう,133.8625,35.40861111';
GSI.MUNI_ARRAY["31370"] = '31,鳥取県,31370,湯梨浜町,ゆりはまちょう,133.8647222,35.49';
GSI.MUNI_ARRAY["31371"] = '31,鳥取県,31371,琴浦町,ことうらちょう,133.6927778,35.49527778';
GSI.MUNI_ARRAY["31372"] = '31,鳥取県,31372,北栄町,ほくえいちょう,133.7586111,35.49';
GSI.MUNI_ARRAY["31384"] = '31,鳥取県,31384,日吉津村,ひえづそん,133.3805556,35.44027778';
GSI.MUNI_ARRAY["31386"] = '31,鳥取県,31386,大山町,だいせんちょう,133.4961111,35.51083333';
GSI.MUNI_ARRAY["31389"] = '31,鳥取県,31389,南部町,なんぶちょう,133.3266667,35.34027778';
GSI.MUNI_ARRAY["31390"] = '31,鳥取県,31390,伯耆町,ほうきちょう,133.4075,35.38527778';
GSI.MUNI_ARRAY["31401"] = '31,鳥取県,31401,日南町,にちなんちょう,133.3061111,35.16305556';
GSI.MUNI_ARRAY["31402"] = '31,鳥取県,31402,日野町,ひのちょう,133.4427778,35.24083333';
GSI.MUNI_ARRAY["31403"] = '31,鳥取県,31403,江府町,こうふちょう,133.4886111,35.28305556';
GSI.MUNI_ARRAY["32201"] = '32,島根県,32201,松江市,まつえし,133.0486111,35.46805556';
GSI.MUNI_ARRAY["32202"] = '32,島根県,32202,浜田市,はまだし,132.08,34.89916667';
GSI.MUNI_ARRAY["32203"] = '32,島根県,32203,出雲市,いずもし,132.7547222,35.36694444';
GSI.MUNI_ARRAY["32204"] = '32,島根県,32204,益田市,ますだし,131.8427778,34.675';
GSI.MUNI_ARRAY["32205"] = '32,島根県,32205,大田市,おおだし,132.4997222,35.19222222';
GSI.MUNI_ARRAY["32206"] = '32,島根県,32206,安来市,やすぎし,133.2508333,35.43166667';
GSI.MUNI_ARRAY["32207"] = '32,島根県,32207,江津市,ごうつし,132.2211111,35.01138889';
GSI.MUNI_ARRAY["32209"] = '32,島根県,32209,雲南市,うんなんし,132.9005556,35.28777778';
GSI.MUNI_ARRAY["32343"] = '32,島根県,32343,奥出雲町,おくいずもちょう,133.0025,35.1975';
GSI.MUNI_ARRAY["32386"] = '32,島根県,32386,飯南町,いいなんちょう,132.7138889,35';
GSI.MUNI_ARRAY["32441"] = '32,島根県,32441,川本町,かわもとまち,132.4952778,34.99416667';
GSI.MUNI_ARRAY["32448"] = '32,島根県,32448,美郷町,みさとちょう,132.5911111,35.07666667';
GSI.MUNI_ARRAY["32449"] = '32,島根県,32449,邑南町,おおなんちょう,132.4377778,34.89388889';
GSI.MUNI_ARRAY["32501"] = '32,島根県,32501,津和野町,つわのちょう,131.8383333,34.54361111';
GSI.MUNI_ARRAY["32505"] = '32,島根県,32505,吉賀町,よしかちょう,131.935,34.35361111';
GSI.MUNI_ARRAY["32525"] = '32,島根県,32525,海士町,あまちょう,133.0969444,36.09666667';
GSI.MUNI_ARRAY["32526"] = '32,島根県,32526,西ノ島町,にしのしまちょう,132.9944444,36.09333333';
GSI.MUNI_ARRAY["32527"] = '32,島根県,32527,知夫村,ちぶむら,133.0397222,36.01416667';
GSI.MUNI_ARRAY["32528"] = '32,島根県,32528,隠岐の島町,おきのしまちょう,133.3219444,36.20916667';
GSI.MUNI_ARRAY["33100"] = '33,岡山県,33100,岡山市,おかやまし,133.9197222,34.655';
GSI.MUNI_ARRAY["33101"] = '33,岡山県,33101,岡山市　北区,おかやまし　きたく,133.9197222,34.655';
GSI.MUNI_ARRAY["33102"] = '33,岡山県,33102,岡山市　中区,おかやまし　なかく,133.9430556,34.67083333';
GSI.MUNI_ARRAY["33103"] = '33,岡山県,33103,岡山市　東区,おかやまし　ひがしく,134.0363889,34.65833333';
GSI.MUNI_ARRAY["33104"] = '33,岡山県,33104,岡山市　南区,おかやまし　みなみく,133.8652778,34.54388889';
GSI.MUNI_ARRAY["33202"] = '33,岡山県,33202,倉敷市,くらしきし,133.7719444,34.585';
GSI.MUNI_ARRAY["33203"] = '33,岡山県,33203,津山市,つやまし,134.0044444,35.06944444';
GSI.MUNI_ARRAY["33204"] = '33,岡山県,33204,玉野市,たまのし,133.9458333,34.49194444';
GSI.MUNI_ARRAY["33205"] = '33,岡山県,33205,笠岡市,かさおかし,133.5072222,34.50722222';
GSI.MUNI_ARRAY["33207"] = '33,岡山県,33207,井原市,いばらし,133.4638889,34.59777778';
GSI.MUNI_ARRAY["33208"] = '33,岡山県,33208,総社市,そうじゃし,133.7466667,34.67277778';
GSI.MUNI_ARRAY["33209"] = '33,岡山県,33209,高梁市,たかはしし,133.6166667,34.79138889';
GSI.MUNI_ARRAY["33210"] = '33,岡山県,33210,新見市,にいみし,133.4702778,34.97722222';
GSI.MUNI_ARRAY["33211"] = '33,岡山県,33211,備前市,びぜんし,134.1880556,34.745';
GSI.MUNI_ARRAY["33212"] = '33,岡山県,33212,瀬戸内市,せとうちし,134.0927778,34.665';
GSI.MUNI_ARRAY["33213"] = '33,岡山県,33213,赤磐市,あかいわし,134.0188889,34.75527778';
GSI.MUNI_ARRAY["33214"] = '33,岡山県,33214,真庭市,まにわし,133.7527778,35.07555556';
GSI.MUNI_ARRAY["33215"] = '33,岡山県,33215,美作市,みまさかし,134.1486111,35.00861111';
GSI.MUNI_ARRAY["33216"] = '33,岡山県,33216,浅口市,あさくちし,133.585,34.52777778';
GSI.MUNI_ARRAY["33346"] = '33,岡山県,33346,和気町,わけちょう,134.1575,34.80277778';
GSI.MUNI_ARRAY["33423"] = '33,岡山県,33423,早島町,はやしまちょう,133.8283333,34.60055556';
GSI.MUNI_ARRAY["33445"] = '33,岡山県,33445,里庄町,さとしょうちょう,133.5569444,34.51361111';
GSI.MUNI_ARRAY["33461"] = '33,岡山県,33461,矢掛町,やかげちょう,133.5872222,34.62777778';
GSI.MUNI_ARRAY["33586"] = '33,岡山県,33586,新庄村,しんじょうそん,133.5677778,35.17944444';
GSI.MUNI_ARRAY["33606"] = '33,岡山県,33606,鏡野町,かがみのちょう,133.9330556,35.09194444';
GSI.MUNI_ARRAY["33622"] = '33,岡山県,33622,勝央町,しょうおうちょう,134.1161111,35.04194444';
GSI.MUNI_ARRAY["33623"] = '33,岡山県,33623,奈義町,なぎちょう,134.1775,35.12305556';
GSI.MUNI_ARRAY["33643"] = '33,岡山県,33643,西粟倉村,にしあわくらそん,134.3363889,35.17138889';
GSI.MUNI_ARRAY["33663"] = '33,岡山県,33663,久米南町,くめなんちょう,133.9608333,34.92916667';
GSI.MUNI_ARRAY["33666"] = '33,岡山県,33666,美咲町,みさきちょう,133.9583333,34.99777778';
GSI.MUNI_ARRAY["33681"] = '33,岡山県,33681,吉備中央町,きびちゅうおうちょう,133.6938889,34.8625';
GSI.MUNI_ARRAY["34100"] = '34,広島県,34100,広島市,ひろしまし,132.4552778,34.38527778';
GSI.MUNI_ARRAY["34101"] = '34,広島県,34101,広島市　中区,ひろしまし　なかく,132.4552778,34.38611111';
GSI.MUNI_ARRAY["34102"] = '34,広島県,34102,広島市　東区,ひろしまし　ひがしく,132.4827778,34.39527778';
GSI.MUNI_ARRAY["34103"] = '34,広島県,34103,広島市　南区,ひろしまし　みなみく,132.4691667,34.38';
GSI.MUNI_ARRAY["34104"] = '34,広島県,34104,広島市　西区,ひろしまし　にしく,132.4344444,34.39388889';
GSI.MUNI_ARRAY["34105"] = '34,広島県,34105,広島市　安佐南区,ひろしまし　あさみなみく,132.4716667,34.45194444';
GSI.MUNI_ARRAY["34106"] = '34,広島県,34106,広島市　安佐北区,ひろしまし　あさきたく,132.5077778,34.51833333';
GSI.MUNI_ARRAY["34107"] = '34,広島県,34107,広島市　安芸区,ひろしまし　あきく,132.5255556,34.37166667';
GSI.MUNI_ARRAY["34108"] = '34,広島県,34108,広島市　佐伯区,ひろしまし　さえきく,132.3608333,34.36444444';
GSI.MUNI_ARRAY["34202"] = '34,広島県,34202,呉市,くれし,132.5658333,34.24916667';
GSI.MUNI_ARRAY["34203"] = '34,広島県,34203,竹原市,たけはらし,132.9069444,34.34166667';
GSI.MUNI_ARRAY["34204"] = '34,広島県,34204,三原市,みはらし,133.0786111,34.3975';
GSI.MUNI_ARRAY["34205"] = '34,広島県,34205,尾道市,おのみちし,133.205,34.40888889';
GSI.MUNI_ARRAY["34207"] = '34,広島県,34207,福山市,ふくやまし,133.3625,34.48583333';
GSI.MUNI_ARRAY["34208"] = '34,広島県,34208,府中市,ふちゅうし,133.2363889,34.56833333';
GSI.MUNI_ARRAY["34209"] = '34,広島県,34209,三次市,みよしし,132.8516667,34.80583333';
GSI.MUNI_ARRAY["34210"] = '34,広島県,34210,庄原市,しょうばらし,133.0166667,34.85777778';
GSI.MUNI_ARRAY["34211"] = '34,広島県,34211,大竹市,おおたけし,132.2222222,34.23805556';
GSI.MUNI_ARRAY["34212"] = '34,広島県,34212,東広島市,ひがしひろしまし,132.7436111,34.42694444';
GSI.MUNI_ARRAY["34213"] = '34,広島県,34213,廿日市市,はつかいちし,132.3316667,34.34861111';
GSI.MUNI_ARRAY["34214"] = '34,広島県,34214,安芸高田市,あきたかたし,132.7038889,34.66638889';
GSI.MUNI_ARRAY["34215"] = '34,広島県,34215,江田島市,えたじまし,132.4441667,34.22277778';
GSI.MUNI_ARRAY["34302"] = '34,広島県,34302,府中町,ふちゅうちょう,132.5044444,34.3925';
GSI.MUNI_ARRAY["34304"] = '34,広島県,34304,海田町,かいたちょう,132.5361111,34.37222222';
GSI.MUNI_ARRAY["34307"] = '34,広島県,34307,熊野町,くまのちょう,132.5844444,34.33583333';
GSI.MUNI_ARRAY["34309"] = '34,広島県,34309,坂町,さかちょう,132.5138889,34.34138889';
GSI.MUNI_ARRAY["34368"] = '34,広島県,34368,安芸太田町,あきおおたちょう,132.2269444,34.57666667';
GSI.MUNI_ARRAY["34369"] = '34,広島県,34369,北広島町,きたひろしまちょう,132.5383333,34.67444444';
GSI.MUNI_ARRAY["34431"] = '34,広島県,34431,大崎上島町,おおさきかみじまちょう,132.9152778,34.26972222';
GSI.MUNI_ARRAY["34462"] = '34,広島県,34462,世羅町,せらちょう,133.0566667,34.58666667';
GSI.MUNI_ARRAY["34545"] = '34,広島県,34545,神石高原町,じんせきこうげんちょう,133.2477778,34.70361111';
GSI.MUNI_ARRAY["35201"] = '35,山口県,35201,下関市,しものせきし,130.9413889,33.95777778';
GSI.MUNI_ARRAY["35202"] = '35,山口県,35202,宇部市,うべし,131.2466667,33.95166667';
GSI.MUNI_ARRAY["35203"] = '35,山口県,35203,山口市,やまぐちし,131.4738889,34.17833333';
GSI.MUNI_ARRAY["35204"] = '35,山口県,35204,萩市,はぎし,131.3991667,34.40805556';
GSI.MUNI_ARRAY["35206"] = '35,山口県,35206,防府市,ほうふし,131.5627778,34.05194444';
GSI.MUNI_ARRAY["35207"] = '35,山口県,35207,下松市,くだまつし,131.8702778,34.015';
GSI.MUNI_ARRAY["35208"] = '35,山口県,35208,岩国市,いわくにし,132.2197222,34.16694444';
GSI.MUNI_ARRAY["35210"] = '35,山口県,35210,光市,ひかりし,131.9422222,33.96166667';
GSI.MUNI_ARRAY["35211"] = '35,山口県,35211,長門市,ながとし,131.1822222,34.37111111';
GSI.MUNI_ARRAY["35212"] = '35,山口県,35212,柳井市,やないし,132.1016667,33.96388889';
GSI.MUNI_ARRAY["35213"] = '35,山口県,35213,美祢市,みねし,131.2058333,34.16666667';
GSI.MUNI_ARRAY["35215"] = '35,山口県,35215,周南市,しゅうなんし,131.8061111,34.05527778';
GSI.MUNI_ARRAY["35216"] = '35,山口県,35216,山陽小野田市,さんようおのだし,131.1819444,34.00333333';
GSI.MUNI_ARRAY["35305"] = '35,山口県,35305,周防大島町,すおうおおしまちょう,132.1952778,33.9275';
GSI.MUNI_ARRAY["35321"] = '35,山口県,35321,和木町,わきちょう,132.2202778,34.20222222';
GSI.MUNI_ARRAY["35341"] = '35,山口県,35341,上関町,かみのせきちょう,132.1108333,33.83083333';
GSI.MUNI_ARRAY["35343"] = '35,山口県,35343,田布施町,たぶせちょう,132.0413889,33.95472222';
GSI.MUNI_ARRAY["35344"] = '35,山口県,35344,平生町,ひらおちょう,132.0733333,33.93805556';
GSI.MUNI_ARRAY["35502"] = '35,山口県,35502,阿武町,あぶちょう,131.4711111,34.50333333';
GSI.MUNI_ARRAY["36201"] = '36,徳島県,36201,徳島市,とくしまし,134.5547222,34.07027778';
GSI.MUNI_ARRAY["36202"] = '36,徳島県,36202,鳴門市,なるとし,134.6088889,34.1725';
GSI.MUNI_ARRAY["36203"] = '36,徳島県,36203,小松島市,こまつしまし,134.5905556,34.00472222';
GSI.MUNI_ARRAY["36204"] = '36,徳島県,36204,阿南市,あなんし,134.6594444,33.92166667';
GSI.MUNI_ARRAY["36205"] = '36,徳島県,36205,吉野川市,よしのがわし,134.3586111,34.06638889';
GSI.MUNI_ARRAY["36206"] = '36,徳島県,36206,阿波市,あわし,134.2358333,34.08222222';
GSI.MUNI_ARRAY["36207"] = '36,徳島県,36207,美馬市,みまし,134.17,34.05333333';
GSI.MUNI_ARRAY["36208"] = '36,徳島県,36208,三好市,みよしし,133.8072222,34.02583333';
GSI.MUNI_ARRAY["36301"] = '36,徳島県,36301,勝浦町,かつうらちょう,134.5113889,33.93138889';
GSI.MUNI_ARRAY["36302"] = '36,徳島県,36302,上勝町,かみかつちょう,134.4019444,33.88888889';
GSI.MUNI_ARRAY["36321"] = '36,徳島県,36321,佐那河内村,さなごうちそん,134.4533333,33.99305556';
GSI.MUNI_ARRAY["36341"] = '36,徳島県,36341,石井町,いしいちょう,134.4405556,34.07472222';
GSI.MUNI_ARRAY["36342"] = '36,徳島県,36342,神山町,かみやまちょう,134.3505556,33.96722222';
GSI.MUNI_ARRAY["36368"] = '36,徳島県,36368,那賀町,なかちょう,134.4958333,33.85722222';
GSI.MUNI_ARRAY["36383"] = '36,徳島県,36383,牟岐町,むぎちょう,134.4208333,33.66833333';
GSI.MUNI_ARRAY["36387"] = '36,徳島県,36387,美波町,みなみちょう,134.5355556,33.73472222';
GSI.MUNI_ARRAY["36388"] = '36,徳島県,36388,海陽町,かいようちょう,134.3519444,33.60194444';
GSI.MUNI_ARRAY["36401"] = '36,徳島県,36401,松茂町,まつしげちょう,134.5802778,34.13388889';
GSI.MUNI_ARRAY["36402"] = '36,徳島県,36402,北島町,きたじまちょう,134.5469444,34.12555556';
GSI.MUNI_ARRAY["36403"] = '36,徳島県,36403,藍住町,あいずみちょう,134.495,34.12666667';
GSI.MUNI_ARRAY["36404"] = '36,徳島県,36404,板野町,いたのちょう,134.4625,34.14416667';
GSI.MUNI_ARRAY["36405"] = '36,徳島県,36405,上板町,かみいたちょう,134.405,34.12138889';
GSI.MUNI_ARRAY["36468"] = '36,徳島県,36468,つるぎ町,つるぎちょう,134.0641667,34.03722222';
GSI.MUNI_ARRAY["36489"] = '36,徳島県,36489,東みよし町,ひがしみよしちょう,133.9369444,34.03666667';
GSI.MUNI_ARRAY["37201"] = '37,香川県,37201,高松市,たかまつし,134.0466667,34.34277778';
GSI.MUNI_ARRAY["37202"] = '37,香川県,37202,丸亀市,まるがめし,133.7977778,34.28944444';
GSI.MUNI_ARRAY["37203"] = '37,香川県,37203,坂出市,さかいでし,133.8605556,34.31638889';
GSI.MUNI_ARRAY["37204"] = '37,香川県,37204,善通寺市,ぜんつうじし,133.7872222,34.22833333';
GSI.MUNI_ARRAY["37205"] = '37,香川県,37205,観音寺市,かんおんじし,133.6616667,34.12722222';
GSI.MUNI_ARRAY["37206"] = '37,香川県,37206,さぬき市,さぬきし,134.1722222,34.32527778';
GSI.MUNI_ARRAY["37207"] = '37,香川県,37207,東かがわ市,ひがしかがわし,134.3588889,34.24388889';
GSI.MUNI_ARRAY["37208"] = '37,香川県,37208,三豊市,みとよし,133.715,34.18277777';
GSI.MUNI_ARRAY["37322"] = '37,香川県,37322,土庄町,とのしょうちょう,134.1858333,34.48611111';
GSI.MUNI_ARRAY["37324"] = '37,香川県,37324,小豆島町,しょうどしまちょう,134.2336111,34.48194444';
GSI.MUNI_ARRAY["37341"] = '37,香川県,37341,三木町,みきちょう,134.1344444,34.26833333';
GSI.MUNI_ARRAY["37364"] = '37,香川県,37364,直島町,なおしまちょう,133.9955556,34.46';
GSI.MUNI_ARRAY["37386"] = '37,香川県,37386,宇多津町,うたづちょう,133.8255556,34.31055556';
GSI.MUNI_ARRAY["37387"] = '37,香川県,37387,綾川町,あやがわちょう,133.9230556,34.24944444';
GSI.MUNI_ARRAY["37403"] = '37,香川県,37403,琴平町,ことひらちょう,133.8233333,34.19138889';
GSI.MUNI_ARRAY["37404"] = '37,香川県,37404,多度津町,たどつちょう,133.7536111,34.2725';
GSI.MUNI_ARRAY["37406"] = '37,香川県,37406,まんのう町,まんのうちょう,133.8413889,34.19222222';
GSI.MUNI_ARRAY["38201"] = '38,愛媛県,38201,松山市,まつやまし,132.7655556,33.83916667';
GSI.MUNI_ARRAY["38202"] = '38,愛媛県,38202,今治市,いまばりし,132.9977778,34.06611111';
GSI.MUNI_ARRAY["38203"] = '38,愛媛県,38203,宇和島市,うわじまし,132.5605556,33.22333333';
GSI.MUNI_ARRAY["38204"] = '38,愛媛県,38204,八幡浜市,やわたはまし,132.4233333,33.46305556';
GSI.MUNI_ARRAY["38205"] = '38,愛媛県,38205,新居浜市,にいはまし,133.2833333,33.96027778';
GSI.MUNI_ARRAY["38206"] = '38,愛媛県,38206,西条市,さいじょうし,133.1811111,33.91972222';
GSI.MUNI_ARRAY["38207"] = '38,愛媛県,38207,大洲市,おおずし,132.5447222,33.50638889';
GSI.MUNI_ARRAY["38210"] = '38,愛媛県,38210,伊予市,いよし,132.7038889,33.7575';
GSI.MUNI_ARRAY["38213"] = '38,愛媛県,38213,四国中央市,しこくちゅうおうし,133.5491667,33.98083333';
GSI.MUNI_ARRAY["38214"] = '38,愛媛県,38214,西予市,せいよし,132.5111111,33.36305556';
GSI.MUNI_ARRAY["38215"] = '38,愛媛県,38215,東温市,とうおんし,132.8719444,33.79111111';
GSI.MUNI_ARRAY["38356"] = '38,愛媛県,38356,上島町,かみじまちょう,133.2044444,34.2575';
GSI.MUNI_ARRAY["38386"] = '38,愛媛県,38386,久万高原町,くまこうげんちょう,132.9016667,33.65555556';
GSI.MUNI_ARRAY["38401"] = '38,愛媛県,38401,松前町,まさきちょう,132.7113889,33.7875';
GSI.MUNI_ARRAY["38402"] = '38,愛媛県,38402,砥部町,とべちょう,132.7922222,33.74916667';
GSI.MUNI_ARRAY["38422"] = '38,愛媛県,38422,内子町,うちこちょう,132.6580556,33.53305556';
GSI.MUNI_ARRAY["38442"] = '38,愛媛県,38442,伊方町,いかたちょう,132.3541667,33.48833333';
GSI.MUNI_ARRAY["38484"] = '38,愛媛県,38484,松野町,まつのちょう,132.7108333,33.22722222';
GSI.MUNI_ARRAY["38488"] = '38,愛媛県,38488,鬼北町,きほくちょう,132.6841667,33.25583333';
GSI.MUNI_ARRAY["38506"] = '38,愛媛県,38506,愛南町,あいなんちょう,132.5833333,32.96222222';
GSI.MUNI_ARRAY["39201"] = '39,高知県,39201,高知市,こうちし,133.5313889,33.55888889';
GSI.MUNI_ARRAY["39202"] = '39,高知県,39202,室戸市,むろとし,134.1519444,33.29';
GSI.MUNI_ARRAY["39203"] = '39,高知県,39203,安芸市,あきし,133.9072222,33.5025';
GSI.MUNI_ARRAY["39204"] = '39,高知県,39204,南国市,なんこくし,133.6413889,33.57555556';
GSI.MUNI_ARRAY["39205"] = '39,高知県,39205,土佐市,とさし,133.4252778,33.49611111';
GSI.MUNI_ARRAY["39206"] = '39,高知県,39206,須崎市,すさきし,133.2830556,33.40083333';
GSI.MUNI_ARRAY["39208"] = '39,高知県,39208,宿毛市,すくもし,132.7261111,32.93888889';
GSI.MUNI_ARRAY["39209"] = '39,高知県,39209,土佐清水市,とさしみずし,132.955,32.78138889';
GSI.MUNI_ARRAY["39210"] = '39,高知県,39210,四万十市,しまんとし,132.9338889,32.99138889';
GSI.MUNI_ARRAY["39211"] = '39,高知県,39211,香南市,こうなんし,133.7005556,33.56416667';
GSI.MUNI_ARRAY["39212"] = '39,高知県,39212,香美市,かみし,133.6861111,33.60388889';
GSI.MUNI_ARRAY["39301"] = '39,高知県,39301,東洋町,とうようちょう,134.28,33.52805556';
GSI.MUNI_ARRAY["39302"] = '39,高知県,39302,奈半利町,なはりちょう,134.0211111,33.42416667';
GSI.MUNI_ARRAY["39303"] = '39,高知県,39303,田野町,たのちょう,134.0083333,33.42777778';
GSI.MUNI_ARRAY["39304"] = '39,高知県,39304,安田町,やすだちょう,133.9811111,33.43833333';
GSI.MUNI_ARRAY["39305"] = '39,高知県,39305,北川村,きたがわむら,134.0422222,33.44777778';
GSI.MUNI_ARRAY["39306"] = '39,高知県,39306,馬路村,うまじむら,134.0480556,33.55527778';
GSI.MUNI_ARRAY["39307"] = '39,高知県,39307,芸西村,げいせいむら,133.8091667,33.52694444';
GSI.MUNI_ARRAY["39341"] = '39,高知県,39341,本山町,もとやまちょう,133.5916667,33.75694444';
GSI.MUNI_ARRAY["39344"] = '39,高知県,39344,大豊町,おおとよちょう,133.6641667,33.76416667';
GSI.MUNI_ARRAY["39363"] = '39,高知県,39363,土佐町,とさちょう,133.5322222,33.73694444';
GSI.MUNI_ARRAY["39364"] = '39,高知県,39364,大川村,おおかわむら,133.4666667,33.78361111';
GSI.MUNI_ARRAY["39386"] = '39,高知県,39386,いの町,いのちょう,133.4277778,33.54861111';
GSI.MUNI_ARRAY["39387"] = '39,高知県,39387,仁淀川町,によどがわちょう,133.1683333,33.57527778';
GSI.MUNI_ARRAY["39401"] = '39,高知県,39401,中土佐町,なかとさちょう,133.2283333,33.3275';
GSI.MUNI_ARRAY["39402"] = '39,高知県,39402,佐川町,さかわちょう,133.2866667,33.50083333';
GSI.MUNI_ARRAY["39403"] = '39,高知県,39403,越知町,おちちょう,133.2519444,33.53277778';
GSI.MUNI_ARRAY["39405"] = '39,高知県,39405,梼原町,ゆすはらちょう,132.9269444,33.39194444';
GSI.MUNI_ARRAY["39410"] = '39,高知県,39410,日高村,ひだかむら,133.3733333,33.53472222';
GSI.MUNI_ARRAY["39411"] = '39,高知県,39411,津野町,つのちょう,133.1994444,33.44666667';
GSI.MUNI_ARRAY["39412"] = '39,高知県,39412,四万十町,しまんとちょう,133.1355556,33.20833333';
GSI.MUNI_ARRAY["39424"] = '39,高知県,39424,大月町,おおつきちょう,132.7069444,32.84138889';
GSI.MUNI_ARRAY["39427"] = '39,高知県,39427,三原村,みはらむら,132.8472222,32.90611111';
GSI.MUNI_ARRAY["39428"] = '39,高知県,39428,黒潮町,くろしおちょう,133.0108333,33.025';
GSI.MUNI_ARRAY["40100"] = '40,福岡県,40100,北九州市,きたきゅうしゅうし,130.8752778,33.88333333';
GSI.MUNI_ARRAY["40101"] = '40,福岡県,40101,北九州市　門司区,きたきゅうしゅうし　もじく,130.9597222,33.94111111';
GSI.MUNI_ARRAY["40103"] = '40,福岡県,40103,北九州市　若松区,きたきゅうしゅうし　わかまつく,130.8111111,33.90555556';
GSI.MUNI_ARRAY["40105"] = '40,福岡県,40105,北九州市　戸畑区,きたきゅうしゅうし　とばたく,130.8297222,33.89333333';
GSI.MUNI_ARRAY["40106"] = '40,福岡県,40106,北九州市　小倉北区,きたきゅうしゅうし　こくらきたく,130.8736111,33.88083333';
GSI.MUNI_ARRAY["40107"] = '40,福岡県,40107,北九州市　小倉南区,きたきゅうしゅうし　こくらみなみく,130.8847222,33.84638889';
GSI.MUNI_ARRAY["40108"] = '40,福岡県,40108,北九州市　八幡東区,きたきゅうしゅうし　やはたひがしく,130.8119444,33.86361111';
GSI.MUNI_ARRAY["40109"] = '40,福岡県,40109,北九州市　八幡西区,きたきゅうしゅうし　やはたにしく,130.7602778,33.86138889';
GSI.MUNI_ARRAY["40130"] = '40,福岡県,40130,福岡市,ふくおかし,130.4016667,33.59';
GSI.MUNI_ARRAY["40131"] = '40,福岡県,40131,福岡市　東区,ふくおかし　ひがしく,130.4175,33.61777778';
GSI.MUNI_ARRAY["40132"] = '40,福岡県,40132,福岡市　博多区,ふくおかし　はかたく,130.415,33.59138889';
GSI.MUNI_ARRAY["40133"] = '40,福岡県,40133,福岡市　中央区,ふくおかし　ちゅうおうく,130.3930556,33.58916667';
GSI.MUNI_ARRAY["40134"] = '40,福岡県,40134,福岡市　南区,ふくおかし　みなみく,130.4266667,33.56166667';
GSI.MUNI_ARRAY["40135"] = '40,福岡県,40135,福岡市　西区,ふくおかし　にしく,130.3230556,33.58277778';
GSI.MUNI_ARRAY["40136"] = '40,福岡県,40136,福岡市　城南区,ふくおかし　じょうなんく,130.37,33.57583333';
GSI.MUNI_ARRAY["40137"] = '40,福岡県,40137,福岡市　早良区,ふくおかし　さわらく,130.3483333,33.58194444';
GSI.MUNI_ARRAY["40202"] = '40,福岡県,40202,大牟田市,おおむたし,130.4461111,33.03027778';
GSI.MUNI_ARRAY["40203"] = '40,福岡県,40203,久留米市,くるめし,130.5083333,33.31944444';
GSI.MUNI_ARRAY["40204"] = '40,福岡県,40204,直方市,のおがたし,130.7297222,33.74388889';
GSI.MUNI_ARRAY["40205"] = '40,福岡県,40205,飯塚市,いいづかし,130.6913889,33.64583333';
GSI.MUNI_ARRAY["40206"] = '40,福岡県,40206,田川市,たがわし,130.8061111,33.63888889';
GSI.MUNI_ARRAY["40207"] = '40,福岡県,40207,柳川市,やながわし,130.4061111,33.16305556';
GSI.MUNI_ARRAY["40210"] = '40,福岡県,40210,八女市,やめし,130.5577778,33.21194444';
GSI.MUNI_ARRAY["40211"] = '40,福岡県,40211,筑後市,ちくごし,130.5022222,33.21222222';
GSI.MUNI_ARRAY["40212"] = '40,福岡県,40212,大川市,おおかわし,130.3838889,33.20666667';
GSI.MUNI_ARRAY["40213"] = '40,福岡県,40213,行橋市,ゆくはしし,130.9830556,33.72861111';
GSI.MUNI_ARRAY["40214"] = '40,福岡県,40214,豊前市,ぶぜんし,131.1302778,33.61166667';
GSI.MUNI_ARRAY["40215"] = '40,福岡県,40215,中間市,なかまし,130.7091667,33.81666667';
GSI.MUNI_ARRAY["40216"] = '40,福岡県,40216,小郡市,おごおりし,130.5555556,33.39638889';
GSI.MUNI_ARRAY["40217"] = '40,福岡県,40217,筑紫野市,ちくしのし,130.5155556,33.49638889';
GSI.MUNI_ARRAY["40218"] = '40,福岡県,40218,春日市,かすがし,130.4702778,33.53277778';
GSI.MUNI_ARRAY["40219"] = '40,福岡県,40219,大野城市,おおのじょうし,130.4788889,33.53638889';
GSI.MUNI_ARRAY["40220"] = '40,福岡県,40220,宗像市,むなかたし,130.5405556,33.80555556';
GSI.MUNI_ARRAY["40221"] = '40,福岡県,40221,太宰府市,だざいふし,130.5238889,33.51277778';
GSI.MUNI_ARRAY["40223"] = '40,福岡県,40223,古賀市,こがし,130.47,33.72888889';
GSI.MUNI_ARRAY["40224"] = '40,福岡県,40224,福津市,ふくつし,130.4911111,33.76694444';
GSI.MUNI_ARRAY["40225"] = '40,福岡県,40225,うきは市,うきはし,130.755,33.34722222';
GSI.MUNI_ARRAY["40226"] = '40,福岡県,40226,宮若市,みやわかし,130.6666667,33.72361111';
GSI.MUNI_ARRAY["40227"] = '40,福岡県,40227,嘉麻市,かまし,130.7116667,33.56333333';
GSI.MUNI_ARRAY["40228"] = '40,福岡県,40228,朝倉市,あさくらし,130.6655556,33.42333333';
GSI.MUNI_ARRAY["40229"] = '40,福岡県,40229,みやま市,みやまし,130.4747222,33.1525';
GSI.MUNI_ARRAY["40230"] = '40,福岡県,40230,糸島市,いとしまし,130.1955556,33.55722222';
GSI.MUNI_ARRAY["40305"] = '40,福岡県,40305,那珂川町,なかがわまち,130.4222222,33.49944444';
GSI.MUNI_ARRAY["40341"] = '40,福岡県,40341,宇美町,うみまち,130.5111111,33.56777778';
GSI.MUNI_ARRAY["40342"] = '40,福岡県,40342,篠栗町,ささぐりまち,130.5263889,33.62388889';
GSI.MUNI_ARRAY["40343"] = '40,福岡県,40343,志免町,しめまち,130.4797222,33.59138889';
GSI.MUNI_ARRAY["40344"] = '40,福岡県,40344,須恵町,すえまち,130.5072222,33.58722222';
GSI.MUNI_ARRAY["40345"] = '40,福岡県,40345,新宮町,しんぐうまち,130.4466667,33.71527778';
GSI.MUNI_ARRAY["40348"] = '40,福岡県,40348,久山町,ひさやままち,130.5,33.64666667';
GSI.MUNI_ARRAY["40349"] = '40,福岡県,40349,粕屋町,かすやまち,130.4805556,33.61083333';
GSI.MUNI_ARRAY["40381"] = '40,福岡県,40381,芦屋町,あしやまち,130.6638889,33.89388889';
GSI.MUNI_ARRAY["40382"] = '40,福岡県,40382,水巻町,みずまきまち,130.6947222,33.85472222';
GSI.MUNI_ARRAY["40383"] = '40,福岡県,40383,岡垣町,おかがきまち,130.6113889,33.85361111';
GSI.MUNI_ARRAY["40384"] = '40,福岡県,40384,遠賀町,おんがちょう,130.6683333,33.84805556';
GSI.MUNI_ARRAY["40401"] = '40,福岡県,40401,小竹町,こたけまち,130.7127778,33.6925';
GSI.MUNI_ARRAY["40402"] = '40,福岡県,40402,鞍手町,くらてまち,130.6741667,33.79194444';
GSI.MUNI_ARRAY["40421"] = '40,福岡県,40421,桂川町,けいせんまち,130.6780556,33.57888889';
GSI.MUNI_ARRAY["40447"] = '40,福岡県,40447,筑前町,ちくぜんまち,130.5952778,33.45694444';
GSI.MUNI_ARRAY["40448"] = '40,福岡県,40448,東峰村,とうほうむら,130.87,33.39722222';
GSI.MUNI_ARRAY["40503"] = '40,福岡県,40503,大刀洗町,たちあらいまち,130.6225,33.3725';
GSI.MUNI_ARRAY["40522"] = '40,福岡県,40522,大木町,おおきまち,130.4397222,33.21055556';
GSI.MUNI_ARRAY["40544"] = '40,福岡県,40544,広川町,ひろかわまち,130.5513889,33.24138889';
GSI.MUNI_ARRAY["40601"] = '40,福岡県,40601,香春町,かわらまち,130.8472222,33.66805556';
GSI.MUNI_ARRAY["40602"] = '40,福岡県,40602,添田町,そえだまち,130.8541667,33.57166667';
GSI.MUNI_ARRAY["40604"] = '40,福岡県,40604,糸田町,いとだまち,130.7791667,33.65277778';
GSI.MUNI_ARRAY["40605"] = '40,福岡県,40605,川崎町,かわさきまち,130.8152778,33.6';
GSI.MUNI_ARRAY["40608"] = '40,福岡県,40608,大任町,おおとうまち,130.8522222,33.61222222';
GSI.MUNI_ARRAY["40609"] = '40,福岡県,40609,赤村,あかむら,130.8708333,33.61666667';
GSI.MUNI_ARRAY["40610"] = '40,福岡県,40610,福智町,ふくちまち,130.78,33.68333333';
GSI.MUNI_ARRAY["40621"] = '40,福岡県,40621,苅田町,かんだまち,130.9805556,33.77611111';
GSI.MUNI_ARRAY["40625"] = '40,福岡県,40625,みやこ町,みやこまち,130.9205556,33.69916667';
GSI.MUNI_ARRAY["40642"] = '40,福岡県,40642,吉富町,よしとみまち,131.1761111,33.60277778';
GSI.MUNI_ARRAY["40646"] = '40,福岡県,40646,上毛町,こうげまち,131.1644444,33.57833333';
GSI.MUNI_ARRAY["40647"] = '40,福岡県,40647,築上町,ちくじょうまち,131.0561111,33.65611111';
GSI.MUNI_ARRAY["41201"] = '41,佐賀県,41201,佐賀市,さがし,130.3008333,33.26333333';
GSI.MUNI_ARRAY["41202"] = '41,佐賀県,41202,唐津市,からつし,129.9686111,33.45';
GSI.MUNI_ARRAY["41203"] = '41,佐賀県,41203,鳥栖市,とすし,130.5061111,33.37777778';
GSI.MUNI_ARRAY["41204"] = '41,佐賀県,41204,多久市,たくし,130.1102778,33.28861111';
GSI.MUNI_ARRAY["41205"] = '41,佐賀県,41205,伊万里市,いまりし,129.8808333,33.26472222';
GSI.MUNI_ARRAY["41206"] = '41,佐賀県,41206,武雄市,たけおし,130.0191667,33.19388889';
GSI.MUNI_ARRAY["41207"] = '41,佐賀県,41207,鹿島市,かしまし,130.0986111,33.10416667';
GSI.MUNI_ARRAY["41208"] = '41,佐賀県,41208,小城市,おぎし,130.2016667,33.25055556';
GSI.MUNI_ARRAY["41209"] = '41,佐賀県,41209,嬉野市,うれしのし,130.06,33.12777778';
GSI.MUNI_ARRAY["41210"] = '41,佐賀県,41210,神埼市,かんざきし,130.3730556,33.31083333';
GSI.MUNI_ARRAY["41327"] = '41,佐賀県,41327,吉野ヶ里町,よしのがりちょう,130.3988889,33.32111111';
GSI.MUNI_ARRAY["41341"] = '41,佐賀県,41341,基山町,きやまちょう,130.5230556,33.42694444';
GSI.MUNI_ARRAY["41345"] = '41,佐賀県,41345,上峰町,かみみねちょう,130.4261111,33.31944444';
GSI.MUNI_ARRAY["41346"] = '41,佐賀県,41346,みやき町,みやきちょう,130.4544444,33.325';
GSI.MUNI_ARRAY["41387"] = '41,佐賀県,41387,玄海町,げんかいちょう,129.8747222,33.47222222';
GSI.MUNI_ARRAY["41401"] = '41,佐賀県,41401,有田町,ありたちょう,129.8491667,33.21055556';
GSI.MUNI_ARRAY["41423"] = '41,佐賀県,41423,大町町,おおまちちょう,130.1161111,33.21388889';
GSI.MUNI_ARRAY["41424"] = '41,佐賀県,41424,江北町,こうほくまち,130.1572222,33.22055556';
GSI.MUNI_ARRAY["41425"] = '41,佐賀県,41425,白石町,しろいしちょう,130.1433333,33.18083333';
GSI.MUNI_ARRAY["41441"] = '41,佐賀県,41441,太良町,たらちょう,130.1791667,33.01944444';
GSI.MUNI_ARRAY["42201"] = '42,長崎県,42201,長崎市,ながさきし,129.8777778,32.75027778';
GSI.MUNI_ARRAY["42202"] = '42,長崎県,42202,佐世保市,させぼし,129.7155556,33.18';
GSI.MUNI_ARRAY["42203"] = '42,長崎県,42203,島原市,しまばらし,130.3705556,32.78805556';
GSI.MUNI_ARRAY["42204"] = '42,長崎県,42204,諫早市,いさはやし,130.0536111,32.84416667';
GSI.MUNI_ARRAY["42205"] = '42,長崎県,42205,大村市,おおむらし,129.9583333,32.9';
GSI.MUNI_ARRAY["42207"] = '42,長崎県,42207,平戸市,ひらどし,129.5538889,33.36805556';
GSI.MUNI_ARRAY["42208"] = '42,長崎県,42208,松浦市,まつうらし,129.7091667,33.34111111';
GSI.MUNI_ARRAY["42209"] = '42,長崎県,42209,対馬市,つしまし,129.2875,34.20277778';
GSI.MUNI_ARRAY["42210"] = '42,長崎県,42210,壱岐市,いきし,129.6911111,33.75';
GSI.MUNI_ARRAY["42211"] = '42,長崎県,42211,五島市,ごとうし,128.8408333,32.69555556';
GSI.MUNI_ARRAY["42212"] = '42,長崎県,42212,西海市,さいかいし,129.6430556,32.93305556';
GSI.MUNI_ARRAY["42213"] = '42,長崎県,42213,雲仙市,うんぜんし,130.1875,32.835';
GSI.MUNI_ARRAY["42214"] = '42,長崎県,42214,南島原市,みなみしまばらし,130.2977778,32.65972222';
GSI.MUNI_ARRAY["42307"] = '42,長崎県,42307,長与町,ながよちょう,129.875,32.82527778';
GSI.MUNI_ARRAY["42308"] = '42,長崎県,42308,時津町,とぎつちょう,129.8486111,32.82888889';
GSI.MUNI_ARRAY["42321"] = '42,長崎県,42321,東彼杵町,ひがしそのぎちょう,129.9172222,33.03694444';
GSI.MUNI_ARRAY["42322"] = '42,長崎県,42322,川棚町,かわたなちょう,129.8613889,33.07277778';
GSI.MUNI_ARRAY["42323"] = '42,長崎県,42323,波佐見町,はさみちょう,129.8955556,33.13805556';
GSI.MUNI_ARRAY["42383"] = '42,長崎県,42383,小値賀町,おぢかちょう,129.0591667,33.19111111';
GSI.MUNI_ARRAY["42391"] = '42,長崎県,42391,佐々町,さざちょう,129.6505556,33.23833333';
GSI.MUNI_ARRAY["42411"] = '42,長崎県,42411,新上五島町,しんかみごとうちょう,129.0733333,32.98444444';
GSI.MUNI_ARRAY["43100"] = '43,熊本県,43100,熊本市,くまもとし,130.7080556,32.80333333';
GSI.MUNI_ARRAY["43101"] = '43,熊本県,43101,熊本市　中央区,くまもとし　ちゅうおうく,130.708129,32.80328437';
GSI.MUNI_ARRAY["43102"] = '43,熊本県,43102,熊本市　東区,くまもとし　ひがしく,130.7672631,32.78026533';
GSI.MUNI_ARRAY["43103"] = '43,熊本県,43103,熊本市　西区,くまもとし　にしく,130.6475529,32.77648925';
GSI.MUNI_ARRAY["43104"] = '43,熊本県,43104,熊本市　南区,くまもとし　みなみく,130.6789092,32.71526057';
GSI.MUNI_ARRAY["43105"] = '43,熊本県,43105,熊本市　北区,くまもとし　きたく,130.694254,32.9036181';
GSI.MUNI_ARRAY["43202"] = '43,熊本県,43202,八代市,やつしろし,130.6019444,32.5075';
GSI.MUNI_ARRAY["43203"] = '43,熊本県,43203,人吉市,ひとよしし,130.7625,32.21';
GSI.MUNI_ARRAY["43204"] = '43,熊本県,43204,荒尾市,あらおし,130.4333333,32.98666667';
GSI.MUNI_ARRAY["43205"] = '43,熊本県,43205,水俣市,みなまたし,130.4088889,32.21194444';
GSI.MUNI_ARRAY["43206"] = '43,熊本県,43206,玉名市,たまなし,130.5597222,32.92805556';
GSI.MUNI_ARRAY["43208"] = '43,熊本県,43208,山鹿市,やまがし,130.6913889,33.01666667';
GSI.MUNI_ARRAY["43210"] = '43,熊本県,43210,菊池市,きくちし,130.8130556,32.97972222';
GSI.MUNI_ARRAY["43211"] = '43,熊本県,43211,宇土市,うとし,130.6586359,32.68722715';
GSI.MUNI_ARRAY["43212"] = '43,熊本県,43212,上天草市,かみあまくさし,130.4305556,32.5875';
GSI.MUNI_ARRAY["43213"] = '43,熊本県,43213,宇城市,うきし,130.6841667,32.64777778';
GSI.MUNI_ARRAY["43214"] = '43,熊本県,43214,阿蘇市,あそし,131.1213889,32.95222222';
GSI.MUNI_ARRAY["43215"] = '43,熊本県,43215,天草市,あまくさし,130.1930556,32.45861111';
GSI.MUNI_ARRAY["43216"] = '43,熊本県,43216,合志市,こうしし,130.7897222,32.88583333';
GSI.MUNI_ARRAY["43348"] = '43,熊本県,43348,美里町,みさとまち,130.7888889,32.63972222';
GSI.MUNI_ARRAY["43364"] = '43,熊本県,43364,玉東町,ぎょくとうまち,130.6286111,32.91888889';
GSI.MUNI_ARRAY["43367"] = '43,熊本県,43367,南関町,なんかんまち,130.5413889,33.06166667';
GSI.MUNI_ARRAY["43368"] = '43,熊本県,43368,長洲町,ながすまち,130.4527778,32.92972222';
GSI.MUNI_ARRAY["43369"] = '43,熊本県,43369,和水町,なごみまち,130.6058333,32.97805556';
GSI.MUNI_ARRAY["43403"] = '43,熊本県,43403,大津町,おおづまち,130.8683333,32.87888889';
GSI.MUNI_ARRAY["43404"] = '43,熊本県,43404,菊陽町,きくようまち,130.8286111,32.8625';
GSI.MUNI_ARRAY["43423"] = '43,熊本県,43423,南小国町,みなみおぐにまち,131.0708333,33.09833333';
GSI.MUNI_ARRAY["43424"] = '43,熊本県,43424,小国町,おぐにまち,131.0683333,33.12138889';
GSI.MUNI_ARRAY["43425"] = '43,熊本県,43425,産山村,うぶやまむら,131.2169444,32.99555556';
GSI.MUNI_ARRAY["43428"] = '43,熊本県,43428,高森町,たかもりまち,131.1219444,32.82722222';
GSI.MUNI_ARRAY["43432"] = '43,熊本県,43432,西原村,にしはらむら,130.9030556,32.83472222';
GSI.MUNI_ARRAY["43433"] = '43,熊本県,43433,南阿蘇村,みなみあそむら,131.0313889,32.8225';
GSI.MUNI_ARRAY["43441"] = '43,熊本県,43441,御船町,みふねまち,130.8019444,32.71444444';
GSI.MUNI_ARRAY["43442"] = '43,熊本県,43442,嘉島町,かしままち,130.7572222,32.74';
GSI.MUNI_ARRAY["43443"] = '43,熊本県,43443,益城町,ましきまち,130.8163889,32.79138889';
GSI.MUNI_ARRAY["43444"] = '43,熊本県,43444,甲佐町,こうさまち,130.8116667,32.65138889';
GSI.MUNI_ARRAY["43447"] = '43,熊本県,43447,山都町,やまとちょう,130.99,32.685';
GSI.MUNI_ARRAY["43468"] = '43,熊本県,43468,氷川町,ひかわちょう,130.6736111,32.5825';
GSI.MUNI_ARRAY["43482"] = '43,熊本県,43482,芦北町,あしきたまち,130.4930556,32.29888889';
GSI.MUNI_ARRAY["43484"] = '43,熊本県,43484,津奈木町,つなぎまち,130.4402778,32.23388889';
GSI.MUNI_ARRAY["43501"] = '43,熊本県,43501,錦町,にしきまち,130.8411111,32.20111111';
GSI.MUNI_ARRAY["43505"] = '43,熊本県,43505,多良木町,たらぎまち,130.9358333,32.26416667';
GSI.MUNI_ARRAY["43506"] = '43,熊本県,43506,湯前町,ゆのまえまち,130.9811111,32.27611111';
GSI.MUNI_ARRAY["43507"] = '43,熊本県,43507,水上村,みずかみむら,131.0094444,32.31444444';
GSI.MUNI_ARRAY["43510"] = '43,熊本県,43510,相良村,さがらむら,130.7980556,32.23527778';
GSI.MUNI_ARRAY["43511"] = '43,熊本県,43511,五木村,いつきむら,130.8277778,32.39694444';
GSI.MUNI_ARRAY["43512"] = '43,熊本県,43512,山江村,やまえむら,130.7672222,32.24638889';
GSI.MUNI_ARRAY["43513"] = '43,熊本県,43513,球磨村,くまむら,130.6513889,32.25277778';
GSI.MUNI_ARRAY["43514"] = '43,熊本県,43514,あさぎり町,あさぎりちょう,130.8980556,32.24027778';
GSI.MUNI_ARRAY["43531"] = '43,熊本県,43531,苓北町,れいほくまち,130.0547222,32.51305556';
GSI.MUNI_ARRAY["44201"] = '44,大分県,44201,大分市,おおいたし,131.6097222,33.23944444';
GSI.MUNI_ARRAY["44202"] = '44,大分県,44202,別府市,べっぷし,131.4911111,33.28472222';
GSI.MUNI_ARRAY["44203"] = '44,大分県,44203,中津市,なかつし,131.1883333,33.59833333';
GSI.MUNI_ARRAY["44204"] = '44,大分県,44204,日田市,ひたし,130.9413889,33.32111111';
GSI.MUNI_ARRAY["44205"] = '44,大分県,44205,佐伯市,さいきし,131.8994444,32.96027778';
GSI.MUNI_ARRAY["44206"] = '44,大分県,44206,臼杵市,うすきし,131.8047222,33.12583333';
GSI.MUNI_ARRAY["44207"] = '44,大分県,44207,津久見市,つくみし,131.8611111,33.0725';
GSI.MUNI_ARRAY["44208"] = '44,大分県,44208,竹田市,たけたし,131.3983333,32.97305556';
GSI.MUNI_ARRAY["44209"] = '44,大分県,44209,豊後高田市,ぶんごたかだし,131.4447222,33.55722222';
GSI.MUNI_ARRAY["44210"] = '44,大分県,44210,杵築市,きつきし,131.6161111,33.41694444';
GSI.MUNI_ARRAY["44211"] = '44,大分県,44211,宇佐市,うさし,131.3494444,33.53194444';
GSI.MUNI_ARRAY["44212"] = '44,大分県,44212,豊後大野市,ぶんごおおのし,131.585,32.97805556';
GSI.MUNI_ARRAY["44213"] = '44,大分県,44213,由布市,ゆふし,131.4266667,33.18';
GSI.MUNI_ARRAY["44214"] = '44,大分県,44214,国東市,くにさきし,131.7316667,33.56527778';
GSI.MUNI_ARRAY["44322"] = '44,大分県,44322,姫島村,ひめしまむら,131.6452778,33.72444444';
GSI.MUNI_ARRAY["44341"] = '44,大分県,44341,日出町,ひじまち,131.5325,33.36944444';
GSI.MUNI_ARRAY["44461"] = '44,大分県,44461,九重町,ここのえまち,131.1888889,33.22833333';
GSI.MUNI_ARRAY["44462"] = '44,大分県,44462,玖珠町,くすまち,131.1513889,33.28333333';
GSI.MUNI_ARRAY["45201"] = '45,宮崎県,45201,宮崎市,みやざきし,131.4202778,31.90777778';
GSI.MUNI_ARRAY["45202"] = '45,宮崎県,45202,都城市,みやこのじょうし,131.0616667,31.71972222';
GSI.MUNI_ARRAY["45203"] = '45,宮崎県,45203,延岡市,のべおかし,131.665,32.58222222';
GSI.MUNI_ARRAY["45204"] = '45,宮崎県,45204,日南市,にちなんし,131.3788889,31.60194444';
GSI.MUNI_ARRAY["45205"] = '45,宮崎県,45205,小林市,こばやしし,130.9727778,31.99666667';
GSI.MUNI_ARRAY["45206"] = '45,宮崎県,45206,日向市,ひゅうがし,131.6238889,32.42277778';
GSI.MUNI_ARRAY["45207"] = '45,宮崎県,45207,串間市,くしまし,131.2286111,31.46472222';
GSI.MUNI_ARRAY["45208"] = '45,宮崎県,45208,西都市,さいとし,131.4013889,32.10861111';
GSI.MUNI_ARRAY["45209"] = '45,宮崎県,45209,えびの市,えびのし,130.8111111,32.04555556';
GSI.MUNI_ARRAY["45341"] = '45,宮崎県,45341,三股町,みまたちょう,131.125,31.73083333';
GSI.MUNI_ARRAY["45361"] = '45,宮崎県,45361,高原町,たかはるちょう,131.0077778,31.92833333';
GSI.MUNI_ARRAY["45382"] = '45,宮崎県,45382,国富町,くにとみちょう,131.3236111,31.99055556';
GSI.MUNI_ARRAY["45383"] = '45,宮崎県,45383,綾町,あやちょう,131.2530556,31.99916667';
GSI.MUNI_ARRAY["45401"] = '45,宮崎県,45401,高鍋町,たかなべちょう,131.5033333,32.12833333';
GSI.MUNI_ARRAY["45402"] = '45,宮崎県,45402,新富町,しんとみちょう,131.4877778,32.06888889';
GSI.MUNI_ARRAY["45403"] = '45,宮崎県,45403,西米良村,にしめらそん,131.1544444,32.22638889';
GSI.MUNI_ARRAY["45404"] = '45,宮崎県,45404,木城町,きじょうちょう,131.4733333,32.16388889';
GSI.MUNI_ARRAY["45405"] = '45,宮崎県,45405,川南町,かわみなみちょう,131.5258333,32.19194444';
GSI.MUNI_ARRAY["45406"] = '45,宮崎県,45406,都農町,つのちょう,131.5597222,32.25666667';
GSI.MUNI_ARRAY["45421"] = '45,宮崎県,45421,門川町,かどがわちょう,131.6488889,32.46972222';
GSI.MUNI_ARRAY["45429"] = '45,宮崎県,45429,諸塚村,もろつかそん,131.3302778,32.51222222';
GSI.MUNI_ARRAY["45430"] = '45,宮崎県,45430,椎葉村,しいばそん,131.1575,32.46666667';
GSI.MUNI_ARRAY["45431"] = '45,宮崎県,45431,美郷町,みさとちょう,131.4233333,32.44027778';
GSI.MUNI_ARRAY["45441"] = '45,宮崎県,45441,高千穂町,たかちほちょう,131.3077778,32.71166667';
GSI.MUNI_ARRAY["45442"] = '45,宮崎県,45442,日之影町,ひのかげちょう,131.3880556,32.65388889';
GSI.MUNI_ARRAY["45443"] = '45,宮崎県,45443,五ヶ瀬町,ごかせちょう,131.1961111,32.68305556';
GSI.MUNI_ARRAY["46201"] = '46,鹿児島県,46201,鹿児島市,かごしまし,130.5572222,31.59694444';
GSI.MUNI_ARRAY["46203"] = '46,鹿児島県,46203,鹿屋市,かのやし,130.8522222,31.37833333';
GSI.MUNI_ARRAY["46204"] = '46,鹿児島県,46204,枕崎市,まくらざきし,130.2969444,31.27277778';
GSI.MUNI_ARRAY["46206"] = '46,鹿児島県,46206,阿久根市,あくねし,130.1927778,32.01444444';
GSI.MUNI_ARRAY["46208"] = '46,鹿児島県,46208,出水市,いずみし,130.3527778,32.09055556';
GSI.MUNI_ARRAY["46210"] = '46,鹿児島県,46210,指宿市,いぶすきし,130.6330556,31.25277778';
GSI.MUNI_ARRAY["46213"] = '46,鹿児島県,46213,西之表市,にしのおもてし,130.9975,30.7325';
GSI.MUNI_ARRAY["46214"] = '46,鹿児島県,46214,垂水市,たるみずし,130.7011111,31.49277778';
GSI.MUNI_ARRAY["46215"] = '46,鹿児島県,46215,薩摩川内市,さつませんだいし,130.3041667,31.81333333';
GSI.MUNI_ARRAY["46216"] = '46,鹿児島県,46216,日置市,ひおきし,130.4022222,31.63361111';
GSI.MUNI_ARRAY["46217"] = '46,鹿児島県,46217,曽於市,そおし,131.0191667,31.65361111';
GSI.MUNI_ARRAY["46218"] = '46,鹿児島県,46218,霧島市,きりしまし,130.7630556,31.74111111';
GSI.MUNI_ARRAY["46219"] = '46,鹿児島県,46219,いちき串木野市,いちきくしきのし,130.2719444,31.71472222';
GSI.MUNI_ARRAY["46220"] = '46,鹿児島県,46220,南さつま市,みなみさつまし,130.3233333,31.41666667';
GSI.MUNI_ARRAY["46221"] = '46,鹿児島県,46221,志布志市,しぶしし,131.0455556,31.49527778';
GSI.MUNI_ARRAY["46222"] = '46,鹿児島県,46222,奄美市,あまみし,129.4938889,28.37722222';
GSI.MUNI_ARRAY["46223"] = '46,鹿児島県,46223,南九州市,みなみきゅうしゅうし,130.4416667,31.37833333';
GSI.MUNI_ARRAY["46224"] = '46,鹿児島県,46224,伊佐市,いさし,130.6130556,32.05722222';
GSI.MUNI_ARRAY["46225"] = '46,鹿児島県,46225,姶良市,あいらし,130.6277778,31.72833333';
GSI.MUNI_ARRAY["46303"] = '46,鹿児島県,46303,三島村,みしまむら,130.5608333,31.59444444';
GSI.MUNI_ARRAY["46304"] = '46,鹿児島県,46304,十島村,としまむら,130.5605556,31.59305556';
GSI.MUNI_ARRAY["46392"] = '46,鹿児島県,46392,さつま町,さつまちょう,130.4552778,31.90638889';
GSI.MUNI_ARRAY["46404"] = '46,鹿児島県,46404,長島町,ながしまちょう,130.1769444,32.19916667';
GSI.MUNI_ARRAY["46452"] = '46,鹿児島県,46452,湧水町,ゆうすいちょう,130.7211111,31.95166667';
GSI.MUNI_ARRAY["46468"] = '46,鹿児島県,46468,大崎町,おおさきちょう,131.0058333,31.42916667';
GSI.MUNI_ARRAY["46482"] = '46,鹿児島県,46482,東串良町,ひがしくしらちょう,130.9733333,31.38583333';
GSI.MUNI_ARRAY["46490"] = '46,鹿児島県,46490,錦江町,きんこうちょう,130.7877778,31.24361111';
GSI.MUNI_ARRAY["46491"] = '46,鹿児島県,46491,南大隅町,みなみおおすみちょう,130.7683333,31.21722222';
GSI.MUNI_ARRAY["46492"] = '46,鹿児島県,46492,肝付町,きもつきちょう,130.9452778,31.34472222';
GSI.MUNI_ARRAY["46501"] = '46,鹿児島県,46501,中種子町,なかたねちょう,130.9586111,30.53305556';
GSI.MUNI_ARRAY["46502"] = '46,鹿児島県,46502,南種子町,みなみたねちょう,130.9008333,30.41361111';
GSI.MUNI_ARRAY["46505"] = '46,鹿児島県,46505,屋久島町,やくしまちょう,130.665,30.37111111';
GSI.MUNI_ARRAY["46523"] = '46,鹿児島県,46523,大和村,やまとそん,129.3952778,28.35805556';
GSI.MUNI_ARRAY["46524"] = '46,鹿児島県,46524,宇検村,うけんそん,129.2975,28.28083333';
GSI.MUNI_ARRAY["46525"] = '46,鹿児島県,46525,瀬戸内町,せとうちちょう,129.3147222,28.14638889';
GSI.MUNI_ARRAY["46527"] = '46,鹿児島県,46527,龍郷町,たつごうちょう,129.5894444,28.41305556';
GSI.MUNI_ARRAY["46529"] = '46,鹿児島県,46529,喜界町,きかいちょう,129.94,28.31694444';
GSI.MUNI_ARRAY["46530"] = '46,鹿児島県,46530,徳之島町,とくのしまちょう,129.0186111,27.72666667';
GSI.MUNI_ARRAY["46531"] = '46,鹿児島県,46531,天城町,あまぎちょう,128.8977778,27.80916667';
GSI.MUNI_ARRAY["46532"] = '46,鹿児島県,46532,伊仙町,いせんちょう,128.9375,27.67361111';
GSI.MUNI_ARRAY["46533"] = '46,鹿児島県,46533,和泊町,わどまりちょう,128.6552778,27.39222222';
GSI.MUNI_ARRAY["46534"] = '46,鹿児島県,46534,知名町,ちなちょう,128.5736111,27.33361111';
GSI.MUNI_ARRAY["46535"] = '46,鹿児島県,46535,与論町,よろんちょう,128.4147222,27.04861111';
GSI.MUNI_ARRAY["47201"] = '47,沖縄県,47201,那覇市,なはし,127.688855,26.22880945';
GSI.MUNI_ARRAY["47205"] = '47,沖縄県,47205,宜野湾市,ぎのわんし,127.7783333,26.28166667';
GSI.MUNI_ARRAY["47207"] = '47,沖縄県,47207,石垣市,いしがきし,124.1555556,24.34055556';
GSI.MUNI_ARRAY["47208"] = '47,沖縄県,47208,浦添市,うらそえし,127.7219444,26.24583333';
GSI.MUNI_ARRAY["47209"] = '47,沖縄県,47209,名護市,なごし,127.9775,26.59166667';
GSI.MUNI_ARRAY["47210"] = '47,沖縄県,47210,糸満市,いとまんし,127.6658333,26.12361111';
GSI.MUNI_ARRAY["47211"] = '47,沖縄県,47211,沖縄市,おきなわし,127.8055556,26.33416667';
GSI.MUNI_ARRAY["47212"] = '47,沖縄県,47212,豊見城市,とみぐすくし,127.6688889,26.16111111';
GSI.MUNI_ARRAY["47213"] = '47,沖縄県,47213,うるま市,うるまし,127.8575,26.37916667';
GSI.MUNI_ARRAY["47214"] = '47,沖縄県,47214,宮古島市,みやこじまし,125.2811111,24.80555556';
GSI.MUNI_ARRAY["47215"] = '47,沖縄県,47215,南城市,なんじょうし,127.7669444,26.14444444';
GSI.MUNI_ARRAY["47301"] = '47,沖縄県,47301,国頭村,くにがみそん,128.1780556,26.74583333';
GSI.MUNI_ARRAY["47302"] = '47,沖縄県,47302,大宜味村,おおぎみそん,128.1202778,26.70166667';
GSI.MUNI_ARRAY["47303"] = '47,沖縄県,47303,東村,ひがしそん,128.1569444,26.63333333';
GSI.MUNI_ARRAY["47306"] = '47,沖縄県,47306,今帰仁村,なきじんそん,127.9727778,26.6825';
GSI.MUNI_ARRAY["47308"] = '47,沖縄県,47308,本部町,もとぶちょう,127.8980556,26.65805556';
GSI.MUNI_ARRAY["47311"] = '47,沖縄県,47311,恩納村,おんなそん,127.8536111,26.4975';
GSI.MUNI_ARRAY["47313"] = '47,沖縄県,47313,宜野座村,ぎのざそん,127.9755556,26.48166667';
GSI.MUNI_ARRAY["47314"] = '47,沖縄県,47314,金武町,きんちょう,127.9261111,26.45611111';
GSI.MUNI_ARRAY["47315"] = '47,沖縄県,47315,伊江村,いえそん,127.8072222,26.71333333';
GSI.MUNI_ARRAY["47324"] = '47,沖縄県,47324,読谷村,よみたんそん,127.7444444,26.39611111';
GSI.MUNI_ARRAY["47325"] = '47,沖縄県,47325,嘉手納町,かでなちょう,127.7552778,26.36166667';
GSI.MUNI_ARRAY["47326"] = '47,沖縄県,47326,北谷町,ちゃたんちょう,127.7638889,26.32';
GSI.MUNI_ARRAY["47327"] = '47,沖縄県,47327,北中城村,きたなかぐすくそん,127.7930556,26.30111111';
GSI.MUNI_ARRAY["47328"] = '47,沖縄県,47328,中城村,なかぐすくそん,127.7911111,26.26722222';
GSI.MUNI_ARRAY["47329"] = '47,沖縄県,47329,西原町,にしはらちょう,127.7655556,26.22611111';
GSI.MUNI_ARRAY["47348"] = '47,沖縄県,47348,与那原町,よなばるちょう,127.7547222,26.19944444';
GSI.MUNI_ARRAY["47350"] = '47,沖縄県,47350,南風原町,はえばるちょう,127.7286111,26.19111111';
GSI.MUNI_ARRAY["47353"] = '47,沖縄県,47353,渡嘉敷村,とかしきそん,127.3644444,26.1975';
GSI.MUNI_ARRAY["47354"] = '47,沖縄県,47354,座間味村,ざまみそん,127.3033333,26.22888889';
GSI.MUNI_ARRAY["47355"] = '47,沖縄県,47355,粟国村,あぐにそん,127.2272222,26.5825';
GSI.MUNI_ARRAY["47356"] = '47,沖縄県,47356,渡名喜村,となきそん,127.1411111,26.37222222';
GSI.MUNI_ARRAY["47357"] = '47,沖縄県,47357,南大東村,みなみだいとうそん,131.2319444,25.82888889';
GSI.MUNI_ARRAY["47358"] = '47,沖縄県,47358,北大東村,きただいとうそん,131.2988889,25.94583333';
GSI.MUNI_ARRAY["47359"] = '47,沖縄県,47359,伊平屋村,いへやそん,127.9686111,27.03916667';
GSI.MUNI_ARRAY["47360"] = '47,沖縄県,47360,伊是名村,いぜなそん,127.9411111,26.92833333';
GSI.MUNI_ARRAY["47361"] = '47,沖縄県,47361,久米島町,くめじまちょう,126.805,26.34083333';
GSI.MUNI_ARRAY["47362"] = '47,沖縄県,47362,八重瀬町,やえせちょう,127.7425,26.12166667';
GSI.MUNI_ARRAY["47375"] = '47,沖縄県,47375,多良間村,たらまそん,124.7016667,24.66944444';
GSI.MUNI_ARRAY["47381"] = '47,沖縄県,47381,竹富町,たけとみちょう,124.1544444,24.33972222';
GSI.MUNI_ARRAY["47382"] = '47,沖縄県,47382,与那国町,よなぐにちょう,123.0047222,24.46805556';