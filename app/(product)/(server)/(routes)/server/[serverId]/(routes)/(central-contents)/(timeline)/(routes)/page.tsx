import React, { useEffect, useState } from "react";

import Post from "../_components/post";
import ContentArranger from "../../_components/content-arranger";
import ContentScroll from "../../_components/content-scroll";
import CentralHeader from "../../_components/central-header";

import { 
    timeline,
} from "@/lib/searchParams";

const TimelinePage = () => {
    const data = new Array(10).fill(0)

    const [isFetching, setIsFetching] = useState(false)
    
    // [{}, {}, {}]
    const [posts, setPosts] = useState<any[]>([...data])
    
    // [0, 1, 1, 0]
    const [binaryPost] = useState<any[]>([])

    
    useEffect(() => {

    }, [binaryPost])

    const newdata =[
        {
            data: {

            },
            height:'',
        }, 
        {

        }
    ]
    
    return (
        <>
            {/* title here */}
            <CentralHeader  title="Timeline"/>
            {/* document menu */}
            <ContentArranger data={timeline } />
            <ContentScroll>
                <div className="sm:px-20 md:px-40 lg:px-56 py-4 flex flex-col gap-3">

                    {data && (data.map((item) => (
                        <Post
                            key={item}
                            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                            context="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2F_565bf507-24dc-4827-909f-c4caca68fc71?alt=media&token=f7a34fe8-b6de-47e6-bcb9-73aa8d4b841d"
                            date="April 26, 2024 12:23"
                            name="Ivan Prejoles"
                            profileImage="https://firebasestorage.googleapis.com/v0/b/emp-portal-b03eb.appspot.com/o/serverImage%2Fprofile?alt=media&token=b4a65d98-107f-4601-9793-3ba0e1989416"
                        />
                    )))}
                    
                </div>
            </ContentScroll>
        </>  
    );
}
 
export default TimelinePage;