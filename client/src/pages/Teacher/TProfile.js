import React, {Component} from "react";
// import API from "../utils/API";
// import {Link} from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid";
import {Input, TextArea, FormBtn, ClassRadio, OccupationRadio} from "../../components/Form/form";
import Jumbotron from "../../components/Jumbotron/jumbotron";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer"

class TProfile extends Component {
//   state = {
//     book: {}
//   };
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Welcome
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <Container>
              <Input />
              <TextArea />
            <ClassRadio/>
            <OccupationRadio/>
            <FormBtn />
            </Container>
            {/* <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article> */}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            {/* <Link to="/">← Back to Authors</Link> */}
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default TProfile;
