var movies = [
    {
        title: "movie1",
        rating: 1,
        hasWatched: true
    },
    {
        title: "movie2",
        rating: 2,
        hasWatched: true
    },
    {
        title: "movie3",
        rating: 3,
        hasWatched: false
    },
    {
        title: "movie4",
        rating: 4,
        hasWatched: false
    },
    {
        title: "movie5",
        rating: 5,
        hasWatched: false
    }
]

// movies.forEach(printDetails);

// function printDetails(movie)
// {
//     if (movie.hasWatched)
//     {
//         console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
//     }
//     else
//     {
//         console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
//     }
// }

// this is the method described in the solution for this exercise

function buildString(element)
{
    var result = "You have ";

    if (element.hasWatched)
    {
        result += " watched ";
    }
    else
    {
        result += " not seen ";
    }

    result += "\"" + element.title + "\" - ";
    result += element.rating + " stars";
    return result;
}

movies.forEach(function(movie)
{
    console.log(buildString(movie));
});