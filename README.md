# Development the API Clean Architecture Node.js with TypeScript

```plaintext

src/
├── adapters/
│   ├── controllers/
│   │   ├── __tests__/
│   │   │   └── UserController.test.ts
│   │   ├── UserController.ts
│   │   └── index.ts
│   ├── presenters/
│   │   └── User/
│   │       └── UserPresenter.ts
│   └── repositories/
│       └── User/
│           └── UserRepository.ts
├── entities/
│       └── User/
│           ├── __tests__/
│           │   └── User.entity.test.ts
│           └── User.entity.ts
├── frameworks/
│   ├── express/
│   │   ├── __tests__/
│   │   │   └── server.test.ts
│   │   ├── middlewares/
│   │   │   └── ExampleMiddleware.ts
│   │   └── server.ts
│   └── typeorm/
│       ├── entities/
│       │   └── User/
│       │       └── UserEntity.ts
│       └── database.ts
├── integrations/
│   └── ExternalAPI/
│       ├── __tests__/
│       │   └── ExternalAPIService.test.ts
│       └── ExternalAPIService.ts
├── services/
│   └── User/
│       ├── __tests__/
│       │   └── UserService.test.ts
│       └── UserService.ts
├── shared/
│   ├── logger/
│   │   └── logger.ts
│   └── utils/
│       ├── __tests__/
│       │   └── Validation.test.ts
│       └── Validation.ts
└── useCases/
    └── User/
        ├── create/
        │   ├── __tests__/
        │   │   └── CreateUserUseCase.test.ts
        │   ├── CreateUserController.ts
        │   ├── CreateUserUseCase.ts
        │   └── ICreateUserRepository.ts
        ├── delete/
        │   ├── __tests__/
        │   │   └── DeleteUserUseCase.test.ts
        │   ├── DeleteUserController.ts
        │   ├── DeleteUserUseCase.ts
        │   └── IDeleteUserRepository.ts
        ├── get/
        │   ├── __tests__/
        │   │   └── GetUserUseCase.test.ts
        │   ├── GetUserController.ts
        │   ├── GetUserUseCase.ts
        │   └── IGetUserRepository.ts
        └── put/
            ├── __tests__/
            │   └── PutUserUseCase.test.ts
            ├── PutUserController.ts
            ├── PutUserUseCase.ts
            └── IPutUserRepository.ts
└── index.ts

```
