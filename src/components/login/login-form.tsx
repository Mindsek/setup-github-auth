import { doSocialLogin } from "@/app/actions/index";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form action={doSocialLogin}>
        <button
          className="bg-orange-400 p-1 rounded-md m-1"
          type="submit"
          name="action"
          value="google"
        >
          Sign In With Google
        </button>

        <button
          className="bg-orange-400 p-1 rounded-md m-1"
          type="submit"
          name="action"
          value="github"
        >
          Sign In With GitHub
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
