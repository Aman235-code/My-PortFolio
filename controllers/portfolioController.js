const express = require('express');
const sendEmailController = (req,res) => {

    try {
  
        return res.status(200).json({
            success:true,
            message: 'Your Message is Sent Successfully'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message:"Send Email API Error",
            error
        }) 
    }
}

module.exports = sendEmailController;