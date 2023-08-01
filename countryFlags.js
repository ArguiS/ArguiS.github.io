let page = document.querySelector("#page");
let entries = [
    { title: "Title1", rating: "Rating1", comment: "comment1" },
    { title: "Title2", rating: "Rating2", comment: "comment2" },
    // ...
];
//You will have to get the entries array from your json file using JSON.parse()
console.log(entries)
entries.forEach((entry) => {
    page.innerHTML += `<div class="entry-content">
            <div class="entry-title">${entry.title}</div>
            <div class="entry-rating">Rating: ${entry.rating}</div>
            <div class="entry-comment">Comment: ${entry.comment}</div>
        </div>`;
});