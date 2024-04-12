import { HStack, VStack } from "@chakra-ui/react";
import { LogoTitle } from "../molecules/LogoTitle";
import { CreateUserForm } from "../organisms/CreateUserForm.1";

interface CreateUserProps {
  setUser: Function;
}

export function CreateUser({ setUser }: CreateUserProps) {
  return (
    <VStack display="flex" alignItems="center" justifyContent="center">
      <VStack padding="8px" width="560px" backgroundColor="#eeeeee">
        <LogoTitle />
        <CreateUserForm setUser={setUser} />
      </VStack>
    </VStack>
  );
}
