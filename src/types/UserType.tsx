export interface UserType {
    id: string; //自分しか閲覧できないID PK
    username: string; //ユーザー名　一意で公開される
    icon_url: string; //ユーザーのアイコン画像 URL
    role: string; //ユーザーの権限　管理者か一般ユーザーか
    tag: string[]; //ユーザーが登録しているタグ
    like_article: string[]; //ユーザーがいいねした記事
    bookmark_article: string[]; //ユーザーがブックマークした記事
    follow_user: [
        {
            image_url: string; //フォローしているユーザーのアイコン画像 URL
            username: string; //フォローしているユーザーのユーザー名
        }
    ]; //ユーザーがフォローしているユーザー
    group_list: string[]; //ユーザーが所属しているグループ
    notifications: Notification[]; //ユーザーに届いた通知
}

export const sampleUser: UserType = {
    id: "1",
    username: "sampleUser",
    icon_url: "/images/anonyms.png",
    role: "sampleRole",
    tag: ["sampleTag"],
    like_article: ["sampleLikeArticle"],
    bookmark_article: ["sampleBookmarkArticle"],
    follow_user: [
        {
            image_url: "/images/anonyms.png",
            username: "sampleName",
        },
    ],
    group_list: ["sampleGroupList"],
    notifications: [
        {
            image_url: "/images/free.png",
            title: "sampleTitle",
            description: "sampleDescription",
            id: "1",
            update_at: "2021-10-01",
            status: "unread",
        },
    ],
};

interface Notification {
    image_url: string; //通知に表示する画像
    title: string; //通知のタイトル
    description: string; //通知の詳細
    id: string; //通知のID PK
    update_at: string; //通知が更新された日時
    status: string; //通知の状態 未読か既読か
}
