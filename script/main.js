// yayo
history.replaceState('','','#');
var modal = {
  // template
  "": {
    heading: "",
    imgSrc: "",
    text: ``,
  },
  // modal1 sample
  sample: {
    heading: "aiueo",
    imgSrc: "../imgs/group_explanations/stage/arm_wrestling.jpg",
    text: "faie;nwaiofnew@oiafwe",
  },
  // modal2 sample
  sample2: {
    heading: "kakikukeko",
    text: "fewma,eflknwe@apfjweoapmnokihpaisjdn;ak;lnew",
    links: [
      { title: "to abc", onClick: "" },
      { title: "to def", onClick: "" },
    ],
  },
  "あげみょん": {
    heading: "あげみょん",
    imgSrc: "../imgs/map/4_boys_badminton.jpg",
    textOther: "男子バドミントン部　唐揚げ",
    text: `私の肉を削ぎ落として あなたの口を塞いだなら
    あなたはもう二度と 他の食べ物を食えないわ 逃がさないよ 離さないよ 私だけのあなたになるの         
    今すぐ店においで
    ねえ？ どうして食べに来てくれないの
    食え。私を食べたいのならば`,
  },
  "ちゅろシングヒーロー": {
    heading: "ちゅろシングヒーロー",
    imgSrc: "../imgs/map/10_girls_volleyball.jpg",
    textOther: "女子バレーボール部　チュロス",
    text: `しもしも〜石黒賢〜？今からちゅろシングヒーロー行かない？え、知らないの！？女バレがお店を出してて、チョコ、メープル、シュガーのチュロスを売ってるの。さらに、11時から60食限定で特別メニューを売ってるのよ〜。早く行くわよ！チュロチュロ〜転がしてる〜おったまげ〜！`,
  },
  "こてめん堂": {
    heading: "こてめん堂",
    imgSrc: "../imgs/map/12_kendo.jpg",
    textOther: "剣道部　たません",
    text: `突然ですが、玉子せんべいって食べたことありますか？あまり食べる機会のないものですよね。そんなたませんを、今年も一昨年長田高校B-1グランプリ優勝の誇りを持って売ります！
    私たちのたませんの魅力は「早い！安い！うまい！！」。是非、こてめん堂に足を運んで下さい！！`,
  },
  "イモはロックを聴かない": {
    heading: "イモはロックを聴かない",
    imgSrc: "../imgs/map/13_karate.jpg",
    textOther: "空手道部　大学芋",
    text: `『空手部が真心込めてお届けする、大学いもはいかがですか？小腹が空いたら大学いも！手軽につまめてひんや〜り美味しい！はちみつの甘さがお口の中に広がります。
    ロックを聴かないあの子も、大学いもを一緒に食べれば恋人のように寄り添ってくれるかも…！？』`,
  },
  "御座三郎": {
    heading: "御座三郎",
    imgSrc: "../imgs/map/7_girls_soft_tennis.jpg",
    textOther: "女子ソフトテニスぶ　大判焼き",
    text: `彼女たちが打ち上げた花火ｰ大判焼きは多くの人に愛されて早20年。目玉商品はパッと溶けて口の中に広がる餡子とカスタード。
    そんな中、新人の登場により新たな扉が開かれようとしていた。その名はチョコレート。彼は人々を幸せに出来るのだろうか。歴史的瞬間を見逃すな。`,
  },
  "そばを食べたいだとか": {
    heading: "そばを食べたいだとか",
    imgSrc: "../imgs/map/9_boys_volleyball.jpg",
    textOther: "男子バレーボール部　焼きそば",
    text: `男子バレーボール部は今年も焼きそばを出店します！今年は去年と変わり一般祭での出店となります！今回のテーマ「ＨＥＡＴ ＢＥＡＴ」といえば、焼きそばでしょう！満足感Ｎｏ．１間違いなし！たくさんそばを用意してお待ちしてます！店名は「そばを食べたいだとか」です。笑`,
  },
  "古今和カレー集": {
    heading: "古今和カレー集",
    imgSrc: "../imgs/map/16_mountain_climbing.jpg",
    textOther: "山岳部　カレー",
    text: `1皿のカレーを、私は手に取った。
    嗚呼、これがかの有名な山岳部の辛汁飯であるか。
    未知のものに対する高揚感に包まれ、震える手で飯と汁の間を掬う。
    微弱な辛さと、肉の旨みがマッチして、手がスプーンを口に運ぶのを止めない。
    私は、口角をニヤリと上げその場を去った。`,
  },
  "走れベビー！": {
    heading: "走れベビー！",
    imgSrc: "../imgs/map/8_girls_tennis.jpg",
    textOther: "女子硬式テニス部　ベビーカステラ",
    text: `こんにちは！女子硬式テニス部です！
    私たちのベビーカステラには3種類の味（プレーン、チョコレート、はちみつ）があり、どれもおいしく、空いた小腹に最適です！
    ぜひ、カス・テラコを熱い鉄板の上から救ってください!!`,
  },
  "麺々しくて": {
    heading: "麺々しくて",
    imgSrc: "../imgs/map/14_table_tennis.jpg",
    textOther: "卓球部　ラーメン",
    text: `ラーメンと聞くと高カロリーなイメージがありますが、実は400kcal前後です。これはチロルチョコ7.3個、アボカド1.6個、きゅうり29本と同じ熱量なのです。
    さて、私たち卓球部はラーメンを作ります！カロリーなんか気にせず、是非『麺々しくて』にお越しください！`,
  },
  "アゲ卍↑↑": {
    heading: "アゲ卍↑↑",
    imgSrc: "../imgs/map/6_boys_soft_tennis.jpg",
    textOther: "男子ソフトテニス部　揚げ饅頭",
    text: `昨年、完売を記録した男子ソフトテニス部の揚げまんじゅうが再び文化祭で復活！！ 今年は破格の１個80円２個100円で販売します！！多くの人に食べて欲しいのでギリギリの値段設定にしました。甘さ控えめの揚げまんじゅうを、皆さん是非食べに来てください。`,
  },
  "Superhashimaki": {
    heading: "Superhashimaki",
    imgSrc: "../imgs/map/5_girls_badminton.jpg",
    textOther: "女子バドミントン部　はしまき",
    text: `へい、らっしゃいらっしゃい！
    さいっっこうに美味しいよ〜このはしまき！なんてったってSUPERだもの。SUPERってことは何か入ってるの？そう！！よくお分かりで。女バドの愛がはいっているのうふふふふ
    形がいびつでもそれは愛の形！大目に見てね！！待ってま〜す！！！`,
  },
  "火の鳥": {
    heading: "火の鳥",
    imgSrc: "../imgs/map/11_handball.jpg",
    textOther: "ハンドボール部　トルネードポテト",
    text: `大躍進を続ける長田送球部。ハンドボール界を席巻する我ら長田送球部が、文化祭にも嵐を起こす！今年の長田送球部は、トルネードポテトをします。丹精込めて作ったおいしいポテト。ボリュームたっぷりでみんな大満足！アツアツポテトをぜひお楽しみください。`,
  },
  "偽乳特戦隊": {
    heading: "偽乳特戦隊",
    imgSrc: "../imgs/map/15_swimming.jpg",
    textOther: "水泳部　揚げアイス",
    text: `文化祭で水泳部と言ったら、‘ 揚げアイス’と言っても過言ではないくらい定番となった水泳部の揚げアイス。外の衣はアツアツで、中のアイスはつめたーいという新感覚。
    毎年、1番を争う速さで完売してしまうので食べたい人は1番に来るんやで〜！！`,
  },
  "放送部": {
    heading: "放送委員会",
    imgSrc: "../imgs/map/school_radio.jpg",
    text: `今年の放送部の展示はラジオドラマです。戯曲「ロミオとジュリエット」より発想を飛ばし、高校生の男女の心の葛藤をテーマに制作しました。キャラクターデザインなどの設定資料も展示予定です。座る場所もご用意しておりますので、文化祭の息抜きなどに是非お立ち寄りくださいませ。`,
  },
  // modal2
  "数学部・物理部": {
    heading: "数学部・物理部",
    text: "この教室では以下の2つの部活が展示を行なっています！",
    onClicks: [
      { title: "数学部", onClick: "fillDataToModal(modal['数学部'])" },
      { title: "物理部", onClick: "fillDataToModal(modal['物理部'])" },
    ],
  },
  "数学部": {
    heading: "数学部",
    imgSrc: "../imgs/map/math.jpg",
    text: `数学部は毎週水曜日に活動。普段は数学の問題を解いたり、作成したりしていますが、時には数学そのものにも目を向けています。現在は５月の文化祭と１２月の文化部発表会の年２回部誌を発行しています。数学が好きな方もそうでない方も、ぜひ部誌を手にとってみてください。 `,
  },
  "物理部": {
    heading: "物理部",
    imgSrc: "../imgs/map/physics.jpg",
    text: `物理部では、実験企画・クイズ・キャップ投げ・自作ゲームなど、楽しみながら科学も学べる展示をたくさん用意しています。ぜひ来てください！ `,
  },
  "nagataWorld": {
    heading: "It's a Nagata world",
    imgSrc: "../imgs/map/ennichi.jpg",
    textOther: "2-3・2-6　縁日",
    text: `長田の文化祭で唯一存在する小さな世界…It's a Nagata World!この世界の名物はラムネ(飲み物)!最高ののどごしをあなたにお届けします。また、某夢のようなアトラクションも盛りだくさん!笑いあり涙あり縁日ありのIt's a Nagata Worldへぜひお越しください。`,
  },
  "文芸部": {
    heading: "文芸部",
    imgSrc: "../imgs/map/literature.jpg",
    text: `文芸部かなーやっぱりww
    自分は思わないんだけど周りに文芸部っぽいってよく言われるwww
    こないだ締切に追われた時も気が付いたら意識無くてLINEの通知50件超えてたしなwww
    （部誌配ってます）`,
  },
  "図書委員会": {
    heading: "図書委員会",
    imgSrc: "../imgs/map/books.jpg",
    text: `図書委員会では、委員おすすめの本の紹介や古本販売を行います！本好きの図書委員たちイチオシの面白い小説や楽しいエッセイを、手書きの文章で紹介します。紹介する本のいくつかは実際にその場に展示するので、ぱらぱらと立ち読みすることも可能です◎ぜひ見に来てください！`,
  },
  // modal2
  "美術部・漫画研究会": {
    heading: "美術部・漫画研究会",
    // imgSrc: "",
    text: `この教室では以下の2つの部活が展示を行なっています！`,
    onClicks: [
      { title: "美術部", onClick: "fillDataToModal(modal['美術部'])" },
      { title: "漫画研究会", onClick: "fillDataToModal(modal['漫画研究会'])" },
    ],
  },
  "美術部": {
    heading: "美術部",
    imgSrc: "../imgs/map/art.jpg",
    text: `美術部は、油絵の展示、ワークショップ、また、漫画研究部と合同でポストカードの販売をしています。
    ワークショップは昨年大反響だったレジンと、七宝焼の2つを行います。子どもから大人まで楽しめるコーナーとなっていますので、ぜひ見に来て、そして遊びに来てください！`,
  },
  "漫画研究会": {
    heading: "漫画研究会",
    imgSrc: "../imgs/map/manga.png",
    text: `漫画研究部では、部員の創作漫画を載せた部誌の販売。イラスト集、イラスぺの無料配布を予定しています。過去部誌の展示、らくがきスペースもございます。隙間時間の立ち読みでも構いません、是非1度お立ち寄りください！お待ちしています`,
  },
  "Tea・Tea": {
    heading: "Tea・Tea",
    imgSrc: "../imgs/map/tea_ceremony.jpg",
    textOther: "茶華道部　柏餅",
    text: `柏餅の味は、しろみそ・こし餡・シロミソ・粒餡・shiromisoです。
    選ばれたのは、白味噌でした。`,
  },
  "書道部": {
    heading: "書道部",
    imgSrc: "../imgs/map/calligraphy.jpg",
    text: `教室では各学年の個人作品と部員全員での合同作品を展示しています！一般祭で書道パフォーマンスをした後は、その作品も展示に加えます！また、金券で買える団扇も販売しています！黒板に自由に文字を書いていただくこともできます！ぜひ来てください！`,
  },
  "韓": {
    heading: "韓 café Style",
    imgSrc: "../imgs/map/korea.jpg",
    textOther: "朝鮮文化研究会　茶菓子",
    text: `アンニョンハセヨ！
    朝鮮文化研究会です！
    今年の文化祭では、文発やその他イベントで大好評だった韓カフェをOPENします！韓国茶やドリンク、茶菓子をチマチョゴリ試着、かわいいカカオフレンズやK-popファン必見の展示などと共にお楽しみください！
    カムサハムニダ！`,
  },
  "ヤバイゲーム屋さん": {
    heading: "ヤバイゲーム屋さん",
    imgSrc: "../imgs/map/life_game.jpg",
    textOther: "2-4　リアル人生ゲーム",
    text: `Ｑ，リアル人生ゲームとは？ Ａ，自分自身がコマとなってスゴロクを進めるゲームです。 Ｑ，スゴロクの内容は？ Ａ，長田生コースと天国と地獄コースです。 Ｑ，楽しいですか？ Ａ，ベリベリエキサイティングです。`,
  },
  "ESS部": {
    heading: "ESS部",
    videoSrc: "../imgs/map/ESS.mp4",
    text: `いくつかの有名な洋画をESSで再現しました！誰もが知っているような有名なシーンばかりで、楽しめます☆
    休憩がてら、ぜひ観に来てください！フォトジェニックスポットもあります📸`,
  },
  "写真部": {
    heading: "写真部",
    imgSrc: "../imgs/map/photography.jpg",
    text: `「長田高校写真部」略してNPCは 、普段は日常の一瞬を切り取っています！今年の文化祭では、全部活動の活動風景を写真におさめて展示しています。一生懸命に部活動している姿に心打たれること間違いなしです。是非見に来てください！！`,
  },
  "HeartBeat": {
    heading: "HEART BEAT",
    imgSrc: "../imgs/map/haunted_house.jpg",
    textOther: "2-1・2-7　お化け屋敷",
    text: `深夜の長田高校に潜む恐怖の伝説の数々。誰の身にいつ何が起こるかわからない。迷い込んでしまった貴方が逃げ切るには前進あるのみ。決して後ろを振り返ってはいけない。逃げ出したくなるこの恐怖に立ち向かい生還できる強者は現れるのか。あなたの心臓いつまでもちますか？`,
  },
  "JOUSHIKINOOWARI": {
    heading: "JOUSHIKI NO OWARI",
    imgSrc: "../imgs/map/VR.jpg",
    textOther: "2-8　VR",
    text: `日々のドタバタな学校生活や仕事で心がお疲れの皆様、朗報です。8組の模擬店では、VRにより現実からゲームの世界に『逃避』することができます。誰もが一度は夢見る架空の世界を旅してみませんか？8組のイマジネーションを集結させた常識外の作品をぜひ体感してください！`,
  },
  "生物部": {
    heading: "生物部",
    imgSrc: "../imgs/map/biology.jpg",
    text: `生物部では、可愛い生物達、美しい標本が大集合！部で作成した研究論文、ポスター等の展示も行っています。
    クイズなどの楽しい企画も用意しています！是非お立ち寄りください`,
  },
  "野性爆弾": {
    heading: "野性爆弾",
    imgSrc: "../imgs/map/18_home.png",
    textOther: "家庭部　クッキー",
    text: `（注 : くっきー違い）
    ようこそ、『野生爆弾』へ。
    プレーン、ココア、チョコチップ、紅茶の４つのお味のクッキーをご準備しました。
    なんのひねりもないのですが、上の写真が示すとおり、家庭部一同、ただただ一生懸命、真面目に作りました。`,
  },
  "スタンプラリー/一年生企画": {
    heading: "スタンプラリー/一年生企画",
    imgSrc: "../imgs/map/stamp_rally.jpg",
    text: `“討伐の証”を持って文化祭を駆け廻れ！ スタンプが埋まったらこの｢クイズラリー/一年生企画｣の教室に来るといいことがあるかも！？`,
  },
  "生徒会執行部": {
    heading: "生徒会執行部",
    imgSrc: "../imgs/map/student_council.jpg",
    text: `長田高校の心臓部である生徒会執行部の活動を、文字通り心臓の中で紹介しちゃいます。右心房、右心室、左心房、左心室の四つに区切られたスペースで、各行事での仕事内容から普段の活動の様子までお伝えします。あなたもぜひ長田高校の鼓動を聞きに来てください。`,
  },
  "文スタ展示": {
    heading: "文スタ展示",
    imgSrc: "../imgs/map/festival_staff.jpg",
    text: `校内・一般共通の展示は長田高校の未知の領域の特集！！長田生でも知らない教室や空間の謎を解き明かします！加えて、一般祭では校内で大人気の食堂の魅力もお届けします！
    皆さんに楽しんで頂ける展示を制作しますので、ぜひお立ち寄りください！！`,
  },
  "謎解きはランチの前で": {
    heading: "謎解きはランチの前で",
    imgSrc: "../imgs/map/escape_room.jpg",
    textOther: "2-2・2-5　脱出ゲーム",
    text: `ただ祭りを楽しむ。悪くない考えだが、せっかくここ、長田高校に来たんだ。存分に学び、考え、そして楽しもうではないか。安心して欲しい。決して退屈はさせない。数々の問題が貴方を待っている。
    『完全な密室などございません』`,
  },
  "チーズ海峡犬景色": {
    heading: "チーズ海峡犬景色",
    imgSrc: "../imgs/map/3_8.jpg",
    textOther: "3-8　チーズドッグ",
    text: `8組発の夜行列車 おりた時から
    高速長田は チーズの中
    坂へ上る人の群れは 誰も無口で
    油の音だけを きいている
    私もひとり テントの前に並び
    おいしそうなチーズ見つめ 泣いていました
    ああ チーズ海峡犬景色`,
  },
  "愛をこめてドーナツを": {
    heading: "愛をこめてドーナツを",
    imgSrc: "../imgs/map/3_5.jpg",
    textOther: "3-5　ドーナツ",
    text: `3年5組の愛を込めたこのドーナツは、某ドーナツ店のミス〇ードーナツの味を遥かに凌駕し、かつ、某店のドーナツよりも安く食べることができます！！是非食べてみてください！`,
  },
  "Let it 団 Go": {
    heading: "Let it 団 Go",
    imgSrc: "../imgs/map/3_2.jpg",
    textOther: "3-2　胡麻団子",
    text: `食べた者を凍らせる秘密の力を持った団子。ある日、力が暴走し長田高校を真冬の世界に変えてしまう。耐えきれず逃げ出した団子は3-2で自らの力を存分に解放し、凍った世界を救った熱々のごま団子。ありのごまな自分をさらけ出せるごま団子なんて、少しも寒くないわ。
    です！`,
  },
  "翼をクレープ": {
    heading: "翼をクレープ",
    imgSrc: "../imgs/map/3_1.jpg",
    textOther: "3-1　クレープ",
    text: `3年1組！「翼をクレープ」ではクレープを販売します！味はみかんホイップ、クリームチーズ&ブルーベリージャム、いちごホイップ、アイスの4種類です！暑い季節に是非冷たいクレープはいかがですか！？3年1組一同！誠心誠意込めてクレープを作ります！是非お越しください！待ってまーす！`,
  },
  "FRIDE OF CHICKIN": {
    heading: "FRIED OF CHICKEN",
    imgSrc: "../imgs/map/3_4.jpg",
    textOther: "3-4　唐揚げ",
    text: `3年4組の店名はFRIED OF CHICKEN、校内祭でからあげを販売します。ジューシーな胸肉は鳥たちが踊るように口の中で弾けます。トッピングは豊富でノーマル、タレ、マヨ、チリソースの4種類からお選びいただけます。全種類コンプリート目指してぜひご来店下さい！`,
  },
  "ドキドキトッキーコロッケ": {
    heading: "ドキドキトッキーコロッケ",
    imgSrc: "../imgs/map/3_7.jpg",
    textOther: "3-7　コロッケ",
    text: `ドキドキトッキーコロッケは、我ら3年7組が、愛する担任「トッキー」への愛を込めて作ったコロッケ。e^xをどれだけxで微分しても変わらないのと同じように、トッキーへの、コロッケへのi乗は永遠にこの単位円の中にあります。心を込めて作ったコロッケ。ぜひお越し下さいませ。`,
  },
  "アイスフライネ": {
    heading: "アイスフライネ",
    imgSrc: "../imgs/map/3_3.jpg",
    textOther: "3-3　揚げアイス",
    text: `3年3組、アイスフライネでは揚げアイスを販売します。外はアツアツ、中はヒエヒエ新食感アイス。あなたは食べなくて大丈夫？食べた人にしかわからないこのなめらかな味わい。ぜひ食べに来てください！`,
  },
  "鳥の情熱大陸": {
    heading: "鳥の情熱大陸",
    imgSrc: "../imgs/map/3_6.jpg",
    textOther: "3-6　焼き鳥",
    text: `時代は令和───
    文化祭は、我ら3年6組の生徒陣による腕の見せ所である。
    「たくさんの人々に焼き鳥を食べてもらいたい」
    そんな熱い想いは果たして、どこまで伝わるのだろうか。平和な日常に訪れた、彼らの本気。激動の時代を生きる我らが誇る焼き鳥を、是非ご賞味あれ。`,
  },
}
function fillDataToModal(modalData) {
  let heading = document.getElementsByClassName("modal_window1-heading")[0]
  let text = document.getElementsByClassName("modal_window1-text")[0]
  let textOther = document.getElementsByClassName("modal_window1-text-other")[0]
  let img = document.getElementsByClassName("modal_window1-img")[0]
  let video = document.getElementsByClassName("modal_window1-video")[0]
  img.setAttribute("style", "display: block")
  video.setAttribute("style", "display: none; width: 100%; height: 100%")

  // console.log(heading, img, text)
  heading.textContent   = modalData.heading
  textOther.textContent = modalData.textOther
  text.innerHTML        = modalData.text.split("\n").join("<br>")
  if ( modalData.imgSrc !== undefined) {
    img.setAttribute("src", modalData.imgSrc)
  }
  // console.log(modalData.videoSrc, modalData.videoSrc !== undefined)
  if ( modalData.videoSrc !== undefined ) {
    img.setAttribute("style", "display: none")
    // console.log(modalData.videoSrc)
    video.setAttribute("src", modalData.videoSrc)
    video.setAttribute("style", "display: block; width: 100%; height: 100%") 
  }
}
function fillDataToModal2(modalData) {
  let heading = document.getElementsByClassName("modal_window2-heading")[0]
  let text = document.getElementsByClassName("modal_window2-text")[0]
  let onClick1 = document.getElementsByClassName("modal_window2-link1")[0]
  let onClick2 = document.getElementsByClassName("modal_window2-link2")[0]
  
  // console.log(modalData.links[0])
  // console.log(heading, img, text)
  heading.textContent  = modalData.heading
  text.textContent     = modalData.text
  onClick1.textContent    = modalData.onClicks[0].title
  onClick2.textContent    = modalData.onClicks[1].title
  onClick1.setAttribute("onClick", modalData.onClicks[0].onClick)
  onClick2.setAttribute("onClick", modalData.onClicks[1].onClick)
}
// -----------------------

function turnOnModal(modalId) {
    let modal = document.getElementById(modalId)
    modal.classList.add("is-visible")
}
function turnOffModal(modalId) {
    let modal = document.getElementById(modalId)
    modal.classList.remove("is-visible")
}

var preventScroll={
    x:0,
    y:0,
    setPos(x=window.pageXOffset,y=window.pageYOffset){
      this.x=x;
      this.y=y;
    },
    handleEvent(){
      window.scrollTo(this.x,this.y);
    },
    enable(){
      this.setPos();
      window.addEventListener("scroll",this);
    },
    disable(){
      window.removeEventListener("scroll",this);
      this.setPos();
    }
};


function switch_menu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("is_shown");
    menu.classList.toggle("is_hidden");
    menu.classList.remove("first_hidden");

    var menu_icon = document.getElementById("menu_icon");
    menu_icon.classList.toggle("is_open");
    menu_icon.classList.toggle("is_close"); 
};