import { Box } from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor'
import LanguageSelector from './components/LanguageSelector'

function App() 
{
  return (
    <Box minH="100vh" bg="#35063e" color="#fff" px={6} py={10}>
      <CodeEditor />
    </Box>      
    );
}

export default App
