import { useState } from 'react';
import { db } from '../util/firebase-config'; // Ensure this import reflects the correct location and export
import { collection, addDoc } from 'firebase/firestore';

function OnboardingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        favoriteColor: '',
        satisfaction: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Directly using Firestore here to add the form data
            const docRef = await addDoc(collection(db, "clientResponses"), formData);
            console.log("Document written with ID: ", docRef.id);
            alert('Form submitted successfully');
            // Resetting form data after successful submission
            setFormData({
                name: '',
                email: '',
                age: '',
                favoriteColor: '',
                satisfaction: ''
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('Failed to submit the form');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} required />

            <label htmlFor="favoriteColor">Favorite Color:</label>
            <input type="text" id="favoriteColor" name="favoriteColor" value={formData.favoriteColor} onChange={handleChange} required />

            <label htmlFor="satisfaction">Satisfaction with our services (1-5):</label>
            <input type="number" id="satisfaction" name="satisfaction" value={formData.satisfaction} onChange={handleChange} required />

            <button type="submit">Submit</button>
        </form>
    );
}

export default OnboardingForm;
