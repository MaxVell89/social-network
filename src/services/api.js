export const api = {
    feed: {
        fetch () {
            return fetch(`http://localhost:4000/feed`, {
                method:  'GET'
            });
        },
        create (comment) {
            return fetch(`http://localhost:4000/feed`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            });
        }
    }
}
