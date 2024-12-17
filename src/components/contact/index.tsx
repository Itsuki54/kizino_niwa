import {
	init,
	send,
} from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
	SubmitHandler,
	useForm,
} from "react-hook-form";
import {
	toast,
	Toaster,
} from "react-hot-toast";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formShema = z.object({
	name: z.string().min(2, { message: "2文字で入力してください" }).max(50),
	email: z.string().email({ message: "メールアドレスの形式ではありません" }),
	content: z.string(),
});

type formType = z.infer<typeof formShema>;

const Contact = () => {
	const [isSending, setIsSending] = useState(false);

	const form = useForm<formType>({
		resolver: zodResolver(formShema),
		defaultValues: {
			name: "",
			email: "",
			content: "",
		},
	});

	const onSubmit: SubmitHandler<formType> = async (data: formType) => {
		const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

		const { name, email, content } = data;

		if (userId && serviceId && templateId) {
			setIsSending(true);
			const loadingToast = toast.loading("送信中...");

			init(userId);

			const params = {
				name: name,
				email: email,
				content: content,
			};

			try {
				await send(serviceId, templateId, params);
				toast.success("送信が成功しました。");
			}
			catch {
				toast.error("送信に失敗しました。");
			}
			finally {
				form.reset();
				toast.dismiss(loadingToast);
				setIsSending(false);
			}
		}
	};

	return (
		<div className="container h-screen flex items-center">
			<Toaster />
			<div className="lg:w-[60%] w-full mx-auto">
				<h2 className="text-[40px] font-bold mb-[30px]">お問い合わせ</h2>
				<Form {...form}>
					<form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>名前</FormLabel>
									<FormControl>
										<Input placeholder="y_ta" {...field} disabled={isSending} />
									</FormControl>
									<FormDescription>お名前をお書きください。</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>メールアドレス</FormLabel>
									<FormControl>
										<Input
											placeholder="example@gmail.com"
											{...field}
											disabled={isSending}
										/>
									</FormControl>
									<FormDescription>
										メールアドレスをお書きください。
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>お問い合わせ内容</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Next.jsの使い方を教えてください"
											{...field}
											className="resize-none h-[200px]"
											disabled={isSending}
										/>
									</FormControl>
									<FormDescription>
										お問い合わせ内容をお書きください。
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button disabled={isSending}>送信</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default Contact;
