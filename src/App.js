import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize = 5;
   apikey = 'f1b58952ca944141803bf6058b6de0bf'
   //'1d79cae5264846fb81244da4d54a87d9';

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        background='black'
        waitingTime={1000}
        height= {2}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category = "general"/>}/>
          <Route exact path="/business" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category = "business"/>}/>
          <Route exact path="/health" element={<News setProgress = {this.setProgress} apikey={this.apikey} key={"health"} pageSize={this.pageSize} country="in" category = "health"/>}/>
          <Route exact path="/technology" element={<News setProgress = {this.setProgress} apikey={this.apikey} key={"technology"} pageSize={this.pageSize} country="in" category = "technology"/>}/>
          <Route exact path="/science" element={<News setProgress = {this.setProgress} apikey={this.apikey} key={'science'} pageSize={this.pageSize} country="in" category = "science"/>}/>
          <Route exact path="/sport" element={<News setProgress = {this.setProgress} apikey={this.apikey} key={'sport'} pageSize={this.pageSize} country="in" category = "sport"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App;


