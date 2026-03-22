
/**
 * BePaid API client
 * @class
 */
export class BePaid {
  static #API_URL = 'https://merchant.bepaid.by/api';
  static #API_VERSION_HEADER = 'X-Api-Version';

  #shopId;
  #secretKey;

  constructor(shopId, secretKey) {
    this.#shopId = shopId;
    this.#secretKey = secretKey;
  }

  /**
   * Get paginated report about transactions.
   * https://docs.bepaid.by/ru/payment_management/reports/paginated_report/
   */
  async getTransactions(params) {
    // TODO: create axios instance with auth header and API version header

    // TODO: implement pagination request with retry logic for rate limits and network errors
  }
}

export const TransactionDateType = {
  CreatedAt: 'created_at',
  PaidAt: 'paid_at',
  SettledAt: 'settled_at',
}

export const TransactionStatus = {
  All: 'all',
  Successful: 'successful',
  Failed: 'failed',
  Pending: 'pending',
  Incomplete: 'incomplete',
};

export const PaymentMethodType = {
  CreditCard: 'credit_card',
  Alternative: 'alternative',
  Erip: 'erip',
}
