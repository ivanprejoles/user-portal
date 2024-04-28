import prisma from "@/prisma/db";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import CreateServerModal from "@/components/general/modals/create-server-modal";
import { initialProfile } from "@/lib/initial-profil";

const SetupServerPage = async () => {
    const { userId } = auth()
    
    if (!userId) {
        return redirectToSignIn()
    }

    const profile = await initialProfile(userId)

    
    if (profile?.servers && profile?.servers.length > 0) {
        return redirect(`/server/${profile.servers[0].id}`)
    }
    
    return (  
        <CreateServerModal />
    );
}
 
export default SetupServerPage;