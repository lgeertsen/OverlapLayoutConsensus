import React from 'react';

import cytoscape from 'cytoscape';

import Navbar from '../containers/Navbar';
import Helper from '../classes/Helper';
import Neighbor from '../classes/Neighbor';

const readChars = ["A", "C", "G", "T"];

var cy;
var numbers = []
for (var i = 0; i < 51; i++) {
  numbers.push(i%10);
}

var busy = false;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      sequence: "",
      rebuildSequence: "",
      lengthSequence: 50,
      minLengthRead: 5,
      maxLengthRead: 10,
      animationText: "",
      animate: false,
      reads: [],
      voisins: [],
      scores: [],
      path: [],
      busy: false,
      waitingFunctionList: [],
      showReads: false
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
           'background-color': '#f1c40f',
           'content': 'data(read)',
           'opacity': 1,
           'transition-property': 'opacity',
           'transition-duration': '0.3s'
         })
       .selector('edge')
         .css({
           'label': "data(label)",
           'curve-style': 'bezier',
           'width': 1,
           'line-color': '#95a5a6',
           'opacity': 1,
           'target-arrow-shape': 'triangle',
           'target-arrow-color': '#95a5a6',
           'transition-property': 'opacity',
           'transition-duration': '0.3s'
         })
       .selector('.hideNode')
        .css({
          'opacity': 0,
        })
        .selector('.path')
          .css({
            'width': 3,
            'line-color': '#e67e22',
            'target-arrow-color': '#d35400',
            'transition-property': 'width, line-color, target-arrow-color',
            'transition-duration': '0.5s'
          }),

      elements: elements
    });

    callback();
  }

  generateSequence() {
    let sequence = "";
    let vide = "";
    let r = this.state.lengthSequence;
    for(let i = 0; i < r; i++) {
      let m = Helper.random(0, readChars.length);
      sequence += readChars[m];
      vide += "-";
    }
    this.setState({step: 2, sequence: sequence});
    // this.setState({step: 2, sequence: "AATGCCTTACACTGAAGGTTTA"});

    // odoo.default({ el:'#sequenceContainer', from: vide, to: sequence, animationDelay: 1000, duration: 2000 });
  }

  createReads() {
    let reads = [];
    let i = 0;
    let sequence = this.state.sequence;
    let loop = true;
    let count = 0;

    while(loop) {
      let min = this.state.minLengthRead;
      let max = this.state.maxLengthRead;
      let r = Helper.random(min, max+1);
      console.log(r);
      let f = i+r;
      if(i+r >= sequence.length) {
        f = sequence.length;
        loop = false;
      }
      let read = sequence.substring(i,f);
      reads.push(read);
      this.setState({reads: reads});
      if(this.state.busy || busy) {
        let waitingFunctionList = this.state.waitingFunctionList;
        waitingFunctionList.push({
          function: this.showRead,
          data: [this, count,  i, read]
        });
        this.setState({waitingFunctionList: waitingFunctionList});
      } else {
        busy = true;
        this.setState({busy: true});
        this.showRead([this, count,  i, read]);
      }
      let b = Helper.random(3, 6);
      i = f-b;
      count++;
    }
    // reads = [
    //   "GAAGGTTTA",
  	// 	"GCCTTACAC",
  	// 	"ACTGAAGG",
  	// 	"AATGCC",
  	// 	"ACACTG"
    // ];
    this.setState({step: 3, reads: reads});
  }

  showRead(data) {

    let self = data[0];
    let count = data[1];
    let index = data[2];
    let read = data[3];

    setTimeout(() => {
      self.setState({animate: false});

      let anim = document.getElementById("animationText");
      let r = document.getElementById("read" + count);
      let p1 = document.getElementById("sequence" + index).getBoundingClientRect();
      let p2 = document.getElementById("read" + count + "char0").getBoundingClientRect();
      self.setState({animationText: read})
      let top1 = p1.top - 5;
      anim.style.top = top1 + "px";
      anim.style.left = p1.left + "px";
      anim.style.fontSize = "25px";

      setTimeout(() => {
        self.setState({animate: true});

        let top2 = p2.top - 8;
        anim.style.top = top2 + "px";
        anim.style.left = p2.left + "px";
        anim.style.fontSize = "20px";
      }, 500);
      (function(self, count, index, read) {
        setTimeout(() => {
          r.style.opacity = 1;
          self.setState({animate: false});
          self.endBusy();
          if(self.state.step > 3) {
            let anim = document.getElementById("animationText");
            anim.style.top = "-100px";
          }
        }, 950);
      })(self);
    }, 600);
    // }, 0 + (1200 * count));
  }

  shuffleReads() {
    this.skipAnimations();
    let anim = document.getElementById("animationText");
    anim.style.top = "-100px";

    let lol = this.state.reads;
    // let nums = [];
    // for(let i = 0; i < lol.length; i++) {
    //   nums.push(i);
    // }
    for(let i = 0; i < lol.length; i++) {
      let index = Helper.random(0, lol.length);
      let r = lol[i];
      lol[i] = lol[index];
      lol[index] = r;


      // let n = nums[i];
      // nums[i] = nums[index];
      // nums[index] = n;
    }
    // console.log(lol);
    // console.log(nums);
    // let positions = []
    //
    // for(let i = 0; i < nums.length; i++) {
    //   let r = document.getElementById("read" + i);
    //   let pos = r.getBoundingClientRect();
    //   positions.push(pos);
    // }
    //
    // for(let i = 0; i < nums.length; i++) {
    //   let r = document.getElementById("read" + i);
    //   r.style.position = "fixed";
    //   r.style.top = positions[i].top + "px";
    //   r.style.left = positions[i].left + "px";
    // }
    this.setState({step: 4, reads: lol});
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
    this.setState({step: 5});
    this.createGraph(elements, this.showNodes);
  }

  overlap(s1, s2){
  	let max = 0;
    for(let i = 1; i <= Math.min(s1.length, s2.length); i++) {
      if(s1.substr(s1.length-i, s1.length-1) == s2.substr(0, i)) {
        if(max < i) {
          //update max and str
          max = i;
          //result = s1 + s2.substr(i);
        }
      }
    }
    //return str;
    return max;
  }

  drawEdges() {
    let voisins = this.state.voisins;
    let scores = this.state.scores;
    let reads = this.state.reads;

    for(let i = 0; i < reads.length; i++){
      voisins[i] = [];
      scores[i] = [];
  		for(let j = 0; j < reads.length; j++){
  			let score = 0;
  			if(i != j){
  				score = this.overlap(reads[i], reads[j]);
  				// if(score == (int)reads[i].size()) reads[j].size())

  				//on ne compte pas les chevauchements avec un score nulle ou les chevauchements inclus
  				if(score > 0) //&& score != (int)reads[j].size())// && score < (int)min(reads[i].size(), reads[j].size()))
            voisins[i].push(j);

  			}
  			scores[i].push(score);
  		}
  	}
    this.setState({voisins: voisins, scores: scores});

    let edges = [];
    for(let i = 0; i < voisins.length; i++) {
      for(let j = 0; j < voisins[i].length; j++) {
        edges.push({
          data: {
            id: 'e' + i + 't' + voisins[i][j],
            source: 'r' + i,
            target: 'r' + voisins[i][j],
            // label: "label"
          },
          classes: 'hideNode'
        });
      }
    }

    cy.add(edges);
    this.showEdges();
    this.setState({step: 6});
  }

  showNodes() {
    let nodes = cy.nodes();
    for(let i = 0; i < nodes.length; i++) {
      (function(ind) {
        setTimeout(() => {
          nodes[ind].removeClass('hideNode');
        }, 0 + (200 * ind));
      })(i);
    }
  }

  showEdges() {
    let edges = cy.edges();
    for(let i = 0; i < edges.length; i++) {
      (function(ind) {
        setTimeout(() => {
          edges[ind].removeClass('hideNode');
        }, 0 + (50 * ind));
      })(i);
    }
  }

  nearest_neighbor() {
    Neighbor.nearest_neighbor(this.state.voisins, this.state.scores, bestPath => {
      this.setState({step: 7, path: bestPath});
      this.highlightPath(bestPath);
    });
  }

  highlightPath(path) {
    let edges = cy.edges();
    // let path = this.state.path;
    for(let i = 0; i < path.length-1; i++) {
      (function(ind) {
        setTimeout(() => {
          edges.getElementById('e' + path[ind] + 't' + path[ind+1]).addClass('path');
        }, 0 + (750 * ind));
      })(i);
    }
  }

  rebuildSequence() {
    let seq = "";
    let path = this.state.path;
  	for(let i = 0; i < path.length; i++){
      (function(self, ind) {
        setTimeout(() => {
          let score = ind == path.length - 1 ? 0 : self.state.scores[path[ind]][path[ind+1]];
          // if(ind == 0) {
          //   seq += self.state.reads[path[ind]];
          // }
          seq += self.state.reads[path[ind]].substr(0, self.state.reads[path[ind]].length - score);
          self.setState({rebuildSequence: seq});
        }, 0 + (750 * ind));
      })(this, i);

  	}
    this.setState({step: 8, rebuildSequence: seq});
  }

  skipAnimations() {
    this.setState({waitingFunctionList: []});
    if(this.state.step == 3) {
      this.setState({showReads: true});
      let anim = document.getElementById("animationText");
      anim.style.top = "-100px";
    }
  }

  callFunction(callback, data) {
    callback(data);
  }

  endBusy() {
    busy = false;
    this.setState({busy: false});
    if(this.state.waitingFunctionList.length > 0) {
      var f = this.state.waitingFunctionList.shift();
      this.callFunction(f.function, f.data);
    }
  }

  reset() {
    // cy.add([
    //   {data: { id: 'ab', weight: 3, source: 'r0', target: 'r8', label: "label" } },
    //   {data: { id: 'ac', weight: 3, source: 'r1', target: 'r9', label: "label" } }
    // ]);
    this.setState({
      step: 1,
      sequence: "",
      rebuildSequence: "",
      lengthSequence: 50,
      minLengthRead: 6,
      maxLengthRead: 10,
      animationText: "",
      animate: false,
      reads: [],
      voisins: [],
      scores: [],
      path: [],
      busy: false,
      waitingFunctionList: [],
      showReads: false
    });
  }

  render() {
    return (
      <div id="app">

        <Navbar
          step={this.state.step}
          lengthSequence={this.state.lengthSequence}
          minLengthRead={this.state.minLengthRead}
          maxLengthRead={this.state.maxLengthRead}

          changeLengthSequence={e => this.setState({lengthSequence: e.target.value})}
          changeMinLength={e => this.setState({minLengthRead: e.target.value})}
          changeMaxLength={e => this.setState({maxLengthRead: e.target.value})}

          generateSequence={() => this.generateSequence()}
          createReads={() => this.createReads()}
          shuffleReads={() => this.shuffleReads()}
          showGraph={() => this.showGraph()}
          drawEdges={() => this.drawEdges()}
          nearest_neighbor={() => this.nearest_neighbor()}
          rebuildSequence={() => this.rebuildSequence()}
          reset={() => this.reset()}
        />

        <h6 id="animationText" className={this.state.animate ? 'animate' : ''}>
          {this.state.animationText.split('').map((letter, index) => (
            <span key={index} id={"animation" + index} className={"read" + letter}>{letter}</span>
          ))}
        </h6>

        <div id="reset">
          <button className="btn btn-outline-dark" onClick={() => this.reset()}>RESET</button>
          {/* <button className="btn btn-outline-warning" onClick={() => this.skipAnimations()}>SKIP ANIMATIONS</button> */}
        </div>

        {/* {this.state.step == 1 || this.state.step == 2 ?
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
        } */}
        <div id="graphs">
          <div id="sidebar" className={this.state.step > 4 ? 'open' : ''}>
            {this.state.step < 5 ?
              <div id="sequenceContainer">
                <h6>
                  {this.state.sequence.split('').map((letter, index) => (
                    <span key={index} id={"sequence" + index} className={"read" + letter}>{letter}</span>
                  ))}
                </h6>
                {/* <h6 id="numbers">
                  {numbers.map((letter, index) => (
                    <span key={index}>{letter}</span>
                  ))}
                </h6> */}
              </div>
              : ''
            }
            { this.state.step < 7 ?
              <div id="readsContainer">
                <div id="readsBox" className={this.state.showReads ? "row justify-content-center showReads" : "row justify-content-center"}>
                  {this.state.reads.map((read, index) => (
                    <div key={index} id={"read" + index} className="read col-md-2">
                      {read.split('').map((letter, index2) => (
                        <span key={index2} id={"read" + index + "char" + index2} className={"read" + letter}>{letter}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              : ''
            }
            { this.state.step > 6 ?
              <div id="rebuildContainer">
                <div id="rebuildSequence">
                  <h6>
                    {this.state.sequence.split('').map((letter, index) => (
                      <span key={index} id={"sequence" + index} className={"read" + letter}>{letter}</span>
                    ))}
                    <br/>
                    {this.state.rebuildSequence.split('').map((letter, index) => (
                      <span key={index} id={"sequence" + index} className={"read" + letter}>{letter}</span>
                    ))}
                  </h6>
                </div>
              </div>
              : ''
            }
          </div>
          <div id="cy" className={this.state.step > 4 ? 'open' : ''}></div>
        </div>

        <style jsx>{`
          #animationText {
            // opacity: 0;
            top: 200px;
            left: 0px;
            z-index: 1000;
            position: fixed;
            border-bottom: 2px solid green;
          }
          #animationText.animate {
            transition: top .5s linear, left .5s linear, font-size .5s linear;
          }
          #reset {
            position: fixed;
            z-index: 1000;
            left: 10px;
            bottom: 10px;
          }
          #graphs {
            display: flex;
            flex-direction: column;
          }
          #sidebar {
            width 100%;
            height: calc(100vh - 56px);
            padding: 0 5%;
            background: #ecf0f1;
            transition: height 1s ease;
            display: flex;
            flex-direction: column;
            // justify-content: center;
            // align-items: center;
            overflow-x: auto;
          }
          #sidebar.open {
            height: calc(25vh - 56px);;
          }
          #sequenceContainer {
            padding-top: 25px;
            text-align: center;
          }
          #rebuildSequence {
            margin-top: 25px;
            // text-align: center;
          }
          #sequenceContainer h6, #rebuildSequence h6, #animationText {
            font-size: 25px;
            font-weight: bold;
            word-break: break-all;
            line-height: 40px;
            letter-spacing: 4px;
            font-family: monospace;
          }
          #cy {
            width: 100%;
            height: calc(80vh - 56px);
            transition: height 1s ease;
          }
          .wrapper {
            height: calc(100vh - 56px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 25px;
          }
          .row {
            max-height: calc(100vh - 56px);
            padding 25px 10px;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            letter-spacing: 4px;
            font-family: monospace;
          }
          .read {
            opacity: 0;
          }
          .showReads .read {
            opacity: 1;
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
