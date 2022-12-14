import React from "react";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-i18n";
import I18n from "../I18n";
import './personOfDay.css';
import data from "../resources/data/nolangData.json";


const PersonOfDay = ({location, index}) => {
    index = index ?? 0;
    const keys = Object.keys(data);
    index = index % keys.length;
    const id = keys[index];
    return(
        <>
            <Card border="success" className="person-card">
                <Card.Header className="fw-bold" style={{fontSize: '2rem'}}><I18n t="home.person.title" /></Card.Header>
                <Card.Img variant="top" className="avatar"
                          src={require(`../resources/data/${id}/photos/avatar.jpg`)}
                          alt={I18n.getTranslation(location, `persons.${id}.img_captions.avatar`)}/>
                <Card.Body>
                    <Card.Title style={{fontSize: '1.8rem'}}>
                        <p><I18n t={`persons.${id}.surname`}/> <I18n t={`persons.${id}.name`}/></p>
                        {(data[id]["birthdate"] != null || data[id]["dateOfDeath"] != null) &&
                            <p>
                                ({data[id]["birthdate"] ? data[id]["birthdate"]["year"] ?? "" : ""}{data[id]["dateOfDeath"] ?  - data[id]["dateOfDeath"]["year"] ?? "" : ""})
                            </p>
                        }
                    </Card.Title>
                    <Card.Text className="description"><I18n t={`persons.${id}.description`}/></Card.Text>
                    <Button variant="success"
                            onClick={() => window.scrollTo(0, 0)}
                            style={{marginTop: '0.5rem', fontSize: '1rem'}}
                            as={Link}
                            to={`/Directors/${id}`}><I18n t="home.person.btn" /></Button>
                </Card.Body>
            </Card>
        </>

    )
}
export default PersonOfDay;