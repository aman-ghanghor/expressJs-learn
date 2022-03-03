# ==========  Template Engine  ============

**.A template engine enables you to use static template files in your application at runtime, the template engine replaces variable in template file with actual values, and transforms the template into an HTML file sent to the client .**

* Ejs
* Pug
* Mustache etc.


# ------ Setup Application for Template Engine -------

1. Install Template Engine

npm install ejs

2. In app.js - Setup the Directory where template files are located [optional if static folder
   name is other that views]

app.set('views', './views') ;

3. In app.js Setup the Template Engine to use

app.set('view engine', 'ejs')



# ----- Creating Template Files -----

* views/

index.html -------> index.ejs


# ----- Creating Routes for Template Files -----

function(req, res){
    // res.sendFile(join(process.cwd(), 'views', 'index.html'));
    res.render('index') ;
}

NOTE:-
* If the view engine property is not set, you must specify the extension of the view file.

* When you make a request to the home page, the [index.ejs] file will be rendered as HTML.



# -------- Render() ---------

**1. res.render()** = It renders a view and sends the rendered HTML string to the client>

*Syntaxt* :  res.render(view, [,locals], callback) ;

>> view = The view argument is a string that is the file path of the view file to render.
>>        This can be an absolute path, or a path relative to the views setting 
>>        If the path does not contain a file extension, then the view engine setting determines the file extension.


**2. locals** = It's an object whose properties define local variables for the view.

**3. callback** = It's a function. If provided, the method returns both the possible error and rendered string, but does not 
                  perform an automated response. When an error occurs, the method invokes next(err) internally.


[Example-]

* Send the rendered view to the client
res.render('index');

* Pass a local variable to the view
res.render('index', {name: 'Sonam'})

* The rendered HTML string has to be sent explicity
res.render('index', function(err, html){
    res.send(html);
})

* 
res.render('index', {name: 'Sonam'}, function(err, html){
    // ...
})