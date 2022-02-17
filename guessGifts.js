const guessGifts = (wishlist, presents) => {

    let guessedPresents = [];

    for (let i = 0; i < wishlist.length; i++) {
        for (let j = 0; j < presents.length; j++) {

            if (wishlist[i].size === presents[j].size && wishlist[i].clatters === presents[j].clatters && wishlist[i].weight === presents[j].weight) {

                if (guessedPresents.includes(wishlist[i].name) === false) {
                    guessedPresents.push(wishlist[i].name);
                }
            }
        }
    }

    return guessedPresents;
}


var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"},
    {name: "Toy Plane", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Play-Doh", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "no", weight: "light"}, 
    {size: "medium", clatters: "a bit", weight: "medium"}
];

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]