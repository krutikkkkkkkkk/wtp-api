const express = require('express')
const app = express()
const cities = require('./cities.json')

app.get('/',(req,res) => {
    res.status(200).json(cities)
})

app.get('/api/:city', (req, res)=> {
    const city = req.params.city
    city = city.toLowerCase()
    const cityData = cities[city]
    if(cityData){
        res.status(200).json(cityData)
    }else{
        res.status(404).json({error: "City not found"})
    }



   


   
})


app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });