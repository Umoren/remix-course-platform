import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';

import RemixLogo from "/images/remix.jpg"

export default function CoursesCard() {
    return (
        <Box>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'330px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={RemixLogo}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        Remix Jokes
                    </Heading>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'lowercase'}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
                        labore nesciunt. Suscipit non odit vero
                        dolore veritatis ratione minus hic, ab culpa at aliquid
                        architecto sint asperiores eligendi deserunt inventore.
                    </Text>
                </Stack>
            </Box>
        </Box>
    )
}