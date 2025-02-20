import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {
    ConflictException,
    HttpStatus,
    INestApplication,
    NotFoundException,
    ValidationPipe,
} from '@nestjs/common';
import * as request from 'supertest';
import { v4 as uuidv4 } from 'uuid';

const mockUserService = () => ({
    create: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
});

describe('UserController', () => {
    let controller: UserController;
    let service: UsersService;
    let app: INestApplication;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [{ provide: UsersService, useFactory: mockUserService }],
        }).compile();

        controller = module.get<UserController>(UserController);
        service = module.get<UsersService>(UsersService);

        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('create', () => {
        it('should create a user', async () => {
            const createUserDto: CreateUserDto = {
                firstName: 'John',
                lastName: 'Doe',
                age: 30,
                gender: 'male',
                email: 'john.doe@example.com',
            };
            const expectedUser: User = {
                id: uuidv4(),
                ...createUserDto,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            jest.spyOn(service, 'create').mockResolvedValue(expectedUser);

            const response = await request(app.getHttpServer())
                .post('/user')
                .send(createUserDto)
                .expect(HttpStatus.CREATED); // Expect 201 Created if using NestJS default, or 200 OK if controller is set to 200

            expect(response.body).toEqual(expectedUser);
            expect(service.create).toHaveBeenCalledWith(createUserDto);
        });

        it('should return BadRequestException if validation fails', async () => {
            const invalidUserDto = {
                firstName: '', // Invalid: Empty string
                lastName: 'Doe',
                age: 10, // Invalid: Below minimum age
                gender: 'invalid-gender', // Invalid: Not in enum
                email: 'invalid-email', // Invalid: Not email format
            };

            const response = await request(app.getHttpServer())
                .post('/user')
                .send(invalidUserDto)
                .expect(HttpStatus.BAD_REQUEST);

            expect(response.body.message).toBeDefined(); // Check for validation error messages
            expect(service.create).not.toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a user by id', async () => {
            const userId = uuidv4();
            const expectedUser: User = {
                id: userId,
                firstName: 'John',
                lastName: 'Doe',
                age: 30,
                gender: 'male',
                email: 'john.doe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            jest.spyOn(service, 'findOne').mockResolvedValue(expectedUser);

            const response = await request(app.getHttpServer())
                .get(`/user/${userId}`)
                .expect(HttpStatus.OK);

            expect(response.body).toEqual(expectedUser);
            expect(service.findOne).toHaveBeenCalledWith(userId);
        });

        it('should return BadRequestException for invalid UUID', async () => {
            const invalidUserId = 'invalid-uuid';

            const response = await request(app.getHttpServer())
                .get(`/user/${invalidUserId}`)
                .expect(HttpStatus.BAD_REQUEST);

            expect(response.body.message).toEqual([
                'Validation failed (uuid is expected)',
            ]);
            expect(service.findOne).not.toHaveBeenCalled();
        });

        it('should return NotFoundException if user not found', async () => {
            const userId = uuidv4();
            jest.spyOn(service, 'findOne').mockRejectedValue(
                new NotFoundException(),
            );

            await request(app.getHttpServer())
                .get(`/user/${userId}`)
                .expect(HttpStatus.NOT_FOUND);

            expect(service.findOne).toHaveBeenCalledWith(userId);
        });
    });

    describe('update', () => {
        it('should update a user', async () => {
            const userId = uuidv4();
            const updateUserDto: UpdateUserDto = {
                firstName: 'Updated John',
                age: 31,
            };
            const updatedUser: User = {
                id: userId,
                firstName: 'Updated John',
                lastName: 'Doe',
                age: 31,
                gender: 'male',
                email: 'john.doe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            jest.spyOn(service, 'update').mockResolvedValue(updatedUser);

            const response = await request(app.getHttpServer())
                .put(`/user/${userId}`)
                .send(updateUserDto)
                .expect(HttpStatus.OK);

            expect(response.body).toEqual(updatedUser);
            expect(service.update).toHaveBeenCalledWith(userId, updateUserDto);
        });

        it('should return BadRequestException for invalid UUID', async () => {
            const invalidUserId = 'invalid-uuid';
            const updateUserDto: UpdateUserDto = { firstName: 'Updated Name' };

            const response = await request(app.getHttpServer())
                .put(`/user/${invalidUserId}`)
                .send(updateUserDto)
                .expect(HttpStatus.BAD_REQUEST);

            expect(response.body.message).toEqual([
                'Validation failed (uuid is expected)',
            ]);
            expect(service.update).not.toHaveBeenCalled();
        });

        it('should return NotFoundException if user not found during update', async () => {
            const userId = uuidv4();
            const updateUserDto: UpdateUserDto = { firstName: 'Updated Name' };
            jest.spyOn(service, 'update').mockRejectedValue(
                new NotFoundException(),
            );

            await request(app.getHttpServer())
                .put(`/user/${userId}`)
                .send(updateUserDto)
                .expect(HttpStatus.NOT_FOUND);

            expect(service.update).toHaveBeenCalledWith(userId, updateUserDto);
        });
    });

    describe('remove', () => {
        it('should remove a user', async () => {
            const userId = uuidv4();
            jest.spyOn(service, 'remove').mockResolvedValue(undefined);

            await request(app.getHttpServer())
                .delete(`/user/${userId}`)
                .expect(HttpStatus.NO_CONTENT);

            expect(service.remove).toHaveBeenCalledWith(userId);
        });

        it('should return BadRequestException for invalid UUID', async () => {
            const invalidUserId = 'invalid-uuid';

            const response = await request(app.getHttpServer())
                .delete(`/user/${invalidUserId}`)
                .expect(HttpStatus.BAD_REQUEST);

            expect(response.body.message).toEqual([
                'Validation failed (uuid is expected)',
            ]);
            expect(service.remove).not.toHaveBeenCalled();
        });

        it('should return ConflictException if user not found during delete (as per service logic)', async () => {
            // Corrected expectation to ConflictException
            const userId = uuidv4();
            jest.spyOn(service, 'remove').mockRejectedValue(
                new ConflictException(`User with ID ${userId} not found`),
            );

            await request(app.getHttpServer())
                .delete(`/user/${userId}`)
                .expect(HttpStatus.CONFLICT); // Expect 409 ConflictException as per service logic

            expect(service.remove).toHaveBeenCalledWith(userId);
        });
    });
});
