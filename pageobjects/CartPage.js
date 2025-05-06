class CartPage {
  constructor(page) {
    this.cartProducts = page.locator("div li").first();
    this.checkout = page.locator("text=Checkout");
  }
  async VerifyProductIsDisplayed(productName) {
    await this.cartProducts.waitFor();
    const bool = await this.getProductLocator(productName).isVisible();
    expect(bool).toBeTruthy();
  }

  async checkout() {
    await this.checkout.click();
  }
  getProductLocator(productName) {
    return this.page.locator("h3:has-text('" + productName + "')");
  }
}
module.exports = { CartPage };
