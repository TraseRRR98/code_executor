import { Box, Text, Button } from '@chakra-ui/react'
import { executeCode } from '../api';

const Output = ({ editorRef, language }) => {

    const runCode = async () =>
    {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try 
        {
            const {} = await executeCode(language, sourceCode);
        }
        catch (error)
        {
            console.log(error.response?.data);
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
            test
        </Box>
    </Box>
  )
}

export default Output