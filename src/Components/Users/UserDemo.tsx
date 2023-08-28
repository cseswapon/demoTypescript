type UserDemoProps = {
  allUsers: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ allUsers }: UserDemoProps) => {
  console.log(allUsers);
  return <div></div>;
};

export default UserDemo;
