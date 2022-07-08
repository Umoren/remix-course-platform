import type { LinksFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';


export default function IndexRoute() {
    return (
        <section className="container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <h1> Remix Courses</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="courses">Courses</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <p> This is the course repository for remix Tutorials.</p>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, voluptatem nesciunt.
                    Perspiciatis, blanditiis enim dolores qui minus laudantium corrupti molestiae, facilis doloribus
                    accusantium neque rem culpa necessitatibus eum quidem. Perspiciatis!
                </p>

                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, voluptatem nesciunt.
                    Perspiciatis, blanditiis enim dolores qui minus laudantium corrupti molestiae, facilis doloribus
                    accusantium neque rem culpa necessitatibus eum quidem. Perspiciatis!
                </p>

                <Link to="/courses">
                    <button className="button"> Explore Courses </button>
                </Link>
            </div>
        </section>
    );
}