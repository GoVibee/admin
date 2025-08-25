import { SignIn } from "@/utils/api";

export const useAuth = () => {
    const Login = async(data: any) => {
        const response = await SignIn(data)
        console.log(response)
        const _data = await response?.json();
        if (_data.access_token) {
      // Save token in localStorage
      localStorage.setItem("token", _data.access_token);
    }

        return _data;
    }

    return {
        Login
    }
}