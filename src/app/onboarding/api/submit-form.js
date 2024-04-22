import db from '../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        try {
            const docRef = await addDoc(collection(db, "clientResponses"), data);
            res.status(200).json({ message: 'Data submitted successfully', id: docRef.id });
        } catch (error) {
            res.status(500).json({ message: 'Error saving data', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
