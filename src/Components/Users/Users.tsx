type userProps = {
  name: string;
  age: number;
  isRegister: boolean;
  lang: string[];
  person: {
    name: string;
    roll: number;
    sub: string[];
    isStudent: boolean;
  };
};
export default function Users(props: userProps) {
  return (
    <div>
      Users {props.name} and User age {props.age}
      {props.isRegister ? <p>Register</p> : <p>Not Register</p>}
      <ul>
        {props.lang.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <p>
        {props.person.name + " "}
        {props.person.roll + " "}
        {props.person.sub + " "}
        {props.person.isStudent + " "}
      </p>
    </div>
  );
}
