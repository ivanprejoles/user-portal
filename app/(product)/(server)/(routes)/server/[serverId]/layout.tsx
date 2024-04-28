import { redirect } from "next/navigation";
import prisma from "@/prisma/db";

import validateProfile from "@/lib/validate-profile";

import SidebarNavigation from "./(routes)/_components/SideBar/SideBarNav";
import NavigationBar from "./(routes)/_components/NavBar/NavigationBar";
import CentralWrapper from "./(routes)/_components/Central/central-wrapper";

const ServerLayout = async ({
    children,
    params
}: {
    children: React.ReactNode,
    params: {userId: string}
}) => {

    const validated = await validateProfile()

    if (!validated) {
        return redirect('/')
    }

    const servers = await prisma.server.findMany({
        where: {
            members: {
                some: { 
                    profileId: validated.userId,
                }
            }
        },
        select: {
           id: true,
           name: true
        }
    })


    return ( 
        <>
            <NavigationBar />
            <div className="pt-16 w-full h-full dark:bg-[#141414] bg-gray-100  ">
                <SidebarNavigation />
                <CentralWrapper>
                    {children}
                </CentralWrapper>
            </div>
        </>
    );
}
 
export default ServerLayout;