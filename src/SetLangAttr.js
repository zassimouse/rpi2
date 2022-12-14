import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const SetLangAttr = () => {
    const location  = useLocation();
    useEffect(() => {
        document.documentElement.setAttribute("lang", location.pathname.slice(1, 3));
    }, [location]);
}
export default SetLangAttr;