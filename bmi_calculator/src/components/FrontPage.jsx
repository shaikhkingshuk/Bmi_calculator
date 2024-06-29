import React, { useState } from "react";
import "../styles/firstpage.css";
import { Link } from 'react-router-dom';


function FrontPage(){

const [weight, setWeight] = useState('');
const [height, setHeight] = useState('');
const [message,setMessage] = useState(null);
const [bmi, setBmi] = useState('');

let solveBmi=(e)=>{
    e.preventDefault();

    if(weight<=0 || height<=0){
        alert('Please enter a valid number...')
    }
    else{
        let bmi=(100*100)*weight/(height*height)
        setBmi(bmi.toFixed(1))

        if(bmi<18.5){
            setMessage("You are in under weight..");
            imgSource='./images/underweight.png';
        }
        else if(bmi<=24.9 && bmi>=18.5){
            setMessage("You are in healthy weight");
            imgSource='./images/good.png';
        }
        else if(bmi>=25 && bmi<=29.9){
            setMessage("You are in over weight");
            imgSource='./images/overweight.png';
        }
        else{
            setMessage("You are in obesity");
            imgSource='./images/obesity.png';
        }

    }
}

let reload=()=>{
    window.location.reload();
}

let imgSource='';

        if(bmi===''){
            imgSource='';
        }
        else if(bmi<18.5){
            imgSource='./images/underweight.png';
        }
        else if(bmi<=24.9 && bmi>=18.5){
            imgSource='./images/good.png';
        }
        else if(bmi>=25 && bmi<=29.9){
            imgSource='./images/overweight.png';
        }
        else{
            imgSource='./images/obesity.png';
        }

    return(
        <div className="bg">
            <div className="box">
                <div className="box1">
                    <h1>BMI calculator</h1>
                    <form onSubmit={solveBmi}> 
                        <div>
                            <h2>Weight(kg)</h2>
                            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
                        </div>
                        <div>
                            <h2>Height(cm)</h2>
                            <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)}></input>
                        </div>
                        <button type="submit">Submit</button>
                        <button type="submit" onClick={reload}>Reload</button>
                    </form>
                    <div className="answer1">
                        <h3>Your BMI is: {bmi}</h3>
                    </div>
                    <div className="answer2">
                        <h3>{message}</h3>
                    </div>
                    <div className="chart">
                        <Link to="/chart" className="link"><b><h3>show BMI chart</h3></b></Link>
                    </div>
                </div>
                <div className="box2"><img src={imgSource} alt='' className="iimg"/></div>
            </div>
        </div>
    );
}
export default FrontPage;