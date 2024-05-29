# Development the API Clean Architecture Node.js with TypeScript

```plaintext
src/
├── adapters/
│   ├── controllers/
│   │   ├── index.ts
│   │   └── UserController.ts
│   ├── presenters/
│   │   └── UserPresenter.ts
│   └── repositories/
│       └── UserRepository.ts
├── entities/
│   └── User.ts
├── frameworks/
│   ├── express/
│   │   ├── middlewares/
│   │   │   └── ExampleMiddleware.ts
│   │   └── server.ts
│   └── typeorm/
│       ├── entities/
│       │   └── UserEntity.ts
│       └── database.ts
├── services/
│   └── UserService.ts
├── shared/
│   ├── logger/
│   │   └── index.ts
│   └── utils/
│       └── Validation.ts
└── useCases/
    └── user/
        ├── createUser/
        │   ├── CreateUserController.ts
        │   ├── CreateUserUseCase.ts
        │   └── ICreateUserRepository.ts
        └── getUser/
            ├── GetUserController.ts
            ├── GetUserUseCase.ts
            └── IGetUserRepository.ts
└── index.ts

```
