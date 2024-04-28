import { gallery } from "@/lib/searchParams";
import CentralHeader from "../../../_components/central-header";
import ContentArranger from "../../../_components/content-arranger";
import ContentScroll from "../../../_components/content-scroll";

const GalleryPage = () => {
    return (  
        <>
            <CentralHeader title="Gallery" />
            <ContentArranger data={gallery} />
            <ContentScroll>
                <div>dsadsa</div>
            </ContentScroll>
        </>
    );
}
 
export default GalleryPage;