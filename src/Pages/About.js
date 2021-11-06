import React, { Fragment } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../Styles/home.css'
import reactHelmet from 'react-helmet'

function About() {
    return (
        <Fragment>
            <reactHelmet>
                <title>Initial D | About</title>
            </reactHelmet>
            <div className="aboutUs">
                <div className="leftAbout"> <h2>About Inital D</h2>
                    <hr />
                    <p>Initial D (Japanese: 頭文字イニシャル D, Hepburn: Inisharu Dī) is a Japanese street racing manga series written and illustrated by Shuichi Shigeno. It was serialized in Kodansha's Weekly Young Magazine from 1995 to 2013, with the chapters collected into 48 tankōbon volumes. The story focuses on the world of illegal Japanese street racing, where all the action is concentrated in the mountain passes and rarely in cities or urban areas, and with the drifting racing style emphasized in particular.[4][5] Professional race car driver and pioneer of drifting Keiichi Tsuchiya helped with editorial supervision. The story is centered on the prefecture of Gunma, more specifically on several mountains in the Kantō region and in their surrounding cities and towns. Although some of the names of the locations the characters race in have been fictionalized, all of the locations in the series are based on actual locations in Japan.
                        <br/>
                        <br/>

                        Initial D has been adapted into several anime television and original video animations series by OB Studio Comet, Studio Gallop, Pastel, A.C.G.T and SynergySP. A live action film by Avex and Media Asia was released in 2005. Both the manga and anime series were initially licensed for English-language distribution in North America by Tokyopop (2002–2009),[6] however, the anime license has since been picked up by Funimation, while the manga was relicensed by Kodansha USA in 2019. </p>
                </div>
                <div className="rightAbout"></div>
            </div>

        </Fragment>
    )
}

export default About
