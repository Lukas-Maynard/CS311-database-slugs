import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';
import AddVideoForm from "../addVideoForm";

export async function createVideo(formData: FormData) {
    'use server';
    const prisma = new PrismaClient();
    await prisma.video.create({
        data: {
            name: String(formData.get('videoname')),
            url: "test",
            votes: 0,
            length: Number(formData.get('runtime')),
        },
    });
    redirect('/videos');
}

export default async function Page() {
    return (
        <AddVideoForm />
    );
}