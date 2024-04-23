import { useState } from 'react';
import useSWR from 'swr';
import db from '@/util/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

// A utility function to fetch data from Firestore
const fetchFormData = async () => {
    const docRef = doc(db, "formInitialData", "yourDocId");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
        return {}; // return empty object if no data found
    }
};

function OnboardingForm() {
    const { data, error } = useSWR('formDataKey', fetchFormData, {
        fallbackData: {
            name: '',
            email: '',
            age: '',
            favoriteColor: '',
            satisfaction: ''
        }
    });
    const [formData, setFormData] = useState(data);

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
            const docRef = await addDoc(collection(db, "clientResponses"), formData);
            console.log("Document written with ID: ", docRef.id);
            alert('Form submitted successfully');
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

    if (error) return <div>Failed to load initial data</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <form onSubmit={handleSubmit}>
            {/* Form fields here */}
        </form>
    );
}

export default OnboardingForm;
