# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
DELETE FROM Person WHERE id NOT IN (
    SELECT MIN(id) FROM (
        SELECT * FROM Person
    )
    as p
    GROUP BY p.email
)
