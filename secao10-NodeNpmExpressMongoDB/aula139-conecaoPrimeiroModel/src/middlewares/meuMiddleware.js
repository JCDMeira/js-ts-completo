exports.middlewareGlobal = (req, res, next)=>{
    if(req.body.cliente){
        console.log('vi que você postou um cliente');
        next();
    }
    console.log();
    console.log('Passei no midleware global');
    console.log();

    next();
};
exports.outroMiddleware = (req, res, next)=>{

    next();
};
