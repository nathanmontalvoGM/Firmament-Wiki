## TTRPG Development Tracker

### How to Add Tasks

Add tasks anywhere in your vault using this format:

```
- [ ] Task description [priority:: critical] [system:: Fighter] [notes:: your note here]
```

Priority values: `critical`, `important`, `optional` System values: `Fighter`, `Barbarian`, `Spells`, `Combat`, `Ancestries`, `Conditions`, `Feats`, `General`

---

---

### 📊 Overall Progress

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

---
