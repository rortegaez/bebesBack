// aquí ponemos como debe de actuar la validación, a la cual, luego en routes, se le pasa como parámetro el elemento a validad "schema"
const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body)
  if (error) {
    res.status(422).json({ errormessage: error.details[0].message })
  } else {
    next()
  }
}

module.exports = { validate }
