import path from 'path';
import fs from 'fs';

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'data.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    const { searchParams } = new URL(request.url);
    const names = searchParams.getAll('name');

    const mark1 = data.find((elem) => elem.name == names[0]).marks;
    const mark2 = data.find((elem) => elem.name == names[1]).marks;

    return Response.json({
        "marks": [mark1, mark2]
    }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}