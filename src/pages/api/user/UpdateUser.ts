import {
	NextApiRequest,
	NextApiResponse,
} from "next";

import { db } from "@/lib/prisma";

type updateProps = {
	id: string;
	name: string;
	email: string;
	image: string;
};

export async function updateUserMutation({
	id,
	name,
	email,
	image,
}: updateProps) {
	const updateUser = await db.user.update({
		where: {
			id: id,
		},
		data: {
			name: name,
			email: email,
			image: image,
		},
	});
	return updateUser;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { id, name, email, image } = req.body;
	const updateUser = await updateUserMutation({ id, name, email, image });
	res.status(200).json(updateUser);
}
