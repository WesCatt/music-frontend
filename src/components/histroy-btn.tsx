import {ChevronLeft} from "lucide-react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";


export const PrevHisBtn = () => {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    const handlePrevPage = () => {
        if (disabled) return;
        navigate(-1);
    }
    useEffect(() => {
        setDisabled(window.history.length <= 1);
    }, [])

    return (
        <span onClick={handlePrevPage}
              className={` border flex size-[38px] items-center justify-center rounded-full  ${disabled ? "bg-slate-600/10 cursor-not-allowed" : "bg-slate-500/60 cursor-pointer hover:bg-slate-500/50"}  text-white`}>
            <ChevronLeft/>
        </span>

    )
}
