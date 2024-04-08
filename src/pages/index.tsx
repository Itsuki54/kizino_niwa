import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";
import { Box, ChakraProvider, HStack } from "@chakra-ui/react";
import { UserType, sampleUser } from "@/types/UserType";
const App = () => {
    return (
        <ChakraProvider>
            <HStack align="flex-start" gap="0px">
                <Sidebar />
                <Header user={sampleUser} />
            </HStack>
        </ChakraProvider>
    );
};

export default App;
