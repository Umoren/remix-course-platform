export default function AddCourseRoute() {
    return (
        <div>
            <p>Add your Remix Course</p>
            <form method="post">
                <div>
                    <label>
                        Course Title: <input type="text" name="title" />
                    </label>
                </div>
                <div>
                    <label>
                        Course Title: <input type="text" name="author" />
                    </label>
                </div>
                <div>
                    <label>
                        Description: <textarea name="description" />
                    </label>
                </div>
                <div>
                    <label>
                        Course URL: <input type="url" name="url" />
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}