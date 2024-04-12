import { VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

interface CreateUserFormProps {
  setUser: Function;
}
export function CreateUserForm({ setUser }: CreateUserFormProps) {
  const [name, setName] = useState("");
  return (
    <VStack>
      <Input
        height="48px"
        width="400px"
        borderRadius="8px"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ユーザー名を入力してください"
        fontSize={16}
      />
      <Button
        height="48px"
        width="160px"
        borderRadius="8px"
        backgroundColor="#3182CE"
        color="white"
        fontSize={16}
        onClick={() => setUser({ name })}
      >
        登録
      </Button>
    </VStack>
  );
}
