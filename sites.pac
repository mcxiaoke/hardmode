function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
    function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*douban.com*")) return 'DIRECT';
	if (shExpMatch(url, "*adzerk.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*akamaihd.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*android.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*apigee.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*appledaily.com.tw*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*appspot.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*archive.org*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*bbc.co.uk*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*bit.ly*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*blogcdn.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*blogger.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*blogspot.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*blogspot.jp*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*bloomberg.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*boxun.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*chinadigitaltimes.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*chinagfw.org*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*chinese.engadget.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*cn.reuters.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*cn.wsj.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*discuss.com.hk*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*dropbox.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*dw-world.de*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*facebook.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*fb.me*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*fbcdn.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*fc2.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*feedburner.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*feedly.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*ff.im*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*foursquare.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*ggpht.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*google.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*googleapis.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*google-analytics.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*googlesource.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*googleusercontent.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*googlecode.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*gstatic.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*igfw.tk*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*img.ly*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*j.mp*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*mail-archive.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*mobile01.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*mobypicture.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*mpinews.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*multiupload.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*nytimes.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*pastebin.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*pchome.tw*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*peacehall.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*photobucket.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*piratebay.org*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*pixnet.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*posterous.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*ptt.cc*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*quantserve.om*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*rfi.fr*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*scmp.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*sf.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*shadowsocks.org*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*slideshare.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*sourceforge.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*sstatic.net*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*t.co*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*thepiratebay.org*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*thepiratebay.se*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*tmagazine.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*tumblr.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*tw.yahoo.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*twimg.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*twitpic.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*twitter.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*twitter4j.org*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*wordpress.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*wretch.cc*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*yfrog.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*youtu.be*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*youtube.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*ytimg.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*zaobao.com*")) return 'PROXY 10.8.0.1:8118';
	if (shExpMatch(url, "*zh.wikipedia.org*")) return 'PROXY 10.8.0.1:8118';
	return 'DIRECT';
}