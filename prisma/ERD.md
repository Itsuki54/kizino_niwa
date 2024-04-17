```mermaid
erDiagram

  "User" {
    String id "🗝️"
    String name
    String email
    String image "❓"
    Boolean admin
    DateTime createdAt
    }


  "Article" {
    String id "🗝️"
    String title
    String content
    String image "❓"
    Boolean published
    DateTime createdAt
    DateTime updatedAt
    Int like
    String userId
    }


  "Notification" {
    String id "🗝️"
    String title
    String description
    String image "❓"
    Boolean read
    DateTime createdAt
    String userId
    }


  "Tag" {
    String id "🗝️"
    String name
    String userId
    }


  "Bookmark" {
    String id "🗝️"
    String name
    }


  "Group" {
    String id "🗝️"
    String name
    String image "❓"
    String description
    DateTime createdAt
    }


  "Comment" {
    String id "🗝️"
    String content
    DateTime createdAt
    String userId
    String articleId
    }

    "User" o{--}o "Tag" : "tag"
    "User" o{--}o "Bookmark" : "bookmark"
    "User" o{--}o "Group" : "group"
    "User" o{--}o "Article" : "articles"
    "User" o{--}o "Notification" : "notification"
    "User" o{--}o "Comment" : "comment"
    "Article" o|--|| "User" : "user"
    "Article" o{--}o "Tag" : "tagId"
    "Article" o{--}o "Bookmark" : "bookmarkId"
    "Article" o{--}o "Comment" : "comment"
    "Notification" o|--|| "User" : "users"
    "Tag" o|--|| "User" : "users"
    "Tag" o{--}o "Article" : "articles"
    "Bookmark" o{--}o "User" : "users"
    "Bookmark" o{--}o "Article" : "articles"
    "Group" o{--}o "User" : "users"
    "Comment" o|--|| "User" : "users"
    "Comment" o|--|| "Article" : "articles"
```
