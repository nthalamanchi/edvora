import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { data } from './Homedata';
import Header from './Header';

function Home() {
   
   
  return (
    <>
    <Header/>
      <h3 className="text-center text-uppercase font-weight-bold p-3 mb-2 bg-danger text-white">OVERVIEW</h3>
      <Container>
        {
          data.map((item,index)=>(
            <div className="bg-warning text-white mt-5 mb-5 ">
          <Row>
            <Col>
              <Card style={{ height: '27rem' }}>
              <Card.Header className='text-dark'>{item.cardheader}</Card.Header>
                <Card.Img variant="top" src={item.src} />
              </Card>
            </Col>
            <Col>
              <div className='fs-1 fw-bold fst-italic'>
                {item.explanation}
                <div>
                <Link to={item.link} className="text-decoration-none text-danger">{item.linkexp}</Link>
                </div>
              </div>  
            </Col>
          </Row>
        </div>
          )
          )
        }
      </Container>
    </>

  );
}

export default Home;