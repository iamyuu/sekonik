import { Battery, Package, ShieldCheck, Wrench } from 'lucide-react'

export const APP_NAME = 'Sekonik'
export const APP_DESCRIPTION = 'A sleek and user-friendly e-commerce platform for selling and buying preloved electronics, designed to deliver a seamless shopping experience with a modern and intuitive UI.'

export const APP_EMAIL = 'info@sekonik.id'
export const APP_PHONE = '+6281234567890'
export const APP_ADDRESS = '123 Tech Street, Digital City, DC 10101'

export const APP_FEATURES = [
  {
    title: 'Certified Battery Health',
    description: 'All our devices undergo rigorous battery testing with minimum 80% capacity guaranteed.',
    icon: <Battery className="h-10 w-10" />,
  },
  {
    title: '90-Day Warranty',
    description: 'Every purchase is protected with our comprehensive 90-day warranty for peace of mind.',
    icon: <ShieldCheck className="h-10 w-10" />,
  },
  {
    title: 'Eco-Friendly Packaging',
    description: 'Sustainably packaged with recycled materials to reduce environmental impact.',
    icon: <Package className="h-10 w-10" />,
  },
  {
    title: 'Professional Refurbishing',
    description: 'Each device is meticulously cleaned, tested, and refurbished by certified technicians',
    icon: <Wrench className="h-10 w-10" />,
  },
]
