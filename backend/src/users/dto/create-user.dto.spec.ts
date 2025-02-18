import { CreateUserDto } from './create-user.dto';
import { validate } from 'class-validator';

describe('CreateUserDto', () => {
    it('should pass validation with valid inputs', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = 30;
        createUserDto.gender = 'male';
        createUserDto.email = 'john.doe@example.com';

        const errors = await validate(createUserDto);
        expect(errors.length).toBe(0);
    });

    it('should fail validation if firstName is empty', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = ''; // Empty
        createUserDto.lastName = 'Doe';
        createUserDto.age = 30;
        createUserDto.gender = 'male';
        createUserDto.email = 'john.doe@example.com';

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'firstName' && error.constraints && error.constraints.isNotEmpty)).toBeTruthy();
    });

    it('should fail validation if lastName is empty', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = ''; // Empty
        createUserDto.age = 30;
        createUserDto.gender = 'male';
        createUserDto.email = 'john.doe@example.com';

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'lastName' && error.constraints && error.constraints.isNotEmpty)).toBeTruthy();
    });

    it('should fail validation if age is not a number', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = NaN; // Not a number
        createUserDto.gender = 'male';
        createUserDto.email = 'john.doe@example.com';

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'age' && error.constraints && error.constraints.isNumber)).toBeTruthy();
    });

    it('should fail validation if age is less than 15', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = 10; // Below minimum
        createUserDto.gender = 'male';
        createUserDto.email = 'john.doe@example.com';

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'age' && error.constraints && error.constraints.min)).toBeTruthy();
    });

    it('should fail validation if age is greater than 120', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = 150; // Above maximum
        createUserDto.gender = 'male';
        createUserDto.email = 'john.doe@example.com';

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'age' && error.constraints && error.constraints.max)).toBeTruthy();
    });

    it('should fail validation if gender is empty', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = 30;
        createUserDto.gender = ''; // Empty
        createUserDto.email = 'john.doe@example.com';

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'gender' && error.constraints && error.constraints.isNotEmpty)).toBeTruthy();
    });

    it('should fail validation if gender is not in allowed enum', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = 30;
        createUserDto.gender = 'other'; // Invalid gender
        createUserDto.email = 'john.doe@example.com';

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'gender' && error.constraints && error.constraints.isIn)).toBeTruthy();
    });

    it('should pass validation if phoneNumber is optional and not provided', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = 30;
        createUserDto.gender = 'male';
        createUserDto.email = 'john.doe@example.com';
        // phoneNumber is not set

        const errors = await validate(createUserDto);
        expect(errors.length).toBe(0); // Should pass as phoneNumber is optional
    });

    it('should fail validation if email is empty', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = 30;
        createUserDto.gender = 'male';
        createUserDto.email = ''; // Empty

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'email' && error.constraints && error.constraints.isNotEmpty)).toBeTruthy();
    });

    it('should fail validation if email is not in email format', async () => {
        const createUserDto = new CreateUserDto();
        createUserDto.firstName = 'John';
        createUserDto.lastName = 'Doe';
        createUserDto.age = 30;
        createUserDto.gender = 'male';
        createUserDto.email = 'invalid-email'; // Invalid format

        const errors = await validate(createUserDto);
        expect(errors.length).toBeGreaterThan(0);
        expect(errors.some(error => error.property === 'email' && error.constraints && error.constraints.isEmail)).toBeTruthy();
    });
});
