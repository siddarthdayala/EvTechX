import Header from "../components/Header"
import {Link} from "react-router-dom"

const IndexPage = ()=>{
    return(
        <div className="index">
            <Header />
            <div className="index-image">
                <img src="./images/main-page-design2.png"></img>
            </div>
            <div className="scroll-image">
                <img src="./images/scroll.png"></img>
            </div>
            <div className="index-cards">
                <div>
                    <img src="./images/icons8-electric-motor-96.png"></img>
                    <h2>Two-Wheelers</h2>
                    <Link className="index-clicks" to='/twowheelers'>Click Here!</Link>
                </div>
                <div>
                    <img src="./images/icons8-electric-car-96.png"></img>
                    <h2>Four-Wheelers</h2>
                    <Link className="index-clicks" to='/fourwheelers'>Click Here!</Link>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;