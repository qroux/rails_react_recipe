Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'devise/index'
      get 'devise/create'
      get 'devise/show'
      get 'devise/destroy'
    end
  end
  devise_for :users
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      post 'recipes/create'
      get '/show/:id', to: 'recipes#show'
      delete '/destroy/:id', to: 'recipes#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
