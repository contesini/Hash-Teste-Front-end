# Hash Test Front End




### Estrutura do projeto
    .
    ├── ...
    ├── src                          # Source
    │   ├── service                  # Services    
    │   ├── views                    # Views
    │       ├── view-name          
    │           └── view-name.html   # View html source
    │           └── view-name.js     # View js source
    │           └── view-name.css   # View css source
    └── ...


### Trade-off

#### Uso de var ao invez de const
Por falta de compatibilidade de const em navagadores das versão ie 6-10 optei por utilizar var ao invez de const