Rails.application.routes.draw do
  resources :users
  resources :songs
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
