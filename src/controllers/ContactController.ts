import { Request, Response } from 'express';
import Contact from '../models/Contact';

function isMongoError(error: unknown): error is { message: string } {
    return typeof error === 'object' && error !== null && 'message' in error;
}

export const createContact = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;
        if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const newContact = new Contact({ firstName, lastName, email, favoriteColor, birthday });
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

export const getContacts = async (req: Request, res: Response) => {
    try {
        const contacts = await Contact.find({});
        res.status(200).json(contacts);
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

export const getContact = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found.' });
        }
        res.status(200).json(contact);
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

export const updateContact = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedContact = await Contact.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: 'Contact not found.' });
        }
        res.status(204).json(updatedContact);
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

export const deleteContact = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found.' });
        }
        res.status(200).json({ message: 'Contact deleted successfully.' });
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};
