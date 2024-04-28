import prisma from "@/prisma/db"
import { auth, currentUser, redirectToSignIn } from "@clerk/nextjs"


export const initialProfile = async (userId: string) => {
    const user = await currentUser()

    if (!user) {
        return redirectToSignIn()
    }

    const profile = await prisma.profile.findUnique({
        where: {
            userId: user.id
        },
        include: {
            servers: {
                take: 1,
                select: {
                    id: true,
                }
            }
        }
    })

    if (profile) {
        console.log(profile)
        return profile
    }

    const name = `${user.firstName} ${(user.lastName ? user.lastName : '')}`
    const newProfile = await prisma.profile.create({
        data: {
            userId: user.id,
            name: name,
            email: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl,
        }
    })
    
    return newProfile
}