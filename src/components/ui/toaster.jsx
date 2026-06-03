// This component is used to render the toaster
import { createToaster, Toaster as ChakraToaster, Toast } from '@chakra-ui/react'

export const toaster = createToaster({
    placement: "bottom-end",
    pauseOnPageIdle: true,
})

export const Toaster = () => (
    <ChakraToaster toaster={toaster} insetInline={{ mdDown: "auto" }}>
        {(toast) => (
            <Toast.Root
                type={toast.type}
                bg="gray.900"
                border="1px solid"
                borderColor={toast.type === "error" ? "red.500" : "#482050"}
                borderRadius="md"
                px={4}
                py={3}
                minW="280px"
                boxShadow="lg"
            >
                <Toast.Title color="white" fontWeight="bold" fontSize="sm">
                    {toast.title}
                </Toast.Title>
                <Toast.Description color="gray.400" fontSize="sm">
                    {toast.description}
                </Toast.Description>
                <Toast.CloseTrigger color="gray.400" _hover={{ color: "white" }} />
            </Toast.Root>
        )}
    </ChakraToaster>
)
