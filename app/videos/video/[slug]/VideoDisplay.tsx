import { PrismaClient } from "@prisma/client"

export default async function VideoInfo( {videoId}: { videoId : number } ) {
 const prisma = new PrismaClient()
 const video = await prisma.Video.findUnique({
     where: {
        id: Number(videoId),
        },
    })

    return(<div>{video.name}</div>)
}
