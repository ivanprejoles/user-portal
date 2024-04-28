import CentralHeader from "../../../_components/central-header";
import ContentArranger from "../../../_components/content-arranger";
import ContentScroll from "../../../_components/content-scroll";

import { teams } from "@/lib/searchParams";

const TeamPage = () => {
    return (  
        <>
            <CentralHeader title="Teams" />
            <ContentArranger data={teams} />
            <ContentScroll>
                <div>dsadsa</div>
            </ContentScroll>
        </>
    );
}
 
export default TeamPage;