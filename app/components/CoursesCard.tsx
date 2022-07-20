import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Link,
} from '@chakra-ui/react';

import RemixLogo from "/images/remix.jpg"

interface CardOptionsType {
    title: string;
    url: string;
    author: string;
    content: string;
}

export default function CoursesCard({ title, url, author, content }: CardOptionsType) {
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
                    pos={'relative'}
                    height={'150px'}
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
                        objectFit={'cover'}
                        src="https://res.cloudinary.com/sammy365/image/upload/v1657384813/remix_yltvry.jpg"
                    />
                </Box>
                <Stack pt={10}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {title}
                    </Heading>
                    <Text>
                        <strong>Author:</strong>
                        <span> {author}</span>
                    </Text>
                    <Link href={url}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'lowercase'}>
                            {content}
                        </Text>
                    </Link>

                </Stack>
            </Box>
        </Box>
    )
}