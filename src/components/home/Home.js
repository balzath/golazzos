import React,{useState,useStatebuttons} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'

export const Home = () => {

  const [index, setIndex] = useState(0);
  const [radioValue, setRadioValue] = useState('1');
  const [radiotorneoValue, setRadiotorneoValue] = useState('1');
  const [ counterl, setCounterL ] = useState( 0 );
  const handleAddl = (e) => {
    setCounterL( counterl + 1);
  };
  const handleLessl = (e) => {
    if (counterl > 0){
      setCounterL( counterl - 1);
    }
  };
  const [ counterr, setCounterR ] = useState( 0 );
  const handleAddr = (e) => {
    setCounterR( counterr + 1);
  };
  const handleLessr = (e) => {
    if (counterr > 0){
      setCounterR( counterr - 1);
    }
  };


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const radios = [
    { name: 'TODOS', value: '1' },
    { name: 'EN VIVO', value: '2' },
    { name: 'FINALIZADOS', value: '3' },
  ];

  const radiotorneos = [
    { name: 'TODOS', value: '1' },
    { name: 'ABIERTOS', value: '2' },
  ];
  
  return (
    <div className="my__carousel_main">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect} 
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon img-fluid" style={{backgroundImage: 'url(../assets/next.png)' }} />}
        prevIcon ={<span aria-hidden="true" className="carousel-control-prev-icon img-fluid " style={{backgroundImage: 'url(../assets/prev.png)' }} />}
        indicators={true}
        >
        <Carousel.Item interval={1000000}>
          <img
            className="d-block mt-3 w-100 box"
            src="../assets/page.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <img
            src="./assets/logo_golazzos.png"
            className="d-inline-block align-top logo img-fluid"
            alt="logo"
            />
            <h4><strong>Sin dinero, sin riesgo, todo gratis</strong></h4>
            <p>En <b>golazzos</b> no tienes nada que perder.<br />
            !Juega  gratis y apuesta con tus <b>tokenzz</b> para <br />
            ganar los mejores premios!</p>
            <h4 className="pt-50 animate__animated animate__bounce animate__slow"><strong>Fácil, gratis y divertido.<br/>¡Juega Ya!</strong></h4>
            <img
                src="./assets/double_arrow.png"
                width="5%"
                height="auto"
                className="d-inline-block align-top img-fluid"
                alt="double arrow"
                href="#ancla-1"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000000}>
          <img
            className="d-block w-100 box"
            src="../assets/page.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <img
            src="./assets/logo_golazzos.png"
            width="20%"
            height="auto"
            className="d-inline-block align-top img-fluid"
            alt="logo"
            />
            <h3>Sin dinero, sin riesgo, todo gratis</h3>
            <p>En <b>golazzos</b> no tienes nada que perder.<br />
            !Juega  gratis y apuesta con tus <b>tokenzz</b> para <br />
            ganar los mejores premios!</p>
                
            <h3 className="pt-50">Fácil, gratis y divertido.<br/>¡Juega Ya!</h3>
            <img
                src="./assets/double_arrow.png"
                width="3%"
                height="auto"
                className="d-inline-block align-top img-fluid"
                alt="double arrow"
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000000}>
          <img
            className="d-block w-100 box"
            src="../assets/page.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <img
            src="./assets/logo_golazzos.png"
            width="20%"
            height="auto"
            className="d-inline-block align-top img-fluid"
            alt="logo"
            />
            <h3>Sin dinero, sin riesgo, todo gratis</h3>
            <p>En <b>golazzos</b> no tienes nada que perder.<br />
            !Juega  gratis y apuesta con tus <b>tokenzz</b> para <br />
            ganar los mejores premios!</p>
                
            <h3 className="pt-50">Fácil, gratis y divertido.<br/>¡Juega Ya!</h3>
            <img
                src="./assets/double_arrow.png"
                width="3%"
                height="auto"
                className="d-inline-block align-top img-fluid"
                alt="double arrow"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <img
        className="d-block w-100"
        src="../assets/rectangle.png"
      />
      <div className="d-block w-100 land" name="ancla-1" style={{backgroundImage: 'url(../assets/land.png)' }}>
        <div className="partidos">
          <h3 className="mt-5">Estos son los <strong>Partidos Sabrozzos</strong><br/>¡Acierta el resultado!</h3>
          <ButtonGroup className="mt-5 mb-5 aqua groupb">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                name="radio"
                className="aqua buttongroup"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                <strong>{radio.name} </strong>
              </ToggleButton>
            ))}
          </ButtonGroup>
          <div className="d-flex justify-content-center ">
            <Card className="cardpartido" >
              <Card.Body style={{backgroundImage: 'url(../assets/Partidos.png)',backgroundSize: 'cover',padding: '1px',margin: '1px',borderRadius: '11px' }}>
                <Row >
                  <Col md={4}>
                    <div className="single-box-left">
                      <div className="img-area">
                        <Image 
                          src="../assets/page.png" 
                          roundedCircle="true"
                          width="153px"
                          height="153px"
                          className="equipo"
                        />
                      </div>
                      <div className="img-text aqua mt-1">
                        <h6>Real Madrid</h6>
                        <p className="text-white">Local</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <Row >
                      <div className="d-flex justify-content-center pt-1 countdown">
                        <div className="content justify-content-center">
                          Cierra en:
                          <ListGroup horizontal className="pt-1 time-content">
                            <ListGroup.Item>01</ListGroup.Item>
                            <ListGroup.Item>02</ListGroup.Item>
                            <ListGroup.Item>30</ListGroup.Item>
                          </ListGroup>
                          <ListGroup horizontal className="time-small text-center">
                            <ListGroup.Item>DÍAS</ListGroup.Item>
                            <ListGroup.Item>HORAS</ListGroup.Item>
                            <ListGroup.Item>MINS</ListGroup.Item>
                          </ListGroup>
                        </div>

                      </div>
                    </Row>
                    <Row >
                      <div className="d-flex justify-content-center scoreboard">
                        <div className="content justify-content-center">
                          <Stack direction="horizontal" gap={5}>
                            <div className="bbnone">
                              <Stack gap={2}>
                                <div className="arrow-up" onClick={ handleAddl } type="button"></div>
                                <div className="arrow-down" onClick={ handleLessl } type="button"></div>
                              </Stack>
                            </div>
                            <div className="team1mark white bazul brey">{counterl}</div>
                            <div className="bbnone white"><strong>vs</strong></div>
                            <div className="team1mark white bazul brey">{counterr}</div>
                            <div className="bbnone">
                              <Stack gap={2}>
                                <div className="arrow-up" onClick={ handleAddr }  type="button"></div>
                                <div className="arrow-down" onClick={ handleLessr } type="button"></div>
                              </Stack>
                            </div>
                          </Stack>
                        </div>
                      </div>
                    </Row>
                    <Row >
                      <Stack gap={2} className="col-md-5 mx-auto pt-4 alignitems">
                        <div className="bbnone liga">
                          UEFA Champions League<br/>
                          2020/21
                        </div>
                        <Button variant="warning" className="rey botonjugar"><b>JUGAR</b></Button>
                        <div className="bbnone shareon">
                          Comparte en:<br/>
                        </div>
                        <div className="bbnone shareon justify-content-center" >
                          <Stack direction="horizontal" gap={3}>
                            <Image 
                              src="../assets/twitter-circle.png" 
                              roundedCircle="true"
                              width="25px"
                              height="25px"
                              className="s1"
                            />
                            <Image 
                              src="../assets/la_facebook.png" 
                              roundedCircle="true"
                              width="25px"
                              height="25px"
                              className="s2"
                            />
                            <Image 
                              src="../assets/cib_whatsapp.png" 
                              roundedCircle="true"
                              width="25px"
                              height="25px"
                              className="s3"
                            />
                          </Stack>
                        </div>
                      </Stack>
                    </Row>
                  </Col>
                  <Col md={4}>
                    <div className="single-box-right">
                      <div className="img-area">
                        <Image 
                          src="../assets/page.png" 
                          roundedCircle="true"
                          width="153px"
                          height="153px"
                          className="equipo"
                        />
                      </div>
                      <div className="img-text aqua mt-1">
                        <h6>Real Madrid</h6>
                        <p className="text-white">Local</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="d-block justify-content-center ">
            <Stack gap={3} className="alignitems sizebuttons">
              <h3 className="mt-5">¡Juega YA!</h3>
              <Button variant="warning" className="rey b_login_p "><b>INICIAR SESIÓN</b></Button>
              <Button variant="warning" className="b_signin_p"><b>CREAR CUENTA</b></Button>
              <img
                className="d-block mt-5"
                src="../assets/intermedio.png"
              />
            </Stack>
          </div>
        </div>
        <div className="torneos">
          <h3 className="mt-5 white">Torneos de <b>GOLAZZOS</b> y los<br/> <b>Torneos Sabrozzos</b> de grandes<br/> marcas</h3>
          <div className="d-flex justify-content-center ">
            <Card className="cardpartido mt-2" >
              <Card.Body style={{backgroundImage: 'url(../assets/Torneos.png)',backgroundSize: 'cover',padding: '1px',margin: '1px',borderRadius: '11px' }}>
                <Stack gap={3}>
                  <h3 className="mt-3">Torneos de <b>GOLAZZOS</b></h3>
                  <div className="d-flex justify-content-center "></div>
                  <ButtonGroup className="pt-5 pb-5 pl-3 pr-3 rey buttontor">
                    {radiotorneos.map((radiotorneo, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radiotorneo-${idx}`}
                        type="radiotorneo"
                        name="radiotorneo"
                        className="rey buttongroup"
                        value={radiotorneo.value}
                        checked={2}
                        onChange={(e) => setRadiotorneoValue(e.currentTarget.value)}
                      >
                        <strong>{radiotorneo.name} </strong>
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </Stack>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
