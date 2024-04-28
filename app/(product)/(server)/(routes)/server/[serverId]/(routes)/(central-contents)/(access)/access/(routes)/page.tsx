import CentralHeader from "../../../_components/central-header";
import ContentArranger from "../../../_components/content-arranger";
import ContentScroll from "../../../_components/content-scroll";

import { access } from "@/lib/searchParams";

const AccessPage = () => {
    return (  
        <>
            <CentralHeader title="Access" />
            <ContentArranger data={access} />
            <ContentScroll>
                <div>dsadsa</div>
            </ContentScroll>
        </>
    );
}
 
export default AccessPage;