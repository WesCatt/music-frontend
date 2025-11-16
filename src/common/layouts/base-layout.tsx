import {Outlet} from "react-router";
import {Header} from "../../components/header.tsx";
import {SideBar} from "../../components/side-bar.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

const BaseLayout = () => {


    return (
        <div className="flex h-full w-full">
            <SideBar></SideBar>
            <main className='flex flex-col w-full overflow-hidden'>
                <Header></Header>
                <ScrollArea id='main-container'  className="h-full px-4 overflow-auto">
                        <Outlet></Outlet>
                </ScrollArea>
            </main>
        </div>
    )
}

export default BaseLayout;