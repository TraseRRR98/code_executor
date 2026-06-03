import { Box, Text, Button } from '@chakra-ui/react'
import { executeCode } from '../api';
import { useState } from 'react';

const Output = ({ editorRef, language }) => {

    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const runCode = async () =>
    {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try 
        {
            setIsLoading(true);
            const {run:result} = await executeCode(language, sourceCode);
            setOutput(result.output);
        }
        catch (error)
        {
            console.log(error.response?.data);
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
        >
            Run Code
        </Button>
        <Box 
            height="75vh" 
            bg="gray.900"  
            p={2} 
            border="1px solid #482050"
            borderRadius={4}
        >
            {output ? output : 'Click "Run Code" to see the output...'}
        </Box>
    </Box>
  )
}

export default Output