import React from "react";
import './style.css';
import { Container, Row, Col } from "../Grid";
import manImg from '../../assets/images/man.png';
import womanImg from '../../assets/images/woman.png';

function CardRoster() {
    return (
        <Container >
            <div className="cards-area">

                <div className="card-container">
                    <Row>
                        <Col size="sm-3">
                            <div className="flipCard">
                                <div className="flipCardInner">
                                    <div className="flipCardFront">
                                        <img src={ manImg } alt="Avatar" className="card-img" />
                                    </div>
                                    <div className="flipCardBack">
                                        <h1>Student</h1>
                                        <p>This className Schedule</p>
                                        <p>This Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <br></br>
                        <Col size="sm-3">
                            <div className="flipCard">
                                <div className="flipCardInner">
                                    <div className="flipCardFront">
                                        <img src={ manImg } alt="Avatar" className="card-img" />
                                    </div>
                                    <div className="flipCardBack">
                                        <h1>Student</h1>
                                        <p>This className Schedule</p>
                                        <p>This Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <br></br>
                        <Col size="sm-3">
                            <div className="flipCard">
                                <div className="flipCardInner">
                                    <div className="flipCardFront">
                                        <img src={ womanImg } alt="Avatar" className="card-img" />
                                    </div>
                                    <div className="flipCardBack">
                                        <h1>Student</h1>
                                        <p>This className Schedule</p>
                                        <p>This Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <br></br>
                        <Col size="sm-3">
                            <div className="flipCard">
                                <div className="flipCardInner">
                                    <div className="flipCardFront">
                                        <img src={ womanImg } alt="Avatar" className="card-img" />
                                    </div>
                                    <div className="flipCardBack">
                                        <h1>Student</h1>
                                        <p>This className Schedule</p>
                                        <p>This Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <br></br>
                    </Row>
                </div>
                <div className="card-container">

                    <Row>
                        <Col size="sm-3">
                            <div className="flipCard">
                                <div className="flipCardInner">
                                    <div className="flipCardFront">
                                        <img src={ manImg } alt="Avatar" className="card-img" />
                                    </div>
                                    <div className="flipCardBack">
                                        <h1>Student</h1>
                                        <p>This className Schedule</p>
                                        <p>This Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                
                    </Row>
                
                </div>
            </div>
        </Container>
    );
}

// I bleieve we need to use this but we need API routes in place. 
// function CardRoster() {
//     state = {
//         // roster or whatever is being pulled from databse using API route
//       };
//     render() {
//         return (
//           <Wrapper>
//             <Title>Class Roster</Title>
            {/* {this.state.roster.map(roster => (
              <FriendCard
                id={roster.id}
                key={roster.id}
                name={roster.name}
                imageOne={ manImg }
                imageTwo={ womanImg }
                occupation={roster.occupation}
                schedule={roster.location}
              />
//             ))} */}
//           </Wrapper>
//         );
//       }
// }

export default CardRoster;