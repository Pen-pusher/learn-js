import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AceEditor from 'react-ace'
import {
  Button
} from 'reactstrap';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: `for (let x = 0; x < 42; x++) {
  
      } `
    }
  }
  onLoad() {
    console.log("onLoad");
  }
  onChange = (code, x) => {
    console.log("onChange", code, x);
    this.setState({
      code: code
    })
  }

  render() {
    return (
      <div className="Home container my-3 text-center" style={{ maxWidth: 700 }}>
        <h1 className="">Learn Programming with JavaScript</h1>

        {/* 
        Change typo
        Do a landing page
        The content learned during the course
        */}

        <p className="my-3">Welcome to this platform where you will learn the basics of programming with JavaScript, through courses and many online exercises.</p>
        <p className="my-3">Why JavaScript? Because it's one of the most popular languages for web developers that can give you the tools to create awesome websites!!</p>

        <div className="my-5">
          <Button color="primary" tag={Link} to="/course/intro-to-js" size="lg" >Go to the first course</Button>
        </div>

        <h2 className="mt-5">Developed by</h2>
        <div className="my-3">
          <img src="/ironhack-logo.png" alt="" style={{ maxWidth: "50%", width: 150 }} />
        </div>
      </div>
    );
  }
}

export default Home;
