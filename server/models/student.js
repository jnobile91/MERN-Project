import mongoose from 'mongoose';

// Creates Mongoose schema for student
const studentSchema = mongoose.Schema({
    registrationNumber: Number,
    name: String,
    grade: String,
    section: {
        type: String,
        default: 'NULL'
    },
    subjects: [String]
});

// Creates student model
const student = mongoose.model('student', studentSchema);

export default student;