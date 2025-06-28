export interface IDatabase {
  getCheckoutUrl(priceId: string, userId: string): Promise<string>;
  getPortalUrl(): Promise<string>;
}
