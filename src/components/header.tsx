import {PrevHisBtn} from "@/components/histroy-btn";
import {Input} from "@/components/ui/input";
import {Avatar} from "@/components/ui/avatar";
import {useSelector} from "react-redux";
import type {RootState} from "@/common/store";

export const Header = () => {
    const user = useSelector((state: RootState) => state.auth.value);

    return (
        <header className='p-4 flex items-center gap-10 justify-between'>
            <div className="flex items-center gap-10 w-full">
                <div className="flex items-center gap-4">
                    <PrevHisBtn/>
                </div>
                <form action="/search" className='w-full'>
                    <Input type='search' placeholder="搜索音乐/视频" className="max-w-[300px] w-full"/>
                </form>
            </div>
            <Avatar></Avatar>
        </header>
    )
}