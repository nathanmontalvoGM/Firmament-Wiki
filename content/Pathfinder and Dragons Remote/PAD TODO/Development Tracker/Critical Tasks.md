## 🔴 Critical Tasks

```dataview
TASK
FROM ""
WHERE !completed AND priority = "critical" AND (system OR class)
GROUP BY choice(class, lower(class), lower(system))
SORT file.name ASC
```

---
