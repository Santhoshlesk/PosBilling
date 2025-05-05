export interface MenuItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  image: string;
  inventory: number;
  category: string;
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
}

export interface InvoicePdf {
  company: Company
  client: Client
  invoice: Invoice
}

export interface Company {
  name: string
  address: string
  city: string
  country: string
  logo: string
}

export interface Client{
  name: string
  address: string
  city: string
  country: string
}

export interface Invoice {
  number: string
  date: string
  // dueDate: string
  items: OrderItem[]
  subtotal: number
  tax: number
  total: number
  notes: string
  terms: string
}

