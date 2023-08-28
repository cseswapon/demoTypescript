import UserDemo from "../../Components/Users/UserDemo";
// import Users from "../../Components/Users/Users";

const Login = () => {
  interface User {
    name: string;
    id: number;
  }
  const user: User = {
    name: "Hayes",
    id: 3,
  };

  /* const person = {
    name: "Hamid",
    roll: 345,
    sub: ["bangla", "English", "Math"],
    isStudent: true,
  }; */

  console.log(user);
  const allUsers = [
    {
      id: 1,
      name: 'swapon',
      email: 'swaponsaha@gmail.com',
      age:32,
    },
    {
      id: 2,
      name: 'sumon',
      email: 'sumon@gmail.com',
      age:31,
    }
  ]
  return (
    <div>
      <h1>This is a Login Page</h1>
      {/* <Users
        name={"Swapon Saha"}
        age={20}
        isRegister={true}
        lang={["bangla", "english"]}
        person={person}
      /> */}
      <UserDemo allUsers={allUsers} />
    </div>
  );
};

export default Login;
