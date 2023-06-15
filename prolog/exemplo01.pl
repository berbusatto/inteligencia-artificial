professor(jonathan,guilherme).
professor(jonathan,douglas).
professor(jonathan,luan).
professor(jonathan,bryan).
professor(jonathan,leandro).
professor(jonathan,lucas).
professor(jonathan,ernani).
professor(jonathan,aryon).
professor(jonathan,raphael).
professor(jonathan,leticia).
professor(jonathan,mariana).
professor(jonathan,jhenifer).

ministra(jonathan,ia).
ministra(jonathan,testes).
ministra(leander,ux).

disciplina(testes,guilherme).
disciplina(testes,bruno).
disciplina(ia,mariana).
disciplina(ia,leticia).
disciplina(ux,guilherme).


aluno(Y,X) :- professor(X,Y).

/Professor X ensina Aluno Y e Disciplina Z/

ensina(X,Y,Z) :- professor(X,Y), ministra(X,Z).