# ------------ Include Template in EJS --------------

<include> - Include are relative to the template with the include call.

<!-- Syntaxt -->
<%- include(filename, object) %>
<%- include(folder/filename, object) %>

<!-- Example -->
<%- include('footer', {name: 'Sonam'} ) %>
<%- include('myfolder/footer', {name: 'Sonam'} ) %>