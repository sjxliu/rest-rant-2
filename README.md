# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Routes

|Method  |Path                     |Purpose                                                 |
|--------|:-----------------------:|-------------------------------------------------------:|
|GET	 |   /	                   |  Home page                                             |
|GET	 |/places	               |  Places index page                                     |
|POST	 |/places	               | Create new place                                       |
|GET	 |/places/new	           | Form page for creating a new place                     |
|GET	 |/places/:id	           | Details about a particular place                       |
|PUT     |/places/:id	           | Update a particular place                              |
|GET	 |/places/:id/edit	       | Form page for editing an existing place                |
|DELETE	 |/places/:id	           | Delete a particular place                              |
|POST	 |/places/:id/rant	       | Create a rant (comment) about a particular place       |
|DELETE	 |/places/:id/rant/:rantId |	Delete a rant (comment) about a particular place    |
|GET	 |   *	                   | 404 page (matches any route not defined above)         |

## Places
1. Olive Garden
    - Location: Milwaukee, WI
    - Foods: Pasta, breadsticks, good soup 
    ![Olive Garden bag with salad, mac n cheese, breadsticks](https://th.bing.com/th/id/OIP.I1ZHUzbD5-3YLJvRXAfxgwHaFj?pid=ImgDet&rs=1)

2. Ossu Seiromushi
    - Location: Songpa-gu, Seoul South Korea
    - Foods: Seirofushi, Seiromushi, Onigirio 
    ![Enterance to Ossu Seiromushi at night, it's on the corner of a street with simple wooden accents](https://laverdadnoticias.com/export/sites/laverdad/img/2020/09/17/restaurante_de_jin.jpg_738882147.jpg)


