# ========== EJS Template Engine ==========

**.EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript.**

1. Fast compilation and rendering
2. Simple template tags: <% %>
3. Custome delimiters (e.g. use [? ?] instead of <% %>)
4. Sub-template includes
5. Ships with CLI
6. Both server JS and browser support
7. Static caching of intermediate JavaScript


* Displaying Data = You may display data that is passed to your views by wrapping the variable in <%= %>
[Example-]
<%= name %>

* Comments = EJS also allows you to define comments in your views. However, unlike HTML comments, EJS comments are not included in the HTML returned by your application.
[Example-]
<%# This comments will not be present in the rendered HTML %>



**------------IF--------------**
<if evaluates a variable, and if that variable is "true" (e.g. exists, is not empty, and is not a false boolean value)>

[Syntaxt-]
<% if(variable) { %>
    ...........
<% } else if(condition) {%>
    ...........
<% } else { %>
    ...........
<% } %>

[Example-]
<% if(name) { %>
    <h1> Hello <%= name %> </h1>
<% } %>



# ------------ Include Template --------------

<include> - Include are relative to the template with the include call.

<!-- Syntaxt -->
<%- include(filename, object) %>
<%- include(folder/filename, object) %>

<!-- Example -->
<%- include('footer', {name: 'Sonam'} ) %>
<%- include('myfolder/footer', {name: 'Sonam'} ) %>