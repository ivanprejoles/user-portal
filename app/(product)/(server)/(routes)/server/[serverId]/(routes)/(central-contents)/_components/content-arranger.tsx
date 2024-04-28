'use client'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface ContentArrangerProps {
    data: {[key: string]: string[]}
}

const ContentArranger = ({
    data
}: ContentArrangerProps) => {
    const Router = useRouter();
    const Pathname = usePathname();
    const SearchParams = useSearchParams();                       
    const [searchData, setSearchData] = useState(data)
    const [ObjectKey, setKey] = useState<{[key:string]: string}>({})

    // initialize key
    useEffect(() => {
        const KeyLength = Object.keys(ObjectKey).length
        if (!KeyLength) {
            Object.entries(searchData).map(([key, values]) => {
                setKey((state) => ({
                    ...state,
                    [key]: values[0]
                }))
            })
        }
    }, [ObjectKey, searchData])

    // use for url parameter
    useEffect(() => {
        if (SearchParams) {
            const current = new URLSearchParams(Array.from(SearchParams.entries()));
    
            Object.entries(ObjectKey).map(([key, value]) => {
                current.set(key, value)
            })
            const search = current.toString();
            const query = search ? `?${search}` : "";
            
            Router.push(`${Pathname}${query}`);
        }
    }, [SearchParams, ObjectKey, Router, Pathname])
    
    const addKey = (key: string, value: string) => {
        setKey((state) => ({
            ...state,
            [key]: value}
        ))
    } 
    
    const ListItem = React.forwardRef<
        React.ElementRef<"a">,
        React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {

        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    })

    ListItem.displayName = "ListItem"
    
    return (
        <>
            <ScrollArea className="w-full px-4 py-2 items-center whitespace-nowrap border ">
                <NavigationMenu>
                    <NavigationMenuList>
                        {searchData && (Object.entries(searchData).map(([itemKey, values], key) => (                               
                            <NavigationMenuItem key={`${itemKey}_${key}`} >
                                <NavigationMenuTrigger>
                                    {itemKey}: {ObjectKey[itemKey]}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        {values.map((value, secondKey) => (
                                            <ListItem onClick={() => addKey(itemKey, value)} key={`${value}_${secondKey}`} title={value}/>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )))}
                    </NavigationMenuList>
                </NavigationMenu>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <Separator />
        </>  
    );
}
 
export default ContentArranger;