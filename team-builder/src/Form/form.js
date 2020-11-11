import React, { useState } from 'react';
import Member from './member'
import './form.css'


const initialFormValues = {
    name: '',
    email: '',
    role: '',
  }



export default function Form(props) {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [members, setMembers] = useState([]);

    const onChange =(evt) => {
        const {name, value} = evt.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const submit = (evt) => {
        evt.preventDefault();
        const newMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role,
        }
        setMembers([...members, newMember])
    }
    




    return(
        <form className='form container' onSubmit={submit}>
            <h1>Members</h1>
            <div className='form-group-inputs'>
                <label>
                    Name 
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={formValues.name}
                        placeholder='type a name'
                        maxLength='30'
                        ></input>
                </label>

                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={formValues.email}
                        placeholder='enter your email'
                        maxLength='30'
                        ></input>
                </label>

                <label>
                    Role
                    <select name='role' value={formValues.role} onChange={onChange}>
                        <option value=''>----</option>
                        <option value='front-end-engineer'>Front End Engineer</option>
                        <option value='back-end-engineer'>Back End Engineer</option>
                        <option value='full-stack-engineer'>Full Stack Engineer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
            <div className='members-container'>
                {members.map((member, idx) => {
                    return (
                        <Member details={member} key={idx}/>
                        
                    )
                })}
            </div>
        </form>




    )




}