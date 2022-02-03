'use strict'

// ランダムでおみくじ結果を出力
function divination() {
    const array1 = ["大吉","吉","中吉","小吉","凶","大凶"]
    let num1 = Math.random();
    let num = Math.floor(num1 * 6);
    // console.log(array1[num])
    window.alert(array1[num]);
    document.getElementsByTagName("h3")[0].innerText = "もう一度"
}

//画像を貼りかえる 
function picture() {
    const pic = document.getElementsByTagName("img")[0]
    pic.src = "https://stamps.gsj.mobi/images/omikuji/4.gif"
    document.getElementsByTagName("h2")[0].innerText = "結果を見る"
}

// HTMLのタグ要素を取得
const ele = document.getElementsByTagName("button")[0];
const element = document.getElementsByTagName("h2")[0];
const reload = document.getElementsByTagName("h3")[0];

// イベントリスナー追加
ele.addEventListener("click",picture);
element.addEventListener("click",divination);
reload.addEventListener("click",() => window.location.reload());    

