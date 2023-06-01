import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const TwoWheelersList = ()=>{
    let {state} = useLocation()
    let data_id = state.t_cId
    let name = state.t_cN
    return(
        <div className="t_wList">
            <Header />
            <div className="t_wList-main">
                <div className="t_w-heading"><h1>{name}</h1></div>
                {Object.keys(data_id).map((modal, index) => (
                    <div className="t_wList-list" key={index}>
                        <img src={data_id[modal].Image}></img>
                        <h2>{data_id[modal].Model} | Rs.{data_id[modal].Price}</h2>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default TwoWheelersList;




