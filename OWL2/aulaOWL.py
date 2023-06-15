from owlready2 import *

print("criando")
onto = get_ontology("http://test.org/onto.owl")

print("salvando")
onto.save(file= "ontolody_first", format = "rdfxml")
