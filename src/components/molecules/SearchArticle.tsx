import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";

export function SearchArticle() {
    return (
        <Box color="black">
            <InputGroup width={64} margin={2}>
                <InputLeftElement margin={2}>
                    <SearchIcon />
                </InputLeftElement>
                <Input
                    placeholder="Search"
                    width={64}
                    margin={2}
                    backgroundColor="white"
                />
            </InputGroup>
        </Box>
    );
}
