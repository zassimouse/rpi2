import './Home.css';
import React, {useEffect, useState} from "react";
import Developer from "../components/Developer";
import PersonOfDay from "../components/personOfDay";
import I18n from "../I18n";

const Home = ({ location }) => {
    document.title = I18n.getTranslation(location, 'home.title');
    const[navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        const navbar = document.querySelectorAll(".navigation");
        setNavHeight(navbar[0] == null ? 0 : navbar[0].clientHeight);
    }, [])
    return(
        <>
            <div className="main"
                   style={{
                       marginTop: -navHeight,
                       paddingTop: navHeight
                   }}>
                <div className="text-container">
                    <div className="ms-auto me-auto text-block">
                        <h2 className="main-name"><I18n t="home.caption" /></h2>
                        <p className="portal-description"><I18n t="home.description" /></p>
                    </div>
                </div>
                <div className="card-container">
                    <PersonOfDay location={location} index={new Date().getDate()}/>
                </div>
            </div>
            <div className="devs">
                <h5 className="devs-name"><I18n t="home.devsTitle" /></h5>
                <div className="devs-container">
                    <Developer
                               img="https://yt3.ggpht.com/ytc/AKedOLQIVFh_VdkchgIzC1z3mTjlEkUqXcv9xfpAyIP-NQ=s900-c-k-c0x00ffffff-no-rj"
                               name={I18n.getTranslation(location, 'home.name1')}
                               linkName="GitHub"
                               link="https://github.com/Katexa2525"/>
                    <Developer img="https://yt3.ggpht.com/ytc/AKedOLRh-l9HN_-3Sn_u_98DOlQvs0-5YMMQmAtJdMf6=s900-c-k-c0x00ffffff-no-rj"
                               name={I18n.getTranslation(location, 'home.name2')}
                               linkName="GitHub"
                               link="https://github.com/aaaaaa123b"/>
                    <Developer img="https://ru-static.z-dn.net/files/df2/4fbf67ca19a35244e1b2995ac0ea7b36.jpg"
                               name={I18n.getTranslation(location, 'home.name3')}
                               linkName="GitHub"
                               link="https://github.com/zassimouse"/>
                </div>
            </div>
        </>
    )
}
export default Home;