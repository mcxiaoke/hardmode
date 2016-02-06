function FindProxyForURL(url, host) {
    var PROXY = "PROXY 10.8.0.1:8118; DIRECT";
    var DEFAULT = "DIRECT";

    var domain_list = [
        "abc.xyz",
        "adzerk.net",
        "akamaihd.net",
        "amazonaws.com",
        "android.com",
        "apigee.com",
        "appledaily.com.tw",
        "appspot.com",
        "archive.org",
        "awsstatic.com",
        "bbc.co.uk",
        "bbc.com",
        "bit.ly",
        "blogcdn.com",
        "blogger.com",
        "blogspot.com",
        "blogspot.jp",
        "blogspot.tw",
        "bloomberg.com",
        "boxun.com",
        "cdninstagram.com",
        "chinadigitaltimes.net",
        "chinagfw.org",
        "chinese.engadget.com",
        "cloudflare.com",
        "cloudfront.net",
        "cn.reuters.com",
        "cn.wsj.com",
        "codecademy.com",
        "digg.com",
        "discuss.com.hk",
        "doubleclick.net",
        "dropbox.com",
        "dw-world.de",
        "dw.de",
        "epochtimes.com",
        "facebook.com",
        "facebook.net",
        "fastly.net",
        "fb.me",
        "fbcdn.net",
        "fc2.com",
        "feedburner.com",
        "feedly.com",
        "ff.im",
        "firebase.com",
        "foursquare.com",
        "ggpht.com",
        "gist.github.com",
        "git-scm.com",
        "github.com",
        "githubusercontent.com",
        "gmail.com",
        "golang.org",
        "goo.gl",
        "google-analytics.com",
        "google.co.id",
        "google.co.jp",
        "google.com",
        "google.com.hk",
        "google.com.pk",
        "google.com.tw",
        "googleapis.com",
        "googlecode.com",
        "googlesource.com",
        "googletagservices.com",
        "googleusercontent.com",
        "googlevideo.com",
        "gravatar.com",
        "greatfire.org",
        "gstatic.com",
        "ift.tt",
        "igfw.net",
        "igfw.tk",
        "img.ly",
        "instagram.com",
        "j.mp",
        "jsbin.com",
        "lgtm.in",
        "mail-archive.com",
        "mobile01.com",
        "mobypicture.com",
        "mpinews.com",
        "multiupload.com",
        "nextmedia.com",
        "nytimes.com",
        "openvpn.net",
        "pastebin.com",
        "pchome.tw",
        "peacehall.com",
        "photobucket.com",
        "piratebay.org",
        "pixnet.net",
        "posterous.com",
        "privatetunnel.com",
        "ptt.cc",
        "python.org",
        "quantserve.om",
        "quora.com",
        "quoracdn.net",
        "readthedocs.org",
        "rfi.fr",
        "scmp.com",
        "sf.net",
        "shadowsocks.org",
        "slack-msgs.com",
        "slack.com",
        "slack.global.ssl.fastly.net",
        "slideshare.net",
        "soundcloud.com",
        "sourceforge.net",
        "speekerdesk.com",
        "sstatic.net",
        "t.co",
        "thepiratebay.org",
        "thepiratebay.se",
        "tmagazine.com",
        "travis-ci.org",
        "trello.com",
        "trellocdn.com",
        "tumblr.com",
        "tw.yahoo.com",
        "twimg.com",
        "twimgs.com",
        "twitter.com",
        "twitter4j.org",
        "vultr.com",
        "whatismyipaddress.com",
        "wikipedia.org",
        "wordpress.com",
        "wp.com",
        "wretch.cc",
        "wsj.com",
        "www.shutterstock.com",
        "yfrog.com",
        "yimg.com",
        "youtu.be",
        "youtube.com",
        "ytimg.com",
        "zaobao.com",
    ]

    for(var i=0; i<domain_list.length; i++){
        if(dnsDomainIs(host, domain_list[i])){
            return PROXY;
        }
    }

    return DEFAULT;
}