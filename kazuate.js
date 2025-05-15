// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let l = document.querySelector('input[name=yoso]');
  let yoso = Number(l.value);
  let y = document.querySelector('span#answer');
  y.textContent = yoso;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  kaisu = kaisu + 1;
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu;
  let kaisutf;

  let r = document.querySelector('p#result');
  r.textContent = kaisu+1 + "回目の予想:" + yoso;
  if(kaisutf!=1){
    kaisutf =0;
      }
  if(kaisutf >= 1 || kaisu >3){
    r.textContent = "答えは" + kotae + "でした.すでにゲームは終わっています";
  }else if(kotae==yoso){
    kaisu = 4;
    r.textContent = "正解です.おめでとう!";
  }else{
    if(kaisu==3){
        r.textContent = "まちがい.残念でした,正解は" + kotae;
    }else if(kotae>yoso){
        r.textContent = "まちがい.答えはもっと大きいですよ";
    }else{
        r.textContent = "まちがい.答えはもっと小さいですよ";
    }
  }

}

let b = document.querySelector('button#kaitou');
b.addEventListener('click', hantei);