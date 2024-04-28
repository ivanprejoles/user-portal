import { ScrollArea } from "@/components/ui/scroll-area";

interface ContentScrollProps {
    children: React.ReactNode,
}

const ContentScroll = ({
    children
}: ContentScrollProps) => {
    return (  
        <ScrollArea className="w-full h-full py-2 px-4 flex-1">
            {children}
        </ScrollArea>
    );
}
 
export default ContentScroll;