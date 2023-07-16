function test(req, res) {
    console.log('test')
    res.status(200).json({ status: 'success', data: [] })
}

module.exports = { test }