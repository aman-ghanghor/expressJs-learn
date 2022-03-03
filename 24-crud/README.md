# ========== urlencoded() ============

**express.urlencoded([options])** = This is a built-in middleware function in Express. It parses incoming requests with urlencoded
payloads and is based on body-parser.

- This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.

- A new body object containing the parsed data is populated on the request object after the middleware(i.e. req.body),
  or an empty object ({}) if there was not matched, or an error occurred.

- This object will contain key-value pairs, where the value can be a string or array (when extends is false), or any
  type(when extended is true).

- type = This is used to determine what media type the middleware will parse.

example =
express.urlencoded({type: "application/x-www-form-urlencoded"}) ;

- extended = This option allows to choose between parsing the URL-encoded data with the querystring library (when false)
  or the qs library (when true)

example =
express.urlencoded( {extended: true} ) ;

# =========== redirect() ============

**res.redirect([status,] path)** = It redirects to the URL derived from the specified path, with specified status,
a positive integer that corresponds to an HTTP status code. If not specified, status
defaults to "302" "found".

example =

res.redirect("/student/success") ;

res.redirect("http://example.com") ;

res.redirect(301, "http://example.com") ;

res.redirect("../login") ;
