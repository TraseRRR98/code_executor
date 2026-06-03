import { Box, Text, Button } from '@chakra-ui/react'

const Output = ({ editorRef, language }) => {

    const runCode = async () =>
    {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try 
        {
            
        }
        catch (error)
        {

        }
    }

  return (
    <Box width="50%">
        <Text mb={2} fontSize="lg" color="gray.400">Output: </Text>
        <Button variant="outline" color="white" borderColor="gray.700" mb={4}>
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