
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  
  console.log(data.list.g1[0].start_time);
  console.log(data.list.g1[0].end_time);
  console.log(data.list.g1[0].area.name);
  console.log(data.list.g1[0].service.name);
  console.log(data.list.g1[0].title);
  console.log(data.list.g1[0].subtitle);

}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let b = document.querySelector('body');
  let d = document.createElement('div');
  d.id = 'result';
  b.insertAdjacentElement('beforeend', d);
  
  d = document.querySelector('div#result');
  let s = document.querySelector('select#channelnumber');
    let idx = s.selectedIndex;  // idx 番目の option が選択され
    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let ser = os.item(idx);
    let serv = ser.getAttribute('value');
    let g = document.querySelector('select#channelgenru');
    idx = g.selectedIndex;  // idx 番目の option が選択され
    let og = g.querySelectorAll('option');  // s の子要素 option をすべて検索
    let gen = og.item(idx);
    let genv = gen.getAttribute('value');
  let l;
  let p = document.createElement('p');
  d.insertAdjacentElement('beforeend', p);
  if(serv=="g1"){
  for(let n of data.list.g1){
    let u = document.createElement('ul');
    d.insertAdjacentElement('beforeend', u);
    u.id = 'g1';
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
	  l.textContent = "チャンネル:" +  n.service.name;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "番組タイトル:" +  n.title;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "開始時刻:" +  n.start_time;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "終了時刻:" +  n.end_time;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "番組説明:" +  n.content;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "出演者:" +  n.act;
  }
  }else if(serv=="e1"){
    for(let n of data.list.e1){
    let u = document.createElement('ul');
    d.insertAdjacentElement('beforeend', u);
    u.id = 'e1';
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
	  l.textContent = "チャンネル:" +  n.service.name;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "番組タイトル:" +  n.title;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "開始時刻:" +  n.start_time;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "終了時刻:" +  n.end_time;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "番組説明:" +  n.content;
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = "出演者:" +  n.act;
  }

  }


}

// 6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    // URL を設定
    let s = document.querySelector('select#channelnumber');
    let idx = s.selectedIndex;  // idx 番目の option が選択され
    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let ser = os.item(idx);
    let serv = ser.getAttribute('value');
    let g = document.querySelector('select#channelgenru');
    idx = g.selectedIndex;  // idx 番目の option が選択され
    let og = g.querySelectorAll('option');  // s の子要素 option をすべて検索
    let gen = og.item(idx);
    let genv = gen.getAttribute('value');
    let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + serv + '-' + genv + '-j.json';
    let d = document.querySelector('div#result');
    d.remove();

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);


    printDom(data);

      
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

