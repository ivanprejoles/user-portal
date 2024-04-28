'use client'

import Hint from "@/components/general/hint";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/zustand/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useParams } from "next/navigation";

interface StoreSwitcherProps {
    items: Record<string, any>[];
}

const Toggle = ({
    items
}: StoreSwitcherProps) => {
    const {
        collapsed,
        onCollapse,
        onExpand
    } = useSidebar((state) => state)
    const Params = useParams()
    const currentStore = items.find((item) => item.id === Params?.serverId)

    const label = collapsed ? 'Expand' : 'Collapse'
    
    return (  
        <>
            {collapsed && (
                <div className="hidden lg:flex w-full items-center justify-center pt-4 ">
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onExpand}
                            className="h-auto p-2"
                            variant="ghost"
                        >
                            <ArrowRightFromLine className="h-4 w-4"/>
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="p-3 pl-6 flex items-center w-full">
                    <p className="font-semibold text-primary">
                        {currentStore?.createdAt}
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button 
                            onClick={onCollapse}
                            className="h-auto p-2 ml-auto" 
                            variant="ghost" 
                        >
                            <ArrowLeftFromLine className="h-4 w-4"/>
                        </Button>
                    </Hint>
                </div>
            )}
        </>
    );
}
 
export default Toggle;