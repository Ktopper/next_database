'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';

function OnboardingForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    favoriteColor: '',
    satisfaction: '',
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const initializeFirebase = async () => {
      const { initializeApp } = await import('firebase/app');
      const { getFirestore } = await import('firebase/firestore');
      const { getAnalytics } = await import('firebase/analytics');

      const firebaseConfig = {
        apiKey: process.env.API_KEY,
        authDomain: onboarding-a2ce8.firebaseapp.com,
        projectId: process.env.onboarding-a2ce8,
        storageBucket: onboarding-a2ce8.appspot.com,
        messagingSenderId: process.env.SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const analytics = getAnalytics(app);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const docRef = await addDoc(collection(db, 'clientResponses'), formData);
          console.log('Document written with ID: ', docRef.id);
          alert('Form submitted successfully');
          setFormData({
            name: '',
            email: '',
            age: '',
            favoriteColor: '',
            satisfaction: '',
          });
        } catch (error) {
          console.error('Error adding document: ', error);
          alert('Failed to submit the form');
        }
      };

      // Attach the event listener to the form submission
      const form = document.querySelector('form');
      form.addEventListener('submit', handleSubmit);

      // Clean up the event listener when the component unmounts
      return () => {
        form.removeEventListener('submit', handleSubmit);
      };
    };

    initializeFirebase();
  }, []);
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="age">Age:</label>
      <input
        type="text"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />

      <label htmlFor="favoriteColor">Favorite Color:</label>
      <input
        type="text"
        id="favoriteColor"
        name="favoriteColor"
        value={formData.favoriteColor}
        onChange={handleChange}
        required
      />

      <label htmlFor="satisfaction">
        Satisfaction with our services (1-5):
      </label>
      <input
        type="number"
        id="satisfaction"
        name="satisfaction"
        value={formData.satisfaction}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default OnboardingForm;