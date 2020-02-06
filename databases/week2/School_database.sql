create database school;
use school;

create table `class` (
`id` int(10) unsigned not null auto_increment,
`name` varchar(180) not null,
`begins (date)` date not null,
`ends (date)` date not null,
primary key (`id`)
)  engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table `student` (
`id` int(10) unsigned not null auto_increment,
`name` varchar(255) not null,
`email` varchar(255) not null,
`phone` varchar(30) not null,
`class_id` int(10) unsigned,
primary key (`id`),
constraint `fk_class_id` foreign key (`class_id`) references `class` (`id`) on delete cascade
)
engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;

-- 1. Create an index on the name column of the student table.
create index name_index on student(name);

-- 2. Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
alter table class add column status enum('not-started', 'ongoing', 'finished');