CREATE TABLE comments (
    cid int(11) not null AUTO_INCREMENT PRIMARY KEY,
    uid varchar(100) not null,
    date datetime not null, 
    message text not null
);