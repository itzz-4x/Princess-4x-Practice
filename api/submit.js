export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, score, time } = req.body;

        // yaha console me sab dikhega, tu Vercel dashboard me dekh sakta
        console.log("Student Submission:", { name, score, time });

        res.status(200).json({ message: "Submission received" });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
