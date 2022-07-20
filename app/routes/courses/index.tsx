import { Container, Grid, Heading } from '@chakra-ui/react';
import CoursesCard from '~/components/CoursesCard';
import { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"
import type { Course } from "@prisma/client";
import { db } from "~/utils/db.server";
import { Link, useLoaderData } from "@remix-run/react";

type LoaderData = {
    courseItems: Array<Course>;
}

export const loader: LoaderFunction = async () => {
    const data: LoaderData = {
        courseItems: await db.course.findMany(),
    };
    return json(data);
}

export default function CoursesIndexRoute() {
    const data = useLoaderData<LoaderData>();
    return (
        <Container maxW="1200px" mb="24" >
            <Heading size="2xl" my="12"> All Remix Courses</Heading>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={12}
                columnGap={4}
            >
                {data.courseItems.map((course) => (
                    <CoursesCard
                        key={course.id}
                        url={course.url}
                        author={course.author}
                        title={course.title}
                        content={course.content}
                    />
                ))}

            </Grid>


        </Container>
    );
}
export function ErrorBoundary({ error }: { error: Error }) {
    return (
        <div className="error-container">
            <h1>App Error</h1>
            <pre>{error.message}</pre>
        </div>
    );
}