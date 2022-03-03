# ========== Update Document ===========

* Each method has it own update method for modifying documents in the database without returning them to your application.


__------------- findByIdAndUpdate() --------------__

It finds a matching document, updates it according to the update arg, passing any options, and returns the found 
document (if any) to the callback. The query executes if callback is passed.
[Syntaxt-]
          findByIdAndUpdate(id, update, options, callback) ;
- id can be object, number or string

[Example-]
          findByIdAndUpdate("324ff2dsfsd323", {name: "Sunil"}, {returnDocument: after})
              
          findByIdAndUpdate("324ff2dsfsd323", {$set: {name: "Sunil"}}, {returnDocument: after})



__------------- updateOne() --------------__

It is used to update single document. MongoDB will update only the first document that matches filter regardless of the value of the multi option.
[Syntaxt-]
           updateOne(filter, update, options, callback) ;

[Example-] 
           updateOne({_id: "324ff2dsfsd323"}, {name: "Sunil"}, {upsert: true})     
- upsert = If true, and no documents found, insert a new document. 



__------------- updateMany() --------------__

It is used to update multiple document. MongoDB will update all documents that match filter regardless of the value of the multi options.
[Syntaxt-] 
           updateMany(filter, update, options, callback) ;

[Example-]
           updateMany({age: 27}, {name: "Sunil"}, {upsert: true}) ;