import {
    ConflictException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityNotFoundError, Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}
    async create(createUserDto: CreateUserDto): Promise<User> {
        const existingUser = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        if (existingUser) {
            throw new ConflictException('email already in use');
        }
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: string): Promise<User> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: { id },
            });
            return user;
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                throw new NotFoundException(`User with ID '${id}' not found`);
            }
            throw error;
        }
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        try {
            const user = await this.userRepository.findOneOrFail({
                where: { id },
            });
            Object.assign(user, updateUserDto);
            await this.userRepository.save(user);
            return this.findOne(id);
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                throw new NotFoundException(`User with ID '${id}' not found`);
            }
            throw error;
        }
    }

    async remove(id: string): Promise<void> {
        try {
            await this.userRepository.findOneOrFail({ where: { id } });
            await this.userRepository.delete(id);
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                throw new ConflictException(`User with ID ${id} not found`);
            }
            throw error;
        }
    }

    async uploadProfilePicture(
        id: string,
        picture: Express.Multer.File,
    ): Promise<User> {
        const base64Image = picture.buffer.toString('base64');
        const updateUserDto: UpdateUserDto = { picture: base64Image };
        return this.update(id, updateUserDto);
    }

    async getProfilePicture(id: string): Promise<string | null> {
        const user = await this.findOne(id);
        return user.picture;
    }
}
