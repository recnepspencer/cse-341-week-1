const fs = require('fs');
const path = require('path');

function extractModelFields(modelPath) {
    const modelContent = fs.readFileSync(modelPath, 'utf8');
    const fieldRegex = /(\w+): { type: \w+/g;  // Simple regex to match model fields
    const fields = [];

    let match;
    while ((match = fieldRegex.exec(modelContent)) !== null) {
        fields.push(match[1]);  // Extract field name
    }
    return fields;
}

function createController(controllerName) {
    const modelDir = path.join(__dirname, '../src/models'); // Adjust as necessary
    const modelPath = path.join(modelDir, `${controllerName}.ts`);
    const fields = extractModelFields(modelPath);

    const controllerDir = path.join(__dirname, '../src/controllers');
    const controllerPath = path.join(controllerDir, `${controllerName}Controller.ts`);

    if (!fs.existsSync(controllerDir)){
        fs.mkdirSync(controllerDir, { recursive: true });
    }

    const data = `import { Request, Response } from 'express';
import ${controllerName} from '../models/${controllerName}';

export const create${controllerName} = async (req: Request, res: Response) => {
    // Required fields: ${fields.join(', ')}
    // implementation
};

export const get${controllerName}s = async (req: Request, res: Response) => {
    // implementation
};

export const get${controllerName} = async (req: Request, res: Response) => {
    // Query by: ${fields.join(', ')}
    // implementation
};

export const update${controllerName} = async (req: Request, res: Response) => {
    // Update fields: ${fields.join(', ')}
    // implementation
};

export const delete${controllerName} = async (req: Request, res: Response) => {
    // Deletion by: typically ID
    // implementation
};
`;

    fs.writeFileSync(controllerPath, data, 'utf8');
    console.log(`${controllerName}Controller.ts has been created in ${controllerDir}`);
}

const [,, controllerName] = process.argv;

if (!controllerName) {
    console.error('Please provide a controller name');
    process.exit(1);
}

createController(controllerName);