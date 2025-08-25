import {signinUrl} from './endpoints';

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