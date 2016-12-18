/**
 * 最简单的framework
 * without error check !!!
 * adopt from koa middware 
 */

class App {
    get requestListener() {
        this.middlewares.push( (req, res) => {})
        return (req, res) => {
            var ctx = this;
            return excute(0);
            function excute(index) {
                var fn = ctx.middlewares[index]
                return Promise.resolve(fn(req, res, () => {
                    return excute(index + 1)
                }))
            }
        }
    }

    listen(port) {
        http.createServer(this.requestListener).listen(port)
    }

    constructor () {
        this.middlewares = []
    }

    use (middleware) {
        this.middlewares.push(middleware)
    }
}
