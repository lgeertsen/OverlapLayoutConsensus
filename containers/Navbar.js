import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <div id="navbar">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Overlap Layout Consensus</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            {this.props.step == 1 ?
              <div className="form-inline my-2 my-lg-0">
                <label>Length Of Sequence</label>
                <input className="form-control" type="number" min="10" value={this.props.lengthSequence} onChange={e => this.props.changeLengthSequence(e)}/>
                <button className="btn btn-outline-dark my-2 my-sm-0" onClick={() => this.props.generateSequence()}>Generate sequence</button>
              </div>
            : '' }
            {this.props.step == 2 ?
              <div className="form-inline my-2 my-lg-0">

                {/* <label>Min Length Reads:</label>
                <input className="form-control" type="number" min="5" max="10" value={this.props.minLengthRead} onChange={e => this.props.changeMinLength(e)}/>
                <label>Max Length Reads:</label>
                <input className="form-control" type="number" min="5" max="10" value={this.props.maxLengthRead} onChange={e => this.props.changeMaxLength(e)}/> */}
                <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={() => this.props.createReads()}>Create reads</button>
                {/* <button className="btn btn-outline-danger my-2 my-sm-0" onClick={() => this.props.showGraph()}>Show graph</button> */}
              </div>
            : '' }
            {this.props.step == 3 ?
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-primary my-2 my-sm-0" onClick={() => this.props.shuffleReads()}>Shuffle reads</button>
              </div>
            : '' }
            {this.props.step == 4 ?
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-info my-2 my-sm-0" onClick={() => this.props.showGraph()}>Create graph</button>
              </div>
            : '' }
            {this.props.step == 5 ?
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-warning my-2 my-sm-0" onClick={() => this.props.drawEdges()}>Draw edges</button>
              </div>
            : '' }
            {this.props.step == 6 ?
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={() => this.props.nearest_neighbor()}>
                    Calculate path
                </button>
              </div>
            : '' }
            {this.props.step == 7 ?
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.props.rebuildSequence()}>Rebuild sequence</button>
              </div>
            : '' }
            {this.props.step == 8 ?
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-dark my-2 my-sm-0" onClick={() => this.props.reset()}>RESET</button>
              </div>
            : '' }
          </div>
        </nav>

        <style jsx>{`
          .form-control {
            width: 100px;
            margin-left: 10px;
            margin-right: 20px;
          }
        `}</style>
      </div>
    );
  }
}
