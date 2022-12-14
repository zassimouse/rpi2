import "./Person.css"
import React, {useEffect, useState} from "react";
import {Button, Card, Carousel, Figure} from "react-bootstrap";
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {Map, Placemark, TypeSelector, YMaps} from "react-yandex-maps";
import I18n from "../I18n";
import data from "../resources/data/nolangData.json";

const Person = ({location, match: { params: { id } }, }) => {
    document.title = `${I18n.getTranslation(location, `persons.${id}.surname`)} ${I18n.getTranslation(location,
        `persons.${id}.name`)} ${I18n.getTranslation(location, `persons.${id}.patronymic`)}`.trimEnd();
    const timelineTimesColors = ['#f6ff93', '#d3fcdd', '#fde5b8'];
    const [mapsLang, setMapsLang] = useState(I18n.getTranslation(location, `person.mapLang`))
    useEffect(() => {
        setMapsLang(I18n.getTranslation(location, `person.mapLang`));
    }, [location]);
    const scrollVisiblePos = 220;
    window.onscroll = () => {
        const btnToTop = document.querySelector("#btn-to-top");
        if (btnToTop != null) {
            btnToTop.style.display =
                (document.body.scrollTop > scrollVisiblePos || document.documentElement.scrollTop > scrollVisiblePos) ? "block" : "none";
        }
    }
    return(
        <>
            <Button id="btn-to-top"
                    variant="dark"
                    title={I18n.getTranslation(location, `person.btnTopTitle`)}
                    onClick={() => window.scrollTo(0, 0)}><i className="bi-arrow-up"></i></Button>
            <div className="main-container">
                <div className="info-container p-2">
                    <Card border="secondary" className="avatar-card">
                        <Figure className="d-table">
                            <Figure.Image
                                className="avatar p-1"
                                src={require(`../resources/data/${id}/photos/avatar.jpg`)}
                            />
                            <Figure.Caption className="fig-caption">
                                <I18n t={`persons.${id}.img_captions.avatar`} />
                            </Figure.Caption>
                        </Figure>
                    </Card>
                    <h3 className="person-name">
                        <I18n t={`persons.${id}.surname`}/> <I18n t={`persons.${id}.name`}/> <I18n t={`persons.${id}.patronymic`}/>
                    </h3>
                    {(data[id]["birthdate"] != null || data[id]["dateOfDeath"] != null) &&
                        <table>
                            <tbody className="dates">
                            {data[id]["birthdate"] != null &&
                                <tr>
                                    <td className="pe-2"><span className="fw-bold"><I18n t="person.birthdateTitle"/></span>
                                    </td>
                                    <td>{data[id]["birthdate"]["day"] ?? ""} {data[id]["birthdate"]["month"] == null ? "" :
                                        <I18n
                                            t={`person.month${data[id]["birthdate"]["month"]}`}/>} {data[id]["birthdate"]["year"] ?? ""}
                                    </td>
                                </tr>
                            }
                            {data[id]["dateOfDeath"] != null &&
                                <tr>
                                    <td className="pe-2"><span className="fw-bold"><I18n
                                        t="person.dateOfDeathTitle"/></span></td>
                                    <td>{data[id]["dateOfDeath"]["day"] ?? ""} {data[id]["dateOfDeath"]["month"] == null ? "" :
                                        <I18n
                                            t={`person.month${data[id]["dateOfDeath"]["month"]}`}/>} {data[id]["dateOfDeath"]["year"] ?? ""}</td>
                                </tr>
                            }
                            </tbody>
                        </table>
                    }
                    <hr/>
                    <p className="description"><I18n t={`persons.${id}.description`}/></p>
                </div>
                <Timeline lineColor={'#dddddd'}>
                    {
                        data[id]["timelineTimes"].map((time, index) =>
                            <TimelineItem
                                key={index}
                                dateText={time}
                                dateInnerStyle={{
                                    background: timelineTimesColors[index % timelineTimesColors.length],
                                    color: '#000'
                                }}
                                bodyContainerStyle={{background: '#f6f6f6',
                                    padding: '1rem',
                                    borderRadius: '2px',
                                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'}}>
                                <p style={{fontSize: '1.5rem'}}><I18n t={`persons.${id}.timeline.text${index}`} /></p>
                            </TimelineItem>
                        )
                    }
                </Timeline>
                <Carousel interval={null} className="images-carousel">
                    {
                        Object.entries(data[id]["gallery"]).map(([key, val], index) =>
                            <Carousel.Item key={index} className="text-center">
                                <img
                                    className="item-image"
                                    src={require(`../resources/data/${id}/photos/gallery/${key}`)}
                                    alt={`${index + 1}`}
                                />
                                <Carousel.Caption className="images-caption">
                                    <p><I18n t={`persons.${id}.img_captions.${val}`} /></p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
                <div className="video-container">
                    <iframe className="yt-video"
                        src={`https://www.youtube.com/embed/${data[id]["youtubeID"]}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`YouTube. ${I18n.getTranslation(location, `person.videoTitle`)}`}
                    />
                </div>
                <YMaps key={mapsLang} query={{
                    lang: mapsLang,
                    load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,control.TypeSelector,geoObject.addon.balloon'}}>
                    <Map className="y-maps"
                         defaultState={{
                             center: data[id]["maps"]["coordinates"],
                             zoom: (data[id]["maps"]["zoom"] ?? 14),
                             controls: ['zoomControl', 'fullscreenControl']
                         }}>
                        <Placemark defaultGeometry={data[id]["maps"]["coordinates"]} />
                        <TypeSelector options={{ float: "right" }} />
                    </Map>
                </YMaps>
            </div>
        </>
    )
}
export default Person;