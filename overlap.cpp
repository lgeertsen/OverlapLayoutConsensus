#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>
#include <cstdio>

using namespace std;

const char ADN[] = {'A', 'G', 'C', 'T'}; 

int random(int min, int max){
	return min + rand() % (max - min + 1);
}

string create_sequence(int n){

	string seq;

	for(int i = 0 ; i < n ; i++){
		seq.push_back(ADN[rand() % 4]);
	}

	return seq; 
}

string random_read(int min_size, int max_size){

	string read;
	int read_size = min_size + rand() % (max_size - min_size + 1);

	read = create_sequence(read_size);

	return read; 
}

void create_reads(int min_size, int max_size, vector<string>& reads){
	
	for(int i = 0 ; i < (int)reads.size() ; i++){
		reads[i] = random_read(min_size, max_size);
	}
}

void create_reads(const string& sequence, int min_size, int max_size, vector<string>& reads){

	int i = 0;
	bool loop = true;

	while(loop){

		int r = random(min_size, max_size + 1);
		int f = i + r;
		
		if(i + r >= (int)sequence.size()){
			f = sequence.size();
			loop = false;
		}

		reads.push_back(sequence.substr(i, f - i));

		int b = random(3, 6);
		i = f - b;
	}
}

void create_reads(const string& sequence, int n, int min_size, int max_size, vector<string>& reads){

	int overlap_start = 0; 
	string overlap;

	int read_start = 0;
	string read;

	int offset = n == 0 ? sequence.size() : sequence.size() / n;

	for(int i = 0 ; i < n ; i++){

		read = sequence.substr(read_start, offset);

		if(i != 0){
			
			int overlap_len = min(random(min_size, max_size), (int)read.size());//random(min_size, max_size);//
			overlap_start = read_start - overlap_len;

			overlap = sequence.substr(overlap_start, overlap_len);
		}


		read_start += offset;
		
		reads.push_back(overlap + read);
	}
}

void print_reads(const vector<string>& reads){
	for (int i = 0; i < (int)reads.size(); ++i){
		cout << reads[i] << endl;
	}
}

void print_scale(int n){
	for (int i = 0; i < n; ++i){
		cout << i % 10;
	}
	cout << endl;
}

int overlap(const string& s1, const string& s2){

	int max = 0;

    int s1_size = s1.size();
    int s2_size = s2.size();
 
    // check suffix of s1 matches with prefix of s2
    for (int i = 1; i <= min(s1_size, s2_size); i++)
    {
        // compare last i characters in s1 with first i
        // characters in s2
        if (s1.compare(s1_size - i, i, s2, 0, i) == 0)
        {
            if (max < i)
            {
                //update max and str
                max = i;
                //result = s1 + s2.substr(i);
            }
        }
    }

    //return str;
    return max;
}

void print_reads_overlap(const vector<string>& reads){
	for (int i = 0; i < (int)reads.size(); ++i){

		int score = i == (int)reads.size() - 1 ? 0 : overlap(reads[i], reads[i+1]);

		cout << reads[i].substr(0, reads[i].size() - score);
	}
	cout << endl;
}

void create_graph(const vector<string>& reads, vector<vector<int> >& voisins, vector<vector<int> >& scores){

 	//vector<bool> banned(reads.size(), false);

	for(int i = 0 ; i < (int)reads.size() ; i++){

		for (int j = 0; j < (int)reads.size(); ++j){
			
			int score = 0;
			if(i != j){
				score = overlap(reads[i], reads[j]);

				//if(reads[j].size() == score)
				//	banned[j] = true;


				//on ne compte pas les chevauchements avec un score nulle ou les chevauchements inclus
				if(score > 0)// && score < (int)min(reads[i].size(), reads[j].size()))
					voisins[i].push_back(j);

			}
			scores[i].push_back(score);
		}
	}
}


