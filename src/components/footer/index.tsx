import Image from "next/image";

import { Divider } from "@/components/common/Divider";
import { FooterList } from "@/components/footer/FooterList";

export const Footer = () => {
	return (
		<footer aria-labelledby="footer-heading" className="bg-white">
			<h2 className="sr-only" id="footer-heading">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl">
				<div className="xl:grid xl:grid-cols-3 xl:gap-2">
					<div className="space-y-8">
						<Image alt="logo" height={40} src="/svgs/icon.svg" width={40} />
						<p className="text-sm leading-6 text-gray-600">
							キジノニワは、あなたの日常を楽しくするための情報を提供します。
						</p>
					</div>
					<div className="grid grid-cols-3 gap-4
 xl:col-span-2">
						<FooterList
							footerItems={[
								{ title: "About", route: "/about" },
								{ title: "利用規約", route: "/terms" },
								{ title: "プライバシーポリシー", route: "/privacy" },
								{ title: "ガイドライン", route: "/guideline" },
								{ title: "お問い合わせ", route: "/contact" },
							]}
							title="ヘルプ"
						/>
						<FooterList
							footerItems={[
								{ title: "ホーム", route: "/" },
								{ title: "リリースノート", route: "/release-note" },
								{ title: "お知らせ", route: "/news" },
							]}
							title="リンク"
						/>
						<FooterList
							footerItems={[
								{ title: "管理人", route: "/admin" },
								{ title: "団体", route: "https://icecream-software.com/" },
							]}
							title="運営"
						/>
					</div>
				</div>
				<Divider />
				<p className="text-xs leading-5 text-gray-500">
					&copy; 2020 Your Company, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
};
