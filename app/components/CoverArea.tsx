import { Box, Heading, Stack, Button, Text } from "@chakra-ui/react"

export default function CoverArea() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" maxW="60ch">
            <Heading size="2xl" noOfLines={4} mb="8" textAlign="center">
                Learn How to Build Modern Websites with Remix Run
            </Heading>
            <Text textAlign="center" mb="8">
                Remix is a full stack web framework that lets you focus on the user interface and work back through
                web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.
            </Text>

            <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='teal' variant='solid'>
                    Read the Docs
                </Button>
                <Button
                    colorScheme='teal'
                    variant='outline'
                    as={'a'}
                    href="/courses"
                >
                    View Courses
                </Button>
            </Stack>
        </Box>
    )
}