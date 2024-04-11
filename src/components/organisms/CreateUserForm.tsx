import { VStack, Input, Button } from "@chakra-ui/react";
import { LogoTitle } from "../molecules/LogoTitle";

interface CreateUserFormProps {
  setUser: Function;
}
export function CreateUserForm({ setUser }: CreateUserFormProps) {
  return (
    <VStack display="flex" alignItems="center" justifyContent="center">
      <VStack padding="8px" width="560px" backgroundColor="#eeeeee">
        <LogoTitle />
        <Input placeholder="名前" />
        <Input placeholder="メールアドレス" />
        <Input placeholder="パスワード" />
        <Button>登録</Button>
      </VStack>
    </VStack>
  );
}
