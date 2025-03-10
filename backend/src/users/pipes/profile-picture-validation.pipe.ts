import {
    ArgumentMetadata,
    BadRequestException,
    HttpStatus,
    ParseFilePipeBuilder,
    PipeTransform,
} from '@nestjs/common';

export class ProfilePictureValidationPipe
    implements PipeTransform<Express.Multer.File, Promise<Express.Multer.File>> {
    async transform(
        value: Express.Multer.File,
        metadata: ArgumentMetadata,
    ): Promise<Express.Multer.File> {
        if (!value) {
            throw new BadRequestException('No file uploaded'); // Or a more specific exception
        }
        const unsupportedFileTypeErrorMessage: (filetype: string) => string = (filetype: string) => `Unsupport media type ${filetype}`
        const fileValidationPipe = new ParseFilePipeBuilder()
            .addMaxSizeValidator({
                maxSize: 5 * 1024 * 1024,
                message: `File size is exeeding 5 MB`,
            }) // 5 MB
            .addFileTypeValidator({ fileType: /(jpg|jpeg|png)$/i })
            .build({
                errorHttpStatusCode: HttpStatus.UNSUPPORTED_MEDIA_TYPE,
            });
        try {
            return await fileValidationPipe.transform(value);
        } catch (error) {
            if (error.message && error.message.includes('Unsupported file type')) {
                throw new BadRequestException(unsupportedFileTypeErrorMessage(value.mimetype))

            }
            throw new BadRequestException(error.message);
        }
    }
}
