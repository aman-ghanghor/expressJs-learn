# ========= Delete Document =========

__--------- findByIdAndDelete() ----------__
It finds a matching document then deletes it.

[Syntax-] 
         findByIdAndDelete(id, options, callback) ;

- id can be object, number or string.

[Example-]
         findByIdAndDelete("323ffdsd323")
         findByIdAndDelete({_id: "323ffdsd323"})


__--------- deleteOne() ----------__      

It is used to delete single document. MongoDB will delete only the first document that matches conditions

[Syntax-] 
         deleteOne(condition, options, callback)

[Example-]
         deleteOne({_id: "323ddf3dd23"}) ;
         deleteOne({_id: "323ddf3dd23", age: 27}) ;



__--------- deleteMany() ----------__    

It is used to delete multiple document. MongoDB will delete all documents that match conditions.

[Syntaxt-] 
          deleteMany(condition, options, callback) ;

[Example]
          deleteMany({age: 27}) ;
          deleteMany({name: "Sonam", age: 27}) ;
