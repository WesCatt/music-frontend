import {Outlet} from "react-router";
import {Header} from "../components/header.tsx";
import {SideBar} from "../components/side-bar.tsx";

const BaseLayout = () => {


    return (
        <div className="flex h-full w-full">
            <SideBar></SideBar>
            <main className='flex flex-col w-full overflow-hidden'>
                <Header></Header>
                <section id='main-container' className="h-full overflow-auto">
                    <Outlet></Outlet>
                </section>
            </main>
        </div>
    )
}

export default BaseLayout;