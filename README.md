ERP
======

Descrição
-----------

- Esse projeto possui o Back-End em laravel 7.0. ( https://github.com/JoelsonPires/ERPLaravelBackEnd.git)
- Esse projeto possui o Front-End em Vue.

Neste projeto foi utilizado o **VueJS** e **Vuetify** juntamento com **axios** para as requisições **HTTP**


Instalação Front-End
-----------------------

Após clonar o projeto, instale as dependências com o comando:
```bash
npm install
```

Após instalar as dependências, configure as variaveis de ambiente que se encontra no arquivo **.env**

As variaveis de ambiente sempre são carregas ao iniciar o servidor, caso tenha alguma alteração é necessário reiniciar o serviço.

Você irá configurar o **VUE_APP_API_URL** para informar a **url** do servidor que fornecerá as informações, no caso o **host** e **port**

Por padrão o **VUE_APP_API_URL** virá configurado com **VUE_APP_API_URL="http://localhost:8000/"** que é o padrão do projeto

Após configurado sua variavel de ambiente, inicie o projeto com o comando:
```bash
npm run serve
```

No terminal aparecerá o **host** e a **port** que o projeto está rodando, por padrão será **http://localhost:8080** caso você não tenha nenhum outro projeto rodando nesta porta.
