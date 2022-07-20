import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
    await Promise.all(
        getCourses().map((course) => {
            return db.course.create({ data: course });
        })
    );
}

seed();

function getCourses() {
    // shout-out to https://icanhazdadjoke.com/

    return [


    ];
}