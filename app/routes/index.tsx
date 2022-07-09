import { Box, Container } from '@chakra-ui/react'
import CoverArea from '~/components/CoverArea';
export default function IndexRoute() {
    return (
        <Container
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            maxW='1200px'
            minH="80vh"
        >
            <Box>
                <CoverArea />
            </Box>
        </Container>
    );
}