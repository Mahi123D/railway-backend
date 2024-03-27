const railwayModel = require("../model/railwaysModel");

const saveRaiwayData = async (body) => {
    console.log("in service", body)

    const railwayData = new railwayModel(body);
    console.log(railwayData)
    if (!railwayData) {
        return {
            statusCode: 400,
            status: false,
            data: "Data not found"
        }
    }

    const savedData = await railwayData.save();
    return {
        statusCode: 200,
        status: true,
        data: savedData
    }

}

const getRailwayData = async () => {

    const railwayData = await railwayModel.find();

    return railwayData;

}

module.exports = {
    saveRaiwayData,
    getRailwayData
}