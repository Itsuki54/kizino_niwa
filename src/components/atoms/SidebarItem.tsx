import React from "react";
import { useRouter } from "next/router";
import { Box, Text } from "@chakra-ui/react";

interface SideBarItemProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

export function SidebarItem({ title, icon, route }: SideBarItemProps) {
  const router = useRouter();
  const GotoPage = () => {
    router.push(route);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      padding="8px"
      borderRadius="8px"
      _hover={{ backgroundColor: "gray.100" }}
      cursor="pointer"
      onClick={() => {
        GotoPage();
      }}
    >
      {icon}
      <Text fontSize="16px" marginLeft="8px">
        {title}
      </Text>
    </Box>
  );
}
