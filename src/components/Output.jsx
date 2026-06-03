import { Box, Text, Button } from '@chakra-ui/react'
import { toaster } from './ui/toaster'
import { executeCode } from '../api';
import { useState } from 'react';

const Output = ({ editorRef, language }) => {

    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () =>
    {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try
        {
            setIsLoading(true);
            const {run: result} = await executeCode(language, sourceCode);
            setOutput(result.output);
            result.stderr ? setIsError(true) : setIsError(false);
        }
        catch (error)
        {
            console.log(error);
            toaster.create({
                title: "An error occurred",
                description: error.message || "Unable to run code",
                type: "error",
                duration: 6000,
            });
        }
        finally
        {
            setIsLoading(false);
        }
    }

  return (
    <Box width="50%">
        <Text mb={2} fontSize="lg" color="gray.400">Output: </Text>
        <Button variant="outline" color="white" borderColor="gray.700" mb={4}
            onClick={runCode}
            loading={isLoading}
        >
            Run Code
        </Button>
        <Box 
            color={isError ? "red.400" : ""}
            height="75vh" 
            bg="gray.900"  
            p={2} 
            border="1px solid"
            borderRadius={4}
            borderColor={isError ? "red.500" : "#482050"}
        >
            {output ? output : 'Click "Run Code" to see the output...'}
        </Box>
    </Box>
  )
}

export default Output