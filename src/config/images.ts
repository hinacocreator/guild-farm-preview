/**
 * =========================================================
 * 写真の一覧
 * =========================================================
 * 差し替え方法は2通りあります。
 *
 * A) いちばん簡単：public/images/ の中の同じ名前のファイルを上書きする
 *    （例：public/images/hero.jpg を新しい写真に置き換える）
 *    → コードは一切触らなくてOK。
 *
 * B) ファイル名ごと変えたい場合：下の src の値を書き換える
 *    （例：src: "/images/hero-2027spring.jpg"）
 *
 * alt は画像が表示できないときに読み上げられる説明文です（SEO・アクセシビリティ用）。
 * 写真を差し替えたら、alt の文章も合わせて直してください。
 *
 * 推奨サイズの目安：
 *   hero / cta        … 横長 2000px 以上（16:9）
 *   about / day / owner … 縦長 1200×1500px 前後（4:5）
 *   house             … 縦長 1280×1600px（4:5）／外観のみ横長 1600×1067px（3:2）
 *   experience / journal … 正方形 1200×1200px 前後（1:1）
 */

export type ImageAsset = {
  src: string;
  alt: string;
};

export const images = {
  /** 1-a. HERO（PC・タブレット）：横長 16:9 */
  hero: {
    src: "/images/hero.jpg",
    alt: "秋の田んぼで稲刈り機を動かす滞在者と地域の人",
  },
  /** 1-b. HERO（スマホ）：縦長 9:16。同じ場面の縦トリミングを推奨 */
  heroMobile: {
    src: "/images/hero-mobile.jpg",
    alt: "秋の田んぼで稲刈り機を動かす滞在者と地域の人",
  },

  /** 2. ABOUT */
  aboutField: {
    src: "/images/about-field.jpg",
    alt: "耕したばかりの畑と、その向こうに並ぶ集落の家",
  },
  aboutSoil: {
    src: "/images/about-soil.jpg",
    alt: "畑の中に立つ、土のついた作業靴の足元",
  },

  /** 3. HOW TO SPEND（GUILD Farmでの1日） */
  dayMorning: {
    src: "/images/day-morning.jpg",
    alt: "朝の畑にしゃがんで作業をする滞在者",
  },
  dayWork: {
    src: "/images/day-work.jpg",
    alt: "窓際に机を置いた、滞在する部屋",
  },
  dayEvening: {
    src: "/images/day-evening.jpg",
    alt: "夕方の畑で、地域の人と一緒に作業をする様子",
  },
  dayDinner: {
    src: "/images/day-dinner.jpg",
    alt: "収穫した野菜を並べた、屋外での食卓",
  },

  /** 4. EXPERIENCE */
  expFarmwork: {
    src: "/images/exp-farmwork.jpg",
    alt: "畑で採れたばかりの葉物を手にしているところ",
  },
  expHarvest: {
    src: "/images/exp-harvest.jpg",
    alt: "収穫したみかんを剥いて、その場で食べる",
  },
  expFood: {
    src: "/images/exp-food.jpg",
    alt: "採れた野菜をつかった食事",
  },
  expPeople: {
    src: "/images/exp-people.jpg",
    alt: "作業を終えて畑に立つ、地域の人と滞在者",
  },
  expNature: {
    src: "/images/exp-nature.jpg",
    alt: "手入れをしている竹林",
  },
  expSeason: {
    src: "/images/exp-season.jpg",
    alt: "手のひらにのせた、収穫したばかりの玄米",
  },

  /**
   * 4-b. HOUSE（シェアハウスの建物・部屋）
   * 並び順は src/content/copy.ts の copy.house.items と1対1で対応しています。
   * 差し替えるときは、キャプションの内容とずれないように注意してください。
   * house-01〜04・06 は 4:5（縦）、house-05 は 3:2（横）で書き出しています。
   */
  house: [
    {
      src: "/images/house-01.jpg",
      alt: "窓際に机とノートパソコンを置いた個室。奥にベッドが見える",
    },
    {
      src: "/images/house-02.jpg",
      alt: "電子レンジと作業台のある、共用のキッチン",
    },
    {
      src: "/images/house-03.jpg",
      alt: "洗濯機と洗濯かごが置かれた、共用の洗面・洗濯スペース",
    },
    {
      src: "/images/house-04.jpg",
      alt: "木の扉の個室が両側に並ぶ、シェアハウスの廊下",
    },
    {
      src: "/images/house-05.jpg",
      alt: "「今市シェアハウス」の看板が掛かった建物の外観",
    },
    {
      src: "/images/house-06.jpg",
      alt: "紫色の扉のある、シェアハウスの玄関",
    },
  ] satisfies ImageAsset[],

  /** 5. WHY GUILD FARM */
  whyVisual: {
    src: "/images/why-visual.jpg",
    alt: "草の茂る土地を歩いて見てまわる人たち",
  },

  /** 6. STORY / OWNER ※ご本人の写真に差し替えてください */
  owner: {
    src: "/images/owner.jpg",
    alt: "収穫したさつまいもを持って畑に立つ人",
  },

  /** 7. JOURNAL / INSTAGRAM（正方形6枚） */
  journal: [
    { src: "/images/journal-01.jpg", alt: "精米したての白米を手のひらにのせて" },
    { src: "/images/journal-02.jpg", alt: "焼き芋を食べる滞在者" },
    { src: "/images/journal-03.jpg", alt: "竹林へ続く山道の整備" },
    { src: "/images/journal-04.jpg", alt: "地域の子どもと一緒に自家製のおかきを" },
    { src: "/images/journal-05.jpg", alt: "採ってきた山菜を下ごしらえする" },
    { src: "/images/journal-06.jpg", alt: "田植えを終えた田んぼに集まった人たち" },
  ] satisfies ImageAsset[],

  /** 8. CTA：ページ下部の大きな背景写真 */
  cta: {
    src: "/images/cta.jpg",
    alt: "日が暮れたあと、庭に集まって食事をする様子",
  },
} satisfies Record<string, ImageAsset | ImageAsset[]>;
