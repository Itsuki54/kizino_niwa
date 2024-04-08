import { HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
export function LogoTitle() {
    const router = useRouter();
    const GotoPage = () => {
        router.push("/");
    };
    return (
        <HStack>
            <Image
                src="/images/logo.png"
                alt="logo"
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                onClick={() => {
                    GotoPage();
                }}
            />
            <Text
                fontSize="32px"
                fontWeight="bold"
                color="black"
                whiteSpace="nowrap"
            >
                キジノニワ
            </Text>
        </HStack>
    );
}
