export default function GET(request) {
    const data = {
        "marks": [10, 20]
    }
    return new Response.json(data);
}