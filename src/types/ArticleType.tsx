export interface ArticleType {
    id: string; //記事のID PK
    title: string; //記事のタイトル
    content: string; //記事の内容
    imageUrl: string; //記事の画像 URL
    like: string[]; //記事にいいねしたusername
    bookmark: string[]; //記事をブックマークしたusername
    tag: string[]; //記事のタグ
    user: string; //記事を作成したユーザー ID FK
    comment: string[]; //記事についたコメント
    group: string; //記事が所属しているグループ ID FK
    create_at: string; //記事が作成された日時
    update_at: string; //記事が更新された日時
}

export const sampleArticle: ArticleType = {
    id: "1",
    title: "sampleTitle",
    content: "sampleContent",
    imageUrl: "/images/free.png",
    like: ["sampleLike"],
    bookmark: ["sampleBookmark"],
    tag: ["sampleTag"],
    user: "1",
    comment: ["sampleComment"],
    group: "1",
    create_at: "2021-10-01",
    update_at: "2021-10-01",
};
