const express=require("express")
const router=express.Router();
const {uploadImage,reasizeImage,createUser,getSpecificUser,getAllUser,deleteUse,updateUser}=require("../services/userService")

const {createUserValidator,getUserValidator,deleteUserValidator,updateUserValidator}=require("../utils/dummy/validator/userValidator")
router.route("/").post(uploadImage,reasizeImage,createUser)
.get(getAllUser)
router.route("/:id").get(getUserValidator,getSpecificUser)
.delete(deleteUserValidator,deleteUse)
.put(updateUserValidator,uploadImage,reasizeImage,updateUser)
module.exports=router;


