import React, { Component } from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

import AppDetailsLine from './AppDetailsLine'

class AppDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetailsDiv : '',
    };
  }

  componentWillMount() {
    this.setState({ itemDetailsDiv: this.makeDiv(this.props.currentItem)})
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentItem !== this.props.currentItem){
      this.setState({ itemDetailsDiv: this.makeDiv(this.props.currentItem)})
    }
  }

  makeDiv(item) {

    let itemsDivs = []

    for (let i = 0; i < Object.keys(item).length; i++){
      let detailKey = Object.keys(item)[i]
      let detailValue = item[Object.keys(item)[i]]
      itemsDivs.push(
        <AppDetailsLine
        key={detailKey}
        detailKey={detailKey}
        value={detailValue}/>
      )
    }

    return itemsDivs
  }

  render(){
    return (
      <div style={this.props.containersStyle}>
        <Card rounded={this.props.rounded} zDepth={this.props.zDepth}>
          <CardTitle
            title={this.props.currentItem.name} subtitle="" />
          <CardText>
            {this.state.itemDetailsDiv}
          </CardText>
        </Card>
      </div>
    );
  }
}

AppDetailContainer.propTypes = {
  currentItem: React.PropTypes.object.isRequired,
  rounded: React.PropTypes.bool.isRequired,
  zDepth: React.PropTypes.number.isRequired
};

export default AppDetailContainer;

//TODO use material ui lists ?