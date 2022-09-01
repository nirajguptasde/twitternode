# 1. Create a new folder

# 2. Npm Init inside it

# 3. Add a start script in your package json, name it start and point it to "node app.js"

# 4. Install express

    npm i express --save-dev

# 5. Require it in your entry file (app.js in our case) and listen on port 3003

Declare the express depenedecy by requiering it.
initialize it with a new const called app
create a new const for your port
create the server and listen on the port mentioned above and respond on the console as soon as the server starts.

Here is how app js looks so far

```JS

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


```

# 6. Render some content on the webpage when someone tries accessing our server on root level

```JS
app.get('/', (req, res, next) => {
    res.status(200).send('Yahoo');
});
```

# 7. Create your first pug template

Pug is a template engine we will be using to render frontend of our website. Using template engine is most common and recommended way to show content from your web apps.

There are bunch of different template engines you use, we will be using pug.

Before you can use any template engine, you need to tell your server what engine are you going to use.

First install pug using npm and then set it as your view engine and underneath that you need to tell your server where to look for pug template files.

```JS
app.set('view engine', 'pug')
app.set("views", "views");

```

Now you need to create a views folder and inside of that you need to create a tempalte for your home template.

Just a quick gotcha

In a normal html file create tags with angular brackets. But in pug you just write the name of the tag.

Another important thing in pug is indentation.

```PUG

html
    head
        title welcome
    body
        h1 this is awesome

```

now you need to render it as a response

```JS

app.get('/', (req, res, next) => {
    res.status(200).render(home)
});

```

# 8. Render a dynamic page title

In your get method that takes care of the request on / page. create a new object with the pageTitle property.

Pass it alongside the home template in render method

```JS
app.get('/', (req, res, next) => {
    let payLoad = {
        pageTitle: 'Dynamic Page title',
    }
    res.status(200).render("home", payLoad);
});

```

Now this object and its properties are accsible inside our pug template

in add it to your title block using the # sign

title #{pageTitle}

restart your server

# 9. Extending another pug template

Now we will split our page in multiple parts

create a new folder called layout
inside that create a new pug file called main-layout.pug

inside that add following code

```Pug
html
    head
        title #{pageTitle}
    body
        block content
```

block content directive works as a placeholder and tell pug that this where the content will come

and inside your home.pug file

do this:

```pug
extends layout/main-layout.pug

block content
    h1 This is awesome
```

indentation is important

# 10. Quick HTML Improvements
