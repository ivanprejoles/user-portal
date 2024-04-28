import { redirectToSignIn } from "@clerk/nextjs"
import prisma from "@/prisma/db"
import validateProfile from "@/lib/validate-profile"

const getServers = async () => {
    try {
        const validated = await validateProfile()
    
        if (!validated) {
            return redirectToSignIn()  
        }
    
        const servers: any = await prisma.server.findMany({
            where: {
                members: {
                    some: {
                        profileId: validated.userId,
                    }
                }
            },
            select: {
               id: true,
               name: true,
               imageUrl: true,
               createdAt: true,
               profileId: true
            }
        })
    
        Object.keys(servers).forEach((key) => {
            const { profileId, ...rest } = servers[key];
            rest.createdAt = servers[key].createdAt.toLocaleDateString();
            rest.authorized = (profileId === validated.userId);
            servers[key] = rest;
        });

        return servers
    } catch (error) {
        return []
    }
}

export default getServers