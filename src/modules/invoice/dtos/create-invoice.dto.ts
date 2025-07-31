export type CreateTripInvoiceDTO = {
    trip_id: number
    invoice_no: string
    pay_type_id: bigint
    total_amount: number
    quantity: bigint
}
