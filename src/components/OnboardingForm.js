import { useState } from 'react';

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
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            alert('Form submitted successfully');
            setFormData({
                name: '',
                email: '',
                age: '',
                favoriteColor: '',
                satisfaction: ''
            });
        } catch (error) {
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
