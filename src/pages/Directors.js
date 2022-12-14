import "./Directors.css"
import React, {useEffect, useState} from "react";
import {Card, Form, InputGroup, ListGroup} from "react-bootstrap";
import I18n from "../I18n";
import data from "../resources/data/nolangData.json";
import {Link} from "react-router-i18n";


const Directors = ({ location, match: { url } }) => {
    document.title =  I18n.getTranslation(location, 'Directors.title');
    const [navHeight, setNavHeight] = useState(0);
    useEffect(() => {
        const navbar = document.querySelectorAll(".navigation");
        setNavHeight(navbar[0] == null ? 0 : navbar[0].clientHeight);
    }, []);
    const search = (string) => {
        if (data != null) {
            const items = document.querySelectorAll(".list-item");
            items.forEach((item) => {
                item.classList.remove("d-none");
                item.querySelectorAll(".found").forEach((found) => found.outerHTML = found.innerHTML);
            });

            string = string ?? "";
            if (string !== "") {
                string = string.split(/\s+/).join(" ").toLowerCase();
                items.forEach((item) => {
                    const searched = item.querySelectorAll(".data-searched");
                    searched.forEach((element) => {
                        let pos = element.innerText.toLowerCase().indexOf(string);
                        if (pos !== -1){
                            const replacedText = element.innerText.slice(pos, pos + string.length);
                            element.innerHTML = element.innerText.replaceAll(
                                replacedText,
                                '<span class="found">' + replacedText + '</span>'
                                )
                        } else {
                            item.classList.add("d-none");
                        }
                    })
                })
            }
        }
    };
    return(
        <>
            <div className="layout" style={{
                marginTop: -navHeight,
                paddingTop: navHeight,
            }}>
                <div className="blurring">
                    <Card className="list-container p-2">
                        <Form className="d-flex">
                            <InputGroup className="me-2">
                                <Form.Control
                                    type="search"
                                    onChange={(event) => search(event.target.value)}
                                    placeholder={`${I18n.getTranslation(location, 'Directors.placeholder')}...`}
                                    aria-label={`${I18n.getTranslation(location, 'Directors.placeholder')}`}
                                    className="search-field"/>
                            </InputGroup>
                        </Form>
                        <ListGroup className="mt-2" >
                            {Object.keys(data).map((id, index) =>
                                <ListGroup.Item action
                                                key={index}
                                                variant="secondary"
                                                className="list-item"
                                                as={Link}
                                                ignoreLocale
                                                to={`${url}/${id}`}>
                                    <div className="ms-2 me-auto">
                                        <p className="data-searched name-field" >
                                            {`${I18n.getTranslation(location, `persons.${id}.surname`)} ${I18n.getTranslation(location,
                                                `persons.${id}.name`)} ${I18n.getTranslation(location, `persons.${id}.patronymic`)}`}
                                        </p>
                                        <p><I18n t={`persons.${id}.description`}/></p>
                                    </div>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Directors;