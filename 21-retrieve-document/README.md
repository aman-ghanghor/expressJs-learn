# ========== Retrieve Document ==========

<find()> = The find() method returns all occurences in the selection.

- Syntaxt :

await StudentModel.find( {name: "Sonam"}, {name: 1, age: 1}, {skip: 5} )