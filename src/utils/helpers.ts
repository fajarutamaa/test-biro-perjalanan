import { DateTime } from 'luxon'

export function generateInvoiceNumber(): string {
    return `INV-${Date.now()}`
}

export function formatToIsoUtc7(date: Date | string): string {
    return DateTime.fromJSDate(typeof date === 'string' ? new Date(date) : date)
        .setZone('UTC+7')
        .toISO()
}
