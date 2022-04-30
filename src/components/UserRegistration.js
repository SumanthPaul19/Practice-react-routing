import React from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'

export default function Register(){
    let {register,handleSubmit,formState:{errors}}=useForm();

    let history=useHistory();

    const onFormSubmit=(userObj)=>{
        console.log(userObj)

        fetch("http://localhost:6060/users",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userObj)
        })

        //Verify user-credentials
        if(userObj.username!=="pauly"){
            alert("Invalid Username")
        }
        else if(userObj.password!=="abcde"){
            alert("Invalid Password")
        }
        else{
            //navigate to user profile component
            history.push(`/login`)
        }
    }

    return(
        <form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
            {/* username */}
            <label htmlFor="un" className="mt-5">Username</label>
            <input type="text" id="un" {...register('username',{required:true,minLength:5})} className="form-control mb-3" />
            {/*username validation */}
            {errors.username?.type=== 'required' && <p className="text-danger">*Username is required</p>}
            {errors.username?.type=== 'minLength' && <p className="text-danger">*Min-Length should be 5</p>}


            {/* password */}
            <label htmlFor="pw">Password</label>
            <input type="password" id="pw" {...register('password',{required:true})} className="form-control mb-3" />
            {/*password validation */}
            {errors.password && <p className="text-danger">*Password is required</p>}

            {/* email */}
            <label htmlFor="e">Email</label>
            <input type="mail" id="e" {...register('mail',{required:true})} className="form-control mb-3" />
            {/*password validation */}
            {errors.password && <p className="text-danger">*Enter email</p>}

            {/*Profile pic*/}
            <label>Profile Picture(URL)</label>
            <input type="url" name="profilepic" {...register('profilepic',{required:true})} className="form-control mb-3" />
            {/*profile pic validation */}
            {errors.profilepic && <p className="text-danger">*Profile Picture is required</p>}

            {/*textarea */}
            <label htmlFor="ta">About ME</label>
            <textarea id="ta" {...register('textarea',{required:true})} className="form-control mb-3"/>
            {/*textarea validation */}
            {errors.textarea && <p className="text-danger">*Write about you</p>}


        

            <button type="submit" className="btn btn-success">Register</button>
        </form>
    )
}