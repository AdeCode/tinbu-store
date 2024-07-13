const appId = 'C1QM2VMM4YU6X2T'
const apiKey = 'b8a0a32817414de1a87f9ec9879a730c20240713120035379668'
const orgId = '1e97e9c14cf14543a5a072ba6bd3391e'

const URL = "https://api.timbu.cloud"
const BASE_URL = "https://timbu-get-all-products.reavdev.workers.dev"

const productsUrl = `${BASE_URL}/?organization_id=${orgId}&reverse_sort=false&page=1&size=10&Appid=${appId}&Apikey=${apiKey}`

// export const GET_PRODUCTS = () => `${BASE_URL}/products?organization_id=${orgId}&reverse_sort=false&page=2&size=10&Appid=${appId}&Apikey=${apiKey}`;
export const GET_PRODUCTS = () => `${productsUrl}`;
export const GET_PRODUCT = (id) => `https://timbu-get-single-product.reavdev.workers.dev/${id}/?organization_id=${orgId}&Appid=${appId}&Apikey=${apiKey}`;
