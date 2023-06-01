import Header from "../components/Header"
import {Link} from "react-router-dom"
import {data} from "../data"
import { useNavigate } from "react-router-dom";

const TwoWheelers = ()=>{
    let navigate = useNavigate()
    return(
        <div className="t_w">
            <Header />
            <div className="t_w-main">
                <div className="t_w-heading"><h1>Two-Wheeler Companies</h1></div>
                <div className="t_w-companies">
                    <div onClick={()=>{navigate(`/t_cList`, {state: {t_cId: data["Ola"],t_cN: "OLA"}})}}><img src="./images/Ola.png"></img></div>
                    <div onClick={()=>{navigate(`/t_cList`, {state: {t_cId: data["Tvs"],t_cN: "TVS"}})}}><img src="./images/tvs.png"></img></div>
                    <div onClick={()=>{navigate(`/t_cList`, {state: {t_cId: data["Pure EV"],t_cN: "PURE EV"}})}}><img src="./images/pure-electric-logo.png"></img></div>
                    <div onClick={()=>{navigate(`/t_cList`, {state: {t_cId: data["Hero"],t_cN: "HERO"}})}}><img src="./images/hero.png"></img></div>
                    <div onClick={()=>{navigate(`/t_cList`, {state: {t_cId: data["Bajaj"],t_cN: "BAJAJ"}})}}><img src="./images/Bajaj-Logo.png"></img></div>
                    <div onClick={()=>{navigate(`/t_cList`, {state: {t_cId: data["Ather"], t_cN: "ATHER"}})}}><img src="./images/ather-logo.webp"></img></div>
                </div>
            </div>
        </div>
        
    )
}

export default TwoWheelers;