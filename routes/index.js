
const railwayController = require('../controller/railwaysController');

let routes = (app, router) => {

    app.use("/railway", router);
    // GET APIs
    router.get('/getData', railwayController.getRailwayData);

    // POST APIsx
    router.post('/saveData', railwayController.saveRaiwayData)


};

module.exports = routes;
