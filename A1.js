use college
switched to db college

college> db.students.insertOne({ rollNo: 101, name: "Arun", dept: "CSE", marks: 78, city: "Chennai" })
{
  acknowledged: true,
  insertedId: ObjectId('6741a1110000000000000001')
}

college> db.students.insertMany([
...   { rollNo: 102, name: "Divya", dept: "ECE", marks: 85, city: "Madurai" },
...   { rollNo: 103, name: "Karthik", dept: "CSE", marks: 62, city: "Chennai" },
...   { rollNo: 104, name: "Priya", dept: "ECE", marks: 74, city: "Coimbatore" },
...   { rollNo: 105, name: "Suresh", dept: "CSE", marks: 91, city: "Trichy" }
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6741a1120000000000000002'),
    '1': ObjectId('6741a1120000000000000003'),
    '2': ObjectId('6741a1120000000000000004'),
    '3': ObjectId('6741a1120000000000000005')
  }
}

college> db.students.find()
[
  { _id: ObjectId('6741a1110000000000000001'), rollNo: 101, name: 'Arun', dept: 'CSE', marks: 78, city: 'Chennai' },
  { _id: ObjectId('6741a1120000000000000002'), rollNo: 102, name: 'Divya', dept: 'ECE', marks: 85, city: 'Madurai' },
  { _id: ObjectId('6741a1120000000000000003'), rollNo: 103, name: 'Karthik', dept: 'CSE', marks: 62, city: 'Chennai' },
  { _id: ObjectId('6741a1120000000000000004'), rollNo: 104, name: 'Priya', dept: 'ECE', marks: 74, city: 'Coimbatore' },
  { _id: ObjectId('6741a1120000000000000005'), rollNo: 105, name: 'Suresh', dept: 'CSE', marks: 91, city: 'Trichy' }
]

college> db.students.find({ dept: "CSE" })
[
  { _id: ObjectId('6741a1110000000000000001'), rollNo: 101, name: 'Arun', dept: 'CSE', marks: 78, city: 'Chennai' },
  { _id: ObjectId('6741a1120000000000000003'), rollNo: 103, name: 'Karthik', dept: 'CSE', marks: 62, city: 'Chennai' },
  { _id: ObjectId('6741a1120000000000000005'), rollNo: 105, name: 'Suresh', dept: 'CSE', marks: 91, city: 'Trichy' }
]

college> db.students.updateOne({ rollNo: 103 }, { $set: { marks: 68 } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

college> db.students.updateMany({ dept: "CSE" }, { $set: { semester: 3 } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}

college> db.students.deleteOne({ rollNo: 104 })
{
  acknowledged: true,
  deletedCount: 1
}

college> db.students.countDocuments()
4
