import { auth } from "@clerk/nextjs";
import prisma from "@/prisma/db";

const validateProfile = async () => {
    const {userId} = auth()

    if (!userId) {
        return null
    }
    
    const profile = await prisma.profile.findUnique({
        where: {
            userId
        },
        select: {
            userId: true
        }
    })

    return profile
}
 
export default validateProfile;