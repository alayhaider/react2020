import React, { useState, useEffect } from "react";
import firebase from "../Firebase";
import UseForm from "./UseForm";

const SORT_OPTIONS = {
  TIME_ASC: { column: "time_seconds", direction: "asc" },
  TIME_DESC: { column: "time_seconds", direction: "desc" },
  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" }
};

function useTimes(sortBy = "TIME_ASC") {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    // unsubscribe callback when done
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTimes(newTimes);
      });
    return () => unsubscribe();
  }, [sortBy]);

  return times;
}

const TimesList = () => {
  const [sortBy, setSortBy] = useState("TIME_ASC");
  const [editItem, setEditItem] = useState("");
  const [title, setTitle] = useState("");
  const [timeSeconds, setTimeSeconds] = useState(0);
  const times = useTimes(sortBy);

  const handleDeleteClick = id => {
    firebase
      .firestore()
      .collection("times")
      .doc(id)
      .delete();
  };

  const handleCancelItemClick = id => {
    setEditItem("");
  };

  const handleUpdateItemClick = data => {
    firebase
      .firestore()
      .collection("times")
      .doc(data.id)
      .set(data);
  };

  return (
    <div>
      <h2>Times List</h2>
      <div>
        <label>Sort By:</label>{" "}
        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
          <option value="TIME_ASC">Time (fastest first)</option>
          <option value="TIME_DESC">Time (slowest first)</option>
          <option disabled>----</option>
          <option value="TITLE_ASC">Title (a-z)</option>
          <option value="TITLE_DESC">Title (z-a)</option>
        </select>
      </div>
      <ul>
        {times.map(time =>
          editItem === time.id ? (
            <div key={time.id}>
              <input
                type="text"
                value={title}
                name="title"
                defaultValue={time.title}
                onChange={e => setTitle(e.target.value)}
              />
              <input
                type="text"
                value={timeSeconds}
                name="time_seconds"
                defaultValue={time.time_seconds}
                onChange={e => setTimeSeconds(e.target.value)}
              />
              <button onClick={() => handleCancelItemClick()}>Cancel</button>
              <button onClick={() => handleUpdateItemClick(time)}>
                Update
              </button>
            </div>
          ) : (
            <li key={time.id}>
              <h3>{time.title}</h3>
              <p>{time.time_seconds} seconds</p>
              <button onClick={() => setEditItem(time.id)}>Edit</button>
              <button onClick={() => handleDeleteClick(time.id)}>Delete</button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TimesList;
