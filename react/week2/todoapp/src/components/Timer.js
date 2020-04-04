import React from 'react';

class Timer extends React.Component {
   state = { count: 0 };
   componentDidMount() {
      this.counter = setInterval(() => {
         this.setState({ count: this.state.count + 1 });
      }, 1000);
   }

   render() {
      return <p>You have spent {this.state.count} seconds on this page. </p>;
   }
}
export default Timer;
