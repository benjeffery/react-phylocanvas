import React from 'react';
import PhyloCanvas from 'phylocanvas';
import {treeTypes} from 'phylocanvas';
import _keys from 'lodash.keys';

export default class PhylocanvasComponent extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    data: React.PropTypes.string,
    style: React.PropTypes.object,
    treeType: React.PropTypes.oneOf(_keys(treeTypes)),
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
    if (prevProps.treeType !== props.treeType) {
      this.tree.setTreeType(props.treeType);
    }
  }

  render() {
    const { className, style } = this.props;
    return (<div ref="phyloCanvasDiv" style={style} className={className} />);
  }
}
