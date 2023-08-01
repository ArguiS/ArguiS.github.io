const data = require('./countryFlags.json');
const template = `<div class="image-container">
        <img src="{{imgPath}}" alt="{{imgAlt}}">
    </div>
    <div class="entry-content">
        <div class="entry-title">{{entryTitle}}</div>
        <div class="entry-rating">Rating: {{entryRating}}</div>
        <div class="entry-comment">{{entryComment}}</div>
    </div>
</div>`;

let htmlString = '';
data.forEach(d => {
    let tmplCopy = template;
    Object.keys(d).forEach(k => {
        const pattern = new RegExp('{{' + k + '}}', 'g');
        tmplCopy = tmplCopy.replace(pattern, d[k]);
    });

    htmlString += tmplCopy;
});

document.getElementById('output-container').innerHTML = htmlString;