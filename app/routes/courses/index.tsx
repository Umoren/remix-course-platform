import { Container } from '@chakra-ui/react';
import CoursesCard from '~/components/CoursesCard';

export default function CoursesIndexRoute() {
    return (
        <Container maxW="1200px">
            <h1> All Remix Tutorial Courses</h1>

            <CoursesCard />

        </Container>
    );
}