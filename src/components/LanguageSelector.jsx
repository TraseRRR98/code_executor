import { Box, Text, Menu, Button } from '@chakra-ui/react';
import { LANGUAGES_VERSIONS, LANGUAGE_DISPLAY_NAMES } from '../constants';

const languages = Object.entries(LANGUAGES_VERSIONS);
const ACTIVE_COLOR = "#482050";
const LanguageSelector = ({ language, onSelect }) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg" color="gray.400">Language: </Text>
            <Menu.Root isLazy>
                <Menu.Trigger asChild>
                    <Button color="#482050">{LANGUAGE_DISPLAY_NAMES[language] ?? language}</Button>
                </Menu.Trigger>
                <Menu.Positioner>
                    <Menu.Content  bg="#482050" color="white">
                        {languages.map(([lang, version]) => (
                            <Menu.Item key={lang}
                            color={language === lang ? "white" : ""}
                            bg={language === lang ? "gray.900" : "transparent"}
                            borderRadius="sm"
                            _hover=
                            {
                                {
                                    color:"white",
                                    bg: "gray.800",
                                    borderRadius:"sm",
                                }
                            }
                            onClick={() => onSelect(lang)}>
                                {LANGUAGE_DISPLAY_NAMES[lang] ?? lang}
                                &nbsp;
                                <Text fontSize="sm" color="gray.500">
                                    {version}
                                </Text>
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Menu.Root>
        </Box>
    );
};

export default LanguageSelector;
