import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
export default function Tips()
{
    return (
      <Card
        style={{
          width: "60%",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <li>Cras justo odio</li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>Dapibus ac facilisis in </li>
          </ListGroup.Item>
          <ListGroup.Item>
            <li>Vestibulum at eros </li>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
}