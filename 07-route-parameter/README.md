# ============ Route Parameter ==============

*_ Route Parameters are named URL segments that are used to capture the values specified at their position in the URL .*

*_ The captured values are populated in the the [req.params] object, with the name of the route parameter specified in the path as their respective keys.*

* The name of route parameter must be made up of "word characters" ([A-Za-z0-9_]).

Examples:-

/student/:id                         -   www.abc.com/student/12

/product/:category/:id               -   www.abc.com/product/mobile/23

/product/order/:year/and/:month      -   www.abc.com/product/order/2021/and/oct

/train/:from-:to                     -   www.abc.com/train/delhi-mumbai

/location/:state.:city               -   www.abc.com/location/up.agra
>> req.params = {"state": "up", "city": "agra"}




# -------- Route Parameter with RegEx ---------

* To have more control over the exact string that can be matched by a route parameter, you can append a 
  regular expression in parenthesis

Examples-

/student/:id([0-9]{2})                     =   www.abc.com/student/03

/product/order/:year/and/:month([a-z])     =   www.abc.com/product/order/2021/and/oct


# ------- app.param() ---------

* The app.param() function is used to add the callback triggers to route parameters. It is commonly used
  to check for the existence of the data requested related to the route parameter

* All param callbacks will be called before any handler of any route in which the param occurs, and they 
  will each be called only once in a request-response cycle, even if the parameter is matched in multiple
  routes.

Syntax - 

app.param(name, callback)

app.param([name, name2, ...], callback)

*If name is an array, the callback trigger is registered for each parameter declared in it, in the order in which they are declared .*



# ------------- Query String ----------------

* Query string is not part of path

Examples -

/product       -       //www.abc.com/product?category=mobile
> req.query = {"category": "mobile"}

/product       -       //www.abc.com/product?category=mobile&id=5
> req.query = {"category": "mobile", "id": 13}