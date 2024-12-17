import Image from "next/image";
import { useRouter } from "next/router";

type ProfileButtonProps = {
	imageUrl: string;
	name: string;
	userId: string;
};

export const ProfileButton = ({ imageUrl, name, userId }: ProfileButtonProps) => {
	const router = useRouter();
	const GotoPage = () => {
		void router.push({
			pathname: `/${userId}`,
		});
	};
	return (
		<div className="flex flex-row items-center gap-1">
			<Image
				alt={name}
				className="rounded-full cursor-pointer"
				height={32}
				onClick={GotoPage}
				src={imageUrl}
				width={32}
			/>
		</div>
	);
};
