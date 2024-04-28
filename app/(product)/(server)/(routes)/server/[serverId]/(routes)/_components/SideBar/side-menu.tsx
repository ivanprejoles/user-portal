'use client'

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { privateMenuItem, publicMenuItem } from "@/lib/menuItem";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/zustand/use-sidebar";
import Link from "next/link";
import { useParams } from "next/navigation";

interface SideBarMenuProps {
    items: Record<string, any>[];
}

const SideBarMenu = ({
    items
}: SideBarMenuProps) => {
    const { collapsed } = useSidebar((state) => state)
    const Params = useParams()
    const currentStore = items.find((item) => item.id === Params?.serverId)
    
    return (  
        <div className={cn(
            "w-60 h-auto p-2",
            collapsed && 'w-[70px]'
        )}>
            {publicMenuItem && (
                <>
                    <Separator />
                    {publicMenuItem.map((item, idx) => (
                        <Link href={`/server/${Params?.serverId}/${item.link}`} key={idx}>
                            <Button
                                variant='switch'
                                size='sidemenu'
                                role="button"
                                aria-label="Select a store"
                                className={cn(
                                    'w-full gap-8 justify-start flex dark:text-white py-6', 
                                    collapsed && 'px-0 justify-center'
                                )}
                            >
                                <item.menuIcon className="h-5 w-5" />
                                <p className={cn(
                                    "text-ellipsis overflow-hidden whitespace-nowrap",
                                    collapsed && 'hidden'
                                )}>
                                    {item.label}
                                </p>
                            </Button>
                        </Link>
                    ))}
                </>
            )}
            { (privateMenuItem && currentStore?.authorized) && (
                <>
                    <Separator />
                    {privateMenuItem.map((item, idx) => (
                        <Link href={`/server/${Params?.serverId}/${item.link}`} key={idx}>
                            <Button
                            variant='switch'
                            size='sidemenu'
                            role="button"
                            aria-label="Select a store"
                            className={cn(
                                'w-full gap-8 justify-start flex dark:text-white py-6',
                                collapsed && 'px-0 justify-center'
                            )}
                            >
                            <item.menuIcon className="h-5 w-5" />
                            <p className={cn(
                                "text-ellipsis overflow-hidden whitespace-nowrap",
                                collapsed && 'hidden'
                            )}>
                                {item.label}
                            </p>
                            </Button>
                        </Link>
                    ))}
                </>
            )}

        </div>
    );

}
 
export default SideBarMenu;