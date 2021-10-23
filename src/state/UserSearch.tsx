import { useState } from "react";
const users = [
  { name: "mawang", age: 27 },
  { name: "tyo", age: 25 },
  { name: "chandra", age: 26 },
];
const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();
  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        <p>{`Name : ${user?.name}`}</p>
        <p>{`Age: ${user?.age}`}</p>
      </div>
    </div>
  );
};
export default UserSearch;
