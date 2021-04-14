import { useState } from 'react';
import { db } from './../config/firebase';

const getCategories = () => {
  db.collection('category').onSnapshot((snap) => {
    let tempCategory = snap.docs.map((data) => ({
      id: data.id,
      data: data.data(),
    }));
  });
};

export default getCategories;
