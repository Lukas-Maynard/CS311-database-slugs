import { PrismaClient } from "@prisma/client";
import VideoInfo from './VideoDisplay'


export default function Page( {params}: { params: { slug: number } } ) {

    return(<div>
        <VideoInfo videoId={params.slug} />
    </div>)
}
    


    /*
    const prisma = new PrismaClient()
   
    
   const video = await prisma.video.findUnique({
    where: {
            id: params.slug,
        },
    })
        */