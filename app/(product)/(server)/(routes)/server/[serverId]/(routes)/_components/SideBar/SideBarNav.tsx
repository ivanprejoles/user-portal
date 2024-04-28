import ServerSwitcher from "./server-switcher";
import Wrapper from "./wrapper";
import Toggle from "./toggle";
import getServers from "@/server-request/get-servers";
import SideBarMenu from "./side-menu";
import SideBarScrollWrapper from "./scroll-wrapper";


const SidebarNavigation = async () => {
    const servers = await getServers()

    return ( 
        <Wrapper>
            <Toggle items={servers} />
            <ServerSwitcher items={servers}/>
            <SideBarScrollWrapper>
                <SideBarMenu items={servers} />
            </SideBarScrollWrapper>
        </Wrapper>
    )
}
 
export default SidebarNavigation;