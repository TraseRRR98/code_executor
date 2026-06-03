// This component is used to render the code editor and the output
import { useState, useRef } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import Output from './Output';

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState(CODE_SNIPPETS["python"]);
    const [language, setLanguage] = useState("python");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) =>
    {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
    }

    return (
        <Box>
        <HStack spacing={4}>
            <Box width="50%">
                <LanguageSelector language={language} onSelect={onSelect}/>
                    <Editor 
                        height="75vh" 
                        theme="vs-light" 
                        language={language} 
                        value={value}
                        onMount={onMount}
                        onChange={
                            (value) => setValue(value)
                        } 
                    />
            </Box>
            <Output editorRef={editorRef} language={language}/>
        </HStack>
        </Box>
    )
}

export default CodeEditor;