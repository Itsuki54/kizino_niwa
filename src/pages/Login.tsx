import { signIn } from "next-auth/react"
import { Button, HStack, Input, VStack } from "@chakra-ui/react"

const Login = () => {
  return (
    <VStack>
      <HStack>
        <Input placeholder="Email" />
      </HStack>
      <HStack>
        <Input placeholder="Password" />
      </HStack>
      <Button onClick={() => signIn()}>Login</Button>

    </VStack>
  );
};

export default Login;