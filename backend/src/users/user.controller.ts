import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
    Res,
    UploadedFile,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfilePictureValidationPipe } from './pipes/profile-picture-validation.pipe';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UsersService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    async create(@Body() user: CreateUserDto): Promise<User> {
        return await this.userService.create(user);
    }

    @Get(':id')
    async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<User> {
        return await this.userService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Body() user: UpdateUserDto,
    ): Promise<User> {
        return await this.userService.update(id, user);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id', new ParseUUIDPipe()) id: string) {
        return await this.userService.remove(id);
    }

    @Post(':id/profile_picture')
    @UseInterceptors(FileInterceptor('picture'))
    async uploadProfilePicture(
        @Param('id', new ParseUUIDPipe()) id: string,
        @UploadedFile(ProfilePictureValidationPipe)
        picture: Express.Multer.File,
    ): Promise<User> {
        return await this.userService.uploadProfilePicture(id, picture);
    }

    @Get(':id/profile_picture')
    async getProfilePicture(
        @Param('id', new ParseUUIDPipe()) id: string,
        @Res() res: Response,
    ): Promise<void> {
        const profilePictureBase64 =
            await this.userService.getProfilePicture(id);
        if (!profilePictureBase64) {
            res.status(HttpStatus.NOT_FOUND).send({
                message: 'Profile picture not found',
            }); // Explicitly handle not found
        }
        const imageBuffer = Buffer.from(profilePictureBase64, 'base64');
        res.writeHead(HttpStatus.OK, {
            'Content-Type': 'image/jpeg',
            'Content-Length': imageBuffer.length,
        });
        res.end(imageBuffer);
    }
}
