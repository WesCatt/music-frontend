import {FaGoogle} from "react-icons/fa";
import {useGoogleLogin} from "@react-oauth/google";

interface GoogleLoginBtnProps {
    onLogin: () => void;
}

const GoogleLoginBtn = (props: GoogleLoginBtnProps) => {

    const {onLogin} = props;

    const login = useGoogleLogin({
        onSuccess: tokenResponse => onLogin(tokenResponse?.code,'GOOGLE'),
        flow: 'auth-code',
    });

    const handleGoogleLogin = () => {
        login();
    }


    return (
        <div onClick={handleGoogleLogin} role={'button'}
             className='bg-white/20 hover:bg-white/30 cursor-pointer rounded-full !p-2'>
            <FaGoogle/>
        </div>
    )
}

export default GoogleLoginBtn;