import React, { useEffect, useState } from "react";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";
import db from "./firebase"; // Import Firestore instance





function HostView() {
  return (
    <div>
      <h1>Users from Firestore:</h1>
    </div>
  );
}

export default HostView;