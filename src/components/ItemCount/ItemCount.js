import React, {useState} from 'react';
import Card from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button';
import './ItemCount.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import  {Modal,Showmodal,setShowmodal}  from "../Modal/Modal";

function ItemCount ({initialValue=0, stock =5}) {
    const [valor,setValor] = useState (initialValue);

    const sumar = () => {
        if (valor < stock)
            setValor ((numero)=> (numero +1));
        else setShowmodal ((texto)=> (!texto))
    };

    const restar = () => {
        if (valor > 0)
        setValor ((numero)=> (numero-1))
    };

    return (
        <>
            <Card className = "carta" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.cafemulato.com/wp-content/uploads/2020/05/renders-removebg-preview.png" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Container>
                        <Row>
                            <Col >
                                <Button variant="danger" onClick ={restar}>-</Button>
                            </Col>
                            <Col>
                                <span>{valor}</span>
                            </Col>
                            <Col>
                                <Button variant="primary" onClick ={sumar}>+</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
            {Showmodal && <Modal />}
        </>
    )
}

export default ItemCount;