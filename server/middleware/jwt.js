var { expressjwt: jwt } = require("express-jwt");

const authJwt = () => {
    const secret = process.env.JWT_SECRET;
    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/products(.*)/, methods: ['GET', 'OPTIONS']}, // allow GET and OPTIONS for /api/products
            {url: /\/api\/categories(.*)/, methods: ['GET', 'OPTIONS']}, // allow GET and OPTIONS for /api/categories
            {url: /\/api\/users(.*)/, methods: ['GET', 'OPTIONS']},
            '/api/users/login',
            '/api/users/register'
        ]
    })
}

async function isRevoked(req, token){
    if(!token.payload.isAdmin){
        return true
    }
    return undefined
}

module.exports = authJwt;