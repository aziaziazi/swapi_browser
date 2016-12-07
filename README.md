*Created with [create-react-app](./README\create-react-app.md)*

![cap](./cap.png "cap")


# Job Test

The idea of this test is to evaluate the quality of your code.

Star Wars API - Browse Page
In this test, you will develop a React app using Material Design(Material-UI) and The Star Wars API (https://swapi.co).

Your app should browse the API resources in a data table(pagination) with a brief description(max 5 columns) and when the user clicks in one of the rows, you need to show the full description of the item.

# Notes

"If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call."

https://fr.pinterest.com/camillegabrieli/data-tables/

# TODO

- implements [wookiee translator](http://swapi.co/documentation#wookiee)
- ~~Use [stateless components pattern](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc)~~
- ~~Add PropTypes~~
- Use fetch() instead of axios ?
- fix divider problem on top of wookie switch ~~and on top of data table arrows~~
- Change State of categories and entries from containing data (en process in render function) to containing result to render (and process async in componentwillmount)
-  fix : change of categories doesn't update table