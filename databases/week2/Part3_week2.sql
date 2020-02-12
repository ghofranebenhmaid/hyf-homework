select * from task;

-- 1. Get all the tasks assigned to users whose email ends in @spotify.com
select task.id , task.title , task.description , user.email 
from user
join user_task on user.id = user_task.user_id
join task on task.id = user_task.task_id
where user.email like '%@spotify.com';

-- 2. Get all the tasks for 'Donald Duck' with status 'Not started'
select task.id , task.title , task.description , status.name
from user
join user_task on user.id = user_task.user_id
join task on task.id = user_task.task_id
join status on task.status_id = status.id
where user.name like '%Donald Duck%' and status.name = 'Not started';

-- 3. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select task.id, task.title, task.created, user.name
from task  
join user_task on task.id = user_task.task_id
join user on user.id = user_task.user_id
where user.name like '%Maryrose Meadows%' and month(created) = 09;

-- 4. Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
select month(created) as month, count(task.id) 
from task
group by month(created);
