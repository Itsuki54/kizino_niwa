import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import {
	getProviders,
	signOut,
} from "next-auth/react";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import { UserDataQuery } from "@/utils/query/User.query";

import { authOptions } from "./api/auth/[...nextauth]";
export default function SignOut() {
	const router = useRouter();

	function handleClick() {
		signOut();
		router.push("/");
	}
	return (
		<>
			<Button onClick={() => handleClick()}>Sign out</Button>
		</>
	);
}

// もしアカウントがなければ/にリダイレクトする

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);
	const providers = await getProviders();
	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	const userData = await UserDataQuery(session.user.uid);
	const user = JSON.parse(JSON.stringify(userData));
	if (!user) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: { providers: providers ?? [] },
	};
}
