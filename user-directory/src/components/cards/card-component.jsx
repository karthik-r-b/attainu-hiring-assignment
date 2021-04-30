import React,{useEffect,useState} from 'react';
import {baseAPIUrl} from '../../config';
import axios from 'axios';
const CardComponent=()=>{
    const [data,setData] = useState([]);
    useEffect(() => {
       async function fetchData(){
       axios.get(baseAPIUrl+'/users')
       .then(response=>setData(response.data.slice(0,10)));
       }
       fetchData();
    }, [])
console.log(data);
return(
   <React.Fragment>
    {data.length&&data.map((item,index)=>{return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="name">
                <h5 className="card-title">Name:</h5>
                <p>{item.fullName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );})} 
   </React.Fragment>
)
}
export default CardComponent;