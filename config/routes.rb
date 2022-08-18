Rails.application.routes.draw do
  

  resources :users
  resources :songs
  
  post "/signup", to: "users#create"
  get '/me', to: 'users#show'  
  get '/user', to: 'users#show'
  get '/user/:id', to: 'users#index'
  delete '/user/:id', to: 'users#destroy'
  patch '/user/:id', to: 'users#update'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#logout'
  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end