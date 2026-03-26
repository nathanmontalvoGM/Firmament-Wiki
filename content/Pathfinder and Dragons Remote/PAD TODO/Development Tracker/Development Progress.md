```dataview
TABLE WITHOUT ID
  "Critical: " + length(filter(rows, (r) => r["priority"] = "critical" AND !r.completed)) + " remaining" AS "🔴 Critical",
  "Important: " + length(filter(rows, (r) => r["priority"] = "important" AND !r.completed)) + " remaining" AS "🟡 Important",
  "Optional: " + length(filter(rows, (r) => r["priority"] = "optional" AND !r.completed)) + " remaining" AS "🟢 Optional"
FROM ""
WHERE file.tasks.priority
FLATTEN file.tasks AS task
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