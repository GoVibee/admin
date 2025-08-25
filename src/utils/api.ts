import {
    signinUrl,
    usersUrl,
    deleteuserurl
} from './endpoints';

export const SignIn = async(data: any) => {
    try{
        const response = await fetch(signinUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })

        return response;
    }catch(err){
        console.log(err)
    }
}

export const getUsers = async() => {
    const token = localStorage.getItem('token')
    try{
        const response = await fetch(usersUrl,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        return response;
    }catch(err){
        console.log(err)
    }
}

export const deleteUser = async(id: any) => {
    const token = localStorage.getItem('token')
    try{
        const response = await fetch(`${deleteuserurl}/${id}`,{
            method: 'DELETE',
             headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })

        return response;
    }catch(err){
        console.log(err)
    }
}