import React, { useState, useEffect } from 'react';
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
function Edit() {

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

    const editUserDetails = async() => {
        navigate('/');
        const response = await editUser(id, user);
    }


    const handlePage = ()=>{
        navigate('/')
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return ( 
        <div>
            
            <form className='formulaire'>
            <label> <h1>Modifier information du user</h1> </label>
            <br />
            <input className="input" type='text' onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <input className="input" type='text' onChange={(e) => onValueChange(e)} name='mail' value={mail} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <input className="input" type='text' onChange={(e) => onValueChange(e)}  name='statut' value={statut} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <input className="input" type='number' onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <input className="input" type='text' onChange={(e) => onValueChange(e)} name='location' pl value={location} id="my-input" aria-describedby="my-helper-text" />
            <br /><br />

            <input className="input" type='text' onChange={(e) => onValueChange(e)} name='image' value={image} id="my-input" aria-describedby="my-helper-text" />
            <br/><br/>

            <button variant="primary" type="submit" className="button-53" role="button" onClick={()=>editUserDetails()}>Modifier</button>
            <br/>
            <button variant="primary" className="button-53" role="button" type="cancel" onClick={()=>handlePage()}>Annuler</button>
        </form>

        </div>
     );
}

export default Edit;