-- 0
select *
from task;
-- 1 
select count(id) 
from task;
-- 2 
select count(id) 
from task 
where due_date 
is null ;
-- 3
select *
from task
where status_id = 3 ;
-- 4
select * 
from task 
where status_id != 3;
-- 5
select * 
from task 
order by updated desc;
-- 6
select *  
from task 
order by updated desc limit 1;
-- 7
select title ,due_date
from task
where title like '%database%' 
OR description like '%database%';
-- 8
select task.title, status.name 
from task 
inner join status on task.status_id = status.id; 
-- 9
select name, count(*)
from status join task on status.id = task.status_id
group by status.name;
-- 10
select count(status_id), name 
from status join task on status.id = task.status_id
group by status.name
order by count(status_id) desc;












