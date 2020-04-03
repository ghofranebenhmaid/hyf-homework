import React from 'react';

class Timer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         count: 0
      };
   }

   componentDidMount() {
      this.counter = setInterval(() => {
         this.setState({ count: this.state.count + 1 });
      }, 1000);
   }

   render() {
      const { count } = this.state;
      return <p>You have spent {count} seconds on this page. </p>;
   }
}
export default Timer;
