var OriginTitle = document.title;
var titleTime;
var crashedIcon;

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    crashedIcon = "/images/remove.png";
} else {
    crashedIcon = "/images/remove.png";
}

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        var icons = document.querySelectorAll("link[rel='icon']");
        for (var i = 0; i < icons.length; i++) {
            icons[i].href = crashedIcon;
        }
        document.title = '(°A°`) 不要走!再看看嘛!';
        clearTimeout(titleTime);
    } else {
        var icons = document.querySelectorAll("link[rel='icon']");
        for (var i = 0; i < icons.length; i++) {
            icons[i].href = "/images/rainbow.ico";
        }
        document.title = '◝(⁰▿⁰)◜ 欢迎回来!' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
