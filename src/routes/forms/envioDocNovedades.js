const { Router } = require("express")
var cors = require('cors')
const router = Router()
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb ( null , 'documentosNovedades')
  },
  filename: (req,file,cb) => {
    cb(null, file.originalname)
  }
});

const upload = multer({storage});

router.post('/envioDocNovedades', upload.single('file'), (req,res)=>{
  const file = req.file
  console.log(file)
  return res.send(file) 
})

// router.post('/envioDocNovedades',cors(), async(req, res) =>{
//   const file = req.file
//   console.log(file)
//   return res.send(file) 
// })

module.exports = router