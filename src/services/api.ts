import { DEMO_MENU_ITEMS, MENU_CATEGORIES } from '../data/menuData';
import { Category, MenuItem } from '../types/menu';
import { ReservationConfirmation, ReservationFormData } from '../types/reservation';

/**
 * Service Layer abstraction for El Luchador API
 * Prepared for easy future integration with Node.js/Express, Supabase, Firebase, or GraphQL
 */
export class RestaurantApiService {
  /**
   * Fetch all menu categories
   */
  static async getCategories(): Promise<Category[]> {
    // Simulate async network delay for realism
    await new Promise((resolve) => setTimeout(resolve, 100));
    return MENU_CATEGORIES;
  }

  /**
   * Fetch all menu items or filter by category
   */
  static async getMenuItems(categoryId?: string): Promise<MenuItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 150));
    if (!categoryId || categoryId === 'todos') {
      return DEMO_MENU_ITEMS;
    }
    return DEMO_MENU_ITEMS.filter((item) => item.category === categoryId);
  }

  /**
   * Submit a new table reservation
   */
  static async submitReservation(data: ReservationFormData): Promise<ReservationConfirmation> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const codeSuffix = Math.floor(1000 + Math.random() * 9000);
    const confirmationCode = `LUCH-${codeSuffix}`;

    const confirmation: ReservationConfirmation = {
      ...data,
      confirmationCode,
      status: 'confirmada',
      createdAt: new Date().toISOString(),
    };

    return confirmation;
  }

  /**
   * Submit an online order / cart checkout
   */
  static async submitOrder(orderData: {
    items: Array<{ menuItemId: string; name: string; quantity: number; price: number }>;
    totalAmount: number;
    customerName: string;
    customerPhone: string;
    deliveryType: 'dine_in' | 'takeout' | 'delivery';
    notes?: string;
  }): Promise<{ orderId: string; success: boolean; whatsappMessageUrl: string }> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

    // Build formatted message for WhatsApp
    let itemDetails = orderData.items
      .map((i) => `• ${i.quantity}x ${i.name} (Q${i.price * i.quantity})`)
      .join('%0A');

    const rawMessage = `¡Hola El Luchador! 🥊%0A%0AMi nombre es *${orderData.customerName}* y me gustaría hacer un pedido (*${orderData.deliveryType === 'delivery' ? 'A Domicilio' : 'Para Llevar'}*):%0A%0A${itemDetails}%0A%0A*Total: Q${orderData.totalAmount}*%0A%0AContacto: ${orderData.customerPhone}%0ANotas: ${orderData.notes || 'Sin observaciones'}`;

    const whatsappMessageUrl = `https://wa.me/50259593013?text=${rawMessage}`;

    return {
      orderId,
      success: true,
      whatsappMessageUrl,
    };
  }
}
