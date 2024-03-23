const schema = require('../schema/schema');

const addData = async(req,res,next) =>{
    const {firstName,middleName,lastName,fatherName,gender,
        mobileNumber,current_address,permanent_address,sslcSchool,
        sslcMarks,pucCollege,pucMarks,branch} = req.body;

    try{
        const exitsMobileNumber = await schema.registerdStudents.findOne({mobileNumber:mobileNumber});
        if(exitsMobileNumber){
            res.status(401).json({
                message:"Mobile Number Already exits please provide another one",
                isError:true
            })
        } else {
            await schema.registerdStudents.create({
                firstName,middleName,lastName,fatherName,gender,
                mobileNumber,current_address,permanent_address,sslcSchool,
                sslcMarks,pucCollege,pucMarks,branch
            })
            res.status(200).json({
                message:"Data added successfully",
                isError:false
            })
        }
        
    }catch(err){
        next(err);
        res.status(500).json({
            error: true,
            message: `${err}`,
        });
    }

}


module.exports = {addData}