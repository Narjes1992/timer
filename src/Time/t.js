import React, { Component } from 'react';
import './t.css';


class Timer extends Component {
    constructor(props){
        super(props)
        this.state={
            h: 0,
            m:0,
            s:0,
            etat:"false"
          }
        }
      timer= ()=>{
      setTimeout(()=>{
        if(this.state.etat==="true" ){
        if(this.state.s===60){
          this.setState({
            s:0,
            m:this.state.m+1
          })
        }else{
          this.setState({
            s:this.state.s+1
          })
        }
       if(this.state.m===60){
        this.setState({
          m:0,
          h:this.state.h+1
        })
       } 
      this.timer() }
      },1000)
      }
      
       reset =()=>{
      this.setState(
      {
        
        h: 0,
        m:0,
        s:0,
        etat:"false" 
      })
      }
     
      etat=()=>{
        if(this.state.etat==="true"){
          this.setState({
            etat:"false"
          })
        }else{
          
          this.setState({
            etat:"true"
          })
          this.timer()
         
        }
       
      }
        render() {
          return (
            <div className="App">
            
            <section className="chrono">
            <div className="clock">
             <span>{this.state.h<10?"0"+this.state.h:this.state.h}</span>:
             <span>{this.state.m<10?"0"+this.state.m:this.state.m}</span>:
             <span>{this.state.s<10?"0"+this.state.s:this.state.s}</span>
      
            </div>
            <div className="tag">
            <span><strong>Hours</strong></span>
            <span><strong>Minutes</strong></span>
            <span><strong>Seconds</strong></span>
            </div> 
            <div className="btns">
      
               <button className="btn-start" onClick={this.etat}>{this.state.etat==="true"?"Stop":"Start"}</button>
               <button className="btn-reset" onClick={this.reset}>Reset</button>
               </div>
               </section>
           
               </div>
          );
        }
      }
      
 
export default Timer;