# ============ Schema ==============

**{ A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection. You can use a schema to require a specific set of fields, configure the content of a field, or to validate changes to a document based on its beginning and ending states.}**


# ========== Defining Schema ===========

Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection

=> By default, Mongoose adds an _id property to your schemas.

- Syntaxt (shorthand):
<!-- 
    import mongoose from "mongoose";

    const nameSchema = new mongoose.Schema({
        key1: String,  
        key2: Number,
        key3: mongoose.Decimal128,
        key4: [string],
        key5: Boolean,
        key6: [{key: String, key: Date}],
        key7: Date
    })
-->

- Syntaxt (longhand):
<!-- 
    import mongoose from "mongoose";

    const nameSchema = new mongoose.Schema({
        key1: {type: String},  
        key2: {type: Number},
        key3: {type: mongoose.Decimal128},
        key4: {type: Array},
        key5: {type: Boolean},
        key6: [{key: {type: String}, key: {type: Date}}],
        key7: {type: Date}
    })
-->


- Example 
import mongoose from "mongoose" ;

const studentSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number},
    fees: {type: mongoose.Decimal128},
    hobbies: {type: Array},
    isactive: {type: Boolean},
    comments: [{
         value: {type: String}, 
         publish: {type: Date}
    }]
})




# ------   _id Property  -------

1. When you create a new document with the automatically added _id property, Mongoose creates a new _id of type of ObjectId to
   your document.

2. ObjectId encode the local time at which they were created. That means you can usually pull the time that a document was   
   created from its _id.

3. You can also overwrite Mongoose's default _id with your own _id.

4. Mongoose will refuse to save a document that doesn't have an _id, so you're responsible for setting _id if you define your own 
   _id path.



# ========= type ==========
<!-- type is a special property in Mongoose schemas. When Mongoose finds a nested property named
     type in your schema, Mongoose assumes that it needs to define a SchemaType with the given type. -->

 1. String
 2. Number
 3. Date
 4. Buffer
 5. Boolean
 6. Mixed
 7. ObjectId
 8. Array
 9. Decimal128
10. Map
11. Schema


Ex- (wrong)
<!--
const clothSchema = new mongoose.Schema({
    bottomwear: {
        type: String,
        price: Number
    }
}) 
-->


Ex - (Correct)
<!--
const clothSchema = new mongoose.Schema({
    bottomwear: {
        type: {type: String},
        price: Number
    }
})
-->



# ---------- String -----------

<lowercase> = boolean, whether to always call .toLowerCase() on the value.

<uppercase> = boolean, whether to always call .toUpperCase() on the value. 

<trim> = boolean, whether to always call .trim() on the value.

<match> = RegExp, create a validator that checks if the value matches the given regular expression.

<enum> = Array, creates a validator that checks if the value is in the given array.

<minLength> = Number, creates a validator that checks if the value length is not greater than the given number.

<maxLength> = Number, creates a validator that checks if the value length is. 

<populate> = Object, sets default populate options.



# --------- Number ----------

<min> = Number, creates a validator that checks if the value is greater that or equal to the given minimum.

<max> = Number, creates a validator that checks if the value is less than or equal to given maximum.

<enum> = Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.

<populate> = Object, sets default populate options.



# -------- Boolean ---------

- Mongoose casts the below values to true:
true
'true'
1
'1'
'yes'

- Mongoose casts the below values to false:
false
'false'
0
'0'
'no'



**-------All Schema Types--------**

1) <required> = boolean or a function, if true adds a required validator for this property.

2) <default> = Any or function, sets a default value for the path. If the value is a function, the return value of the 
               function is used as the default.

3) <select> = boolean, specified default projections for queries.

4) <validate> = function, adds a validator function for this property.

5) <get> = function, defines a custom getter for this property using Object.defineProperty().

6) <set> = function, defines a custom setter for this property using Object.defineProperty().

7) <alias> = string, mongoose >= 4.10.0 only, Defines a virtual with the given name that gets/sets this path.

8) <immutable> = boolean, defines path as immutable. Mongoose prevents you from changing immutable paths unless the parent 
                 document has [isNew:true]

9) <transform> = function, Mongoose calls this function when you call Document#toJSON() function, including when
                 you JSON.stringify() a document.



**-------Defining Schema--------**

Example - 

import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, min: 18, max: 65},
    fees: {type:mongoose.Decimal128, validate: (v) => v>=550.50},
    hobbies: {type: Array},
    isactive: {type: Boolean},
    comments: [{
        value: {type: String},
        publish: {type: Date}
    }],
    join: {type: Date, default: Date.now}
})



- -------  Schema.path() -------
The schema.path() function returns the instantiated schema type for a given (path/key/field/property).

Example :-  studentSchema.path('age') ;





# ================== Model ======================
<!-- 
   Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. 
   Models are responsible for creating and reading documents from the underlying MongoDB database.
-->

>> Compiling Schema >>
const studentSchema = mongoose.Schema({}) ;
const Student = mongoose.model('Student', studentSchema) ;

<!-- 
    The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Student if for the students collection in the database.
-->



# --------- Creating Document using Model ----------

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


