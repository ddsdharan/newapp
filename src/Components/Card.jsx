import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Card (props) {
    return <>
 <div className="col-lg-4">
     <div className="card mb-5 mb-lg-0">
         <div className="card-body">
         <h5 class="card-title text-uppercase text-center">{props.data.plan}</h5>          
         <h6 class="card-price text-center font-weight-bold">{props.data.price}</h6>               
         <hr/>
         <ul className="fa-ul">
            {
            props.data.features.map((feature) =>{
                return <li className={feature.isEnabled ? "" : "text-dark"}>
                    <span className="fa-li">
                    <i class={`fa ${feature.isEnabled ? 'fa-check' : 'fa-times'}`}></i>
                    </span>{feature.name}
                    </li>
                })
                }
         </ul>
         <button href="#" className="btn btn-block btn-secondary text-uppercase">Subscribe</button>
         </div>
     </div>
    </div>
    </>
    }
export default Card;