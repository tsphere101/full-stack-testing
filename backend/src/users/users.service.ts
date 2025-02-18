import {
  BadRequestException,
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
  ) { }
  async create(createUserDto: CreateUserDto): Promise<User> {
    if (!createUserDto.email) {
      throw new BadRequestException('email is required');
    }
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new ConflictException('email already in use');
    }
    if (!createUserDto.firstName) {
      throw new BadRequestException('first name is required');
    }
    if (!createUserDto.lastName) {
      throw new BadRequestException('last name is required');
    }
    if (!createUserDto.age) {
      throw new BadRequestException('age name is required');
    }
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOneOrFail({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({ where: { id } });
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
}
