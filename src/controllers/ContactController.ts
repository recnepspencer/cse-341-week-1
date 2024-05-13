import { Request, Response } from 'express';
import Contact from '../models/Contact';

function isMongoError(error: unknown): error is { message: string } {
    return typeof error === 'object' && error !== null && 'message' in error;
}

/**
 * @openapi
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     description: Adds a new contact to the database. All fields are required.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact created successfully.
 *       400:
 *         description: Missing required fields.
 *       500:
 *         description: Server error or failed to save contact.
 */
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

/**
 * @openapi
 * /contacts:
 *   get:
 *     summary: List all contacts
 *     description: Retrieves a list of contacts from the database.
 *     responses:
 *       200:
 *         description: A list of contacts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Server error or database error.
 */
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

/**
 * @openapi
 * /contacts/{id}:
 *   get:
 *     summary: Get a single contact
 *     description: Retrieves details of a specific contact by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the contact
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact details returned successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       404:
 *         description: Contact not found.
 *       500:
 *         description: Server error or database error.
 */
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

/**
 * @openapi
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     description: Updates the details of an existing contact.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the contact to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       204:
 *         description: Contact updated successfully.
 *       404:
 *         description: Contact not found.
 *       500:
 *         description: Server error or database error.
 */
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

/**
 * @openapi
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     description: Deletes a specific contact by ID from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the contact to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact deleted successfully.
 *       404:
 *         description: Contact not found.
 *       500:
 *         description: Server error or database error.
 */
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
