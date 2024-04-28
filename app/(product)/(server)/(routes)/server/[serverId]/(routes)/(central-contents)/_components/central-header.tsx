'use client'

import { Separator } from "@/components/ui/separator";

interface CentralHeader {
    title: string
}

const CentralHeader = ({
    title
}: CentralHeader) => {
    return ( 
        <>
            <div className="w-full h-auto p-4 ">
                <div className="h-auto sm:w-[300px]  md:w-[500px] overflow-hidden text-ellipsis text-2xl font-light flex-wrap">{title}</div>
            </div>
            <Separator /> 
        </> 
    );
}
 
export default CentralHeader;