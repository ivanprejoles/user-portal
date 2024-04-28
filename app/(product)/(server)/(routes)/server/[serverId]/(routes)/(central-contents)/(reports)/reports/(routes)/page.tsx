import CentralHeader from "../../../_components/central-header";
import ContentArranger from "../../../_components/content-arranger";
import ContentScroll from "../../../_components/content-scroll";

import { reports } from "@/lib/searchParams";

const ReportPage = () => {
    return (  
        <>
            <CentralHeader title="Reports" />
            <ContentArranger data={reports} />
            <ContentScroll>
                <div>dsadsa</div>
            </ContentScroll>
        </>
    );
}
 
export default ReportPage;