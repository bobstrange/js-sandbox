# memo

## Send a postrequest with a certain body
```
curl -X POST \
     -H "Content-Type: application/json" \
     -d '{"key": "val"}' \
     localhost:8080/echo
```
