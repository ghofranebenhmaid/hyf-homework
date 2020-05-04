-- 0.
select * from task;

-- 1. Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('Learn abour SQL', 'Insert, Update, Delete from data base', '2020-02-02', '2020-02-04', '2020-02-05', 1, 3);

-- 2. Change the title of a task with these attributes: taskID, newTitle
UPDATE task 
SET 
    title = 'newTitle'
WHERE
    id = 36;

-- 3. Change the task due date with these attributes: taskID, newDueDate
UPDATE task 
SET 
    due_date = '2020-02-09 15:00:00'
WHERE
    id = 36;

-- 4. Change the task status with these attributes: taskID, newStatus
UPDATE task 
SET 
    status_id = 2
WHERE
    id = 36;

-- 5. Mark a task as complete with this attribute: taskID
UPDATE task 
SET 
    status_id = 6
WHERE
    id = 36;

-- 6. Delete task with this attribute: taskID
DELETE FROM task 
WHERE
    id = 36;