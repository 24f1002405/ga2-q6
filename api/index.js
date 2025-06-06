import path from 'path';
import fs from 'fs';

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'data.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    const { searchParams } = new URL(request.url);
    const names = searchParams.getAll('name');

    const marks = [];
    names.forEach((name) => {
        const mark = data.find((elem) => elem.name == name).marks;
        marks.push(mark);
    });

    return Response.json({
        "marks": marks,
    }, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}