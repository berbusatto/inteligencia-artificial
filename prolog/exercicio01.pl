%FATOS
isPrivate(santander).
isPrivate(bradesco).

isPublic(bancoDoBrasil).
isPublic(caixaEconomica).

isPolice(militar).
isPolice(civil).
isPolice(federal).

segment(santander, banco).
segment(bradesco, banco).
segment(bancoDoBrasil, banco).
segment(caixaEconomica, banco).

segment(seguranca).
segment(federal, seguranca).

%REGRAS
hasPublicResources(Institution) :- isPolice(Institution).
hasPublicResources(Institution) :- isPublic(Institution).
hasPrivateResources(Institution) :- isPrivate(Institution).

isPolice(X) :- segment(seguranca).









