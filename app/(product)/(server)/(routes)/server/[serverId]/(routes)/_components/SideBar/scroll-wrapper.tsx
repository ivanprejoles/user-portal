import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface SideBarScrollWrapperProps {
    children: React.ReactNode
}

const SideBarScrollWrapper = ({
    children
}: SideBarScrollWrapperProps) => {
    return (  
        <ScrollArea className="flex-grow w-full pb-16" >
            {children}
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
}
 
export default SideBarScrollWrapper;