# Auth APIs
- [POST /auth/login](#auth-post-login)
- [POST /auth/register](#auth-post-register)
___
## 1.POST /auth/register
<a name="auth-post-register" hidden></a>

| Route                | Description                        | Access      |
|:---------------------|:-----------------------------------|:------------|
| POST /auth/register  | Create new user account            | Public      | 
      
## Params
1. _id 
    - type: string
    - required: true
    - regexp: mongoose_id
2. username
    - type: string
    - required: true
    - regexp: 
        1. length: min: Number - max: Number
        2. startWith: [a-z] || [A-Z]
3. accountname
    - type: string
    - required: true
    - regexp: 
        1. length: min: 4 - max: 20
        2. startWith: [a-z] || [A-Z]
        3. validate: have not been in database before
4. password
    - type: string
    - required: true
    - regexp: 
        1. length: min: 8 - max: 12
        2. startWith: [a-z] || [A-Z]
5. password2 
    - type: string
    - required: true
    - regexp: 
        1. length: min: Number - max: Number
        2. startWith: [a-z] || [A-Z]
        3. validate: must to match with password
        
## Responses
**application/json** *object*

Status code: <span style="color: lightgreen">200</span> Success

| Params                | Type              | Description                               |
|:----------------------|:------------------|:------------------------------------------|
| success               | boolean           | Specify the request is successful         |
| newUser               | object            | Registered information                    |
             
Status code: <span style="color: lightcoral">400</span> Bad request

| Params                | Type              | Description                               |
|:----------------------|:------------------|:------------------------------------------|
| success               | boolean           | Specify the request is failed             |
| error                 | object            | Errors container                          |             

Status code: <span style="color: lightcoral">409</span> Conflict

| Params                | Type              | Description                               |
|:----------------------|:------------------|:------------------------------------------|
| success               | boolean           | Specify the request is failed             |
| error                 | object            | Errors container                          |            

___
## 2.POST /auth/login

<a name="auth-post-login" hidden></a>

| Route             | Description                        | Access      |
|:------------------|:-----------------------------------|:------------|
| POST /auth/login  | Login user / Sign JWT              | Public      | 

## Params
1. accountname
    - type: string
    - required: true
    - regexp: 
        1. length: min: 4 - max: 20
        2. startWith: [a-z] || [A-Z]
        3. validate: have been in database before

2. password
    - type: string
    - required: true
    - regexp: 
        1. length: min: 8 - max: 12
        2. startWith: [a-z] || [A-Z]
        3. validate: must to match 

## Responses
**application/json** *object*

Status code: <span style="color: lightgreen">200</span> Success

| Params                | Type              | Description                               |
|:----------------------|:------------------|:------------------------------------------|
| success               | boolean           | Specify the request is successful         |
| userId                | string            | New userId created by DB                  |
| accountname           | string            | User account                              |
| username              | string            | User name                                 |
| token                 | string            | JWT authenticated token sent to client    |                         

Status code: <span style="color: lightcoral">400</span> Bad request

| Params                | Type              | Description                               |
|:----------------------|:------------------|:------------------------------------------|
| success               | boolean           | Specify the request is failed             |
| error                 | object            | Errors container                          |  

Status code: <span style="color: lightcoral">404</span> Not Found

| Params                | Type              | Description                               |
|:----------------------|:------------------|:------------------------------------------|
| success               | boolean           | Specify the request is failed             |
| error                 | object            | Errors container                          |            
