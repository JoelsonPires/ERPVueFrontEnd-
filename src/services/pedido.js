import Services from './services'

export default class pedido extends Services
{
  constructor()
  {
    super()
  }

  async getAll()
  {
    try
    {
      let response = await this._http.get(`pedidos`)
      return Promise.resolve(response)
    }
    catch(error)
    {
      return Promise.reject(error)
    }
	}
}
