import { useState } from "react";

function ToDo() {
  const [date, setDate] = useState("");
  const [desc, Setdesc] = useState("");
  const [state, setState] = useState(true);
  const [item, setItem] = useState([]);

  const Add = () => {
    setState(false);
    setItem([...item, { date: date, desc: desc }]);
    setDate("");
    Setdesc("");
    setState(true);
  };

  const remove = (index) => {
    setItem((prevItems) =>
      prevItems.filter((item, i) => i !== index)
    );
  };

  return (
    <>
      <h1 id="name">Welcome </h1>
      <div className="contain">
        <div className="filling">
          <input
            type="date"
            placeholder="Enter Date"
            name="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />
          <br />
          <textarea
            name="desc"
            placeholder="Enter Description"
            onChange={(e) => {
              Setdesc(e.target.value);
            }}
            value={desc}
          ></textarea>
          <br />
          <button onClick={Add}>Add Item</button>
        </div>
        <div className="display">
          {state &&
            item.map((item, index) => (
              <div className="data" key={index}>
                <p>{item.date}</p>
                <h3>{item.desc}</h3>
                <button  onClick={() => remove(index)}>Completed</button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ToDo;
