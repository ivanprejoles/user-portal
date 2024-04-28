import CentralHeader from "../../../_components/central-header";
import ContentArranger from "../../../_components/content-arranger";
import ContentScroll from "../../../_components/content-scroll";

import { dashboard } from "@/lib/searchParams";

const DashboardPage = () => {
    return (  
        <>
            <CentralHeader title="Dashboard" />
            <ContentArranger data={dashboard} />
            <ContentScroll>
                <div>dsadsa</div>
            </ContentScroll>
        </>
    );
}
 
export default DashboardPage;