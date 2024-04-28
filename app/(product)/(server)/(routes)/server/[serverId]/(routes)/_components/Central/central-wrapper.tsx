'use client'

import { useMediaQuery } from "usehooks-ts";
import CentralHeader from "../../(central-contents)/_components/central-header";
import { useSidebar } from "@/zustand/use-sidebar";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CentralWrapperProps {
    children: React.ReactNode
}

const CentralWrapper = ({
    children
}: CentralWrapperProps) => {
    const matches = useMediaQuery('(max-width: 1024px)')
    const {
        collapsed,
        onCollapse,
        onExpand
    } = useSidebar((state) => state)

    useEffect(() => {
        if (matches) {
            onCollapse()
        } else {
            onExpand()
        }
    }, [matches, onCollapse, onExpand])
    
    return (
        <div className={cn(
            ' h-full w-full relative',
            collapsed ? 'pl-[70px]' : 'pl-[70px] lg:pl-60'
        )}>
            <main className="h-full w-full flex flex-col ">
                {children}
            </main>
        </div>  
    );
}
 
export default CentralWrapper;