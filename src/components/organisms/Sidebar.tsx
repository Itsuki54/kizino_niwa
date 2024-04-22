import { Accordion, Box, VStack } from '@chakra-ui/react';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

import { SidebarItem } from '@/components/atoms/SidebarItem';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Accordion height="100vh" width={isOpen ? '200px' : '64px'}>
      {isOpen ? (
        <VStack padding="8px">
          <Box alignItems="flex-end">
            <MenuIcon
              onClick={() => setIsOpen(!isOpen)}
              style={{
                cursor: 'pointer',
                fontSize: '32px',
              }}
            />
          </Box>
          <VStack align="flex-start">
            <SidebarItem icon={<HomeIcon />} route="/" title="ホーム" />
            <SidebarItem icon={<FeedIcon />} route="/articles" title="記事一覧" />
            <SidebarItem icon={<GroupIcon />} route="/groups" title="グループ" />
          </VStack>
        </VStack>
      ) : (
        <VStack padding="8px">
          <MenuIcon
            onClick={() => setIsOpen(!isOpen)}
            style={{
              cursor: 'pointer',
              fontSize: '32px',
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
