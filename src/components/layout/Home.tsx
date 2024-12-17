import {
	Notification,
	User,
} from "@prisma/client";

import { ArticleCard } from "@/components/article/ArticleCard";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Layout } from "@/layout/HomeLayout";
import { ArticleWithUserType } from "@/types/article";

type HomeProps = {
	user: User | null;
	notification: Notification[] | null;
	allArticle: ArticleWithUserType[];
};

export const Home = ({ user, notification, allArticle }: HomeProps) => {
	return (
		<Layout
			header={<Header notification={notification} user={user} />}
			leftBar={<Sidebar />}
			main={allArticle.map(article => (
				<ArticleCard
					content={article.content}
					createdAt={article.createdAt}
					createdUser={article.user}
					id={article.id}
					key={article.id}
					like={article.like}
					tags={article.tags}
					title={article.title}
					updatedAt={article.updatedAt}
					userId={article.userId}
				/>
			))}
			rightBar={<div className="bg-gray-50 w-full h-full">広告とか貼れそう</div>}
		/>
	);
};
