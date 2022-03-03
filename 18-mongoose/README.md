# ================ User authentication ===================

<!-- Syntax -->
DATABASE_URL = "mongodb://user:password@url:port/dbName?authSource=sourceDB" ;

<!-- Example -->
DATABASE_URL = "mongodb://aman:pass123@localhost:27017/schooldb?authSource=schooldb" ;

* authSource = is database where user is created.


<!-- better way it  -->

DATABASE_URL = "mongodb://localhost:27017" ;

DB_OPTIONS = {
    user: user_name,
    pass: password,
    dbName: database_name,
    authSource: db_where_user_created
}

mongoose.connect(DATABASE_URL, DB_OPTIONS) ;