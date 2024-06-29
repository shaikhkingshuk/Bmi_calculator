import "../styles/chartpage.css";
import { Link } from "react-router-dom";

function BmiChart(){
    return(
        <div className="bg">
            <div className="box">
                <div>
                    <img src="./images/Bmi_chart.jpg" alt=""></img>
                </div>
                <div>
                    <Link to="/" className="button"><b>Back</b></Link>
                </div>
            </div>
        </div>
    );
}
export default BmiChart;