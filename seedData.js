const mongoose = require('mongoose');
const User = require('./models/User'); // Import User model

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/upi-validation', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Sample data
const sampleUsers = [
  {
    phoneNumber: '9876543210',
    upiIds: ['amit.kumar@icici', 'vivek.patel@ybl'],
  },
  {
    phoneNumber: '9788456320',
    upiIds: ['meena.rai@upi', 'priya.singh@paytm'],
  },
  {
    phoneNumber: '7089564312',
    upiIds: ['rahul@upi', 'anjali.verma@ybl'],
  },
];

// Function to insert sample data
const insertSampleData = async () => {
  try {
    await User.deleteMany(); // Clear existing data
    await User.insertMany(sampleUsers); // Insert sample data
    console.log('Sample data inserted successfully');
    db.close(); // Close the MongoDB connection
  } catch (err) {
    console.error(err);
    db.close(); // Close the MongoDB connection on error
  }
};

// Call the function to insert sample data
insertSampleData();
