CREATE TABLE Joueur(
   id_joueur VARCHAR(50) ,
   nom VARCHAR(100) ,
   date_naissance DATE NOT NULL,
   PRIMARY KEY(id_joueur)
);

CREATE TABLE Equipe(
   id_equipe VARCHAR(50) ,
   nom VARCHAR(100)  NOT NULL,
   reference VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_equipe)
);

CREATE TABLE Saison(
   id_saison VARCHAR(50) ,
   nom VARCHAR(100)  NOT NULL,
   PRIMARY KEY(id_saison)
);

CREATE TABLE Contrat(
   id_contrat VARCHAR(50) ,
   date_contrat DATE,
   id_joueur VARCHAR(50) ,
   id_saison VARCHAR(50) ,
   id_equipe VARCHAR(50) ,
   PRIMARY KEY(id_contrat),
   UNIQUE(id_joueur),
   FOREIGN KEY(id_joueur) REFERENCES Joueur(id_joueur),
   FOREIGN KEY(id_saison) REFERENCES Saison(id_saison),
   FOREIGN KEY(id_equipe) REFERENCES Equipe(id_equipe)
);

CREATE TABLE Playoff(
   id_playoff VARCHAR(50) ,
   date_playoff TIMESTAMP NOT NULL,
   id_equipe VARCHAR(50) ,
   id_equipe_1 VARCHAR(50) ,
   id_saison VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_playoff),
   FOREIGN KEY(id_equipe) REFERENCES Equipe(id_equipe),
   FOREIGN KEY(id_equipe_1) REFERENCES Equipe(id_equipe),
   FOREIGN KEY(id_saison) REFERENCES Saison(id_saison)
);

CREATE TABLE Action(
   id_action VARCHAR(50) ,
   reference VARCHAR(50)  NOT NULL,
   nom VARCHAR(50) ,
   PRIMARY KEY(id_action)
);

CREATE TABLE Effectif(
   id_effectif VARCHAR(50) ,
   status INTEGER NOT NULL,
   id_contrat VARCHAR(50)  NOT NULL,
   id_playoff VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_effectif),
   FOREIGN KEY(id_contrat) REFERENCES Contrat(id_contrat),
   FOREIGN KEY(id_playoff) REFERENCES Playoff(id_playoff)
);

CREATE TABLE Statistique(
   id_action VARCHAR(50) ,
   id_effectif VARCHAR(50) ,
   point DOUBLE PRECISION,
   PRIMARY KEY(id_action, id_effectif),
   FOREIGN KEY(id_action) REFERENCES Action(id_action),
   FOREIGN KEY(id_effectif) REFERENCES Effectif(id_effectif)
);
