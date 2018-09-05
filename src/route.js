const server = (app) => {
    app.route({
        method: 'GET',
        path: '/hello',
        handler(request, h) {
            return "hello world"
        }
    });
}


export default server;