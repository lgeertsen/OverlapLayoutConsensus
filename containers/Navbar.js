import React from 'react';

export default class App extends React.Component {
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
                <label>Number of Reads</label>
                <input className="form-control" type="number" min="0" value={this.props.nbReads} onChange={e => this.props.changeNbReads(e)}/>
                <label>Min Length:</label>
                <input className="form-control" type="number" min="5" max="10" value={this.props.minLengthRead} onChange={e => this.props.changeMinLength(e)}/>
                <label>Max Length:</label>
                <input className="form-control" type="number" min="5" max="10" value={this.props.maxLengthRead} onChange={e => this.props.changeMaxLength(e)}/>
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={() => this.props.generateReads()}>Generate reads</button>
              </div>
            : '' }
            {this.props.step == 2 ?
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={() => this.props.showGraph()}>Show graph</button>
              </div>
            : '' }
            {this.props.step == 3 ?
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-danger my-2 my-sm-0" onClick={() => this.props.showSidebar()}>Next</button>
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
