const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo1-exercises')
  .then(() => {
    console.log('Connected to MongoDB...');
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB...', err);
  });

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  return await Course
    .find({ isPublished: true })
    .or([
      { price: { $gte: 15 } },
      { name: /.*by.*/i }
    ])
    .sort({ price: -1 })
    .select({ name: 1, author: 1 });
}

async function run() {
  const result = await getCourses();
  console.log(result);
}

async function updateCourses(id) {//update document
  try {
    const course = await Course.findById(id);
    if (!course) {
      console.log('Course not found');
      return;
    }

    course.isPublished = true;
    course.author = 'Roshan Gandu';

    const result = await course.save();
    console.log('Course updated:', result);
  } catch (err) {
    console.error('Error updating course:', err);
  }
}

// Update the course using one of the IDs from your collection
updateCourses('5a68fdd7bee8ea64649c2777'); // Replace with the correct ID as needed
