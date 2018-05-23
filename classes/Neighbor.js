export default class ClassName {
  constructor() {

  }

  static n_nearest_neighbor(n, voisins, scores){
  	let total_score = 0;
  	let visited = [];
    for(var i = 0; i < voisins.length; i++) {
      visited.push(false);
    }
  	//n est un sommet de voisins choisi arbitrairement.
    let path = [];
  	path[0] = n;
  	visited[n] = true;

  	for(let i = 1; i < voisins.length; i++) {
  		let max_score = -1;
  		let best_vois = 0;

  		for(let j = 0; j < voisins[n].length; j++) {
  			let vois = voisins[n][j];
  			let score = scores[n][vois];

  			if(!visited[vois] && score > max_score){
  				max_score = score;
  				best_vois = vois;
  			}
  		}
  		//pas de voisins donc chemin impossible
  		if(max_score == -1)
  			return {score: -1, path: path};

  		total_score += max_score;
  		n = best_vois;
  		path[i] = n;
  		visited[n] = true;
  	}
  	return {score: total_score, path: path};
  }


  static nearest_neighbor(voisins, scores, callback) {
    var allPaths = [];

  	for(let i = 0; i < voisins.length; i++){
  		allPaths[i] = this.n_nearest_neighbor(i, voisins, scores);
  	}
    let max = 0;
    for(let i = 1; i < allPaths.length; i++) {
      if(allPaths[i].score > allPaths[max].score) {
        max = i;
      }
    }
    console.log(allPaths);
    console.log(allPaths[max]);
    callback(allPaths[max].path);
  }
}
