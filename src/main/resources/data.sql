INSERT INTO booking (name, meal, arrive_date, leave_date, price, status, created_at, modified_at) VALUES ('Anna','BREAKFAST', '2019.10.12.', '2019.10.19.',  25000, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
INSERT INTO booking (name, meal, arrive_date, leave_date, price, status, created_at, modified_at) VALUES ('Panna','ALLINCLUSIVE', '2019.10.12.', '2019.10.19.',  10000, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
INSERT INTO booking (name, meal, arrive_date, leave_date, price, status, created_at, modified_at) VALUES ('Hanna','HB', '2019.10.26.', '2019.11.02.',  5000, 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

INSERT INTO user (name, username, password, role) VALUES ('Anna', 'anna', '$2a$10$R/iQxOlyRVqTCmm5YMHTiuDmXCYLec4gn3x279jxQPA4GgdUX03z.', 'ROLE_ADMIN');
INSERT INTO user (name, username, password, role) VALUES ('Hanna', 'hanna', '$2a$10$R/iQxOlyRVqTCmm5YMHTiuDmXCYLec4gn3x279jxQPA4GgdUX03z.', 'ROLE_USER');
INSERT INTO user (name, username, password, role) VALUES ('Panna', 'panna', '$2a$10$R/iQxOlyRVqTCmm5YMHTiuDmXCYLec4gn3x279jxQPA4GgdUX03z.', 'ROLE_USER');

INSERT INTO extra (parking, cleaning, balcony, view, massage, wellness, extra_bed, booking_id) VALUES (true, true, true, true, true, true, true, 1);

INSERT INTO calendar (arrive_date, leave_date) VALUES ('2019.10.12.', '2019.10.19.');
INSERT INTO calendar (arrive_date, leave_date) VALUES ('2019.10.19.', '2019.10.26.');
INSERT INTO calendar (arrive_date, leave_date) VALUES ('2019.10.26.', '2019.11.02.');

INSERT INTO room (number, capacity, balcony, price) VALUES (1, 5, true, 15000);
INSERT INTO room (number, capacity, balcony, price) VALUES (2, 5, false, 15000);
INSERT INTO room (number, capacity, balcony, price) VALUES (3, 5, true, 15000);

INSERT INTO booking_rooms (bookings_id, rooms_id) VALUES (1, 1);
INSERT INTO booking_rooms (bookings_id, rooms_id) VALUES (1, 3);
INSERT INTO booking_rooms (bookings_id, rooms_id) VALUES (3, 2);