import {
    Box,
    FormLabel,
    Input,
    Textarea,
    Button,
} from '@chakra-ui/react'
import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { db } from "~/utils/db.server";



export const action: ActionFunction = async ({
    request,
}) => {
    const form = await request.formData();
    const title = form.get("title");
    const content = form.get("content");
    const author = form.get("author");
    const url = form.get("url");

    if (
        typeof title !== "string" ||
        typeof content !== "string" ||
        typeof author !== "string" ||
        typeof url !== "string"
    ) {
        throw new Error(`Form not submitted correctly.`);
    }
    const fields = { title, content, author, url };

    const course = await db.course.create({ data: fields });
    console.log('course', course)
    return redirect(`/courses`);
}

export default function AddCourseRoute() {

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="baseline"
            m="auto"
            height="100vh"
            maxW="50%"
        >
            <form method="post">
                <FormLabel htmlFor='title'> Course Title </FormLabel>
                <Input id='title' type='text' name='title' />

                <FormLabel htmlFor='author' mt="4"> Author </FormLabel>
                <Input id='author' type='text' name='author' />

                <FormLabel htmlFor='content' mt="4">Course content</FormLabel>
                <Textarea placeholder='Here is a sample placeholder' name='content' />

                <FormLabel htmlFor='url' mt="4"> URL </FormLabel>
                <Input id='url' type='url' name='url' />

                <Button
                    colorScheme='teal'
                    variant='solid'
                    my="8"
                    type='submit'
                >
                    Submit Course
                </Button>
            </form>

        </Box>
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