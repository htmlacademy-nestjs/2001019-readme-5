export interface Mail {
  id?: string,
  user_id: string,
  address_from: string,
  address_to: string,
  title: string,
  body: string,
  sent_at: Date
}
