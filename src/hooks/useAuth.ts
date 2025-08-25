import { SignIn,getUsers,deleteUser } from "@/utils/api";

export const useAuth = () => {
    const Login = async(data: any) => {
        const response = await SignIn(data)
        const _data = await response?.json();
        if (_data.access_token) {
      // Save token in localStorage
      localStorage.setItem("token", _data.access_token);
    }

        return _data;
    }

    const GetUsers = async() => {
        const response = await getUsers()
        const  data = await response?.json();
        return data;
    }

    const DeleteUser = async(id: any) => {
        const response = await deleteUser(id);
        const data = await response?.json()
        return data
    }

    return {
        Login,
        GetUsers,
        DeleteUser
    }
}