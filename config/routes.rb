Rails.application.routes.draw do
  resources :favorite_songs
  resources :playlists
  resources :users
  resources :songs
  
  post "/signup", to: "users#create"
  get '/me', to: 'users#show'  
  # get '/users', to: 'users#show'
  # get '/users/:id', to: 'users#index'
  # get '/playlists/:id/playlist', to: 'playlists#playlist'
  # get '/playlists', to: 'playlists#index'
  # delete '/user/:id', to: 'users#destroy'
  # patch '/user/:id', to: 'users#update'
  post '/login', to: 'sessions#create'
  # post '/playlists/:id', to: 'playlists#create'
  delete '/logout', to: 'sessions#logout'
  
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end