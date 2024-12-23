import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebase"; // Import Firestore instance

function HostView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Games", "2024");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const users = docSnap.data().users; // Access the users field
          setData(users);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Firestore:</h1>
      <ul>
        {data && data.length > 0 ? (
          data.map((user, index) => <li key={index}>{user}</li>)
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
}

export default HostView;