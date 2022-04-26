import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Accueil.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons' 
import {deleteUser} from '../api'

const axios = require('axios');

function Accueil() {

    const [userlist,SetUserlist] = useState([]);
    
    const fetchData = async()=>{
        const result = await axios('http://localhost:8080/api/users')
        SetUserlist(result.data)
    }
    
        useEffect(()=>{
            fetchData()
        },[]);



/*         const Toggle = async()=>{
            var btn = await document.getElementById('btn_opt');
            console.log(btn);

            (btn.classList.contains('show'))?
                (btn.classList.remove("show"),
                btn.classList.add("hide")):

                (btn.classList.remove("hide"),
                btn.classList.add("show"))
        } */

     function Toggle(){
        var btn = document.getElementById('btn_opt');

        if (btn.classList.contains('show')) {
            btn.classList.remove("show");
            btn.classList.add("hide");
        }
        else{
            btn.classList.remove("hide");
            btn.classList.add("show");
            }
        }
        
        let navigate = useNavigate()

        const deleteOneUser= async(_id)=>{
            await deleteUser(_id);
            navigate('/Delete')
        }

    return ( 
        <div className="container">
            <h1>Users table UI</h1>
            <table>
                <tr className='option'>
                    <th>User</th>
                    <th>Statut</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>

                {userlist.map((user,index)=>(
                <tr key={index} className='user'>
                    <td className='fractionImage'>
                        <div className="image"> <img src={user.image} alt="image" /> </div>
                        <div className="nameMail">
                            <p className='name'>{user.name}</p>
                            <p className='mail'>{user.mail}</p> 
                        </div>
                    </td>
                    <td>{user.statut}</td>
                    <td>{user.location}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button type="button" className="btn btn-primary">Contact</button>
                    </td>
                    <td>
                        <button onClick={Toggle}><FontAwesomeIcon icon={faEllipsisV} style={{"color":'#007bff'}}/></button>
                    
                        <div class="dropdown open">
							<div id='btn_opt' class="dropdown-menu hide" aria-labelledby="triggerId1" x-placement="bottom-start">
                                <Link to={{pathname:`/Edit/${user._id}`, state: user}}>
                                    <button className="button-53 btnEdit" role="button" >Edit</button>
                                </Link>                                
                                <button className="button-53 btnDelete" role="button" onClick={()=>deleteOneUser(user._id)}>delete</button>
							</div>
						</div>
                    
                    </td>
                </tr>
                ))
                }
            </table>
        </div>
     );
}

export default Accueil;