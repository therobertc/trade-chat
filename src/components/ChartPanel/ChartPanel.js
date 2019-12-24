import React from "react";
import {
  Segment,
  Accordion,
  Header,
  Icon,
  Image,
  List,
  View,
  Text
} from "semantic-ui-react";

class ChartPanel extends React.Component {
  state = {
    channel: this.props.currentChannel,
    privateChannel: this.props.isPrivateChannel,
    activeIndex: 0
  };

  render() {
    const { activeIndex, privateChannel, channel } = this.state;
    const { userPosts } = this.props;

    if (privateChannel) return null;

    return (
      <Segment>
        <Header as="h3" attached="top">
          Watchlist
        </Header>

        <div>
          <h1>Stock Price</h1>
          <h1>Stock Price</h1>
          <h1>Stock Price</h1>
          <h1>Stock Price</h1>
        </div>
      </Segment>
    );
  }
}

export default ChartPanel;
