# Development the API Clean Architecture Node.js with TypeScript

```plaintext
src/
├── entities/
│   └── User.ts
├── useCases/
│   └── createUser/
│       ├── CreateUserUseCase.ts
│       ├── ICreateUserRepository.ts
│       └── CreateUserController.ts
├── adapters/
│   ├── controllers/
│   │   └── UserController.ts
│   │   └── index.ts
│   ├── repositories/
│   │   └── UserRepository.ts
│   └── presenters/
│       └── UserPresenter.ts
├── frameworks/
│   ├── express/
│   │   ├── server.ts
│   │   └── middlewares/
│   │       └── ExampleMiddleware.ts
│   └── typeorm/
│       ├── entities/
│       │   └── UserEntity.ts
│       └── database.ts
├── services/
│   └── UserService.ts
├── shared/
│   └── utils/
│       └── Validation.ts
└── index.ts
```
