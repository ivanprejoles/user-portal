'use client'

import { UserButton } from "@clerk/nextjs";

import { MainLogo } from "@/components/general/MainLogo";
import { ModeToggle } from "@/components/general/Mode-toggle";
import { Separator } from "@/components/ui/separator";

const NavigationBar = () => {
    
    return (  
        <nav className="fixed top-0 w-full h-16 z-[50] shadow-sm dark:bg-[#292929] bg-[#ffffff]">
            <div className="flex justify-between px-2 lg:px-4 items-center h-full w-full">
                <MainLogo />
                <div className="p-0 flex gap-4 w-auto h-auto items-center">
                    <ModeToggle />
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: 'h-[36px] w-[36px]'
                            }
                        }}
                    />
                </div>
            </div>
            <Separator />
        </nav>
    );
}
 
export default NavigationBar;