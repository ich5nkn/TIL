MySQL / MariaDB上で日付を扱う際はCASTする必要がある

```
.having('MAX(paidDate) BETWEEN CAST(' + startDate + ' AS DATETIME) AND CAST(' + endDate + ' AS DATETIME)')
```
