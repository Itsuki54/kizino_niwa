import React, { useState } from "react";
import { Accordion, Box, Text, VStack } from "@chakra-ui/react";
import { Home } from "@mui/icons-material";
import FeedIcon from "@mui/icons-material/Feed";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

import { SidebarItem } from "@/components/atoms/SidebarItem";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion width={isOpen ? "200px" : "64px"} height="100vh">
      {isOpen ? (
        <VStack padding="8px">
          <Box alignItems="flex-end">
            <MenuIcon
              onClick={() => setIsOpen(!isOpen)}
              style={{
                cursor: "pointer",
                fontSize: "32px",
              }}
            />
          </Box>
          <VStack align="flex-start">
            <SidebarItem title="ホーム" icon={<HomeIcon />} route="/" />
            <SidebarItem
              title="記事一覧"
              icon={<FeedIcon />}
              route="/articles"
            />
            <SidebarItem
              title="グループ"
              icon={<GroupIcon />}
              route="/groups"
            />
          </VStack>
        </VStack>
      ) : (
        <VStack padding="8px">
          <MenuIcon
            onClick={() => setIsOpen(!isOpen)}
            style={{
              cursor: "pointer",
              fontSize: "32px",
            }}
          />
          <VStack padding="8px">
            <HomeIcon />
            <FeedIcon />
            <GroupIcon />
          </VStack>
        </VStack>
      )}
    </Accordion>
  );
}
