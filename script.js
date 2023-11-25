function getStudentDetails() {
    // Dummy data (replace with actual data retrieval logic)
    const enrollmentNumber = document.getElementById('enrollmentNumber').value;
    const dummyData = {
        '14DICE174647': {
            'studentName': 'Cintu Kumar',
            'fatherName': 'Kailash Prasad Sahu',
            'dob': '14 June 1998',
            'rollNumber': '298175',
            'marks': '99.99%',
            'result': 'Topper of Kalinga University'
        }
    };

    const resultContainer = document.getElementById('result');

    // Check if the enrollment number exists in the dummy data
    if (dummyData.hasOwnProperty(enrollmentNumber)) {
        const studentDetails = dummyData[enrollmentNumber];

        // Display the result
        resultContainer.innerHTML = `
            <h2>Student Details</h2>
            <p><strong>Student Name:</strong> ${studentDetails.studentName}</p>
            <p><strong>Father Name:</strong> ${studentDetails.fatherName}</p>
            <p><strong>DOB:</strong> ${studentDetails.dob}</p>
            <p><strong>Roll Number:</strong> ${studentDetails.rollNumber}</p>
            <p><strong>Marks:</strong> ${studentDetails.marks}</p>
            <p><strong>Result:</strong> ${studentDetails.result}</p>
        `;
    } else {
        resultContainer.innerHTML = '<p>Student not found</p>';
    }
}