template <typename T>
void print_graph(const vector<vector<T> >& graph){

	cout << "{ ";

	for (int i = 0; i < (int)graph.size(); ++i){

		cout << "{ ";
		
		for(int j = 0 ; j < (int)graph[i].size() ; j++){
			cout << graph[i][j] << " ";
		}

		cout << "} ";
	}

	cout << "}" << endl;
}

//Applique l'algorithme du plus proche voisin en commancant par le sommet desiré et renvoie le score total du chemin. 
int n_nearest_neighbor(int n, const vector<vector<int> >& voisins, const vector<vector<int> >& scores, vector<int>& path){
	
	int total_score = 0;
	vector<bool> visited(voisins.size(), false);

	//n est un sommet de voisins choisi arbitrairement.

	path[0] = n;
	visited[n] = true;
	
	for(int i = 1 ; i < (int)voisins.size(); i++){

		int max_score = -1;
		int best_vois = 0;

		for(int j = 0 ; j < (int)voisins[n].size() ; j++){
			
			int vois = voisins[n][j];
			int score = scores[n][vois];

			if(!visited[vois] && score > max_score){
				max_score = score;
				best_vois = vois;
			}
		}

		//pas de voisins donc chemin impossible
		if(max_score == -1)
			return -1;

		total_score += max_score;
		n = best_vois;
		
		path[i] = n;
		visited[n] = true;
	}

	return total_score;
}

//renvoie le chemin le plus efficace en appliquant le plus proche voisins sur tout les sommets
int nearest_neighbor(const vector<vector<int> >& voisins, const vector<vector<int> >& scores, vector<int>& best_path){
	
	int best_score = -2;
	
	//le score du n ieme chemin emprunté
	int n_score = 0;

	//le n ieme chemin emprunté
	vector<int> n_path(voisins.size());
	
	for(int i = 0 ; i < (int)voisins.size(); i++){

		n_score = n_nearest_neighbor(i, voisins, scores, n_path);

		if(n_score > best_score){
			best_score = n_score;
			best_path = n_path;
		}
	};

	return best_score;
}

void print_path(const vector<int>& path){
	for (int i = 0; i < (int)path.size(); ++i){
		cout << path[i] << " ";
	}
	cout << endl;
}

void space(int n){
	for (int i = 0; i < n; ++i)
		cout << " ";
}

//affiche les n premiers charactères de la chain str
void print_n(const string& str, int n){
	for(int i = 0 ; i < n && i < (int)str.size(); i++)
		cout << str[i];
}

void print_alignement(const vector<vector<int> >& scores, const vector<int>& path, const vector<string>& reads){
	
	int print_pos = 0;

	for (int i = 0; i < (int)path.size() ; ++i){
		
		int score = i == (int)path.size() - 1 ? 0 : scores[path[i]][path[i+1]];

		//int score = scores[path[i]][path[i+1]];
		//int len = reads[path[i]].size();  

		space(print_pos);

		cout << reads[path[i]] << endl;//<< " | len: " << len << ", score: " << score << endl;

		print_pos += reads[path[i]].size() - score; 
	}
}

string sequence(const vector<vector<int> >& scores, const vector<int>& path, const vector<string>& reads){
	
	string seq;

	for (int i = 0; i < (int)path.size(); i++){

		int score = i == (int)path.size() - 1 ? 0 : scores[path[i]][path[i+1]];

		seq += reads[path[i]].substr(0, reads[path[i]].size() - score);
	}

	return seq;
}

