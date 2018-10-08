export default {
  async endTest(payload) {
    console.log('endTest', payload)
    return await axios.post(api.activity.tuzhu.end_test, payload)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            code: 0,
            result: {
              data: {
                level: 2,
                score: 80,
                awardAmt: 444,
              }
            }
          }
        })
      }, 500)
    })
  }
}