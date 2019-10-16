INSERT INTO booking (name, bed, meal, arriveDate, leaveDate, roomNumber, price, status) VALUES ('Anna', 4, 'HB', '2019-10-13', '2019-10-20.',  5, 25000, 'NEW');
INSERT INTO booking (name, bed, meal, arriveDate, leaveDate, roomNumber, price, status) VALUES ('Béla', 2, 'ALLINCLUSIVE', '2019-10-13', '2019.10.20.',  1, 10000, 'NEW');
INSERT INTO booking (name, bed, meal, arriveDate, leaveDate, roomNumber, price, status) VALUES ('László', 1, 'HB', '2019-10-13', '2019-10-20',  2, 5000, 'NEW');

INSERT INTO user (name, username, password, role) VALUES ('Tibor', 'tibor', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_ADMIN');
INSERT INTO user (name, username, password, role) VALUES ('László', 'laszlo', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');
INSERT INTO user (name, username, password, role) VALUES ('Péter', 'peter', '$2a$04$YDiv9c./ytEGZQopFfExoOgGlJL6/o0er0K.hiGb5TGKHUL8Ebn..', 'ROLE_USER');

INSERT INTO extra (parking, cleaning, balcony, view, massage, wellness, extraBed) VALUES (true, true, true, true, true, true, true);

INSERT INTO calendar (arriveDate, leaveDate) VALUES ('2019.10.13.', '2019.10.20.');

INSERT INTO room (number, capacity, balcony, extraBed, price) VALUES (1, 5, true,  true, 15000);
INSERT INTO room (number, capacity, balcony, extraBed, price) VALUES (2, 5, true,  true, 15000);
INSERT INTO room (number, capacity, balcony, extraBed, price) VALUES (3, 5, true,  true, 15000);
INSERT INTO room (number, capacity, balcony, extraBed, price) VALUES (4, 5, true,  true, 15000);
