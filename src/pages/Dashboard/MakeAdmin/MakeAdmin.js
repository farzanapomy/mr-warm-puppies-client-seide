import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const { token } = useAuth()

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://powerful-ravine-08255.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }

    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    };


    return (
        <div>
            <h2>Make a  Admin</h2>

            <form onSubmit={handleAdminSubmit}>
                <input
                    sx={{ width: '50%' }}
                    label="email"
                    type='email'
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button variant='contained' type='submit'>Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Make Admin successfully</Alert>
            }
        </div>
    );
};

export default MakeAdmin;