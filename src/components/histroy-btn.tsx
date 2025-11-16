import {ChevronLeft} from "lucide-react";
import {useEffect, useState} from "react";
import {useNavigate, useNavigationType} from "react-router";


export const PrevHisBtn = () => {
    const navigate = useNavigate();
    const navType = useNavigationType();
    const [disabled, setDisabled] = useState(navType === "POP");
    const handlePrevPage = () => {
        if (disabled) return;
        navigate(-1);
    }
    useEffect(() => {
        setDisabled(navType === "POP");
    }, [navType])

    return (
        <span onClick={handlePrevPage}
              className={` border flex size-[38px] items-center justify-center rounded-full  ${disabled ? "bg-slate-600/10 cursor-not-allowed" : "bg-slate-600/20 cursor-pointer hover:bg-slate-600/30"}  text-white`}>
            <ChevronLeft/>
        </span>

    )
}
