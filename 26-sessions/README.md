# ========== express-session ===========

npm i express-session

<!-- 
     import session from "express-session"
     
     app.use(session({
        secret: "iamkey",
        resave: false,
        saveUninitialized: true,
        cookie: {path: "/", httpOnly: true, secure: false, maxAge: 5000}
     }))

 -->


1. <secret> = This is the secret used to sign the session ID cookie. This can be either a string for a single secret, or an array 
              of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests. The secret itself should be not easily parsed by a human and would best be a random set of characters.

2. <resave> = It forces the session to be saved back to the session store, even if the session was never modified during the    
              request. True If it does not implement the touch method and your store sets an expiration date on stored sessions. False If it implements the touch method.

3. <saveUninitialized> = It forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it 
                         is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or a complying with laws that require permission before setting a cookie. Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.

4. <cookie> = Setting object for the session ID cookie.

5. <name> = The name of the session ID cookie to set in the response. The default value is "connect.sid".

6. <proxy> = Trust the reverse proxy when setting secure cookies.
             true The "X-Forwarded-Proto" header will be used.
             false All headers are ignored and the connection is considered secure only if there is a direct TLS/SSL connection.
             undefined Uses the "trust proxy" setting from express. It is default.

7. <store> = The session store instance, defaults to a new MemoryStore instance.





__------------ req.session -------------__

To store or access session data, simply use the request property req.session, which is (generally) serialized as JSON 
by the store, so nested objects are typically fine.

example - 
<!-- 
   req.session.count = 1
   req.session.count
-->

1. <req.session.regenerate()> = To regenerate the session simply invoke the method. Once complete, a new SID and
                                Session instance will be initialized at req.session and the callback will be invoked.

2. <req.session.destroy(callback)> = It destroys the session and will unset the req.session property. Once complete, the
                                     callback will be invoked.

3. <req.session.reload(callback)> = It reloads the session data from the store and re-populates the req.session object. Once 
                                    complete, the callback will be invoked.

4. <req.session.id> = Each session has a unique ID associated with it. This property is an alias of req.sessionID and
                      cannot be modified. It has been added to make the session ID accessible from the session object.

5. <req.session.cookie> = Each session has a unique cookie object accompany it. This allows you to alter the session cookie per 
                          visitor. For example we can set ||req.session.cookie.expires|| to false to enable the cookie to remain 
                          for only the duration of the user-agent.

6. <cookie.maxAge> = Alternatively req.session.maxAge will return the time remaining in milliseconds, which we may also
                     re-assign a new value to adjust the .expires property appropriately.

7. <Cookie.originalMaxAge> = The req.session.cookie.originalMaxAge property returns the original maxAge(time-to-live), in 
                             milliseconds, of the session cookie.

8. <req.sessionID> = To get the ID of the loaded session, access the request property req.sessionID. This is simply a
                     read-only value set when a session is loaded/created.