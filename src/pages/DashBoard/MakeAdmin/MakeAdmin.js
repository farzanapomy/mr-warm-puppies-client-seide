import React from 'react';
import { useForm } from 'react-hook-form';


const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://powerful-ravine-08255.herokuapp.com/makeAdmin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))


        console.log(data)
    }
    return (
        <div>
            <div className='w-75 mx-auto mt-5 d-flex justify-content-center ' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("email", { required: true })}
                        placeholder='Enter Email'
                        className='p-2 w-100 input-field'
                    />
                    {/* <p>style={{ marginTop: '200px' }}</p> */}
                    <input className='btn btn-warning my-3 px-5' type="submit" value="Make Admin" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;