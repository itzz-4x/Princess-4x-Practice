// api/submit.js

let results = []; // In-memory store (Vercel free tier me simple solution)

export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const data = req.body;

            // Validation
            if (!data.student_name || data.score == null) {
                return res.status(400).json({ message: 'Invalid data' });
            }

            // Save result
            results.push({
                student_name: data.student_name,
                score: data.score,
                total_questions: data.total_questions,
                percentage: data.percentage,
                correct_answers: data.correct_answers,
                wrong_answers: data.wrong_answers,
                unattempted_questions: data.unattempted_questions,
                time_taken: data.time_taken,
                submitted_at: new Date().toISOString(),
            });

            return res.status(200).json({ message: 'Result saved successfully!' });
        } catch (err) {
            return res.status(500).json({ message: 'Server error', error: err });
        }
    } 
    else if (req.method === 'GET') {
        // Fetch all results (for admin panel)
        return res.status(200).json(results);
    } 
    else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
