import { getPortfolioItems } from "@/demo/portfolioitems";
import type { PortfolioItem } from "@/demo/portfolioitems";

export function getPortfolioItemById(slug: string): PortfolioItem | undefined {
  const portfolioItems = getPortfolioItems();
  return portfolioItems.find(item => item.id === slug);
}
