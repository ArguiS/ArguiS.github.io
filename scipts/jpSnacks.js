const template = `
        <div class="entry">
            <div class="image-container">
                <img src="{{imgPath}}" alt="{{imgAlt}}">
            </div>
            <div class="entry-content">
                <div class="entry-title">{{entryTitle}}</div>
                <div class="entry-rating">Rating: {{entryRating}}</div>
                <div class="entry-comment">Comment: {{entryComment}}</div>
            </div>
        </div>`;

    // Asynchronous function to fetch data from the JSON file
    async function fetchData() {
        try {
            const response = await fetch('../JSON/jpSnacks.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    // Function to replace placeholders in the template with actual data
    function renderHTML(data) {
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
    }

    // Call the functions to fetch data and render HTML when the page loads
    window.addEventListener('DOMContentLoaded', async () => {
        const data = await fetchData();
        renderHTML(data);
    });