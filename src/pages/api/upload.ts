import { createWriteStream } from "fs";

import formidable from "formidable";

import type {
	NextApiRequest,
	NextApiResponse,
} from "next";

export const config = {
	api: {
		bodyParser: false,
	},
};
type Data = {
	msg?: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") return;
	let path = "";
	const form = formidable({ multiples: true, uploadDir: __dirname });
	form.onPart = part => {
		if (part.originalFilename === "" || !part.mimetype) {
			form._handlePart(part);
		}
		else if (part.originalFilename) {
			path = "./public/images/uploads/" +
				new Date().getTime() +
				part.originalFilename;
			const stream = createWriteStream(path);
			part.pipe(stream);

			part.on("end", () => {
				stream.close();
			});
		}
	};
	form.parse(req, (err, fields, files) => {
		if (err) {
			res.status(500).json({ msg: "エラーが発生しました" });
			return;
		}
		res.status(200).json({ msg: "アップロードが完了しました", path });
	});
}
