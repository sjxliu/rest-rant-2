const React = require("react")

function Default (html){
    return(
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                {/* <link rel="stylesheet" href="/css/style.css"></link> */}
            </head>
            <body>
                <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">RestRANT</span>
           
           
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link"  href="/places">Places</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link"  href="/places/new">Add Place</a>
                
                        </li>
                    </ul>
                   
                </nav>
                {html.children}
            </body>
        </html>
    )

}

module.exports = Default