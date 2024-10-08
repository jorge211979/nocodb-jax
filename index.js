(async () => {
    try {
        const app = require('express')();
        const {Noco} = require("nocodb");
        const httpServer = app.listen(process.env.PORT || 3000);
        app.use(await Noco.init({}, httpServer, app));
    } catch(e) {
        console.log(e)
    }
})()
