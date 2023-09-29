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
            {url: /\/products(.*)/, methods: ['GET', 'OPTIONS']}, // allow GET and OPTIONS for /api/products
            {url: /\/categories(.*)/, methods: ['GET', 'OPTIONS']}, // allow GET and OPTIONS for /api/categories
            {url: /\/cart(.*)/, methods: ['POST', 'OPTIONS']}, // allow GET and OPTIONS for /api/categories
            {url: /\/wishlist(.*)/, methods: ['POST', 'OPTIONS']}, // allow GET and OPTIONS for /api/categories
            '/users/login',
            '/users/register',
            '/'
        ]
    })
}

async function isRevoked(req, token){
    const url =req.url;
    const urlPattern = /\/[^/]+\/([^/]+)\/?$/;

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