// ==UserScript==
// @name          Luogu UI
// @description	  美化洛谷，使洛谷界面 Argon Design 化
// @author        Cui2010
// @run-at        document-start
// @version       4.0
// @match https://*.luogu.com.cn/*
// @match https://*.luogu.org/*
// @match https://luogulo.gq/*
// ==/UserScript==
(function() {var css = "";
if (false || (new RegExp("^((?!blog).)*https://www.luogu.org((?!blog).)*$")).test(document.location.href) || (new RegExp("^((?!blog).)*http://www.luogu.org((?!blog).)*$")).test(document.location.href) || (new RegExp("^((?!blog).)*https://www2.luogu.org((?!blog).)*$")).test(document.location.href) || (new RegExp("^((?!blog).)*http://www2.luogu.org((?!blog).)*$")).test(document.location.href) || (new RegExp("^((?!blog).)*https://www.luogu.com.cn((?!blog).)*$")).test(document.location.href) || (new RegExp("^((?!blog).)*http://www.luogu.com.cn((?!blog).)*$")).test(document.location.href))
	css += [
		".am-panel-bd {"
		"    background-color: rgba(0, 0, 0, .015) !important;"
		"}"
		".am-panel {"
		"    border: none !important;"
		"}"
		".lfe-vars {"
		"    --lfe-color--primary: rgb(52, 152, 219) !important;"
		"    --lfe-color-other: rgb(98, 47, 175) !important;"
		"}"
		".am-pagination>li>a, .am-pagination>li>span {"
		"    border-radius: 15px !important;"
		"}"
		".color-default[data-v-303bbf52], .color-default-noline[data-v-303bbf52] {"
		"    color: var(--lfe-color--primary) !important;"
		"}"
		".popup[data-v-1d675dd8] {"
		"    background-color: #ffffff !important;"
		"}"
		"div[data-v-27b2cd59], nav[data-v-27b2cd59] {"
		"    background-color: transparent !important;"
		"}"
		".hljs {"
		"    font-family: Consolas !important;"
		"}"
		"pre[data-v-52f2d52f] {"
		"    font-family: Consolas !important;"
		"}"
		".card[data-v-796309f8] {"
		"    border-radius: 5px !important;"
		"}"
		"button[data-v-370e72e2] {"
		"    background-color: #fff !important;"
		"}"
		".container[data-v-46cb0950], .header-link[data-v-46cb0950] {"
		"    color: #eeeeee !important;"
		"}"
		".main-container > .header-layout.tiny[data-v-90bffe18] {"
		"    color: #eeeeee !important;"
		"    background: transparent !important;"
		"}"
		"#search-user-form {"
		"    display:none !important;"
		"}"
		".am-badge, .tag[data-v-5d98bc80] {"
		"    border-radius: 20px !important;"
		"    font-size: 0.2rem !important;"
		"    padding: 5px !important;"
		"    padding-right: 10px !important;"
		"    padding-left: 10px !important;"
		"    margin: 2px !important;"
		"}"
		".main-container > main.lfe-body {"
		"    position: relative !important;"
		"}"
		".main-container > .header-layout > .header > h1 {"
		"    font-size: 50px;"
		"    margin-top: 25px;"
		"    padding-bottom: 8px;"
		"    animation: fadeInLeft .5s ease;"
		"    max-width: calc(100vw - 150px);"
		"}"
		".main-container > .header-layout {"
		"    display: block !important;"
		"    height: 1000px !important;"
		"    position: relative !important;"
		"    left: 0 !important;"
		"    right: 0 !important;"
		"    border: none !important;"
		"    color: #fff !important;"
		"    font-weight: unset !important;"
		"}"
		"li.selected[data-v-8feadc5c] {"
		"    background-color: var(--lfe-color--primary) !important;"
		"    color: white !important;"
		"}"
		".background {"
		"    display: none !important;"
		"}"
		".header-layout > .background {"
		"    display: block !important;"
		"    position: fixed !important;"
		"}"
		".main-container > main.lfe-body {"
		"    background-color: transparent !important;"
		"    margin-top: -800px !important;"
		"}"
		".text[data-v-cd9b963e] {"
		"    color: rgba(0, 0, 0, 0) !important;"
		"    transition-duration: 0.3s !important;"
		"}"
		".text[data-v-cd9b963e]:hover {"
		"    color: #dddddd !important;"
		"}"
		"button[data-v-370e72e2] {"
		"    color: rgb(158, 97, 225) !important;"
		"    border-color: rgb(158, 97, 225) !important;"
		"}"
		"span[data-v-20b7d558] {"
		"    border-radius: 20px !important;"
		"    padding: 2px !important;"
		"    font-size: 0.2rem !important;"
		"    padding-right: 10px !important;"
		"    padding-left: 10px !important;"
		"    margin: 2px !important;"
		"}"
		".text[data-v-087e057c] {"
		"    color: black !important;"
		"}"
		"li.selected>a {"
		"    background-color: var(--lfe-color--primary) !important;"
		"    color: white !important;"
		"}"
		".am-pagination>.am-active>a, .am-pagination>.am-active>a:focus, .am-pagination>".am-active>a:hover, .am-pagination>, .am-active>span, .am-pagination>.am-active>span:focus, .am-pagination>.am-active>span:hover {""
		"    background-color: rgb(98, 47, 175) !important;
		"    color: white !important;
		"    border: none !important;
		"}
		"ul>li.selected>span[data-v-73965038] {
		"    background-color: var(--lfe-color--primary) !important;
		"    color: white !important;
		"    padding: 5px !important;
		"    border-radius: 5px !important;
		"}
		"li.am-active {
		"    background-color: var(--lfe-color--primary) !important;
		"    color: white !important;
		"}
		".am-pagination-centered > li.am-active {
		"    background-color: transparent !important;
		"}
		".footer a[data-v-381c541a], .link[data-v-019a82aa], .text[data-v-019a82aa] {
		"    color:rgba(255, 255, 255, .75) !important;
		"}
		"h1 {
		"    font-weight: normal !important;
		"}
		"h2 {
		"    font-weight: normal !important;
		"}
		"h3 {
		"    font-weight: normal !important;
		"}
		"h4 {
		"    font-weight: normal !important;
		"}
		"h5 {
		"    font-weight: normal !important;
		"}
		"h6 {
		"    font-weight: normal !important;
		"}
		"/*.am-comment-bd{ border-radius: 5px !important; }*/
		" .header-logo[data-v-5d3ff779] {
		"    display: none;
		"}
		"#exlg-dash {
		"    background-color: rgb(98, 47, 175) !important;
		"    box-shadow: 0 0 7px rgb(118, 67, 195) !important;
		"}
		".am-btn-primary {
		"    background-color: rgb(98, 47, 175) !important;
		"    border: none !important;
		"}
		".am-btn-danger {
		"    background-color: rgb(61, 15, 235) !important;
		"    border: none !important;
		"}
		".am-btn-success {
		"    background-color: #128888 !important;
		"    border-color: #128888 !important;
		"    border: none !important;
		"}
		"button[data-v-72107c51] {
		"    color: white !important;
		"    background-color: rgb(98, 47, 175) !important;
		"    transition: .3s ease-out;
		"}
		"button[data-v-72107c51]:hover {
		"    color: white !important;
		"    background-color: rgb(118, 67, 195) !important;
		"}
		"textarea .am-input-group-primary .am-input-group-btn>.am-btn, .am-input-group-primary .am-input-group-label, .am-input-group-primary.am-input-group .am-form-field .am-form-group {"
		"    border-color: rgb(98, 47, 175) !important;
		"    border-radius: 5px !important;
		"    box-shadow: 5px 5px 5px #cccccc;
		"}
		"input:checked+label>.fa-input[data-v-b9708d54], input:enabled+label:hover>.fa-input[data-v-b9708d54] {"
		"    color: rgb(98, 47, 175) !important;"
		"}"
		".header-layout.tiny[data-v-90bffe18] {"
		"    height: 4em !important;"
		"}"
		".header-layout.tiny ~ main.lfe-body {"
		"    margin-top: 0px !important;"
		"    background-color: transparent !important;"
		"}"
		".lfe-vars {"
		"    --lfe-color--blue-1: #e0f7ff;"
		"    --lfe-color--blue-2: #89d1f5;"
		"    --lfe-color--blue-3: #3498db;"
		"    --lfe-color--blue-4: #14558f;"
		"    --lfe-color--blue-5: #052242;"
		"    --lfe-color--green-1: #d9f0c7;"
		"    --lfe-color--green-2: #94d66d;"
		"    --lfe-color--green-3: #52c41a;"
		"    --lfe-color--green-4: #22700a;"
		"    --lfe-color--green-5: #072401;"
		"    --lfe-color--purple-1: #fbedff;"
		"    --lfe-color--purple-2: #ce8ee8;"
		"    --lfe-color--purple-3: #9d3dcf;"
		"    --lfe-color--purple-4: #561982;"
		"    --lfe-color--purple-5: #1f0736;"
		"    --lfe-color--orange-1: #ffedb5;"
		"    --lfe-color--orange-2: #ffce63;"
		"    --lfe-color--orange-3: #f39c11;"
		"    --lfe-color--orange-4: #a65b00;"
		"    --lfe-color--orange-5: #592b00;"
		"    --lfe-color--pink-1: #fff0f0;"
		"    --lfe-color--pink-2: #ff9ea3;"
		"    --lfe-color--pink-3: #fe4c61;"
		"    --lfe-color--pink-4: #b3243e;"
		"    --lfe-color--pink-5: #660e24;"
		"    --lfe-color--lapis-1: #cad5e8;"
		"    --lfe-color--lapis-2: #728dcf;"
		"    --lfe-color--lapis-3: #2949b4;"
		"    --lfe-color--lapis-4: #0e1d69;"
		"    --lfe-color--lapis-5: #02051c;"
		"    --lfe-color--gold-1: #fff6ba;"
		"    --lfe-color--gold-2: #ffe169;"
		"    --lfe-color--gold-3: #ffc116;"
		"    --lfe-color--gold-4: #b37700;"
		"    --lfe-color--gold-5: #663d00;"
		"    --lfe-color--cyan-1: #b5f5ec;"
		"    --lfe-color--cyan-2: #5cdbd3;"
		"    --lfe-color--cyan-3: #13c2c2;"
		"    --lfe-color--cyan-4: #006d75;"
		"    --lfe-color--cyan-5: #002329;"
		"    --lfe-color--yellow-1: #ffffb8;"
		"    --lfe-color--yellow-2: #fffb8f;"
		"    --lfe-color--yellow-3: #fadb14;"
		"    --lfe-color--yellow-4: #ad8b00;"
		"    --lfe-color--yellow-5: #614700;"
		"    --lfe-color--red-1: #ffebe6;"
		"    --lfe-color--red-2: #ffa694;"
		"    --lfe-color--red-3: #e74c3c;"
		"    --lfe-color--red-4: #9c1d19;"
		"    --lfe-color--red-5: #4f080a;"
		"    --lfe-color--grey-1: #fafafa;"
		"    --lfe-color--grey-2: #e8e8e8;"
		"    --lfe-color--grey-3: #bfbfbf;"
		"    --lfe-color--grey-4: #595959;"
		"    --lfe-color--grey-5: #262626;"
		"    --lfe-color--lgreen-1: #dae0d3;"
		"    --lfe-color--lgreen-2: #aac791;"
		"    --lfe-color--lgreen-3: #70ad47;"
		"    --lfe-color--lgreen-4: #34611e;"
		"    --lfe-color--lgreen-5: #091405;"
		"    --lfe-color--primary: rgb(98 47 175) !important;"
		"    --lfe-color--link: rgb(98 47 175) !important;"
		"    --lfe-color--success: #52c41a;"
		"    --lfe-color--warning: #ffc116;"
		"    --lfe-color--error: #e74c3c;"
		"    --lfe-color--clicked: #2949b4;"
		"    --lfe-color--background: #e8e8e8;"
		"    --lfe-color--level-0: rgb(145 145 145) !important;"
		"    --lfe-color--level-1: #34ff !important;"
		"    --lfe-color--level-2: #52c466 !important;"
		"    --lfe-color--level-3: #e38c01 !important;"
		"    --lfe-color--level-4: rgb(155 0 50) !important;"
		"    --lfe-color--level-5: rgb(98 47 175) !important;"
		"    --lfe-color--level--1: #876d00 !important;"
		"    --lfe-color--user-color-Cheater: #876d00 !important;"
		"    --lfe-color--user-color-Gray: rgb(145 145 145) !important;"
		"    --lfe-color--user-color-Blue: #34ff !important;"
		"    --lfe-color--user-color-Green: #52c466 !important;"
		"    --lfe-color--user-color-Orange: #e38c01 !important;"
		"    --lfe-color--user-color-Red: rgb(155 0 50) !important;"
		"    --lfe-color--user-color-Purple: rgb(98 47 175) !important;"
		"    --lfe-color--vip: #c0a97d !important;"
		"}"
		".items>li>.entry.selected[data-v-7092f3a4] {"
		"    --main-color: rgb(98, 47, 175) !important;"
		"}"
		".lg-fg-gray {"
		"    color: rgb(145, 145, 145) !important;"
		"}"
		".lg-fg-green {"
		"    color: #32a446 !important;"
		"}"
		".lg-fg-bluelight {"
		"    color: #34ff !important;"
		"}"
		".lg-fg-orange {"
		"    color: #e38c01 !important;"
		"}"
		".lg-fg-red {"
		"    color: rgb(205, 50, 100) !important;"
		"}"
		".test-case[data-v-bb301a88] {"
		"    box-shadow: 5px 5px 5px #ccc;"
		"    border-radius: 5px !important;"
		"    padding-left: 2px !important;"
		"    padding-right: 2px !important;"
		"}"
		".lg-article, .lg-article-sub, .lg-article-nctrl {"
		"    border-radius: 5px !important;"
		"}"
		".message-block > .message[data-v-5c0627c6] {"
		"    color: #222222 !important;"
		"}"
		".frame[data-v-a7f7c968]:focus, .refined-input.focused[data-v-a7f7c968] {"
		"    border-color: rgb(98, 47, 175) !important;"
		"}"
		"span[data-v-20b7d558] {"
		"    color: #333333;"
		"}"
		".lg-article, .lg-article-sub, .lg-article-nctrl {"
		"    background: white;"
		"}"
		".footer a[data-v-009d73c6] {"
		"    color: white !important;"
		"}"
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
