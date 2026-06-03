import { Box, Text, Menu, Button } from '@chakra-ui/react';
import { LANGUAGES_VERSIONS } from '../constants';

const languages = Object.entries(LANGUAGES_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
    return (
        <Box>
            <Text mb={2} fontSize="lg" color="gray.400">Language: </Text>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button color="#482050">{language}</Button>
                </Menu.Trigger>
                <Menu.Positioner>
                    <Menu.Content  bg="#482050" color="white">
                        {languages.map(([language, version]) => (
                            <Menu.Item key={language} value={language} onClick={() => onSelect(language)}>
                                {language}
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
