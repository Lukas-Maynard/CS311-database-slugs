import { useState } from "react";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Home() {

  const video = await prisma.video.findUnique({
    where: { id: 10}
  });

  return (
    <div id="content">
      <ul>
       {video.name} - {video.votes}
       </ul>
    </div>    
  );
}
