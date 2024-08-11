const express = require('express')
const router = express.Router();

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/', (req, res) => {
    res.send(courses);
});

router.post('/', (req, res) => {
    const { error } = validation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

function validation(body) {
    if (!body.name || body.name.length < 3) {
        return {
            error: {
                details: [
                    { message: 'Name is required and should be at least 3 characters long.' }
                ]
            }
        };
    }
    return {};
}

module.exports = router; // Export the router