/*
vector<string> random_cut(const string reads, int ncut,int min_size, int max_size){

  vector<string> listCut;
  string copy = reads;
  int endCut = 0;
  string cut = "";
  //int startCut = 0;
  for(int i = 0; (i < ncut) && i < (int)reads.size(); i++){
    endCut = min_size + rand() % (max_size - min_size + 1);
    if(endCut >= (int)reads.size()){
      cut=copy.substr(0,(int)reads.size()-1);  
      copy.erase(0,(int)reads.size()-1);
      listCut.push_back(cut);
    }
    else{
      cut=copy.substr(0,endCut);  
      copy.erase(0,endCut);
      listCut.push_back(cut);
    }
  }
  if((int)reads.size() > 0){
    cut=copy.substr(0,(int)reads.size()-1);  
    copy.erase(0,(int)reads.size()-1);
    listCut.push_back(cut);
  }

  string overlap_copy;
  string test1;
  string test2;
  int new_cutoverlap=0;
  
  for(int i = 1; i < (int)listCut.size(); i++){
    test1 = listCut[i-1];
    test2 = listCut[i];
    new_cutoverlap = 1 + rand() % (max_size - min_size);
    if(test2 != ""){
    overlap_copy = test1.substr(test1.size()- new_cutoverlap, new_cutoverlap);
    overlap_copy.append(test2);
    listCut[i] = overlap_copy;
    }
  }

  return listCut;

}
*/

int main(int argc, char const *argv[])
{

	int reads_number = 0;

	string init_seq = "AATGCCTTACACTGAAGGTTTA";
	
	vector<string> reads;

	if(argc < 2){

		cout << "Ceci est la sequence par default" << endl;
		cout << "Usage : " << argv[0] << " [SEQ_LEN][MIN_OVERLAP_LEN][MAX_OVERLAP_LEN][NB_READS]" << endl << endl;

		cout << "Init Sequence: " << endl;
		cout << init_seq << endl << endl;

		reads_number = 5;

		reads.resize(reads_number);

		reads[0] = "GAAGGTTTA";
		reads[1] = "GCCTTACAC";
		reads[2] = "ACTGAAGG";
		reads[3] = "AATGCC";
		reads[4] = "ACACTG";
	}
	else{
		
		int min_overlap_len = 6;
		int max_overlap_len = 10;
		//int nb_reads = 10;

		srand(time(NULL));

		reads_number = atoi(argv[1]);

		init_seq = create_sequence(reads_number);

		cout << "Init Sequence: " << endl;
		cout << init_seq << endl << endl;

		if(argc > 2){
			min_overlap_len = atoi(argv[2]);
			max_overlap_len = min_overlap_len;
		}

		if(argc > 3){
			min_overlap_len = atoi(argv[2]);
			max_overlap_len = atoi(argv[3]);
		}

		//if(argc > 4){
		//	nb_reads = atoi(argv[4]);
		//}
		
		//reads = random_cut(sequence, nb_reads, min_overlap_len, max_overlap_len);
		//create_reads

		create_reads(init_seq, min_overlap_len, max_overlap_len, reads);	
		//if(argc <= 4)
		//else
			//create_reads(init_seq, nb_reads, min_overlap_len, max_overlap_len, reads);	

		cout << "Overlap check: " << endl;
		print_reads_overlap(reads);
		cout << endl;
	}

	cout << "Reads: " << endl;
	print_reads(reads);

	cout << endl;

	//le graph de taille variable
	vector<vector<int> > voisins(reads.size());
	//la matrice des scores de taille n²
	vector<vector<int> > scores(reads.size());

	create_graph(reads, voisins, scores);
	
	cout << "Graph: ";
	print_graph(voisins);

	cout << "Score: ";
	print_graph(scores);

	cout << endl;

	//le chemin hamiltonien de score maximale de taille n
	vector<int> path(reads.size());

	if(nearest_neighbor(voisins, scores, path) < 0){
		cout << "Aucun chemin possible avec l'algorithme des plus proche voisins" << endl;
		exit(EXIT_FAILURE);
	}

	cout << "Path: ";
	print_path(path);

	cout << endl;

	cout << "Alignements: " << endl;
	print_alignement(scores, path, reads);

	cout << endl;

	string seq = sequence(scores, path, reads);

	cout << "Found Sequence: (length = " << seq.size() << ")" << endl;
	cout << seq << endl << endl;

	cout << "Init Sequence: (length = " << init_seq.size() << ")" << endl;
	cout << init_seq << endl << endl;

	return 0;
}