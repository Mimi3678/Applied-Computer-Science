CREATE TABLE Cars (
                      id INTEGER AUTO_INCREMENT NOT NULL,
                      brand VARCHAR(50) not null,
                      type VARCHAR(50) not null,
                      PRIMARY KEY (id)
);

CREATE TABLE Registrations (
                               id INTEGER AUTO_INCREMENT NOT NULL,
                               ssn BIGINT NOT NULL,
                               name VARCHAR (50) NOT NULL,
                               address VARCHAR(50) NOT NULL ,
                               characteristics VARCHAR(50) NOT NULL ,
                               brand VARCHAR(50) NOT NULL,
                               type VARCHAR(50) NOT NULL,
                               PRIMARY KEY(id)

);

