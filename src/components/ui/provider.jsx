import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'

export function Provider({ children }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" forcedTheme="dark" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
