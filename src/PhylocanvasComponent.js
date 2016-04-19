import React from 'react';
import PhyloCanvas from 'phylocanvas';

export default class PhylocanvasComponent extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.string,
    style: React.PropTypes.object,
  }

  componentDidMount() {
    this.tree = PhyloCanvas.createTree(this.refs.phyloCanvasDiv);
    this.componentDidUpdate({});
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (prevProps.data !== props.data) {
      this.tree.load(props.data);
    }
  }

  render() {
    const { className, style } = this.props;
    return (<div ref="phyloCanvasDiv" style={style} className={className}>
      </div>);
  }
}
