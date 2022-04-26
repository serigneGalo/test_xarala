import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { editUser, getUser } from "../api";

const initialValue = {
    name: '',
    mail: '',
    statut: '',
    location: '',
    phone: '',
    image:''
}

function Delete() {

    const [user, setUser] = useState(initialValue);
    const { name, mail, statut, location, phone, image } = user;

    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    return ( 
        <div>
            {name} Deleted
            <br />
             <Link to={"/"}>
                <button className="button-53 btnEdit" role="button" >Accueil</button>
            </Link> 
        </div>
     );
}

export default Delete;