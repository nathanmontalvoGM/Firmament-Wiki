## 🔴 Critical Tasks

```dataview
TASK
FROM ""
WHERE !completed AND priority = "critical"
GROUP BY class
SORT file.name ASC
```

---
