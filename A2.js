 use hr
switched to db hr

hr> db.employees.insertMany([
...   { empId: 1, name: "Anita", dept: "HR", salary: 42000, city: "Chennai" },
...   { empId: 2, name: "Bala", dept: "IT", salary: 65000, city: "Bengaluru" },
...   { empId: 3, name: "Charan", dept: "IT", salary: 58000, city: "Chennai" },
...   { empId: 4, name: "Deepa", dept: "Finance", salary: 50000, city: "Mumbai" },
...   { empId: 5, name: "Elan", dept: "IT", salary: 72000, city: "Chennai" },
...   { empId: 6, name: "Farah", dept: "HR", salary: 45000, city: "Delhi" },
...   { empId: 7, name: "Gopal", dept: "Finance", salary: 61000, city: "Chennai" },
...   { empId: 8, name: "Hema", dept: "Sales", salary: 38000, city: "Hyderabad" }
... ])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6741a2000000000000000001'),
    '1': ObjectId('6741a2000000000000000002'),
    '2': ObjectId('6741a2000000000000000003'),
    '3': ObjectId('6741a2000000000000000004'),
    '4': ObjectId('6741a2000000000000000005'),
    '5': ObjectId('6741a2000000000000000006'),
    '6': ObjectId('6741a2000000000000000007'),
    '7': ObjectId('6741a2000000000000000008')
  }
}

hr> db.employees.find({ salary: { $gt: 60000 } })
[
  { _id: ObjectId('6741a2000000000000000002'), empId: 2, name: 'Bala', dept: 'IT', salary: 65000, city: 'Bengaluru' },
  { _id: ObjectId('6741a2000000000000000005'), empId: 5, name: 'Elan', dept: 'IT', salary: 72000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000007'), empId: 7, name: 'Gopal', dept: 'Finance', salary: 61000, city: 'Chennai' }
]

hr> db.employees.find({ salary: { $gte: 45000, $lte: 60000 } })
[
  { _id: ObjectId('6741a2000000000000000003'), empId: 3, name: 'Charan', dept: 'IT', salary: 58000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000004'), empId: 4, name: 'Deepa', dept: 'Finance', salary: 50000, city: 'Mumbai' },
  { _id: ObjectId('6741a2000000000000000006'), empId: 6, name: 'Farah', dept: 'HR', salary: 45000, city: 'Delhi' }
]

hr> db.employees.find({ dept: { $in: ["IT", "Finance"] } })
[
  { _id: ObjectId('6741a2000000000000000002'), empId: 2, name: 'Bala', dept: 'IT', salary: 65000, city: 'Bengaluru' },
  { _id: ObjectId('6741a2000000000000000003'), empId: 3, name: 'Charan', dept: 'IT', salary: 58000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000004'), empId: 4, name: 'Deepa', dept: 'Finance', salary: 50000, city: 'Mumbai' },
  { _id: ObjectId('6741a2000000000000000005'), empId: 5, name: 'Elan', dept: 'IT', salary: 72000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000007'), empId: 7, name: 'Gopal', dept: 'Finance', salary: 61000, city: 'Chennai' }
]

hr> db.employees.find({ $and: [{ city: "Chennai" }, { salary: { $gt: 50000 } }] })
[
  { _id: ObjectId('6741a2000000000000000003'), empId: 3, name: 'Charan', dept: 'IT', salary: 58000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000005'), empId: 5, name: 'Elan', dept: 'IT', salary: 72000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000007'), empId: 7, name: 'Gopal', dept: 'Finance', salary: 61000, city: 'Chennai' }
]

hr> db.employees.find({ $or: [{ dept: "HR" }, { salary: { $gt: 70000 } }] })
[
  { _id: ObjectId('6741a2000000000000000001'), empId: 1, name: 'Anita', dept: 'HR', salary: 42000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000005'), empId: 5, name: 'Elan', dept: 'IT', salary: 72000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000006'), empId: 6, name: 'Farah', dept: 'HR', salary: 45000, city: 'Delhi' }
]

hr> db.employees.find({ city: { $nin: ["Chennai", "Bengaluru"] } })
[
  { _id: ObjectId('6741a2000000000000000004'), empId: 4, name: 'Deepa', dept: 'Finance', salary: 50000, city: 'Mumbai' },
  { _id: ObjectId('6741a2000000000000000006'), empId: 6, name: 'Farah', dept: 'HR', salary: 45000, city: 'Delhi' },
  { _id: ObjectId('6741a2000000000000000008'), empId: 8, name: 'Hema', dept: 'Sales', salary: 38000, city: 'Hyderabad' }
]

hr> db.employees.find({ name: { $regex: /^[ABC]/ } })
[
  { _id: ObjectId('6741a2000000000000000001'), empId: 1, name: 'Anita', dept: 'HR', salary: 42000, city: 'Chennai' },
  { _id: ObjectId('6741a2000000000000000002'), empId: 2, name: 'Bala', dept: 'IT', salary: 65000, city: 'Bengaluru' },
  { _id: ObjectId('6741a2000000000000000003'), empId: 3, name: 'Charan', dept: 'IT', salary: 58000, city: 'Chennai' }
]

hr> db.employees.find({}, { _id: 0, name: 1, salary: 1 }).sort({ salary: -1 }).skip(2).limit(3)
[
  { name: 'Gopal', salary: 61000 },
  { name: 'Charan', salary: 58000 },
  { name: 'Deepa', salary: 50000 }
]
