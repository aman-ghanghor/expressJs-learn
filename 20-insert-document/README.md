# ========== Creating Document using Model ==========

<!-- Defining Schema -->
const studentSchema = mongoose.Schema({name: String}) ;

<!-- compiling Schema -->
const studentModel = mongoose.model('student', studentSchema) ;

<!-- Creating Document -->
const stu = new studentModel({
    name: 'Sonam'
})

<!-- Saving Document -->
await stu.save() ;



# -------- save() --------

* save() = It is used to save document by inserting a new document into the database if document.isNew is true, or sends an 
           updateOne operation only with the modifications to the database, it does not replace the whole document in the latter case.

- It returns undefined if used with callback or a Promise otherwise

example - callback :-
<!-- 
    studentDoc.save((err, result)=>{
        if(err){
          console.log(err)
        }
        else{
          console.log(result)
        }
    })
-->
example - promise :-
<!--  
const result = await studentDoc.save() ;
console.log(result) ;
-->

>> Mongoose validate modified paths before saving. If you set a field to an invalid value, Mongoose will throw
>> an error when you try to save() that document.

* if you don't want to validate then use
const result = await studentDoc.save({validateBeforeSave: false})