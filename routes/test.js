module.exports = (router) => {
  router.get("/test", async (req,res) => {
    res.json({
      test: "succesful",
      path: '/api/test',
      createdAt: new Date().toUTCString(),
    })
  })
}