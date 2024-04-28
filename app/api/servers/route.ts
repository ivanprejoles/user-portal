import {v4 as uuidv4} from 'uuid'
import prisma from "@/prisma/db"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import { MemberRole } from '@prisma/client'

export async function POST (req: Request) {
    try {
        const { userId } = auth()
        const {name, imageUrl} = await req.json()

        console.log(userId, name, imageUrl)
        if (!userId) {
            return new NextResponse('Unauthorized', {status: 401})
        }

        const server = await prisma.server.create({
            data: {
                name,
                imageUrl,
                inviteCode: uuidv4(),
                profileId: userId,
                members: {
                    create: [{
                        profileId: userId, // Reference current user's profile (Clerk)
                        role: MemberRole.ADMIN // Or desired role from MemberRole enum
                    }]
                }
            }
        });

        return NextResponse.json(server)

    } catch (error) {
        console.log('[CREATE_SERVER] ', error)
        return new NextResponse('[Create Server] [Internal] :', {status: 500})
    }
}