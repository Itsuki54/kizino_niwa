import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from '@mui/icons-material/Search';

export function SearchArticle() {
  return (
    <Box color="black">
      <InputGroup margin={2} width={64}>
        <InputLeftElement margin={2}>
          <SearchIcon />
        </InputLeftElement>
        <Input backgroundColor="white" margin={2} placeholder="Search" width={64} />
      </InputGroup>
    </Box>
  );
}
