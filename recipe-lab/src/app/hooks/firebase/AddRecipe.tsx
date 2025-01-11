import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { auth } from '../../config/firebase-config';

export default function AddRecipe({ collection }) {
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newPrepTime, setNewPrepTime] = useState(0);
  const [isThereDairy, setIsThereDairy] = useState(false);

  const onSubmitRecipe = async () => {
    try {
      await addDoc(collection, {
        name: newRecipeName,
        prepTime: newPrepTime,
        dairyOption: isThereDairy,
        userId: auth?.currentUser?.uid,
      });
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <input
          placeholder="Recipe name..."
          onChange={(e) => setNewRecipeName(e.target.value)}
        />
        <input
          placeholder="Prep time...."
          onChange={(e) => setNewPrepTime(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isThereDairy}
          onChange={(e) => setIsThereDairy(e.target.checked)}
        />
        <label>Contains Dairy</label>
        <button onClick={onSubmitRecipe}>Submit Entry</button>
      </div>
    </>
  );
}
