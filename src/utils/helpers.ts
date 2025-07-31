export function generateInvoiceNumber(): string {
    return `INV-${Date.now()}`
}
