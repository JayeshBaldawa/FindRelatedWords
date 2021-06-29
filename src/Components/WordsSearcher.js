import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StatusAlert, { StatusAlertService } from 'react-status-alert'
import 'react-status-alert/dist/status-alert.css'
import NavBar from "./NavBar";
import services from "./services";

class WordsSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      alertId:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    services.getSimilarWords(this.state.word).then((res) => {
        this.setState({ words: res.data.noun.syn });
        console.log(this.state.words);
    })
    .catch(err => {
        this.setState({words:[]})
        const alertId = StatusAlertService.showError('No related words found');
        this.setState({ alertId });
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <StatusAlert/>
        <br />
        <div className="container">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Type a word..."
              value={this.state.word}
              name="word"
              onChange={this.handleChange}
              aria-describedby="basic-addon2"
            />
            <Button
              variant="outline-secondary"
              style={{ backgroundColor: "#2a332c", color: "white" }}
              id="button-addon2"
              onClick={this.handleSubmit}
            >
              Search
            </Button>
          </InputGroup>

          <br />
          <div>
            <h4 style={{ textAlign: "center" }}>Related Words</h4>
           <br/>
           <center>
            {this.state.words.map((word) => (
             
                <div style={{display: "inline-block"}} class="card-columns mr-3">
                <div className="card text-center">
                  <div className="card-body text-info">{word}</div>
                </div>
                </div>
               
            ))}
            </center>

          </div>
        </div>
      </div>
    );
  }
}
export default WordsSearcher;
