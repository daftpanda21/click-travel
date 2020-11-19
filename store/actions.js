import axios from 'axios'
export default {
  getTickets(state, code) {
    console.log(code)
    axios
      .get('http://travel-api.clicksomeone.com/tickets', {
        params: {
          filter: {
            offset: 0,
            limit: 100,
            skip: 0,
            where: {
              to: code,
            },
          },
        },
      })
      .then(function (response) {
        console.log(response)
        state.commit('setTickets', response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
}
