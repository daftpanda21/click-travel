<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div class="ticketCard">
        <div class="row headerTicket">
          <div>
            <div class="row">
              <img
                src="~assets/plane.jpg"
                style="margin-left: 15%; position: absolute"
              />
              <p class="Title1">Boarding Pass</p>
            </div>
            <div class="row"><p class="Title2">First Class</p></div>
          </div>
        </div>
        <div class="row bodyTicket">
          <div>
            <p class="Text1">Passenger</p>
            <p class="Text2">{{ ticketInfo.passenger }}</p>
          </div>

          <div class="row">
            <div>
              <p class="Text1">Flight</p>
              <p>{{ ticketInfo.flight }}</p>
            </div>
            <div>
              <p class="Text1">From</p>
              <p>{{ ticketInfo.from }}</p>
            </div>
            <div>
              <p class="Text1">To</p>
              <p>{{ ticketInfo.to }}</p>
            </div>
            <div>
              <p class="Text1">Class</p>
              <p>{{ ticketInfo.class }}</p>
            </div>
          </div>
          <div class="row">
            <div>
              <p class="Text1">Gate</p>
              <p>{{ ticketInfo.gate }}</p>
            </div>
            <div>
              <p class="Text1">Time</p>
              <p>{{ ticketInfo.time }}</p>
            </div>
            <div>
              <p class="Text1">Seat</p>
              <p>{{ ticketInfo.seat }}</p>
            </div>
          </div>
          <div>
            <p class="Text1">Passenger</p>
            <p>{{ ticketInfo.passenger }}</p>
          </div>
          <div>
            <p class="Text1">Gate</p>
            <p>{{ ticketInfo.gate }}</p>
          </div>
          <div>
            <p class="Text1">Time</p>
            <p>{{ ticketInfo.time }}</p>
          </div>
          <div>
            <p class="Text1">Seat</p>
            <p>{{ ticketInfo.seat }}</p>
          </div>
        </div>
        <div class="row footerTicket"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    this.$route.params.ticket.time = this.$route.params.ticket.time
      .toString()
      .split(' ')[1]
    return {
      ticketInfo: this.$route.params.ticket,
    }
  },
  computed: mapGetters({
    tickets: 'getTickets',
  }),
  created() {
    if (this.$route.params.ticket === undefined) {
      this.$router.push('/')
    }
    console.log(this.$route.params.ticket)
  },
}
</script>

<style lang="scss">
.Text1 {
  color: grey;
}
.Text2 {
}
.Title1 {
  font-size: 30px;
}
.Title2 {
  font-size: 12px;
}
.bodyTicket {
  background-color: rgba(255, 255, 255, 0.89);
  padding: 10px;
  color: black;
}
.ticketCard {
  width: 80%;
}
.footerTicket {
  background-color: #35a6df;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 10px;
  color: white;
}
.headerTicket {
  background-color: #35a6df;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 10px;
  color: white;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>
