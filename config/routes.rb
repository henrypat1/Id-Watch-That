Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users
  resources :movies do
    resources :reviews, only: :create
  end
  resources :reviews, except: :create 

  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
