const { CalculateTotalService, QuantityByProductService, TopProductsService, AvgPriceService, RevnueByMonthService, HighestQtySoldService, DepartmentSalaryExpService } = require("../services/salesService")

exports.CalculateTotal = async(req,res)=> {
    let result = await CalculateTotalService(req);
    res.status(200).json(result)
}

exports.QuantityByProduct = async(req,res)=> {
    let result = await QuantityByProductService(req);
    res.status(200).json(result)
}

exports.TopProducts = async(req,res)=> {
    let result = await TopProductsService(req);
    res.status(200).json(result)
}

exports.AvgPrice = async(req,res)=> {
    let result = await AvgPriceService(req);
    res.status(200).json(result)
}

exports.RevnueByMonth = async(req,res)=> {
    let result = await RevnueByMonthService(req);
    res.status(200).json(result)
}

exports.HighestQtySold = async(req,res)=> {
    let result = await HighestQtySoldService(req);
    res.status(200).json(result)
}

exports.DepartmentSalaryExp = async(req,res)=> {
    let result = await DepartmentSalaryExpService(req);
    res.status(200).json(result)
}