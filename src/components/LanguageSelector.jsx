import { Box, Text, Menu, Button, MenuButton, MenuItem, MenuList, MenuItemGroup, MenuSeparator, MenuArrow, MenuCheckboxItem, MenuRadioItem, MenuRadioGroup } from '@chakra-ui/react';


const LanguageSelector = () => {
    return (
        <Box>
            <Text mb={2} fontSize="lg" color="gray.500">Language: </Text>
            <Menu>
                <MenuButton as={Button}>Python</MenuButton>
                <MenuList>
                    <MenuItem>Python</MenuItem>
                    <MenuItem>C++</MenuItem>
                    <MenuItem>PHP</MenuItem>
                    <MenuItem>Java</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector;