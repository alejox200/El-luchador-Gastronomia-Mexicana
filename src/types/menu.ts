export type CategoryId = 'entradas' | 'tacos' | 'fuertes' | 'postres' | 'cocteles' | 'especiales';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
}

export type DietaryTag = 'vegetariano' | 'picante' | 'gluten-free' | 'chef-choice' | 'nuevo';

export interface MenuItem {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: number; // Price in Quetzales (Q)
  category: CategoryId;
  image: string;
  tags?: DietaryTag[];
  spicinessLevel?: 1 | 2 | 3 | 4 | 5; // 1 = suave, 5 = muy picante
  isPopular?: boolean;
  isAvailable?: boolean;
  ingredients?: string[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

/**
 * Format any numerical price strictly in Guatemalan Quetzales (Q)
 * Example: formatQuetzales(85) -> "Q85"
 */
export function formatQuetzales(price: number): string {
  return `Q${price}`;
}
