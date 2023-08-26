const Login = () => {
    interface User {
      name: string;
      id: number;
    }
    const user: User = {
      name: "Hayes",
      id: 3,
    };
    console.log(user);
    return (
        <div>
            <h1>This is a Login Page</h1>
        </div>
    );
};

export default Login;