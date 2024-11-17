import { createVideo } from './add/page';

export default function AddVideoForm() {
    return (
        <form action={createVideo}>
            <label>
                Video Name: <input type="text" name="videoname" placeholder="Name" />
            </label>
            <label>
                Runtime: <input type="text" name="runtime" placeholder="Runtime" />
            </label>
            <button type="submit">Add</button>
        </form>
    );
}
