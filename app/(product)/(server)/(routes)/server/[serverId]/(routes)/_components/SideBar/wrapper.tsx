'use client'

import { cn } from "@/lib/utils";
import { useSidebar } from "@/zustand/use-sidebar";

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper = ({
    children,
}: WrapperProps) => {
    const { collapsed } = useSidebar((state) => state)
    
    return (  
        <aside
            className={cn(
                "fixed left-0 flex flex-col w-60  h-full dark:bg-[#141414] border-r border-[#2D2E35] z-[49]",
                collapsed && 'w-[70px]'
            )}
        >
            {children}
        </aside>
    );
}
 
export default Wrapper;