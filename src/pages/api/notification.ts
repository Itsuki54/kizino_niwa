import {
	NextApiRequest,
	NextApiResponse,
} from "next";

import { db } from "@/lib/prisma";

type createProps = {
	title: string;
	description: string;
	icon: string;
	read: boolean;
	userId: string;
};

export async function createNotificationMutation({
	title,
	description,
	icon,
	read,
	userId,
}: createProps) {
	const newNotification = await db.notification.create({
		data: {
			title: title,
			description: description,
			icon: icon,
			read: read,
			userId: userId,
		},
	});
	return newNotification;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { title, description, icon, read, userId } = req.body;
	const newNotification = await createNotificationMutation({
		title,
		description,
		icon,
		read,
		userId,
	});
	res.status(200).json(newNotification);
}
