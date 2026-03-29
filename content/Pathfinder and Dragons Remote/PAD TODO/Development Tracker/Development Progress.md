```dataview
TABLE WITHOUT ID
  "Critical: " + length(filter(rows.task, (t) => t.priority = "critical" AND !t.completed)) + " remaining" AS "🔴 Critical",
  "Important: " + length(filter(rows.task, (t) => t.priority = "important" AND !t.completed)) + " remaining" AS "🟡 Important",
  "Optional: " + length(filter(rows.task, (t) => t.priority = "optional" AND !t.completed)) + " remaining" AS "🟢 Optional"
FROM ""
FLATTEN file.tasks AS task
WHERE task.priority
GROUP BY true
```
```dataview
TABLE WITHOUT ID
  class AS "Classes",
  length(filter(rows.task, (t) => t.completed)) AS "Done",
  length(filter(rows.task, (t) => !t.completed)) AS "Remaining",
  round((length(filter(rows.task, (t) => t.completed)) / length(rows.task)) * 100) + "%" AS "Progress"
FROM ""
FLATTEN file.tasks AS task
WHERE task.class
GROUP BY task.class AS class
SORT class ASC
```