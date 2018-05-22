#include <iostream>
#include <vector>
#include <string>
#include <cstdlib>
#include <cstdio>

using namespace std;

const char ADN[] = {'A', 'G', 'C', 'T'}; 

string random_read(int min_size, int max_size){

	string read;
	int read_size = min_size + rand() % (max_size - min_size + 1);

	for(int i = 0 ; i < read_size ; i++){
		read.push_back(ADN[rand() % 4]);
	}

	return read; 
}

void create_reads(int min_size, int max_size, vector<string>& reads){
	
	for(int i = 0 ; i < (int)reads.size() ; i++){
		reads[i] = random_read(min_size, max_size);
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

int overlap(const string& s1, const string& s2, string& result){

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
                result = s1 + s2.substr(i);
            }
        }
    }

    //return str;
    return max;
}

void create_graph(const vector<string>& reads, vector<vector<int> >& voisins, vector<vector<int> >& scores, vector<vector<string> >& alignements){

	for(int i = 0 ; i < (int)reads.size() ; i++){

		for (int j = 0; j < (int)reads.size(); ++j){
			
			if(i != j){

				string alignement;
				int score = overlap(reads[i], reads[j], alignement);

				if(alignement == "")
					alignement = reads[i] + reads[j];

				//on ne compte pas les chevauchements avec un score nulle ou les chevauchements inclus
				//if(score != 0 && score < (int)min(reads[i].size(), reads[j].size())){
					
				voisins[i].push_back(j);
				scores[i].push_back(score);
				alignements[i].push_back(alignement);
				//}
			}
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

void nearest_neighbor(const vector<vector<int> >& voisins, const vector<vector<int> >& scores, vector<int>& path){
	
	vector<bool> visited(voisins.size(), false);

	int v = 0; //sommet choisi arbitrairement

	path[0] = v;
	visited[v] = true;
	
	for(int i = 1 ; i < (int)voisins.size(); i++){

		int max_score = -1;
		int best_vois = 0;

		for(int j = 0 ; j < (int)voisins[v].size() ; j++){
			

			if(!visited[voisins[v][j]] && scores[v][j] > max_score){
				max_score = scores[v][j];
				best_vois = voisins[v][j];
			}
		}

		v = best_vois;
		
		path[i] = v;
		visited[v] = true;
	}
}

void print_path(const vector<int>& path){
	for (int i = 0; i < (int)path.size(); ++i){
		cout << path[i] << endl;
	}
}

void print_sequence(const vector<int>& path, const vector<vector<string> >& alignements){
	for (int i = 1; i < (int)path.size(); ++i){
		cout << alignements[path[i-1]][path[i]] << " ";
	}
	cout << endl;
}

int main(int argc, char const *argv[])
{

	if(argc < 2){
		cerr << "Usage : " << argv[0] << " [NUMBER][MIN_SIZE][MAX_SIZE]" << endl;
		exit(EXIT_FAILURE);
	}

	srand(time(NULL));

	print_scale(10);

	int reads_number = atoi(argv[1]);

	vector<string> reads(reads_number);
	
	create_reads(5, 10, reads);
	print_reads(reads);

	cout << endl;

	vector<vector<int> > voisins(reads_number);
	vector<vector<int> > scores(reads_number);
	vector<vector<string> > alignements(reads_number);

	create_graph(reads, voisins, scores, alignements);
	print_graph(voisins);
	print_graph(scores);
	print_graph(alignements);

	cout << endl;

	vector<int> path(reads_number);

	nearest_neighbor(voisins, scores, path);
	print_path(path);

	cout << endl;

	print_sequence(path, alignements);

	return 0;
}