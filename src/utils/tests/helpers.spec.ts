import { generateInvoiceNumber } from '../helpers'

describe('generateInvoiceNumber', () => {
    it('should generate an invoice number with INV prefix', () => {
        const invoiceNumber = generateInvoiceNumber()
        expect(invoiceNumber).toMatch(/^INV-/)
    })

    it('should include current timestamp in the invoice number', () => {
        const before = Date.now()
        const invoiceNumber = generateInvoiceNumber()
        const after = Date.now()

        const extractedTimestamp = parseInt(invoiceNumber.split('-')[1])
        expect(extractedTimestamp).toBeGreaterThanOrEqual(before)
        expect(extractedTimestamp).toBeLessThanOrEqual(after)
    })

    it('should generate unique invoice numbers for subsequent calls', () => {
        const invoice1 = generateInvoiceNumber()
        const invoice2 = generateInvoiceNumber()
        expect(invoice1).not.toBe(invoice2)
    })

    it('should have the correct format', () => {
        const invoiceNumber = generateInvoiceNumber()
        expect(invoiceNumber).toMatch(/^INV-\d{13}$/) // INV- followed by 13 digits (timestamp)
    })
})
