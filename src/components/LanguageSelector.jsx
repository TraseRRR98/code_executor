import { Box, Text, Menu, Button } from '@chakra-ui/react';
import { LANGUAGES_VERSIONS } from '../constants';

const languages = Object.entries(LANGUAGES_VERSIONS);

const LanguageSelector = () => {
    return (
        <Box>
            <Text mb={2} fontSize="lg" color="gray.500">Language: </Text>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button>Python</Button>
                </Menu.Trigger>
                <Menu.Positioner>
                    <Menu.Content>
                        {languages.map(([language, version]) => (
                            <Menu.Item key={language} value={language}>
                                {language}
                                &nbsp;
                                <Text as="span" fontSize="sm" color="gray.500">
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
