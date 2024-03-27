const railwayService = require("../services/railways.service");

const saveRaiwayData = async (req, res) => {

    try {
        console.log(req.body)
        let data = await railwayService.saveRaiwayData(req.body);
        console.log("data", data)
        return res.status(data.statusCode).json({ status: data.status, data: data.data })
    } catch (e) {
        return res.status(500).send({ status: false, message: "Some error occured." })
    }
}


const getRailwayData = async (req, res) => {
    try {

        let list = await railwayService.getRailwayData();

        return res.status(200).send({ success: true, data: list })

    } catch (e) {
        return res.status(500).send({ success: false, message: "Something went wrong, Please try again." })
    }
}

module.exports = {
    saveRaiwayData,
    getRailwayData
}