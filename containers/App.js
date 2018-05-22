import React from 'react';

import cytoscape from 'cytoscape';

import Navbar from '../containers/Navbar';
import Helper from '../classes/Helper';

const readChars = ["A", "C", "G", "T"];

var cy;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      nbReads: 20,
      minLengthRead: 5,
      maxLengthRead: 10,
      reads: []
    }
  }

  createGraph(elements, callback) {
    cy = cytoscape({
      container: document.getElementById('cy'),
      boxSelectionEnabled: false,
      autounselectify: true,

      layout: {
        name: 'circle'
      },

      style: cytoscape.stylesheet()
       .selector('node')
         .css({
           'height': 20,
           'width': 20,
           'background-color': '#e8e406',
           'content': 'data(read)',
           'opacity': 1,
           'transition-property': 'opacity',
           'transition-duration': '0.5s'
         })
       .selector('edge')
         .css({
           'label': "data(label)",
           'curve-style': 'bezier',
           'width': 5,
           'line-color': '#f2f08c',
           'opacity': 0.7,
           'target-arrow-shape': 'triangle',
           'target-arrow-color': 'blue'
         })
       .selector('.hideNode')
        .css({
          'opacity': 0,
        }),

      elements: elements
    });

    callback();
  }

  generateReads() {
    let reads = [];
    for(let i = 0; i < this.state.nbReads; i++) {
      (function(self, ind) {
        setTimeout(() => {
          let n = Helper.random(self.state.minLengthRead, self.state.maxLengthRead);
          let r = "";
          for(let j = 0; j < n; j++) {
            let m = Helper.random(0, readChars.length);
            r += readChars[m];
          }
          reads.push(r);
          self.setState({reads: reads});
        }, 0 + (30 * ind));
      })(this, i);
    }

    this.setState({step: 2, reads: reads});
  }

  showGraph() {
    let elements = [];
    for(let i = 0; i < this.state.reads.length; i++) {
      let r = {};
      r.group = 'nodes';
      r.data = {
        id: 'r' + i,
        read: this.state.reads[i],
        label: '<h1>sfjdqsqkldj<h1>'
      };
      r.classes = 'hideNode';
      elements.push(r);
    }
    this.setState({step: 3});
    this.createGraph(elements, this.showNodes);
  }

  showNodes() {
    let nodes = cy.nodes();
    for(let i = 0; i < nodes.length; i++) {
      (function(ind) {
        setTimeout(() => {
          nodes[i].removeClass('hideNode');
        }, 0 + (200 * ind));
      })(i);
    }
  }

  reset() {
    cy.add([
      {data: { id: 'ab', weight: 3, source: 'r0', target: 'r8', label: "label" } },
      {data: { id: 'ac', weight: 3, source: 'r1', target: 'r9', label: "label" } }
    ]);
    // this.setState({
    //   step: 1,
    //   nbReads: 20,
    //   minLengthRead: 5,
    //   maxLengthRead: 10,
    //   reads: []
    // });
  }

  render() {
    return (
      <div id="app">

        <Navbar
          step={this.state.step}
          nbReads={this.state.nbReads}
          minLengthRead={this.state.minLengthRead}
          maxLengthRead={this.state.maxLengthRead}
          changeNbReads={e => this.setState({nbReads: e.target.value})}
          changeMinLength={e => this.setState({minLengthRead: e.target.value})}
          changeMaxLength={e => this.setState({maxLengthRead: e.target.value})}
          generateReads={() => this.generateReads()}
          showGraph={() => this.showGraph()}
          showSidebar={() => {this.setState({step: 4}); setTimeout(() => {cy.resize(); cy.center();}, 1100); }}
        />

        <button id="reset" className="btn btn-outline-dark" onClick={() => this.reset()}>RESET</button>

        {this.state.step == 1 || this.state.step == 2 ?
          <div className="wrapper">
            <div className="row justify-content-center">
              {this.state.reads.map((read, index) => (
                <div key={index} className="read col-md-2">
                  {read.split('').map((letter, index) => (
                    <span key={index} className={"read" + letter}>{letter}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          : ''
        }
        <div id="graphs">
          <div id="sidebar" className={this.state.step == 4 ? 'open' : ''}></div>
          <div id="cy" className={this.state.step == 4 ? 'open' : ''}></div>
        </div>

        <style jsx>{`
          #reset {
            position: fixed;
            z-index: 1000;
            left: 10px;
            bottom: 10px;
          }
          #graphs {
            display: flex;
          }
          #sidebar {
            width 0%;
            height: calc(100vh - 56px);
            background: #ecf0f1;
            transition: width 1s ease;
          }
          #sidebar.open {
            width: 30%;
          }
          #cy {
            width: 100%;
            height: calc(100vh - 56px);
            transition: width 1s ease;
          }
          #cy.open {
            width: 70%;
          }
          .wrapper {
            height: calc(100vh - 56px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 25px;
          }
          .row {
            width: 100vw;
            max-height: calc(100vh - 56px);
            padding 25px 10px;
            text-align: center;
            font-weight: bold;
          }
          .readA {
            color: #27ae60;
          }
          .readC {
            color: #2980b9;
          }
          .readG {
            color: #c0392b;
          }
          .readT {
            color: #8e44ad;
          }
        `}</style>
      </div>
    );
  }
}
