import { useState } from "react";
//bracket after FC is used for props
const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);
  const onClick = () => {
    setName("");
    setGuest([...guest, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guest.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};
export default GuestList;
