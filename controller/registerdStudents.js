const schema = require('../schema/schema');

const addData = async(req,res,next) =>{
    const {name ,mobileNumber,gender,applicationAmount,profilePicture,markSheet} = req.body;

    try{
        const exitsMobileNumber = await schema.registerdStudents.findOne({mobileNumber:mobileNumber});
        if(exitsMobileNumber){
            res.status(401).json({
                message:"Mobile Number Already exits",
                isError:true
            })
        } else {
            await schema.registerdStudents.insertMany({
                name ,mobileNumber,gender,applicationAmount,profilePicture,markSheet
            })
            res.status(200).json({
                message:"Data added successfully",
                isError:false
            })
        }
        
    }catch(err){
        next(err);
        res.status(200).json({
            message:err,
            isError:true
        })
    }

}


module.exports = {addData}