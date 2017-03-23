const data = require('../../romania.json')

module.exports = (req, res) => {
  const maps = data
  res.status(200).json({ maps })
};