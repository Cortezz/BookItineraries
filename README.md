## Introduction

I'd been wanting to use AngularJS (and learn more about WebApps in general) but I didn't really know what to do. Roughly at the same time, I was reading a book and one of the characters kept hopping from place to place. Consequently, everytime he reached a new destination, I checked Google Maps in order to keep a mental note of his journey. And that gave me an idea, what if I finally learned AngularJS by making a web site where I recorded the journeys by the characters of some of the books I've read?

#BookItineraries

That's how BookItineraries was born. It's intended to be a rather simple journal which stores information regarding the journeys embarked by the characters of some of the books I've read.


#### Technology
I tried to use, when possible, technology (eg. frameworks, database engines) completely new to me.

As such, the site was built using the MEAN stack:

Front-End:
- [AngularJS](https://angularjs.org/)

Back-End:
- [Express](http://expressjs.com/)
- [node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.org/)

**Some other stuff:**
- [Mongoose](http://mongoosejs.com/) - Package used to make the access to the MongoDB much, much easier.
- [Mongolab](https://mongolab.com) - MongoDB cloud hosting service.
- I used the [Grayscale  Bootstrap template](http://blackrockdigital.github.io/startbootstrap-grayscale/) and tweaked it a little bit here and there. You can get it [here](http://startbootstrap.com/template-overviews/grayscale/).
- I managed to create the accordion list thanks to the [Angular Bootstrap UI](https://angular-ui.github.io/bootstrap/).
- [Bootstrap Social](https://github.com/lipis/bootstrap-social) for some really cool social networks buttons made in CSS.
- [Google Maps API] (https://developers.google.com/maps/) for... google maps.
- [Map Icons Collection](https://mapicons.mapsmarker.com/) for some neat custom Google Maps icons.
- [Google Books API](https://developers.google.com/books/docs/v1/getting_started) to fetch data from books. This wasn't really necessary since there's no dynamic information but I wanted to try it anyway.
- And last but not least, I used the following images:
  - [This](https://artsintherightplace.files.wordpress.com/2012/01/still-no-soul-appeared-upon-her-decks.jpg) one for the home page, create by book sculptor Justin Rowe.
  - And for the page which displays the itinerary, [this](http://wallpaperswide.com/reading_imagination-wallpapers.html) one.

#### List of Books

 - All the Light We Cannot See
 - Over the Edge of the World - Magellan's Terrifying Circumnavigation of the Globe

#### Want to check it out?

Sure thing, go ahead!
```
http://bookitineraries.herokuapp.com
```
