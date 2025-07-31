import { successResponse, createdResponse, errorResponse } from '../response'
import { Response } from 'express'

describe('Response Helpers', () => {
    let res: Partial<Response>
    let jsonMock: jest.Mock
    let statusMock: jest.Mock

    beforeEach(() => {
        jsonMock = jest.fn().mockReturnValue({ json: 'called' })
        statusMock = jest.fn().mockReturnValue({ json: jsonMock })
        res = {
            status: statusMock as any,
        }
    })

    describe('successResponse', () => {
        it('should return a successful JSON response with default code 200', () => {
            const data = { message: 'success' }
            successResponse(res as Response, data)

            expect(statusMock).toHaveBeenCalledWith(200)
            expect(jsonMock).toHaveBeenCalledWith({
                code: 200,
                status: 'OK',
                data,
            })
        })

        it('should allow custom status code and status message', () => {
            const data = { message: 'custom' }
            successResponse(res as Response, data, 202, 'Accepted')

            expect(statusMock).toHaveBeenCalledWith(202)
            expect(jsonMock).toHaveBeenCalledWith({
                code: 202,
                status: 'Accepted',
                data,
            })
        })
    })

    describe('createdResponse', () => {
        it('should return 201 response with message', () => {
            createdResponse(res as Response, 201, 'OK', 'User created')

            expect(statusMock).toHaveBeenCalledWith(201)
            expect(jsonMock).toHaveBeenCalledWith({
                code: 201,
                status: 'OK',
                Message: 'User created',
            })
        })
    })

    describe('errorResponse', () => {
        it('should return error response with default 500 code', () => {
            errorResponse(res as Response, 500, 'Internal Server Error', null)

            expect(statusMock).toHaveBeenCalledWith(500)
            expect(jsonMock).toHaveBeenCalledWith({
                code: 500,
                status: 'Internal Server Error',
                data: null,
            })
        })

        it('should allow custom error data and status', () => {
            const errorData = { message: 'something went wrong' }
            errorResponse(res as Response, 400, 'Bad Request', errorData)

            expect(statusMock).toHaveBeenCalledWith(400)
            expect(jsonMock).toHaveBeenCalledWith({
                code: 400,
                status: 'Bad Request',
                data: errorData,
            })
        })
    })
})
