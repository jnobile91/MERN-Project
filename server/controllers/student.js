// I use an async/await method since this method can
// potentially return a lot of data
// HTTP status codes are found at httpstatuses.com

// Function returns students
export const getStudents = async(req, res) => {
    try {
        // Fetches existing students
        const allStudents = await student.find();

        // Returns data from the variable allStudents
        res.status(200).json(allStudents);
    } catch (error) {
        // Otherwise returns error message
        res.status(404).json({ message: error.message });
    }
};

// Function creates new student
export const createStudent = async(req, res) => {
    // Requests content from the body, stores in variable student
    const student = req.body;

    // Calls student model
    // First 'student' is the model
    // Second 'student' is the variable declared above
    const newStudent = new student(student);

    try {
        // Attempts to save the new student to the json
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        // Otherwise returns error message
        res.status(409).json({ message: error.message });
    }
};