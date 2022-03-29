<template>
  <div>
    <h3>Lista de Produtos</h3>
    <v-card>
      <v-card-text>
        <v-data-table
          :headers="table.headers"
          :items="table.data"
          :loading="loading"
          loading-text="Carregando..."
          :items-per-page="20"
          :search="table.search"
        >
          <template v-slot:top>
            <v-row dense>
              <v-col cols="12" sm="12" md="6">
                <v-text-field v-model="table.search" placeholder="Procurar..." />
              </v-col>
            </v-row>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions>
        <v-pagination
          v-model="page"
          class="my-4"
          :length="totalPages"
          :total-visible="7"
          :disabled="loading"
          />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import PedidoService from '@/services/pedido'

export default {
  name: 'ListPedido',

  data() {
    return {
      loading: false,
      page: parseInt(localStorage.getItem('current_page')) || 1,
      totalPages: 0,

      table: {
        search: '',
				data: [],

        headers: [
					{
            text: 'ID',
            value: 'id'
          },{
            text: 'ArticleCode',
            value: 'ArticleCode'
          },{
            text: 'ArticleName',
            value: 'ArticleName'
          },{
            text: 'UnitPrice',
            value: 'UnitPrice'
          },{
            text: 'Quantity',
            value: 'Quantity'
          }
        ]
      }
    }
  },

  methods: {
    async PedidoProduto() 
    {
      try
      {
        this.loading = true
				this.table.data = []
        let response = await new PedidoService().getAll(this.page)
        this.table.data = response.data
        this.totalPages = response.data.total_pages
        localStorage.setItem('current_page', this.page)
      }
      catch(error)
      {
        console.error(error)
        this.$swal('', error.response.data.message, 'error')
      }
      finally
      {
        this.loading = false
      }
    }
  },

  mounted()
  {
    this.PedidoProduto()
  }
}
</script>

<style>

</style>
