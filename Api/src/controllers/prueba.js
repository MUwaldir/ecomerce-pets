const prueba =  (req, res, next) => {
        const data = {
            id:1,
            name:"paty",
            mascota:"luna"
        }

        res.status(200).json(data)
}

export default prueba;