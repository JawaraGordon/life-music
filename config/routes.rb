Rails.application.routes.draw do
  resources :favorite_songs
  resources :playlists
  resources :users
  resources :songs
  
  post "/signup", to: "users#create"
  get '/me', to: 'users#show'  
  get '/users/:id/playlists', to: 'users#playlists'  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#logout'
  delete '/playlists', to: 'playlists#destroy'
  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end