'use client'

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { Check, ChevronsUpDown, PlusCircle, Store as StoreIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";

import { useAddServer } from "@/zustand/modals/use-add-server";
import { useSidebar } from "@/zustand/use-sidebar";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Record<string, any>[];
}

const ServerSwitcher = ({ className, items = []} : StoreSwitcherProps ) => {
    const Params = useParams()
    const Router = useRouter()

    const [open, setOpen] = useState(false)

    const {onOpen} = useAddServer()

    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id,
        image: item.imageUrl,
        dateCreated: item.createdAt
    }))

    const currentStore = formattedItems.find((item) => item.value === Params?.serverId)
    const onStoreSelect = (store: { value: string, label: string, image: string, dateCreated: string }) => {
        setOpen(false)
        Router.push(`/server/${store.value}`)
    }

    const { collapsed } = useSidebar((state) => state)
    
    return (  
        <div className="p-2">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='switch'
                        size='switch'
                        role="combobox"
                        aria-expanded={open}
                        aria-label="Select a server"
                        className={cn(
                            'w-full justify-between flex dark:text-white dark:hover:bg-accent dark:bg-[#141414] gap-4 py-6 box-border', 
                            className,
                            collapsed && 'px-0 justify-center'
                        )}
                    >
                        <Avatar>
                            <AvatarImage src={currentStore?.image}/>
                            <AvatarFallback>NA</AvatarFallback>
                        </Avatar>
                        <p className={cn(
                            "text-ellipsis overflow-hidden whitespace-nowrap",
                            collapsed && 'hidden'
                        )}>
                            {currentStore?.label}
                        </p>
                        <ChevronsUpDown className={cn(
                            "ml-auto h-4 w-4 shrink-0 opacity-50",
                            collapsed && 'hidden'
                        )} />
                    </Button>
                </PopoverTrigger>        
                <PopoverContent className="w-[200px] p-0" >
                    <Command>
                        <CommandList>
                            <CommandInput placeholder="Search store..." />
                            <CommandEmpty>No store found.</CommandEmpty>
                            <CommandGroup heading="Servers">
                                {formattedItems.map((store) => (
                                    <CommandItem
                                        key={store.value}
                                        onSelect={() => onStoreSelect(store)}
                                        className="text-sm flex"
                                    >
                                        <StoreIcon className="mr-2 h-4 w-4" />
                                        <p className={cn(
                                            "h-full text-center text-ellipsis overflow-hidden whitespace-nowrap items-center",
                                        )}>
                                            {store?.label}
                                        </p>
                                        <Check
                                            className={cn(
                                                'ml-auto h-4 w-4',
                                                currentStore?.value === store.value
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                        <CommandSeparator/>
                        <CommandList>
                            <CommandGroup
                                onSelect={() => {
                                    setOpen(false)
                                }}
                            >
                                <CommandItem
                                    onSelect={onOpen}
                                >
                                    <PlusCircle className="mr-2 h-5 w-5" />
                                    Create Store
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
 
export default ServerSwitcher;