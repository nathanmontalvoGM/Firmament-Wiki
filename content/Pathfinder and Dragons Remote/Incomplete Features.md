```dataview
TABLE TODO
FROM "00 Feature Brainstorm/Rules/subs systems/Subsystem Backlog"
WHERE status != "complete"
AND !contains(file.etags, "#revision1")
SORT file.name ASC

```
```dataview
TABLE Revesison1
FROM "00 Feature Brainstorm/Rules/subs systems/Subsystem Backlog"
WHERE contains(file.etags, "#revision1")
SORT file.name ASC

```