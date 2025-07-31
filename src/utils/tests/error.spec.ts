import {
    AppError,
    UnauthorizedError,
    BadRequestError,
    NotFoundError,
    ForbiddenError,
    InternalServerError,
    AllReadyExistError,
} from '../error'

describe('Custom Error Classes', () => {
    describe('AppError', () => {
        it('should create an AppError with default values', () => {
            const error = new AppError('Test error')

            expect(error).toBeInstanceOf(Error)
            expect(error).toBeInstanceOf(AppError)
            expect(error.message).toBe('Test error')
            expect(error.statusCode).toBe(500)
            expect(error.isOperational).toBe(true)
            expect(error.stack).toBeDefined()
        })

        it('should create an AppError with custom status code', () => {
            const error = new AppError('Test error', 400)

            expect(error.statusCode).toBe(400)
        })

        it('should create a non-operational AppError', () => {
            const error = new AppError('Test error', 500, false)

            expect(error.isOperational).toBe(false)
        })

        it('should maintain prototype chain', () => {
            const error = new AppError('Test error')

            expect(Object.getPrototypeOf(error)).toBe(AppError.prototype)
        })
    })

    describe('UnauthorizedError', () => {
        it('should create with default message', () => {
            const error = new UnauthorizedError()

            expect(error.message).toBe('Unauthorized')
            expect(error.statusCode).toBe(401)
            expect(error.isOperational).toBe(true)
        })

        it('should create with custom message', () => {
            const error = new UnauthorizedError('Custom message')

            expect(error.message).toBe('Custom message')
        })
    })

    describe('BadRequestError', () => {
        it('should create with default message', () => {
            const error = new BadRequestError()

            expect(error.message).toBe('Bad Request')
            expect(error.statusCode).toBe(400)
        })
    })

    describe('NotFoundError', () => {
        it('should create with default message', () => {
            const error = new NotFoundError()

            expect(error.message).toBe('Not Found')
            expect(error.statusCode).toBe(404)
        })
    })

    describe('ForbiddenError', () => {
        it('should create with default message', () => {
            const error = new ForbiddenError()

            expect(error.message).toBe('Forbidden')
            expect(error.statusCode).toBe(403)
        })
    })

    describe('InternalServerError', () => {
        it('should create with default message', () => {
            const error = new InternalServerError()

            expect(error.message).toBe('Internal Server Error')
            expect(error.statusCode).toBe(500)
        })
    })

    describe('AllReadyExistError', () => {
        it('should create with default message', () => {
            const error = new AllReadyExistError()

            expect(error.message).toBe('Allready Exist')
            expect(error.statusCode).toBe(409)
        })

        it('should correct the spelling to "Already Exist" (consider renaming class)', () => {
            // Note: This is just a suggestion - "Allready" is misspelled
            const error = new AllReadyExistError('Already Exist')
            expect(error.message).toBe('Already Exist')
        })
    })

    describe('Error Stack Trace', () => {
        it('should capture stack trace for AppError', () => {
            const error = new AppError('Test')
            expect(error.stack).toContain('Error: Test')
        })

        it('should capture stack trace for derived errors', () => {
            const error = new NotFoundError()
            expect(error.stack).toContain('NotFoundError: Not Found')
        })
    })
})
