import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface PostProps {
    profileImage: string,
    name: string,
    date: string,
    context: string,
    content: string,
}

const Post = ({
    profileImage,
    name,
    date,
    context,
    content
}: PostProps) => {
    return (  
        <div className="w-full h-auto rounded-md bg-white dark:bg-[#292929] shadow-sm px-3 py-4 border">
            <div className="w-full h-auto flex justify-between py-2 text-xs md:text-md">
                <div className="w-auto h-full items-center flex gap-3">
                    {/* <p className="font-normal text-sm hidden lg:block">Issue approved by</p> */}
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={profileImage}/>
                        <AvatarFallback>NA</AvatarFallback>
                    </Avatar>
                    <p className="font-medium hidden md:block">{name}</p>
                </div>
                <div className="w-auto  items-center flex gap-2">
                    <p className="font-medium ">{date}</p>
                </div>
            </div>
            <Separator />
            <div className="my-2 rounded-md w-full aspect-square" style={{ position: 'relative' }}>
                <Image
                    className="rounded-md "
                    alt="issue post"
                    layout="fill"
                    objectFit="cover"
                    src={context}
                />
            </div>
            <div className="text-sm font-medium pt-3">
            {content}
            </div>
        </div>
    );
}
 
export default Post;