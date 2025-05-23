import path from 'path';
import fs from 'fs';

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'data.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    // const { name } = request.query;


    return Response.json(data);
}