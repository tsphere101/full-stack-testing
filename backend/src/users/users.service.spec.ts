import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityNotFoundError, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { v4 as uuidv4 } from 'uuid';
describe('UsersService', () => {
    let service: UsersService;
    let repository: Repository<User>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: getRepositoryToken(User),
                    useValue: {
                        create: jest.fn(),
                        save: jest.fn(),
                        findOne: jest.fn(),
                        findOneOrFail: jest.fn(),
                        find: jest.fn(),
                        delete: jest.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
        repository = module.get<Repository<User>>(getRepositoryToken(User));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should create a user successfully', async () => {
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

            jest.spyOn(repository, 'findOne').mockResolvedValue(undefined);
            jest.spyOn(repository, 'create').mockReturnValue(expectedUser);
            jest.spyOn(repository, 'save').mockResolvedValue(expectedUser);

            const result = await service.create(createUserDto);

            expect(result).toEqual(expectedUser);
            expect(repository.findOne).toHaveBeenCalledWith({
                where: { email: createUserDto.email },
            });
            expect(repository.create).toHaveBeenCalledWith(createUserDto);
            expect(repository.save).toHaveBeenCalledWith(expectedUser);
        });

        it('should throw ConflictException if email already exists', async () => {
            const createUserDto: CreateUserDto = {
                firstName: 'John',
                lastName: 'Doe',
                age: 30,
                gender: 'male',
                email: 'john.doe@example.com',
            };
            jest.spyOn(repository, 'findOne').mockResolvedValue(
                createUserDto as any,
            ); // Mock existing user

            await expect(service.create(createUserDto)).rejects.toThrow(
                ConflictException,
            );
            expect(repository.findOne).toHaveBeenCalledWith({
                where: { email: createUserDto.email },
            });
            expect(repository.create).not.toHaveBeenCalled();
            expect(repository.save).not.toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a user by id successfully', async () => {
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
            jest.spyOn(repository, 'findOneOrFail').mockResolvedValue(
                expectedUser,
            );

            const result = await service.findOne(userId);

            expect(result).toEqual(expectedUser);
            expect(repository.findOneOrFail).toHaveBeenCalledWith({
                where: { id: userId },
            });
        });

        it('should throw NotFoundException if user not found', async () => {
            const userId = uuidv4();
            jest.spyOn(repository, 'findOneOrFail').mockRejectedValue(
                new EntityNotFoundError(User, userId),
            ); // Mock findOneOrFail to reject

            await expect(service.findOne(userId)).rejects.toThrow(
                NotFoundException,
            );
            expect(repository.findOneOrFail).toHaveBeenCalledWith({
                where: { id: userId },
            });
        });
    });

    describe('update', () => {
        it('should update user successfully', async () => {
            const userId = uuidv4();
            const updateUserDto: UpdateUserDto = { firstName: 'Updated Name' };
            const existingUser: User = {
                id: userId,
                firstName: 'John',
                lastName: 'Doe',
                age: 30,
                gender: 'male',
                email: 'john.doe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const updatedUser: User = {
                ...existingUser,
                ...updateUserDto,
                updatedAt: new Date(),
            };

            jest.spyOn(repository, 'findOneOrFail').mockResolvedValue(
                existingUser,
            );
            jest.spyOn(repository, 'save').mockResolvedValue(updatedUser);
            jest.spyOn(service, 'findOne').mockResolvedValue(updatedUser); // Mock service.findOne to return updated user

            const result = await service.update(userId, updateUserDto);

            expect(result).toEqual(updatedUser);
            expect(repository.findOneOrFail).toHaveBeenCalledWith({
                where: { id: userId },
            });
            expect(repository.save).toHaveBeenCalledWith(
                Object.assign(existingUser, updateUserDto),
            );
            expect(service.findOne).toHaveBeenCalledWith(userId);
        });

        it('should throw NotFoundException if user not found during update', async () => {
            const userId = uuidv4();
            const updateUserDto: UpdateUserDto = { firstName: 'Updated Name' };
            jest.spyOn(repository, 'findOneOrFail').mockRejectedValue(
                new EntityNotFoundError(User, userId),
            );

            await expect(service.update(userId, updateUserDto)).rejects.toThrow(
                NotFoundException,
            );
            expect(repository.findOneOrFail).toHaveBeenCalledWith({
                where: { id: userId },
            });
            expect(repository.save).not.toHaveBeenCalled();
        });
    });

    describe('remove', () => {
        it('should delete user successfully', async () => {
            const userId = uuidv4();
            jest.spyOn(repository, 'findOneOrFail').mockResolvedValue(
                {} as User,
            ); // Mock findOneOrFail to resolve
            jest.spyOn(repository, 'delete').mockResolvedValue({
                affected: 1,
            } as any);

            await service.remove(userId);

            expect(repository.findOneOrFail).toHaveBeenCalledWith({
                where: { id: userId },
            });
            expect(repository.delete).toHaveBeenCalledWith(userId);
        });

        it('should throw ConflictException if user not found during delete', async () => {
            const userId = uuidv4();
            jest.spyOn(repository, 'findOneOrFail').mockRejectedValue(
                new EntityNotFoundError(User, userId),
            );

            await expect(service.remove(userId)).rejects.toThrow(
                ConflictException,
            );
            expect(repository.findOneOrFail).toHaveBeenCalledWith({
                where: { id: userId },
            });
            expect(repository.delete).not.toHaveBeenCalled();
        });
    });
});
