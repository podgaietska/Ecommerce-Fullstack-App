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
            {url: /\/api\/cart(.*)/, methods: ['POST', 'OPTIONS']}, // allow GET and OPTIONS for /api/categories
            {url: /\/api\/wishlist(.*)/, methods: ['POST', 'OPTIONS']}, // allow GET and OPTIONS for /api/categories
            '/api/users/login',
            '/api/users/register'
        ]
    })
}

async function isRevoked(req, token){
    const url =req.url;
    const urlPattern = /\/api\/[^/]+\/([^/]+)\/?$/;

    const matches = urlPattern.exec(url);
    if(matches && matches[1]){
        const extractedId = matches[1];
        if (extractedId === token.payload.userId){
            return undefined
        }
    }

    if(token.payload.isAdmin){
        return undefined
    }

    return true
}

module.exports = authJwt;