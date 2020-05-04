create database meal_DB;
use meal_DB;

create table `meal` (
	`id` int(10) unsigned not null auto_increment,
    `title` varchar(255) not null,
    `description` text null default null,
    `location` text not null,
    `when` date not null,
    `max_reservations` int not null,
    `price` decimal(6,2) not null,
    `created_date` date not null,
    primary key (`id`)
    ) engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;
    
create table `reservation` (
	`id` int(10) unsigned not null auto_increment,
    `number_of_guests` int(10) not null,
    `meal_id` int(10) unsigned not null,
    `created_date` date not null,
    primary key (`id`),
    constraint `fk_meal_id` foreign key (`meal_id`) references `meal` (`id`) on delete cascade
    ) engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;
    
create table `review` (
	`id` int(10) unsigned not null auto_increment,
    `title` varchar(255) not null,
    `description` text not null,
    `meal_id` int(10) unsigned not null,
    `stars` int(10) not null,
	`created_date` date not null,
    primary key (`id`),
    constraint `fk_meal_id_from_review` foreign key (`meal_id`) references `reservation` (`meal_id`) on delete cascade
    )engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;
    
    alter table meal modify price decimal(10,2) not null;
    
insert into meal values (null, 'Pizza', 'chicken pizza', 'Copenhagen 1', '2020-02-1', 15, 80, '2020-02-25');
insert into meal values (null, 'Pasta', 'pasta pasta', 'Copenhagen 2', '2020-02-6', 30, 120, '2020-02-28');
insert into meal values (null, 'Shawarma', 'Shawarma Shawarma', 'Copenhagen 3', '2020-02-3', 8, 110.00, '2020-03-02');
insert into meal values (null, 'Burger', 'BurgerBurger', 'Copenhagen 4', '2020-03-11', 6, 150, '2020-03-05');

insert into reservation values (null, 2, 1, '2020-02-01');
insert into reservation values (null, 10, 2, '2020-02-02');
insert into reservation values (null, 4, 3, '2020-02-03');
insert into reservation values (null, 3, 4, '2020-02-04');
insert into reservation values (null, 4, 5, '2020-02-05');
insert into reservation values (null, 5, 6, '2020-02-06');

insert into review values (null, 'Excellent', 'Really amazing food with great company', 1, 5, '2020-02-20');
insert into review values (null, 'Good food, nice place', 'Food was delicious, but I was a bit cold in the room', 2, 4, '2020-02-02');
insert into review values (null, 'Average', 'Average food, not bad, not too good', 3, 3, '2020-02-25');

-- Get all meals
select * from meal;
-- Add a new meal
insert into meal values (null, 'Corn flakes', 'Crunchy breakfast', 'Copenhagen', '2019-09-26', 8, 30.00, '2019-08-25');
-- Update a meal with any id fx 1, Update any attribute fx the title or multiple attributes
update meal set title = 'Pencake' where id = 1;
-- Delete a meal with any id fx 3
delete from meal where id = 3;
-- Reservation
-- Get all reservations
select * from reservation;
-- Add a new reservation
insert into reservation values (null, 15, 6, '2019-08-25');
-- Get a reservation with any id fx 5
select * from reservation where id = 5;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation set number_of_guests = 5 where id = 2;
-- Delete a reservation with any id, fx 1
delete from reservation where id = 6;
-- > Review < --
-- Get all reviews
select * from review;
-- Add a new review
insert into review value (null, 'Okay dinner', 'It was fine.', 6, 3, '2019-08-26');
-- Get a review with any id, fx 1
select * from review where id = 5;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review set description = 'It was brilliant!' where id = 4;
-- Delete a review with any id, fx 1
delete from review where id = 3;
-- > Functionality
-- Get meals that has a price smaller than a specific price fx 90
select * from meal where price < 90;
-- Get meals that still has available reservations
select distinct meal.id, meal.title, meal.max_reservations, reservation.number_of_guests from meal
inner join reservation on meal.id = reservation.meal_id
where meal.max_reservations > reservation.number_of_guests;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from meal 
where title like '%cake%';
-- Get meals that has been created between two dates
select * from meal where created_date between '2019-08-20' and '2019-08-25';
-- Get only specific number of meals fx return only 5 meals
select * from meal limit 5;
-- Get the meals that have good reviews
select meal.id, meal.title, meal.price, review.stars from meal
inner join review on meal.id = review.meal_id
where review.stars > 3;
-- Get reservations for a specific meal sorted by created_date
select * from reservation 
inner join meal on reservation.meal_id = meal.id
where meal.title = 'Pizza'
order by reservation.created_date;
-- Sort all meals by average number of stars in the reviews
select distinct meal.title, avg(review.stars) from meal
left join review on meal.id = review.meal_id
group by meal.title
order by avg(review.stars) desc;

