# Fullstack testing @ Techsure

## The task

We need you to implement the following interface and API server using React and NestJS.

- UI : [Figma](https://www.figma.com/design/ksMoiHRor5lWa7kfPFOdnf/Candidate-Test?node-id=0-1&t=TFSnf6uJXoGb1Huq-1)
- API Spec : `./api/spec.yml`

### Required

1. `[POST] /user` to create user and save to database.
   - Validate rules
     - `first_name` (required)
     - `last_name` (required)
     - `age` (required); 15 >= age <= 120
     - `gender` (required); possible value `male`, `female` or `non-binary`
     - `phone_number` (optional)
     - `email` (required); check email format; can not duplicate with existing user
2. `[GET] /users` Retrieve users information
   - Validate rules
     - `limit` (optional) ; 0 >= limit <= 100
     - `offset` (optional) ; 0 >= offset
     - `sort_direction` (required); possible value: `asc` or `desc`
   - Business logic
     - retrieve list of user sort by `created_at` direction following `sort_direction`
3. `[GET] /user/{id}`
   - Validate rules
     - `id` (required)
   - Business logic
     - Get user by id
       - if not exist response status code `409` following API Spec
4. `[PUT] /user/{id}` Update user information
   - Validate rules
     - `id` (required)
     - `first_name` (required)
     - `last_name` (required)
     - `age` (required); 15 >= age <= 120
     - `gender` (required); possible value `male`, `female` or `non-binary`
     - `phone_number` (optional)
     - `email` (required); check email format; can not duplicate with existing user
5. `[DELETE] /user/{id}` Delete user hard delete
   - Validate rules
     - `id` (required)
   - Business logic
     - If user not exist response status code 409 following API Spec

---

### Optional

1. `[POST] /user/{id}/profile_picture` Upload user profile picture; upload binary picture and save as base64 into database
   - Validation rules
     - `id` (required)
     - `picture` (required); file size must less than equal 5 MB.; support file type jpg, jpeg, png
2. `[GET] /user/{id}/profile_picture`
   - Validation rules
     - `id` (required)

## Using this repository

1. Fork this repo
2. Clone your fork
3. Do your magic 🌈
4. Push your work
5. Use Docker Compose to set up the development environment.
6. Reply your invitation email with the link to your repository

**There's no need to send us a pull request with your code. All tests should be sent to us
via email.**

## What we expect

Long story short, we expect clean, maintainable, legible and well
organized code above everything else. However, we also expect you:

### Layout/Design

- To make a responsive layout based on the original design. We provided a desktop-first
  design above, and you should create a responsive layout based on it. We don't expect you
  to create new design elements to be shown exclusively on small and mobile devices, but
  rather an adapted layout that fits better on smaller devices that's based on the original
  design.
- To pay attention to the design's details. One of our UX Designers created it thinking
  about every little aspect of the layout, such as margins, paddings, fonts, colors, etc.
  You should analyze the image and deliver a page that resembles the original design as much
  as possible.

### Git

- To use git. 👀
- To use meaningful yet short commit messages.

## Any questions?

[Create an issue](https://github.com/techsure-dcim/full-stack-testing/issues) on this
repository and we'll answer as quickly as possible.

Good luck! 🎉
