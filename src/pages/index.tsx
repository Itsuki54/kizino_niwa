import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";
import { ChakraProvider, HStack } from "@chakra-ui/react";
import { userMock } from "@/mock/user.mock";

function Kizinoniwa() {
    return (
        <ChakraProvider>
            <HStack align="flex-start" gap="0px">
                <Sidebar />
                <Header user={userMock} />
            </HStack>
        </ChakraProvider>
    );
}

export default Kizinoniwa;
