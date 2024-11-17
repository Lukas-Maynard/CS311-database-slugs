// videos/page.tsx
import { PrismaClient } from '@prisma/client';
import AddVideoForm from './addVideoForm';

export default async function Page() {
    const prisma = new PrismaClient();

    // Get ALL the videos
    let videos = await prisma.video.findMany();

    const videoList = videos.map((video) => (
        <li key={video.id}>
            <a href={`/videos/video/${video.id}`}>{video.name}</a>
            <a href={`/videos/update/${video.id}`}>[edit]</a>
        </li>
    ));

    return (
        <div>
            <h1>Add video</h1>
            <AddVideoForm />
            <h2>Videos</h2>
            <ul>{videoList}</ul>
        </div>
    );
}
