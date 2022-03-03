
const allStudent = (req, res) => {
  res.send("Hello Student");
};

const deleteStudent = (req, res) => {
  // our logic
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    res.send("You can not delete student with id 10");
  } else {
    res.send(`Student Deleted with it ${id}`);
  }
};


export {allStudent, deleteStudent}