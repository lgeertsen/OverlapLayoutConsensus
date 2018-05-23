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


vector<string> random_overlap_cut(vector<string>& listCut,int min_size, int max_size){

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






void print_listCut(const vector<string>& listCut){
  cout << "liste cut basique" <<endl;
  for(int i = 0; i < (int)listCut.size(); i++)
    {
      cout << listCut[i]<< " ";
    }
 cout << "\n";
}

void print_listCutOverlap(const vector<string>& listCut){
   cout << "liste cut overlap" <<endl;
  for(int i = 0; i < (int)listCut.size(); i++)
    {
      cout << listCut[i] << " ";
    }
 cout << "\n";
}

void print_alllist(const vector<string>& listCut, const vector<string>& listCut2){
   
  for(int i = 0; i < (int)listCut.size()-1; i++)
    {
      cout << "cut" <<endl;
      cout << listCut[i] <<endl;
      cout << "overlap" <<endl;
      cout << listCut2[i] <<endl;
    }
 cout << "\n";
}




int main(){

  srand(time(NULL));
  string test = random_read(50,100);
  cout << test << "\n";
  vector<string> test2 = random_cut(test,10,7,12);
  print_listCut(test2);
  //print_alllist(test2,test3);



}

  



