import React from "react";
import {Button, Card} from "react-bootstrap";
import './Developer.css';
const Developer = ({img, name, link, linkName}) => {
    return(
        <>
            <Card className="mb-4 dev-card" border="dark">
            <Card.Img variant="top" src={img} alt="GitHub profile avatar"/>
            <Card.Body>
                <Card.Title style={{fontSize: '1.5rem'}}>{name}</Card.Title>
                <Button variant="link" href={link} style={{fontSize: '1.1rem'}}>{linkName ? linkName : "link" }</Button>
            </Card.Body>
            </Card>
        </>
    )
}
export default Developer;