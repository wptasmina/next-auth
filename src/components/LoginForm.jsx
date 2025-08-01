"use client";

import { doSocialLogin } from "@/app/actions";


const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
      <button type="submit" name="action" value="google" 
        className="bg-orange-600 text-white p-1.5 m-2 rounded-lg cursor-pointer">
        Sign In with Google
      </button>

      <button type="submit" name="action" value="github" 
        className="bg-black text-white p-1.5 m-1 rounded-lg cursor-pointer">
        Sign In with GitHub
      </button>
    </form>
  )
}

export default LoginForm;
